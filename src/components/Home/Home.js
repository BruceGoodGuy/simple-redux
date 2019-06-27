import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        this.submitText = this.submitText.bind(this);
    }
    submitText(e){
        e.preventDefault();
        this.props.onSetText(e.target.text.value)
    }
  render(){
    return (
            <form onSubmit={this.submitText}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Text</label>
                    <input type="text" name="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Sometext"/>
                    <small id="emailHelp" className="form-text text-muted">Type anything</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            );
        }
}

export default Home;
