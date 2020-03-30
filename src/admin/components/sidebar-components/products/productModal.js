import React from 'react';
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios'

class ProductModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: props.initialModalState,
            fade: true,

            Product_Name: '',
            Product_Category: '',
            Price: 0,
            Jar_Size: 0,
            Description: '',
            Link_Img: ''
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
            fade: !this.state.fade

        });
    }



    setName = e => {
        this.setState({
            Product_Name: e.target.value
        })
    }
    setCategory = e => {
        this.setState({
            Product_Category: e.target.value
        })
    }
    setPrice = e => {
        this.setState({
            Price: e.target.value
        })
    }

    setJar_Size = e => {
        this.setState({
            Jar_Size: e.target.value
        })
    }

    setDescription = e => {
        this.setState({
            Description: e.target.value
        })
    }

    setLink_Img = e => {
        this.setState({
            Link_Img: e.target.value
        })
    }



    addproduct = () => {
        if (this.state.Product_Name !== '' && (this.state.Product_Category !== '' || this.state.Price !== '' || this.state.Jar_Size !== '' || this.state.Description !== '' || this.state.Link_Img !== '')) {
            axios.post("http://localhost:4000/add_product", {
                Product_Name: this.state.Product_Name, Product_Category: this.state.Product_Category, Price: this.state.Price, Jar_Size: this.state.Jar_Size, Link_Img: this.state.Link_Img
            })
        }
        else { alert('Please fill all required fields!') }
    }



    render() {
        return (
            <div>
                <Button className="addProductButton" variant="outline-primary" onClick={this.toggle} >Add product</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}
                    fade={this.state.fade}
                    className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Product Form</ModalHeader>
                    <ModalBody className="productForm">

                        <span>Product Name</span>
                        <input placeholder="Add product name" onChange={this.setName}></input>
                        <span>Category</span>
                        <input placeholder="Add category" onChange={this.setCategory}></input>
                        <span>Product Price</span>
                        <input placeholder="Add price" onChange={this.setPrice}></input>
                        <span>Jar Size</span>
                        <input placeholder="Add jar size" onChange={this.setJar_Size}></input>
                        <span>Image Link</span>
                        <input placeholder="Add product image" onChange={this.setLink_Img}></input>
                        <span>Product description</span>
                        <input placeholder="Add product description" onChange={this.setDescription}></input>


                    </ModalBody>
                    <ModalFooter className="productFormBtns">
                        <Button color="primary" onClick={this.addproduct}>Add</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ProductModal;