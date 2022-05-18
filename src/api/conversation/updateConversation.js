import axios from 'axios'
import { getAccessToken } from '../../utils/access_token'

async function updateConversation(id) {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/conversations/` + id,
      { headers: { Authorization: `Bearer ${getAccessToken()}` }}
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { updateConversation }