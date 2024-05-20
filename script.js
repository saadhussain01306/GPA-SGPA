const submit = document.querySelector('#submit');
submit.setAttribute('class','submit-class');
var num = 1;
const button = document.createElement('button');
button.setAttribute('class','submit-class');
button.innerText = "Calculate";
button.setAttribute('id','btn');

let arr = [];

submit.addEventListener('click',()=>{
  num = subject.value;
  addFields(num);

})

function addFields(num){
  const len = num
  for(let i=0;i<num;i++){
    const newDiv = document.createElement('div');
    newDiv.innerHTML = '<input class="g" type="text" placeholder="grade"> <input class="c" type="number" min="1" placeholder="credit">'
    newDiv.classList.add('sub');
    document.querySelector('#details').append(newDiv);
  }
  document.querySelector('#details').append(button);
  document.querySelector('#details').style.display = 'block';

}

button.addEventListener('click',()=>{
  const cr = document.querySelectorAll('.c');
  const gr = document.querySelectorAll('.g');
  for(let i=0;i<num;i++){
    arr.push([gr[i].value, cr[i].value]);
  }
  findSGPA();
})

function findSGPA(){
  var total = 0;
  var credits = 0;
  const cr = document.querySelectorAll('.c');
  const gr = document.querySelectorAll('.g');
  for(let i=0; i<num; i++){
    credits += parseInt(arr[i][1]);
    if(arr[i][0]==='S'){
      total += parseFloat(arr[i][1])*10;
    }
    else if(arr[i][0]==='A'){
      total += parseFloat(arr[i][1])*9;
    }
    else if(arr[i][0]==='B'){
      total += parseFloat(arr[i][1])*8;
    }
    else if(arr[i][0]==='C'){
      total += parseFloat(arr[i][1])*7;
    }
    else if(arr[i][0]==='D'){
      total += parseFloat(arr[i][1])*6;
    }
    else if(arr[i][0]==='E'){
      total += parseFloat(arr[i][1])*5;
    }
    else{
      console.log("INVALID");
    }
  }
  var ans = total/credits;
  const result = document.querySelector('#result');
  result.innerHTML += "SGPA is ";
  result.innerHTML += ans.toFixed(2);
  result.style.display = 'block';
}