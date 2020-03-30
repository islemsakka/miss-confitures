import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Maps = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (

            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDlc0P_JFveIX7iEpnl1i2_f9b42sWBX1s' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Maps
                        lat={59.955413}
                        lng={30.337844}

                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;