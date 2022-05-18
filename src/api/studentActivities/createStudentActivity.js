import axios from 'axios'
import { getAccessToken } from '../../utils/access_token'

const createStudentActivity = async (data) => {
  const { res } = await axios.post(
    `${process.env.REACT_APP_API_URL}/student_activities`,
    data,
    { headers: { Authorization: `Bearer ${getAccessToken()}` } }
  )
  return res
}

export { createStudentActivity }
