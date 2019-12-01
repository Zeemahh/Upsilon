import './lib/env';
import { CommandoClient } from 'discord.js-commando';
import * as colors from 'colors';
import { join } from 'path';
import 'typescript';
import { version } from 'typescript';
import './utils/function';
import './utils/server-status-tracking';

colors.setTheme({
    success: 'green',
    error: 'red',
    warn: 'yellow',
    debug: 'cyan'
});

const prefix = 'p.';
export const client = new CommandoClient({
    commandPrefix: prefix,
    owner: '264662751404621825',
    invite: 'https://discord.gg/EqC2wFf'
});

client
    .on('error', console.error)
    .on('warn', console.warn)
    .once('ready', () => {
        console.log(`Logged in as ${client.user?.tag}! (${client.user?.id})`.green);
        console.log(`Prefix is set to: ${prefix}`.cyan);
        client.user?.setActivity(`Running TypeScript version ${version}!`);
    })
    .registry
        .registerDefaultTypes()
        .registerGroups([
            ['misc', 'Miscellaneous commands that don\'t fit in other groups.'],
            ['information', 'Commands that provide useful information to the user.'],
            ['admin', 'Commands to help administration give out information and perform their tasks more easily.'],
            ['fivem', 'Commands that are related to FiveM.']
        ])
        .registerDefaultGroups()
        .registerDefaultCommands({
            help: false
        })
        .registerCommandsIn(join(__dirname, 'commands'));

client.login(process.env['BOT_TOKEN']);