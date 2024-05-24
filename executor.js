#!/usr/bin/env node
'use strict';

const os = require('os');
const fs = require('fs');
const path = require('path');
const ws = require('windows-shortcuts');
const colors = require('colors');

const config = require('./config.json');
const rules = config.rules;
const log_title = colors.green.bold('Rename Back Lnk: ');

async function executeRule(rule) {
    let currentPath = rule.path;
    let files = fs.readdirSync(currentPath);
    let lnks = [];
    let promises = [];
    console.info(`${log_title}${'INFO'.blue} Start process rule (Path: ${rule.path.grey})`);
    // 检测快捷方式
    for (const filename of files) {
        let filePath = path.join(rule.path, filename);
        let isLnk = path.extname(filePath) == '.lnk'
        console.debug(`${log_title}${'DEBUG'.green } Reading file ${filename.blue} (${filePath.grey}): ${isLnk ? 'is Lnk'.green : 'not Lnk'.red}`);
        if (isLnk) {
            lnks.push(filename);
        }
    }
    for (const file of lnks) {
        // 逐个文件处理
        promises.push(processFile(rule, file));
    }
    Promise.all(promises).catch((error) => {
        console.error(`${log_title}${'ERROR'.red} Error while processing rule (Path: ${rule.path.grey}):\n${error}`);
    }).then(() => {
        console.info(`${log_title}${'INFO'.blue} Finish process rule (Path: ${rule.path.grey})`);
    });
}

async function processFile(rule, filename) {
    let filePath = path.join(rule.path, filename);
    console.debug(`${log_title}${'DEBUG'.green} Processing file ${filename.blue} (${filePath.grey})`);
    ws.query(filePath, (error, query) => { // 获取信息
        for (const match of rule.matches) {
            let fileValue = query[match.type];
            let fileValue_exp = query.expanded[match.type]; // 展开路径后的信息
            let isMatch = false;
            console.debug(`${log_title}${'DEBUG'.green} Value for file ${filename.blue}: ${fileValue.grey} (expanded: ${fileValue_exp.grey})`);
            if (match.full) {
                if (fileValue_exp) {
                    isMatch = fileValue == match.value || fileValue_exp == match.value;
                }
                else {
                    isMatch = fileValue == match.value;
                }
            }
            else {
                if (fileValue_exp) {
                    isMatch = fileValue.includes(match.value) || fileValue_exp.includes(match.value);
                }
                else {
                    isMatch = fileValue.includes(match.value);
                }
            }
            console.debug(`${log_title}${'DEBUG'.green} Checking ${match.type.blue} (${match.value.grey}): ${isMatch? 'is Match'.green : 'not Match'.red}`);
            if (isMatch) {
                console.info(`${log_title}${'INFO'.blue} File ${filename.blue} (${filePath.grey}) matched with ${match.type.blue} (${match.value.grey})`);
                if (filename == match.rename + '.lnk') {
                    console.info(`${log_title}${'INFO'.blue} Will not rename ${match.name} because it already this name`);
                }
                else {
                    let newName = match.rename + '.lnk';
                    console.info(`${log_title}${'INFO'.blue} Will rename ${filename.blue} (${filename.grey}) to ${newName.blue}`);
                    renameFile(filePath, newName); //改名
                    break;
                }
            }
        }
    });
}

function renameFile(filePath, newName) {
    try {
        fs.renameSync(filePath, path.join(path.dirname(filePath), newName));
        console.info(`${log_title}${'INFO'.blue} Renamed ${filePath.grey} to ${newName.blue}`);
    } catch (error) {
        console.error(`${log_title}${'ERROR'.red} Failed to rename ${filePath.grey} to ${newName.blue}:\n${error}`);
    }
}

function start() {
    if (os.platform() != 'win32') {
        console.error(`${log_title}${'ERROR'.red} Only Windows is supported`);
        process.exit(1);
    }
    console.info(`${log_title}${'INFO'.blue} Starting`)
    for (const rule of rules) {
        executeRule(rule); // 执行一条规则
    }
    console.info(`${log_title}${'INFO'.blue} Main thread finish`);
}
module.exports = { start };