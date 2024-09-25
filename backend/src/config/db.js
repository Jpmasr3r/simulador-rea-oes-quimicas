import mysql from "mysql2"; 

const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "",
    database: "quimical",
    port: 3306
});

db.connect(err => {
    if(err) {
        console.error("Erro ao conectar ao banco",err);
        return;
    }
    console.log("Sucesso ao conectar ao banco");
})

export default db;