"use client"

import { useEffect } from 'react';

function Client() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, [])

    return null
}

export default Client