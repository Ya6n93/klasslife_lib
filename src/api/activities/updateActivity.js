import axios from 'axios'
import { getAccessToken } from '../../utils/access_token'

const updateActivity = async (activityId, data) => {
  const { res } = await axios.put(
    `${process.env.REACT_APP_API_URL}/activities/${activityId}`,
    data,
    { headers: { Authorization: `Bearer ${getAccessToken()}` } }
  )
  return res
}

export { updateActivity }
