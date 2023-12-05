import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const body = figlet.textSync("I am Dev!");
    return new Response(body);
  },
});

console.log(`Bun version ${0}`, Bun.version)
console.log(process.env.STARTUPMSG)