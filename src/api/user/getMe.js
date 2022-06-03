import axios from '../../lib/axios'

const getMe = async (url, token) => {
  const response = await axios.get(`${url}/me`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getMe }
