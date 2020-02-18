import React, { Component } from 'react'
import {Image,Menu, Form, Input, Icon,} from "semantic-ui-react"
import "./HeaderNav.scss"
import logo  from "../../assets/images/logo.jpg"

export class HeaderNav extends Component {
    render() {
        return (
            <Menu fixed="top" borderless className= "top-menu">
            <Menu.Item className="logo" header>
            <Image src = {logo} size="small"/>
            
            </Menu.Item>
            <Menu.Menu className="nav-container">
            <Menu.Item className="search-input">
            <Form>
            <Form.Field>
            <Input placeholder="Search" size="small" action="Go"/>
            </Form.Field>
            
            
            </Form>


            </Menu.Item>
            <Menu.Menu position = "right">
            <Menu.Item>
            <Icon size="large" name= "video camera" className="header-icon"/>
            </Menu.Item>
            <Menu.Item>
            <Icon size="large" name="grid layout" className="header-icon"/>
            </Menu.Item>
            <Menu.Item>
            <Icon size="large" name="chat" className="header-icon"/>
            </Menu.Item>
            <Menu.Item>
            <Icon size="large" name= "alarm" className="header-icon"/>
            </Menu.Item>
            <Menu.Item name="avatar">
            <Image src="http://via.placeholder.com/80×80" avatar/>
            </Menu.Item>
            
            </Menu.Menu>
            
            </Menu.Menu>
            
            
            
            </Menu>
        )
    }
}

export default HeaderNav
