import React, { useContext } from 'react';
import Navbar from './Navbar';
import {AuthContext} from '../Auth';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';


function Home() {
    const {currentUser} = useContext(AuthContext);

    if(currentUser!==null){
    return (
        <>
            <Navbar />            
        </>
    )
    }else{
        return (
            <>
                <div className="container">
                    <ErrorMessage>
                        <div className="p-3 bg-danger error-box font-weight-bold container">
                            <h5 className="text-center text-white">Oops!! Seems you haven't logged in.</h5>
                            <Link to="/login">
                                <div className="d-flex justify-content-center">
                                    <button className="btn bg-light text-danger font-weight-bold mt-4"><i className="fas fa-arrow-left text-danger" />&nbsp;&nbsp;&nbsp;Back to Login</button>
                                </div>
                            </Link>
                        </div>
                    </ErrorMessage>
                </div>            
            </>
        )
    }
}
const ErrorMessage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;    
    .error-box{
        border-radius: 15px !important;
        box-shadow: 2px 2px 15px rgba(0,0,0,0.5) !important;
    }
`
export default withRouter(Home)