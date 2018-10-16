import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PrefixTrie } from 'complete-me';
import './SignUpModal.scss';

class SignUpModal extends Component {
  state = {
    searchValue: '',
    autoCompleteResults: [],
    name: '',
    email: '',
    password: '',
    buildingsTrie: {}
  };

  componentDidMount() {
    const { buildings } = this.props;
    const buildingsTrie = new PrefixTrie();
    const buildingNames = buildings.map(b => b.name);
    buildingsTrie.populate(buildingNames);
    this.setState({ buildingsTrie });
  }

  handleSearchChange = e => {
    const { buildingsTrie } = this.state;
    const autoCompleteResults = buildingsTrie.suggest(e.target.value);
    this.setState({ autoCompleteResults, searchValue: e.target.value });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setUser(this.state);
    this.setState({ name: '', email: '', password: '', searchValue: '' });
  };

  handleSuggestionClick = e => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { handleModalClose } = this.props;
    const { name, email, password, autoCompleteResults, searchValue } = this.state;

    const suggestionOptions = autoCompleteResults.map((suggestion, i) => (
      <option
        onClick={this.handleSuggestionClick}
        key={`${suggestion}-${i}`}
        value={suggestion}
      >
        {suggestion}
      </option>
    ));

    return (
      <div className="sign-up-modal">
        <div className="modal-inner">
          <h1>Modal inner</h1>
          <p onClick={handleModalClose}>X</p>
          <form onSubmit={this.handleSubmit} className="sign-up-form">
            <input
              onChange={this.handleSearchChange}
              type="text"
              placeholder="My Building"
              value={searchValue}
            />
            <datalist id="suggestions">{suggestionOptions}</datalist>
            <input
              onChange={this.handleChange}
              type="name"
              name="name"
              value={name}
              placeholder="Name"
            />
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              value={email}
              placeholder="Email"
            />
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              value={password}
              placeholder="password"
            />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

SignUpModal.propTypes = {
  buildings: PropTypes.array,
  setUser: PropTypes.func,
  handleModalClose: PropTypes.func
};

export default SignUpModal;
