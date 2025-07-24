import api from './api'

export const enrollInCourse = async (courseId) => {
    const res = await api.post('/enrollments', { courseId })
    return res.data
}

export const fetchMyEnrollments = async () => {
    const res = await api.get('/enrollments/mine')
    return res.data
}