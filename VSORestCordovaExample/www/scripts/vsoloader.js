function loadProjects() 
{
    var username = ""; // put username to use here
    var password = ""; // put personal access token here

    $.ajax({
        type: "GET",
        datatype: "json",
        url: "https://rapid.visualstudio.com/DefaultCollection/_apis/projects?api-version=1.0",
        
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },

    }).done(function (projects) {
        var projectNames = "";
        for (var i = 0; i < projects.value.length; i++) {
            projectNames += projects.value[i].name + "\n";
        }
        
        alert(projectNames);

        });
}
