export interface ApiHealth {
  status: 'ok'
  service: string
}

export async function getApiHealth(signal?: AbortSignal): Promise<ApiHealth> {
  const response = await fetch('/api/v1/health/', {
    headers: { Accept: 'application/json' },
    signal,
  })

  if (!response.ok) {
    throw new Error(`Сервер вернул HTTP ${response.status}`)
  }

  const payload: unknown = await response.json()
  if (
    typeof payload !== 'object' ||
    payload === null ||
    !('status' in payload) ||
    payload.status !== 'ok' ||
    !('service' in payload) ||
    typeof payload.service !== 'string'
  ) {
    throw new Error('Сервер вернул неожиданный формат ответа проверки')
  }

  return payload as ApiHealth
}
