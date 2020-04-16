const express = require('express')

const path = require('path')
const exphbs = require('express-handlebars')//for template

const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/', express.static(path.normalize(path.join(__dirname, 'views'))));

app.engine('.handlebars', exphbs({
    defaultLayout: 'main',
    extname: '.handlebars',
    layoutsDir: path.normalize(path.join(__dirname, 'views', 'layouts'))
}))

const API_POPSTS = '/';
app.set('views', path.join(__dirname, 'views'))

const firsPosts = {
    title: 'Title, Hi!',
    text: 'First page <div style="margin:1em;"><img src="https://www.enisa.europa.eu/news/enisa-news/privacy-standards-for-information-security/@@images/image" style="border-radius: 1em;opacity: 0.8; height:20em;width:100%;"></div>'
};

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

app.get(API_POPSTS, (req, res) => {
    let links = '  ';
for(i=0; i<posts.length; i++){
    links += '<li><a href="/'+i+'">Page '+(i+1)+'</a></li>';
};
    res.render('index.handlebars', {
        title: firsPosts.title,
        text: firsPosts.text,
        link: links
    });
})

app.get(API_POPSTS + ':id', (req,res) => {
    const id = req.params.id;
    let links = '  ';
for(i=0; i<posts.length; i++){
    links += '<li><a href="/'+i+'">Page '+(i+1)+'</a></li>';
};
    res.render('page.handlebars', {
        id: id,
        title: posts[id].title,
        text: posts[id].text,
        link: links
    });
});

app.post(API_POPSTS +':id', (req,res) => {
    const data = req.body;
    console.log(data);
    posts.push(data);
    return res.send(posts);
  });

  app.delete(API_POPSTS + ':id', (req,res) => {
    const id = 1;
    const data = posts.splice(id,1);
    console.log(data);
    return res.send(posts);
  });
  
app.get('/:id/blogs', (req,res) =>{
    return res.send((posts));
});

app.put(API_POPSTS + ':id', express.json(), (req,res) =>{
    const id = req.params.id;
    const { title, text } = req.body;
    posts[id].title = title;
    posts[id].text = text;
    res.send(posts);
});
let portValue = 3333;
app.listen(portValue, () => {
    console.log(`Server is start on ${process.env.PORT || portValue}. http://localhost:${process.env.PORT || portValue}`);
});