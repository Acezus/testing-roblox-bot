const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setGame(`I run for 24/7, Unless updates needed`);
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});

var prefix = '!';
function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

client.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    if(isCommand('Hello', message)){
	    message.reply('Move along!');
    }
	if(isCommand('Info', message)) {
	let embed = new Discord.RichEmbed()
    .setTitle("Help Panel")
    .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
    .setThumbnail(message.guild.iconURL)
    .setDescription("Look who needs help now. I'm only messing with ya! Should've saw your face. Anyway, commands are simple! Find any bugs? Direct message `Acezus#8392` and he should get it sorted out!")
    .addField("Prefix", "**Prefix:** $$")
    .addField("Commands", "**$$avatar** - To make this command work, make sure to mention someone.\n\n**$$help** - Using it right now.\n\n**$$server** - Will give you the infomation on the server! (members, regions, roles etc.)\n\n**$$userinfo** - You'll need to mention somewhere, to get their info, like what time they created the account.\n\n**$$followus** - A set of links to follow either Acezus or CanonOverseer.")
    .addField("Moderation Commands", "**$$ban** - This command is only used for moderators, a quicker way to ban someone. Need to mention and give a reason why.\n\n**$$kick** - This command is only used for moderators, a quicker way to ban someone. Need to mention and give a reason why.\n\n**$$sug** - Where you suggest on what you think should be added to the bot!\n\n **$$panel** - Still a work in progress command, but only Staff Members can use it!")
    .addField("CraneBot's Official Server", "Join us if you need help with anything: https://discord.gg/YFPmRH9");
    
    //Now we want it so it sends via DM!
    message.author.sendEmbed(embed)
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
