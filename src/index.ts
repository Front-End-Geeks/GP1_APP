import * as Hapi from "hapi"

import hello from './routes/hello'

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost'
})

server.route({
  method: 'GET',
  path: '/hello-world',
  handler: hello
})

const init = async () => {

  await server.register({
    plugin: require('hapi-pino'),
    options: {
      prettyPrint: true,
      logEvents: ['response']
    }
  })

  await server.start()
  console.log('Hapi server has started at: 3000')
}

init()