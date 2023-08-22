const express = require('express'); 
const cors = require('cors');
const app = express();
const port = 8080; 
const api = require('./routes/api');

app.use(express.json());
app.use(cors());
app.use('/api', api);

app.get('/', (req, res) => { 
    res.send('Ich bin de Backend Server!'); 
});

app.listen(port, () => { 
    console.log(`Server läuft auf Port ${port}`); 
});
