import React from 'react';
import MapContainer from './MapContainer';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    const center = [-33.43778, -70.65028];
    const zoom = 16;
      return (
        <MapContainer 
        center={center}
        zoom={zoom}
        />
            );
       
        }
}  

export default App;
