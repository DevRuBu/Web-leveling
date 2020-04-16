const path = require('path');
const fs = require('fs');

if(fs.existsSync(path.normalize(path.join(__dirname, 'source')))){
    console.log('Loaded app');
    require('./source');
}
else {
    console.log('Source not found');
}