import axios from "axios"

export function PostData(posttype, userData) {    
    var BaseURL = posttype === 'login' ? 'https://codebine.com/Fakeauth' : '';        
    return axios.post(BaseURL, JSON.stringify(userData)) 
      .then(response => response.data)
      .catch(error => error)
}