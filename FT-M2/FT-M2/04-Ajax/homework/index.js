$('#boton').click(() => {
        $('#lista').empty();
        $.get("http://localhost:5000/amigos", (data) => {
        data.forEach(e => {
            $(`<li id='${e.id}'>${e.name}</li>`).appendTo('#lista');
        });
        $('img').hide();
        })
})

$('#search').click(() => {
    let input = $('#input').val();
    $.get(`http://localhost:5000/amigos/${input}`, (data) => {
        $('#amigo').text(`${data.name}`);
    })
    input = '';
})

$('#delete').click(() => {
    let input = $('#inputDelete').val();
    $.ajax({
        url: `http://localhost:5000/amigos/${input}`,
        type: 'DELETE',
        success : () => {
            $('#success').text(`tu amigo ${input} fue borrado con exito`);
            $('#boton').click();
        }
    })
});