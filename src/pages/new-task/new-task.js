import React, {useEffect, useState} from 'react'
import {Col, Form, Row, Button, Container} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

const NewTask = () => {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState(new Date())
    const [status, setStatus] = useState(false)

    useEffect(()=>{
        console.log(title)
        console.log(author)
        console.log(date)
        console.log(status)
    },[title, author, date, status])

    const submit = (e) => {
        e.preventDefault()
        const url = `http://localhost:3001/tasks/`
        const fetchData = async () => {
            try {
                const response = await fetch(url,{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "id": 99, "title": "json-server99", "author": "1", "date": "01.01.2021", "status": "false"},)
                })
                await response.json()
                alert(`Create`)
                history.push('/')
            } catch (error) {
                console.log("ERROR", error.message)
            }
        }
        fetchData()
    }

    return (
        <Container>
            <Form onSubmit={(e)=>submit(e)}>
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="author" placeholder="author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="date" placeholder="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} id="formGridCheckbox">
                        <Form.Check type="checkbox" label="finished" value={status} onChange={(e)=>setStatus(e.target.checked)}/>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </Container>
    )
}

export default NewTask