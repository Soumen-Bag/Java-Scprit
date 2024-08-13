let months = []
function addMonth() {
  const monthInput = document.getElementById("monthInput").value;

  if (monthInput) {
    months.push(monthInput);
    alert(`${monthInput} has been added`)
    document.getElementById("monthInput").value = '';
  }
  else {
    alert("Enter the valid month")
  }
}

function displayMonth() {
  const monthsList = document.getElementById("monthsList");
  monthsList.innerHTML = '';

  if (months.length > 0) {
    months.forEach((month, index) => {
      const li = document.createElement('li');
      li.innerText = `${month} : ${index}`;
      monthsList.appendChild(li);
    });
  }
}

function removeMonth(){
  if(months.length>0){
    const removeMonths=months.pop();
    alert(`${removeMonths} has been removed`);
    displayMonth();
  }
  else{
    alert("The list is empty")
  }
}
