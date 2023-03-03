const containerDom = document.getElementById("grid_container");
const gameModeDom = document.getElementById("game_mode");
const buttonDom = document.getElementById("action");

        //    for (let i = 0; i < 100 ; i++){
        //     const squareDom = document.createElement('div');
        //     squareDom.innerHtml = i;
        //     squareDom.classList.add('square');
        //     squareDom.classList.add('d_none');
        //     squareDom.addEventListener('click',
        //         function(){
        //             this.classList.toggle('selected');
        //             console.log(i + 1);
        //         }       
        //     );                  
            
        //     buttonDom.addEventListener('click',
        //         function(){
        //             squareDom.classList.toggle('d_none');
        //             squareDom.classList.remove('selected');
        //         }  
        //     );
        //     containerDom.append(squareDom);
        // };







buttonDom.addEventListener('click',
function(){
    if (gameModeDom.value == "easy"){
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
        
        
            
            buttonDom.addEventListener('click',
                function(){
                    squareDom.classList.toggle('d_none');
                    squareDom.classList.remove('selected');
                }  
            );
            containerDom.append(squareDom);
        };
        } else {(gameModeDom.value == "hard")
        for (let i = 0; i < 81 ; i++){
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
        
            
            
            buttonDom.addEventListener('click',
                function(){
                    squareDom.classList.toggle('d_none');
                    squareDom.classList.remove('selected');
                }  
            );
            containerDom.append(squareDom);
        };
            };

}
   



);









