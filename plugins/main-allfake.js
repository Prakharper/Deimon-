import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

//creador y otros
global.creador = 'Wa.me/573143681055'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/573143681055'
global.namech = '˙˒𖥻˚𝐃𝐞𝐢𝐦𝐨𝐬𝐁𝐨𝐭 - 𝐂𝐡𝐚𝐧𝐧𝐞𝐥﹋꥟'
global.namechannel2 = '『✯ 𝗧𝗲𝗮𝗺 𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗗𝗲𝗶𝗺𝗼𝘀 ✯』'
global.namegrupo = 'シ︎ 𝗗𝗘𝗜𝗠𝗢𝗦𝗕𝗢𝗧🌕'
global.namecomu = '『𝗚𝗿𝘂𝗽𝗼 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 𝗟𝗲𝘃𝗶𝗕𝗼𝘁☠︎︎』'
global.namecomu2 = '𝗧𝗵𝗲𝗟𝗲𝘃𝗶𝗕𝗼𝘁'
global.colab1 = '𝗧𝗵𝗲𝗗𝗲𝗶𝗺𝗼𝘀𝗕𝗼𝘁'
global.colab2 = '𝗧𝗵𝗲𝗗𝗲𝗶𝗺𝗼𝘀𝗕𝗼𝘁'
global.colab3 = '𝗧𝗵𝗲𝗗𝗲𝗶𝗺𝗼𝘀𝗕𝗼𝘁'

//Reacciones De Comandos.!
global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'

//Emojis determinado de LeviBot
global.emoji = '🌕'
global.emoji2 = '🌕'
global.emoji3 = '🌕'
global.emoji4 = '🌕'
global.emoji5 = '🌕'
global.emojis = [emoji, emoji2, emoji3, emoji4, emoji5].getRandom()

//mensaje en espera
global.wait = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼 ...*';
global.waitt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼 ...*';
global.waittt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼 ...*';
global.waitttt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼...*';

//Enlaces
var canal =   'https://whatsapp.com/channel/0029Vb03dv95a23v1gG0gT24'  
var github = 'https://github.com/WillZek/CrowBot-ST' 
var facebook = 'https://www.facebook.com/profile.php?id=61571147640356' 
let instagram = 'https://www.instagram.com/harperprak?igsh=MWxlYnN3NXV0dnV2Mg=='

global.redes = [canal, github, facebook, instagram].getRandom()

//Imagen
let category = "imagen"
const db = './media/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//Fakes
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

//Id Channel
global.idchannel = '120363417664431319@newsletter'
global.canalIdM = ["120363417664431319@newsletter"]
global.canalNombreM = ["✯ 𝐃𝐞𝐢𝐦𝐨𝐬𝐁𝐨𝐭 - 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 ✯"]
global.channelRD = await getRandomChannel()
// global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "3876577197-120363302285079181@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${packname}`, orderTitle: 'Bang', thumbnail: icons, sellerJid: '0@s.whatsapp.net'}}}

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363371291001924@newsletter', newsletterName: "𝐓ꫀׁׅܻ݊ᥲm 𝐁ꭈׁׅіᧁׁhׁׅ֮𝗍  𝐌᥆᥆݊ꪀ", serverMessageId: -1 }
}}, { quoted: m }
  
global.icono = [ 
'https://files.catbox.moe/fqfijk.jpg',
'https://files.catbox.moe/fqfijk.jpg',
'https://files.catbox.moe/fqfijk.jpg',
'https://files.catbox.moe/fqfijk.jpg',
'https://files.catbox.moe/fqfijk.jpg',
'https://files.catbox.moe/fqfijk.jpg',
].getRandom()

global.urls = [
"https://qu.ax/vnPMj.mp4",
"https://qu.ax/vnPMj.mp4",
];
let gifUrl = urls[Math.floor(Math.random() * urls.length)];

const canalName = [
"⏤͟͟͞͞⋆⬪࣪ꥈ🌕★ ׄ ꒱ 𝐷𝑒𝑖𝑚𝑜𝑠𝑩𝒐𝒕 - 𝑺.𝑪.𝑨 ୭",
"𝐌𝐚𝐬𝐡𝐚 𝐇𝐨𝐬𝐭 🌕 ℍ𝕠𝕤𝕥𝕚𝕟𝕘"
].getRandom()
const randomCanalName =
canalName[Math.floor(Math.random() *
canalName.length)];

 const canalId = [
"120363368073378190@newsletter", "120363368073378190@newsletter"
].getRandom()

const randomCanalId = canalId[Math.floor(Math.random() * canalId.length)];

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: 100, newsletterName: channelRD.name, }, externalAdReply: { showAdAttribution: true, title: textbot, body: dev, mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdM.length)
let id = canalIdM[randomIndex]
let name = canalNombreM[randomIndex]
return { id, name }
}         