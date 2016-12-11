var reload = require('require-reload'),
	_Logger = reload('../utils/Logger.js'),
	logger;

module.exports = function(bot, _settingsManager, config, guild) {
	if (logger === undefined)
		logger = new _Logger(config.logTimestamp);
	logger.logWithHeader('JOINED GUILD', 'bgGreen', 'black', `${guild.name} owned by ${guild.members.get(guild.ownerID).user.username}`);
	if (config.bannedGuildIds.includes(guild.id)) {
		logger.logWithHeader('LEFT BANNED GUILD', 'bgRed', 'black', guild.name);
		guild.leave();
	} else
		guild.defaultChannel.createMessage("Hi, I'm Megu!\nYou can find my commands by doing !help \nYou can get more information about me by doing !about");
}
