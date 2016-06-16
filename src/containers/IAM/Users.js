import React from 'react';
import ContentView from 'containers/ContentView';
import Box from 'components/Box/Box';
import BoxBody from 'components/Box/BoxBody';

export default class Users extends ContentView {

  constructor() {
    super();

    this.state = {
      title: 'Users',
      parent: 'IAM'
    };
  }

  renderContent() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Box type="info">
            <BoxBody>
              content here
            </BoxBody>
          </Box>
        </div>
      </div>
      )
  }

}