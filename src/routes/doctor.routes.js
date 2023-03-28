import {Router} from "express";
const router=Router();
import * as doctor from '../controllers/doctor'
import * as authorization from '../middlewares/authorization'
import * as validation from '../middlewares/authorization'

router.post('/',authorization.verifyToken,authorization.isAdmin ,doctor.createDoctor );
router.get('/:id',authorization.verifyToken, doctor.getDoctor);
router.put('/:id',authorization.verifyToken,authorization.isDoctor, doctor.updateDoctor);
router.delete('/:id',authorization.verifyToken,authorization.isDoctor, doctor.deleteDoctor);

export default router;
