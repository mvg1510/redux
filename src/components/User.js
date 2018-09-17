import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class User extends Component {
    render() {
        const { name, surname, age } = this.props;
        return (
            <div>
                <p>Hello, {name} {surname} ({age})</p>
            </div>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

export default User;