import axios from '../../lib/axios'

const getUsers = async (url, token) => {
  const response = await axios.get(`${url}/users`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getUsers }
