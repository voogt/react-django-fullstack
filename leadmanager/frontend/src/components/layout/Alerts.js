import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component{

    constructor(props){
        super(props);
        this.state = {showAlert: false}
    }

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    showAlert = () => {
        this.setState({
            showAlert: true
        })
    }

    hideAlert = () => {
        this.setState({
            showAlert: false
        })
    }

    componentDidUpdate(prevProps){
        const { error, alert, message} = this.props
        if(error !== prevProps.error){
            if(error.msg.name){
                window.alert(`Name: ${error.msg.name.join()}`)
            }
            if(error.msg.email){
                window.alert(`Email: ${error.msg.email.join()}`)
            }
            if(error.msg.message){
                window.alert(`Message: ${error.msg.message.join()}`)
            }
            if(error.msg.non_field_errors){
                window.alert(`${error.msg.non_field_errors.join()}`)
            }
            if(error.msg.username){
                window.alert(`${error.msg.username.join()}`)
            }
        }

        if(message !== prevProps.message){
            if(message.leadDeleted){
                window.alert(message.leadDeleted)
            }
            if(message.leadAdded){
                window.alert(message.leadAdded)
            }
            if(message.passwordNotMatch){
                window.alert(message.passwordNotMatch)
            }
        }
    }

    render(){
        return(
            <Fragment>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});
 
export default connect(mapStateToProps)(Alerts)