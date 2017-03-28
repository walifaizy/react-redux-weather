import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/index";

 class SearchBar extends Component {
  constructor(props){
    super(props);

     this.state = {term: ""};
     this.onInputChange = this.onInputChange.bind(this);
     this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
  //  console.log(event.target.value);
    this.setState({term: event.target.value});
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ""});
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <form onSubmit={this.onFormSubmit} className="input-group search">
              <input value={this.state.term} onChange={this.onInputChange} className="form-control" placeholder="Get a five day forecast"/>
              <span className="input-group-btn">
                <button type="submit" className="btn btn-default">Submit</button>
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
