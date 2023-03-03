const containerDom = document.getElementById("grid_container");


for (let i = 0; i < 100 ; i++){
    const squareDom = document.createElement('div');
    squareDom.classList.add('square');






    containerDom.append(squareDom);
}