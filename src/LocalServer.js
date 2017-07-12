import http from 'http'
import chalk from 'chalk'

export default class LocalServer {
  start() {
    http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.write('request successfully proxied')
      res.end()
    }).listen(9008)

    console.info(chalk.blue('local server started on port ') + chalk.yellow('9008'))
  }
}
