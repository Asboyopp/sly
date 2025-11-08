// Global variables
let reasonsDiscovered = 0;
let totalReasons = 100;
let currentReasons = [];
let audioInitialized = false;
let customKissImage = null;

// 100+ Reasons why I adore Slyy
const allReasons = [
    "I love your Attitude😘",
    "You make my Day With the Good morning's🥲",
    "Looking at Your Pics pleases my eyes🥰",
    "Your smile lights up my world ✨",
    "The way you laugh is contagious 😂",
    "Your kindness melts my heart 💕",
    "You're beautiful inside and out 🌹",
    "Your voice is my favorite sound 🎵",
    "Every moment with you is precious 💎",
    "You make me want to be better 🌟",
    "Your hugs are my safe place 🤗",
    "Your intelligence amazes me 🧠",
    "You're my dream come true 💭",
    "Your energy is infectious ⚡",
    "You understand me like no one else 🤝",
    "Your creativity inspires me 🎨",
    "You make ordinary days special 🌈",
    "Your strength is admirable 💪",
    "You have the most amazing eyes 👀",
    "Your sense of humor is perfect 😄",
    "You make me laugh when I'm sad 😢",
    "Your confidence is attractive 💃",
    "You're my favorite person to talk to 💬",
    "Your presence makes everything better 🌟",
    "You have a heart of gold ❤️",
    "Your style is amazing 👗",
    "You make me feel complete 🧩",
    "Your optimism is inspiring ☀️",
    "You're the best decision I ever made ✅",
    "Your passion is motivating 🔥",
    "You make me feel loved unconditionally 💖",
    "Your advice is always wise 🦉",
    "You have the cutest expressions 🥺",
    "Your determination is impressive 🎯",
    "You make my heart skip a beat 💓",
    "Your friendship means everything to me 👫",
    "You have the most beautiful smile 😊",
    "Your support keeps me going 🚀",
    "You make even boring moments fun 🎉",
    "Your laugh is my favorite melody 🎶",
    "You're my sunshine on cloudy days ☁️",
    "Your creativity knows no bounds 🌺",
    "You make me believe in love 💕",
    "Your hugs feel like home 🏠",
    "You have an amazing spirit 👻",
    "Your positivity is contagious 🌟",
    "You make me want to be the best version of myself 🌟",
    "Your voice calms my anxiety 🧘‍♀️",
    "You have the most adorable quirks 🦊",
    "Your love language speaks to my heart 💝",
    "You make every day feel like Valentine's Day 💝",
    "Your presence is my favorite gift 🎁",
    "You have the kindest heart 💖",
    "Your smile can solve any problem 😊",
    "You make me feel understood 🤗",
    "Your laughter is contagious 🤣",
    "You're my reason to smile every day 😄",
    "Your touch sends sparks through me ⚡",
    "You have the most amazing personality ✨",
    "Your love makes me stronger 💪",
    "You make me feel alive 🌟",
    "Your eyes tell the most beautiful stories 📖",
    "You have the sweetest soul 👼",
    "Your confidence is inspiring 💫",
    "You make me believe in happily ever after 🏰",
    "Your love is my favorite adventure 🗺️",
    "You have the most beautiful mind 🧠",
    "Your kindness changes lives 🌍",
    "You make my world brighter 🌞",
    "Your hugs heal my heart 💔",
    "You have the most amazing taste 🎨",
    "Your love is my safe harbor ⚓",
    "You make me feel like I can do anything 🌟",
    "Your presence is my greatest gift 🎀",
    "You have the most beautiful energy ⚡",
    "Your smile is my favorite view 🖼️",
    "You make me feel cherished 💎",
    "Your love makes every day special 🌟",
    "You have the most wonderful spirit 🦋",
    "Your voice is music to my ears 🎵",
    "You make me believe in magic ✨",
    "Your touch sets my heart on fire 🔥",
    "You have the most amazing aura 🌈",
    "Your love is my greatest treasure 💰",
    "You make me feel like the luckiest person 🍀",
    "Your happiness is my priority 🎯",
    "You have the most beautiful soulmate connection 💑",
    "Your love completes me 🧩",
    "You make every moment memorable 📸",
    "Your presence is my comfort zone 🛋️",
    "You have the most amazing way with words 📝",
    "Your love makes me feel invincible 🦸‍♀️",
    "You make my dreams come true 🌙",
    "Your heart is my home 🏡",
    "You have the most beautiful way of loving 💕",
    "Your love is my favorite story 📚",
    "You make me feel like I'm walking on clouds ☁️",
    "Your essence is intoxicating 🍷",
    "You have the most wonderful effect on me 🌟",
    "Your love is my masterpiece 🎭",
    "You make me believe in forever ♾️",
    "Your beauty takes my breath away 😮",
    "You have the most amazing presence 🌟",
    "Your love is my greatest adventure 🗺️",
    "You make me feel complete 🧩",
    "Your spirit is my inspiration 🦅",
    "You have the most beautiful way about you 🌺",
    "Your love makes everything better 🌈",
    "You make me feel like I'm in heaven 👼",
    "Your essence is pure magic 🪄",
    "You have the most wonderful soul 🌟",
    "Your love is my everything 💖"
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    createFloatingHearts();
    initializeReasons();
    initializeMysteryBox();
    initializeAudio();
    initializePhotoGallery();
    initializeTouchRipples();
    initializeSparkleRain();
    scheduleRandomKiss();
    initFloatingMessages();
    initLoveButtonSurprises();
    checkCustomKissImage();
}

// Create floating hearts background
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const heartEmojis = ['💕', '💖', '💗', '💝', '💘'];

    setInterval(() => {
        if (container.children.length < 8) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
            heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
            container.appendChild(heart);

            setTimeout(() => heart.remove(), 8000);
        }
    }, 2000);
}

// Initialize 100+ reasons system
function initializeReasons() {
    loadNextReasons();
}

function loadNextReasons() {
    const container = document.getElementById('reasonsContainer');

    if (container.children.length === 0) {
        // Load first 3 reasons
        for (let i = 0; i < 3 && i < allReasons.length; i++) {
            createReasonBox(allReasons[i], i);
            currentReasons.push(i);
        }
    }
}

function createReasonBox(reason, index) {
    const container = document.getElementById('reasonsContainer');
    const reasonBox = document.createElement('div');
    reasonBox.className = 'reason-box';
    reasonBox.textContent = reason;
    reasonBox.dataset.index = index;

    reasonBox.addEventListener('click', function() {
        vanishReason(this, index);
    });

    container.appendChild(reasonBox);
}

function vanishReason(element, index) {
    if (element.classList.contains('vanishing')) return;

    element.classList.add('vanishing');
    createHeartBurst(element);

    setTimeout(() => {
        element.remove();
        reasonsDiscovered++;
        updateReasonsCounter();
        loadNewReason(index);
    }, 1000);
}

function createHeartBurst(element) {
    const rect = element.getBoundingClientRect();
    const hearts = ['💕', '💖', '💗', '💝', '💘'];

    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-burst';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = rect.left + rect.width / 2 + 'px';
        heart.style.top = rect.top + rect.height / 2 + 'px';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
}

function loadNewReason(usedIndex) {
    const availableReasons = allReasons.filter((_, index) => !currentReasons.includes(index));

    if (availableReasons.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableReasons.length);
        const reasonText = availableReasons[randomIndex];
        const originalIndex = allReasons.indexOf(reasonText);

        createReasonBox(reasonText, originalIndex);
        currentReasons.push(originalIndex);
    }
}

function updateReasonsCounter() {
    const counter = document.getElementById('reasonsCount');
    counter.textContent = reasonsDiscovered;

    // Add celebration animation for milestones
    if (reasonsDiscovered % 10 === 0 && reasonsDiscovered > 0) {
        counter.style.transform = 'scale(1.5)';
        setTimeout(() => {
            counter.style.transform = 'scale(1)';
        }, 500);
    }
}

// Mystery box functionality
function initializeMysteryBox() {
    const mysteryBox = document.getElementById('mysteryBox');

    mysteryBox.addEventListener('click', function() {
        if (!this.classList.contains('opening')) {
            revealWeddingRing();
        }
    });
}

function revealWeddingRing() {
    const mysteryBox = document.getElementById('mysteryBox');
    const ringReveal = document.getElementById('ringReveal');
    const countdown = document.getElementById('countdown');

    mysteryBox.classList.add('opening');

    setTimeout(() => {
        ringReveal.classList.add('show');
        startCountdown(countdown);
    }, 1000);
}

function startCountdown(countdownElement) {
    let count = 3;

    const countdownInterval = setInterval(() => {
        count--;
        countdownElement.textContent = count;

        if (count === 0) {
            clearInterval(countdownInterval);
            setTimeout(() => {
                hideRingReveal();
            }, 1000);
        }
    }, 1000);
}

function hideRingReveal() {
    const ringReveal = document.getElementById('ringReveal');
    const mysteryBox = document.getElementById('mysteryBox');

    ringReveal.classList.remove('show');
    mysteryBox.style.display = 'none';

    // Show "Oops it's not for Now" message
    setTimeout(() => {
        createOopsMessage();
    }, 500);
}

function createOopsMessage() {
    const message = document.createElement('div');
    message.className = 'floating-message';
    message.textContent = "Oops it's not for Now 💕";
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '1.5rem';
    message.style.padding = '1.5rem 2rem';
    message.style.zIndex = '2000';

    document.getElementById('floatingMessages').appendChild(message);

    setTimeout(() => message.remove(), 3000);
}

// Audio functionality
function initializeAudio() {
    const audio = document.getElementById('backgroundMusic');
    const musicBtn = document.getElementById('musicBtn');

    // Check if audio file exists
    fetch('./assets/song.mp3', { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                musicBtn.style.display = 'block';
                musicBtn.addEventListener('click', toggleMusic);

                // Add touch listener to initialize audio on mobile
                document.addEventListener('touchstart', function initAudio() {
                    if (!audioInitialized) {
                        audio.play().catch(() => {});
                        audioInitialized = true;
                        document.removeEventListener('touchstart', initAudio);
                    }
                }, { once: true });
            } else {
                musicBtn.style.display = 'none';
            }
        })
        .catch(() => {
            musicBtn.style.display = 'none';
        });
}

function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const musicBtn = document.getElementById('musicBtn');

    if (audio.paused) {
        audio.play().then(() => {
            musicBtn.textContent = '🔇 Pause Music';
        }).catch(() => {
            musicBtn.textContent = '🎵 Play Music (Tap to allow)';
        });
    } else {
        audio.pause();
        musicBtn.textContent = '🎵 Play Music';
    }
}

// Photo gallery
function initializePhotoGallery() {
    const filmStrip = document.getElementById('filmStrip');

    // Try to load images from assets folder
    let imageCount = 1;

    function tryLoadImage() {
        const img = new Image();
        img.src = `./assets/img${imageCount}.jpg`;

        img.onload = function() {
            // Remove placeholder if this is the first image
            const placeholder = filmStrip.querySelector('.photo-placeholder');
            if (placeholder) {
                placeholder.remove();
            }

            createPhotoItem(img.src);
            imageCount++;
            tryLoadImage(); // Try to load next image
        };

        img.onerror = function() {
            // No more images to load
            if (imageCount === 1) {
                // No images found, keep placeholder
                console.log('No images found in assets folder. Add img1.jpg, img2.jpg, etc.');
            }
        };
    }

    tryLoadImage();
}

function createPhotoItem(src) {
    const filmStrip = document.getElementById('filmStrip');
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Our beautiful moment';

    photoItem.appendChild(img);

    // Add click to enlarge functionality
    photoItem.addEventListener('click', function() {
        createImageModal(src);
    });

    filmStrip.appendChild(photoItem);
}

function createImageModal(src) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3000;
        cursor: pointer;
    `;

    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    `;

    modal.appendChild(img);
    document.body.appendChild(modal);

    modal.addEventListener('click', () => modal.remove());
}

// Touch ripple effects
function initializeTouchRipples() {
    const container = document.getElementById('rippleContainer');
    const colors = ['#ff6b9d', '#ff9ff3', '#feca57', '#48dbfb', '#ee5a6f'];

    document.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        ripple.style.background = colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1000);
    });

    // Touch support for mobile
    document.addEventListener('touchstart', function(e) {
        const touch = e.touches[0];
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = touch.clientX + 'px';
        ripple.style.top = touch.clientY + 'px';
        ripple.style.background = colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1000);
    });
}

// Sparkle rain effect
function initializeSparkleRain() {
    const container = document.getElementById('sparkleRain');
    const sparkles = ['✨', '⭐', '💫', '🌟'];

    setInterval(() => {
        if (container.children.length < 10) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.animationDuration = (Math.random() * 2 + 3) + 's';
            sparkle.style.fontSize = (Math.random() * 10 + 12) + 'px';
            container.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 4000);
        }
    }, 800);
}

// Random surprise kisses
function scheduleRandomKiss() {
    const delay = Math.random() * 7000 + 8000; // 8-15 seconds

    setTimeout(() => {
        createSurpriseKiss();
        scheduleRandomKiss(); // Schedule next kiss
    }, delay);
}

function checkCustomKissImage() {
    const img = new Image();
    img.src = './assets/kiss.png';

    img.onload = function() {
        customKissImage = './assets/kiss.png';
    };

    img.onerror = function() {
        customKissImage = null; // Use emoji fallback
    };
}

function createSurpriseKiss() {
    const container = document.getElementById('surpriseKisses');
    const kiss = document.createElement('div');
    kiss.className = 'surprise-kiss';

    if (customKissImage) {
        // Use custom kiss image
        kiss.style.backgroundImage = `url(${customKissImage})`;
        kiss.style.backgroundSize = 'contain';
        kiss.style.backgroundRepeat = 'no-repeat';
        kiss.style.backgroundPosition = 'center';
        kiss.style.width = '60px';
        kiss.style.height = '60px';
    } else {
        // Use iOS 26 style emoji kisses
        const kissTypes = ['😘', '💋', '💕', '💖', '💗'];
        kiss.textContent = kissTypes[Math.floor(Math.random() * kissTypes.length)];
        kiss.style.fontSize = '60px';
    }

    // Random position
    kiss.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    kiss.style.top = Math.random() * (window.innerHeight - 100) + 'px';

    container.appendChild(kiss);

    setTimeout(() => kiss.remove(), 3000);
}

// Floating love messages
function initFloatingMessages() {
    const messages = [
        "You're amazing! 💕",
        "I love you! 😘",
        "You make me smile! 😊",
        "You're perfect! 🌟",
        "My beautiful Slyy! 🌹",
        "You're everything! 💖",
        "So lucky to have you! 🍀",
        "You light up my world! ✨",
        "My favorite person! 💝",
        "You're incredible! 🌈"
    ];

    setInterval(() => {
        const container = document.getElementById('floatingMessages');
        if (container.children.length < 3) {
            const message = document.createElement('div');
            message.className = 'floating-message';
            message.textContent = messages[Math.floor(Math.random() * messages.length)];
            message.style.top = Math.random() * 70 + 10 + '%';
            message.style.animationDuration = (Math.random() * 3 + 6) + 's';

            container.appendChild(message);

            setTimeout(() => message.remove(), 8000);
        }
    }, 5000);
}

// Love bomb surprises
function initLoveButtonSurprises() {
    const loveBomb = document.getElementById('loveBomb');

    // Show love bomb randomly
    setInterval(() => {
        if (Math.random() < 0.3 && loveBomb.style.display === 'none') {
            loveBomb.style.display = 'block';

            // Hide after 5 seconds if not clicked
            setTimeout(() => {
                if (loveBomb.style.display === 'block') {
                    loveBomb.style.display = 'none';
                }
            }, 5000);
        }
    }, 15000);

    loveBomb.addEventListener('click', function() {
        createLoveBombExplosion();
        this.style.display = 'none';
    });
}

function createLoveBombExplosion() {
    const hearts = ['💕', '💖', '💗', '💝', '💘', '💓', '💞', '💟'];
    const container = document.body;

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: fixed;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                font-size: ${Math.random() * 30 + 20}px;
                animation: explodeHeart 2s ease-out forwards;
                z-index: 1000;
                pointer-events: none;
            `;

            const angle = (Math.PI * 2 * i) / 30;
            const velocity = Math.random() * 200 + 100;

            heart.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
            heart.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');

            // Add explosion animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes explodeHeart {
                    0% {
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 1;
                    }
                    50% {
                        transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1.5);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(calc(-50% + var(--tx) * 1.5), calc(-50% + var(--ty) * 1.5)) scale(0.5);
                        opacity: 0;
                    }
                }
            `;

            if (!document.querySelector('style[data-explosion]')) {
                style.setAttribute('data-explosion', 'true');
                document.head.appendChild(style);
            }

            container.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }, i * 50);
    }
}

// Performance optimization
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Optimize scroll events
window.addEventListener('scroll', throttle(() => {
    // Parallax effects or scroll-based animations can go here
}, 100));

// Memory management for animations
setInterval(() => {
    // Clean up old animation elements
    const containers = ['floatingHearts', 'sparkleRain', 'rippleContainer', 'floatingMessages', 'surpriseKisses'];

    containers.forEach(id => {
        const container = document.getElementById(id);
        if (container.children.length > 20) {
            // Remove oldest elements if too many
            while (container.children.length > 20) {
                container.removeChild(container.firstChild);
            }
        }
    });
}, 10000);