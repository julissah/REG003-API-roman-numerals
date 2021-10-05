#!/usr/bin/env node
/* eslint-disable no-undef */
const { parse, stringify } = require('./api');
const chalk = require('chalk');

const myArgs = process.argv.slice(2);

if (myArgs.length >= 1){
    switch (myArgs[0]) {  
        case 'parse':
            (myArgs.length === 1) ? console.info('Debe ingresar el número romano que desea convertir'): console.log(parse(myArgs[1]));       
            break;
        case 'stringify':
            (myArgs.length === 1) ? console.info('Debe ingresar el número entero que desea convertir'): console.log(stringify(parseInt(myArgs[1])));
            break;
        case '--v':
            console.log('1.0.0');
            break;
        case '--version':
            console.log('1.0.0');
            break;
        case '--h':
            console.log('help');
            break;
        case '--help':
            console.log('help');
            break;
        default:
            console.log(chalk.blackBright('Lo siento, no es un comando válido.'));
    }
  }
