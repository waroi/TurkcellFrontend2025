export const UserCard = ({userData}) => {
    
    return (
        <div className="card mb-3" style={{maxWidth: "540px"}} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={userData?.avatar_url} className="img-fluid rounded-start" alt={userData.login} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{userData?.login}</h5>
                        <p className="card-text">Public Repository Sayısı: {userData?.public_repos}</p>
                        <p className="card-text">
                            <small className="text-body-secondary">
                                belki bir şey koyarım
                            </small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
