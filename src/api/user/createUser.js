import axios from '../../lib/axios'

const createUser = async (url, token, email, password) => {
  const response = await axios.post(
    `${url}/users`,
    {
      email,
      password
    },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )

  return response
}

export { createUser }
