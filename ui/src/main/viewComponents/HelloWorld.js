import React from 'React';

export default class HelloWorld extends React.Component {
    componentWillMount() {
        this.props.fetchUserDetails();
    }

    render() {
        return (
            <h2>Hello {this.props.user.name}</h2>
        );
    }
}
