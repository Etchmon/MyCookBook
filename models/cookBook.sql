DROP DATABASE IF EXISTS cookBook;
CREATE DATABASE cookBook;

USE cookBook;

SELECT * FROM Recipes;


INSERT INTO Recipes (id, recipeName, ingredients, instructions, createdAt, updatedAt ) VALUES (1,'Good Pot Roast', '1 Pot Roast', 'Cook Pot Roast', CURDATE(), CURDATE());
INSERT INTO Recipes (id, recipeName, ingredients, instructions, createdAt, updatedAt ) VALUES (2,'Wonderful Soup', '1 Carrot', 'Heat up soup', CURDATE(), CURDATE());

SELECT * FROM Users;
