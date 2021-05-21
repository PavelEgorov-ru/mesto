export default class Section {
  //передаем массив карточек, функцию, и селектор секции куда будем добавлять их
  constructor({data, rendererItem}, containerSelector) {
    this.dataArray = data;
    this.containerSelector = containerSelector;
    this.containerSection = document.querySelector(this.containerSelector)
    this.rendererItem = rendererItem

  }
// метод обходит карточки и вызывает метод добавления в разметку
  renderer() {
    this.dataArray.forEach( item => {
      this.containerSection.append(this.rendererItem(item))
    });
  }
// метод добавления карточки через форму
  addItem(element) {
    this.containerSection.prepend(element);
  }
}