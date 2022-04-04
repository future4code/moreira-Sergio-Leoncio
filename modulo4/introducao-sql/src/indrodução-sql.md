```
#exercicio 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
/*A) VARCHAR- DETERMINA QUANTIDADE DE CARACTERES;
	 DATE - REPRESENTA UMA DATA (ANO-MES-DIA)*/
/*B) show databases informa o esquema ou seja o nome usuario; 
	show tables mostra o nome da tabela*/
#SHOW DATABASES 
#SHOW TABLES
/*C) DESCRIBE Actor mostra a tabela completa com os tipos*/
#describe Actor

#exercicio 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
#A)
insert into Actor
values("002", "Glória Pires", 1200000, "1963-08-23", "female");

#B) Chave primary duplicada(Duplicate entry 002 for Key PRIMARY
insert into Actor
values("002", "Sergio Henrique", 3200000, "1972-05-13", "male");

/*C)Código de erro: 1136. A contagem de colunas não corresponde
 à contagem de valores na linha 1*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
#D) Código de erro: 1364. O campo 'nome' não tem um valor padrão
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Anônimo",
  400000,
  "1949-04-18", 
  "male"
);
#E)Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
#faltou colocar entre aspas
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
#exercicio 3
#SELECT * FROM Actor
#SELECT id, salary from Actor 
#SELECT id, name from Actor WHERE gender = "male"
#A)
#select * from Actor
#B)
#select salary from Actor where name = "Tony Ramos"
#C) Mostra a tabela sem dados ou seja com os campus null
#select * from Actor where gender = "invalid"
#D) 
#select id, name from Actor where salary <= 500000
#E)Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
#campo nome esta errado, o certo name.
#SELECT id, name from Actor WHERE id = "002"

#exercicio 4
#SELECT * FROM Actor
#WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

#a) BETWEEN VERIFICA SE O VALOR ESTÁ ENTRE DOIS: EX. ENTRE 20 E 40

#B)
#select * from Actor
#where (name not like "A%") and salary > 350000

#C)
#select * from Actor
#where (name like "G%" or name like "g%" )between "G" and "g"

#D)
#select * from Actor
#where (name like "G%" or name like "g%" or name like "a" or name like "A")between 350000 and 900000

#exercicio 5
#a)
CREATE TABLE Filmes (
    id INT PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    sinopse VARCHAR (255) NOT NULL,
    release_date DATE NOT NULL,
    evaluation INT 
);
#b)
insert into Filmes
values(
	001, 
	"Se Eu Fosse você",
	 "Cláudio e Helena são casados há muitos anos e enfrentam
     a rotina do casamento. Um dia eles são atingidos por um 
     fenômeno inexplicável e trocam de corpos",
	 "2006-01-06",
	 7
 );
 #c)
 insert into Filmes
values(
	002, 
	"Doce de mãe",
	 "Dona Picucha, senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro 
     filhos sofre uma reviravolta depois que Zaida, empregada 
     e amiga de Dona Picucha, anuncia que vai se casar e não 
     poderá mais morar com ela",
	 "2012-12-27",
	 10
 );
 #d)
 insert into Filmes
values(
	003, 
	"Dona Flor e seus dois Maridos",
	 "Dona Flor é uma sedutora professora de culinária casada
     com Vadinho, que só quer saber de farras e jogatina nas 
     boates. A vida de abusos acaba por acarretar sua morte 
     precoce.",
	 "2017-11-02",
	 8
 );
 
 #exercicio 6
 #a) 
 #select id, title, evaluation from Filmes where id = 002
 #b)
#select  * from Filmes where title = "Dona Flor e seus dois Maridos"
 #c)
 #select id, title, sinopse from Filmes where evaluation > 7
 
 #exercicio 7
 #A)
 #SELECT * FROM Filmes
#WHERE title LIKE "%vida%";
#b)
#SELECT * FROM Filmes
#WHERE title LIKE "%TERMO DE BUSCA%" OR
 #     sinopse LIKE "%TERMO DE BUSCA%";
#c)
#SELECT * FROM Filmes
#WHERE release_date < "2020-05-04";
#d)
SELECT * FROM Filmes
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      sinopse LIKE "%TERMO DE BUSCA%") AND evaluation > 7;
```










