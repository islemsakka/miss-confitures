import React, { Component } from 'react';
import SimpleMap from './googleMaps';
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <SimpleMap />
        </div>);
    }
}

export default Map;