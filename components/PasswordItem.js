export default function createPasswordItem(entry, onDelete) {
  const div = document.createElement('div');
  div.className = 'card mb-3';


  const maskedPassword = '•'.repeat(entry.password.length);// şifreyi yıldızla göster

  div.innerHTML = `
    <div class="card-body d-flex justify-content-between align-items-start">
        <div>
          <strong>Site:</strong> ${entry.site}<br>
          <strong>Kullanıcı:</strong> ${entry.username}<br>
          <strong>Şifre:</strong> <span class="password-text">${maskedPassword}</span>
        </div>
      <div>
        <button class="btn btn-sm btn-secondary me-2 copy-btn">Kopyala</button>
        <button class="btn btn-sm btn-danger delete-btn">Sil</button>
      </div>
    </div>
  `;

  div.querySelector('.delete-btn').addEventListener('click', () => onDelete(entry.id));

  div.querySelector('.copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(entry.password)
    //kayıttaki gerçek şifre panoya kopyalanır
      .then(() => alert('Şifre kopyalandı!'))
      
      .catch(() => alert('Kopyalama başarısız!'));
  });

  return div;
}
