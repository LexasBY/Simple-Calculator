
# Simple-Calculator

## 1. Task
[Google Docs Task Description](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)

## 2. How to Run the App

### Для разработки:
1. Установите зависимости:

   ```bash
   npm install
   ```

2. Запустите dev-сервер для разработки:

   ```bash
   npm run start
   ```

   Приложение будет доступно по адресу [http://localhost:8080](http://localhost:8080).

### Для продакшен сборки:
1. Соберите проект:

   ```bash
   npm run build
   ```

   Все файлы сборки будут находиться в папке `dist`.

### 3. Структура проекта

- **`src/`** — Основная папка, содержащая исходные файлы приложения:
  - **`index.js`** — Главная точка входа приложения.
  - **`calculator.js`** — Логика работы калькулятора.
  - **`style.css`** — Стили для приложения.
  - **`index.html`** — Основной HTML-файл, используемый при сборке.

- **`dist/`** — Папка, создаваемая после сборки приложения. Содержит оптимизированные файлы для продакшена (HTML и JavaScript).

- **`node_modules/`** — Папка с зависимостями проекта. Автоматически создается при установке пакетов с помощью `npm install`.

- **`.husky/`** — Настройки pre-commit hook для проверки ESLint и форматирования кода.

### 4. Code Quality

Приложение настроено на использование **ESLint** и **Prettier** для линтинга и форматирования кода.

#### Как запустить проверку кода:
- Линтинг с помощью ESLint:

  ```bash
  npm run lint
  ```

- Форматирование кода с помощью Prettier:

  ```bash
  npm run format
  ```

#### Pre-commit hook:

В проект настроен pre-commit hook с помощью **Husky** и **lint-staged**, который автоматически проверяет код с помощью ESLint и форматирует его с помощью Prettier перед коммитом. Если есть ошибки, коммит не будет выполнен.


