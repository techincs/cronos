import { Router } from "express";
import * as apiPost from  '../controllers/apiPost'

const router = Router();

router.get('/lista', apiPost.listPost);

router.post('/', apiPost.createPost);
router.put('/:id', apiPost.updatePost);
router.delete('/:id', apiPost.deletePost);

export default router;