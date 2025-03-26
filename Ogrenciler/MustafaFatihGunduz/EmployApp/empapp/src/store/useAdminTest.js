import { useState } from 'react';
import useAdminPanel from './useAdminPanel';
const useAdminTest = () => {
      const [showModal, setShowModal] = useState(false);
      const handleCloseModal = () => setShowModal(false);
      const {handleApprove} = useAdminPanel()
      const [totalQuestion,setTotalQuestion] = useState("");
      const [hardQuestion,setHardQuestion] = useState("");
      const [mediumQuestion,setMediumQuestion] = useState("");

      const handleModal = async (app,total,hard,medium) => {
        setShowModal(true)
        try {
          await handleApprove(app)
          setTotalQuestion(total),
          setHardQuestion(hard),
          setMediumQuestion(medium)
          console.log(totalQuestion)
          console.log(mediumQuestion)
          console.log(hardQuestion)

        } catch (error) {
          console.log("Error",error)
        }
      }


      return {showModal,handleCloseModal,handleModal,totalQuestion,mediumQuestion,hardQuestion};
}

export default useAdminTest