express = require('express');

app = express();

app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log("Server started :D");
})

app.get('/', (req,res) => {
    console.log("Request made :c");
    res.sendFile(__dirname + '/index.html');

})