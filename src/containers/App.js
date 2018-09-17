import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Page from '../components/Page';
import User from '../components/User';
import * as pageActions from '../actions/PageActions';

class App extends Component {
    render() {
        const { user, page } = this.props;
        const { setYear } = this.props.pageActions;

        return (
            <div className='row'>
                <User name={user.name} surname={user.surname} age={user.age} />
                <Page year={page.year} photos={page.photos} setYear={setYear} />
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

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);