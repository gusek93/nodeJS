import * as tweetRepository from '../data/tweets_data.js';

export async function getTweets (req, res) {
    const username = req.query.username;
    const data = await (username 
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll());
    res.status(200).json(data);
};

export async function getTweet(req, res) {
    const id = req.prams.id;
    const tweet = await tweetRepository.getAllById(id) 
    if(tweet) {
        await res.status(200).json(tweet);
    } else {
        await res.status(404).json(tweet);
    } 
};

export async function createTweet (req, res) {
    const {text, name, username} = req.body;
    const tweet = tweetRepository.createTweet(text, name, username);
    await res.status(201).json(tweet);
}

export async function updateTweet (req, res){
    const id = req.params.id;
    const text = req.body.text;
    console.log(text);
    const tweet = tweetRepository.updateTweet(id, text);
    if(tweet) {
        tweet.text = text;
        await res.status(200).json(tweet);

    } else {
        await res.status(404).json({message: 'Tweet id not found'});
    }
}

export async function deleteTweet (req, res){
    const id = req.params.id;
    await tweetRepository.deleteTweet(id);
    res.sendStatus(204);
}