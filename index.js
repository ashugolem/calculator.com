let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = [];
var p='';
for (item of buttons)
{
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('This is the button', buttonText);
        if(buttonText == 'X')
        {
            buttonText = '*';
            screenValue += buttonText; 
            screen.value += 'x'; 
        }
        else if(buttonText == 'C'){
            screen.value = '';
            screenValue = '';
        }
        
        else if(buttonText == '='){
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else if(buttonText == ''){
            p = screenValue;
            p = p.substr(0, p.length-1);
            screenValue = p;
            screen.value = p;
            console.log(p);
        }
        else{
            screenValue += buttonText; 
            screen.value += buttonText; 
        }

        // function clickBack(){
        //     p = document.getElementById('back').innerHTML;
        //     p = p.substr(0, p.length-1);
        //     screenValue = p;
        //     screen.value = p;
        // }
        
    })

}







