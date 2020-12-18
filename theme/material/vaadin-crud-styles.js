import '@vaadin/vaadin-material-styles/typography.js';
import '@vaadin/vaadin-material-styles/color.js';
import '../vaadin-dialog-layout-overlay-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`<dom-module id="material-crud-grid-edit" theme-for="vaadin-crud-edit">
  <template>
    <style>
      :host {
        font-size: var(--material-button-font-size);
        line-height: 1;
        color: var(--material-text-color);
        position: relative;
        background-color: var(--material-secondary-background-color);
        border-radius: 4px;
        width: 2em;
        height: 2em;
      }

      :host::before {
        font-family: serif;
        font-size: var(--material-button-font-size);
        color: var(--material-primary-text-color);
        content: '✎';
        width: 2em;
        height: 2em;
        line-height: 2em;
        text-align: center;
        position: absolute;
      }

      :host::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: currentColor;
        opacity: 0;
        transition: opacity 100ms;
      }

      :host(:hover)::after {
        opacity: 0.05;
      }

      :host(:active)::after {
        opacity: 0.12;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-crud" theme-for="vaadin-crud">
  <template>
    <style>
      :host {
        font-family: var(--material-font-family);
      }

      [part="toolbar"] {
        padding: 8px;
        background-color: var(--material-secondary-background-color);
      }

      :host(:not([dir="rtl"])) [part="toolbar"] ::slotted(*:not(:first-child)) {
        margin-left: 0.5em;
      }

      :host([dir="rtl"]) [part="toolbar"] ::slotted(*:not(:first-child)) {
        margin-right: 0.5em;
      }

      vaadin-text-field[theme~="small"] {
        height: 24px;
        font-size: var(--material-small-font-size);
        margin: 0;
        padding: 0;
      }
    </style>
  </template>
</dom-module><dom-module id="dialog-layout-theme" theme-for="vaadin-dialog-layout">
  <template>
    <style>
      :host(:not([editor-position=""])) [part="editor"]:not([hidden]) {
        box-shadow: var(--material-shadow-elevation-12dp);
      }

      [part="scroller"] {
        padding: 16px;
        background: var(--material-background-color);
      }

      [part="footer"] {
        background-color: var(--material-secondary-background-color);
        padding: 8px 4px;
      }

      [part="footer"] ::slotted(*) {
        margin-left: 4px;
        margin-right: 4px;
      }
    </style>
  </template>
</dom-module><dom-module id="material-crud-vaadin-dialog-overlay" theme-for="vaadin-dialog-overlay">
  <template>
    <style include="material-overlay">
      @keyframes material-overlay-dummy-animation {
        0% {
          opacity: 1;
        }

        100% {
          opacity: 1;
        }
      }

      :host([opening]),
      :host([closing]) {
        animation: 0.25s material-overlay-dummy-animation;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
