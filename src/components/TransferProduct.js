import React from "react";
import { Input, Button, Space, Typography, Row, Col, Select, Menu, Card, Form, Radio } from "antd";
import { } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../Style/TransferProduct.css'

class TransferProduct extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            productID: '',
            toName: '',
            Time: ''
        }
    }

    transferClear = () => {
        debugger
        this.setState({
            productID: '',
            toName: '',
            Time: ''
        })
    }

    render(){
        return(
            <div className="transferProduct-wrapper">
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
                            <td>To:</td>
                            <td><Input id="com-input" onChange={x => {
                                this.setState({
                                    toName: x.target.value
                                })
                            }} value={this.state.toName} /></td>
                        </tr>

                        <tr>
                            <td>Time:</td>
                            <td><Input id="com-input"  disabled="true" value={this.state.Time} /></td>
                        </tr>
                    </table>
                    <Button type="primary" id="com-button">Transfer</Button>
                    <Button type="primary" id="com-button" danger ghost onClick={this.transferClear}>Clear</Button>
                </Space>
            </div>
        )
    }
}

export default TransferProduct;