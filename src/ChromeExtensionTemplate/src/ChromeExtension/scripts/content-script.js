const main = async () => {
    
    let body = document.querySelector("body");
    
    let helloWorldH1 = createElement("h1");
    
    helloWorldH1.innerText = "Hello from you new Chrome extension!";
    
    body.insertBefore(helloWorldH1,body.firstChild);
}

main().catch((error) => {
    console.error("Oh no!", error);
});