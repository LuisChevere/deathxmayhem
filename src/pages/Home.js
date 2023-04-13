import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import DxM from '../assets/images/DxM.png';

function Home() {
    return (
        <>
            <Row>

                <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={DxM} />
                    </Card>
                </Col>

                <Col sm={8}>
                    <Card.Body>
                        <Card.Title>DeathxMayhem</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Col>
                
            </Row>
        </>
    )
}

export default Home;