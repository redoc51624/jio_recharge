var paytm_data;
// var url = "https://jsonkeeper.com/b/V19M";
// var url = "/jio%20(3).json";
function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
            console.log(data.RDATA);
            paytm_data= data;
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

ajax_get('./jio%20(3).json ', function(data) {
    var len1 = Object.keys( data.RDATA ).length;
    var data1= data.RDATA;
    // console.log(data1[0]);
    // console.log(data1.FULLTT);
        var keys = [];
        var values = [];
        for(var l in data1){
        keys.push(l);
        values.push(data1[l]);
        }
        var len2 = values.length;
        console.log(values[6]);
    for(var i in values){
        var keys = Object.keys(data1);
        var curr_id = keys[i];
        var curr_data = values[i];
        if(curr_data == null)
        {
            console.log("empty data");
        }
        else {
            console.log("current data :" + curr_data);
 
            var html = "<h2>" + keys[i] + "</h2>";
            html += "<ol>";
            var len3 = keys.length;
                    for(let x in curr_data){
                    // console.log(data1[x]);
                    html += '<li> <div class="rupees">';
                     html+=  curr_id;
                     html+=' </div></li>';
                     
            document.getElementById("text").innerHTML = html;
                    }
        }
        // // // console.log(curr_data);
        
    html += "</ol>";     
    }
});

