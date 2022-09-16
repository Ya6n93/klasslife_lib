import axios from '../../lib/axios'

const createConversation = async (url, token, userId) => {
  const response = await axios.post(
    `${url}/conversations?otherUser=${userId}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )

  return response
}

export { createConversation }
