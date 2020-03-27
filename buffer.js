// const buffer = new Buffer.from("Hello");

const buffer = new Buffer.alloc(5);

buffer.write("Hello world");

buffer[1] = "a".codePointAt(0);

process.stdout.write(`${buffer.length.toString()} \n`);

process.stdout.write(buffer.toString());
