import { useCallback } from "react";
import { updateAppStatus, updateMessage } from "../../firebase/dbController";

const useApplicationStatus = (setApps) => {
  const handleStatusChange = useCallback(
    async (application) => {
      let newStatus;
      let userMessage;
      let adminMessage;

      switch (application.status) {
        case "Değerlendirme":
          newStatus = "Test";
          userMessage = "Testi Çöz";
          adminMessage = "Test aşamasında";
          application.status = "Test";

          break;
        case "Test":
          newStatus = "Test Kontrol";
          userMessage = "Testiniz değerlendiriliyor.";
          adminMessage = "Mülakat aşamasını başlat";
          application.status = "Test Kontrol";
          break;
        case "Test Kontrol":
          newStatus = "Mülakat";
          userMessage = "Mülakata davet edildiniz.";
          adminMessage = "Mülakat aşamasına geçildi";
          application.status = "Mülakat";

          break;

        default:
          return;
      }

      try {
        await updateAppStatus({ ...application, status: newStatus });
        await updateMessage(application.id, userMessage, adminMessage);
      } catch (error) {
        console.error("Durum güncellenirken hata oluştu:", error);
      }
    },
    [setApps]
  );

  const sonrakiAsama = useCallback(
    (application) => {
      handleStatusChange(application);
    },
    [handleStatusChange]
  );

  return { handleStatusChange, sonrakiAsama };
};

export default useApplicationStatus;
