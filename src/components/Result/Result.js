
import React, {Component} from 'react';

class Result extends Component{
    render(){
        let {text} = this.props;
    return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{text}</h1>
                    <p className="lead"></p>
                </div>
            </div>
            );
        }
}

export default Result;
                    