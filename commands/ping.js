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

//---------------------------------------------------------------------------
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        await citel.reply('```💗🎧testing Ping!!!```');
        var final = new Date().getTime();
        return await citel.reply('*❤😩📎Pong*\n *' + (final - inital) + ' ms* ');
    }
);
