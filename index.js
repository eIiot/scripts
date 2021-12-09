fetch('https://api.github.com/repos/eiiot/scripts/contents')
  .then(async function(response) {
    const data = await response.json();
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      const file = data[i];

      console.log(file)

      if (file.type == 'dir' && !file.name.startsWith('.')) {
        console.log(file)
        // create new a tag inside of the body
        var a = document.createElement('a');
        a.href = './' + file.name;
        a.innerHTML = file.name;
        document.body.appendChild(a);
        document.body.appendChild(document.createElement('br'));
      };
    };
  });
