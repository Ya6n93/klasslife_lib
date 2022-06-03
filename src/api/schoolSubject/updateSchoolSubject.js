import axios from '../../lib/axios'

const updateSchoolSubject = async (url, token, id, data) => {
  const response = await axios.put(`${url}/school_subjects/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { updateSchoolSubject }
