import React from 'react'
import MusicCard from './MusicCard'
import { useState, useEffect } from 'react'
import {getMusic, deleteMusic} from '../api/getMusic'
import { Col, Container, Row } from 'react-bootstrap'

export default function Musics() {
    const [musics, setMusics] = useState([])    
    const [refresh, setRefresh] = useState(0)
    
    const refreshMusics = () => {
        setRefresh(prev => prev + 1);
    }

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this music?')) {
            const result = await deleteMusic(id);
            if (result) {
                refreshMusics();
            }
        }
    };
    const handleUpdate = (id) => {
        console.log('Update music with ID:', id);
        
    };
    
    useEffect(() => {
        const fetchMusics = async () => {
            const data = await getMusic()
            setMusics(data)
        }
        fetchMusics()
    }, [refresh]) 

    return (
        <Container>
            <Row>
                {musics.map((music) => (
                    <Col md={4} key={music.id} className="mb-4">
                        <MusicCard 
                            id={music.id}
                            img={music.img}
                            title={music.title}
                            description={music.description}
                            category={music.category}
                            author={music.author}
                            authorImg={music.authorImg}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}