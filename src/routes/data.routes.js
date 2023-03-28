import {Router} from "express";
const router=Router();
import * as data from '../controllers/data';

router.post('/', data.createData);
router.get('/:patientId', data.getDataOf);
router.put('/:id', data.updateData);
router.delete('/:id', data.deleteData);

export default router;
