var http = require('http')
var exec = require('child_process').exec;
var createHandler = require('github-webhook-handler')
var config = require('./config.js')

var handler = createHandler({ path: config.path, secret: config.token })

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(config.port)

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)

    exec("cd "+config.folder+" && git pull", function (err, stdout) {
        if (err) {
            console.log(err)
            return
        }
        var cmd_message = stdout.replace(/^[0-9a-f]+?\ /, '');
        console.log(cmd_message);
    });
})

