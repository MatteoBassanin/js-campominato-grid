const containerDom = document.getElementById("grid_container");
const gameModeDom = document.getElementById("game_mode");
const buttonDom = document.getElementById("action");

      



function easyGame(){
    for (let i = 0; i < 100 ; i++){
            const squareDom = document.createElement('div');
            squareDom.innerHtml = i;
            squareDom.classList.add('square');
            squareDom.classList.add('d_none');
            containerDom.append(squareDom);
            squareDom.addEventListener('click',
            
                function(){
                    this.classList.toggle('selected');
                    console.log(i + 1);
                }       
            );                  
            
            buttonDom.addEventListener('click',
                function(){
                    squareDom.classList.toggle('d_none');
                    squareDom.classList.remove('selected');
                }  
            );
            containerDom.append(squareDom);
        };
}

function hardGame(){
    for (let i = 0; i < 81 ; i++){
        const squareDom = document.createElement('div');
        squareDom.innerHtml = i;
        // squareDom.classList.remove('square');
        squareDom.classList.add('square_hard');
        squareDom.classList.add('d_none');

        containerDom.append(squareDom);
        squareDom.addEventListener('click',
        
            function(){
                this.classList.toggle('selected');
                console.log(i + 1);
            }       
        );                  
        
        buttonDom.addEventListener('click',
            function(){
                squareDom.classList.toggle('d_none');
                squareDom.classList.remove('selected');
            }  
        );
        containerDom.append(squareDom);
    };
}

function mammaMia(){
    for (let i = 0; i < 49 ; i++){
        const squareDom = document.createElement('div');
        squareDom.innerHtml = i;
        squareDom.classList.add('square');
        squareDom.classList.add('d_none');
        containerDom.append(squareDom);
        squareDom.addEventListener('click',
        
            function(){
                this.classList.toggle('selected');
                console.log(i + 1);
            }       
        );                  
        
        buttonDom.addEventListener('click',
            function(){
                squareDom.classList.toggle('d_none');
                squareDom.classList.remove('selected');
            }  
        );
        containerDom.append(squareDom);
    };
}


buttonDom.addEventListener('click',
    function(){
        if (gameModeDom.value == "easy"){
            easyGame();
        }else if (gameModeDom.value == "hard"){
            hardGame();
        }else if (gameModeDom.value == "mamma_mia"){
            mammaMia();

        }
    }

);






