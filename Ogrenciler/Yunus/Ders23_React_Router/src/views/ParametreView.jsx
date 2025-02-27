import { useParams } from "react-router"

// useParams parametre gelirse onu alıyor
const ParametreView = () => {
    const { id } = useParams()

    return (
        <h1>Gelen Parametre {id}</h1>
    )
}

export default ParametreView