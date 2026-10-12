document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
});

navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
        menuButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
    }
});

const contactForm = document.querySelector('.contact-form');
const status = document.querySelector('#form-status');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);
    const message = `Họ và tên: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    try {
        await navigator.clipboard.writeText(message);
        status.textContent = 'Đã sao chép nội dung. Hãy dán vào email hoặc kênh liên hệ bạn chọn.';
    } catch {
        status.textContent = 'Trình duyệt không cho sao chép tự động. Hãy chọn và sao chép nội dung thủ công.';
    }
});
