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
            Price: "",
            Jar_Size: "",
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
    preview_image = (event) => {
        {
            var reader = new FileReader();
            reader.onload = function () {
                var output = document.getElementById('image_upload');
                output.src = reader.result;
               
            }
            reader.readAsDataURL(event.target.files[0]);
           console.log(event.target.files[0]); 
          
       
        }
    }


    addproduct = () => {
        if ([this.state.placeholder]!=='' ) {
            axios.post("http://localhost:4000/add_product", {Product_Name: this.state.Product_Name, Product_Category: this.state.Product_Category, Price: this.state.Price, Jar_Size: this.state.Jar_Size,Description:this.state.Description,Link_Img: this.state.Link_Img.replace('C:\\fakepath\\','img/')
            })
            this.toggle()
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
                        <input placeholder="Add product name"  value={this.state.Product_Name}onChange={this.setName}></input>
                        <span>Category</span>
                        <input placeholder="Add category" value={this.state.Product_Category} onChange={this.setCategory}></input>
                        <span>Product Price</span>
                        <input placeholder="Add price"value={this.state.Price} onChange={this.setPrice}></input>
                        <span>Jar Size</span>
                        <input placeholder="Add jar size" value={this.state.Jar_Size}onChange={this.setJar_Size}></input>
                        <span>Image Link</span>
                        <div className="fileupload-new thumbnail" >
                                            <img id='image_upload' alt="" style={{ width: "200px", height: " 150px" }} />
                         </div>
                                        <div class="form-group">
                                           
                                            <span className="btn btn-theme02 btn-file">
                                                <input type="file" class="default" name="img" value={this.state. Link_Img} accept="image/*" onInput={this.preview_image} onChange={(e) => { this.setState( { Link_Img:e.target.value})}} />
                                            </span>

                                        </div>
                        <span>Product description</span>
                        <input placeholder="Add product description" value={this.state.Description} onChange={this.setDescription}></input>


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