import axios from 'axios'
import { getAccessToken } from '../../utils/access_token'

const createActivity = async (data) => {
  const { res } = await axios.post(
    `${process.env.REACT_APP_API_URL}/activities`,
    data,
    { headers: { Authorization: `Bearer ${getAccessToken()}` } }
  )
  return res
}

export { createActivity }
