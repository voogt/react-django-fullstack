import React from "react";
import { redirect, Outlet, Navigate} from "react-router-dom"
import {connect} from 'react-redux';


const PrivateRoute = (props) => {
    if(props.isLoading){
        return(<h2>Loading...</h2>)
    }
    else if(!props.isLoggedIn){
        return <Navigate to="/login"/>
    }
    else{
        console.log(props)
       return <Outlet />
    }
}

const mapStateToProps = function(state){
    return{
       isLoading: state.auth.isLoading,
       isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps)(PrivateRoute);