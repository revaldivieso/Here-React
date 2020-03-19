import React from "react";
import DisplayMapClass from "./DisplayMapClass";

function App() {
  const [point, setpoint] = React.useState({ lat: 40, lng: 30 });
  const onCoordinate = pos => {
    const crd = pos.coords;
    setpoint({ lat: crd.latitude, lng: crd.longitude });
  };
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(onCoordinate);
  }, []);
  return <DisplayMapClass point={point} />;
}
export default App;

/*import React from "react";
import MapContainer from "./MapContainer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -33.43778,
      lng: -70.65028
    };
  }
  render() {
    const center = [this.state.lat, this.state.lng];
    const zoom = 50;
    return <MapContainer center={center} zoom={zoom} />;
  }
  componentDidMount() {
    
  }

  onSuccessPosition(pos) {
    
    this.setState({ ...this.state, lat: crd.latitude, lng: crd.longitude });
  }
}

export default App;*/
