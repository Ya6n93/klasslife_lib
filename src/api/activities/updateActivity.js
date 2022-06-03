import axios from '../../lib/axios'

const updateActivity = async (url, token, activityId, data) => {
  const response = await axios.put(`${url}/activities/${activityId}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { updateActivity }
