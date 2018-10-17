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
    interests: [],
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
    const { name, email, password, interests, searchValue } = this.state;
    const { userSignUp } = this.props;
    e.preventDefault();
    userSignUp({ name, email, password, searchValue, interests });
    this.setState({ name: '', email: '', password: '', interests: [], searchValue: '' });
  };

  handleSuggestionClick = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleUserInterestChange = (e) => {
    const { interests } = this.state;

    if (interests.includes(e.target.value)) {
      const updatedInterests = interests.filter(interest => interest !== e.target.value);
      this.setState({ interests: updatedInterests });
    } else  {
      this.setState({ interests: [...interests, e.target.value]});
    }
  }

  render() {
    const { handleModalClose, interests } = this.props;
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
    const displayedInterests = interests.map((interest, index) => (
      <div key={index}>
        <input type="checkbox" name={interest.name} value={interest.name} onChange={this.handleUserInterestChange}/> 
        <label htmlFor={interest.name}>{interest.name}</label>
      </div>
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
          {displayedInterests}
      </div>
    );
  }
}

SignUpModal.propTypes = {
  buildings: PropTypes.array,
  userSignUp: PropTypes.func,
  handleModalClose: PropTypes.func,
  interests: PropTypes.array
};

export default SignUpModal;
