import * as tweetRepository from '../data/tweet.js';

// MVC 적용 리팩토링 
// 삽질 실화냐... req, res 순서 잘 지키기 
export async function getTweets(req ,res) {
    const username = req.query.username;
    const data = await (username
        ? tweetRepository.getAllByUsername(username)
        : tweetRepository.getAll());
    // const data = tweetRepository.getAll();
    // console.log(data);
    res.status(200).json(data);
    
}
