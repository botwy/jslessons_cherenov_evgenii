/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import {connect} from 'react-redux';

const App = (props) => (
  <div>
    <div>Hi {props.target} {props.count}</div>
    <input value={props.count} onChange={props.setCount} />
  </div>
);

App.propTypes = {
  target: React.PropTypes.string.isRequired,
  count: React.PropTypes.string.isRequired,
  setCount: React.PropTypes.func.isRequired
};

export default connect(
  store => ({count: store.count}),
  dispatch => ({ setCount: (event) => dispatch({type:'INC', count:event.target.value})})
)(App);