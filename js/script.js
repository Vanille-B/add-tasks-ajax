/*
 * Form creation
 */
$('#todo').append('<form class="form-signin" id="registrationForm"> </div>');


/*
 * Input creation
 */
$('#registrationForm').append('<div class="form-label-group" id="test"> </div>');


$('#test').append('<input type="texte" id="addtask" class="form-control" placeholder="Press ↵ Enter to validate" autocomplete="off" autofocus>' + '<label for="inputEmail">Press ↵ Enter to validate</label>');



/*
 * Listening submit of form id="registrationForm"
 */
$('#registrationForm').submit(function(e) {

  if ($('#addtask').val() == '') {

    $('.small-title').prepend('<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' + '<span aria-hidden="true">' + '&times;' +
      '</span>' + '</button>' + 'Warning ! Empty task, please enter at least 1 character. ' + '</div>'); // warning message

    console.log('Error => Empty input'); // info in console

  } else {
    e.preventDefault(); // The browser cannot send the form

    $.ajax({
      url: 'index.html', // targeted url
      type: 'post',
      dataType: 'html',

      success: function(response) {

        /*
         * For each  // to show each new checkbox
         */
        $('#tasks').each(function() {
          $(this).prepend('<div class="newtask input-group mb-3 checkbox">' + '<div class="input-group-prepend">' + ' <div class="input-group-text">' +
            '<input type="checkbox" aria-label="Checkbox for following text input" >' + ' </div>' + '</div>' +
            '<input type="text" class="test form-control"' + 'value="' + $('#addtask').val() + '">' + '</div>');

          $('.newtask').addClass('text-secondary'); // the 'newtask' class which has just been created above
          $('#registrationForm')[0].reset();
        });

        /*
         * For each  // to hide the accomplished tasks
         */
        $('.checkbox').each(function() {
          $(this).click(function(e) {
            $(this).hide('newtask');

            console.log('Task => Checked'); // info in console
          });
        });


      }, // end function response
      error: function() {
        alert('error');
      } // end function error
    }); // end ajax

  } // end else

}); // end listening submit of form id="registrationForm"