export async function httpClient(fetchUrl, options) {
  return fetch(fetchUrl, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json'
    },
    body: options.body ? JSON.stringify(options.body) : null
  }).then(async (response) => {
    return {
      ok: response.ok,
      body: await response.json(),
    }
  })
}
