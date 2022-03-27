import React from "react";
import { Input, Button, Space, Typography, Row, Col,Select } from "antd";
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../Style/Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            utype:null
        }
    }

    login = () => {
        debugger
        console.log(this.state.username)
    }

    loginClear = () => {
        debugger
        this.setState({
            username: '',
            password: '',
            utype:null
        })
    }

    typeChange=(e)=>{
        debugger
        this.setState({
            utype:e.value
        })
    }

    render() {
        const { Option } = Select;
        return (
            <div>
                <Row>
                    <Col span={12} className="login-col1">
                        <Typography.Title level={1} className="login-header">
                            Blockchain Application for Agriculture and Food Supply Chain
                        </Typography.Title>
                        <Typography.Paragraph>
                            A Supplychain management project using Hyperledger Fabric framework.
                            <br />
                        </Typography.Paragraph>
                        <ul className="proj-list">
                            <li>
                                Front End - <a href="https://reactjs.org/">ReactJS</a>
                            </li>
                            <li>
                                API - <a href="https://nodejs.org/en/">NodeJS</a>
                            </li>
                            <li>
                                Back End - <a href="https://www.hyperledger.org/use/fabric">Hyperledger Fabric framework</a>
                            </li>
                        </ul>
                    </Col>
                    <Col span={12}>
                        <div className="login-component-wrapper">
                            <Space direction="vertical" size="small" className="login-space">
                                <Typography.Title level={2}>
                                    Login
                                </Typography.Title>
                                <Input size="large" placeholder="Username" value={this.state.username} suffix={<UserOutlined />} onChange={x => {
                                    this.setState({
                                        username: x.target.value
                                    })
                                }} />
                                <Input.Password size="large" placeholder="Password" value={this.state.password} suffix={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} onChange={x => {
                                    this.setState({
                                        password: x.target.value
                                    })
                                }} />
                                <Select className="type-select" placeholder="select type" value={this.state.utype} onChange={this.typeChange}>
                                    <Option value="Farmer">
                                        Farmer
                                    </Option>
                                    <Option value="Distributor">
                                        Distributor
                                    </Option>
                                    <Option value="Shop keeper">
                                    Shop keeper
                                    </Option>
                                </Select>
                                <Button type="primary" danger ghost onClick={this.loginClear}>Clear</Button>
                                <Button type="primary" onClick={this.login}>Login</Button>
                            </Space>
                        </div>
                            <Typography.Text style={{color:"red","font-style": "italic"}}>*please login to go to dashboard</Typography.Text>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Login;
