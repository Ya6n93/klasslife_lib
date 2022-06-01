import axios from '../../lib/axios'

const createActivity = async (token, data) => {
  const response = await axios.post('/activities', data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createActivity }
