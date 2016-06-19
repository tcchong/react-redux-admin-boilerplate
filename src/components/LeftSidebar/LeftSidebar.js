import React from 'react';
import { Link } from 'react-router';

let LeftSidebar = ({list}) => {
  return (
    <div className="main-sidebar">
      <section className="sidebar">
        <ul className="sidebar-menu">
          <li className="header">MAIN NAVIGATION</li>
          <li>
            <Link to="/">
              <i className="fa fa-th"></i> <span>Overview</span>
            </Link>
          </li>
          {
            list.map((parent) =>
              <li className="treeview" key={parent.id}>
                <a href="#">
                  <i className={`fa fa-${parent.icon}`}></i>
                  <span>{parent.name}</span>
                  <i className="fa fa-angle-left pull-right"></i>
                </a>
                <ul className="treeview-menu">
                  {
                    parent.child.map((child) =>
                        <li key={child.id}>
                          <Link to={`${parent.path}/${child.path}`}>
                            <i className="fa fa-circle-o"></i>
                            {child.name}
                          </Link>
                        </li>
                      )
                  }
                </ul>
              </li>
            )
          }
        </ul>
      </section>
    </div>
    )
}

export default LeftSidebar;
