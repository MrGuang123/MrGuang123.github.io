var btn = document.querySelector('#controlBtn'),
  list = document.querySelector('#listWrapper'),
  overlay = document.querySelector('#overlay'),
  flag = true;
btn.addEventListener('click', function() {
  toggle();
})

function toggle() {
  if (flag) {
    list.style.display = 'block';
    overlay.style.opacity = 1;
    overlay.style.visibility = 'visible';
    btn.style.backgroundColor = '#666';
    btn.style.color = '#fff';
    btn.innerHTML = 'x';
  } else {
    list.style.display = 'none';
    overlay.style.opacity = 0;
    overlay.style.visibility = 'hidden';
    btn.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    btn.style.color = '#000';
    btn.innerHTML = '三';
  }
  flag = !flag;
}
