import React, { useState } from "react";
import { redirect, Outlet, Navigate} from "react-router-dom"
import {connect} from 'react-redux';
import PropTypes from "prop-types"

const PrivateRoute = (auth) => {
    if(auth.isLoading){
        return(<h2>Loading...</h2>)
    }
    else if(!auth.isLoggedIn){
        return <Navigate to="/login"/>
    }
    else{
       return <Outlet />
    }

}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);