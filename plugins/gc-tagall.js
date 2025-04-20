
const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }
  const pesan = args.join` `;
  const colombia = `🌕 *anuncio:* ${pesan}`;
  let teks = `🌕 *𝐓𝐞 𝐡𝐚𝐧 𝐢𝐧𝐯𝐨𝐜𝐚𝐝𝐨. 𝐍𝐨 𝐩𝐫𝐞𝐠𝐮𝐧𝐭𝐞𝐬, 𝐬𝐨𝐥𝐨 𝐯𝐞𝐧.*\n${colombia}\n\n┏ ☠︎︎ 𝐃𝐄𝐈𝐌𝐎𝐒 𝐁𝐎𝐓\n`;
  
  for (const mem of participants) {
    teks += `┋🌕@${mem.id.split('@')[0]}\n`;
  }
  
  teks += `┗ ${dev}`;

  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};

handler.help = ['tagall *<mensaje>*', 'invocar *<mensaje>*'];
handler.tags = ['grupo'];
handler.command = ['tagall', 'invocar', 'todos'];
handler.admin = true;
handler.group = true;
export default handler;