const express = require('express');

const app = express();

const posts = [
    {
    title: 'Title, Hi!',
    text: 'Some text'
    },
    {
        title: 'Title, Hi!',
        text: 'Some text'
    },
    {
        title: 'Title, Hi!',
        text: 'Some text'
    }
];

app.get('/posts', function(req,res){
    return res.send((posts));
});

app.listen(27017, function() {
    console.log(`Server started on port`);
});
