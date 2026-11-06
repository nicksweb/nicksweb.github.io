(() => {
  const revealButton = document.getElementById('reveal-email');
  if (!revealButton) return;

  const details = document.getElementById('email-details');
  const emailLink = document.getElementById('email-address');
  const copyButton = document.getElementById('copy-email');
  const status = document.getElementById('email-status');

  revealButton.hidden = false;
  revealButton.addEventListener('click', () => {
    const address = window.atob(revealButton.dataset.email);
    emailLink.textContent = address;
    emailLink.href = `mailto:${address}`;
    details.hidden = false;
    revealButton.setAttribute('aria-expanded', 'true');
    revealButton.hidden = true;
    emailLink.focus();
  }, { once: true });

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailLink.textContent);
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Select the email address above to copy it manually.';
    }
  });
})();
