import {Router} from "express";
import * as sns from '../controllers/sns';
import * as authorization from '../middlewares/authorization';
const router=Router();

router.get('/', sns.status);
router.post('/subscribe', sns.subscribe);
router.post('/sendNotification', sns.sendNotification);

export default router;
