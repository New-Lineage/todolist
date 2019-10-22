import React, { Component } from 'react'
import {HashRouter,Switch,Route,Redirect,} from 'react-router-dom'
import Login from './components/login'
import Admin from './components/admin'
import Home from './components/home'
import Mange from './components/mange'
import Setup from './components/setup'
import Back from './components/back'
import File from './components/file'
import Pic from './components/pic'
import Form from './components/form'
import Text from './components/text'
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
                                <Route path='/admin/pic' component={Pic}></Route>
                                <Route path='/admin/form' component={Form}></Route>
                                <Route path='/admin/text' component={Text}></Route>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/mange' component={Mange}></Route>
                                <Route path='/admin/setup' component={Setup}></Route>
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