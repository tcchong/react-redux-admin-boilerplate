import React from 'react';
import AppHeaderContainer from 'components/AppHeaderContainer/AppHeaderContainer';
import AppLogo from 'components/AppLogo/AppLogo';
import Navbar from 'components/Navbar/Navbar';
import LeftSidebar from 'components/LeftSidebar/LeftSidebar';

let sidebarList = [
  {
    id: 1,
    name: 'CRUD',
    path: 'crud',
    icon: 'database',
    child: [
      {
        id: 2,
        name: 'Simple List',
        path: 'simple-list',
      }
    ]
  }
];

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <AppHeaderContainer>
          <AppLogo />
          <Navbar />
        </AppHeaderContainer>

        <LeftSidebar list={sidebarList} />

        {this.props.children}

        <div className="control-sidebar-bg"></div>
      </div>
      );
  }
}
