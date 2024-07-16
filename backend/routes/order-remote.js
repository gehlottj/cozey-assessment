var serverHelper = require('./../server/utility/server-helper');
var customCatchError = serverHelper.customCatchError;
const express = serverHelper.express;
const router = express.Router();
const Order = require('./../modules/orders');
const order = new Order();

router.get("/getPickingList", async(req, res) => {
	try {
		order.getPickingList(req.params, (error, result) => {
			res.status(200).send(result);
		})
	} catch(error) {
		console.log(error)
		res.status(500).json({message: customCatchError()})
	}
})

router.get("/getOrderList", async(req, res) => {
	try {
		order.getOrderList(req.body, (error, result) => {
			res.status(200).send(result);
		})
	} catch(error) {
		console.log(error)
		res.status(500).json({message: customCatchError()})
	}
})

module.exports = router;