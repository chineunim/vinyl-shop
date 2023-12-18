// Оголошення класу базового винятку
class MyException extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.statusCode = 500; // Встановіть відповідний HTTP-код статусу
  }
}

// Класи винятків-потомки
class FileReadError extends MyException {
  constructor(message) {
    super(message);
    this.statusCode = 404; // Наприклад, 404 для файлу не знайдено
  }
}

class FileWriteError extends MyException {
  constructor(message) {
    super(message);
    this.statusCode = 500; // Наприклад, 500 для помилки запису файлу
  }
}

class TableOpenError extends MyException {
  constructor(message) {
    super(message);
    this.statusCode = 503; // Наприклад, 503 для недоступності таблиці
  }
}

// Клас обробника винятків
class ExceptionHandler {
  handleException(error) {
    console.error(`Caught an exception: ${error.name} - ${error.message}`);
    console.error(`Status Code: ${error.statusCode}`);
    // Додайте додаткову обробку винятку за потребою
  }
}

// Тестовий код для випробування обробки винятків
try {
  // Спроба читання файлу (можна використати ваші функції читання файлу)
  throw new FileReadError("Could not read the file.");
} catch (error) {
  // Створення об'єкта обробника винятків
  const exceptionHandler = new ExceptionHandler();
  // Обробка винятку
  exceptionHandler.handleException(error);
}
