class Utils {
    constructor() {
        
    }
  
    httpRequest(endpoint, method, data, cb) {
        var resp = data || {};
        var xhttp = new XMLHttpRequest();
        var url = "http://localhost:8000/api" + endpoint;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(xhttp.response);
                cb && cb(response)
            }
        };        
        xhttp.open(method, url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        if(method === 'get') {
            xhttp.send()
        } else {
            xhttp.send(JSON.stringify(data))
        }
                  
    }
  
}
  
var utils = new Utils();
export default utils;