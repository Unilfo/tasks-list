import {Redirect, Route, Switch} from 'react-router-dom'
import Tasks from '../../pages/tasks'
import TaskDetail from '../../pages/task-detail'
import CompletedTasks from '../../pages/completed-tasks'
import NewTask from '../../pages/new-task'

export default function Routes(){
    return (
        <Switch>
            <Route exact path="/tasks" component={Tasks}/>
            <Route exact path="/tasks/:id" component={TaskDetail}/>
            <Route exact path="/completed" component={CompletedTasks}/>
            <Route exact path="/new" component={NewTask}/>
            <Redirect from="/" to="/tasks" />
        </Switch>
    )
}