### Ссылка на фигму

[Ссылка на фигму](https://www.figma.com/file/8KoRwpKjd2BYAAKclhEO57/project-1?node-id=0%3A1&t=zOsGCuxpS3BUmaW9-0)

### Информация о проекте

1. Используется `tsx` так как `typescript` поддерживает `JSX` синтаксис и `jsxFactory` что позволяет написать свой шаблонизатор без использования бабел трансформера.
2. В папке `core` написаны две функции `AIcreateElement` и `AIcreateFragment` которые позволяют отображать в браузере шаблоны
3. В папке `components` написаны базовые компоненты, которые используются 2 и более раз
4. В папке `types` содержатся описание интерфейсов, некоторые взяты со свагера [swagger](https://ya-praktikum.tech/api/v2/swagger/#/)
5. В папке `utils` содержатся функции с курса `Тема 14/28: Рубрика: мастерим сами → Урок 1/4` и еще вспомогательные функции для отображения даты и работы со стилями
6. В папке `modules` написаны базовые контейнеры для `spa`

### Базовые скрипты для работы с `spa`

`yarn dev` - запускает сборку дев для разработки функционала и тестирования
`yarn build` - запускает сборку для `production`
`yarn server` - запускает `express.js` сервер
`yarn start` - запускает `yarn build` и `yarn server` последовательно
