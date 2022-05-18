import axios from 'axios'
import { getAccessToken } from '../../utils/access_token'

const updateStudentActivity = async (studentActivityId, data) => {
  console.log('updateStudentActivity', studentActivityId, data)
  const { res } = await axios.put(
    `${process.env.REACT_APP_API_URL}/student_activities/${studentActivityId}`,
    data,
    { headers: { Authorization: `Bearer ${getAccessToken()}` } }
  )
  return res
}

export { updateStudentActivity }
