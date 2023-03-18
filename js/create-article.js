const btnSubmit = document.getElementById('btn-submit');

ClassicEditor
    .create( document.querySelector( '#editor' ), {     
    } )
    .then( editor => {
        window.editor = editor;
    } )
    .catch( error => {
        console.error( error );
    } );
btnSubmit.addEventListener('click', () => {
    const data = editor.getData();
    console.log(data);
        fetch(`${BASE_URL}/articles/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      });