import {Router} from "express";
import * as patient from '../controllers/patient';
import * as authorization from '../middlewares/authorization'
import * as validation from '../middlewares/authorization'
const router=Router();

router.get('/:id', authorization.verifyToken, patient.getPatient);
router.post('/',authorization.verifyToken , patient.getPatientWith);
router.post('/doctor', authorization.verifyToken, patient.getDoctorOf)
router.put('/:id', authorization.verifyToken, patient.updatePatient);
router.delete('/:id', authorization.verifyToken, patient.deletePatient);

export default router;
