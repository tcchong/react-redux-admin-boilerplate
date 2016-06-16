import React from 'react';
import AppHeaderContainer from 'components/AppHeaderContainer/AppHeaderContainer';
import AppLogo from 'components/AppLogo/AppLogo';
import Navbar from 'components/Navbar/Navbar';
import LeftSidebar from 'components/LeftSidebar/LeftSidebar';
import Footer from 'components/Footer/Footer';

let sidebarList = [
  {
    id: 1,
    name: 'IAM',
    path: 'iam',
    icon: 'users',
    child: [
      {
        id: 2,
        name: 'Users',
        path: 'users',
      },
      {
        id: 3,
        name: 'Roles',
        path: 'roles',
      }
    ]
  },
];

export default class Dashboard extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <AppHeaderContainer>
          <AppLogo />
          <Navbar />
        </AppHeaderContainer>

        <LeftSidebar list={sidebarList} />

        {this.props.children}

        <Footer />

        <div className="control-sidebar-bg"></div>
      </div>
      )
  }
}
