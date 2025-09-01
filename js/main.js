const arrows = document.querySelectorAll('.arrow');

setInterval(() => {
    arrows.forEach(arrow => {
        arrow.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    });
}, 500); 


window.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const totalImages = 20;

    const lluviaImages = [
        'img/lluvia/#messi.jpg',
        'img/lluvia/046a7201-ebd5-49cb-a9a1-04850480b894.jpg',
        'img/lluvia/0e7f264f-cb80-4b2e-b3d1-487fd0851f18.jpg',
        'img/lluvia/0ead7b6a-590f-4b0e-855d-5e8b6a7ad15c.jpg',
        'img/lluvia/1437f729-bea7-4bd3-999d-b6a4294e6783.jpg',
        'img/lluvia/20692515-22fa-40a0-a3a3-9c15759e9774.jpg',
        'img/lluvia/28897702-03cc-4d79-be15-bc8d6685c1b6.jpg',
        'img/lluvia/4d12ca2d-cf78-4909-bf30-75b7d2061b5b.jpg',
        'img/lluvia/4d33fe8c-1a47-48b5-819d-8c692f1709fd.jpg',
        'img/lluvia/6774afb9-d38b-426f-bb34-e55af9b7772d.jpg',
        'img/lluvia/Hi.jpg',
        'img/lluvia/Little messi 🤏.jpg',
        'img/lluvia/Messi meme.jpg',
        'img/lluvia/b3efd732-17c7-4559-a3e8-38573f7d204a.jpg',
        'img/lluvia/e0003b7b-2fe0-4e1b-987d-93835b6cf61c.jpg',
        'img/lluvia/eb29f7ef-1aac-47e4-b04d-f0a7d7195d1e.jpg',
        'img/lluvia/ed5f4b69-2d90-4e3d-adb2-63b28d7e6270.jpg',
        'img/lluvia/f68f266e-c2fe-4c5c-8665-48b85770b0b9.jpg',
        'img/lluvia/te amo messi pero me da risa este edit.jpg'
    ];

    for (let i = 0; i < totalImages; i++) {
        createFallingImage();
    }

    function createFallingImage() {
        const img = document.createElement('img');
        img.src = lluviaImages[Math.floor(Math.random() * lluviaImages.length)];
        img.classList.add('img-fall');
        img.style.left = Math.random() * window.innerWidth + 'px';
        img.style.animationDuration = (3 + Math.random() * 3) + 's';
        img.style.width = (60 + Math.random() * 60) + 'px';
        img.style.animationDelay = Math.random() * 2 + 's';
        const rotateDirection = Math.random() > 0.5 ? 1 : -1;
        img.style.transform = `rotate(${Math.random() * 360 * rotateDirection}deg)`;
        body.appendChild(img);
        img.addEventListener('animationend', () => {
            img.remove();
            createFallingImage();
        });
    }
});
