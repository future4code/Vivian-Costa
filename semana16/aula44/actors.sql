CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);
-- EXERCICIO 1
/* a:  Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela.
Utilizamos o NOT NULL na frente das propriedades que devem ser obrigatorias. Para declarar o id utilizamos o VARCHAR() que mostra uma string de no max 
(x) caracteres, nesse caso, sao de 255 caracteres e PRIMARY KEY e o valor primario, mostrando que esse valor deve ser unico. 
Para declarar bith_date, utilizamos o Date, ele representa uma data e para declarar o gender, tambem utilizamos o Varchar, com no maximo 6 strings e
eh um campo obrigatorio. */

-- b:
SHOW DATABASES;
-- esse comando mostrou o nome do banco de dados.

SHOW TABLES;
-- esse comando mostra todas as tabelas criadas em banco de dados "x".

-- c:
DESCRIBE Actor;
-- esse comando mostra os valores declarados na tabela Actor

-- Exercício 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- a:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000 ,
  "1963-08-23", 
  "female"
);

-- b:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Xuxa",
  12000 ,
  "1975-08-20", 
  "female"
);

-- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
-- Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'

-- Esse erro aconteceu pois foi utilizado o mesmo id nas duas querys, como se trata de uma chave primaria, ela nao pode ser duplicada.

-- c: 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- Error Code: 1136. Column count doesn't match value count at row 1
-- Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
-- Esse erro aconteceu pois foram indicados 3 parametros e ao preencher os dados, foi incluido mais valores do que foi solicitado.
-- para ajustar, eu inclui os parametros que faltaram.

-- Error Code: 1054. Unknown column 'gende' in 'field list' // erro que apontou nome divergente 

-- d: 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Serginho Malandro",
  400000,
  "1949-04-18", 
  "male"
);

-- Error Code: 1364. Field 'name' doesn't have a default value
-- Código de erro: 1364. O campo 'nome' não tem um valor padrão
-- Esse erro foi devido ao campo nome ser obrigatorio e nao foi incluido nas informacoes acima, para ajustar, inclui nome nos parametros e um nome nos dados.

-- e: 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
-- faltou "" na data de nascimento, apos colocar as "", o valor foi incluido na tabela

-- f:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Xuxa",
  12000 ,
  "1975-08-20", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Ze do caixao",
  400000,
  "1949-04-18", 
  "male"
);




