import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { INITIAL_RATE } from './../constans/applicationConstants';
import { ApplicationService } from '../../services/ApplicationService';
import { TestService } from '../../services/TestService';

export const useApplicationDetail = () => {
    const { applicationId } = useParams()
    const [application, setApplication] = useState(null)
    const [selectedRate, setSelectedRate] = useState(INITIAL_RATE)
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        const fetchApplication = async () => {
            const response = await ApplicationService.getApplicationById(applicationId)
            if (response.success) {
                console.log(response.data)
                setUserInfo({
                    email: response.data.email,
                    phone: response.data.phone
                })

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
        console.log(userInfo)
        const response = await ApplicationService.updateApplicationRate(
            applicationId,
            selectedRate,
            userInfo
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
        handleRateSubmit,
    }
}