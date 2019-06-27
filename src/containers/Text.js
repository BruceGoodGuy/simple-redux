import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setText} from "./../actions/index";
import Home from './../components/Home/Home';

class HomeContainer extends Component{
    render(){
       let { onSetText } = this.props;
      return (<Home onSetText={onSetText}></Home>);
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSetText: (text) =>{
            dispatch(setText(text))
        }
    }
  }
export default connect (null, mapDispatchToProps)(HomeContainer);