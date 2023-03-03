const containerDom = document.getElementById("grid_container");


for (let i = 0; i < 100 ; i++){
    const squareDom = document.createElement('div');
    squareDom.classList.add('square');
     
    squareDom.addEventListener('click',
        function(){

            this.classList.toggle('selected');
        }
        
    
    
    
    
    
    
    
    
    );





    containerDom.append(squareDom);
}





// mettere in maniera progressiva numeri nei quadrati
// creare un bottone per generare la griglia
// al click cambiare colore dei quadrati


