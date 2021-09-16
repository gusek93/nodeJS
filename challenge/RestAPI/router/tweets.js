import express from 'express';

// Restapi 작성 하기 
// 데이터 베이스가 없으니 스키마 지정
// 다시 한번 복습 필요!!

let tweets = [
    {
    id: '1',  
    text: 'hello',  
    createdAt: Date.now().toString(), 
    name: 'dayong',  
    username: 'hyunda',  
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
    {
        id: '2',
        text: '안뇽!',
        createdAt: Date.now().toString(),
        name: 'Ellie',
        username: 'ellie',
      },
];
const router = express.Router();


// 사용자 이름으로 가져오기
router.get('/',(req, res, next) =>{
    const username = req.query.username

    //내가 수정 한 코드 (에러처리가 필요한 부분은 3항 연산자 보단 if 문으로 작성 )
    const tweet = tweets.filter((tweet) => tweet.username === username);

    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json('not exist username')
    }

    // 3항 연산자 표현 
    // const data = username 
    // ? tweets.filter((tweet) => tweet.username === username) 
    // : tweets;
    // res.status(200).json(data);
   
})

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

// 연습 
// router.get('/:id', (req, res,next) => {
//     const id = req.params.id;
//     const tweet = tweets.find((tweet) => tweet.id === id);
//     if (tweet) {
//         res.status(200).json(tweet);
//     } else {
//         res.status(404).json('id가 다릅니다');
//     }
// })


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