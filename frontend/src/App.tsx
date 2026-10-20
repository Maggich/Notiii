import { useEffect, useState } from 'react'
import { getApiHealth, type ApiHealth } from './api/health'
import './App.css'

type ConnectionState =
  | { status: 'loading' }
  | { status: 'success'; data: ApiHealth }
  | { status: 'error'; message: string }

function App() {
  const [connection, setConnection] = useState<ConnectionState>({ status: 'loading' })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    getApiHealth(controller.signal)
      .then((data) => setConnection({ status: 'success', data }))
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === 'AbortError') return
        const message = error instanceof Error ? error.message : 'Неизвестная ошибка'
        setConnection({ status: 'error', message })
      })

    return () => controller.abort()
  }, [attempt])

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Music Sheet Library — главная">
          <span className="brand-mark" aria-hidden="true">♫</span>
          <span>Music Sheet Library</span>
        </a>
        <span className="header-label">Стартовый шаблон проекта</span>
      </header>

      <section className="intro-card" aria-labelledby="page-title">
        <p className="eyebrow">ПУБЛИЧНЫЙ КАТАЛОГ НОТ</p>
        <h1 id="page-title">Начинаем собирать библиотеку</h1>
        <p className="intro-copy">
          Здесь появятся поиск по произведениям и композиторам, фильтры,
          страницы нот и разрешённый предпросмотр PDF.
        </p>

        <div className={`connection connection--${connection.status}`} role="status" aria-live="polite">
          <span className="connection-dot" aria-hidden="true" />
          {connection.status === 'loading' && <span>Проверяем соединение с сервером…</span>}
          {connection.status === 'success' && (
            <span>Сервер отвечает: {connection.data.service} ({connection.data.status})</span>
          )}
          {connection.status === 'error' && (
            <span>Сервер пока недоступен: {connection.message}</span>
          )}
        </div>

        <button
          className="button-primary"
          type="button"
          onClick={() => {
            setConnection({ status: 'loading' })
            setAttempt((value) => value + 1)
          }}
        >
          Проверить сервер снова
        </button>
      </section>

      <section className="starter-grid" aria-label="Состав шаблона">
        <article className="starter-card">
          <span className="card-number">01</span>
          <h2>Интерфейс</h2>
          <p>React, TypeScript и Vite. Сервер разработки доступен на порту 5173.</p>
          <code>frontend/src</code>
        </article>
        <article className="starter-card">
          <span className="card-number">02</span>
          <h2>Сервер</h2>
          <p>Django JSON API. Начальный адрес проверки доступен через Vite proxy.</p>
          <code>backend/catalog</code>
        </article>
        <article className="starter-card">
          <span className="card-number">03</span>
          <h2>База данных</h2>
          <p>PostgreSQL запускается отдельным сервисом Docker Compose.</p>
          <code>service: db</code>
        </article>
      </section>

      <footer className="site-footer">
        Каталог и таблицы данных пока не добавлены. Следующий шаг — согласовать модель данных и API-контракт.
      </footer>
    </main>
  )
}

export default App
