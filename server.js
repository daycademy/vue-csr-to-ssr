const express = require('express');

const server = express();

const { createBundleRenderer } = require('vue-server-renderer');

const template = require('fs').readFileSync('./src/index.template.html', 'utf-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest,
});

server.use('/dist', express.static('./dist'));
server.use('/public', express.static('./public'));

server.get('*', async (req, res) => {
  try {
    const context = { url: req.url };
    const html = await renderer.renderToString(context);
    res.send(html);
  } catch (error) {
    res.status(500).end(error.message);
  }
});

server.listen(8080, () => {
  console.log('server started on port 8080');
});
