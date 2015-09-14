function loadProjects(username, accesstoken, elementToAppendValuesTo, accountName) 
{
    $.ajax({
        type: "GET",
        datatype: "json",
        url: "https://" + accountName + "/DefaultCollection/_apis/projects?api-version=1.0",
        
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + accesstoken)
        },

    }).done(function (projects) {
        projectNames = "";
        for (var i = 0; i < projects.value.length; i++) {
            projectNames += "<P>" + projects.value[i].name + "</P>";
        }              
        elementToAppendValuesTo.append(projectNames);
    }).fail(function () {
        elementToAppendValuesTo.append("Project list did not load. :(");
    });

}
