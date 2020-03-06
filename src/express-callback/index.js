module.exports = function makeExpressCallback(controller) {
  return (req, res) => {
    const httpRequest = {
      ...req,
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('Referer'),
        'User-Agent': req.get('User-Agent')
      }
    }
    controller(httpRequest)
      .then(httpResponse => {
        if(httpResponse.headers) {
          res.set(httpResponse.headers)
        }
        res.type('json')
        res.status(httpResponse.statusCode).send(httpResponse.body)
      })
      .catch(e => res.status(500).send({ error: 'an unknown Error occurred.' }))
  }
}
