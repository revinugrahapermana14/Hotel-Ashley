$('#update-form').bootstrapValidator({
    trigger: 'blur',
    fields: {
        full_name: {
            validators: {
                notEmpty: {
                    message: 'Your name is required'
                },
                regexp: {
                    regexp: /^[a-zA-Z ]+$/,
                    message: 'Your name cannot have numbers or symbols'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'The email is required'
                },
                emailAddress: {
                    message: 'The input is not a valid email address'
                }
            }
        },
        phone_number: {
            validators: {
                notEmpty: {
                    message: 'The phone number is required'
                },
                regexp: {
                    // regexp: /^\+?0?([()/\.\-\s]*[0-9]){12}\s*((ext|x)\s*[0-9]+)*$/,
                    message: 'The input is not a valid phone number'
                }
            }
        },
        colors: {
            validators: {
                callback: {
                    message: 'Please choose 2-4 colors you like most',
                    callback: function(value, validator) {
                                // Get the selected options
                                var options = validator.getFieldElements('colors').val();
                                return (options != null && options.length >= 2 && options.length <= 4);
                            }
                        }
                    }
                },
            }
        })
.on('error.field.bv', '[name="phone"]', function(e, data){
    // change the data-bv-trigger value to keydown
    $(e.target).attr('data-bv-trigger','keydown');
    // destroy the plugin
    // console.info(data.bv.getOptions());
    data.bv.destroy();
    // console.info(data.bv.getOptions());
    // initialize the plugin
    $('#update-form').bootstrapValidator(data.bv.getOptions());
});


    $(document).ready(function () {
        $('.dtTime').datepicker({
            format: 'dd/mm/yyyy'
        });

        $('#timepicker').timepicker();
        $('#timepicker2').timepicker();

        $("#time").timepicki();
        $("#time2").timepicki();

        // --
        $('.outer-baru').focusin(function(event) {
            $(this).find('.mbox').addClass('grow-active');
        });

        // --
        $('.mat-input-outer .mbx').click(function () {
            $(this).prev('input').focus();
        });
        $('.mat-input-outer input').focusin(function () {
            $(this).next('.mbx').addClass('active');
        });
        $('.mat-input-outer input').focusout(function () {
            if (!$(this).val()) {
              $(this).next('.mbx').removeClass('active');
          } else {
              $(this).next('.mbx').addClass('active');
          }
        });

    });



        $(document).ready(function () {
      $('.dtTime').datepicker({
        format: 'dd/mm/yyyy'
      });
      
      $('#timepicker').timepicker();
      $('#timepicker2').timepicker();
      
      $("#time").timepicki();
      $("#time2").timepicki();

    });

    $(function () {
      $('.mat-input-outer .mbx').click(function () {
        $(this).prev('input').focus();
      });
      $('.mat-input-outer input').focusin(function () {
        $(this).next('.mbx').addClass('active');
      });
      $('.mat-input-outer input').focusout(function () {
        if (!$(this).val()) {
          $(this).next('.mbx').removeClass('active');
        } else {
          $(this).next('.mbx').addClass('active');
        }
      });
      
       $('.outer-baru').focusin(function(event) {
        $(this).find('.mbox').addClass('grow-active');
      });
    });