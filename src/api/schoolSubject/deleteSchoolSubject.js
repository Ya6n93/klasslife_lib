import axios from '../../lib/axios'

async function deleteSchoolSubject(token, id) {
  const response = await axios.delete(`/school_subjects/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteSchoolSubject }
