import { handleDeleteAll } from '../utils/deletehandler.js';
export default function createForm(onAdd) {
  const form = document.createElement('form');
  form.className = 'mb-4 d-flex flex-column align-items-center'; // Sayfanın ortasına hizalama
  form.innerHTML = `
    <div class="mb-3 w-100" style="max-width: 400px;">
      <input type="text" class="form-control" id="site" placeholder="Site Adı" required>
    </div>
    <div class="mb-3 w-100" style="max-width: 400px;">
      <input type="text" class="form-control" id="username" placeholder="Kullanıcı Adı" required>
    </div>
    <div class="mb-3 position-relative w-100" style="max-width: 400px;">
      <input type="password" class="form-control" id="password" placeholder="Şifre" required>
      <button type="button" id="togglePassword" class="btn btn-sm btn-outline-secondary position-absolute end-0 top-0 mt-1 me-1"></button>
    </div>
    <div class="w-100" style="max-width: 400px;">
      <button type="submit" class="btn btn-primary w-100">Kaydet</button>
      <button type="button" id="deleteAll" class="btn btn-danger w-100 mt-2">Tümünü Sil</button>
    

    </div>
  `

    ;



  const siteInput = form.querySelector('#site');
  const usernameInput = form.querySelector('#username');
  const passwordInput = form.querySelector('#password');
  const togglePassword = form.querySelector('#togglePassword');
  // form içindeki inputları degişkene atar kullanıma hazır hale gelir

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onAdd({ // fonksiyonu çağrılır, bu fonksiyon yeni bir şifre kaydeder.
      site: siteInput.value,
      username: usernameInput.value,
      password: passwordInput.value,
      id: Date.now()
    });
    form.reset();
  });

  togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.textContent = 'Gizle';
      // input tipini 2si arasında degiştirir
    } else {
      passwordInput.type = 'password';
      togglePassword.textContent = 'Göster';
    }
  });

  form.querySelector('#deleteAll').addEventListener('click', handleDeleteAll);
  // tümünü sile tıkladıgımda çalışır
  return form;
}
