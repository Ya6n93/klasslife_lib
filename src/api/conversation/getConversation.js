import axios from 'axios'


async function getConversation(id, token) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/conversations/` + id,
      { headers: { Authorization: `Bearer ${token}` }}
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { getConversation }