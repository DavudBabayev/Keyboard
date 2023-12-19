const buttons = document.querySelectorAll('button');
const keyData = Array.from(buttons).map(button => button.getAttribute('data-key'));
const randomIndex = Math.floor(Math.random() * buttons.length);

const handleButtonClick = (button) => {
    if (!button.classList.contains('active')) {
        button.classList.add('false');
        setTimeout(() => {
            button.classList.remove('false');
        }, 2000);
    } else {
        window.location.reload();
    }
};

const setRandomButton = () => {
    buttons.forEach((button, index) => {
        const isActive = index === randomIndex;
        button.classList.toggle('active', isActive);

        button.addEventListener('click', () => {
            handleButtonClick(button);
        });
    });
};

window.onload = setRandomButton;

window.onkeydown = (e) => {

    keyData.forEach((key, i) => {
        const isCorrect = e.key.toLowerCase() === key.toLowerCase();
        const button = buttons[i];

        if (button.classList.contains('active')) {
            if (isCorrect) {
                window.location.reload();
            }
        } else {
            if (isCorrect) {
                button.classList.add('false');
                setTimeout(() => {
                    button.classList.remove('false');
                }, 2000);
            }
        }
    });
};