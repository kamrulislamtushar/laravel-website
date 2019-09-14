$('#personalData').on('show.bs.modal', function (event) {


    var button = $(event.relatedTarget)
    var name = button.data('name')
    var student_id = button.data('student_id')
    var modal = $(this)
    modal.find('.modal-body #name').val(name)
    modal.find('.modal-body #student_id').val(student_id)


})


$('#personalDataEdit').on('show.bs.modal', function (event) {


    var button = $(event.relatedTarget)
    var name = button.data('name')
    var student_id = button.data('student_id')
    var modal = $(this)
    modal.find('.modal-body #name').val(name)
    modal.find('.modal-body #student_id').val(student_id)


})

$('#workDataEdit').on('show.bs.modal', function (event) {


    var button = $(event.relatedTarget)
    var id = button.data('id')
    var designation = button.data('designation')
    var company = button.data('company')
    var responsibilities = button.data ('responsibilities')
    var modal = $(this)

    modal.find('.modal-body #company').val(company)
    modal.find('.modal-body #designation').val(designation)
    modal.find('.modal-body #responsibilities').val(responsibilities)
    modal.find('.modal-body #id').val(id)
})

$('#educationDataEdit').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var id = button.data('id')
    var edu_type = button.data('edu_type')
    var institute = button.data('institute')
    var graduation = button.data ('graduation')
    var modal = $(this)


    modal.find('.modal-body #edu_type').val(edu_type)
    modal.find('.modal-body #institute').val(institute)
    modal.find('.modal-body #graduation').val(graduation)
    modal.find('.modal-body #id').val(id)
})


$('#contactEdit').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var mobile = button.data('mobile')
    var email = button.data('email')
    var facebook = button.data ('facebook')
    var linkedin = button.data('linkedin')
    var address = button.data('address')
    var citizenship = button.data('citizenship')
    var modal = $(this)


    modal.find('.modal-body #mobile').val(mobile)
    modal.find('.modal-body #email').val(email)
    modal.find('.modal-body #facebook').val(facebook)
    modal.find('.modal-body #linkedin').val(linkedin)
    modal.find('.modal-body #address').val(address)
    modal.find('.modal-body #citizenship').val(citizenship)



})


