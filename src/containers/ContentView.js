import React from 'react';
import ContentWrapper from 'components/Content/ContentWrapper';
import ContentHeader from 'components/Content/ContentHeader';
import Content from 'components/Content/Content';

export default class ContentView extends React.Component {

  render() {
    const {
      title,
      parent
    } = this.state;

    return (
      <ContentWrapper>
        {
          title && parent && <ContentHeader title={title} parent={parent} />
        }
        <Content>
          {this.renderContent()}
        </Content>
      </ContentWrapper>
    );
  }

}
