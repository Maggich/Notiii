# Music Sheet Library

Учебный проект: Django API, React + TypeScript + Vite, PostgreSQL и Docker Compose.

## Куда идти

- **Преподаватель:** откройте [ИНСТРУКЦИЯ_ПРЕПОДАВАТЕЛЮ.md](ИНСТРУКЦИЯ_ПРЕПОДАВАТЕЛЮ.md).
- **Мадиар:** [students/Madiar/Task.md](students/Madiar/Task.md).
- **Арыс:** [students/Arys/Task.md](students/Arys/Task.md).
- **Халил:** [students/Khalil/Task.md](students/Khalil/Task.md).
- **Аделя:** [students/Adelya/Task.md](students/Adelya/Task.md).
- **Кирилл:** [students/Kirill/Task.md](students/Kirill/Task.md).

Студенты работают в переданной папке `Notiii` и открывают только свой `Task.md`. Изменяйте только перечисленные там файлы. Сначала дождитесь решения преподавателя по полям каталога.

## Запуск проекта

Нужен установленный и запущенный Docker Desktop. Из корня этой папки выполните:

```powershell
docker compose up --build -d
docker compose ps
```

Откройте:

- Frontend: <http://localhost:5173>
- Backend health: <http://localhost:8000/api/v1/health/>
- Health через frontend proxy: <http://localhost:5173/api/v1/health/>

Ожидаемый ответ health: `{"status":"ok","service":"music-sheet-library-api"}`.

Остановить контейнеры, сохранив данные:

```powershell
docker compose down
```

Не используйте `docker compose down -v`, если не хотите удалить локальную базу PostgreSQL.

## Что уже работает

- Django health endpoint с проверкой соединения с PostgreSQL.
- React стартовая страница с загрузкой, ошибкой и повторным запросом.
- Vite proxy `/api/*` к Django.
- Docker Compose для backend, frontend и PostgreSQL.

## Файлы, подготовленные для студентов

Заготовки личных файлов уже лежат в проекте: Django-тесты — в `backend/catalog/test_*.py`; frontend-заготовки — в `frontend/src/api/works.ts`, `frontend/src/pages/CatalogPage.tsx` и `frontend/src/components/`. В этих файлах стоят TODO-комментарии с владельцем. Студент открывает свой `Task.md` и заменяет TODO только после согласования необходимых решений. Пустая заготовка не означает, что функция уже реализована.

Таблиц музыкального каталога, списка произведений, поиска и PDF пока нет. Не называйте эти функции готовыми, пока код не добавлен и не проверен.
