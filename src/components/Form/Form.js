import React, { PropTypes } from 'react';

const [
  TYPE_TEXT,
  TYPE_SELECT,
  TYPE_RADIO
] = [
  ['text', 'number'],
  'select',
  'radio'
];

export default class Form extends React.Component {
  constructor() {
    super();

    this.renderInput = this.renderInput.bind(this);
  }

  renderInput(key) {
    const {
      fieldTypes,
      initialValues
    } = this.props;

    const {
      type,
      disabled
    } = fieldTypes[key];


    const value = initialValues ? initialValues[key] : '';

    let input;
    if (TYPE_TEXT.indexOf(type) > -1) {
      input =
        (<input
          ref={key}
          className="form-control"
          disabled={disabled}
          type={type}
          defaultValue={value} />);
    } else if (type === TYPE_SELECT) {
      input = <select></select>;
    } else if (type === TYPE_RADIO) {
      input = <radio></radio>;
    }
    return (
      <div key={key} className="form-group">
        <label>{key.toUpperCase()}</label>
        {input}
      </div>
      );
  }

  render() {
    const {
      fieldTypes
    } = this.props;
    return (
      <form className="form">
        {
          Object.keys(fieldTypes).map((key) => this.renderInput(key))
        }
      </form>
      );
  }
}

Form.propTypes = {
  fieldTypes: PropTypes.object.isRequired,
  initialValues: PropTypes.object
};
