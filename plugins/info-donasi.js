import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let pp = fs.readFileSync('./thumbnail.jpg')
await conn.reply(m.chat, `Kamu bisa donasi di nomor dibawah ini

Indosat : 085869074622 
Tree : 0895333501279`, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 2023, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `Simple WhatsApp Bot`, orderTitle: 'ZansLord', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
await apivisit
}
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
export default handler