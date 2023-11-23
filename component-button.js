// component-button.js
class ComponentButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<button id="myButton">Ver Detalles del Producto</button>';
    this.querySelector('#myButton').addEventListener('click', () => {
      const customEvent = new CustomEvent('custom-click', { detail: { message: 'PS4/PS5, PC, 2018, Single player, 25,99$.' } });
      document.dispatchEvent(customEvent);
    });
  }
}

customElements.define('component-button', ComponentButton);
