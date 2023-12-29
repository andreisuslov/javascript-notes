function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
    );
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");

window.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
        const currentTop = extractPosition(avatar.style.top);
        avatar.style.top = `${currentTop + 50}px`;
    } else if (e.key === "ArrowUp") {
        const currentTop = extractPosition(avatar.style.top);
        avatar.style.top = `${currentTop - 50}px`;
    } else if (e.key === "ArrowRight") {
        const currentLeft = extractPosition(avatar.style.left);
        avatar.style.left = `${currentLeft + 50}px`;
        avatar.style.transform = "scale(1,1)";
    } else if (e.key === "ArrowLeft") {
        const currentLeft = extractPosition(avatar.style.left);
        avatar.style.left = `${currentLeft - 50}px`;
        avatar.style.transform = "scale(-1,1)";
    }
    if (isTouching(avatar, coin)) moveCoin();
});

const extractPosition = (position) => {
    if (!position) return 100;
    return parseInt(position.slice(0, -2));
};

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    coin.style.left = `${x}px`;
    coin.style.top = `${y}px`;
};

moveCoin();
