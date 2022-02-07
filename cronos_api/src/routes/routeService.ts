import { Router } from "express";
import * as apiService from  '../controllers/apiService'

const router = Router();

router.get('/lista', apiService.listService);

router.post('/', apiService.createService);
router.put('/:id', apiService.updateService);
router.delete('/:id', apiService.deleteService);

export default router;