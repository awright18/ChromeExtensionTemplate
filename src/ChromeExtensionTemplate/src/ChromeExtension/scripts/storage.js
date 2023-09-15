const addDataToLocalStorage = async (key,data) => {
    try {

        await chrome.storage.local.set({key : data });

        console.log(`${key} saved ${data} to local storage`);
    }
    catch (error) {
        console.log("error adding data to local storage", error);
    }
}

const getDataFromLocalStorage = async (key) => {

    try {

        const data = await chrome.storage.local.get([key]);

        if(data){
            console.log("got data from local storage");
        }
        
        return data[key];
    }
    catch (error) {
        console.log("error getting data from local storage", error);
    }

    return null;
}