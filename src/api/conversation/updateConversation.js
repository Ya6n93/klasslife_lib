import axios from 'axios'

async function updateConversation(token, id) {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/conversations/` + id,
      { headers: { Authorization: `Bearer ${token}` }}
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { updateConversation }