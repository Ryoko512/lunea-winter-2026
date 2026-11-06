const quiz = document.querySelector('#quiz');
const result = document.querySelector('#result');

quiz.addEventListener('submit', (event) => {
  event.preventDefault();
  const answers = new FormData(quiz);
  const shadeNumber = Number(answers.get('tone')) + Number(answers.get('mood')) + 1;
  const shade = document.querySelector('#shade-' + shadeNumber);
  const name = shade.querySelector('h3').textContent;
  result.querySelector('p').textContent = 'おすすめは ' + name + '（' + shade.querySelector('.jp').textContent + '）';
  result.querySelector('a').href = '#' + shade.id;
  result.hidden = false;
});

const demo = document.querySelector('#demo');
demo.addEventListener('click', () => {
  const notice = document.querySelector('#notice');
  notice.hidden = !notice.hidden;
  demo.setAttribute('aria-expanded', String(!notice.hidden));
});
