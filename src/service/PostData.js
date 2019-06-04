import axios from "axios"

export function PostData(type, userData) {
    let BaseURL = 'http://dev.codebine.com/frames.php';
    return new Promise((resolve, reject) => {
        axios.post(BaseURL, {
            type: type,            
            body: JSON.stringify(userData)
        })
            .then((response) => response.data)
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}