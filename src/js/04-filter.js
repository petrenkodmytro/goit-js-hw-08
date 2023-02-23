const STORAGE_KEY = 'selectedFilter';
const filterForm = document.querySelector('.filter-form');
// const selectedFilter = {};
// console.log(selectedFilter);
initialForm();

filterForm.addEventListener('submit', onFormSubmit);
filterForm.addEventListener('change', onFormChange);
filterForm.addEventListener('reset', () => {
  localStorage.removeItem(STORAGE_KEY);
});

function onFormSubmit(e) {
  e.preventDefault();
  // const formData = new FormData(filterForm);
  // formData.forEach((value, name) => console.log(value, name));
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

function onFormChange(e) {
  //---1---
  // selectedFilter[e.target.name] = e.target.value;
  // localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedFilter));
  //---2---
  let savedFilter = localStorage.getItem(STORAGE_KEY);
  savedFilter = savedFilter ? JSON.parse(savedFilter) : {};
  savedFilter[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedFilter));
}

function initialForm() {
  let savedFilter = localStorage.getItem(STORAGE_KEY);
  if (savedFilter) {
    savedFilter = JSON.parse(savedFilter);
    console.log(savedFilter);
    Object.entries(savedFilter).forEach(([name, value]) => {
      // selectedFilter[name] = value;
      filterForm.elements[name].value = value;
    });
  }
  // else
  // const startFilter ={
  // }
  console.log(filterForm.elements.color.value);
}
