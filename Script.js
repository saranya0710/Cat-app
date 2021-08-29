async function getCats(){
    const data = await fetch("https://cataas.com/api/cats");
    const cats = await data.json();
    return cats;
}
const container = document.createElement('div');
container.style.padding = "10px";

async function getCatData(){
const catdata =await getCats();

for(let i=0;i<catdata.length;i++){
    const cat =  document.createElement('img');
    
    let imgURL = 'https://cataas.com/cat/'+catdata[i].id;
    cat.setAttribute('src',imgURL);

    container.append(cat);
} 

};
 getCatData();
 document.body.append(container);

 let key= document.getElementsByClassName("search");

