const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://media.discordapp.net/attachments/1221090089514434620/1319635830477951006/Dc_Gif.gif?ex=6775d763&is=677485e3&hm=837a3065fa249b2a63846ea84a0c2f4228384476c7f8f0f2366210cf7b819556&=",

  
                         ];
const smallpictureGede = [
  "https://cdn.discordapp.com/emojis/966116896405606420.gif?size=96&quality=lossless",
  
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['10 Things I Hate You'];

const randomTexts = [
    '🖤🤍I Hate You🖤🤍'


];

const randomtext3 = [
  
  'Youre selfish',
  'Youre jaded',
  'The dumbest Girl Ive dated',
  'Talk a big game til youre naked',
  'Only six seconds, and I had to fake it',
  'Youre toxic',
  'Cant trust you',
  'You still got mommy issues',
  'Two years of your bullshit, I cant undo', 
  'I hate the fact that you made me love you',



];

const randomtext4 = [
 '🤍★☆★☆★🖤', 
 '🖤☆★☆★☆🤍'



];

const randomtext5 = [];

const randomLinks = [
  "https://open.spotify.com/track/7I4XALvCb2VEmOCtGUe5uY?si=ec85bf3adaf54389",
];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getTimestampsForDay(year, month, day) {
  const date = new Date(Date.UTC(year, month, day));
  date.setHours(date.getHours() + 8);
  date.setUTCHours(0, 0, 0, 0);
  const timestampMidnight = date.getTime();
  date.setUTCHours(11, 59, 59, 999);
  const timestampEndOfDay = date.getTime();
  const ampmMidnight = date.getHours() < 12 ? 'AM' : 'PM';
  const ampmEndOfDay = date.getHours() < 12 ? 'AM' : 'PM';


  return {
    timestampMidnight,
    timestampEndOfDay,
    ampmMidnight,
    ampmEndOfDay
  };
}



app.all('/', (req, res) => {
  res.send("NOW GO TO uptimerobot.com AND PASTE THIS URL");
});

app.listen(8080, () => {
  console.log("Server is ready!!");
});

bot.on('debug', (a) => {
  if (a.startsWith("Hit a 429")) process.kill(1);
});

bot.on('ready', async () => {
  setInterval(() => {
    const date = new Date();
    const datee = date.getDate();
    const hours = (date.getHours() + 8) % 24;
    const minutes = date.getMinutes();
    const months = date.getMonth();
    const year = date.getFullYear();
    const timestamps = getTimestampsForDay(year, months, datee);
    function addZero(number) {
  return number < 10 ? "0" + number : number;
}

  function getRandomNumber() {
    return Math.random() * (30 - 20) + 20;
  }
  function getWRandomNumber() {
    return Math.random() * (5 - 3) + 3;
  }
  function roundToDecimal(number) {
    return Math.round(number * 10) / 10;
  }

  const randomNumber = getRandomNumber();
  const roundedNumber = roundToDecimal(randomNumber);
  const roundwNumber = roundToDecimal(getWRandomNumber());
    const month = addZero(months+1);
    const dates = addZero(datee)
    const resultthree = `〈 ${addZero(hours)}:${addZero(minutes)} ${hours < 12 ? 'AM' : 'PM'} 〉`;


    // Randomize the link and text for the button
    randomXX = getRandomElement(xxxx);
    rdpictureGede = getRandomElement(pictureGede);
    rdsmallpictureGede = getRandomElement(smallpictureGede);
    const randomButtonText = getRandomElement(randomTexts);
    const randomButtonText3 = getRandomElement(randomtext3);
    const randomButtonText4 = getRandomElement(randomtext4);
    const randomButtonText5 = getRandomElement(randomtext5);
    linkButtonone = getRandomElement(randomLinks);
    const detailsText = `${randomButtonText3} - ${resultthree}`;
    const pr = new RichPresence()  
      .setName(`CRAMMING`)
      .setURL('https://www.twitch.tv/mystiqu3x')
      .setType(`${type}`.toUpperCase())
      .setApplicationId("1159127696064905256")
      .setAssetsLargeImage(`${rdpictureGede}`)
      .setAssetsSmallImage(`${rdsmallpictureGede}`)
      .setAssetsLargeText(`
🌡${roundedNumber} °C ⋆ 🍃 ${roundwNumber} m/s`)
      .setAssetsSmallText(`ping: ${bot.ws.ping}ms`)
      .setState(`: ${randomXX}`)
      .setDetails(detailsText)
      .setStartTimestamp(timestamps.timestampMidnight)
      .setEndTimestamp(timestamps.timestampEndOfDay)
      .addButton(`${randomButtonText}`, `${linkButtonone}`)
      .addButton(`${randomButtonText4}`, `${linkButtonone}`)
    bot.user.setActivity(pr.toJSON());
  }, getRandomInt(1000, 3000));
  console.log(`${bot.user.tag} Status is showed up !!`);
});

bot.login(process.env['TOKEN']);
