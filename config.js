/*
       RESMI DARI VALDEZOFFC [ D.E.V ]

  LARANGAN
 
- DI LARANG MEMPERJUAL SC VALDEZOFFC
- DI LARANG MEMPERBAGI SC VALDEZOFFC

JIKA MELANGGAR LARANGAN YANG DI BERIKAN VALDEZOFFC, YAPIT SE UMUR HIDUP + 7 TURUNAN

JANGAN LUPA SUPPORT

YOUTUBE : https://youtube.com/@ValdezOffc
CH TELE : https://t.me/ValdezOffc
CH PUBLIC : https://whatsapp.com/channel/0029VaiqJK9KGGGBvbFJsf2F

*/

global.prefa = ['','!','.',',','🐤','🗿'] 
// Setting Contact
global.namaown = "𝐙𝐈𝐈𝐗 𝐓𝐙𝐘 〽️"
global.namabot = "𝐙𝐈𝐈𝐗 𝐓𝐙𝐘 〽️"
global.versisc = "3.0"
global.owner = ["6281235056126"]
global.tele = "https://t.me/Skyziixsukatiwik"
global.url = "https://linktr.ee/skyziixoffcial"
global.namastore = "Ziix Tzy"

// Global Simbol
global.simbol = "ᯤ"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Global Respon
global.mess = {
    success: '𝗗𝗼𝗻𝗲 𝗕𝗿𝗼',
    admin: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !`,
    botAdmin: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !`,
    OnlyOwner: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Oleh Owner !`,
    OnlyGrup: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Di Group Chat !`,
    private: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Di Private Chat !`,
    wait: `\`[ # ]\` Wait Tunggu Sebentar`,
    notregist: `\`[ # ]\` Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu`,
    premium: `\`[ # ]\` khusus Premium" Mau Prem? Chat Owner`,
    endLimit: `\`[ # ]\` Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB`,
     bugrespon: `\`[ # ]\` 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
     𝘚𝘦𝘥𝘢𝘯𝘨 𝘔𝘦𝘯𝘨𝘪𝘳𝘪𝘮 𝘝𝘪𝘳𝘶𝘴 𝘈𝘵𝘵𝘢𝘤𝘬`,
     donebug: `\`[ # ]\` 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴
     𝘝𝘪𝘳𝘶𝘴 𝘚𝘶𝘥𝘢𝘩 𝘛𝘦𝘳𝘬𝘪𝘳𝘪𝘮`,
}


// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})