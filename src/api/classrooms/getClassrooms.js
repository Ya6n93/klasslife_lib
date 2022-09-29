import axios from '../../lib/axios'

const getClassrooms = async (url, token, params) => {
  let paramsString = ''
  if (params) {
    paramsString = `?${Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&')}`
  }

  const response = await axios.get(`${url}/classrooms${paramsString}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getClassrooms }
