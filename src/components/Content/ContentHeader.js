import React from 'react';

let ContentHeader = ({title, parent}) => {
  return(
    <section className="content-header">
      <h1>
        {title}
      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard"></i> {parent}</a></li>
        <li className="active">{title}</li>
      </ol>
    </section>
    )
}

export default ContentHeader;
