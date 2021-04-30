# EUM
example user management

пример работы с пользователями и сессиями в node js с использованием express.

# Системные требования
- Рабочий терминал (cmd, powershell, bash, konsole etc.)
- Версия node.js не менее 15
- Версия npm не менее 7

# Настройка
Чтобы загрузить проект и сделать его работоспособным, необходимо запустить следующие команды:
```bash
git clone https://github.com/coder8080/express_user_management
cd express_user_management
npm install
node deploy.js
```

Если вы уже скачали проект, а вам нужно лишь сделать его работоспособным, то в директории проекта нужно выполнить только эти команды:
```bash
npm install
node deploy.js
```

# Запуск
Чтобы запустить проект (сервер) выполните следующую команду:
```bash
node index.js
```

# Перезапуск при изменении файла (для разработчиков)
Чтобы при внесении изменений в файл index.js сервер перезапускался автоматически, необходимо глобально установить пакет nodemon.

В windows:
```bash
npm install nodemon -g 
```

В linux:
```bash
sudo npm install nodemon -g
```

и запустить проект уже с помощью команды nodemon:
```bash
nodemon index.js
```

# Проблемы
Обо всех найденных багах и проблемах сообщать сюда: https://github.com/coder8080/express_user_management/issues
