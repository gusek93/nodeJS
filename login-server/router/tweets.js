import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';

const router = express.Router();
//let tweets = require('../data/tweets_data');



// GET /tweets
// GET /tweets?username=:username
router.get('/', tweetController.getTweets);

//GET /tweets/:id
router.get('/:id', tweetController.getTweet);

// POST / tweets
router.post('/', tweetController.createTweet);

// PUT / tweets/:id
router.put('/:id', tweetController.updateTweet);

// DELETE / tweets/:id
router.delete('/:id', tweetController.deleteTweet);


export default router;
//module.exports = router;