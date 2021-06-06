export default class Section {
  //передаем массив карточек, функцию, и селектор секции куда будем добавлять их
  constructor({rendererItem}, containerSelector) {
    this._containerSelector = containerSelector;
    this._containerSection = document.querySelector(this._containerSelector)
    this._rendererItem = rendererItem

  }
// метод обходит карточки и вызывает метод добавления в разметку
  renderer(dataArray, userId) {
    dataArray.reverse().forEach( item => this._rendererItem(item, userId))
  };
 
// метод добавления карточки через форму
  addItem(element) {
    this._containerSection.prepend(element);
  }
}