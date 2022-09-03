import axios from '../../lib/axios'

const getActivities = async (url, token, params) => {
  let paramsString = ''
  if (params) {
    paramsString = `?${Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&')}`
  }
  const response = await axios.get(`${url}/activities${paramsString}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getActivities }
