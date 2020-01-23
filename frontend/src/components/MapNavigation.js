/*global google*/
import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from 'react-google-maps';

class MapNavigation extends Component {

  state = {
    directions: null
  };

  componentDidMount() {
    const { orig, dest } = this.props;
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: orig.lat, lng: orig.lng };
    const destination = { lat: dest.lat, lng: dest.lng };

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.WALKING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error('error fetching directions ${result}');
        }
      }
    );
  }

  render() {
    const { orig } = this.props;

    const GoogleMapNavigation = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: orig.lat, lng: orig.lng }}
        defaultZoom={15}
      >
        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapNavigation
          containerElement={<div style={{ height: '100%', width: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}

export default MapNavigation;
