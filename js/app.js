window.addEventListener( "load", function () {
    function surveyData() {
        let result = document.getElementById("result")
        let wrong = 0;
        let musicData = [];
        let num = 0;
        var form_data = new FormData(document.querySelector("form"));
        console.log("form data:");
        for(var pair of form_data.entries()) {
            console.log(pair[0]+ ':'+ pair[1]);
            musicData[num] = pair[0]+ ':'+ pair[1];
            num++;
            wrong++;
        }
        if (wrong > 7) {
            alert("Reading is fundamental so only pick one for each catagory.");
        } else {
            result.innerText = musicData[0] + ', ' + musicData[1] + ', ' + musicData[2] + ', ' + musicData[3] +  ', ' + musicData[4] + ', ' + musicData[5] +  ', ' + musicData[6];
        }
    }
    const form = document.getElementById('rateM');
    form.addEventListener( "submit", function ( event ) {
        event.preventDefault();
        surveyData();
    } );
} );