const btn = document.getElementById('calculate');

btn.addEventListener('click', function () {
  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;

  if (height == '' || weight == '') {
    alert('Please fill out the input fields!');
    return;
  }
});
