import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ContentView from 'containers/ContentView';
import { listItem, removeItem } from 'redux/actions/item';
import {
  Box,
  BoxHeader,
  BoxBody,
  Table,
  TableBody,
  LinkBtn,
  ActionBtn
} from 'components';

@connect(state => ({
  loading: state.status.loading,
  reload: state.item.reload,
  itemList: state.item.itemList.toJS()
}), {
  listItem,
  removeItem
})
export default class SimpleListView extends ContentView {

  static propTypes = {
    loading: PropTypes.bool,
    reload: PropTypes.bool,
    itemList: PropTypes.array,
    listItem: PropTypes.func,
    removeItem: PropTypes.func
  }

  constructor() {
    super();

    this.renderContent = this.renderContent.bind(this);

    this.state = {
      title: 'Simple List View'
    };
  }

  componentDidMount() {
    this.props.listItem();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reload) {
      this.props.listItem();
    }
  }

  renderContent() {
    const {
      loading,
      itemList
    } = this.props;

    return (
      <Box type="default" loading={loading}>
        <BoxHeader>
          <LinkBtn type="success" path="/crud/simple-list/edit/NEW">
            Create
          </LinkBtn>
        </BoxHeader>
        <BoxBody>
          <Table>
            <TableBody>
            {
              itemList.map((item) =>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <LinkBtn type="info" path={`/crud/simple-list/edit/${item.id}`}>
                      Edit
                    </LinkBtn>
                    &nbsp;
                    <ActionBtn type="danger" onClick={() => this.props.removeItem(item.id)}>
                      Remove
                    </ActionBtn>
                  </td>
                </tr>)
            }
            </TableBody>
          </Table>
        </BoxBody>
      </Box>
      );
  }

}
