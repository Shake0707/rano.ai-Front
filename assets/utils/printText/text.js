import TypeIt from "typeit";

const btnFrame = document.querySelector('.start_btn-frame');

document.addEventListener("DOMContentLoaded", () => {
    new TypeIt("#typeItText", { speed: 50, waitUntilVisible: true })
        .type("Asaalomu", { delay: 300 })
        .move(-5)
        .delete(1)
        .type('s')
        .move(null, { to: 'END' })
        .type(' aleykum')
        .pause(300)
        .break()
        .type('<span>Rano-AI</span> ga xush kelibsiz!')
        .pause(700)
        .exec(() => {
            btnFrame.classList.add('active');
        })
        .go();
});