# Backend — Django API

В этой папке находятся проект Django `config` и начальное приложение `catalog`.

## Запуск через Docker Compose

Из корня проекта:

```powershell
docker compose up --build
```

Compose ждёт готовности PostgreSQL, применяет существующие миграции и запускает Django на порту 8000. Текущий `runserver` предназначен для локальной разработки.

## Действующий endpoint

`GET /api/v1/health/` проверяет соединение Django с PostgreSQL. При готовности возвращает HTTP 200 и `{"status":"ok","service":"music-sheet-library-api"}`; при недоступности базы — HTTP 503.

Модели каталога, поиск, детали и обработка PDF пока не реализованы. Начинай каталог только по шагам из назначенного файла `students/<имя>/Task.md` и после подтверждения преподавателем полей и API.
