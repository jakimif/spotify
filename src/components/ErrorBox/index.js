import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Container } from './styles';
import CloseIcon from '../../aseets/images/close.svg';
import { Creators as ErrorActions } from '../../store/ducks/error';

const ErrorBox = ({ error: { message, visible }, HideError }) => visible && (
<Container>
  <p>{message}</p>
  <button type="button" onClick={HideError}>
    <img src={CloseIcon} alt="Close" />
  </button>
</Container>
);

ErrorBox.propTypes = {
  HideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
