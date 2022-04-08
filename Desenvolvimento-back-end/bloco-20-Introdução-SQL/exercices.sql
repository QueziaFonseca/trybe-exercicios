-- 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

--movie -> table Movies, | colums  id , title
--domestic_sales , -international_sales-> table BoxOffice | 
--                                        columns domestic_sales , movie_id
SELECT mo.title, bo.domestic_sales, bo.international_sales
FROM Pixar.Movies AS mo
INNER JOIN Pixar.BoxOffice AS bo
ON mo.id = bo.movie_id;


--2: Utilizando o INNER JOIN , faça uma busca que retorne
--o número de vendas para cada filme que possui um 
--número maior de vendas internacionais ( international_sales ) 
--do que vendas nacionais ( domestic_sales ).

--sales ->  international_sales + domestic_sales
--  condição -> international_sales > domestic_sales

SELECT 
    mo.title,
    bo.international_sales + bo.domestic_sales AS `sales`
FROM
    Pixar.Movies AS mo
        INNER JOIN
    Pixar.BoxOffice AS bo ON mo.id = bo.movie_id
WHERE
    bo.international_sales > bo.domestic_sales;

-- 3: Utilizando o INNER JOIN , faça uma busca que retorne
-- os filmes (Movies.title) e sua avaliação ( BoxOffice.rating ) em ordem decrescente.

SELECT 
    mo.title, bo.rating
FROM
    Pixar.Movies AS mo
        INNER JOIN
    Pixar.BoxOffice AS bo ON mo.id = bo.movie_id
ORDER BY rating DESC;

 --4: Utilizando o LEFT JOIN , 
 --faça uma busca que retorne todos os dados 
 --dos cinemas, mesmo os que não possuem 
 --filmes em cartaz e, adicionalmente, 
 --os dados dos filmes (Theater: id, name, location) 
 --que estão em cartaz nestes cinemas. 
 --Retorne os nomes dos cinemas em ordem alfabética.
--Theater.id = movies.theater_id
SELECT 
    th.name,
    th.location,
    mo.title,
    mo.director,
    mo.year,
    mo.length_minutes
FROM
    Pixar.Theater AS th
        LEFT JOIN
    Pixar.Movies AS mo ON th.id = mo.theater_id
ORDER BY th.name
;