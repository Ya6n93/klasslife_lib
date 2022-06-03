import axios from '../../lib/axios'

const deleteMessage = async (url, token, id) => {
  const response = await axios.delete(`${url}/messages/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteMessage }
