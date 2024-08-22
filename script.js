fetchDemos();
async function fetchDemos() {

    try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/photos");

        if (!responce.ok) {
            throw new Error(responce.statusText);
        }
        const data = await responce.json();
        displayImgs(data);
    }
    catch (error) {
        console.error(error);
    }

}

function displayImgs(data) {
    const parentElement = document.querySelector("body");
    data.forEach((img) => {
        const imgElement = document.createElement("img");
        imgElement.src = img.url;
        parentElement.appendChild(imgElement);
    })
    // for (var i = 0; i < 21; i++) {
    //     const imgElement = document.createElement("img");
    //     imgElement.src = data[i].url;
    //     parentElement.appendChild(imgElement);
    // }
}