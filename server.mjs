import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join } from 'path';

// Läs innehållet i index.html en gång vid start
const indexPath = join(__dirname, 'index.html');
const indexContent = readFileSync(indexPath, 'utf8');

createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(indexContent);
}).listen(process.env.PORT || 3000);
