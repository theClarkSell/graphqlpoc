import * as helloWorld from './helloWorld'

 export default [
  { method: 'GET', path: '/api/helloWorld', handler: helloWorld.get() }
]

