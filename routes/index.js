var router = require('express').Router();

router.get('/', (req, res) => { res.send('Adoptapet API V1'); })
router.use('/usuarios', require('./usuarios'));
router.use('/solicitudes', require('./solicitudes'));
router.use('/mascotas', require('./mascotas'));

module.exports = router;