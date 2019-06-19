
var s = document.getElementById('screen');
var b = document.getElementById('buttons');
var bt = document.querySelectorAll('button[class="bt"]');
var del = document.getElementById('del');
var slash = document.getElementById('slash');
var asterix = document.getElementById('asterix');
var add = document.getElementById('add');
var minus = document.getElementById('minus');
var point = document.getElementById('point');
var clear = document.getElementById('clear');

//styles for the screen starts here
s.style.width = '100%';
s.style.height = '80px';
s.style.backgroundColor = 'white';
s.style.fonSize = '20px';
s.style.padding = '10px';
//styles for the screen ends here

//styles for the buttons starts here
b.style.width = '100%';
b.style.height = '450px';
b.style.backgroundColor = '#2e3939';
b.style.marginTop = '15px';

//styles for the buttons starts here

//styles for the button in buttons starts here
for (i = 0; i <= 16; i++) {
    var bt = document.querySelectorAll('button')[i];
    bt.style.width = '22%';
    bt.style.height = '70px';
    bt.style.backgroundColor = 'white';
    bt.style.margin = '3px';
    bt.style.fontSize = '18px';
    bt.style.boxShadow = '1px 2px 5px white';
  
}
    var answer = document.getElementById('ans');
    answer.style.width = '97%';
    answer.style.marginTop = '20px';
    answer.style.backgroundColor = '#2170d5';
    answer.style.border = '0px';
    answer.style.color = 'white';
    
    del.style.backgroundColor = 'red';
    del.style.color = 'white';
    slash.style.color = 'white';
    asterix.style.color = 'white';
    add.style.color = 'white';
    minus.style.color = 'white';
    point.style.color = 'white';
    slash.style.backgroundColor = 'green';
    asterix.style.backgroundColor = 'green';
    add.style.backgroundColor = 'green';
    minus.style.backgroundColor = 'green';
    point.style.backgroundColor = 'green';
//styles for the button in buttons starts here

//This is the section for the calculator calculation function starts here

//This sets the initial value for the screen to be empty
s.innerHTML = '';
for (i = 0; i <= 16; i++) {
    var bt = document.querySelectorAll('button')[i];
    
    bt.addEventListener('click',function(){
//        This alerts the value of the selected button
//        alert(this.value);
//        s.innerHTML = s.innerHTML + this.value;
//        This adds what was clicked to the initial value on the screen
//        s.innerHTML+=this.value;
        
//        if(this.value == '='){
//            s.innerHTML = eval(s.innerHTML);
//        }else if(this.vlaue == 'del'){
//            var oldval = s.innerHTML;
//            var newval = oldval.substring(0,  oldval.length-1);
//            s.innerHTML = newval;
//        }else{
//             s.innerHTML+=this.value;
//        }
       
        if(this.value == 'del'){
            var oldval = s.innerHTML;
            var newval = oldval.substring(0,  oldval.length-1);
            s.innerHTML = newval;
        }else if(this.value == '='){
            s.innerHTML = eval(s.innerHTML);
        }else{
             s.innerHTML+=this.value;
        }
        
    });
}

//This is the section for the calculator calculation function ends here

//This section gets the clear button starts here
clear.addEventListener('click',function(){
    s.innerHTML = '';
});

//This section gets the clear button ends here