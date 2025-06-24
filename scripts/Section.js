export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
    console.log(this._renderer);
  }

  render() {
    consol.log("render ", this._items);
    // this._renderer(this._items);
    this._items.forEach((item) => {
      console.log("for each");
      this._renderer(item);
    });
  }

  addItem(element) {
    console.log(element);
    this._containerSelector.prepend(element);
  }
}

/* <section class="gallery">
  <div class="cards"><!-- card --></div>
</section> */
