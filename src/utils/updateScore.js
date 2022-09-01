import { awaitAnimate, animate } from './animate';

const $score = document.querySelector('[data-score]');
const $scoreAmount = document.querySelector('[data-score-amount]');

export default function updateScore(score = 0, additionalScore = 0) {
  if (additionalScore > 0) {
    const $additionalScore = document.createElement('div');
    $additionalScore.textContent = `+${additionalScore.toLocaleString()}`;

    $additionalScore.classList.add('additional-score');
    $score.appendChild($additionalScore);
    awaitAnimate($additionalScore).then(() => $additionalScore.remove());
  }

  $scoreAmount.textContent = score.toLocaleString();

  animate($scoreAmount, 'pop');
}
