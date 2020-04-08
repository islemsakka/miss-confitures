import React, { Component } from 'react';
import ProductModal from './productModal';
import axios from 'axios';
import { Link } from 'react-router-dom'
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        console.log("Component did mount")
        axios.get("http://localhost:4000/find_products").then(res=> {this.setState({ products: res.data})
                console.log(this.state.products)
            })
    }



    componentDidUpdate(PrevProps, PrevState) {
        if (PrevState.products.length !== this.state.products.length) {
            console.log("Component did update")
            axios.get("http://localhost:4000/find_products/").then(res=> {this.setState({ products: res.data})});
        }
    }
    delete1 = (id) => {
        axios.delete("http://localhost:4000/delete_product/" + id)
            .then(res => {console.log(res.data);
                this.setState({
                    products: this.state.products.filter(el => el._id !== id)
                })
            })

    }




    render() {
        return (<div className="products-content pc">

            <ProductModal />

            
                
            <div className="container-fluid" style={{marginTop:"5%"}}>
                {/* {console.log(this.state.products)}   
            {this.state.products.map((el) => <div key={el._id}>
                            <p><span>Product Name:  </span>  <span>{el.Product_Name}</span></p>
                            <p><span>Product Category:  </span>  <span>{el.Product_Category}</span></p>
                            <p><span>Price:  </span>  <span>{el.Price}</span></p>
                            <p><span>Jar Size:  </span>  <span>{el.Jar_Size}</span></p>
                            <p><span>Product Description:  </span>  <span>{el.Description}</span></p>
                            <p><span>Product Image:  </span>  <span>{el.Link_Img}</span></p>
                            <p>
                                <button onClick={() => { this.delete1(el._id) }}>Delete</button>

                                <Link to={`/update/${el._id}`}> <button>Edit</button></Link>
                            </p>
            </div>      
                  
                )} */}
 <table class="table table-striped  ">
                <thead>
                  <tr>
                  
                    <th>Product Name</th>
                    <th >Product Category</th>
                    <th>Price</th>
                    
                    <th >Jar Size</th>
                    <th>Product Description</th>
                    <th>Product Image</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>{this.state.products.map(el =><tr>
                
                    <td>{el.Product_Name}</td>
                    <td >{el.Product_Category}</td>
                    <td>{el.Price}</td>
                   
                    <td >{el.Jar_Size}</td>
                    <td>{el.Description}</td>
                    {console.log(window.location.origin)}
                    
                    <td><img src={process.env.PUBLIC_URL +`/img/${el.Link_Img}`}/></td>
                   
                   
                   
                    <td ><button class="btn btn-primary btn-xs" style={{marginRight:"2px"}} onClick={()=>{if (window.confirm('Are you sure you wish to delete this item?')) {this.delete1(el._id)}}}><i class="fa fa-trash-o "></i></button> </td>
                    <td > <Link to={`/update/${el._id}`}><button class="btn btn-primary btn-xs"><i class="fa fa-pencil"></i></button></Link></td>
                   
                  </tr>
               

                )
                }</tbody>
               
                </table>

    </div>
      




        </div>);
    }
}

export default Products;














