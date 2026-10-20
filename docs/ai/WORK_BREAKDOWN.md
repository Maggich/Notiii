# Декомпозиция работ и соответствие Jira

**Проект Jira:** [Student Development Team (SDT)](https://dzangievmagamet.atlassian.net/plugins/servlet/project-config/SDT/details). 19.10.2026 проект найден по имени и доступным проектам; названия и описания 31 задачи упрощены на русском. 20.10.2026 добавлены 8 подзадач к существующим SDT-6, SDT-8, SDT-10, SDT-11, SDT-12 и SDT-16; все 8 ключей и родителей проверены через поиск Jira. Сейчас в backlog 39 задач. Исполнители не назначались: найденный аккаунт «Мади» не подтверждён как Мадиар, другие студенты не сопоставлены. Чтение, редактирование и создание задач подтверждены фактическими Jira-операциями; администрирование настроек проекта не проверялось.

## Эпики Jira

| Эпик | Jira | Простыми словами |
|---|---|---|
| Согласовать первый этап и контракт | [SDT-1](https://dzangievmagamet.atlassian.net/browse/SDT-1) | Преподаватель утверждает поля, связи и API до разработки |
| Django API и надёжные тесты | [SDT-2](https://dzangievmagamet.atlassian.net/browse/SDT-2) | Сервер каталога и проверки его поведения |
| React-каталог и связь с API | [SDT-3](https://dzangievmagamet.atlassian.net/browse/SDT-3) | Показать каталог, поиск и состояния запроса в браузере |
| PDF и интеграция — после решения преподавателя | [SDT-4](https://dzangievmagamet.atlassian.net/browse/SDT-4) | Отложенная часть; права PDF надо отдельно утвердить |
| Индивидуальный прогресс студентов | [SDT-5](https://dzangievmagamet.atlassian.net/browse/SDT-5) | Проверять и записывать обучение отдельно от кода |

## Задачи Jira по областям

| Работа | Сохранённые ключи |
|---|---|
| Согласование объёма каталога, функций и полей | [SDT-6](https://dzangievmagamet.atlassian.net/browse/SDT-6), [SDT-32](https://dzangievmagamet.atlassian.net/browse/SDT-32), [SDT-33](https://dzangievmagamet.atlassian.net/browse/SDT-33), [SDT-34](https://dzangievmagamet.atlassian.net/browse/SDT-34) |
| ERD, модели, миграции и тестовые данные | [SDT-7](https://dzangievmagamet.atlassian.net/browse/SDT-7), [SDT-23](https://dzangievmagamet.atlassian.net/browse/SDT-23), [SDT-24](https://dzangievmagamet.atlassian.net/browse/SDT-24) |
| API-контракт и ревью примеров | [SDT-8](https://dzangievmagamet.atlassian.net/browse/SDT-8), [SDT-25](https://dzangievmagamet.atlassian.net/browse/SDT-25), [SDT-35](https://dzangievmagamet.atlassian.net/browse/SDT-35) |
| Django API и проверки | [SDT-9](https://dzangievmagamet.atlassian.net/browse/SDT-9), [SDT-10](https://dzangievmagamet.atlassian.net/browse/SDT-10), [SDT-26](https://dzangievmagamet.atlassian.net/browse/SDT-26), [SDT-27](https://dzangievmagamet.atlassian.net/browse/SDT-27), [SDT-36](https://dzangievmagamet.atlassian.net/browse/SDT-36) |
| React-каталог и проверка async | [SDT-11](https://dzangievmagamet.atlassian.net/browse/SDT-11), [SDT-13](https://dzangievmagamet.atlassian.net/browse/SDT-13), [SDT-28](https://dzangievmagamet.atlassian.net/browse/SDT-28), [SDT-37](https://dzangievmagamet.atlassian.net/browse/SDT-37) |
| Карточки, адаптивность и проверка async | [SDT-12](https://dzangievmagamet.atlassian.net/browse/SDT-12), [SDT-14](https://dzangievmagamet.atlassian.net/browse/SDT-14), [SDT-29](https://dzangievmagamet.atlassian.net/browse/SDT-29), [SDT-38](https://dzangievmagamet.atlassian.net/browse/SDT-38) |
| Просмотр/скачивание PDF с учётом прав и тесты | [SDT-15](https://dzangievmagamet.atlassian.net/browse/SDT-15), [SDT-30](https://dzangievmagamet.atlassian.net/browse/SDT-30) |
| Интеграция и Docker | [SDT-16](https://dzangievmagamet.atlassian.net/browse/SDT-16), [SDT-31](https://dzangievmagamet.atlassian.net/browse/SDT-31), [SDT-39](https://dzangievmagamet.atlassian.net/browse/SDT-39) |
| Доказательства обучения Мадиара, Халила, Арыса и Адели | [SDT-17](https://dzangievmagamet.atlassian.net/browse/SDT-17), [SDT-18](https://dzangievmagamet.atlassian.net/browse/SDT-18), [SDT-19](https://dzangievmagamet.atlassian.net/browse/SDT-19), [SDT-20](https://dzangievmagamet.atlassian.net/browse/SDT-20) |
| Утверждение письменного/устного экзамена и общая диагностика | [SDT-21](https://dzangievmagamet.atlassian.net/browse/SDT-21), [SDT-22](https://dzangievmagamet.atlassian.net/browse/SDT-22) |

Подзадачи находятся под соответствующими задачами; 20.10.2026 проверены ключи SDT-32–SDT-39 и их родители. Назначения ждут однозначной проверки аккаунтов студентов.

## План работ в зависимости от результатов

12.10.2026 преподаватель подтвердил Кирилла как помощника по DevOps и сопровождению. Его текущее задание находится в `students/Kirill/Task.md`; сами ключи `SDT-16`/`SDT-31` не назначаются ему автоматически. Аккаунт Кирилла ещё не проверялся. Задания остальных студентов находятся в соответствующих папках `students/`; перед созданием новых Jira issues сверьте сохранённые ключи ниже с актуальным backlog.

| ID | Результат | Предлагаемый владелец | Зависимости | Доказательство продукта | Учебная проверка |
|---|---|---|---|---|---|
| WB-01 | Согласовать объём, права и размещение | Преподаватель + команда | Нет | Записанные решения | Каждый описывает границы продукта |
| WB-02 | Общие правила и начальная диагностика | Преподаватель + каждый студент | WB-01 | Диагностика и работа в выданной папке Notiii | Назначенные файлы, показ изменений, проверка и отладка |
| WB-03 | Концептуальная схема и ограничения | Мадиар, предложение | WB-01 | ERD, причины, миграции, данные | Защита связей/ключей и малое изменение |
| WB-04 | API-контракт: поиск, фильтры, ошибки, пагинация, PDF | Арыс + frontend + Мадиар | WB-01, черновик WB-03 | Примеры запросов/ответов | Каждый объясняет контракт и влияние изменения |
| WB-05 | Backend каталога и деталей | Арыс, предложение | WB-03, WB-04 | Endpoints, валидация, тесты, результаты запуска | Объяснение позитивных/негативных/граничных тестов и ORM |
| WB-06 | React-каталог/детали и API | Халил + Аделя, разделение уточняется | WB-04, mock или WB-05 | Поиск, фильтры, детали, состояния, тесты | Оба отдельно реализуют/исправляют async-поток |
| WB-07 | Просмотр/скачивание PDF по правам | Арыс + frontend, границы уточняются | Права WB-01, WB-04 | Разрешённые/запрещённые случаи | Объяснение проверки прав и сбоя |
| WB-08 | Интеграция, доступность, адаптивность и размещение | Команда, владелец уточняется; Кирилл помогает с DevOps | WB-05–07 | Сборка, сквозные проверки, воспроизводимость | Каждый диагностирует один сквозной сбой |
| WB-09 | Индивидуальные проверки и восполнение пробелов | Преподаватель + каждый студент | Диагностика и работа | Журнал фактов и адресная помощь | Самостоятельное объяснение/изменение/отладка |
| WB-10 | Подготовка и проведение экзамена | Преподаватель | Принятые правила и работа | Варианты, шкала, закрытые результаты | Отдельная проверка каждого |

Студенческие владельцы в таблице предложены. Обновлять назначения Jira можно после проверки аккаунта каждого и подтверждения ролей преподавателем. При изменении объёма, контракта или знаний студента задачи разделяют или корректируют после проверки текущего состояния Jira.
