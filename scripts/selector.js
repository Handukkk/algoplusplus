const selector = document.querySelector('.plan-input');

function select()
{
    if(selector.value === 'single')
    {
        document.getElementById('second-person').style.display = 'none';
    }
    else
    {
        document.getElementById('second-person').style.display = 'block';
    }
}