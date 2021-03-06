const { Command } = require('discord.js-commando');
const bup = require('../../config');

module.exports = class ToggleLogs extends Command {
    constructor(client) {
        super(client, {
            name: 'toglogs',
            group: 'administration',
            memberName: 'toglogs',
            description: 'Toggles logging in case a log bot goes offline.',
            userPermissions: ['ADMINISTRATOR'],
            clientPermissions: ['EMBED_LINKS'],
            guildOnly: true,
            hidden: true
        });
    }

    run(message) {
        message.delete();
        bup.toggleLogging(!bup.logging);
        if (bup.logging) {
            message.reply('I have started logging things now.');
        }
        else {
            message.reply('I have stopped logging things.');
        }
    }
};