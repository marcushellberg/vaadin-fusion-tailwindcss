import { customElement, html } from "lit-element";
import { View } from "./view";

@customElement("view-one")
export class ViewOne extends View {
  render() {
    return html`
      <div class="container mx-auto p-6 my-6 bg-white rounded-lg">
        <h1 class="text-xl">tailwindcss and Vaadin Fusion?</h1>
        <p class="font-serif">It's possible. Here's how you do it.</p>
        <button class="bg-green-500 px-3 py-1 text-white rounded-md">
          I'm a button
        </button>
      </div>
    `;
  }
}
