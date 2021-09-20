import {Route, Switch} from 'react-router-dom'
import Tasks from '../../pages/tasks'
import TaskDetail from '../../pages/task-detail'
import CompletedTasks from '../../pages/completed-tasks'

export default function Routes(){
    return (
        <Switch>
            <Route exact path="/" component={Tasks}/>
            <Route exact path="/tasks/:id" component={TaskDetail}/>
            <Route exact path="/completed" component={CompletedTasks}/>
        </Switch>
    )
}