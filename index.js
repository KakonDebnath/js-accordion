const accordionItems = document.querySelectorAll('.accordion_item');

accordionItems.forEach(item => {
  const title = item.querySelector('.accordion_title');
  const content = item.querySelector('.accordion_content');

  title.addEventListener('click', () => {
    accordionItems.forEach(clickedItem => {
      if (clickedItem !== item) {
        clickedItem.querySelector('.accordion_content').classList.remove('active');
        clickedItem.querySelector('.accordion_title').classList.remove('active');
      }
    });
    title.classList.toggle('active');
    content.classList.toggle('active');
  });
});
