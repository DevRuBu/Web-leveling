exports.findAll = (req, res) => {
    res.render('views/index', {
        title: firsPosts.title,
        text: firsPosts.text
    });
}

exports.findOne = (req,res) => {
    const id = req.params.id;
    res.render('page', {
        id: id,
        title: posts[id].title,
        text: posts[id].text
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
 
exports.findAllAll =  (req,res) => {
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