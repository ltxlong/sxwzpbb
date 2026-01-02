Deno.serve(() => new Response(Deno.readTextFileSync("./index.html"), {
    headers: { "content-type": "text/html; charset=utf-8" }
}));
