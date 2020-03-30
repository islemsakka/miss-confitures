import React, { Component } from 'react'
import axios from 'axios';

export default class Updateproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Product_Name: '',
            Product_Category: '',
            Price: 0,
            Jar_Size: 0,
            Description: '',
            Link_Img: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.Product_Name]: e.target.value
        })
    }
    componentDidMount() {

        axios.get('http://localhost:4000/find_note/' + this.props.match.params.id)
            .then(res => this.setState({ Product_Name: res.data.Product_Name, Product_Category: res.data.Product_Category, Price: res.data.Price, Jar_Size: res.data.Jar_Size, Description: res.data.Description, Link_Img: res.data.Link_Img }))
    }

    UpdateProd = () => {
        let modifiedProduct = {
            Product_Name: this.state.Product_Name,
            Product_Category: this.state.Product_Category,
            Price: this.state.Price,
            Jar_Size: this.state.Jar_Size,
            Description: this.state.Description,
            Link_Img: this.state.Link_Img
        }
        axios.put('http://localhost:4000/update_product/' + this.props.match.params.id, modifiedProduct)
    }
    render() {
        return (
            <div className='editproduct' >
                <input Name="Name" placeholder="Name" type="text" value={this.state.Name} onChange={(e) => this.handleChange(e)} /><br />
                <input name="Category" placeholder="Category" type="text" value={this.state.Product_Category} onChange={(e) => this.handleChange(e)} /><br />
                <input name="Price" placeholder="Price" type="text" value={this.state.Price} onChange={(e) => this.handleChange(e)} /><br />
                <input name="Jar_Size" placeholder="Jar_Size" type="text" value={this.state.Jar_Size} onChange={(e) => this.handleChange(e)} /><br />
                <input name="Description" placeholder="Description" type="text" value={this.state.Description} onChange={(e) => this.handleChange(e)} /><br />
                <input name="Image" placeholder="Image" type="text" value={this.state.Link_Img} onChange={(e) => this.handleChange(e)} />
                <button onClick={this.UpdateProd}>modifier</button>

            </div>
        )
    }
}

export default Updateproduct;