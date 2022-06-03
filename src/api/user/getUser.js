import axios from '../../lib/axios'

const getUser = async (url, token, id) => {
  const response = await axios.get(`${url}/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getUser }
