import express from "express";
import db from "../config/db.js"; // Certifique-se de que o caminho está correto

const quimical = express.Router();

quimical.get("/quimical/:element1/:element2", (req, res) => {
    const { element1, element2 } = req.params;

    // Aqui você pode usar as variáveis element1 e element2 na consulta
    const query = `
        SELECT e3.name AS result FROM combination 
        INNER JOIN element e3 ON e3.id = combination.result_id
        WHERE (combination.element1_id = ? AND combination.element2_id = ?)
        OR (combination.element1_id = ? AND combination.element2_id = ?)
    `;

    // Passa os parâmetros na ordem correta para evitar SQL Injection
    const values = [element1, element2, element2, element1];

    db.query(query, values, (error, results) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao buscar combinação química" });
        }

        if (results.length === 0) {
            return res.status(404).send("Combinação não encontrada");
        }

        return res.json({ result: results[0].result });
    });
});

export default quimical;
