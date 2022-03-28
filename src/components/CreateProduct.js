import React from "react";
import { DatePicker,Input, Button, Space, Typography, Row, Col, Select, Menu, Card, Form, Radio } from "antd";
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
            location: null,
            isProductID: true,
            isProductName: true,
            isProductWeight: true,
            isLocation: true
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
            location: null,
        })
        this.errorClear();
    }

    errorClear=()=>{
        this.setState({
            isProductID: true,
            isProductName: true,
            isProductWeight: true,
            isLocation: true
        })
    }

    createProduct = () => {
        this.errorClear();
        debugger
        if (this.state.productID == '' || this.state.productID == null || this.state.productID == undefined) {
            this.setState({
                isProductID: false
            })
        }

        if (this.state.productName == '' || this.state.productName == null || this.state.productName == undefined) {
            this.setState({
                isProductName: false
            })
        }

        if (this.state.productWeight == '' || this.state.productWeight == null || this.state.productWeight == undefined) {
            this.setState({
                isProductWeight: false
            })
        }

        if (this.state.location == '' || this.state.location == null || this.state.location == undefined) {
            this.setState({
                isLocation: false
            })
        }

        if(this.state.isProductID && this.state.isProductName && this.state.isProductWeight && this.state.isLocation)
        {
            var cDate = new Date();

            var data=this.state.productID+'-'+this.state.productName+'-'+this.state.productWeight+'-'+this.state.isOrganic+'-'+this.state.location+'-'+this.state.Time+'Farmer'

            fetch('http://localhost:8001/add_produce/'+data).then(res=>console.log(res));
            console.log(data)
        }
    }

    render() {
        const { Option } = Select;
        return (
            <div className="createProduct-wrapper">
                <Space direction="vertical">
                    <table className="create-input-table">
                        <tr>
                            <td className="label-col">Product ID:</td>
                            <td className="input-col"><Input id="com-input" onChange={x => {
                                this.setState({
                                    productID: x.target.value
                                })
                            }} value={this.state.productID} /></td>
                            {!this.state.isProductID && <td className="error-col">please enter Product Id!</td>}
                        </tr>
                        <tr>
                            <td className="label-col">Product Name:</td>
                            <td className="input-col"><Input id="com-input" onChange={x => {
                                this.setState({
                                    productName: x.target.value
                                })
                            }} value={this.state.productName} /></td>
                            {!this.state.isProductName && <td className="error-col">please enter Product Name!</td>}
                        </tr>
                        <tr>
                            <td className="label-col">Product Weight:</td>
                            <td className="input-col"><Input type="number" id="com-input" onChange={x => {
                                this.setState({
                                    productWeight: x.target.value
                                })
                            }} value={this.state.productWeight} /></td>
                            {!this.state.isProductWeight && <td className="error-col">please enter Product Weight!</td>}
                        </tr>
                        <tr>
                            <td className="label-col">Is Organic:</td>
                            <td className="input-col"><Radio.Group defaultValue="yes" value={this.state.isOrganic} onChange={x => {
                                this.setState({
                                    isOrganic: x.target.value
                                })
                            }}>
                                <Radio value="yes">Yes</Radio>
                                <Radio value="no">No</Radio>
                            </Radio.Group></td>
                        </tr>

                        <tr>
                            <td className="label-col">Time:</td>
                            <td className="input-col"><DatePicker id="com-input" value={this.state.Time} onChange={x=>{
                                this.setState({
                                    Time:x.value
                                })
                            }} /></td>
                        </tr>

                        <tr>
                            <td className="label-col">Location:</td>
                            <td className="input-col"><Select className="location-select" placeholder="select location" value={this.state.location} onChange={x => {
                                this.setState({
                                    location: x
                                })
                            }}>
                                <Option value="Chennai">
                                    Chennai
                                </Option>
                                <Option value="Vellore">
                                    Vellore
                                </Option>
                            </Select></td>
                            {!this.state.isLocation && <td className="error-col">please select Location!</td>}
                        </tr>
                    </table>
                    <Button type="primary" id="com-button" onClick={this.createProduct}>Create</Button>
                    <Button type="primary" id="com-button" danger ghost onClick={this.createClear}>Clear</Button>
                </Space>
            </div>
        )
    }
}

export default CreateProduct;