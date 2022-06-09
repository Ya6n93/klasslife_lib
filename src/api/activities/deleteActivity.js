import axios from '../../lib/axios'

const deleteActivity = async (url, token, activityId) => {
  const response = await axios.delete(`${url}/activities/${activityId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteActivity }
