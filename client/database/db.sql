

CREATE TABLE users (
    id int (11) NOT NULL auto_increment,
    name VARCHAR (250) NOT NULL,
    surname VARCHAR (250) NOT NULL,
    telephone int (20) NOT NULL,
    email VARCHAR (250) NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY(id)
);
