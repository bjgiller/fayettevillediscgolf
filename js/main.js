// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

links.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Sponsor contact form (/sponsors): posts to the hogwild-forms Worker, which emails Brady
const form = document.getElementById('sponsor-form');

if (form) {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if (!data.name || !data.email || !data.message) {
      status.textContent = 'Please fill in your name, email, and a message.';
      status.className = 'form-status error';
      return;
    }

    button.disabled = true;
    button.textContent = 'Sending…';
    status.textContent = '';
    status.className = 'form-status';

    try {
      const res = await fetch('https://hogwild-forms.bandicoot3111.workers.dev/fdga', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.success) throw new Error(result.message || 'Send failed');
      status.textContent = result.message || 'Thanks! Your message has been sent.';
      status.className = 'form-status success';
      form.reset();
    } catch (err) {
      status.textContent = (err && err.message && err.message !== 'Send failed' && err.message !== 'Failed to fetch')
        ? err.message
        : 'Sorry, your message could not be sent. Please try again in a few minutes.';
      status.className = 'form-status error';
    } finally {
      button.disabled = false;
      button.textContent = 'Send message';
    }
  });
}
