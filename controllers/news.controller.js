const { News, Asset } = require("../models/models");

async function createNews(req, res) {
	try {
		const news = await News.create({
			title: req.fields.title,
			text: req.fields.text,
			assetId: req.fields.assetId
		});
		res.json(news);
	} catch (error) {
		console.error(error);
		response.status(500).end();
	}
}

async function getallNews(req, res) {
	try {
		const news = await News.findAll({ include: [Asset] });
		res.json(news);
	} catch (error) {
		console.error(error);
		response.status(500).end();
	}
}

module.exports = {
	createNews,
	getallNews
}
