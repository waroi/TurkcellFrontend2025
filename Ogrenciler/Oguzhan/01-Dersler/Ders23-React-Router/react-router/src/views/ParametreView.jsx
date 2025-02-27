import React from 'react'
import { useParams } from 'react-router'

const ParametreView = () => {
    const { id } = useParams()
    return (
        <div>ParametreView{id}</div>
    )
}

export default ParametreView