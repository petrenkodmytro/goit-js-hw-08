const STORAGE_KEY = 'selectedFilter';
const filterForm = document.querySelector('.filter-form');
const colorPropRef = document.querySelector('.color');
const sizePropRef = document.querySelector('.size');
const materialPropRef = document.querySelector('.material');

// const selectedFilter = {};
// console.log(selectedFilter);

initialForm();

filterForm.addEventListener('submit', onFormSubmit);
filterForm.addEventListener('change', onFormChange);
filterForm.addEventListener('reset', () => {
  colorPropRef.textContent = '---';
  sizePropRef.textContent = '---';
  materialPropRef.textContent = '---';
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
  // console.log(savedFilter);
  // console.log(savedFilter.size);
  colorPropRef.textContent = savedFilter.color;
  sizePropRef.textContent = savedFilter.size;
  materialPropRef.textContent = savedFilter.material;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedFilter));
}

function initialForm() {
  let savedFilter = localStorage.getItem(STORAGE_KEY);
  if (savedFilter) {
    savedFilter = JSON.parse(savedFilter);
    console.log(savedFilter);
    // console.log(savedFilter.size);
    Object.entries(savedFilter).forEach(([name, value]) => {
      // selectedFilter[name] = value;
      filterForm.elements[name].value = value;
    });
    colorPropRef.textContent = savedFilter.color;
    sizePropRef.textContent = savedFilter.size;
    materialPropRef.textContent = savedFilter.material;
  }
}
