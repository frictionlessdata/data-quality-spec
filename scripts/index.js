const Promise = require('bluebird')
const readFile = Promise.promisify(require('fs').readFile)
const tv4 = require('tv4')

Promise
  .all([ readFile('spec.json'), readFile('scripts/schema.json') ])
  .then((results) =>{
    let spec = JSON.parse(results[0].toString('utf8'))
    let schema = JSON.parse(results[1].toString('utf8'))
    let valid = tv4.validate(spec, schema);

    if (!valid) {
      console.log(tv.error)
      process.exit(1)
    }

  })
