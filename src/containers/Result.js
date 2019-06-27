import React, {Component} from 'react';
import { connect } from 'react-redux';
import Result from "./../components/Result/Result";
import PropTypes from 'prop-types';
class ResultContainer extends Component{
    render(){
       let {text} = this.props;
      return (<Result text = {text}></Result>);
    }
}
const mapStateToProps = state => {
    return {
      text : state.text
    }
}

ResultContainer.propTypes = {
  text: PropTypes.string.isRequired
}

export default connect (mapStateToProps, null)(ResultContainer);