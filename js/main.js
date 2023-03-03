const containerDom = document.getElementById("grid_container");


for (let i = 0; i < 100 ; i++){
    const squareDom = document.createElement('div');
    squareDom.innerHtml = i;
    squareDom.classList.add('square');
     
    squareDom.addEventListener('click',
        function(){
            this.classList.toggle('selected');
            console.log(i + 1);
        }    
    
    );



    const buttonDom = document.getElementById("action");
    
    buttonDom.addEventListener('click',
        function(){
            squareDom.classList.toggle('d_none')
        }
    
    
    );



    containerDom.append(squareDom);
};




// mettere in maniera progressiva numeri nei quadrati
// creare un bottone per generare la griglia
// al click cambiare colore dei quadrati


