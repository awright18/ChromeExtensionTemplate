//This is intended to be used to be able to tell if the your extension is running on local host or the target domain.
//Add your custom domain checks here for your specific use case.

const isLocalhostUrl = () => {
    let url = window.location.href;

    let pattern = /^(https?:\/\/)localhost(:\d+)?/;

    return pattern.test(url);
}
const localDataUrl = () => {
    var url = window.location;
    var dataUrl = `${url.protocol}//localhost:${url.port}/fake-response.json`;
    return dataUrl;
}

//Update this if you need a more specific set of Url patterns that your conent_script needs to allow/deny access to. 

const isValidUrl = () => {

    if(isLocalhostUrl()){
        return true;
    }
    
    return false;
}