import {Table} from 'react-bootstrap'
import React from 'react'
import {useHistory} from 'react-router-dom'

const TableTasks = ({tasks}) => {
    const history = useHistory()

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>title</th>
                <th>author</th>
                <th>date</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map(el =>
                <tr key={el.id} onClick={() => history.push(`/tasks/${el.id}`)}>
                    <td>{el.id}</td>
                    <td>{el.title}</td>
                    <td>{el.author}</td>
                    <td>{el.date}</td>
                </tr>
            )}
            </tbody>
        </Table>
    )
}

export default TableTasks