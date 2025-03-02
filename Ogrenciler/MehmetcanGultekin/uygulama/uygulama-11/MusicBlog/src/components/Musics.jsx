import React from 'react'
import MusicCard from './MusicCard'
import { useState, useEffect } from 'react'
import getMusic from '../api/getMusic'
import { Col, Container ,Row } from 'react-bootstrap'

export default function Musics() {
    const [musics, setMusics] = useState([])    

    useEffect(() => {
        const fetchMusics = async ()=> {
            const data = await getMusic()
            setMusics(data)
        }
        fetchMusics()
    }
    , [])

    return (
        <Container>
            <Row>
                {musics.map((music)=>(
                    <Col md={4} key={music.id}>
                        <MusicCard 
                            id={music.id}
                            img={music.img}
                            title={music.title}
                            description={music.description}
                            category={music.category}
                        />
                    </Col>
                ))}

            </Row>
        </Container>

    )
}
