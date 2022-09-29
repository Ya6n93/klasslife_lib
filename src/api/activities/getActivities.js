import axios from '../../lib/axios'

const getActivities = async (url, params) => {
  let paramsString = ''
  if (params) {
    paramsString = `?${Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&')}`
  }
  const response = await axios.get(`${url}/activities${paramsString}`)

  return response
}

export { getActivities }
