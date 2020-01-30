const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lock', {useNewUrlParser: true, useUnifiedTopology: true});
