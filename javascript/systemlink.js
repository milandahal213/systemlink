    <script type="text/javascript">
      var APIKey = 'Your APIKey Here';
    var tag = 'test';

    function sendData(type, value) {
      var xhr = new XMLHttpRequest();
      var url = 'https://api.systemlinkcloud.com/nitag/v2/tags/' + tag + '/values/current';
      var propValue = {
        "value": {
          "type": type,
          "value": JSON.stringify(value)
        }
      }
      xhr.open('PUT', url, true);
      xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
      xhr.setRequestHeader('x-ni-api-key', APIKey);
      xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
              console.log(xhr.responseText);
            }
            // console.log(xhr)
        };
      xhr.send(JSON.stringify(propValue));
    }

    sendData("STRING", "awesome")
  </script>