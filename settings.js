
const fs = require('fs')
const chalk = require('chalk')

/*
⚙️ Owner SETTINGS  ⚙️
*/

//Owner Number & Name 
global.owner = ['94781708673'] //ur owner number
global.ownername = "Shashika Chirath Hansamala" //ur owner name

//Bot Name 
global.botname = 'ǫᴜᴇᴇɴ ɴᴇᴛʜᴜ' //ur bot name
global.wm = "ǫᴜᴇᴇɴ ɴᴇᴛʜᴜ" //ur watermark

global.keyopenai = "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",
//React Messages 
global.OWNER_REACT = '🥀' //Owner's Messages react emoji
global.AUTO_REACT = 'true' // React Messags auto


/*
BOT SETTINGS
*/

//Language English = 'EN' , Sinhala = 'SI' , Tamil= 'TL'
global.LANG = 'EN'

global.READ_MASSAGE = true

// enable desable Girls Voice Reply
global.VOICE_REPLY = true

// Do you want show time on your bio use "true" want desable use "false"
global.AUTO_BIO = false

// Inbox massage block PM block
global.INBOX_BLOCK = false

//Inbox Block MSG
global.INBOX_BLOCK_MSG = 'blockedd'

//Anti Bad word
global.ANTI_BADWORD = 'true'


global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 QUEEN NILU ²⁰²³'

// Menu imoji 
global.MENU_IMOJI = '🧚‍♂️|🧸'
//Time & Location
global.TIME_ZONE = 'Asia/Colombo'
global.location = "colombo, India, Aizawl" //ur location
//Song Download Message
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
// Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'

//SEX_VIDEO_DOWNLOAD
global.SEX_VIDEO_DOWNLOAD ='true'

//Kick Message 
global.KICK_MSG = ' ' 

//Links (URLS)
global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.linkz = "https://chat.whatsapp.com/" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/c/janithsadanuwan" //ur website to be displayed
global.botscript = 'https://github.com/janithsadanuwan/QueenNilu' //script link

//Alive 
global.alivelogo = process.env.ALIVE_LOGO || `https://te.legra.ph/file/a9293226a7c660ecbfffb.jpg`
global.alive = process.env.ALIVE_MESSAGE 

//Sticker Making 
global.packname = "ǫᴜᴇᴇɴ ɴᴇᴛʜᴜ 💃" 

//Anti Bad Word
global.ANTI_BADWORD = 'true'

//Antilink
global.antilink = 'true'


//OTHERS  
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)


global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.themeemoji ='💃'
//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'Wait Nethu bot processing...💃',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

//media target
global.thum = fs.readFileSync("./Media/bot.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Media/bot.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/bot.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/bot.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
