import figlet from "figlet";

let serverDeets: any
try {
  //serverDeets = Bun.file("serverdeets.json")
  if(serverDeets)
    console.log((await serverDeets.json()).version)
} catch (err) {
  console.log(err)
}

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      const body = figlet.textSync("I AM DEV");
      return new Response(body)
    } else if (url.pathname === "/version") {
      if(serverDeets)
        return new Response((await serverDeets.json()).version)
      return new Response("Nothing.")
    } else {
      return new Response(figlet.textSync("Not found haxx0r"), { status: 404 });
    }
  },
});

console.log(`Bun version ${0}`, Bun.version)
console.log(Bun.env.SERVERENDPOINT)
