const btn = document.getElementById('btn');
const result = document.getElementById('result');


btn.addEventListener('click', function (e) {
      var num1 = document.getElementById('number1').value;
      var num2 = document.getElementById('number2').value;
      var num3 = document.getElementById('number3').value;

      e.preventDefault();

      // check the condition
        if(num1 =="" || num2 =="" || num3 ==""){
            alert("please enter 3 number");
        }
        else if(num1 > num2 && num1 > num3) {
            largest = num1;
            result.innerText = `${largest} is largest number`;
        }
        else if (num2 > num1 && num2 > num3) {
            largest = num2;
            result.innerText = `${largest} is largest number`;
        }
        else if(num3 > num1 && num3 > num2){
            largest = num3;
            result.innerText = `${largest} is largest number`;
        }
        else{
            result.innerText = `${num1}, ${num2}, ${num3} all number is equel`;
        }

       


})