import { mapString } from "@/util/map";
import { setApplication } from "@/services/firebase";
import useUserStore from "@/store/useStore";

export default function ApplicationDetail({
  application,
  goCompletedApplications,
  setDetail,
}) {
  const userStore = useUserStore();

  function complete(status) {
    setApplication(application.application, application.form, status);
    userStore.setApplicationStatus(application.form, status);
    goCompletedApplications();
    setDetail(null);
    userStore.addToast("Başvuru başarıyla değerlendirildi.", "success");
  }

  return application ? (
    <>
      <h5 className="mb-4">Kişisel Bilgiler</h5>
      <p>
        <b>Ad:</b> {application.name}
      </p>
      <p>
        <b>Soyad:</b> {application.surname}
      </p>
      <p>
        <b>E-posta:</b> {application.email}
      </p>
      <p>
        <b>Telefon:</b> {application.phone}
      </p>
      <hr />
      <h5 className="mb-4">Eğitim</h5>
      <p className="text-capitalize">
        <b>Üniversite:</b> {mapString(application.university)}
      </p>
      <p className="text-capitalize">
        <b>Bölüm:</b> {mapString(application.major)}
      </p>
      <p className="text-capitalize">
        <b>Sınıf:</b> {mapString(application.grade)}
      </p>
      <hr />
      <h5 className="mb-4">Staj</h5>
      <p className="text-capitalize">
        <b>1. Tercih:</b> {mapString(application["preference-first"])}
      </p>
      <p className="text-capitalize">
        <b>2. Tercih:</b> {mapString(application["preference-second"])}
      </p>
      <p className="text-capitalize">
        <b>3. Tercih:</b> {mapString(application["preference-third"])}
      </p>

      <button
        type="button"
        className="btn btn-success me-2"
        onClick={() => complete("accepted")}
      >
        Onayla
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => complete("denied")}
      >
        Reddet
      </button>
    </>
  ) : (
    "Lütfen bir başvuru seçin."
  );
}
