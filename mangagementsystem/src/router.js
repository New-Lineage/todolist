import React, { Component } from 'react'
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import Admin from './components/admin'
import {
    Login,
    Add,
    First,
    Back,
    Del,
    Form,
    Home,
    File,
    Mange,
    Pic,
    Setup,
    Text,
    Empty1,
    Empty2,
    Empty3
} from './loadable/index'


class RouterRoot extends Component {
 render(){
   return (
        <HashRouter>
            <Switch>
                <Redirect from='/' to='/login' exact></Redirect>
                <Route path='/login' component={Login} ></Route>
                <Route path='/admin' render={
                    ()=>{
                        return(
                            <Admin>
                                <Route path='/admin/file' component={File}></Route>
                                <Route path='/admin/add' component={Add}></Route>
                                <Route path='/admin/del' component={Del}></Route>
                                <Route path='/admin/first' component={First}></Route>
                                <Route path='/admin/pic' component={Pic}></Route>
                                <Route path='/admin/form' component={Form}></Route>
                                <Route path='/admin/text' component={Text}></Route>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/mange' component={Mange}></Route>
                                <Route path='/admin/setup' component={Setup}></Route>
                                <Route path='/admin/empty1' component={Empty1}></Route>
                                <Route path='/admin/empty2' component={Empty2}></Route>
                                <Route path='/admin/empty3' component={Empty3}></Route>
                                <Route path='/admin/back' component={Back}></Route>
                            </Admin>
                        )
                    }
                } ></Route>
            </Switch>
        </HashRouter>

   )
 }
}

export default RouterRoot