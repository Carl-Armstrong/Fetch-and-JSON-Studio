window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");

            json.sort((a,b) => (a.hoursInSpace < b.hoursInSpace) ? 1 : (a.hoursInSpace === b.hoursInSpace) ?
            ((a.size > b.size) ? 1: -1) : -1 ) // sorts JSON

            document.getElementById("astronautCount").innerHTML = json.length;

            for (i = 0; i < json.length; i++){
                container.innerHTML += 
                `<div class="astronaut">
                    <div class = "bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li id = "possiblyGreen${i}">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `;
                if (json[i].active === true) {
                    document.getElementById(`possiblyGreen${i}`).setAttribute("style", "color:green");
                }
                
            };
            
           
        });
        
    });
});