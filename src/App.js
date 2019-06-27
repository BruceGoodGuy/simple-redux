import React, {Component} from 'react';
import ResultContainer from './containers/Result';
import HomeContainer from './containers/Text';
class App extends Component{
  render(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-2 mb-2 shadow p-3 mb-5 bg-white rounded">
                    <HomeContainer></HomeContainer>
                </div>
                <div className="col-md-6 mt-2 mb-2 shadow p-3 mb-5 bg-white rounded">
                    <ResultContainer></ResultContainer>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
