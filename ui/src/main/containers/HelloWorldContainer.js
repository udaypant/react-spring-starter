import {connect} from 'react-redux';
import HelloWorld from '../viewComponents/HelloWorld';
import {fetchUserDetails} from '../actions/User';

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {dispatch} = dispatchProps;

    return {
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
        fetchUserDetails: () => {
            dispatch(fetchUserDetails());
        }
    };
};

const HelloWorldContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(HelloWorld);

export default HelloWorldContainer;
