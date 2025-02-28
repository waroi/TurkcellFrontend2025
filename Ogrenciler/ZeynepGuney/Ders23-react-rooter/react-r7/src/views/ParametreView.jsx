import { useParams } from "react-router" //urelde bir parametre gödnerilirse almamızı sağlıyor

const ParametreView = () => {
    const { id } = useParams();
    return (
        <div><h1>Gelen Parametre : {id}</h1></div>
    )
}

export default ParametreView
//bu parametreyi nasıl karşılayacağız peki, router jsxdeki pathde parametre tanımlayacağız