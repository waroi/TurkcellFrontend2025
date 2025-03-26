import { useCallback } from "react";
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
          newStatus = "Mülakat";
          newMessage = "Mülakata davet edildi.";
          break;
        case "Mülakat":
          if (application.quiz > 70) {
            newStatus = "Onay";
            newMessage = "Başvuru onaylandı!";
          } else {
            newStatus = "Red";
            newMessage = "Başvuru reddedildi.";
          }
          break;
        default:
          return;
      }

      await updateAppStatus({ ...application, status: newStatus });
      await updateMessage(application.id, newMessage);

      setApps((prevApps) =>
        prevApps.map((app) =>
          app.id === application.id
            ? { ...app, status: newStatus, message: newMessage }
            : app
        )
      );
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
