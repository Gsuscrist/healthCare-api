import {Router} from 'express';
import * as s3 from '../controllers/s3';

const router=Router();

router.post('/',s3.uploadFileToS3)
export default router;
