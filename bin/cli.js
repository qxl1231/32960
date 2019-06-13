#!/usr/bin/env node

const commander = require("commander");
const fs = require("fs");

const pkg = require("../package.json");
const Protocol = require("../dist");

commander
  .version(pkg.version)
  .command("parse")
  .description("Parse binary message data")
  .option("-d, --data <data>", "Binary hex data of message")
  .option("-c, --copy_to_clipboard", "Whether copy parsed result to clipboard")
  .option("-i, --input <input>", "File contains binary hex data of message")
  .option("-o, --output <output>", "Save parsed result to file")
  .action(cmd => {
    const input = cmd.input;
    const output = cmd.output;
    const data = input ? fs.readFileSync(input) : cmd.data;

    if (!data) {
      console.log("No data specify!");
    } else {
      try {
        const protocol = new Protocol();
        const buf = Buffer.from(data, "hex");
        const req = protocol.parse(buf);

        const jsStr = JSON.stringify(req, 0, 2);
        if (output) {
          fs.writeFileSync(output, jsStr);
        }
        console.log(jsStr);
      } catch (error) {
        console.error(error);
      }
    }
  });

commander.parse(process.argv);
