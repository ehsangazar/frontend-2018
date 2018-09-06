/* eslint-disable no-console */
require('dotenv').config()

const express = require('express')
const next = require('next')
const { parse } = require('url')

const devProxy = {
  '/api': {
    target: process.env.BACKEND_URL,
    changeOrigin: true
  }
}

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({
  dev
})

const getRoutes = require('./routes');
const routes = getRoutes();

const handle = app.getRequestHandler()

let server
app
  .prepare()
  .then(() => {
    server = express()

    // Set up the proxy.
    if (devProxy) {
      const proxyMiddleware = require('http-proxy-middleware')
      Object.keys(devProxy).forEach(function (context) {
        server.use(proxyMiddleware(context, devProxy[context]))
      })
    }
    
    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query = {} } = parsedUrl;

      let route = null

      routes.forEach(item => {
        if (route === null){
          if (pathname.match(item.regex) ) {
            route = item
          }
        }
      })

      if (route) {
        return app.render(req, res, route.page, query);
      }
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on port ${port} [${env}]`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
