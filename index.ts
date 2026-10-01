#!/usr/bin/env bun

import { Command } from "commander";
import { runWakeUp} from "./tui/wakeup";

const program = new Command;

program
    .name("openClaw-Build-with-Vaishnavi")
    .description("openClaw CLI Project")
    .version("0.0.1");

program

    .command("wakeup")
    .description("show me the banner and pick cli or telegram mode")
    .action(async()=>{
        await runWakeUp();
    })

await program.parseAsync(process.argv);
