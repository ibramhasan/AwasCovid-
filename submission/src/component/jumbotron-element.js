import css from "./bootstrap/dist/css/bootstrap.min.js"

class JumbotronElement extends HTMLElement {

  connectedCallback() {
    this.attachShadow({mode: "open"});
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ${css}
      </style>

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Awas Covid!</h1>
          <p class="lead">Temukan data soal Covid-19 tanpa simpang siur dan hoax, hanya di AwasCovid!</p>
        </div>
      </div>
    `
  }
}

customElements.define("jumbotron-element", JumbotronElement);