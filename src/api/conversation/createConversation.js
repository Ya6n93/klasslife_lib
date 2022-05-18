import axios from 'axios'
import { getAccessToken } from '../../utils/access_token'

async function createConversation(data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/conversations`,
      { headers: { Authorization: `Bearer ${getAccessToken()}` }, data}
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { createConversation }