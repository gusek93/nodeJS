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


export async function getAll() {
    return tweets;
};

export async function getAllByUsername() {
    return tweets.filter((tweet) => tweet.username === username);
}