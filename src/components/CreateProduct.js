import React from "react";
import { Input, Button, Space, Typography, Row, Col, Select, Menu, Card, Form, Radio } from "antd";
import { } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../Style/CreateProduct.css'

class CreateProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productID: '',
            productName: '',
            productWeight: '',
            isOrganic: 'yes',
            Time: '',
            location: null
        }
    }

    createClear = () => {
        debugger
        this.setState({
            productID: '',
            productName: '',
            productWeight: '',
            isOrganic: 'yes',
            Time: '',
            location: null
        })
    }

    render() {
        const { Option } = Select;
        return (
            <div className="createProduct-wrapper">
                <Space direction="vertical">
                    <table className="create-input-table">
                        <tr>
                            <td>Product ID:</td>
                            <td><Input id="com-input" onChange={x => {
                                this.setState({
                                    productID: x.target.value
                                })
                            }} value={this.state.productID} /></td>
                        </tr>
                        <tr>
                            <td>Product Name:</td>
                            <td><Input id="com-input" onChange={x => {
                                this.setState({
                                    productName: x.target.value
                                })
                            }} value={this.state.productName} /></td>
                        </tr>
                        <tr>
                            <td>Product Weight:</td>
                            <td><Input type="number" id="com-input" onChange={x => {
                                this.setState({
                                    productWeight: x.target.value
                                })
                            }} value={this.state.productWeight} /></td>
                        </tr>
                        <tr>
                            <td>Is Organic:</td>
                            <td><Radio.Group defaultValue="yes" value={this.state.isOrganic} onChange={x => {
                                this.setState({
                                    isOrganic: x.target.value
                                })
                            }}>
                                <Radio value="yes">Yes</Radio>
                                <Radio value="no">No</Radio>
                            </Radio.Group></td>
                        </tr>

                        <tr>
                            <td>Time:</td>
                            <td><Input id="com-input"  disabled="true" value={this.state.Time} /></td>
                        </tr>

                        <tr>
                            <td>Location:</td>
                            <td><Select className="location-select" placeholder="select location" value={this.state.location} onChange={x => {
                                this.setState({
                                    location: x.value
                                })
                            }}>
                                <Option value="Chennai">
                                    Chennai
                                </Option>
                                <Option value="Vellore">
                                    Vellore
                                </Option>
                            </Select></td>
                        </tr>
                    </table>
                    <Button type="primary" id="com-button">Create</Button>
                    <Button type="primary" id="com-button" danger ghost onClick={this.createClear}>Clear</Button>
                </Space>
            </div>
        )
    }
}

export default CreateProduct;