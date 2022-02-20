const params = new URLSearchParams(document.location.search);
const json = params.get("json");

const jsonArray = JSON.parse(json);
const peopleArray = jsonArray.people;

document.getElementById('weightClass').innerHTML = jsonArray.class;

for (let i = 0; i < peopleArray.length; i++) {
  const player = peopleArray[i];
  
  const peopleTable = document.getElementById("peopleTable");
  const row = document.createElement("tr");

  row.innerHTML = `              <td>
  ${player.name} [${player.location}]</a>
</td">`;
  peopleTable.appendChild(row);
};

const matchTable = document.getElementById('matchTable');

// create element with table contents
const matchArray = {};

if (peopleArray.length == 4) {

  matchArray.round1 = {
    name: "Round 1",
    match1: [peopleArray[0].name, peopleArray[1].name],
    match2: [peopleArray[2].name, peopleArray[3].name],
  };

  matchArray.round2 = {
    name: "Round 2",
    match1: [peopleArray[0].name, peopleArray[2].name],
    match2: [peopleArray[1].name, peopleArray[3].name],
  };

  matchArray.round3 = {
    name: "Round 3",
    match1: [peopleArray[0].name, peopleArray[3].name],
    match2: [peopleArray[1].name, peopleArray[2].name],
  };

  // edit table
  matchTable.innerHTML = `<tr>
  <th>Round 1</th>
  <th>Round 2</th>
  <th>Round 3</th>
</tr>
<tr>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round1.match1[0]} vs ${matchArray.round1.match1[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round2.match1[0]} vs ${matchArray.round2.match1[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round3.match1[0]} vs ${matchArray.round3.match1[1]}
  </td>
</tr>
<tr>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round1.match2[0]} vs ${matchArray.round1.match2[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round2.match2[0]} vs ${matchArray.round2.match2[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round3.match2[0]} vs ${matchArray.round3.match2[1]}
  </td>
</tr>`;

} else if (peopleArray.length == 5) {

  peopleArray.push({ name: '__________', location: '__________' });

  matchArray.round1 = {
    name: "Round 1",
    match1: [peopleArray[0].name, peopleArray[3].name],
    match2: [peopleArray[1].name, peopleArray[2].name],
    match3: [peopleArray[4].name, peopleArray[peopleArray.length - 1].name],
  };
  
  matchArray.round2 = {
    name: "Round 2",
    match1: [peopleArray[0].name, peopleArray[2].name],
    match2: [peopleArray[3].name, peopleArray[4].name],
    match3: [peopleArray[1].name, peopleArray[peopleArray.length - 1].name],
  };

  matchArray.round3 = {
    name: "Round 3",
    match1: [peopleArray[2].name, peopleArray[4].name],
    match2: [peopleArray[0].name, peopleArray[1].name],
    match3: [peopleArray[3].name, peopleArray[peopleArray.length - 1].name],
  };

  matchArray.round4 = {
    name: "Round 4",
    match1: [peopleArray[1].name, peopleArray[4].name],
    match2: [peopleArray[2].name, peopleArray[3].name],
    match3: [peopleArray[0].name, peopleArray[peopleArray.length - 1].name],
  };

  matchArray.round5 = {
    name: "Round 5",
    match1: [peopleArray[1].name, peopleArray[3].name],
    match2: [peopleArray[0].name, peopleArray[4].name],
    match3: [peopleArray[2].name, peopleArray[peopleArray.length - 1].name],
  };

  // edit table
  matchTable.innerHTML = `<tr>
  <th>Round 1</th>
  <th>Round 2</th>
  <th>Round 3</th>
  <th>Round 4</th>
  <th>Round 5</th>
</tr>
<tr>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round1.match1[0]} vs ${matchArray.round1.match1[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round2.match1[0]} vs ${matchArray.round2.match1[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round3.match1[0]} vs ${matchArray.round3.match1[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round4.match1[0]} vs ${matchArray.round4.match1[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round5.match1[0]} vs ${matchArray.round5.match1[1]}
  </td>
</tr>
<tr>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round1.match2[0]} vs ${matchArray.round1.match2[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round2.match2[0]} vs ${matchArray.round2.match2[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round3.match2[0]} vs ${matchArray.round3.match2[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round4.match2[0]} vs ${matchArray.round4.match2[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round5.match2[0]} vs ${matchArray.round5.match2[1]}
  </td>
</tr>
<tr>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round1.match3[0]} Bye
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round2.match3[0]} Bye
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round3.match3[0]} Bye    
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round4.match3[0]} Bye    
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round5.match3[0]} Bye    
  </td>
</tr>`;

} else if (peopleArray.length == 6) {

  matchArray.round1 = {
    name: "Round 1",
    match1: [peopleArray[0].name, peopleArray[3].name],
    match2: [peopleArray[1].name, peopleArray[2].name],
    match3: [peopleArray[4].name, peopleArray[5].name],
  };

  matchArray.round2 = {
    name: "Round 2",
    match1: [peopleArray[0].name, peopleArray[2].name],
    match2: [peopleArray[3].name, peopleArray[4].name],
    match3: [peopleArray[1].name, peopleArray[5].name],
  };

  matchArray.round3 = {
    name: "Round 3",
    match1: [peopleArray[2].name, peopleArray[4].name],
    match2: [peopleArray[0].name, peopleArray[1].name],
    match3: [peopleArray[3].name, peopleArray[5].name],
  };

  matchArray.round4 = {
    name: "Round 4",
    match1: [peopleArray[1].name, peopleArray[4].name],
    match2: [peopleArray[2].name, peopleArray[3].name],
    match3: [peopleArray[0].name, peopleArray[5].name],
  };

  matchArray.round5 = {
    name: "Round 5",
    match1: [peopleArray[1].name, peopleArray[3].name],
    match2: [peopleArray[0].name, peopleArray[4].name],
    match3: [peopleArray[2].name, peopleArray[5].name],
  };

  matchTable.innerHTML = `<tr>
  <th class="border-2 p-2">Round 1</th>
  <th class="border-2 p-2">Round 2</th>
  <th class="border-2 p-2">Round 3</th>
  <th class="border-2 p-2">Round 4</th>
  <th class="border-2 p-2">Round 5</th>
</tr>
<tr>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round1.match1[0]} vs ${matchArray.round1.match1[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round2.match1[0]} vs ${matchArray.round2.match1[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round3.match1[0]} vs ${matchArray.round3.match1[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round4.match1[0]} vs ${matchArray.round4.match1[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round5.match1[0]} vs ${matchArray.round5.match1[1]}
  </td>
</tr>
<tr>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round1.match2[0]} vs ${matchArray.round1.match2[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round2.match2[0]} vs ${matchArray.round2.match2[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round3.match2[0]} vs ${matchArray.round3.match2[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round4.match2[0]} vs ${matchArray.round4.match2[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round5.match2[0]} vs ${matchArray.round5.match2[1]}
  </td>
</tr>
<tr>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round1.match3[0]} vs ${matchArray.round1.match3[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round2.match3[0]} vs ${matchArray.round2.match3[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round3.match3[0]} vs ${matchArray.round3.match3[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round4.match3[0]} vs ${matchArray.round4.match3[1]}
  </td>
  <td class="border-2 p-2" class="px-3 py-3">
    ${matchArray.round5.match3[0]} vs ${matchArray.round5.match3[1]}
  </td>
</tr>`;
};

for (const round in matchArray) {
  if (Object.hasOwnProperty.call(matchArray, round)) {
    const roundArr = matchArray[round];
    for (const match in roundArr) {
      if (Object.hasOwnProperty.call(roundArr, match) && match != "name") {
        const matchArr = roundArr[match];

        const pdfDiv = document.getElementById("pdf");

        // find wrestler in peopleArray by name
        var wrestler1 = peopleArray.find(
          (wrestler) => wrestler.name === matchArr[0]
        );

        var wrestler2 = peopleArray.find(
          (wrestler) => wrestler.name === matchArr[1]
        );
        
        const div = document.createElement("div");
        div.innerHTML = `    <div id="boutSheetTitle" class="container m-auto">
        <div class="flex items-center justify-center">
          <div class="flex items-center text-3xl">
            Bout Sheet
          </div>
        </div>
      </div>
      
      <div id="boutSheet">
        <div class="container m-auto pt-5">
          <div class="flex justify-center text-center">
            <div class="px-10 py-5">Weight Class: ${jsonArray.class}</div>
            <div class="px-10 py-5">Round: ${roundArr.name}</div>
          </div>
        </div>  
      
        <div class="container m-auto pt-5">
          <div class="flex justify-center text-center">
            <div class="px-10 py-5">Wrestler: ${wrestler1.name}</div>
            <div class="px-10 py-5">Club/Town: ${wrestler1.location}</div>
            <div class="px-10 py-5">Red/Green</div>
          </div>
          <div class="flex items-center justify-center text-center">
            <table class="w-full">
              <tr>
                <th class="text-left">1st Period</th>
                <th class="text-left">2nd Period</th>
                <th class="text-left">3rd Period</th>
                <th class="text-left">4th Period</th>              
              </tr>
              <tr>
                <td class="h-40 border-2">
                </td>
                <td class="h-40 border-2">
                </td>
                <td class="h-40 border-2">
                </td>
                <td class="h-40 border-2">
                </td>
              </tr>
            </table>
          </div>
          <div>E (Escape 1)  T (Takedown 2)  R (Reversal 2 )  N2 (Nearfall 2 )  N3 (Nearfall 3)  N4 (Nearfall 4)  P1 (Penalty 1)  P2 (Penalty 2)</div>
        </div>
      
        <div class="container m-auto pt-5">
          <div class="flex justify-center text-center">
            <div class="px-10 py-5">Wrestler: ${wrestler2.name}</div>
            <div class="px-10 py-5">Club/Town: ${wrestler2.location}</div>
            <div class="px-10 py-5">Red/Green</div>
          </div>
          <div class="flex items-center justify-center text-center">
            <table class="w-full">
              <tr>
                <th class="text-left">1st Period</th>
                <th class="text-left">2nd Period</th>
                <th class="text-left">3rd Period</th>
                <th class="text-left">4th Period</th>              
              </tr>
              <tr>
                <td class="h-40 border-2">
                </td>
                <td class="h-40 border-2">
                </td>
                <td class="h-40 border-2">
                </td>
                <td class="h-40 border-2">
                </td>
              </tr>
            </table>
          </div>
          <div>E (Escape 1)  T (Takedown 2)  R (Reversal 2 )  N2 (Nearfall 2 )  N3 (Nearfall 3)  N4 (Nearfall 4)  P1 (Penalty 1)  P2 (Penalty 2)</div>
        </div>
      
        <div class="container m-auto pt-5">
          <div class="flex justify-center text-center">
            <div class="px-10 py-5">Referee Signature: __________</div>
            <div class="px-10 py-5">Wrestler Signature: __________</div>
          </div>
      
          <div class="flex justify-center text-center">
            <div class="px-10 py-5">Fall Time: __________</div>
            <div class="px-10 py-5">Actual Time of End: _____:_____</div>
          </div>
        </div>
      </div>
      
      <div class="page-break"></div>`;
        pdfDiv.appendChild(div);
      }
    }
  }
}

function download() {
  const element = document.getElementById('pdf');
  html2pdf(element, {
    margin:       0.25,
    filename:     'sheet.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak:    { mode: 'avoid-all', before: '.page-break' }
  });
};
