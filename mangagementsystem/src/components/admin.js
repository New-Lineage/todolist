import React, { Component } from 'react'
import {Menu,Icon} from 'antd';
import CustomNav from './customNav'
import '../style/admin.less'
import { relative } from 'path';
const {SubMenu} = Menu
class Admin extends Component {
 render(){
 
   return (
    <div className='admin' style={{backgroundColor:'#f0f2f5'}}>
      <div className='admin-nav' style={{height:'100%', backgroundColor:'#f0f2f5',position:'relative'}}>
      <CustomNav></CustomNav>
      </div>
      <div className='admin-content'>

          <div style={{width:'100%',height:'100%'}}>{this.props.children}</div>

      </div>
    </div>
   )
 }
}

export default Admin