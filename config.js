const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_59_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY2LFxuICAgICAgICA1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkwLFxuICAgICAgICA0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDQwLFxuICAgICAgICA2LFxuICAgICAgICAzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDgwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDkyLFxuICAgICAgICA1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDQyLFxuICAgICAgICAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY4LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDU4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI5LFxuICAgICAgICA4NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2LFxuICAgICAgICA1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjc5M3RTaEtHY2dVcWt6QUtKZUl2TWVHQUg1TjNzaUxQWVZibTZnaUtJY009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhxdnRFdTVSVF9LazRlVlRJUjFoZUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGZhMDY4ZGQtNjJhNi00ZTQ0LThhMDItNDY0ODAwNWI0NjUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMTAyLFxuICAgICAgMSxcbiAgICAgIDQyLFxuICAgICAgMTAxLFxuICAgICAgMTMyLFxuICAgICAgMjI4LFxuICAgICAgMjIyLFxuICAgICAgODUsXG4gICAgICAyMzUsXG4gICAgICAyMTgsXG4gICAgICA5MSxcbiAgICAgIDEwNSxcbiAgICAgIDEyNyxcbiAgICAgIDEzNSxcbiAgICAgIDU4LFxuICAgICAgMjIwLFxuICAgICAgMzUsXG4gICAgICAyMTYsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgMjUsXG4gICAgICAxMzIsXG4gICAgICAxOCxcbiAgICAgIDEwOCxcbiAgICAgIDYyLFxuICAgICAgNDQsXG4gICAgICAxODQsXG4gICAgICAyNTAsXG4gICAgICAxOTgsXG4gICAgICA0MixcbiAgICAgIDg5LFxuICAgICAgMjQ1LFxuICAgICAgMTgyLFxuICAgICAgMzIsXG4gICAgICAxNTUsXG4gICAgICAxOTksXG4gICAgICAxNjYsXG4gICAgICAyMzUsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVENIQkxWNVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjU2NjE5NTk6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJMVVJEQkVFXCIsXG4gICAgXCJsaWRcIjogXCI3MzM1NDI0OTgwNTgzNTo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVFJ6Y0VGRU5tbW9yb0dHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJrZXhlVktXQWlwZCtwdWM5N21HcUFRd0VtTFRGY2hsV2VWZVppdmFlbjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS3JqRWpoWVdOd1kwdERFQTdzUDJBZi9Lc1Q0SXRJYkowWU5kWjR6NTF2VnhocVU3WFRJRVM5S1lNcUM2dExVdm12QUZkYm81M2lJM2JQbkt4SFhlQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWXh1ajZuRW5GT3N5T1FjaWhHYTRwOFdKZitzUU1vRlNONy9qMXRNMmc4MHpqcVlvd2lKZk5tYUpFZ1VUdHZsYjZ3UUtDOTMwMzBEb055dkw2TldoaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NTY2MTk1OTo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjgwOTU2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx6WVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHpZLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
