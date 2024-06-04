const url = 'https://script.google.com/macros/s/AKfycbzexsVtIEbu6FheZBwvCZ9vuC9XMRJgUWCQrXGaQ_FUtdZ3LQzC_vNlRCY6J_We_tMc/exec';
const form = document.forms['algo-reg-form'];

async function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}

form.addEventListener('submit', async e => {
    e.preventDefault();
    const newForm = new FormData(form);
    const getImg = newForm.get('tf_img');
    const imgBase64 = await convertToBase64(getImg);
    const splitImg = imgBase64.split('base64,')[1];
    
    const obj = {
        base64: splitImg,
        type: getImg.type,
        name: getImg.name
    }

    newForm.set('tf_img', JSON.stringify(obj));
    if(!newForm.get('name_1'))
    {
        newForm.set('name_1', '-');
        newForm.set('contact_1', '-');
    }

    fetch(url, { method: 'POST', body: newForm } )
    .then(response => console.log('bisa'))
    .catch(error => console.log('error'));
});