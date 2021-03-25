/*Функции, связанные с работой с пользователем. Для удобства вынесены в отдельный файл.*/

//Получаем модуль для работы с базой данных
let sqlite = require('sqlite3')

//Создаём объект базы данных
let db = new sqlite.Database('db.sqlite3')

//Сразу выводим функцию "логирования" в модуль
module.exports.log = (req, res) => {
    //Отправляем запрос базе данных
    db.get(`select * from people where login = '${req.body.login}';`, (err, data) => {
        //Если ошибка, то выбрасываем её
        if (err) {
            throw err
        }
        //Проверяем, вернула ли база данных какую-либо информацию
        if (data) {
            //Проверяем пароль на совпадение
            /*Над шифрованием пароля ещё работаю*/
            if (data.pass === req.body.password) {
                req.session.logged = true
                req.session.login = req.body.login
                res.redirect('/')
            } else {
                res.render('msg', {msg: 'Incorrect password.'})
            }
        } else {
            res.render('msg', {msg: 'There is not any account with this login'})
        }
    })
}

module.exports.reg = (req, res) => {
    let login = req.body.login
    let pass = req.body.password
    db.get(`select id from people where login = '${login}';`, (err, data) => {
        if (err) {
            throw err
        }
        if (data) {
            res.render('msg', {msg: 'Account with this login already exits'})
        } else {
            db.run(`insert into people (login, pass) values ('${login}', '${pass}');`, (err) => {
                if (err) {
                    throw err
                }
                req.session.logged = true
                req.session.login = login
                res.redirect('/')
            })
        }
    })
}
