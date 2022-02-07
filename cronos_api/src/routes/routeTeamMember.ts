import { Router } from "express";
import * as apiTeamMember from  '../controllers/apiTeamMember'

const router = Router();

router.get('/lista', apiTeamMember.listTeamMembers);

router.post('/', apiTeamMember.createTeamMember);
router.put('/:id', apiTeamMember.updateTeamMember);
router.delete('/:id', apiTeamMember.deleteTeamMember);

export default router;