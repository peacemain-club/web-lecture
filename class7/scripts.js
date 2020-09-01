const comment_button = document.querySelector('button');
const comment_input = document.getElementById('comment');
const comment_container = document.getElementsByClassName('comment-container')[0];

comment_button.addEventListener('click', () => {
  const comment_box = document.createElement('div');
  comment_box.setAttribute('class', 'comment-box');
  comment_box.innerText = comment_input.value;

  comment_container.appendChild(comment_box);
  comment_input.value = '';
});
