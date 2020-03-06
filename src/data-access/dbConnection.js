export default function makeDbConnector({mongoose}) {
  return async function connectToDB() {

    const connectionOpts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    mongoose.connect(process.env.DBURL, connectionOpts) 
    .catch(err => console.error("[Data-Accessor] error connecting to mongo", err)) 
  }
}
