import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Contact = () => {
    const history = useHistory();
    useEffect(() => {
        fetch('/contact', {
            method: "GET",
            header: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
            else {
                history.push('/contact', { replace: true });
            }
        }).catch((err) => {
            history.push('/signin', { replace: true });
            console.log(err);
        })
    });
    return (
        <div className='contact'>
            <h1 className='contact-title'>Contact Page</h1>
        </div>
    )
}

export default Contact
