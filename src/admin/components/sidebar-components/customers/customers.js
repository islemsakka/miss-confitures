import React, { Component } from 'react';
import axios from 'axios'
class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    }



    componentDidMount() {
        console.log("Component did mount ")
        axios.get("http://localhost:4000/find_users/")
            .then(res => {
                this.setState({ customers: res.data })
                console.log(this.state.customers)
            })
    }
    componentDidUpdate(PrevState) {
        if (PrevState.customers.length !== this.state.customers.length) {
            console.log("component did update")
            axios.get("http://localhost:4000/find_users/")
        }
    }
    delete1 = (id) => {
        axios.delete("http://localhost:4000/delete_user/" + id)
            .then(res => {
                console.log(res.data);
                this.setState({
                    customers: this.state.customers.filter(el => el._id !== id)
                })
            })

    }








    render() {
        return (<div className="customers-content">

            <div className="displayCustomersList">
                {this.state.customers && this.state.customers.map((el) => {
                    return (
                        <div className="customers-info" key={el._id}>
                            <p><span>Name:  </span>  <span>{el.First_Name}</span></p>
                            <p><span>Last Name:  </span>  <span>{el.Last_Name}</span></p>
                            <p><span>Email:  </span>  <span>{el.Email}</span></p>
                            <p><span>Phone Number:  </span>  <span>{el.Phone_Number}</span></p>
                            <p>
                                <button onClick={() => { this.delete1(el._id) }}>Delete User</button>
                            </p>
                        </div>
                    )
                })}
            </div>


        </div>);
    }
}

export default Customers;






