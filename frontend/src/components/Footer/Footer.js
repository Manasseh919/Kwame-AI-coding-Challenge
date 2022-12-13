import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          width: '100%',
          position: 'relative',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Container>
          <Row>
            <Col className="text-center py-3">
              Copyright &copy; Manasseh Ameyow
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
