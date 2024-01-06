import { parseJSON } from './utils.js';

const router = {
  '/': {
    GET: (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, World!');
    },
    POST: (req, res, payload) => {
      const data = parseJSON(payload);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Received POST request', data }));
    },
    OPTIONS: (req, res) => {
      res.writeHead(200, {
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
      res.end();
    },
  },
  '/about': {
    GET: (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('About Us');
    },
    OPTIONS: (req, res) => {
      res.writeHead(200, {
        'Access-Control-Allow-Methods': 'OPTIONS, GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
      res.end();
    },
  },
  '/contact': {
    GET: (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Contact Us');
    },
    OPTIONS: (req, res) => {
      res.writeHead(200, {
        'Access-Control-Allow-Methods': 'OPTIONS, GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
      res.end();
    },
  },
  '/api/users': {
    GET: (req, res) => {
      const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    },
    OPTIONS: (req, res) => {
      res.writeHead(200, {
        'Access-Control-Allow-Methods': 'OPTIONS, GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
      res.end();
    },
  },
};

export default router;