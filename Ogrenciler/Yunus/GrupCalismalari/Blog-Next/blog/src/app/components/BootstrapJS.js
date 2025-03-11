import { useEffect } from 'react';

const BootstrapJS = () => {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return null;
}

export default BootstrapJS