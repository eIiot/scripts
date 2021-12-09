fetch('https://api.github.com/repos/eiiot/scripts/contents')
  .then(async function(response) {
    const data = await response.json();
    const div = document.createElement('div');
    for (let i = 0; i < data.length; i++) {
      const file = data[i];

      if (file.type == 'dir' && !file.name.startsWith('.')) {
        // check if folder contains index.html
        const index = await fetch(`https://api.github.com/repos/eIiot/scripts/contents/${file.name}/index.html`)
        // handle error
        if (!index.ok) {continue};
        console.log(index.ok);
        var a = document.createElement('a');
        a.href = './' + file.name;
        a.innerHTML = file.name;
        div.appendChild(a);
        div.appendChild(document.createElement('br'));
      };
    };
    document.getElementById('loading').style.display = 'none';
    document.body.appendChild(div);
  });
