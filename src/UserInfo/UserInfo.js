import React, { Component } from 'react';
import './UserInfo.scss';

class UserInfo extends Component {
  render() {
    const { name, email, phone, website, company } = this.props.user;
    return (
      <aside className="UserInfo">
        <h2>{name}</h2>
        <div className="contactLabel"> Contact Me @</div>
        <div className="userInfoList">
          {Object.entries({ email, phone, website }).map(([key, value]) => (
            <ul key={key}>
              <div className="itemName">{key}:</div>
              <div className="itemValue">{value}</div>
            </ul>
          ))}
          <ul>
            <div className="itemName">company:</div>
            <div>{company?.name}</div>
          </ul>
        </div>
      </aside>
    );
  }
}

export default UserInfo;
