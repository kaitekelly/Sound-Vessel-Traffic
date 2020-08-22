import React from 'react';
import SampleMap from '../SampleMap/SampleMap';
import EmbeddedMap from '../EmbeddedMap/EmbeddedMap';

class MarineTrafficMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { EmbeddedMapsReady: false };
  }

  componentWillMount() {
        EmbeddedMap(() => {
          // Work to do after the library loads.
          this.setState({ EmbeddedMapsReady: true });
        });   
  }

  render() {
      return (
          <div className="MapsComponent">
                {this.state.EmbeddedMapsReady ? <SampleMap /> : '' }
      </div>
    );
  }
}

export default MarineTrafficMap;