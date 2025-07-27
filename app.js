let userInput = document.querySelector('#task');
let btn = document.querySelector('button');
let ul = document.querySelector('#listWindow');

btn.addEventListener("click",function(){
    let li = document.createElement('li');
    li.innerText = userInput.value ;

    let delBtn = document.createElement('button');
    delBtn.innerText = "Remove" ;
    li.appendChild(delBtn);
    
    
    ul.appendChild(li);
    userInput.value = null ;
    
    delBtn.addEventListener("click",function(event){
        ul.removeChild(li);
        console.log("Task Removed");
    })

})
