#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs'
const uplink = new Command();

uplink
    .name('uplink')
    .description('Save your links in all places')
    .version('0.0.1');

uplink.command('save')
    .description('Saves a link with a specific name to execute')
    .argument('<string> <string>', 'alias for the link')
    .option('--first', 'display just the first substring')
    .action(async (args, options) => {
        let folderExists = fs.existsSync("./storage")
        if (folderExists) {
            console.log("'storage' folder already exists")
        } else {
            fs.mkdirSync("./storage")
            console.log("Created 'storage' folder");
        }

        console.log(args);
    });

uplink.parse();

