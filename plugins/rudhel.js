//modified @ princerudh 
	

const Rudh = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Rudh.addCommand({pattern: 'help', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'MENU \n\n\n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n      ☆ ~ɪᴛsᴍᴇ ʀᴜᴅʜʀᴀ~ ☆ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟ \n ┣⍟👾 *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : ᴘʀɪɴᴄᴇ ʀᴜᴅʜ \n ┣⍟👾 *ʙᴏᴛ* : ☚⃟፝༄ʀᴜᴅʜʀᴀ☚⃟፝࿐ \n ┣⍟👾 *ᴠᴇʀsɪᴏɴ* : 3.0 \n ┣⍟👾 *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ \n ┣⍟👾 *ᴘʀᴇғɪx* : [ . ] \n ┣⍟ \n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎\n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎ \n ┣⍟         ₢ᴘʀɪɴᴄᴇ ʀᴜᴅʜ𖨆 \n ┣⍟ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟        ◩ *ᴍᴇɴᴜ* ◪ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟ \n ┣⍟ ✩[ *ᴍᴇᴅɪᴀ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .sᴏɴɢ \n ┣⍟𝕾⃝⚙️ .ᴠɪᴅᴇᴏ \n ┣⍟𝕾⃝⚙️ .ɪɴsᴛᴀ \n ┣⍟𝕾⃝⚙️ .ʏᴛ \n ┣⍟𝕾⃝⚙️ .ғɪɴᴅ \n ┣⍟𝕾⃝⚙️ .sɪɴɢ \n ┣⍟ \n ┣⍟ ✩[ *ᴄᴏɴᴠᴇʀᴛ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ɢɪғ \n ┣⍟𝕾⃝⚙️ .ᴍᴘ3 \n ┣⍟𝕾⃝⚙️ .ᴍᴘ4 \n ┣⍟𝕾⃝⚙️ .ᴜɴᴠᴏɪᴄᴇ \n ┣⍟𝕾⃝⚙️ .ᴛᴛs \n ┣⍟𝕾⃝⚙️ .ɪᴍɢ \n ┣⍟𝕾⃝⚙️ .sᴛɪᴄᴋᴇʀ \n ┣⍟𝕾⃝⚙️ .ᴀᴛᴛᴘ \n ┣⍟𝕾⃝⚙️ .ᴛᴛᴘ \n ┣⍟𝕾⃝⚙️ .ғᴀᴛᴘ \n ┣⍟𝕾⃝⚙️ .ᴄᴏᴅᴛᴛᴘ \n ┣⍟𝕾⃝⚙️ .ᴘʜᴏᴛᴏ \n ┣⍟𝕾⃝⚙️ .ɪᴍɢ \n ┣⍟𝕾⃝⚙️ .ᴊɪᴅ \n ┣⍟𝕾⃝⚙️ .ʙʀᴅᴍᴏʀᴇ \n ┣⍟𝕾⃝⚙️ .ʀᴅᴍᴏʀᴇ \n ┣⍟𝕾⃝⚙️ .ᴅᴇᴛᴇᴄᴛʟᴀɴɢ \n ┣⍟𝕾⃝⚙️ .ᴄᴜʀʀᴇɴᴄʏ \n ┣⍟𝕾⃝⚙️ .sᴡᴇᴀᴛʜᴇʀ \n ┣⍟𝕾⃝⚙️ .ᴡᴀᴍᴇ \n ┣⍟𝕾⃝⚙️ .ᴄᴀʟᴄ \n ┣⍟ \n ┣⍟ ✩[ *ᴍᴀᴋᴇʀ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .xᴍᴇᴅɪᴀ \n ┣⍟𝕾⃝⚙️ .ᴄᴀʀʙᴏɴ \n ┣⍟𝕾⃝⚙️ .ғғɪʀᴇ \n ┣⍟𝕾⃝⚙️ .ᴇᴍᴏ \n ┣⍟𝕾⃝⚙️ .ᴍᴏʀᴇᴛxᴛ \n ┣⍟𝕾⃝⚙️ .ᴍᴍᴘᴀᴄᴋ \n ┣⍟𝕾⃝⚙️ .ᴍᴀᴋᴇʀᴍᴇɴᴜ \n ┣⍟𝕾⃝⚙️ .ᴛxᴛɪᴛ \n ┣⍟𝕾⃝⚙️ .ʀᴀɴᴅᴏᴍ \n ┣⍟𝕾⃝⚙️ .ɢᴅᴍʀɴɢ \n ┣⍟𝕾⃝⚙️ .ɢᴅɴɪ8 \n ┣⍟ \n ┣⍟ ✩[ *ғᴜɴ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ᴀᴅᴀɴ \n ┣⍟𝕾⃝⚙️ .ᴊᴏᴋᴇ \n ┣⍟𝕾⃝⚙️ .ᴍᴏʟᴜ \n ┣⍟𝕾⃝⚙️ .ᴍᴇᴍᴇ \n ┣⍟𝕾⃝⚙️ .ǫʀ \n ┣⍟𝕾⃝⚙️ .ᴀɴɪᴍᴇsᴀʏ \n ┣⍟𝕾⃝⚙️ .ᴄʜᴀɴɢᴇsᴀʏ \n ┣⍟𝕾⃝⚙️ .ᴛʀᴜᴍᴘsᴀʏ \n ┣⍟𝕾⃝⚙️ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ \n ┣⍟ \n ┣⍟ ✩[ *sᴄʀᴇᴄʜ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ᴡɪᴋɪ \n ┣⍟𝕾⃝⚙️ .ɴᴇᴡs \n ┣⍟𝕾⃝⚙️ .ᴄᴏᴠɪᴅ \n ┣⍟𝕾⃝⚙️ .ʟʏʀɪᴄ \n ┣⍟𝕾⃝⚙️ .sʜᴏᴡ \n ┣⍟𝕾⃝⚙️ .ᴍᴏᴠɪᴇ \n ┣⍟𝕾⃝⚙️ .ᴡᴇᴀᴛʜᴇʀ \n ┣⍟𝕾⃝⚙️ .ᴅɪᴄᴛ \n ┣⍟𝕾⃝⚙️ .sʜᴏʀᴛ \n ┣⍟𝕾⃝⚙️ .sᴄᴀɴ \n ┣⍟ \n ┣⍟ ✩[ *ᴛᴀɢ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ᴛᴀɢᴀʟʟ \n ┣⍟𝕾⃝⚙️ .ᴛᴀɢᴀᴅᴍɪɴ \n ┣⍟ \n ┣⍟ ✩[ *ᴏᴛʜᴇʀ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ᴀɴɪᴍᴇ \n ┣⍟𝕾⃝⚙️ .ᴡᴀʟʟᴘᴀᴘᴇʀ \n ┣⍟𝕾⃝⚙️ .ss \n ┣⍟𝕾⃝⚙️ .ᴛʀᴛ \n ┣⍟𝕾⃝⚙️ .ʀᴇᴍᴏᴠᴇʙɢ \n ┣⍟𝕾⃝⚙️ .ᴀᴘᴋᴍᴏᴅ \n ┣⍟𝕾⃝⚙️ .ʜᴍᴏᴅ \n ┣⍟𝕾⃝⚙️ .ɴᴏᴛᴇs \n ┣⍟𝕾⃝⚙️ .sᴀᴠᴇ \n ┣⍟𝕾⃝⚙️ .ᴅᴇʟᴇᴛᴇɴᴏᴛᴇs \n ┣⍟𝕾⃝⚙️ .ɪɴsᴜʟᴛ \n ┣⍟𝕾⃝⚙️ .ǫᴜᴏᴛᴇ \n ┣⍟𝕾⃝⚙️ .sʏsᴅ \n ┣⍟𝕾⃝⚙️ .ᴡᴇᴀᴛʜᴇʀ \n ┣⍟𝕾⃝⚙️ .sᴘᴇᴇᴅᴛᴇsᴛ \n ┣⍟ \n ┣⍟ ✩[ *ɢʀᴏᴜᴘ ᴄᴍɴᴅs* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ᴀᴅᴅ \n ┣⍟𝕾⃝⚙️ .ʙᴀɴ \n ┣⍟𝕾⃝⚙️ .ᴘʀᴏᴍᴏᴛᴇ \n ┣⍟𝕾⃝⚙️ .ᴅᴇᴍᴏᴛᴇ \n ┣⍟𝕾⃝⚙️ .ᴡᴇʟᴄᴏᴍᴇ \n ┣⍟𝕾⃝⚙️ .ɢᴏᴏᴅʙʏᴇ \n ┣⍟𝕾⃝⚙️ .ᴍᴜᴛᴇ \n ┣⍟𝕾⃝⚙️ .ᴜɴᴍᴜᴛᴇ \n ┣⍟𝕾⃝⚙️ .ʀᴇɴᴀᴍᴇ \n ┣⍟𝕾⃝⚙️ .ɪɴᴠɪᴛᴇ \n ┣⍟𝕾⃝⚙️ .ᴀɴᴛɪʟɪɴᴋ \n ┣⍟𝕾⃝⚙️ .ᴛʜᴇʀɪ [ɴᴏ-ʏᴇs] \n ┣⍟𝕾⃝⚙️ .ᴛᴇʀɪ [ᴄᴍɴᴅ,ᴄᴍɴᴅ] \n ┣⍟𝕾⃝⚙️ .ʀᴇᴘᴏʀᴛ \n ┣⍟𝕾⃝⚙️ .ʀᴇsᴇᴛ ᴡᴀʀɴ \n ┣⍟𝕾⃝⚙️ .ᴡʜᴏɪs \n ┣⍟ \n ┣⍟ ✩[ *ᴏᴡɴᴇʀ ᴄᴍɴᴅs* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ᴜᴘᴅᴀᴛᴇ \n ┣⍟𝕾⃝⚙️ .ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ \n ┣⍟𝕾⃝⚙️ .ғᴜʟʟᴇᴠᴀ \n ┣⍟𝕾⃝⚙️ .ᴀᴜᴛᴏʙɪᴏ \n ┣⍟𝕾⃝⚙️ .sᴇᴛᴠᴀʀ \n ┣⍟𝕾⃝⚙️ .ᴅᴇʟᴠᴀʀ \n ┣⍟𝕾⃝⚙️ .ᴀʟʟᴡᴀʀ \n ┣⍟𝕾⃝⚙️ .ʙɢᴍ [ᴏɴ-ᴏғғ] \n ┣⍟𝕾⃝⚙️ .sᴛɪᴄᴋᴇʀ [ᴏɴ-ᴏғғ] \n ┣⍟𝕾⃝⚙️ .sᴜᴅᴏ \n ┣⍟𝕾⃝⚙️ .ᴄᴀᴘᴛɪᴏɴ \n ┣⍟𝕾⃝⚙️ .ʜᴀɴᴅʟᴇʀs \n ┣⍟𝕾⃝⚙️ .ʙᴏᴛɴᴀᴍᴇ \n ┣⍟𝕾⃝⚙️ .ᴀ [ᴊɪᴅ] \n ┣⍟𝕾⃝⚙️ .ᴘɪɴɢ \n ┣⍟ \n ┣⍟ ✩[ *ᴍᴏʀᴇ ɪɴғᴏ* ]✩ \n ┣⍟ \n ┣⍟🎲 .ʟɪsᴛ \n ┣⍟🎲 .ᴏᴡɴᴇʀ \n ┣⍟🎲 .ɢɪᴛ \n ┣⍟🎲 .ᴀʟɪᴠᴇ \n ┣⍟ \n ┣⍟ ✩[ *ᴄʀᴇᴀᴛᴇʀ* ]✩ \n ┣⍟ \n ┣⍟👨🏻‍💻 ᴘʀɪɴᴄᴇ ʀᴜᴅʜ \n ┣⍟ \n ┣⍟    ❏ ʀᴜᴅʜʀᴀ ❏ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟      ◩ *ᴛʜᴀɴᴋ ʏᴏᴜ* ◪ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'XMEDIA \n\nXMEDIA COMMANDS ARE.\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc:Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc:Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc:Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc:Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc:Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc:Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc:Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc:Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc:Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc:Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc:Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\nℹ️Desc:Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc:Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc:Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc:Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc:  Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n🇬🇧 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n🇬🇧 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n🇬🇧 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.\n🇬🇧 Applies a art effect to the photo\n\n '}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'GIT \n\n```ᴄʀᴇᴀᴛᴇʀ : ᴘʀɪɴᴄᴇ ʀᴜᴅʜ```\n\n```owner number wa.me/919895809960```\n\n```bot making video https://youtu.be/zUGBjETc7PA```\n\n```whatsapp group https://chat.whatsapp.com/HVpTaTICeUi2G7hPlUlGUP```\n\n```github link https://github.com/prince-rudh/Rudhra2.0```\n\n```If there is an error deploying, try the following steps ```\n\n```1. If you dont have a github account create a account.  https://github.com/signup/```\n\n```2. Open the WhatsApp account where you want to create the bot and go into the link device and SCAN the QR code https://replit.com/@PrinceRudh/Rudhra-QR?v=1```\n\n```3. If You dont have a account in https://signup.heroku.com/ Create a account.```\n\n```4. You will have to fork this git to deploy via heroku.\nopen this link to fork the git into your account https://github.com/prince-rudh/Rudhra2.0/fork```\n\n```5. Now https://heroku.com/deploy?template=https://github.com/prince-rudh/Rudhra2.0 copy this url and change prince-rudh with your github username and click go```\n'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' ʜʏ ᴅᴜᴅᴇ....👋🏻\n\n         ☆ *ʙᴏᴛ ɪɴғᴏ* ☆\n\n👾 ɴᴀᴍᴇ  : ' + Config.BOTV2 + '\n👾 sᴛᴀᴛᴇs : ᴘᴜʙʟɪᴄ\n👾 ᴛɪᴍᴇ   : ```' + plk_say + '```\n👾 ᴅᴀᴛᴇ : ```' + plk_here + '```\n👾 ᴘᴇʀғɪx : [ . ]\n\n         ☆ *ᴄʀᴇᴀᴛᴇʀ* ☆\n\n👨🏻‍💻 ᴘʀɪɴᴄᴇ ʀᴜᴅʜ\n\n          ☆ *ᴛʜᴀɴᴋ ʏᴏᴜ* ☆\n\n👾 ᴄʟɪᴄᴋ ᴍᴇɴᴜ ᴀɴᴅ ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ\n',
          footerText: '₢ᴘʀɪɴᴄᴇ ʀᴜᴅʜ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: fs.readFileSync('P3R3R03.jpg'), surface: 200, message: Config.BOTV2, orderTitle: Config.BOTV2, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTV2 + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('P3R3R03.jpg')}}}});
	
}));
