import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import AddEdit from './components/AddEdit/AddEdit'



export default (
    <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/dashboard/add" component={AddEdit}/>
    </Switch>
)