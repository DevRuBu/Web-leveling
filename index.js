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

const {
    findAll,
    findOne,
    create,
    update,
    destroy,
    findAllJson
} = require('./source/controllers');

const API_POPSTS = '/';
app.set('views', path.join(__dirname, 'views'))

app.get(API_POPSTS, findAll)

app.get(API_POPSTS + ':id', findOne);

app.post(API_POPSTS +':id', create);

app.delete(API_POPSTS + ':id', destroy);
  
app.get('/:id/blogs', findAllJson);

app.put(API_POPSTS + ':id', express.json(), update);

const portValue = 3333;
app.listen(portValue, () => {
    console.log(`Server is start on ${process.env.PORT || portValue}. http://localhost:${process.env.PORT || portValue}`);
});