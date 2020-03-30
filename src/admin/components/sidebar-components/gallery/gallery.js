import React, { Component } from 'react';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <form action='/api/images' method="post" enctype="multipart/form-data">
                <input type='file' name='image' />
            </form>

        </div>);
    }
}

export default Gallery;



/**<img src=imageURL /> */