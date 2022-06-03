import axios from '../../lib/axios'

const createSchoolSubject = async (url, token, data) => {
  const response = await axios.post(`${url}/school_subjects`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}
