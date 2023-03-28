import {Router} from "express";
import {apiLimit} from "../middlewares/apiLimitation";

const router=Router();

import * as auth from '../controllers/auth';
import * as validation from '../middlewares/validation';

router.post('/signIn', auth.signIn);
router.post('/signUp', apiLimit, validation.checkDuplicateEmail, auth.signUp);

export default router;
