import { useState, useEffect } from 'react';
import { TestService } from '../../services/TestService';

const useCompletedTests = () => {
    const [completions, setCompletions] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCompletions = async () => {
            try {
                const response = await TestService.getAllCompletedUsers()
                setCompletions(response.data);
                setLoading(false);
            } catch (err) {
                setError('Veriler yüklenirken bir hata olluştu')
                setLoading(false)
            }
        }

        fetchCompletions()
    }, [])

    const refreshCompletions = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await TestService.getAllCompletedUsers()
            setCompletions(response.data)
            setLoading(false)
        } catch (err) {
            console.error("Veri yenilleme hatası", err)
            setError('Veriller yenilenirken bir hata oluştu')
            setLoading(false)
        }
    }

    return {
        completions,
        loading,
        error,
        refreshCompletions
    }
}

export default useCompletedTests