import http from 'http'
import httpProxy from 'http-proxy'
import chalk from 'chalk'

export default class ProxyServer {
  constructor() {
    this._proxyServer = httpProxy.createProxyServer()
  }
  start() {
    http.createServer((req, res) => {
      this._proxyServer.web(req, res, {
        target: 'http://localhost:9008'
      })
    }).listen(8008)

    console.info(chalk.blue('proxy server started on port ') + chalk.yellow('8008'))
  }
}
