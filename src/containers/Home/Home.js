import React from 'react';
import ContentView from 'containers/ContentView';
import Box from 'components/Box/Box';
import BoxBody from 'components/Box/BoxBody';

export default class Home extends ContentView {

  constructor() {
    super();
    this.state = {};
  }

  renderContent() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Box type="info">
            <BoxBody>
              Home
            </BoxBody>
          </Box>
        </div>
      </div>
      )
  }

}