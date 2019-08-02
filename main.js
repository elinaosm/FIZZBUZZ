
console.log('Script started');

function init () {
    console.log('Adding listeners')
    addListeners();
    document.getElementById('elements');
    
    var clearButton = document.getElementById('refresh');
    clearButton.addEventListener("click", onClickClear);
    var submitCustom = document.getElementById('generateC');
    submitCustom.addEventListener("click", onClickCustom);
}


function onClick() {
    onClickClear();
    console.log('Button hit');
        for(let i = 1; i<101; i++){
            const element = document.createElement('div');
            element.className="element" + i;
            elements.appendChild(element);
                if (i % 3 ===0 && i % 5 === 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "FizzBuzz");
                    element.innerText="FizzBuzz " + i;
                }
                else if (i % 3 === 0 && i % 5 !== 0) {
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Fizz");
                    element.innerText="Fizz " + i;
                    
                }

                else if (i % 5 === 0 && i % 3 !== 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Buzz");
                    element.innerText="Buzz " + i;
                    
                }

                else if (i % 3 !== 0 && i % 5 !== 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Empty");
                    element.innerText=i;
                    
                }
        }
}

function onClickClear () {
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
    console.log('Divs cleared');
}

function onClickCustom (){
    onClickClear();
    console.log('Divs cleared');
    console.log('Generate custom divs');
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;   
    var fizz = document.getElementById('fizz').value;
    var buzz = document.getElementById('buzz').value;
    console.log('min - ' + min);
    console.log('max - ' + max);
    console.log('fizz - ' + fizz);
    console.log('buzz - ' + buzz);

        for (min; min<=max; min++){
            const element = document.createElement('div');
            element.id="element" + min;
            
            elements.appendChild(element);
                if (min % fizz === 0 && min % buzz === 0){
                    element.setAttribute("id", "element" +min);
                    element.setAttribute("class", "FizzBuzz");
                    element.innerText="FizzBuzz " + min;
                }
                else if (min % fizz === 0 && min % buzz !== 0) {
                    element.setAttribute("id", "element" +min);
                    element.setAttribute("class", "Fizz");
                    element.innerText="Fizz " + min;
                }

                else if (min % buzz === 0 && min % fizz !== 0){
                    element.setAttribute("id", "element" +min);
                    element.setAttribute("class", "Buzz");
                    element.innerText="Buzz " + min;
                }

                else if (min % fizz !== 0 && min % buzz !== 0){
                    element.setAttribute("id", "element" +min);
                    element.setAttribute("class", "Empty");
                    element.innerText=min;


                }
        }
}

 function addListeners() {
    const submit = document.getElementById('generateA');
    submit.onclick = onClick;
}


init();