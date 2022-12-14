import React from 'react'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import {
  Accordion,
  Badge,
  Button,
  Card,
  Nav,
  ContextAwareToggle,
} from 'react-bootstrap'
import notes from '../../data/notes'

const MyNotes = () => {
  const deleteHandler = () => {
    if (window.confirm('Are you sure?')) {
    }
  }

  return (
    <MainScreen title="Welcome Back Manasseh Ameyow...">
      <Nav.Link href="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create Note
        </Button>
      </Nav.Link>
      {notes.map((note) => (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: 'flex' }}>
                <span
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    flex: 1,
                    cursor: 'pointer',
                    alignSelf: 'center',
                    fontSize: 18,
                  }}
                >
                  <Accordion.Header variant="link" as={Card.Text}>
                    {note.title}
                  </Accordion.Header>
                </span>

                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge bg="success">Category-{note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created On - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  )
}

export default MyNotes
