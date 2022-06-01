import axios from '../../lib/axios'

const getMe = async (token) => {
  const response = await axios.get('/me', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getMe }
