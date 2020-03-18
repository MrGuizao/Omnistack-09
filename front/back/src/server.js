const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

mongoose.connect('mongodb://localhost/omnistack', {
     useNewUrlParser: true,
     useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(require('./routes'));

app.listen(process.env.port || 3333);

// D:\Guilherme\Estudos\01 - Cursos\OmniStack\9.0