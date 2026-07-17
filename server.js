const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

// Long cache for static assets; revalidate for HTML.
const CACHE = {
  '.css': 'public, max-age=31536000, immutable',
  '.js': 'public, max-age=31536000, immutable',
  '.png': 'public, max-age=31536000, immutable',
  '.jpg': 'public, max-age=31536000, immutable',
  '.jpeg': 'public, max-age=31536000, immutable',
  '.svg': 'public, max-age=31536000, immutable',
  '.ico': 'public, max-age=31536000, immutable',
  '.webp': 'public, max-age=31536000, immutable',
  '.woff2': 'public, max-age=31536000, immutable',
  '.woff': 'public, max-age=31536000, immutable'
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  // Prevent path traversal
  const filePath = path.normalize(path.join(process.cwd(), urlPath));
  if (!filePath.startsWith(process.cwd())) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = TYPES[ext] || 'application/octet-stream';
    const headers = {
      'Content-Type': type,
      'Cache-Control': CACHE[ext] || 'no-cache'
    };

    const accept = req.headers['accept-encoding'] || '';
    if (/\bgzip\b/.test(accept)) {
      headers['Content-Encoding'] = 'gzip';
      res.writeHead(200, headers);
      res.end(zlib.gzipSync(data));
    } else if (/\bdeflate\b/.test(accept)) {
      headers['Content-Encoding'] = 'deflate';
      res.writeHead(200, headers);
      res.end(zlib.deflateSync(data));
    } else {
      res.writeHead(200, headers);
      res.end(data);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('Static server (gzip + cache) running at http://localhost:' + PORT);
});
