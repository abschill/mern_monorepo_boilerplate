const express = require('express');
const api = express();
const path = require('path');
const cors = require('cors');
api.use(cors())
api.use(express.static(path.join(__dirname, 'dist')));


api.get('/', (req, res) => {
    res.sendFile('index.html')
});
api.get('/api', (req, res) => res.json({ message: 'hi' }));
api.listen(3000, () => console.log("server listening"));