//define functions here
var createGist = function(file_name, content, description, token){
  let createGistUrl = "https://api.github.com/gists/"
  var gistObj = {
    "description": description,
    "public": true,
    "files": {
      [file_name]: {
        "content": content
      }
    }
  }
  var success = function(data){
    console.log(data)
    debugger
  }
  $.ajax({
    url: createGistUrl,
    type: 'POST',
    dataType: 'json',
    headers: {
      Authorization: "token " + token
    },
    data: JSON.stringify(gistObj),
    success: success
  })

};

var myGists = function (username, token){
  let gistUrl = 'https://api.github.com/users/' + username + '/gists'
  $.ajax({
    url: gistUrl,
    type: 'GET',
    dataType: 'json',
    headers: {
      Authorization: "token " + token
    }
  })
  .done(function(json){
    for (var i = 0; i < json.length; i++) {
      console.log(json[i])
    }
  })
};


var bindCreateButton = function() {
  // call functions here
  $('#createBtn').on('click', function(e){
    createGist('testing','testing_content','testing_description', '25911026215e62bff2847409f5632d5f98c774ca');
  })

};

$(document).ready(function(){
  bindCreateButton();
});
