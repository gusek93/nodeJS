import express from 'express';
import tweetsRouter from './router/tweets.js'
const app = express();


app.use('/tweets', tweetsRouter)

// 에러 처리 
app.use((req, res, next) =>{
    res.sendStatus(404);
});

app.use((error, req, res, next) =>{
    console.error(error);
    res.sendStatus(500);
})

app.listen(5000)