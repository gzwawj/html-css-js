function add()
{
  var now = new Date();
  var div = document.getElementById('box');
  div.innerHTML = div.innerHTML + 'time_' + now.getTime() + '<br />';
  div.scrollTop = div.scrollHeight;
}