const express = require('express')
const app = express()
const port = 2300
const path = require('path')
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, '/form.html'));

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
