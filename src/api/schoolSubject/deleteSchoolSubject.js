import axios from '../../lib/axios'

const deleteSchoolSubject = async (url, token, id) => {
  const response = await axios.delete(`${url}/school_subjects/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteSchoolSubject }
