import axios from '../../lib/axios'

async function createSchoolSubject(token, data) {
  const response = await axios.post('/school_subjects', data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}
