function addUser() {
  const peopleDiv = document.getElementById('people');
  const gridDiv = peopleDiv.children[0];

  const newPeopleDiv = document.createElement('div');
  newPeopleDiv.innerHTML = `<article class="overflow-hidden rounded-lg shadow-lg p-3">
  <input type="text" name="product" id="product" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Wrestler Name" />
  <input type="text" name="product" id="product" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Club/Town" />
</article>`;

  // append innerHTML
  gridDiv.appendChild(newPeopleDiv);
};

for (let i = 0; i < 4; i++) {
  addUser();
};

document.getElementById('class').value = '';

function NoneEmpty(arr) {
  for(var i=0; i<arr.length; i++) {
    if(arr[i].name === "" || arr[i].location === "") return false;
  }
  return true;
}

function generatePDF() {
  const peopleDiv = document.getElementById('people');
  const gridDiv = peopleDiv.children[0];
  const people = gridDiv.children;

  const dataArray = {};
  const peopleArray = [];

  dataArray.class = document.getElementById('class').value;
  

  for (let i = 0; i < people.length; i++) {
    // get input
    const name = people[i].children[0].children[0].value;
    const location = people[i].children[0].children[1].value;

    peopleArray.push({ name, location });
  };

  dataArray.people = peopleArray;

  if (dataArray.class === '') {
    alert('Please enter a class name');
  } else if (dataArray.people.length < 4 || dataArray.people.length > 6) {
    alert('Please enter between 4 & 6 wrestlers');
  } else if (!NoneEmpty(dataArray.people)) {
    alert('Please enter wrestler names and locations');
  } else {
    var json = JSON.stringify(dataArray);

    console.log(json);

    window.location.href = `output.html?json=${json}`;
  };
  };