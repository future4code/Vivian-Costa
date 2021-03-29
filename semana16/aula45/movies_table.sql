SELECT * FROM `epps-vivian-costa`.Movies;

-- Exercício 1
/* A: O comando ALTER TABLE serve para fazer alteracao em uma tabela que ja existe.
O DROP COLUMN remove uma coluna.
ALTER TABLE Actor DROP COLUMN salary, esse comando ira apagar a coluna
salario da tabela Actor.
*/

/*B: ALTER TABLE Actor CHANGE gender sex VARCHAR(6) - ira alterar na tabela Actor
a coluna gender, ela passara a ser sex com o VARCHAR(6)" string com max 6 caracteres"
*/

/*C: ALTER TABLE Actor CHANGE gender gender VARCHAR(255); - altera a coluna
gender para que ela aceite strings de ate 255 caracteres.
*/

-- D: 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for 
-- the right syntax to use near 'VARCHAR(100)' at line 1

-- Exercício 2



-- A: 
UPDATE Actor
SET name = "Carla Perez", birth_date = "1985-01-15"
WHERE id = "003";

-- Error Code: 1292. Truncated incorrect DOUBLE value: 'Selton Melo'
-- Error Code: 1292. Truncated incorrect DOUBLE value: 'Carla Perez'

-- B: 
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

-- C: 
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

-- Error Code: 1175. You are using safe update mode and you tried
-- to update a table without a WHERE that uses a KEY column.  
-- To disable safe mode, toggle the option in Preferences -> 
-- SQL Editor and reconnect.
SELECT * FROM  Actor;
-- D: 

UPDATE Actor
SET name = "Mauricio Mattar",
 salary = 650000, 
 birth_date="1970-08-02",
 gender="male"
WHERE id = "005";

-- D: 
UPDATE Actor
SET name = "Mauricio M",
 salary = 650000
WHERE id = "100";

-- a tabela atualiza com valores null

-- Exercício 3

-- A: 
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

-- B: 
DELETE FROM Actor WHERE gender = "male" AND salary > 100000000;

-- Exercício 4

-- A: 
SELECT MAX(salary) FROM Actor;

-- B: 
SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- C: 
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- D: 
SELECT SUM(salary) FROM Actor;

-- EXERCICIO 5

-- A: 
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

/* essa query retorna a quantidade de atrizes e atores da tabela Actor,
retorna separado por genero.
*/

-- B: 
SELECT id, name FROM Actor
 ORDER BY name DESC;
 
 -- C: 
 SELECT name FROM Actor
 ORDER by salary;

-- D:
SELECT name FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- E: 
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

-- Exercício 6

-- A: 
 ALTER TABLE Movies ADD playing_limit_date DATE;

-- B: 
ALTER TABLE Movies CHANGE assessment assessment FLOAT;

-- C: 
UPDATE Movies
SET playing_limit_date = "2021-01-31"
WHERE id = "001";

UPDATE Movies
SET playing_limit_date = "2019-05-28"
WHERE id = "003";

-- D: 
DELETE FROM Movies
WHERE name = "Dona Flor e Seus Dois Maridos";

/*'003', 'Dona Flor e Seus Dois Maridos', 
'Dona Flor é uma sedutora professora de culinária casada com Vadinho,\n  que só quer saber de farras e jogatina nas boates. \n  A vida de abusos acaba por acarretar sua morte precoce', 
'2017-11-02', '8', 
'2019-05-28'
*/

UPDATE Movies
SET sinopse = "'Dona Flor é uma sedutora professora de culinária casada com Vadinho"
WHERE id = "003";

/* 
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0, pelo que entendi,
nao da nenhum erro, mas nao altera nada. */

-- Exercício 7

-- A: 
SELECT COUNT(*) FROM Movies
 WHERE assessment > 7.5;
 
 -- B: 
 SELECT AVG(assessment) FROM Movies;
 
 -- C: 
  SELECT COUNT(*) FROM Movies; ;
  
  -- D: 
  SELECT COUNT(*) FROM Movies WHERE release_dateof > CURDATE();
  
  -- E: 
  SELECT MAX(assessment) FROM Movies; 
  
  -- F: 
  SELECT MIN(assessment) FROM Movies;
  
  -- Exercício 8
  
  -- A: 
  SELECT * FROM Movies ORDER BY name;
  
  -- B:
  SELECT * FROM Movies 
  ORDER BY name
  LIMIT 5;
  
  -- C: 
  SELECT * FROM Movies 
WHERE release_dateof < CURDATE() 
ORDER BY release_dateof DESC 
LIMIT 3;

-- D: 
SELECT * FROM Movies
ORDER BY assessment DESC
LIMIT 3;
  
