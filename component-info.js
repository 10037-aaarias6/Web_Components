// component-info.js
class ComponentInfo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<p>Plataformas:</p>';
    document.addEventListener('custom-click', (event) => {
      this.querySelector('p').textContent = event.detail.message;
    });
  }
}

customElements.define('component-info', ComponentInfo);
