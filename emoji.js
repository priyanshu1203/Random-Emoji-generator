let emojis = ['😀', '😂', '😍', '🤔', '😎', '😭', '😡', '👍', '🎉', '💔', '🚀', '⭐', '🌈', '🎁', '🍕', '🍔', '🎮', '📱', '💻', '🏆', '😴', '🤗', '😤', '🥳', '😈', '👿', '🤩', '😇', '🥰', '😘', '😚', '😙', '🥺', '😣', '😩', '🤬'];
let emojiContainer = document.getElementById('emoji-container');

function displayEmojis() {
    emojiContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        const emojiElement = document.createElement('span');
        emojiElement.textContent = randomEmoji;
        emojiElement.style.fontSize = '50px';
        emojiContainer.appendChild(emojiElement);
    }
}
displayEmojis();
document.getElementById('refresh-button').addEventListener('click', displayEmojis);
