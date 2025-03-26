import { useCallback, useEffect, useState } from "react";
import { updateAppStatus, updateMessage } from "../../firebase/dbController";

const useApplicationStatus = (user, setApps) => {
  const handleStatusChange = useCallback(
    async (application) => {
      if (!user || user.role !== "admin") return;

      let newStatus;
      let newMessage;

      switch (application.status) {
        case "Beklemede":
          newStatus = "Test";
          newMessage = "Test aşamasında.";
          break;
        case "Test":
          newStatus = "Test Kontrol";
          newMessage = "Testiniz değerlendiriliyor.";
          break;
        case "Test Kontrol":
          newStatus = "Mülakat";
          newMessage = "Mülakata davet edildiniz.";
          break;
        case "Mülakat":
          newStatus = "Onay";
          newMessage = "Tebrikler! Başvurunuz onaylandı.";
          break;
        case "Red":
          newStatus = "Red";
          newMessage = "Başvurunuz reddedildi.";
          break;
        default:
          return;
      }

      setApps((prevApps) =>
        prevApps.map((app) =>
          app.id === application.id
            ? { ...app, status: newStatus, message: newMessage }
            : app
        )
      );

      try {
        await updateAppStatus({ ...application, status: newStatus });
        await updateMessage(application.id, newMessage);
      } catch (error) {
        console.error("Durum güncellenirken hata oluştu:", error);
      }
    },
    [user, setApps]
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
