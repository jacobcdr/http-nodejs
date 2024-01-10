import { createServer } from 'http';
import { createReadStream } from 'fs';
import { join } from 'path';

createServer((req, res) => {
  // Kontrollera om förfrågan pekar på roten
  if (req.url === '/') {
    // Ange innehållstypen till HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Skapa en läsström för index.html och skicka den till responsen
    const stream = createReadStream(join(__dirname, 'index.html'));
    stream.pipe(res);
  } else {
    // Hantera andra URL:er eller skicka en 404-sida
    res.writeHead(404);
    res.end('404 Not Found');
  }
}).listen(process.env.PORT);
