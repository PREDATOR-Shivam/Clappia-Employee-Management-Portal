const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ClappiaDB', (err) => {
    if (!err)
        console.log('MongoDb connection succeeded... ');
    else
        console.log('Eroor in Db connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
mongoose.set('useFindAndModify', false);