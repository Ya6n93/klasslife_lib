import axios from 'axios'


async function updateParticipant(id, data, token) {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/participants/` + id,
      { headers: { Authorization: `Bearer ${token}` }, data}
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { updateParticipant }