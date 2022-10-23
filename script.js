const btn = document.getElementById('btn');
const result = document.getElementById('result');


btn.addEventListener('click', function (e) {
      let num1 = document.getElementById('number1').value;
      let num2 = document.getElementById('number2').value;
      let num3 = document.getElementById('number3').value;

      e.preventDefault();

      // check the condition 
      /*  if(num1 =="" || num2 =="" || num3 ==""){
            alert("please enter 3 number");
        }
        else if(num1 >= num2 && num1 >= num3) {
            result.innerText = `${num1} is largest number`;
        }
        else if (num2 >= num1 && num2 >= num3) {
            result.innerText = `${num2} is largest number`;
        }
        else if(num3 >= num1 && num3 >= num2){
            result.innerText = `${num3} is largest number`;
        }
        else{
            result.innerText = `${num1}, ${num2}, ${num3} all number is equel`;
        }
      */
       // check With Math.max()
      let maxNumber = Math.max(num1,num2,num3);
      result.innerText = '${maxNumber} is largest number';


})
