import { useState, useEffect } from 'react';
import { INITIAL_APPLICATIONS, ERROR_MESSAGE } from './../constans/applicationConstants';
import { ApplicationService } from '../../services/ApplicationService';

export const useApplicationList = () => {
    const [applications, setApplications] = useState(INITIAL_APPLICATIONS)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                setLoading(true)
                const applicationsData = await ApplicationService.getApplications()
                setApplications(applicationsData)
                setError(null)
            } catch (error) {
                console.error(ERROR_MESSAGE, error)
                setError(error.message || "Bilinmeyen bir hata oluştu")
            } finally {
                setLoading(false)
            }
        }

        fetchApplications()
    }, [])

    return { applications, loading, error }
}