import createForm from './components/PasswordForm.js';
import createPasswordItem from './components/PasswordItem.js';

let passwords = JSON.parse(localStorage.getItem('passwords')) || [];  
const formContainer = document.getElementById('form-container');  
// foröu kaydettigim yer
const listContainer = document.getElementById('password-list');
// kaydedilen şifrelerin listelendigi yer

function renderList() {
  listContainer.innerHTML = '';
  passwords.forEach(entry => {
    listContainer.appendChild(createPasswordItem(entry, handleDelete));
    // password her eleman için yeni bir kart oluşuturyor, bu kartı listeye ekliyor
  });
}

function handleAdd(entry) {
  passwords.push(entry);
  localStorage.setItem('passwords', JSON.stringify(passwords));   
  renderList();
  // liste locala eklenir
}

function handleDelete(id) {
  passwords = passwords.filter(p => p.id !== id);
  localStorage.setItem('passwords', JSON.stringify(passwords));
  renderList();
  // filter ile silinmek istenen ıd dışındaki tüm şifreler bırakılır.
}

formContainer.appendChild(createForm(handleAdd));
// formdan veri geldiginde bu satır çalışır
renderList();
// sayfa yüklendiginde daha önce şifre falan varsa onları listeler
