import axios from "axios"

export function PostData(type, userData) {
    let BaseURL = 'https://codebine.com/fakeauth';

    axios({
        method: 'post',
        url: `${BaseURL}`,
        headers: { 'content-type': 'application/json' },        
        type: type,
        data: JSON.stringify(userData)
    })
        .then(result => {            
            sessionStorage('userData',result.data.sent)            
        })
        .catch(error => {

        });
}