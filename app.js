let btn = document.querySelector("button");

btn.addEventListener("click" , async ()=>{
    let link = await getImages();
    // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src" , link);
});

let url = "https://dog.ceo/api/breeds/image/random";

async function getImages(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    } catch(e){
        console.log(e);
        return "No Image found";
    }
}