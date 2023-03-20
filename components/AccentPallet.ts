import { shadowDOM, stringMap } from './shadow'
import { m } from '../main'

export class AccentPallet extends HTMLElement {
  constructor() {
    super()
    shadowDOM(this, `
      <style>
        .accents {
          display: flex;
          gap: 0em;
        }

        .contrast {
          display: none;
          height: 50px;
          aspect-ratio: 1 / 1;
          border: 1px solid var(--foreground);
          box-sizing: border-box;
        }
      </style>
      <div class="accents">
        ${stringMap(m.accents?.map((fl, index) => {
          return `
            <div class="accent-range">
              <color-pallet name="accents" index="${index}"></color-pallet>
              <div class="contrast pallet" style="background: ${fl.contrast}"></div>
            </div>
          `
        }))}
      </div>
    `)
  }
}