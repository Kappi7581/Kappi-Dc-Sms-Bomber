const colors = require('colors');
const title = require('./modules/title.js');
const { Client, Collection, Discord, ActivityType } = require('discord.js');
const client = new Client({ intents: 32767 });
title('Welcome');

require("./loader.js")(client);

client.on('ready', () => {
    console.log(`${client.user.tag} You are logged in as!`.green);
    client.user.setPresence({ activities: [{ name: 'Kappi SMS Bomber', type: 0 }], status: 'idle' });
});

client.login('').catch(() => console.log('Check the Token'.red));
