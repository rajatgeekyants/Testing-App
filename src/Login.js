import React from 'react';

import './Login.css';

export default function Login(props) {
  return (
    <div className="form">
      <div className="form">
        <form onSubmit={props.submit} className="login-form">
          <input
            data-testid="firstName"
            type="text"
            placeholder="first name"
            onChange={props.input}
            autoComplete="given-name"
            required={true}
          />
          <input
            data-testid="lastName"
            type="text"
            placeholder="last name"
            autoComplete="family-name"
            required={true}
          />
          <input
            data-testid="email"
            type="text"
            placeholder="Email"
            autoComplete="email"
            required={true}
          />
          <input
            data-testid="password"
            type="password"
            placeholder="password"
            autoComplete="off"
            required={true}
          />
          <button data-testid="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
