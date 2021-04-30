
// Отслеживаем url адреса

// Получаем модули
let express = require('express')
let express_session = require('express-session')
let parser = require('body-parser')
let operations = require('./my_modules/user_operations')

// Создаём объект парсер post запросов
let urlEncodedParser = parser.urlencoded({extended: false})

// Создаём базовый объект
let app = express()

// Устанавливаем настройки
app.use(express_session({secret: 'super_secret_key'}))
app.use('/public', express.static('public'))
app.set('view engine', 'ejs')

// Отслеживаем url адреса

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

app.get('/reg', ((req, res) => {
    if (req.session.logged) {
        res.redirect('/')
    }
    else {
        res.render('reg')
    }
}))

app.post('/reg', urlEncodedParser, ((req, res) => {
    operations.reg(req, res)
    operations.log(req, res)
}))

app.get('/logout', (req, res) => {
    req.session.logged = false
    req.session.login = ''
    res.render('msg', {msg: 'You have logged out successfully'})
})

// Запускаем сервер
app.listen(3000, () => {
    console.log('server started successfully')
})
