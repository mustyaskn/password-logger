export function handleDeleteAll() {
  if (confirm('Tüm şifreleri silmek istediğinize emin misiniz?')) {
    localStorage.removeItem('passwords');
    // Tarayıcının localStorage alanındaki passwords anahtarındaki veriyi tamamen siler.


    location.reload();
    // sayfayı yeniler arayüz sıfırlanır
  }
}
