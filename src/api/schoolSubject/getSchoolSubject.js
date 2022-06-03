import axios from '../../lib/axios'

const getSchoolSubject = async (url, token, id) => {
  const response = await axios.get(`${url}/school_subjects/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getSchoolSubject }
