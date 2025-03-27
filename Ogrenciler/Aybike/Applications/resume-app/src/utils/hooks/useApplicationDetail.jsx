import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { INITIAL_RATE } from './../constans/applicationConstants';
import { ApplicationService } from '../../services/ApplicationService';

export const useApplicationDetail = () => {
    const { applicationId } = useParams();
    const [application, setApplication] = useState(null);
    const [selectedRate, setSelectedRate] = useState(INITIAL_RATE);
    const [userInfo, setUserInfo] = useState({});
    const [showQuestionSettingsModal, setShowQuestionSettingsModal] = useState(false)
    const [questionSettings, setQuestionSettings] = useState({
        totalQuestions: 10,
        difficulty: {
            easy: 3,
            medium: 3,
            hard: 4
        }
    })

    useEffect(() => {
        const fetchApplication = async () => {
            const response = await ApplicationService.getApplicationById(applicationId)
            if (response.success) {
                setUserInfo({
                    email: response.data.email,
                    phone: response.data.phone
                });
                setApplication(response.data)
                setSelectedRate(response.data.rate)
            } else {
                console.log(response.message)
            }
        }

        fetchApplication()
    }, [applicationId])

    const handleRateChange = (event) => {
        setSelectedRate(event.target.value)
    }

    const handleQuestionSettingsChange = (type, value) => {
        if (type === 'totalQuestions') {
            setQuestionSettings(prev => ({
                ...prev,
                totalQuestions: parseInt(value || 0)
            }))
        } else {
            setQuestionSettings(prev => ({
                ...prev,
                difficulty: {
                    ...prev.difficulty,
                    [type]: parseInt(value || 0)
                }
            }))
        }
    }

    const handleEvaluateClick = () => {
        setShowQuestionSettingsModal(true)
    }

    const handleModalSubmit = () => {
        const totalDifficultyQuestions =
            questionSettings.difficulty.easy +
            questionSettings.difficulty.medium +
            questionSettings.difficulty.hard

        if (totalDifficultyQuestions !== questionSettings.totalQuestions) {
            return alert("Toplam soru sayısı zorluk seviyelerindeki soru sayılarıyla eşleşmelidir!")
        }

        handleRateSubmit(questionSettings)
        setShowQuestionSettingsModal(false)
    }

    const handleRateSubmit = async (questionSettings = null) => {
        const response = await ApplicationService.updateApplicationRate(
            applicationId,
            selectedRate,
            userInfo,
            questionSettings
        )
        if (response.success) {
            alert("Değerlendirme güncellendi!");
            setApplication((prev) => ({ ...prev, rate: selectedRate }))
        } else {
            alert("Değerlendirme güncellenirken hata oluştu!")
        }
    }

    return {
        application,
        selectedRate,
        handleRateChange,
        handleRateSubmit,
        showQuestionSettingsModal,
        setShowQuestionSettingsModal,
        questionSettings,
        handleQuestionSettingsChange,
        handleEvaluateClick,
        handleModalSubmit
    }
}