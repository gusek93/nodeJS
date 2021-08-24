import * as userRepository from '../data/auth.js';
import bcrypt from 'bcrypt';
import {} from 'express-async-errors';
import jwt from 'jsonwebtoken';

const jwtExpiresInDays = '2d';
const jwtSecretKey = 'F2dN7x8HVzBWaQuEEDnhsvHXRWqAR63z';
const bcryptSaltRounds = 12;
//회원가입 
export async function signup (req, res) {
    //가입에 필요한 데이터를 받아 오고
    const {username, password, name, email , url} = req.body;
    //사용자 이름이 이미 있는지 없는지 확인
    const found = await userRepository.findByUsername(username);
    if (found) {
        return res.status(409).json({ message: `${username} already exists`});
    }
    // 비밀번호 암호화
    const hashed = await bcrypt.hash(password, bcryptSaltRounds);
    const userId = await userRepository.createUser({
        username, 
        password: hashed, 
        name, 
        email, 
        url,
    });
    const token = createJwtToken(userId);
    console.log(hashed);
    res.status(201).json({token, username});
}

export async function login (req, res) {
    const {username, password} = req.body;
    const user = await userRepository.findByUsername(username);
    console.log(user);
    console.log(password);
    if (!user) {
        return res.status(401).json({ message: 'INvalid user or password1'});
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid user or passwor2'});
    }
    const token = createJwtToken(user.id);
    res.status(200).json({token, username});

};

function createJwtToken(id) {
    return jwt.sign({id}, jwtSecretKey, {expiresIn: jwtExpiresInDays});
}