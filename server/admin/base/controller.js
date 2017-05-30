const conf = require('../../../src/config/page.json')
const fs = require('fs')

exports.getTitle = (req, res) => {
  res.send(conf.base)
}

exports.putTitle = (req, res) => {
  conf.base.title = req.body.title
  conf.base.meta = req.body.meta
  fs.writeFile('./src/config/page.json', JSON.stringify(conf), 'utf8', (err) => {
    if (err) { console.log(err) }
    res.send('ok')
  })
}
