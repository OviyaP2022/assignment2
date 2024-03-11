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
    groupimage.classList.add('band-image');
    groupimage.src = entry.fields.groupimage.fields.file.url;
    group.appendChild(groupimage);

    var musicVideo = document.createElement('video');
    musicVideo.src = 'https:' + entry.fields.musicVideo.fields.file.url;
    musicVideo.controls = true;
    musicVideo.classList.add('music-video');
    musicVideo.innerHTML = entry.fields.musicVideo;
    group.appendChild(musicVideo);
 
    var description = document.createElement('p');
    description.classList.add('band-description');
    description.innerHTML = entry.fields.description;
    group.appendChild(description);

    // entryDiv.appendChild(musicVideo);
  });
