import axios from 'axios'


async function getMessages(token) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/messages`,
      { headers: { Authorization: `Bearer ${token}` }}
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { getMessages }