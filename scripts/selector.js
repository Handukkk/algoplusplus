const selector = document.querySelector('.plan-input');

function select()
{
    if(selector.value === 'single')
    {
        document.getElementById('second-person').style.display = 'none';
        document.getElementById('second-person').value = '-';
    }
    else
    {
        document.getElementById('second-person').style.display = 'block';
        document.getElementById('second-person').value = '';
    }
}