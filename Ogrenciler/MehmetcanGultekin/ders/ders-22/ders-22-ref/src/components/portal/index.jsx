import reactDOM from 'react-dom';

const index = ({target , text}) => {
    return reactDOM.createPortal(
        <div>
            selam dünyalı  ben portal, hedefim ise {text}
        </div>, target
    );
};