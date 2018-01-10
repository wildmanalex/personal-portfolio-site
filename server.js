var express = require('express')
var app = express()

app.use(express.static('./public'))

app.get('/', function(req,res){
	// console.log('got to the server')
	res.sendFile('./public/html/index.html', {root:'./'})
})
app.get('/work', function(req,res){
	console.log('hello')
	res.sendFile('./public/html/work.html', {root:'./'})

})

app.listen(80)
