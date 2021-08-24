let users = [
    {
        id: '1',
        username: 'yong',
        password: '$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm',
        name: 'Yong',
        email: 'gusek93@naver.com',
        url: 'https://img.icons8.com/material-outlined/80/000000/cloud-network.png'
    }
   ];

   export async function createUser(user) {
    const created = {
        ...user, id: Date.now().toString()      
    };
    users.push(created);
    return created.id;
}

   export async function findByUsername(username) {

    return users.find((user) => user.username === username);
    
    
    }

    export async function findById(id) {

        return users.find((user) => user.id === id);
    }