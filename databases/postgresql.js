const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer PRIMARY KEY, name text, status boolean);`);


// create datas user
postgresql.public.none(`insert into users values (123, 'Juan', true);;`);
postgresql.public.none(`insert into users values (456, 'Ariany', true);`);


// create table transaction
postgresql.public.none(`create table transaction(pk_transaction integer PRIMARY KEY, fk_user integer, description text, amount float,  CONSTRAINT fk_user FOREIGN KEY (fk_user) REFERENCES users(pk_user));`);

// create datas transaction
postgresql.public.none(`insert into transaction values (1, 123, 'sinpe', 25.5);`);
postgresql.public.none(`insert into transaction values (2, 123, 'deposito', 16.9);`);
postgresql.public.none(`insert into transaction values (3, 123, 'efectivo', 100.34);`);
postgresql.public.none(`insert into transaction values (4, 456, 'sinpe', 234.56);`);

module.exports = {
    postgresql
}