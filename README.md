# Simple-Calculator

## 1. Task

[Google Docs Task Description](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)

## 2. How to Run the App

### For Development:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run start
   ```

   The application will be available at [http://localhost:8080](http://localhost:8080).

### For Production Build:

1. Build the project:

   ```bash
   npm run build
   ```

   All build files will be located in the `dist` folder.

### 3. Project Structure

```
simple-calculator/
│
├── src/                   # Main folder containing the source files of the application
│   ├── index.js           # Main entry point of the application
│   ├── calculator.js      # Logic for the calculator
│   ├── index.html         # HTML template used during the build
│   └── styles.css         # Styles for the application
│
├── dist/                  # Folder created after building the application
│   ├── index.html         # Optimized HTML file for production
│   └── bundle.js          # Optimized JavaScript file for production
│
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── webpack.config.js      # Webpack configuration
├── package.json           # Project configuration
│
├── node_modules/          # Folder containing project dependencies
│                          # Automatically created when installing packages using npm install
│
└── .husky/                # Settings for pre-commit hook to check ESLint and format code

```

### 4. Code Quality

The application is set up to use **ESLint** and **Prettier** for code linting and formatting.

#### How to Run Code Checks:

- Linting with ESLint:

  ```bash
  npm run lint
  ```

- Formatting code with Prettier:

  ```bash
  npm run format
  ```

#### Pre-commit Hook:

The project is configured with a pre-commit hook using **Husky** and **lint-staged**, which automatically checks the code with ESLint. If there are errors, the commit will not be completed.

### 5. Deployment

The application has been successfully deployed using GitHub Pages and is available at the following address: https://lexasby.github.io/Simple-Calculator/.

---

## 1. Задача

[Описание задачи в Google Docs](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)

## 2. Как запустить приложение

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

### Для production сборки:

1. Соберите проект:

   ```bash
   npm run build
   ```

   Все файлы сборки будут находиться в папке `dist`.

### 3. Структура проекта

```
simple-calculator/
│
├── src/                   # Основная папка, содержащая исходные файлы приложения
│   ├── index.js           # Главная точка входа приложения
│   ├── calculator.js      # Логика работы калькулятора
│   ├── index.html         # Шаблон HTML, используемый при сборке
│   └── styles.css         # Стили для приложения
│
├── dist/                  # Папка, создаваемая после сборки приложения
│   ├── index.html         # Оптимизированный HTML-файл для production
│   └── bundle.js          # Оптимизированный JavaScript файл для production
│
├── .eslintrc.json         # Конфигурация ESLint
├── .prettierrc            # Конфигурация Prettier
├── webpack.config.js      # Конфигурация Webpack
├── package.json           # Конфигурация проекта
│
├── node_modules/          # Папка с зависимостями проекта
│                          # Автоматически создается при установке пакетов с помощью npm install
│
└── .husky/                # Настройки pre-commit hook для проверки ESLint и форматирования кода

└── package.json          # Конфигурация проекта
```

### 4. Качество кода

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

В проект настроен pre-commit hook с помощью **Husky** и **lint-staged**, который автоматически проверяет код с помощью ESLint. Если есть ошибки, коммит не будет выполнен.

### 5. Деплой

Приложение было задеплоено с использованием GitHub Pages и доступно по следующему адресу: https://lexasby.github.io/Simple-Calculator/.
