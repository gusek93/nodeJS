import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import * as authController from '../controller/auth.js';

const router = express.Router();


//유효성 검사
const validateCredential = [
    body('username')
    .trim()
    .notEmpty()
    .withMessage('username should be at least 5 chracters'),body('password')
    .trim()
    .isLength({min: 5})
    .withMessage('password should be at least 5 characters'),
    validate,
];

const validateDignup = [
    ...validateCredential,
    body('name').notEmpty().withMessage('name is missing'),
    body('email').isEmail().normalizeEmail().withMessage('inavalid email'),
    body('url')
        .isURL()
        .withMessage('invalid URL')
        .optional({ ulllable: true, checkFalsy: true}),
    validate,
];


router.post('/signup', validateDignup, authController.signup);
router.post('/login', validateCredential, authController.login);
//router.post('/me',authController.me);


export default router;