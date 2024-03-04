console.log("hello world");

var client = contentful.createClient({
    space: 'ete5e4krj05q',
    accessToken: 'Bb-Y-ihGV2S_IjpzqfnpOdE5hrgWxqe1l3LDqWLL8-8',
  });

  
  var placeForContent = document.getElementById('place-for-content');


  // gets all the entries as a json
  client.getEntries().then(function (entries) {
    // loops through the json to look at one entry at a 
    entries.items.forEach(function (entry) {
    // if statement checks that this field exists 
    var entryDiv = document.createElement('div');
    entryDiv.classList.add('entry-div');

    //if (entry.fields.name) {
        
    var name = document.createElement('h2');
    name.innerHTML = entry.fields.groupName;
    entryDiv.appendChild(name);

    var link = document.createElement('a');
    link.innerHTML = "link to" + entry.fields.groupName;
    link.href = entry.fields.linkToProfile;
        //placeForContent.appendChild(link);
        entryDiv.appendChild(link);

    var groupimage = document.createElement('img');
    groupimage.src = 'https:' + entry.fields.groupimage.fields.file.url;
    entryDiv.appendChild(groupimage);

    var description = document.createElement('p');
    description.innerHTML = entry.fields.description;
    entryDiv.appendChild(description);

    var musicVideo = document.createElement('video');
    musicVideo.src = 'https:' + entry.fields.musicVideo.fields.file.url;
    musicVideo.controls = true;
    entryDiv.appendChild(musicVideo);


        placeForContent.appendChild(entryDiv);
    // do whatever with the info in the field
      
    });
  });
