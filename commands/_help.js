/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            react: "🧚‍♀️",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌එවැනි විධාන නැත..*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭────《 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 》─────⊷\n`
                str +=
                    '```' + `│ ╭───────✧🧚‍♀️❁🧚‍♀️✧───────«
🧚‍♀️╿ U͒s͒e͒r͒:- ${citel.pushName}
🧚‍♀️╿ T͒h͒e͒m͒e͒:- ${tlang().title}
🧚‍♀️╿ P͒r͒e͒f͒i͒x͒:- [ ${prefix} ]
🧚‍♀️╿ O͒w͒n͒e͒r͒:- ${Config.ownername}
🧚‍♀️╿ P͒l͒u͒g͒i͒n͒s͒:- ${commands.length}
🧚‍♀️╿ U͒s͒e͒r͒s͒:- ${total}
🧚‍♀️╿ U͒p͒t͒i͒m͒e͒:- ${runtime(process.uptime())}
🧚‍♀️╿ M͒i͒m͒:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
🧚‍♀️╿ T͒i͒m͒e͒:- ${time}
🧚‍♀️╿ D͒a͒t͒e͒:- ${date}
🧚‍♀️╿╰───────✧❁✧───────»
╰───────────────⊷\n
` + '```'
                str += `╭───『 ` + fancytext('Commands', 57) + `』──◆`
                for (const category in cmds) {
                    str += `
┃  ╭───────✧❁✧───────«
┃  │ ✯---- ${tiny(category)} ----⦿
┃  ╰┬──────✧❁✧───────»
┃  ┌┤\n`
                    for (const plugins of cmds[category]) {
                        str += `┃  │ ✭ ${plugins}\n`
                    }
                    str += `┃  ╰─────────────◆`
                }

                str += `\n╰━━━━━━━━━━━──⊷\n`
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general",
            react: "🧚‍"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += '```' + `
🧚‍♀️╭──────────────      
🧚‍♀️╿ User: ${citel.pushName}
🧚‍♀️╿ Theme: ${tlang().title}
🧚‍♀️╿ Prefix: ${prefix}
🧚‍♀️╿ Owner: ${Config.ownername}
🧚‍♀️╿ Commands: ${commands.length}
🧚‍♀️╿ Uptime: ${runtime(process.uptime())}
🧚‍♀️╿ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
🧚‍♀️╿  
🧚‍♀️╰──────────
╰━━━━━━━━━━━──⊷\n` + '```'
            str += `╭━━━━━━━━━━━────⊷\n`
            str += `┃ 🧚‍♀️ ╭─────────────\n`
            for (let i = 0; i < commands.length; i++) {
             if(commands[i].pattern==undefined) continue
                str += `┃ 🧚‍♀️ │ ➛ ${i+1}. ` + commands[i].pattern + '\n'
            }
            str += `┃ 🧚‍♀️ ╰─────────────\n`
            str += `╰━━━━━━━━━━━───⊷\n`
            return Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To check ping",
        category: "general",
        react: "👩‍🔧",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "👩‍🔧",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return await citel.reply(arr.join('\n'));


})
