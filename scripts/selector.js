const selector = document.getElementById('plan-input');
selector.addEventListener('change', function(e) {
    e.preventDefault();
    if(selector.value === 'single')
    {
        document.getElementById('second-person').style.display = 'none';
    }
    else
    {
        document.getElementById('second-person').style.display = 'block';
    }
})