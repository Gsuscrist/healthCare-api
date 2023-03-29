import {Router} from "express";
const router=Router();
import * as diagnosisQuestion from "../controllers/diagnosisQuestion";
import * as authorization from '../middlewares/authorization'

router.post("/",authorization.verifyToken,diagnosisQuestion.createDiagnosis);
router.get("/:patientId",authorization.verifyToken, diagnosisQuestion.getDiagnosisOf);
router.put("/:id",authorization.verifyToken, diagnosisQuestion.updateDiagnosis);
router.delete("/:id",authorization.verifyToken, diagnosisQuestion.deleteDiagnosis);

export default router;
