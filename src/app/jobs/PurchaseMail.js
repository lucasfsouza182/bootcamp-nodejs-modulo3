const Mail = require('../services/Mail')

class PurchaseMail {
  get key () {
    return 'Purhcase'
  }

  async handle (job, done) {
    const { ad, user, content } = job.data

    await Mail.sendMail({
      from: '"Lucas Teste" <lucas@teste.com>',
      to: ad.author.email,
      subject: `Solitação de compra: ${ad.title}`,
      template: 'purchase',
      context: { user, content, ad }
    })

    return done()
  }
}

module.exports = new PurchaseMail()
