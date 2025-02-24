import ReactDOM from 'react-dom'

const Portal = ({ target, text }) => {
    return ReactDOM.createPortal(
        <div>
            <h1>Selam dünyalı ben Portal, hedefim ise {text} </h1>
        </div>
        ,
        target)
}

export default Portal