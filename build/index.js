#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Command } from 'commander';
import fs from 'fs';
const uplink = new Command();
uplink
    .name('uplink')
    .description('Save your links in all places')
    .version('0.0.1');
uplink.command('save')
    .description('Saves a link with a specific name to execute')
    .argument('<string> <string>', 'alias for the link')
    .option('--first', 'display just the first substring')
    .action((args, options) => __awaiter(void 0, void 0, void 0, function* () {
    let folderExists = fs.existsSync("./storage");
    if (folderExists) {
        console.log("'storage' folder already exists");
    }
    else {
        fs.mkdirSync("./storage");
        console.log("Created 'storage' folder");
    }
    console.log(args);
}));
uplink.parse();
//# sourceMappingURL=index.js.map