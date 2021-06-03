export default class Section {
  //передаем массив карточек, функцию, и селектор секции куда будем добавлять их
  constructor({rendererItem}, containerSelector) {
    this.containerSelector = containerSelector;
    this.containerSection = document.querySelector(this.containerSelector)
    this.rendererItem = rendererItem

  }
// метод обходит карточки и вызывает метод добавления в разметку
  renderer(dataArray, userId) {
    dataArray.reverse().forEach( item => this.rendererItem(item, userId))
  };
 
// метод добавления карточки через форму
  addItem(element) {
    this.containerSection.prepend(element);
  }
}