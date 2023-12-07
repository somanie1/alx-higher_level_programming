$(document).ready(function() {
    $('#btn_translate, #language_code').on('click keypress', function(event) {
        if ((event.type === 'click' && event.target.id === 'btn_translate') || (event.type === 'keypress' && event.key === 'Enter')) {
            event.preventDefault(); 
            const languageCode = $('#language_code').val();
            console.log('Language Code:', languageCode);
            $.ajax({
                url: 'https://hellosalut.stefanbohacek.dev/?',
                data: { lang: languageCode },
                type: 'GET',
                dataType: 'json'
            })
            .done(function(data) {
                $('#hello').text(data.hello);
            })
            .fail(function(xhr, status, errorThrown) {
                alert("Sorry, there was a problem!");
                console.log(`Error: ${errorThrown}`);
                console.log(`Status: ${status}`);
                console.dir(xhr);
            })
            .always(function(xhr, status) {
                alert("The request is complete!");
            });
        }
    });
});
