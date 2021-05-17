export default class Section {
  //передаем массив карточек, функцию, и селектор секции куда будем добавлять их
  constructor({data, rendererItem}, containerSelector) {
    this.data = data;
    this.containerSelector = containerSelector;
    this.containerSection = document.querySelector(this.containerSelector)
    this.rendererItem = rendererItem

  }
// метод обходит карточки и вызывает метод добавления в разметку
  renderer() {
    // this.dataArray.forEach( item => this.rendererItem(item));
    this.rendererItem(this.data)
  }

  addItem(element) {
    this.containerSection.append(element);
  }
}