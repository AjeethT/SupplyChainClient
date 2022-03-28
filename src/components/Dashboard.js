import React from "react";
import { Input, Button, Space, Typography, Row, Col, Select, Menu, Card } from "antd";
import { } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../Style/Dashboard.css'
import CreateProduct from "./CreateProduct";
import TransferProduct from "./TransferProduct";

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cPMenu: true,
            tPMenu: false,
            gPDMenu: false
        }
    }

    menuClick = (e) => {
        debugger
        if (e.key === "createProduct-menu") {
            this.setState({
                cPMenu: true,
                tPMenu: false,
                gPDMenu: false
            })
        }
        if (e.key === "transferProduct-menu") {
            this.setState({
                cPMenu: false,
                tPMenu: true,
                gPDMenu: false
            })
        }
    }

    render() {
        return (
            <div className="farmerDashboard-wrapper">
                <Row span={24}>
                    <Col span={20}>
                        <Typography.Title style={{ "text-align": "center" }} level={2}>Farmer Dashboard</Typography.Title>
                    </Col>
                    <Col span={4}>
                        <Card className="Dashboard-wrapper" bordered={false}>
                            <p>Ajeeth</p>
                            <p>Farmer</p>
                        </Card>
                    </Col>
                </Row>
                <Menu mode="horizontal">
                    <Menu.Item key="createProduct-menu" onClick={this.menuClick}>
                        Create product
                    </Menu.Item>
                    <Menu.Item key="transferProduct-menu" onClick={this.menuClick}>
                        Transfer product
                    </Menu.Item>
                    <Menu.Item key="getProductDetails-menu" onClick={this.menuClick}>
                        Get product details
                    </Menu.Item>
                </Menu>
                {this.state.cPMenu &&<CreateProduct/>}
                {this.state.tPMenu &&<TransferProduct />}
            </div>
        )
    }
}
export default Dashboard;