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

const { tlang, botpic,cmd, prefix, runtime,Config } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
cmd({
        pattern: "chat",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii,Queen-Nethu>',
        react: "🎐",
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
        react: "🎊",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://github.com/shashikabot/-Queen-Nethu-MD-Bot-.git')
        let cap = `Hey ${citel.pushName}\n
*⭐ Total Stars:* ${data.stargazers_count} stars
*🍽️ Forks:* ${data.forks_count} forks
*🍁 Github:* https://github.com/shashikabot/-Queen-Nethu-MD-Bot-.git
*🧚‍♀️ Support Group:* https://chat.whatsapp.com/FIDbYbS7zCv9gssLWzTL3y
*🧛‍♂️ Deploy Your Own:*- MR>Hansamala
*☎️ Owner Number:*- 94781708673`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "Queen-Nethu-Repo",
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
        react: "🎉",
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
*🧬Powered by ${tlang().title}*
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
//---------------------------------------------------------------------------
cmd({
      pattern: 'welcome$',
    use: 'group',
    fromMe: true,
    desc: Lang.WELCOME_DESC
}, (async (message, match) => {
    var hg = await sql.getMessage(message.jid);
    if (hg === false) {
        await message.sendReply(Lang.NOT_SET_WELCOME);
    } else {
        await message.sendReply(Lang.WELCOME_ALREADY_SETTED + hg.message);
    }
}));
//---------------------------------------------------------------------------
cmd({
    pattern: 'welcome (.*)',
    fromMe: true,
    use: 'group',
    dontAddCommandList: true
}, (async (message, match) => {
    if (match[1] === 'delete') {
        await message.send(Lang.WELCOME_DELETED);
        return await sql.deleteMessage(message.jid, 'welcome');
    }
    await sql.setMessage(message.jid, 'welcome', match[1].replace(/&/g, '\n'));
    return await message.sendReply(Lang.WELCOME_SETTED)
}));
//---------------------------------------------------------------------------
cmd({
    pattern: 'goodbye$',
    fromMe: true,
    desc: Lang.GOODBYE_DESC,
    use: 'group'
}, (async (message, match) => {
    var hg = await sql.getMessage(message.jid, 'goodbye');
    if (hg === false) {
        await message.sendReply(Lang.NOT_SET_GOODBYE)
    } else {
        await message.send(Lang.GOODBYE_ALREADY_SETTED + hg.message);
    }
}));
//---------------------------------------------------------------------------
cmd({
    pattern: 'goodbye (.*)',
    fromMe: true,
    dontAddCommandList: true,
    use: 'group'
}, (async (message, match) => {
    if (match[1] === 'delete') {
        await message.sendReply(Lang.GOODBYE_DELETED);
        return await sql.deleteMessage(message.jid, 'goodbye');
    }
    await sql.setMessage(message.jid, 'goodbye', match[1].replace(/#/g, '\n'));
    return await message.send(Lang.GOODBYE_SETTED)
}));
