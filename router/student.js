const router = require('express').Router();
const studentController = require('./../controller/student');


router.post('/register', async (req, res) => {
    res.send(await studentController.register(req.body));
});
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await studentController.fetch();
	res.send(response);
})
router.post('/login', async (req, res) => {
    res.send(await studentController.login(req.body));
});

router.get('/login1', async (req, res) => {
    res.send(await studentController.login1(req.query.name,req.query.password));
});
router.post('/add', async (req, res) => {
	const response = await studentController.add(req.body);
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await studentController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await studentController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentController.update(req.query.id, req.body);
	res.send(response);
})

  router.get('/match', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await studentController.match();
	res.send(response);
})
  router.get('/sort', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await studentController.sort();
	res.send(response);
})    
/*
router.get('/search', async (req, res) => {
	const response = await studentController.search(req.query.name);
	res.send(response);
})
*/
router.get('/search', async (req, res) => {
	const response = await studentController.search(req.query.name);
	res.send(response);
})


module.exports = router;