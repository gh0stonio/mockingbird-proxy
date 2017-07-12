import ProxyServer from './src/ProxyServer'
import LocalServer from './src/LocalServer'

const proxyServer = new ProxyServer()
const localServer = new LocalServer()

proxyServer.start()
localServer.start()
