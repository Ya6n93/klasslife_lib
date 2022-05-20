import axios from 'axios'


async function createUser(email, password) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/users`,
      { headers: { Authorization: `Bearer ${token}` }, "email" : email, "password" : password }
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { createUser }