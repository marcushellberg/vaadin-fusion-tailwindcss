import { customElement, html } from "lit-element";
import { View } from "./view";

@customElement("view-two")
export class ViewTwo extends View {
  render() {
    return html` <h1>Another view here</h1> `;
  }
}
