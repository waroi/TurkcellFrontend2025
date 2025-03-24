import { useNavigate } from 'react-router';
import { ApplicationService } from '../../services/ApplicationService';

export const useInfoForm = () => {
    const navigate = useNavigate()

    const handleSubmit = async (values, actions) => {
        try {
            const addApplicationResponse = await ApplicationService.addApplication(values)

            if (addApplicationResponse.success) {
                navigate("/gift")
                alert(addApplicationResponse.message)
                actions.resetForm()
            }
        } catch (error) {
            console.error("Başvuru hatası:", error)
            alert("Başvuru sırasında bir hata oluştu!")
        }
    }

    return { handleSubmit }
}