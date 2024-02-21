import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const { method } = req
    const { pathname } = new URL(req.url)

    if (method === "POST" && pathname === "/posttest") {
      return new Response(
        JSON.stringify(
          ["a", "list", "of", "items"]
        ),
        { headers: { 'Content-Type': 'application/json' } }
      );
    } else if (pathname === "/") {
      const body = figlet.textSync("I AM DEV");
      return new Response(body)
    } else if (pathname === "/version") {
      return new Response(figlet.textSync("Details not available"))
    } else {
      return new Response(figlet.textSync("Not found haxx0r"), { status: 404 });
    }

  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
console.log(`Bun version ${0}`, Bun.version)
