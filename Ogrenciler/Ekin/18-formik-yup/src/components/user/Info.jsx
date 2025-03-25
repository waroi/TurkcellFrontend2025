import useStore from "@/store/useStore";

export default function Info() {
  const { user } = useStore();

  if (user)
    return (
      <div className="card shadow border-0 mb-4">
        <div className="card-header bg-primary text-white">
          <h5 className="card-title mb-0">Kişisel Bilgiler</h5>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-4 col-lg-3 fw-bold text-secondary">Ad:</div>
            <div className="col">{user.name}</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4 col-lg-3 fw-bold text-secondary">
              Soyad:
            </div>
            <div className="col">{user.surname}</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4 col-lg-3 fw-bold text-secondary">
              Email:
            </div>
            <div className="col">{user.email}</div>
          </div>
        </div>
      </div>
    );
}
