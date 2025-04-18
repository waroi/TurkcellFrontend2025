import Title from "@/components/atoms/Title/Title";
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import './LearnAndEarn.scss'
import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import Icon from "@/components/atoms/Icons/Icons";

const LearnAndEarn = () => {
    return (
        <div className="learn-and-earn">
            <Container className="py-5">
                <Col lg={4} className="mx-auto">
                    <Title as="h1" className="text-center mb-3 title">Learn And Earn</Title>
                    <Paragraph className="text-center description">
                        Stacks is a production-ready library of stackable content blocks
                        built in React Native.
                    </Paragraph>
                </Col>
                <Row>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Col lg={4} key={i} className="mt-3">
                            <Image src="/images/market/media-container.webp" alt="Blog Media Container" width={415} />
                            <Paragraph className="badge mb-p bg-primary px-3 py-2 mt-4 tag">LEARN & EARN</Paragraph>
                            <Title as="h4" className="my-3 blog-title">
                                Learn about UI8 coin and earn an All-Access Pass
                            </Title>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <div className="d-flex align-items-center ">
                                    <div className="rounded-circle p-3 bg-success profile-writer"></div>
                                    <Title as="h6" className="fs-6 ps-2 mb-0 writer">Floyd Buckridge</Title>
                                </div>
                                <Paragraph className="mb-0 text-secondary date">Feb 03, 2021</Paragraph>
                            </div>
                        </Col>
                    ))}
                </Row>
                <div className="d-flex justify-content-center">
                    <Button
                        className="mt-4 rounded-pill px-3 py-2 mb-4 button-load"
                        variant="outline-secondary"
                    >
                        <div className="d-flex align-items-center load-more-button">
                            <Icon collection="pi" name="PiSpinner" />
                            <p className="ms-3 mb-0">Load more</p>
                        </div>
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default LearnAndEarn