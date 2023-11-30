const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer, name text, status boolean);
                insert into users values (123, 'Juan', true);`);

// create table transaction
postgresql.public.none(`create table transaction(pk_transaction integer, fk_user integer, description text, amount float);
                insert into transaction values (1, 123, 'sinpe', 25,255);`);

module.exports = {
    postgresql
}