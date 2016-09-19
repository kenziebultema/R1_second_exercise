function SetContent(){
    // alert("start here.");
    var firstName = GetPersonalizationContent('FirstName');
    var lastName = GetPersonalizationContent('LastName');
    var company = GetPersonalizationContent('Company');
    var title = GetPersonalizationContent('Title');
    var country = GetPersonalizationContent('Country');
    var state = GetPersonalizationContent('State');

    $('#firstName').val(firstName);
    $('#lastName').val(lastName);
    $('#company').val(company);
    $('#title').val(title);
    $('#country').val(country);
    $('#state').val(state);
}


$(document).ready(function(){

    /*
     * DON"T CHANGE THIS PART OF THE CODE
     */
    $(document).ready(function(){
        $.getScript('http://app2.relationshipone.com/test/data-function.js');
    });
    // DON"T CHANGE BETWEEN COMMENTS.


    $('#inputForm').submit(function(event){
       event.preventDefault();

        // An object to hold submitted data from form
        var values = {};

        $.each($(this).serializeArray(), function(i, field){
            values[field.name] = field.value;
        });

        // Clear the forms and dropdowns
        $('#inputForm').find('input[type=text]').val('');
        $('#inputForm').find('textarea[type=text]').val('');
        $('select').val('');

        postData(values);
    });

});

// Function to display submitted data to the DOM
function postData(data){
    $('#displayedData').empty()
        .append('<h3>You have submitted:</h3>' +
                '<p>First Name: ' + data.firstName + '</p>' +
                '<p>Last Name: ' + data.lastName + '</p>' +
                '<p>Company: ' + data.company + '</p>' +
                '<p>Title: ' + data.title + '</p>' +
                '<p>Country: ' + data.country + '</p>' +
                '<p>State: ' + data.state + '</p>' +
                '<p>Additional Comments: ' + data.comment + '</p>');
}
