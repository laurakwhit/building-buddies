import React, { Component } from 'react';
import './SignUpModal.scss';

class SignUpModal extends Component {
  state = {
    name: '',
    email: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setUser(this.state);
    this.setState({ name: '', email: '' });
  };

  render() {
    const { handleModalClose } = this.props;
    const { name, email } = this.state;

    return (
      <div className="sign-up-modal">
        <div className="modal-inner">
          <h1>Modal inner</h1>
          <p onClick={handleModalClose}>X</p>
          <form onSubmit={this.handleSubmit} className="sign-up-form">
            <input
              onChange={this.handleChange}
              type="name"
              name="name"
              value={name}
            />
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              value={email}
            />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpModal;
