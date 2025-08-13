document.addEventListener('DOMContentLoaded', function(){
        count.innerHTML = `Touch Count: ${localStorage.getItem('counter')}`;
      })
      let counter = localStorage.getItem('counter');
      let button = document.querySelector('button');
      let count = document.querySelector('p');
      button.addEventListener('click', function(){
          counter++;     

          count.style.animation = 'none'; 
          void count.offsetWidth;   // RESET ANIMATION SO IT RUNS EACH TIME THE BUTTON IS CLICKED 
          count.style.animation = 'grow 1s ease-in-out';
     
        localStorage.setItem('counter', counter);
        count.innerHTML = `Touch Count: ${counter}`;
            })
