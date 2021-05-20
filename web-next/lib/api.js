const fetchAPI = async (query, { variables } = {}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    // console.error(json.errors)
    throw new Error('Failed to fetch API \n')
  }

  return json.data
}

const defaultHeaders = {
  'Content-Type': 'application/json',
}
const callCloudFunction = async (url, data, headers = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { ...defaultHeaders, ...headers },
    body: JSON.stringify(data),
  })
  return response
}

export { fetchAPI, callCloudFunction }
