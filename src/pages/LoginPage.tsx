import React, {useEffect} from 'react';
import {login} from "../services/api.service";

const LoginPage = () => {
    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        }).then(console.log)
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default LoginPage;