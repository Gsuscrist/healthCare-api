import {Router} from 'express';
const router=Router();
import * as roles from '../controllers/role'

router.get("/:id",roles.getRole)

export default router;
