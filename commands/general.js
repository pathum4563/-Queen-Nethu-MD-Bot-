/**
█▀█ █░█ █▀▀ █▀▀ █▄░█   █▄░█ █▀▀ ▀█▀ █░█ █░█   █▀▄▀█ █▀▄   █▄▄ █▀█ ▀█▀
▀▀█ █▄█ ██▄ ██▄ █░▀█   █░▀█ ██▄ ░█░ █▀█ █▄█   █░▀░█ █▄▀   █▄█ █▄█ ░█░

 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : QueenNethu-Md
 * @author : MR.Hansamala <https://github.com/mrhansamala>
 * @description : Nethu,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { tlang, botpic,cmd, prefix, runtime,Config } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
cmd({
        pattern: "chat",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii,QuenNethu>',
        filename: __filename,
    },
    async(Void, citel,text) => {
        let zx = text.length;
        if (zx < 8) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
        }
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: Config.OPENAI_API_KEY || "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",
        });
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SamPandey001/Secktor-Md')
        let cap = `╭═════╍╍╍╍╍╍╍╍╍╍═══════°
*╎ 💕 𝑄𝛯𝛯𝛮 𝛮𝛯𝑇𝛨𝑈 𝛭𝐷💕*
*╎ ✶✶✶✶✶✶✶═╍═╍═╍═✶✶✶✶✶✶✶*
*╽🤓 🄷🄴🅈* ${citel.pushName}\n
*╿✨:🅃🄾🅃🄰🄻 🅂🅃🄰🅁🅂 :* ${data.stargazers_count} stars
*╽👑🄶🄾🅁🄺🅂 :* ${data.forks_count} forks
*╿🔥 🅁🄴🄿🄾 :* Cᴏᴍᴍɪɴɢ Sᴏᴏɴ/Rᴇᴘᴏ
*╽🥏 🄶🅁🄾🅄🄿:* Cᴏᴍᴍɪɴɢ Sᴏᴏɴ/Sᴜᴘᴘᴏʀᴛt
*╿👨🏻‍💻 🄱🄾🅃 🄾🅆🄽🄴🅁:*-
 MR.Hᴀɴꜱᴀᴍᴀʟᴀ
*╽🌟:🅆* 𝒐𝒓𝒍𝒅 *🄱* 𝒆𝒔𝒕 *🅆* 𝒉𝒕𝒔𝒂𝒑𝒑 *🄱* 𝒐𝒕 
*╿🇱🇰 *🄼* 𝒂𝒅𝒆 *🄱* 𝒚 *🅂* 𝒓𝒊 *🄻* 𝒂𝒏𝒌𝒂
*╎ ✶✶✶✶✶✶✶═╍═╍═╍═✶✶✶✶✶✶✶*
*┊  🪢𝙿𝚘𝚠𝚎𝚛𝚍 𝙱𝚢 𝙽𝚎𝚝𝚑𝚞 𝙼𝚍 𝚃𝚎𝚊𝚖*
*╰═════╍╍╍╍╍╍╍╍╍╍═══════°*`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "Secktor-Repo",
                    body: "Easy to Use",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
🔰 *${tlang().title}* 🔰
*🌟Description:* A WhatsApp bot with rich features, build in NodeJs to make your WhatsApp enjoyable.
*⚡Speed:* ${latensie.toFixed(4)} ms
*🚦Uptime:* ${runtime(process.uptime())}
*🕸Version:* 1.0.0
*👤Owner:*  ${Config.ownername}
*Powered by ${tlang().title}*
`;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `Bot-Status`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
