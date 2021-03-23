/*Этот файл создаст и настроит базу данных*/
let sqlite = require('sqlite3')
let fs = require('fs')

fs.writeFileSync(__dirname + '/db.sqlite3', '')
console.log('Файл базы данных успешно создан')
db = new sqlite.Database(__dirname + '/db.sqlite3')
console.log('База данных подключена')
db.run('create table people (id integer primary key, login varchar(30), pass varchar(32));', err => {
    if (err) {
        console.log('Не удалось создать таблицу в базе данных. Возникла ошибка:')
        throw err
    }
    console.log('Таблица в базе данных успешно создана.')
})
