const spawn = require("child_process").spawn;

const ps = spawn("grep", ["potato"]);
ps.stdout.pipe(process.stdout);

ps.stdin.write("cheese\n");
ps.stdin.write("fried potatoes\n");
ps.stdin.write("cheese potatoes\n");
ps.stdin.write("cheese\n");
ps.stdin.write("potato!\n");
ps.stdin.end();
