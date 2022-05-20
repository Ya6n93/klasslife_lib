import axios from 'axios'


const updateActivity = async (activityId, data, token) => {
  const { res } = await axios.put(
    `${process.env.REACT_APP_API_URL}/activities/${activityId}`,
    data,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  return res
}

export { updateActivity }
