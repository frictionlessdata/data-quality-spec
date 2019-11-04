const Promise = require('bluebird')
const readFile = Promise.promisify(require('fs').readFile)
const tv4 = require('tv4')

Promise
  .all([readFile('spec.json'), readFile('scripts/schema.json')])
  .then((results) => {
    const spec = JSON.parse(results[0].toString('utf8'))
    const schema = JSON.parse(results[1].toString('utf8'))
    const valid = tv4.validate(spec, schema)

    if (!valid) {
      console.log(tv4.error)
      process.exit(1)
    }
  })
