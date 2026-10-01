import {
    criarUsuario,
    listarUsuarios,
    atualizarUsuario,
    deletarUsuario
} from "../models/usuarioModel.js";

export async function criar(req, res) {
    try {
        const { nome, email } = req.body;

        const usuario = await criarUsuario(nome, email);

        res.status(201).json(usuario);
    } catch (e) {
        res.status(500).json({
            erro: "Falha ao criar usuário"
        });
    }
}

export async function listar(req, res) {
    try {
        const usuarios = await listarUsuarios();

        res.json(usuarios);
    } catch (e) {
        res.status(500).json({
            erro: "Falha ao listar usuários"
        });
    }
}

export async function atualizar(req, res) {
    try {
        const { id } = req.params;
        const { nome, email } = req.body;

        const result = await atualizarUsuario(id, nome, email);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                erro: "Usuário não encontrado"
            });
        }

        res.json({
            mensagem: "Atualizado com sucesso"
        });
    } catch (e) {
        res.status(500).json({
            erro: "Falha ao atualizar usuário"
        });
    }
}

export async function deletar(req, res) {
    try {
        const { id } = req.params;

        const result = await deletarUsuario(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                erro: "Usuário não encontrado"
            });
        }

        res.json({
            mensagem: "Deletado com sucesso"
        });
    } catch (e) {
        res.status(500).json({
            erro: "Falha ao deletar usuário"
        });
    }
}