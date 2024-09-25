drop DATABASE quimical;
create DATABASE quimical;
use quimical;

CREATE TABLE element(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) 
);

CREATE TABLE combination (
    id INT PRIMARY KEY AUTO_INCREMENT,
    element1_id int,
    element2_id int,
    result_id int,
    Foreign Key (element1_id) REFERENCES element(id),
    Foreign Key (element2_id) REFERENCES element(id),
    Foreign Key (result_id) REFERENCES element(id)
);

-- testes -- 
INSERT INTO element (name) VALUES ("hydrogen"),("oxygen"),("water");
INSERT INTO combination (element1_id,element2_id,result_id) values (1,2,3);
SELECT e3.name FROM combination INNER JOIN element e3 on e3.id = combination.result_id
WHERE (combination.element1_id = 1 OR combination.element1_id = 2) AND
(combination.element2_id = 2 OR combination.element2_id = 1);
SELECT * FROM element;