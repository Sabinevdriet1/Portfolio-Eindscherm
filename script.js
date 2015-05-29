
window.onload = function(e){ 
  var ageSelect = document.getElementById('age');
  var sendButton = document.getElementById('send');

  sendButton.onclick = function(){
    var websiteUrl = ageSelect.value;
    document.location.href = websiteUrl;
  }
}

