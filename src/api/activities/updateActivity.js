import axios from 'axios'

const updateActivity = async (token, activityId, data) => {
  const { res } = await axios.put(
    `${process.env.REACT_APP_API_URL}/activities/${activityId}`,
    data,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  return res
}

export { updateActivity }
