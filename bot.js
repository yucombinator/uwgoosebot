const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: process.env.PAGE_TOKEN,
  verify: process.env.VERIFY_TOKEN,
  app_secret: process.env.APP_SECRET
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text
  reply({ text }, (err) => {
      // if (err) throw JSON.stringify(err, null, 4)

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
  })
//   bot.getProfile(payload.sender.id, (err, profile) => {
//     if (err) throw JSON.stringify(err, null, 4)
//   
//   })
})

http.createServer(bot.middleware()).listen(process.env.PORT || 3000)
console.log('Echo bot server running.')