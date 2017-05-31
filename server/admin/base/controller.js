const conf = require('../../../src/config/page.json')
const returnMsg = require('../../return.msg')
const fs = require('fs')

exports.getTitle = (req, res) => {
  returnMsg.success200RetObj(res, conf.base)
}

exports.putTitle = (req, res) => {
  conf.base.title = req.body.title
  conf.base.meta = req.body.meta
  fs.writeFile('./src/config/page.json', JSON.stringify(conf), 'utf8', (err) => {
    if (err) { returnMsg.error500Server(res, err) }
    returnMsg.success200(res)
  })
}
