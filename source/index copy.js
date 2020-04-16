const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')//for template
const app = express()

const {
    findAll,
    findAllAll,
    findOne,
    create,
    update,
    destroy
} = require('./controllers');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/', express.static(path.normalize(path.join(__dirname, 'views'))));


app.engine('.handlebars ', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.normalize(path.join(__dirname, 'views', 'layouts'))
}))

const API_POPSTS = '/api/blog';
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

app.get(API_POPSTS, findAll);
app.get(API_POPSTS + 's', findAllAll);
app.get(API_POPSTS + '/:postId', findOne);
app.post(API_POPSTS + '/:postId', create);
app.patch(API_POPSTS + '/:postId', update);
app.delete(API_POPSTS + '/:postId', destroy);


app.listen(3333, () => {
    console.log(`Server started on port`);
});