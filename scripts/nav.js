var active = 'home-pos';

document.getElementById('logo').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        behavior: 'smooth',
        top: 0
    })
});

document.getElementById('home-pos').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        behavior: 'smooth',
        top: 0
    })
    document.getElementById(active).classList.remove('active');
    document.getElementById('home-pos').classList.add('active');
    active = 'home-pos';
});

document.getElementById('reason-pos').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('reason').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    document.getElementById(active).classList.remove('active');
    document.getElementById('reason-pos').classList.add('active');
    active = 'reason-pos';
});

document.getElementById('trainer-pos').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('trainer').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    document.getElementById(active).classList.remove('active');
    document.getElementById('trainer-pos').classList.add('active');
    active = 'trainer-pos';
});

document.getElementById('reg-pos').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('registration').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    document.getElementById(active).classList.remove('active');
    document.getElementById('reg-pos').classList.add('active');
    active = 'reg-pos';
});
