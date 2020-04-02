const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const posts = [
    {
    title: 'Title, Hi!',
    text: 'Some text'
    },
    {
        title: 'Page 2. Information technology (IT)',
        text: 'Information technology (IT) is the use of computers to store, retrieve, transmit, and manipulate data[1] or information. IT is typically used within the context of business operations as opposed to personal or entertainment technologies.'
    },
    {
        title: 'Title, Hi!',
        text: 'Some text'
    }
];


app.post('/blog', function(req, res) {
    const data = req.body;
    console.log(data);
    posts.push(data);
    return res.send((posts));
  });
  

  app.delete('/blog/:id', function(req, res) {
    const id = req.params.id;
    //const data = posts.splice([id]);
    //console.log(data);
    posts.delete([id]);
    return res.send((posts));
  });

app.get('/blog', function(req,res){
    return res.send((posts));
});

app.get('/blog/:id', function(req,res){
    const id = req.params.id;
    return res.send((posts[id]));
});


app.put('/blog/:id', express.json(), function(req,res){
    const id = req.params.id;
    posts[id].title = blogName;
    posts[id].text = blogContent;
    return res.send((posts[id]));
});

app.listen(3333, function() {
    console.log(`Server started on port`);
    console.info('==> <img draggable="false" data-mce-resize="false" data-mce-placeholder="1" data-wp-emoji="1" class="emoji" alt="?" src="https://s.w.org/images/core/emoji/2.3/svg/1f30e.svg">  Go to http://localhost:%s', app.get('port'));
});
