# "Место" на нативном JS

Проект написан на нативном JS + HTML + CSS

Посмотреть приложение в браузере можно по этой ссылке [https://pavelegorov-ru.github.io/mesto/](https://pavelegorov-ru.github.io/mesto/)

Разработка велась в одной ветке `main`. Ревью проводилось в интерфейсе Яндекс Практикума.

Если кто-то захочет взять его за основу своего проекта, установите зависимости с помощью команды `npm ci`. Во время разработки использовалась Node версии 14

Развернуть приложение локально командой `npm run start`

## Текущий стек

HTML5 (адаптивная верстка под десктоп и мобильный), CSS: БЭМ, REST API, нативный JS(ООП) Babel, Webpack

## Текущая функциональность

Особенности работы:

- При входе любой пользователь попадает в один единственный профиль, т.к. готовый токен присвоен в переменную и сипользуется в коде.
- Можно редактировать свой профиль и автар. Изменения будут сохранены на сервере.
- Можно добавлять свои карточки с фото тех мест, которые посетил.
- Можно добавлять и снимать свои лайки с карточек. Все изменения сохраняются на сервере.
- Можно удалять свои карточки.
- Валидация форм работает, постоянная при вводе.
- Попап закрывается при клике на крестик, оверлей и клавишей ESC.

## Недоработки, которые нужно будет поправить в будущем.

1. Сделать более плавный переход от десктопной версии к мобильной;
2. Форматирование кода. Подключить EsLint и Prettier;
3. Попробовать сделать навигацию и регистрацию (взять токен из проекта, который выполнен на React)
