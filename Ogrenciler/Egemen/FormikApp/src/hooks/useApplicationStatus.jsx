import { useCallback, useEffect, useState } from "react";
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

          break;
        case "Test":
          newStatus = "Test Kontrol";
          userMessage = "Testiniz değerlendiriliyor.";
          adminMessage = "Mülakat aşamasını başlat";
          break;
        case "Test Kontrol":
          newStatus = "Mülakat";
          userMessage = "Mülakata davet edildiniz.";
          adminMessage = "Mülakat aşamasına geçildi";

          break;

        case "Red":
          newStatus = "Red";
          userMessage = "Başvurunuz reddedildi.";
          break;
        default:
          return;
      }

      setApps((prevApps) =>
        prevApps.map((app) =>
          app.id === application.id
            ? {
                ...app,
                status: newStatus,
                userMessage: userMessage,
                adminMessage: adminMessage,
              }
            : app
        )
      );

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
