import axios from '../../lib/axios'

const createActivity = async (url, token, data) => {
  const response = await axios.post(`${url}/activities`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createActivity }
