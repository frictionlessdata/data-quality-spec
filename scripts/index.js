const Promise = require('bluebird')
, readFile = Promise.promisify(require('fs').readFile)
, tv4 = require('tv4')

Promise
  .all([readFile('spec.json'), readFile('scripts/schema.json')])
  .then((results) => {
    const spec = JSON.parse(results[0].toString('utf8'))
    , schema = JSON.parse(results[1].toString('utf8'))
    , valid = tv4.validate(spec, schema)

    if (!valid) {
      console.log(tv4.error)
      process.exit(1)
    }
  })
