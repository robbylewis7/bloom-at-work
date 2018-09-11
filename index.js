'use strict';

//---------------------------------------------
//show + hide submit form
//---------------------------------------------

$('.searchForDate').on('click', '#createNew', function(){
    $('#log-create-form').show();
    
});

$('#log-create-form').on('click', '.js-logCancelButton', function(){
    $('#log-create-form').hide();
    
});




//---------------------------------------------
// get logs
//---------------------------------------------

function displayResults() {
    $.getJSON('/logs', function(data) {
    });
}


//function getAllLogs(data){
//    $('.allLogs').append(`${data.date}`);
//}

//---------------------------------------------
// save new log button
//---------------------------------------------





        $('#log-create-form').on('submit', function(e) {
            e.preventDefault();

            let logData = {
                date: $('#entry-date').val(),
                sleepStartHr: $('#sleepstart-hr option:selected').val(),
                sleepStartMin: $('#sleepstart-min option:selected').val(),
                sleepEndHr: $('#sleepend-hr option:selected').val(),
                sleepEndMin: $('#sleepend-min option:selected').val(),
                stress: $('#stress option:selected').val(),
                gratitude: $('#gratitude option:selected').val(),
                energy: $('#energy option:selected').val(),
                communityFeeling: $('#communityFeeling option:selected').val(),
                waterIntake: $('#waterIntake option:selected').val(),
                cleanEating: $('#cleanEating option:selected').val(),
                exercise: $('#exercise option:selected').val(),

            };
            console.log(logData)
            postNewLog(logData);
            });

            function setDefaults() {
                console.log('test')
                $('#sleepstart-hr').val('20');
                $('#sleepstart-min').val('15');
                $('#sleepend-hr').val('06');
                $('#sleepend-min').val('45');
                $('#stress').val('03');
                $('#gratitude').val('02');
                $('#energy').val('05');
                $('#communityFeeling').val('03');
                $('#waterIntake').val('04');
                $('#cleanEating').val('01');
                $('#exercise').val('02')
            }

            function postNewLog(logData) {
            let settings = {
                url: '/logs',
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(logData)
            };

            $.ajax(settings)
                .fail((xhr, status, error) => {
                $('.error-message')
                    .empty()
                    .append(`Error: ${error}`);
                });
            }

        setDefaults();
        displayResults();
//        getAllLogs();
    

