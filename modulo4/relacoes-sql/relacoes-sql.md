##EXRCICIO 1

a)

 chave estrangeira se relaciona com uma outra tabela;

b)

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`moreira-21713057-sergio-leoncio`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Erro que apresenta diz que não existe o id.

d)

ALTER TABLE Movie DROP COLUMN rating;

e)

Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`moreira-21713057-sergio-leoncio`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS `Movie` (` id`))
Erro acima diz que não pode deletar nenhuma linha antes tem que deletar a relação com a tabela de avaliações.

##EXERCICIO 2

a)

tem duas chaves estrangeiras se relacionando com as tabelas de avaliação e filmes;

b)

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("2","001");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(	"1", "002" );
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(	"3", "006");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("1", "006");

c)


