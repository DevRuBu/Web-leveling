const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/blog', (req, res) => {
    res.render('indexH', {
        title: firsPosts.title,
        text: firsPosts.text
    });
})

app.get('/blog/:id', function(req,res){
    const id = req.params.id;
    res.render('index', {
        id: id,
        title: posts[id].title,
        text: posts[id].text
    });
});

const firsPosts = {
    title: 'Title, Hi!',
    text: 'First page <div style="margin:1em;"><img src="https://www.enisa.europa.eu/news/enisa-news/privacy-standards-for-information-security/@@images/image" style="border-radius: 1em;opacity: 0.8; height:20em;width:100%;"></div>'};

const posts = [
    {
        title: 'Page 1. Information technology (IT)',
        text: 'Information technology (IT) is the use of computers to store, retrieve, transmit, and manipulate data[1] or information. IT is typically used within the context of business operations as opposed to personal or entertainment technologies.'
    },
    {
        title: 'Page 2. Information Security',
        text: 'Information Security is basically the practice of preventing unauthorized access, use, disclosure, disruption, modification, inspection, recording or destruction of information. Information can be physical or electrical one.'
    },
    {
        title: 'Page 3. Title, Hi!',
        text: 'Some text'
    }
];


app.post('/blog/:id', function(req, res) {
    const data = req.body;
    console.log(data);
    posts.push(data);
    return res.send(posts);
  });
  

  app.delete('/blog/:id', function(req, res) {
    const id = req.params.id;
    const data = posts.splice(id,1);
    console.log(data);
    return res.send(posts);
  });

  
app.get('/blogs', function(req,res){
    return res.send((posts));
});

/*
app.get('/blog', function(req,res){
    return res.send((posts));
});

app.get('/blog/:id', function(req,res){
    const id = req.params.id;
    return res.send((posts[id]));
});
*/

app.put('/blog/:id', express.json(), function(req,res){
    const id = req.params.id;
    var { title: title, text: text } = req.body;
   // posts[id] = (data);
   
    posts[id].title = title;
    posts[id].text = req.body.text;
   //
   //
   res.send(posts);
});

app.listen(3333, function() {
    console.log(`Server started on port`);
    console.info('==> <img draggable="false" data-mce-resize="false" data-mce-placeholder="1" data-wp-emoji="1" class="emoji" alt="?" src="https://s.w.org/images/core/emoji/2.3/svg/1f30e.svg">  Go to http://localhost:%s', app.get('port'));
});
