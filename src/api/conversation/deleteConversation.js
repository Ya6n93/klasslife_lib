import axios from '../../lib/axios'

const deleteConversation = async (url, token, id) => {
  const response = await axios.delete(`${url}/conversations/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteConversation }
