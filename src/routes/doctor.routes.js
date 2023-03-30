import {Router} from "express";
const router=Router();
import * as doctor from '../controllers/doctor'
import * as authorization from '../middlewares/authorization'
import * as validation from '../middlewares/authorization'

router.post('/',authorization.verifyToken,doctor.createDoctor );
router.get('/:id',authorization.verifyToken, doctor.getDoctor);
router.get('/all',authorization.verifyToken, doctor.getAll)
router.put('/:id',authorization.verifyToken, doctor.updateDoctor);
router.delete('/:id',authorization.verifyToken, doctor.deleteDoctor);

export default router;
