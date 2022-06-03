import axios from '../../lib/axios'

const getSchoolSubjects = async (url, token) => {
  const response = await axios.get(`${url}/school_subjects`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}
