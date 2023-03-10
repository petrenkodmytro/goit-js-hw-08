import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

const FormData = {};
// деструктуризація змінних email та password з об'єкта form.elements
const { email, message } = formRef.elements;
// під час завантаження сторінки перевіряй стан сховища
lastSaveForm();

function onFormSubmit(event) {
  event.preventDefault();
  // проверка на пустые поля
  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Всі поля повинні бути заповнені');
  }
  // виводимо у консоль об'єкт з полями email та message
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  // очищаем поля формы
  event.currentTarget.reset();
  // очищаем localStorage
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(event) {
  FormData[email.name] = email.value;
  FormData[message.name] = message.value;
  // або
  // FormData[event.target.name] = event.target.value;
 
  // записуємо у локальне сховище об'єкт з полями email і message
  localStorage.setItem(STORAGE_KEY, JSON.stringify(FormData));
}

function lastSaveForm() {
  // отримаємо рядок з localStorage
  const saveFormDataString = localStorage.getItem(STORAGE_KEY);
  // парсимо рядок, щоб отримати з JSON валідне JavaScript значення
  const saveFormData = JSON.parse(saveFormDataString);
  // якщо у localStorage є збережені дані, заповнюй ними поля форми
  if (saveFormData) {
    email.value = saveFormData.email;
    message.value = saveFormData.message;
  }
}

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

/** 
const KEY = 'selectedFilter';
const filterForm = document.querySelector('filter-form');
const selectedFilter = {};
initialForm();

filterForm.addEventListener('submit', onFormSubmit);
filterForm.addEventListener('change', onFormChange);
filterForm.addEventListener('reset', () => {
  localStorage.removeItem(KEY);
});

function onFormSubmit(e) {
  e.preventDefault()
  const FormData = new FormData(filterForm)
  FormData.forEach((value, name)=> console.log(value, name))
}

function onFormChange(e) {
  //---1---
  selectedFilter[e.target.name] = e.target.value;
  localStorage.setItem(KEY, JSON.stringify(selectedFilter));
  //---2---
  // let savedFilter = localStorage.getItem(KEY);
  // savedFilter = savedFilter ? JSON.parse(savedFilter) : {};
  // savedFilter[e.target.name] = e.target.value;
  // localStorage.setItem(KEY, JSON.stringify(selectedFilter));
}

function initialForm() {
  let savedFilter = localStorage.getItem(KEY);
  if (savedFilter) {
    savedFilter = JSON.parse(savedFilter);
    Object.entries(savedFilter).forEach(([name, value]) => {
      selectedFilter[name] = value;
      filterForm.elements[name] = value;
    });
  }
}
*/
