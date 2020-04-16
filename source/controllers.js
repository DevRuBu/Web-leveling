exports.findAll = (req, res) => {
    let links = '  ';
    let postContainer = '  ';
for(i=0; i<posts.length; i++){
    links += '<li><a href="/'+i+'">Page '+(i+1)+'</a></li>';
    postContainer += '<hr class="hr">'+
    '<div class="posts" name = "text">'+
        '<div class="heder-post"><h3><a href="/'+i+'">'+ posts[i].title +'</a></h3></div>'+
        '<div class="body-post"><p>'+ posts[i].text +'</div>'+
    '</div>';
};


    res.render('index.handlebars', {
        title: firsPosts.title,
        text: firsPosts.text,
        link: links,
        postContainer: postContainer
    });
}

exports.findOne = (req,res) => {
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
}

exports.create = (req,res) => {
    const data = req.body;
    console.log(data);
    posts.push(data);
    return res.send(posts);
}

exports.destroy =  (req,res) => {
    const id = req.params.id;
    const data = posts.splice(id,1);
    console.log(data);
    return res.send(posts);
}
 
exports.findAllJson =  (req,res) => {
    return res.send((posts));
}

exports.update =  (req,res) => {
    const id = req.params.id;
    const { title, text } = req.body;
    posts[id].title = title;
    posts[id].text = text;
    res.send(posts);
}


const firsPosts = {
    title: 'Title, Hi!',
    text: 'First page'
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
