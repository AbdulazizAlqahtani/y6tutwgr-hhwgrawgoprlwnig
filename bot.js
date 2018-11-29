const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "515429310991958016"; // ايدي السررفر
var channel = "516904167248494602";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo , ')
    },305);
})

client.login(process.env."NTE3MzQwMjgxNTU3ODc2NzU3.DuF0ig.bMS_o4QJTNVEyctgW08yfHTkoEs");
