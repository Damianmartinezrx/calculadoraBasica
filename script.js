
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let expression = "";

    buttons.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        if(btn.classList.contains('num')){
          expression += btn.textContent;
          display.textContent = expression;
        } else if(btn.classList.contains('operator')){
          expression += btn.textContent;
          display.textContent = expression;
        } else if(btn.classList.contains('equal')){
          try{
            expression = eval(expression).toString();
            display.textContent = expression;
          }catch{
            display.textContent = "Error";
            expression = "";
          }
        } else if(btn.classList.contains('clear')){
          expression = "";
          display.textContent = "0";
        }
      });
    });
  