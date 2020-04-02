const express = require('express')
const app = express()
const hogan = require('hogan-express')
let fileRead = require("fs");

app.post('/blog', (req, res) => {
  return res.send((posts));
});

app.delete('/blog', (req, res) => {
  let content = fileRead.readFileSync("page.json", "utf8");
  
});

app.get('/blog', (req, res) => {
  
});

app.get('/blog', (req, res) => {
  
});

app.put('/blog', (req, res) => {
  
});

const http_module = require('http')
const http = http_module.Server(app)
app.engine('html', hogan)
app.set('port', (process.env.PORT || 3000))
app.use('/', express.static(__dirname + '/public/'))
const Cosmic = require('cosmicjs')
const helpers = require('./helpers')
const bucket_slug = process.env.COSMIC_BUCKET || 'simple-blog-website'
const read_key = process.env.COSMIC_READ_KEY
const partials = {
  header: 'partials/header',
  footer: 'partials/footer'
}
app.use('/', (req, res, next) => {
  res.locals.year = new Date().getFullYear()
  next()
})
// Home
app.get('/', (req, res) => {
  Cosmic.getObjects({ bucket: { slug: bucket_slug, read_key: read_key } }, (err, response) => {
    const cosmic = response
    if (cosmic.objects.type.posts) {
      cosmic.objects.type.posts.forEach(post => {
        const friendly_date = helpers.friendlyDate(new Date(post.created_at))
        post.friendly_date = friendly_date.month + ' ' + friendly_date.date
      })
    } else {
      cosmic.no_posts = true
    }
    res.locals.cosmic = cosmic
    res.render('index.html', { partials })
  })
})
http.listen(app.get('port'), () => {
  console.info('==> <img draggable="false" data-mce-resize="false" data-mce-placeholder="1" data-wp-emoji="1" class="emoji" alt="?" src="https://s.w.org/images/core/emoji/2.3/svg/1f30e.svg">  Go to http://localhost:%s', app.get('port'));
})


app.listen(3333, function() {
  console.log(`Server started on port`);
  console.info('==> <img draggable="false" data-mce-resize="false" data-mce-placeholder="1" data-wp-emoji="1" class="emoji" alt="?" src="https://s.w.org/images/core/emoji/2.3/svg/1f30e.svg">  Go to http://localhost:%s', app.get('port'));
});
