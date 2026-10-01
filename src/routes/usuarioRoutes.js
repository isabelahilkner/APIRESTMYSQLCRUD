import { Router } from "express";

import {
    criar,
    listar,
    atualizar,
    deletar
} from "../controllers/usuarioController.js";

const router = Router();

router.get("/", listar);
router.post("/", criar);
router.put("/:id", atualizar);
router.delete("/:id", deletar);

export default router;