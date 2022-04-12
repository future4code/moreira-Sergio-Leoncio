## EXERCICIO 1

a)REMOVE A COLUNA SALARY

	ALTER TABLE Actor DROP COLUMN salary;

B)ALTERA A ESTRUTURA DA COLUNA GENDER PARA SEX COM 6 CARACTERES

	ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

C)ALTERA A ESTRUTURA DA COLUNA GENDER PARA GENDER COM 255 CARACTERES

	ALTER TABLE Actor CHANGE gender gender VARCHAR(255)
 
D) 

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

##EXERCICIO 2

A)

UPDATE Actor 
SET name = "Fernanda Torres", 
 birth_date = "1950-10-19";

B)

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

C)

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

D)

NÃO DÁ ERRO E NÃO É INSERIDO NA TABELA

##EXERCICIO 3

A)

DELETE FROM Actor WHERE name = "Fernanda Montenegro"

B)

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000

##EXERCICIO 4

A)

SELECT MAX(salary) FROM Actor

B)

SELECT MIN(salary) FROM Actor WHERE gender = "female"

C)

SELECT COUNT(*) FROM Actor WHERE gender = "female"

D)

SELECT SUM(salary) FROM Actor

##EXERCICIO 5

A) 

RETORNA QUANTIDADE DE ATORES POR GENERO FEMININO E MASCULINO

B)

SELECT id, name FROM Actor
ORDER BY name DESC;

C)

SELECT * FROM Actor
ORDER BY salary;

D)

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

E)

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

##EXERCICIO 6

A)

ALTER TABLE Movie ADD playing_limit_date DATE;

B)

ALTER TABLE Movie CHANGE rating rating FLOAT;

C)

UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"

D)

DELETE FROM Movie WHERE id = "001"

AO INSERIR A QUERY ABAIXO, NÃO DÁ ERRO E TAMBÉM NÃO MUDA NADA NA TABELA. POR QUE O ID E OS DADOS NÃO EXISTEM MAIS.

UPDATE Movie
SET sinopse = "se eu forsse você, filme de comédia brasileiro"
WHERE id = "001";

##












