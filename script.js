const plus = document.querySelectorAll('.item__img');
const paragraph = document.querySelectorAll('.question__par');

// FIRST VERSION
// plus.forEach((plusItem, index) => {
//     plusItem.addEventListener('click', () => {
//         paragraph[index].classList.toggle('question__par--show');
//         plusItem.src = plusItem.src.endsWith('icon-plus.svg')
//             ? './assets/images/icon-minus.svg'
//             : './assets/images/icon-plus.svg';
//     });
// });


// SECOND VERSION
const div = document.querySelectorAll('.question');

div.forEach((div, i) =>
    div.addEventListener('click', function (e) {
        paragraph[i].classList.toggle('question__par--show');
        plus[i].src = plus[i].src.endsWith('icon-plus.svg')
            ? './assets/images/icon-minus.svg'
            : './assets/images/icon-plus.svg';
    })
);
