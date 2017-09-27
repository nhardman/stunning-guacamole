var process=require('process')
var yaml=require('js-yaml')
var fs=require('fs')
var file=process.argv[2]

fs.readFile(file, function (err, data) {
  if (err) {
    throw err
  }
  console.log(JSON.stringify(yaml.load(data)))
})
