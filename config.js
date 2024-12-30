//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347065530282";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUp4NCtKa0ZSQ3FzeUsxb2lLcnNUQnJkVDlCN2J5dHZ1ditXVXptVWprRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1Nidk8yUDEzT1lMMXpNOXBYWlZtcGFKMnVQVlZHbnhBL2dKNUUrSGtSYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSGxHMUI2SUhYTGtQRmlFbDRzZ2NNRU9ydzNnTURBbW5ESGNSOXdieEdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1clFFdVFyaURxTmtING9qTlFhS0Npb0FqdStIZmdwUE0vQm1MdVFSVVcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLR0RHMUttRU1ib24xSGpxckgvZ3JwY3IxTlJzVmNLS0Z0SVM2WGVvbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik41aDZFZ28wVjNUekRBZkl4U1c3VXhKNjMrUU02dDZPZUVrdkZtaWt1UU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05EVUNLOUJXOXpyYldZRW1rS213UnNGZ3ByYjlSUFppekNXMkozQlZrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTBQVGtYb203VGk0ZWRFNnZDb2dITmU0NlJyNWZ6TWhncXlwMExFdFN4MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpEcmtPSm9PcVhZWkFScTlhR2pPMjJKRnZYMUF1S2w5My8yaWE1TTFqbjhWWWhXMW5xUHZDSlRXeW9kNUlEOUZVZmFXTUtteVNMUXJ2K2dPU0l5TkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiI0NVZ6Y0h1bXUxeWVadzQwekt6Zk5GbUIrRXROT3dDdlpqc0tCS1hvS2F3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJERlBTSXYxd1Q1S2gzeXJwNmlfZjBBIiwicGhvbmVJZCI6IjRjNzFkNDAyLWZkZjUtNGUzNC04Y2ZlLWJkODBiNzFjMjM2YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCcXNXMHFOZXhLY1hYU1M2T2c1RzRvTitVdUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3FFWTRCdEFQNjZiWkVsRWFYNldHb2VKRTVZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlQ1RU5KRzdEIiwibWUiOnsiaWQiOiIyMzQ3MDY1NTMwMjgyOjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09lVnlld0hFTjI5eXJzR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImRITEVzMm4zb3FSUE5ZZXZLdDdCVTBtQStYRVVYUXZkMlFyTEpyemFPR2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IllEQ2t6ZjNUVzJ6MDN0aEVWcmpDQkFuUWxmcE8vREhSQ2RFMi8rMU9uZjBzSU5ORnAyVmFGYUNUV2N4VitjcnMwK21NUFhxUUZJQWI0Rk91VFlQbENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0TTZwWEs3NUYzb1h2UjBjWEtReFVXbmhubitjangzYnFjT01lQThwUHU2azNiSDZ2OHFHSHRXNnl2TVN6MzFrZlIybTNCc3pXZlRpYUVhS0dLRlREQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNjU1MzAyODI6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYUnl4TE5wOTZLa1R6V0hyeXJld1ZOSmdQbHhGRjBMM2RrS3l5YTgyamhuIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NTY1MDM1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU05UCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KING_DAVID™`",
  author: process.env.PACK_AUTHER || "KING_DAVID",
  packname: process.env.PACK_NAME || "KING_DAVID",
  botname: process.env.BOT_NAME || "KING_DAVID",
  ownername: process.env.OWNER_NAME || "KING_DAVID",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
