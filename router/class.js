const router = require('express').Router();
const classController = require('../controller/class');

router.post('/add', async (req, res) => {
	const response = await classController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await classController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await classController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await classController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await classController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;