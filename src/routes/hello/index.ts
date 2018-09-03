import * as Hapi from 'hapi'
import * as types from './hello'

export default (request: Hapi.Request, h: Hapi.ResponseToolkit): types.HelloWorldResponse => {

  return {
    message: 'Hello World!',
    code: 0
  }
}