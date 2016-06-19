import React, { PropTypes } from 'react';
import {
  Box,
  BoxHeader,
  BoxBody,
  BoxFooter,
  Form,
  ActionBtn,
  LinkBtn
} from 'components';

export default class CRUDForm extends React.Component {

  static propTypes = {
    loaded: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    isNew: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    fieldTypes: PropTypes.object.isRequired,
    handleConfirm: PropTypes.func,
    handleRemove: PropTypes.func
  }

  render() {
    const {
      isNew,
      loading,
      loaded,
      fieldTypes,
      data,
      path,
      handleConfirm,
      handleRemove
    } = this.props;

    return (
      <Box type="default" loading={loading}>
        <BoxBody>
          {
            !isNew && loaded &&
              <Form
                ref="crudForm"
                fieldTypes={fieldTypes}
                initialValues={data} />
          }
          {
            isNew &&
              <Form
                ref="crudForm"
                fieldTypes={fieldTypes} />
          }
        </BoxBody>
        <BoxFooter>
          <LinkBtn type="default" path={path}>
            Back
          </LinkBtn>
          &nbsp;
          <ActionBtn type="success" onClick={handleConfirm}>
            Confirm
          </ActionBtn>
        </BoxFooter>
      </Box>
    )
  }
}
