# Сборка GULP

> Используется gulp версии 4.0. 

#### Для начала работы

> Должна быть установлена последняя версия Gulp CLI tools глобально (подробнее - [GitHub](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md) )

1. ```git clone <this repo>```
2. ```yarn init -y```
3. ```yarn install```
4. ```yarn upgrade```
5. ```git add .```
6. ```git commit -m```
7. ```git remote set-url origin <new repo>```
8. ```git remote -v```
9. ```git push -u origin master```

> #### Примечания
> 1. при ошибке 
>	Error: ENOENT: no such file or directory, open **\node_modules\svgo\.svgo.yml**
> выполнить
>	**yarn upgrade svgo**


## Структура папок и файлов
```
├── source/                       # Исходники
│
├── gulp/                         # Файлы сборщика (gulpfile.js)
│   ├── paths                     # Пути для сборки проекта
│   │   ├── app.js                # Пути к пользовательским скриптам
│   │   ├── js.foundation.js      # Пути к сторонним скриптам,
│   │   │                         #   например библиотекам или плагинам
│   │   ├── css.foundation.js     # Пути к сторонним файлам стилей, 
│   │   │                         #   таким как normalize.css или стили плагинов
│   │   └── tasks.js              # Пути к скриптам с задачами для gulpfile.js
│   ├── tasks                     # Подключаемые скрипты с задачами для gulpfile.js
│   │   │                         #   чтобы сборщик мог выполнить таск, 
│   │   │                         #   его необходимо прописать в ../paths/tasks.js
│   │   ├── clean.js              # Удадение папки со сборкой (build)
│   │   ├── copy.fonts.js         # 
│   │   ├── copy.image.js         #
│   │   ├── copy.video.js         #
│   │   ├── css.foundation.js     #
│   │   ├── js.foundation.js      #
│   │   ├── js.lint.js            #
│   │   ├── js.process.js         #
│   │   ├── pug.js                #
│   │   ├── sass.js               #
│   │   ├── serve.js              #
│   │   ├── sprite.png.js         #
│   │   ├── sprite.svg.js         #
│   │   └── watch.js              # Отслеживание изменений и запуск задач
│   └── config.js                 # Файл конфигурации для путей сборщика
│                                 #   в частности, здесь указывается корневой каталог
│                                 #   для результатов сборки (build)
│      
├── build/                        # Сборка (автогенерация)
│   ├── css/                      # Стили
│   ├── js/                       # Скрипты
│   ├── fonts/                    # Шрифты
│   ├── img/                      # Все изображения
│   └── index.html                # Страница
│   
├── .eslintrc                     # Конфигурация проверки JavaScript в ESLint
├── .gitignore                    # Список исключённых файлов из Git
├── gulpfile.js                   # Файл для запуска Gulp.js
├── package.json                  # Список модулей и прочей информации
├── content.json                  # Данные для сайта
└── readme.md                     # Документация шаблона
```