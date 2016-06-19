import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import ContentView from 'containers/ContentView';
import { getItem, updateItem, createItem } from 'redux/actions/item';
import {
  CRUDForm
} from 'components';

@connect(state => ({
  loading: state.status.loading,
  loaded: state.item.loaded,
  item: state.item.item.toJS()
}), {
  getItem,
  updateItem,
  createItem,
  push
})
export default class SimpleListEditView extends ContentView {

  static propTypes = {
    item: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    getItem: PropTypes.func.isRequired,
    createItem: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  }

  constructor(props) {
    super();

    this.renderContent = this.renderContent.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);

    this.state = {
      title: 'Simple List View 2',
      fieldTypes: {
        id: { type: 'text', disabled: true },
        name: { type: 'text' },
        price: { type: 'text' }
      },
      isNew: props.params.id === 'NEW'
    };
  }

  componentDidMount() {
    if (!this.state.isNew) {
      this.props.getItem(this.props.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isNew && nextProps.loaded) {
      this.props.push('/crud/simple-list');
    }
  }

  handleConfirm() {
    // BAD PRATICE
    const {
      isNew
    } = this.state;
    const formRefs = this.refs.itemBox.refs.crudForm.refs;
    const id = isNew
      ? this._generateRandomHash(16)
      : this._getValue(formRefs.id);
    const data = {
      name: this._getValue(formRefs.name),
      price: this._getValue(formRefs.price),
    };
    
    if (isNew) {
      this.props.createItem(Object.assign({ id }, data));
    } else {
      this.props.updateItem(id, data);
    }
  }

  renderContent() {
    const {
      loading,
      loaded,
      item
    } = this.props;

    return (
      <div className="row">
        <div className="col-md-6">
          <CRUDForm
            ref="itemBox"
            loading={loading}
            loaded={loaded}
            data={item}
            isNew={this.state.isNew}
            handleRemove={() => this.props.getItem()}
            handleConfirm={this.handleConfirm}
            path="/crud/simple-list"
            fieldTypes={this.state.fieldTypes} />
        </div>
      </div>
      )
  }

  _generateRandomHash(length) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  _getValue(refs) {
    return refs.value;
  }

}
