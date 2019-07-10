const Ad = require('../models/Ad')
const User = require('../models/User')
const Mail = require('../services/Mail')


class PurchaseController {
  async store (req, res) {
    const {ad, content} = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    await Mail.sendMail({
      from: '"Lucas Teste" <lucas@teste.com>',
      to: purchaseAd.author.email,
      subject: `Solitação de compra: ${purchaseAd.title}`,
      html:`<p>Teste ${content}</p>`
    })

  }
}


module.exports = new PurchaseController()
