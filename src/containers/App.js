import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../components/Page';
import User from '../components/User';

class App extends Component {
    render() {
        const { user, page } = this.props;

        return (
            <div>
                <User name={user.name} surname={user.surname} age={user.age} />
                <Page year={page.year} photos={page.photos} />
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    };
}

export default connect(mapStateToProps)(App);