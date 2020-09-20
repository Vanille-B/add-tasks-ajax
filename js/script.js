/*
 * Form creation
 */
$('#todo').append('<form class="form-signin" id="registrationForm"> </div>');


/*
 * Input creation
 */
$('#registrationForm').append('<div class="form-label-group" id="test"> </div>');


$('#test').append('<input type="texte" id="addtask" class="form-control" placeholder="Press ↵ Enter to validate" autocomplete="off" autofocus>');



/*
 * Listening submit of form id="registrationForm"
 */
$('#registrationForm').submit(function (e) {
  e.preventDefault(); // The browser cannot send the form

  if ($('#addtask').val() == '') {
    // Hidden warning alert message
    $('body').append('<div class="warning-message alert alert-dismissible fade hide text-center" role="alert">' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' + '<span aria-hidden="true">' + '&times;' +
      '</span>' + '</button>' + 'Warning ! Please enter at least 1 character. ' + '</div>');
    $('.hide').toggleClass('show').delay(3000).fadeOut('slow'); // show alert message

    console.log('Error => Empty input');

  } else {
    e.preventDefault(); // The browser cannot send the form

    $.ajax({
      url: 'index.html', // targeted url
      type: 'post',
      dataType: 'html',

      success: function (response) {

        /*
         * For each  // to show each new checkbox
         */
        $('#tasks').each(function () {

          $(this).prepend('<div class="newtask input-group mb-3 checkbox">' + '<div class="input-group-prepend">' + ' <div class="input-group-text">' +
            '<input type="checkbox" aria-label="Checkbox for following text input" >' + ' </div>' + '</div>' +
            '<input type="text" class="test form-control"' + 'value="' + $('#addtask').val() + '">' + '</div>');
          console.log('New task => Create');
          $('#registrationForm')[0].reset(); // clean the Form input
        });

        // Start Sortable.js to drag and drop tasks
        console.log('newtask');

        new Sortable(tasks, {
          animation: 150,
          ghostClass: 'blue-background-class'
        }); // End Sortable.js

        /*
         * For each  // to hide the accomplished tasks
         */
        $('.checkbox').each(function () {
          $(this).click(function (e) {

            $(this).hide('newtask');
            console.log('New task => Checked'); // info in console

          });
        });


      }, // end function response
      error: function () {
        alert('error');
      } // end function error
    }); // end ajax

  } // end else

}); // end listening submit of form id="registrationForm"