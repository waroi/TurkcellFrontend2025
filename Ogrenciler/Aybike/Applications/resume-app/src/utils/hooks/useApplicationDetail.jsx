import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { INITIAL_RATE } from './../constans/applicationConstants';
import { ApplicationService } from '../../services/ApplicationService';

export const useApplicationDetail = () => {
    const { applicationId } = useParams()
    const [application, setApplication] = useState(null)
    const [selectedRate, setSelectedRate] = useState(INITIAL_RATE)

    useEffect(() => {
        const fetchApplication = async () => {
            const response = await ApplicationService.getApplicationById(applicationId)
            if (response.success) {
                setApplication(response.data)
                setSelectedRate(response.data.rate)
            } else {
                console.log(response.message)
            }
        }

        fetchApplication();
    }, [applicationId])

    const handleRateChange = (event) => {
        setSelectedRate(Number(event.target.value))
    }

    const handleRateSubmit = async () => {
        const response = await ApplicationService.updateApplicationRate(
            applicationId,
            selectedRate
        );
        if (response.success) {
            alert("Puan güncellendi!")
            setApplication((prev) => ({ ...prev, rate: selectedRate }))
        } else {
            alert("Puan güncellenirken hata oluştu!")
        }
    }

    return {
        application,
        selectedRate,
        handleRateChange,
        handleRateSubmit
    }
}