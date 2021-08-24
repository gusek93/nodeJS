//const express = require('express');


let tweets = [
    {
       id: '1',
       text: '화이팅',
       createdAt: Date.now().toString(),
       name: 'Bob',
       username: 'bob',
   
    },
    {
       id: '2',
       text: '화이팅',
       createdAt: Date.now().toString(),
       name: 'dayong',
       username: 'dayong',
   
    },
   ];


   //module.exports = tweets;
   export async function getAll() {
       return tweets;
   }

   export async function getAllByUsername() {
       return tweets.filter((tweet) => tweet.username);
   }

   export async function getAllById() {
       return tweets.find((tweet) => tweet.id === id);
   }

   export async function createTweet(text, name, username) {
       const tweet = {
         id: Date.now().toString(),
         text,
         createdAt: new Date(),
         name,
         username,

       };
       tweets = [tweet, ...tweets];
       return tweet;
   }

   export async function updateTweet(id, text) {
       const tweet = tweets.find((tweet) => tweet.id === id);
       if(tweet) {
           tweet.text = text;
       }
       return tweet;
   }

   export function deleteTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
   }

   