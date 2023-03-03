const containerDom = document.getElementById("grid_container");
const gameModeDom = document.getElementById("game_mode");
// const easyDom = document.querySelector(".easy");
// const hardDom = document.querySelector(".hard");
// if (gameModeDom.value == easyDom){
//     for (let i = 0; i < 100 ; i++){
//         const squareDom = document.createElement('div');
//         squareDom.innerHtml = i;
//         squareDom.classList.add('square');
         
//         squareDom.addEventListener('click',
//             function(){
//                 this.classList.toggle('selected');
//                 console.log(i + 1);
//             }       
//         );
    
//         const buttonDom = document.getElementById("action");
        
//         buttonDom.addEventListener('click',
//             function(){
//                 squareDom.classList.toggle('d_none');
//                 squareDom.classList.remove('selected');
//             }  
//         );
//         containerDom.append(squareDom);
//     };
//     } else {(gameModeDom.value == hardDom)
//     for (let i = 0; i < 81 ; i++){
//         const squareDom = document.createElement('div');
//         squareDom.innerHtml = i;
//         squareDom.classList.add('square');
         
//         squareDom.addEventListener('click',
//             function(){
//                 this.classList.toggle('selected');
//                 console.log(i + 1);
//             }       
//         );
    
//         const buttonDom = document.getElementById("action");
        
//         buttonDom.addEventListener('click',
//             function(){
//                 squareDom.classList.toggle('d_none');
//                 squareDom.classList.remove('selected');
//             }  
//         );
//         containerDom.append(squareDom);
//     };
//            };

           for (let i = 0; i < 100 ; i++){
            const squareDom = document.createElement('div');
            squareDom.innerHtml = i;
            squareDom.classList.add('square');
            squareDom.classList.add('d_none');
            squareDom.addEventListener('click',
                function(){
                    this.classList.toggle('selected');
                    console.log(i + 1);
                }       
            );
        
            const buttonDom = document.getElementById("action");
            
            buttonDom.addEventListener('click',
                function(){
                    squareDom.classList.toggle('d_none');
                    squareDom.classList.remove('selected');
                }  
            );
            containerDom.append(squareDom);
        };


// mettere in maniera progressiva numeri nei quadrati
// creare un bottone per generare la griglia
// al click cambiare colore dei quadrati


