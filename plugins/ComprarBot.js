// Créditos A Niño Piña
let handler = async (m, { conn }) => {
// No Quites Los Créditos🦌
m.react('🪷');
// Mensaje que se enviará
const message = "〔⛄ *LEVI - BOT* ❄️〕\n\n> *🦌FELIZ NAVIDAD🎄*\n\n*BOT PARA GRUPO* :\n> wa.me/584241836217\n\n*BOT PERZONALIZADO* :\n> wa.me/584241836217";
if (m, rcanal) {
// Feliz Navidad🎄
const imageUrl = 'https://files.catbox.moe/sexx1t.jpg';
try {
// Que No Quites Los Créditos😑
// Te Estoy Viendo😑
await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: message, mimetype: 'image/jpeg' }, { quoted: fkontak });
} catch (error) {
console.error('Error al enviar el mensaje:', error);
}
}
}
handler.help = ['comprar'];
handler.tags = ['main'];
handler.command = ['comprar'];
export default handler;