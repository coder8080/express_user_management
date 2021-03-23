/*Проект показывает простую систему работы с пользователями в node js*/
/*Главный файл*/

//Получаем модули
let express = require('express')
let express_session = require('express-session')
let parser = require('body-parser')
let operations = require('./my_modules/user_operations')

//Создаём объект парсера post запросов
let urlEncodedParser = parser.urlencoded({extended: false})

//Создаём базовый объект
let app = express()

//Устанавливаем настройки
app.use(express_session({secret: 'super_secret_key'}))
app.use('/public', express.static('public'))
app.set('view engine', 'ejs')

/*Отслеживаем url адреса*/

app.get('/', ((req, res) => {
    if (req.session.logged) {
        res.render('index', {obj: req.session})
    } else {
        res.redirect('/login')
    }
}))

app.get('/login', ((req, res) => {
    if (req.session.logged) {
        res.redirect('/')
    } else {
        res.render('login')
    }
}))

app.post('/login', urlEncodedParser, ((req, res) => {
    operations.log(req, res)
}))

//Пока не работает. Пользователя надо создавать вручную через консоль базы данных
/*app.get('/reg', ((req, res) => {
    if (req.session.logged) {
        res.redirect('/')
    }
    else {
        res.render('reg')
    }
}))*/

//Запускаем сервер
app.listen(3000, () => {
    console.log('server started successfully')
})