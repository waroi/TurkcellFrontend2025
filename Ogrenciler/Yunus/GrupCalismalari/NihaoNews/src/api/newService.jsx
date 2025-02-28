import { useState } from "react"

const [page, setPage] = useState(1)

const baseUrl = `${process.env.API_URL}`

fetch(baseUrl)
    .then(response => response.json())
    .then(data => console.log(data))
