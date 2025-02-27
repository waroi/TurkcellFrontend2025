import {useParams} from 'react-router'

const ParametreView = () => {
    const {id} = useParams()
  return (
    <div>
        <h1>
            Parametreler: {id}
        </h1>
        </div>
  )
}

export default ParametreView