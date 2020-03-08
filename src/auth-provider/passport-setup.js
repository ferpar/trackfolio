export default function makePassportSetup({ usersDb, sessionSetup, passport, LocalStrategy, bcrypt }) {
  return async function passportSetup( server ) {

    await sessionSetup(server)

    const passwordStrat = await new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password"
      },
      async (username, password, done) => {
        console.log("STRATEGY")
        const foundUser = await usersDb.findByUsername( {username} )
        if (!foundUser) {
          done(null, false, { message: "user not found"})
        }
        if (!bcrypt.compareSync(password, foundUser.password)) {
          done(null, false, { message: "wrong password" })
        }
        done(null, foundUser)
      }
    )
    passport.use("user-local", passwordStrat)


    passport.serializeUser( (loggedInUser, done) => {
      done(null, loggedInUser.id)
    })

    await passport.deserializeUser( async (userIdFromSession, done) => {
      const deserializedUser = await usersDb.findById( userIdFromSession )
        .catch( err => { 
          console.error("[Passport Setup] error finding user by Id @usersDb", err)
          done(err)
        })
      done( null, deserializedUser)
    })

    server.use(passport.initialize())
    server.use(passport.session())

  }
}
