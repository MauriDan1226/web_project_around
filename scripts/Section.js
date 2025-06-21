export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  render() {
    this._renderer(this.items);
    this._items.forEach((item) => {});
  }

  addItem(element) {
    this._containerSelector.prepend(element);
  }
}

/* <section class="gallery">
  <div class="cards"><!-- card --></div>
</section> */
