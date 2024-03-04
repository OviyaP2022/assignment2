var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

console.log(id);

var client = contentful.createClient({
    space: 'ete5e4krj05q',
    accessToken: 'Bb-Y-ihGV2S_IjpzqfnpOdE5hrgWxqe1l3LDqWLL8-8',
  });

  var group = document.getElementById('group');
  client.getEntry(id).then(function (entry) {
    console.log(entry);
    var name = document.createElement('h3');
    name.classList.add('band-name');
    name.innerHTML = entry.fields.groupName;
    group.appendChild(name);

    var groupimage = document.createElement('img');
    name.classList.add('band-image');
    groupimage.src = 'https:' + entry.fields.groupimage.fields.file.url;
    entryDiv.appendChild(groupimage);
  });