import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js'
// MVC 적용 리팩토링 

const router = express.Router();


// 사용자 이름으로 가져오기
router.get('/',tweetController.getTweets);


// id 비교
router.get('/:id', (req, res, next) =>{
    const id = req.params.id;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if (tweet){
        res.status(200).json(tweet);
    } else{
        res.status(404).json(`id(${id})는 존재하지 않습니다.`);
    }
});

router.post('/', (req, res, next) =>{
    const { text, name, username } = req.body;
    const tweet = {
        id : Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username,
    };
    tweets = [tweet, ...tweets];
    res.status(201).json(tweet);
});


router.put('/:id', (req, res, next)=>{
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweets.find((tweet) => tweet.id === id);

    if (tweet) {
        tweet.text = text;
        res.status(200).json(tweet);
    } else {
        res.status(404).json('id not found')
    }
})


router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    const tweet = tweets.find((tweet) => tweet.id === id);
    //res.sendStatus(204);
    if (tweet) {
        res.status(204).json('트윗이 삭제 되었습니다.');
    } else {
        res.status(404).json('트윗이 존재하지 않습니다.');
    }
    

})


export default router;