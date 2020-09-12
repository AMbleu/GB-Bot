//***************************************************************************
// Discord Bot
//Language: JavaScript
//Purpose: To troll friends and a good laugh
//Author: Alejadnro Martinez
//Contributors:
//Date Created: 9/12/202
//*************************************************************************** */
require('dotenv').config();
const { Client } = require('discord.js');

const bot = new Client;

//Logs that the bot is logged in and running
bot.on('ready', () => {
    console.log('GB Bot has Logged in');
});

//Watches for a message sent in the server
bot.on('message', (message) => {
    if (message.author.bot) return; //Prevents the bot from responding to other bots
    console.log(`${message.author.tag}`);
    const GBProb = Math.floor(Math.random() * 2);
    console.log(GBProb);
    //If the person user is Juan then it sends the message get better.
    if(message.author.tag === 'avila_728#7493' && GBProb == 1){
        message.channel.send(`${message.author} Get Better!`);//Sends message to chat that the message was sent in
        message.member.send('You will never be as good as Ye and Alejandro or Edgar!'); //DM the user a message.
    }
})

bot.login(process.env.Troll_Bot);//Logs the bot online