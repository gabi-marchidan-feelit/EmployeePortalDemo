import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/listItemActions';

export const FuelSavingsPage = () => {
  // return (
  //   <FuelSavingsForm
  //     saveFuelSavings={props.actions.saveFuelSavings}
  //     calculateFuelSavings={props.actions.calculateFuelSavings}
  //     fuelSavings={props.fuelSavings}
  //   />
  // );
  return (
    <div>
      Test
    </div>
  );
};


function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FuelSavingsPage);
