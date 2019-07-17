const express = require ('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); //access to the static public folder

app.set('view engine', 'ejs');

let items = [];

app.get('/', function(req, res){
    const today = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    const day = today.toLocaleDateString('en-US',options);

    res.render('list', {kindOfDay: day, newListItem: items});
})

app.post('/', function(req, res){

    item = req.body.newItem;

    items.push(item);
    res.redirect('/');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Example app listening on port 3000!');
});