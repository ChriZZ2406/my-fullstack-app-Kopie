const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('GET /api/nachricht', req.ip);
    res.json({ nachricht: 'Hallo von der API!' });
});

router.post('/update', (req, res) => {
    console.log('POST /api/nachricht/update', req.ip);
    const { nachricht } = req.body;
    console.log('Neue Nachricht:', nachricht);
    
    res.json({ status: 'Erfolgreich aktualisiert', nachricht });
});

module.exports = router;
