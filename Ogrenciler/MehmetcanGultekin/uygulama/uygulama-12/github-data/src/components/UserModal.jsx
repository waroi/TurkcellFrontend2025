
import React, { useEffect ,useState } from 'react'

function UserModal(userName) {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const getOneUser = async (userName) => {
            const data = await getOneUser(userName)
            setUser(data)
            console.log(data)
            
          }
        getOneUser(userName)
    }, [])




    return (
        <div className="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="userModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">kullanıcı adı:
                        {user?.login}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserModal