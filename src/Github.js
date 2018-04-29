import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getRepos as getReposActionCreator,
  changeUsername as changeUsernameActionCreator
} from "./actionCreators";

class Github extends Component {
  constructor() {
    super();
    //this.state = { username: "" };
    this.handleChange = this.handleChange.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  handleChange(e) {
    //this.setState({ username: e.target.value });
    e.preventDefault();
  }

  getRepos() {
    // fetch(`https://api.github.com/users/${this.state.username}`)
    //   .then(r => r.json())
    //   .then(user => fetch(user.repos_url))
    //   .then(r => r.json())
    //   .then(repos => {
    //     console.log(repos);
    //     this.setState({ repos }, () => console.log(this.state));
    //   });
    this.props.getRepos(this.props.username);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <fieldset>
          <legend>Github username</legend>
          <input
            type="text"
            placeholder="your awesome github name"
            value={this.props.username}
            onChange={this.props.changeUsername}
          />
          <button onClick={this.getRepos}>Get Repos</button>
          {this.props.repos && this.props.repos.map(r => <li>{r.name}</li>)}
        </fieldset>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    isLoading: state.isLoading,
    repos: state.repos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRepos: username => dispatch(getReposActionCreator(username)),
    changeUsername: e => dispatch(changeUsernameActionCreator(e.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Github);
