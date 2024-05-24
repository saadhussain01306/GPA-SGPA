const submit = document.querySelector('#submit');
submit.setAttribute('class','submit-class');
var num = 1;
const button = document.createElement('button');
button.setAttribute('class','submit-class');
button.innerText = "Calculate";
button.setAttribute('id','btn');

let arr = [];

submit.addEventListener('click',()=>{
  num = semester.value;
  addFields(num);
})

function addFields(num){
  const len = num
  for(let i=0;i<num;i++){
    const newDiv = document.createElement('div');
    newDiv.innerHTML = '<input class="sgpa" type="number" placeholder="SGPA"> <input class="credits" type="number" min="1" placeholder="Credits">'
    newDiv.classList.add('semester');
    document.querySelector('#details').append(newDiv);
  }
  document.querySelector('#details').append(button);
  document.querySelector('#details').style.display = 'block';
}

button.addEventListener('click',()=>{
  const credits = document.querySelectorAll('.credits');
  const sgpa = document.querySelectorAll('.sgpa');
  // Check if any field is left empty
  for(let i=0; i<num; i++){
    if(credits[i].value === "" || sgpa[i].value === ""){
      alert("Please fill in all the fields.");
      return; // Stop execution if any field is empty
    }
  }
  for(let i=0;i<num;i++){
    arr.push([parseFloat(sgpa[i].value), parseInt(credits[i].value)]);
  }
  findCGPA();
})

function findCGPA(){
  var totalCredits = 0;
  var totalPoints = 0;
  for(let i=0; i<num; i++){
    totalCredits += arr[i][1];
    totalPoints += arr[i][0] * arr[i][1];
  }
  var cgpa = totalPoints / totalCredits;
  const result = document.querySelector('#result');
  result.innerHTML = "Your CGPA is: " + cgpa.toFixed(2);
  result.style.display = 'block';
}
