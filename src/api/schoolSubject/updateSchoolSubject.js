import axios from '../../lib/axios'

async function updateSchoolSubject(token, id, data) {
  const response = await axios.put(`/school_subjects/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { updateSchoolSubject }
