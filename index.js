const Vue = require('vue');
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer();

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
      names: ['Pete', 'Florian', 'Heiko'],
    },
    template: `<div>
  <p>{{ url }}</p>
  <div v-for="(a, index) in names" :key="index">{{ a }}</div>
</div>`,
  });

  renderer.renderToString(app, (err, html) => {
    if (err) throw err;

    res.end(`
      <!DOCTYPE html>
      <html lang="de">
        <head><title>Vue - SSR</title></head>
        <body>${html}</body>
      </html>
    `);
  });
});

server.listen(8080, () => {
  console.log('server started on port 8080');
});
