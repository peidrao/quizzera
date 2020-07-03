import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Main from './Main';
import * as actions from '../../actions';

const mapStateToProps = ({ errorMessage, user }, ownProps) => ({
    errorMessage,
    ownProps,
    user
});

const mapDispatchToProps = dispatch => ({
    login: (username, password) => {
        dispatch(actions.login(username, password));
    },
    register: (username, email, password) => {
        dispatch(actions.register(username, email, password));
    }
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Main)
);
