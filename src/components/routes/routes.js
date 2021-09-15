import {Route, Switch} from 'react-router-dom'
import Tasks from '../../pages/tasks'
import TaskDetail from '../../pages/task-detail'

export default function Routes(){
    return (
        <Switch>
            <Route exact path="/">
                <Tasks/>
            </Route>
            <Route exact path="/:id">
                <TaskDetail/>
            </Route>
        </Switch>
    )
}