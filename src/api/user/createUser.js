import axios from '../../lib/axios'

async function createUser(token, email, password) {
  const response = await axios.post(
    '/users',
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
