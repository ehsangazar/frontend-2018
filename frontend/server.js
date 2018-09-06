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

    server.all('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      if ( pathname === '/'){
        app.render(req, res, '/survey_results/list', query);
      } else if (pathname.includes('/survey_results/')) {
        app.render(req, res, '/survey_results/single', query);
      } else {
        handle(req, res, parsedUrl);
      }
    })

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
