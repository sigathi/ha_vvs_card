const VVS_ICONS = `
<svg style="display: none;">
  <symbol id="icon-sbahn" viewBox="0 0 20 20"><path style="fill:#fff;" d="M0.51,13.139c1.009,3.052,3.442,5.455,6.517,6.411C3.952,18.594,1.519,16.19,0.51,13.139z"/><path style="fill:#fff;" d="M15.484,15.117c1.366-2.055,0.441-4.941-1.299-5.914C11.123,7.491,9.45,8.294,7.771,6.674C6.763,5.701,7.326,3.936,9.533,4.008c2.987,0.097,5.613,2.675,5.613,2.675V3.95c-4.098-2.724-7.498-2.098-9.215-0.836C3.257,5.079,2.62,9.459,6.822,11.227c2.035,0.856,3.739,0.961,4.71,1.38c1.124,0.487,1.776,2.714-1.066,3.212c-2.229,0.388-4.593-0.935-6.474-3.251c0.021,0.039,0,3.154,0,3.154C7.132,18.347,12.617,19.437,15.484,15.117z"/><path style="fill:#fff;" d="M10.001,0c4.831,0,8.863,3.428,9.796,7.985C18.865,3.428,14.833,0,10,0C4.477,0,0,4.477,0,10c0,0.691,0.07,1.365,0.203,2.016C0.07,11.365,0,10.691,0,10.001C0,4.478,4.478,0,10.001,0z"/><path style="fill:#fff;" d="M0.45,12.974c-0.074-0.236-0.13-0.48-0.186-0.723C0.32,12.494,0.376,12.738,0.45,12.974z"/><path style="fill:#53b330;" d="M19.797,7.985C18.864,3.428,14.833,0,10.001,0C4.478,0,0,4.478,0,10.001c0,0.69,0.07,1.364,0.203,2.015c0.016,0.08,0.042,0.156,0.06,0.235c0.056,0.244,0.112,0.487,0.186,0.723c0.017,0.056,0.042,0.109,0.06,0.165c1.009,3.051,3.442,5.455,6.517,6.411C7.967,19.843,8.966,20,10.001,20C15.523,20,20,15.524,20,10.001C20,9.311,19.93,8.636,19.797,7.985z M3.992,12.568c1.881,2.316,4.245,3.639,6.474,3.251c2.842-0.498,2.19-2.725,1.066-3.212c-0.971-0.419-2.675-0.524-4.71-1.38C2.62,9.459,3.257,5.079,5.931,3.114c1.717-1.262,5.117-1.888,9.215,0.836v2.733c0,0-2.626-2.578-5.613-2.675c-2.207-0.072-2.77,1.693-1.762,2.666c1.679,1.62,3.352,0.817,6.414,2.529c1.74,0.973,2.665,3.859,1.299,5.914c-2.867,4.32-8.352,3.23-11.492,0.605C3.992,15.722,4.013,12.607,3.992,12.568z"/></symbol>
  <symbol id="icon-ubahn" viewBox="0 0 20 20"><g><path style="fill:#0ba1e2;" d="M0,0v20h20V0H0z M16,11c0,8-12,8-12,0V3h3v8c0,4,6,4,6,0V3h3V11z"/><path style="fill:#ffffff;" d="M13,11c0,4-6,4-6,0V3H4v8c0,8,12,8,12,0V3h-3V11z"/></g></symbol>
  <symbol id="icon-bus" viewBox="0 0 22 20"><path style="fill:#C31924;" d="M0,9v2l5,9h12l5-9V9l-5-9H5L0,9z"/><g><path style="fill:#ffffff;" d="M4,6h2c0.5,0,2,0,2,2c0,1-1,1.5-1,1.5S8,10,8,11c0,2-1.484,1.989-2,2H4V6z M5,9h1c0,0,1,0,1-1S6,7,6,7H5V9z M5,12h1c0,0,1,0,1-1s-1-1-1-1H5V12z"/></g><path style="fill:#ffffff;" d="M13,11c0,2-2,2-2,2s-2,0-2-2V6h1v5c0,1,1,1,1,1s1,0,1-1V6h1V11z"/><path style="fill:#ffffff;" d="M17.943,8.031h-1.15V7.809c0-0.75-0.945-1.172-1.436-0.555c-0.456,0.572-0.08,1.331,0.501,1.531l0.879,0.299 c1.323,0.435,1.697,2.423,0.686,3.41C16.413,13.478,14,12.991,14,11.353v-0.367h1.149v0.308c0,0.808,1.18,0.942,1.55,0.357 c0.388-0.614,0.034-1.5-0.569-1.719l-0.822-0.29c-1.29-0.452-1.753-2.204-0.673-3.178c0.971-0.876,3.309-0.515,3.309,1.082 L17.943,8.031L17.943,8.031z"/></symbol>
  <symbol id="icon-rbahn" viewBox="0 0 20 20"><rect style="fill:#8F908F;" width="20" height="20"/><g><path style="fill:#ffffff;" d="M4,17V3h7c2,0,4,1,4,4s-2,4-3,4l4,6h-3l-4-6H7v6H4z M7,9h3c1,0,2-1,2-2s-1-2-2-2H7V9z"/></g></symbol>
  <symbol id="icon-fussweg" viewBox="0 0 19 31"><g><circle class="st1" cx="11.1" cy="2.6" r="2.6"/></g><g><path class="st1" d="M18.1,13.7L14.4,12l-2.7-5.5c-0.3-0.6-0.6-1-1.6-1.1c-0.2,0-0.9-0.1-1.2,0C8.6,5.6,2.3,9,2.2,9.1 C1.9,9.3,1.7,9.5,1.6,9.8l-0.9,4.6c0,0.6,0.3,1.2,0.9,1.3c0.6,0.1,1.1-0.3,1.2-0.8l0.8-4.3l3-1.6L4.3,21.6l-4,6.1 c-0.5,0.8-0.4,1.7,0.2,2.1s1.5,0.1,2-0.7l3.9-6c0.4-0.5,1.1-5.5,1.1-5.5c0.1,0,0.9,0.2,1.1,0.4l4.1,4.9l1.3,6 c0.2,0.8,0.9,1.3,1.6,1.1c0.7-0.2,1.1-0.9,1-1.7l-1.3-6.1c-0.1-0.7-4.7-6-4.7-6l1.2-5.3c0,0,1.1,2.2,1.1,2.3 c0.1,0.3,0.3,0.5,0.5,0.7l3.9,1.7c0.5,0.2,1.1,0,1.3-0.6C18.8,14.5,18.6,13.9,18.1,13.7z"/></g></symbol>
  <symbol id="icon-zacke" viewBox="0 0 20 20"><g><rect style="fill-rule:evenodd;clip-rule:evenodd;fill:#FDCC00;" width="20" height="20"/></g><path style="fill:#194486;" d="M8.5,9.5C8.5,8.671,9.172,8,10,8c0.829,0,1.5,0.671,1.5,1.5S10.829,11,10,11C9.172,11,8.5,10.329,8.5,9.5 L8.5,9.5z"/><g><path style="fill:none;" d="M7.233,13.984L6.264,14.5H6.5l0.5,1h0.564c-0.125-0.052-0.256-0.09-0.378-0.148L7.233,13.984z"/><circle style="fill:none;" cx="9.999" cy="9.5" r="4"/><path style="fill:none;" d="M12.828,15.345c-0.126,0.061-0.263,0.101-0.392,0.155H13l0.5-1h0.267l-0.986-0.526L12.828,15.345z"/><path style="fill:#194486;" d="M16,14.5l-0.5,1h-1l-0.461-0.923c0.252-0.201,0.491-0.417,0.711-0.653l-0.535-1.264l1.36,0.167 c0.177-0.295,0.332-0.603,0.461-0.925l-0.963-0.965l1.332-0.358c0.056-0.332,0.091-0.672,0.095-1.019l-1.25-0.584l1.124-0.789 c-0.068-0.34-0.169-0.667-0.288-0.985l-1.375-0.096l0.763-1.133c-0.186-0.292-0.396-0.566-0.625-0.823l-1.302,0.424l0.286-1.348 c-0.275-0.202-0.566-0.384-0.871-0.541l-1.068,0.866l-0.215-1.359c-0.325-0.087-0.657-0.156-1-0.192l-0.004,0.007l-0.658,1.189 L9.991,4.15L9.963,4.196L9.308,3.012L9.303,3.002c-0.343,0.037-0.675,0.105-1,0.193L8.088,4.558L7.021,3.692 C6.714,3.851,6.423,4.035,6.147,4.239l0.307,1.332l-1.32-0.404C4.907,5.424,4.7,5.697,4.515,5.988l0.764,1.135L3.906,7.218 C3.788,7.537,3.689,7.865,3.622,8.205l1.125,0.79L3.5,9.577c0.005,0.351,0.04,0.694,0.099,1.03l1.321,0.306l-0.946,1.017 c0.129,0.318,0.285,0.622,0.46,0.913l1.362-0.168l-0.535,1.263c0.217,0.231,0.453,0.442,0.701,0.64L5.5,15.5h-1l-0.5-1H3 c0,0,0,2.5,2,2.5h9.998C16.915,17,17,14.5,17,14.5H16z M9.999,5.5c2.209,0,4,1.791,4,4c0,2.209-1.791,4-4,4c-2.209,0-4-1.791-4-4 C5.999,7.291,7.79,5.5,9.999,5.5z M7,15.5l-0.5-1H6.264l0.969-0.516l-0.047,1.368c0.121,0.058,0.253,0.096,0.378,0.148H7z M13.5,14.5l-0.5,1h-0.564c0.13-0.054,0.266-0.094,0.392-0.155l-0.048-1.37l0.986,0.526H13.5z"/></g></symbol>
  <symbol id="icon-seilbahn" viewBox="0 0 20 20"><g><rect style="fill-rule:evenodd;clip-rule:evenodd;fill:#FDCC00;" width="20" height="20"/></g><g><polygon class="st1" points="3,16.623 16.926,13.52 17,13.897 3.074,17 3,16.623"/><g><rect x="8.009" y="9.005" style="fill:none;" width="1.511" height="1.53"/><rect x="5.015" y="9.679" style="fill:none;" width="1.511" height="1.53"/><rect x="11.003" y="8.16" style="fill:none;" width="1.013" height="3.537"/><rect x="13.499" y="7.776" style="fill:none;" width="1.511" height="1.53"/><path style="fill:#194486;" d="M16.498,9.731V5.178L15.147,5.48l0.796-0.806L14.291,3l-1.652,1.673l1.105,1.119L6.678,7.367l0.771-0.78 L5.796,4.913L4.144,6.586l1.089,1.102L3.55,8.064v4.64H3.051v1.012H3.55v1.422l2.32-0.517c-0.004,0.038-0.006,0.076-0.006,0.115 c0,0.604,0.483,1.093,1.079,1.093c0.596,0,1.08-0.49,1.08-1.093c0-0.205-0.056-0.397-0.153-0.561l4.14-0.922l-0.005,0.104 c0,0.604,0.483,1.093,1.08,1.093c0.596,0,1.079-0.49,1.079-1.093c0-0.201-0.053-0.389-0.147-0.551l2.48-0.553v-1.509h0.479V9.731 H16.498z M4.822,6.586L5.796,5.6L6.77,6.586L5.788,7.565L4.822,6.586z M6.526,11.208H5.015v-1.53h1.511V11.208z M9.52,10.535 H8.009v-1.53H9.52V10.535z M12.016,11.697h-1.013V8.16h1.013V11.697z M13.316,4.673l0.974-0.987l0.974,0.987L14.291,5.66 L13.316,4.673z M15.01,9.306h-1.511v-1.53h1.511V9.306z"/></g></g></symbol>
</svg>
`;

class VVSCard extends HTMLElement {
  constructor() {
    super();
    this._trips = null;
    this._width = 0;

    this._resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const newWidth = entry.contentRect.width;
        if (Math.abs(newWidth - this._width) > 10) {
            this._width = newWidth;
            this.render();
        }
      }
    });
  }

  set hass(hass) {
    if (!this.content) {
      this.innerHTML = `
        ${VVS_ICONS}
        <ha-card>
          <div class="card-content" id="container"></div>
        </ha-card>
      `;
      this.content = this.querySelector("#container");
      const card = this.querySelector("ha-card");
      if (card) this._resizeObserver.observe(card);
    }

    const entityId = this.config.entity;
    const state = hass.states[entityId];

    if (!state || !state.attributes.trips) return;

    this._trips = state.attributes.trips;
    this.render();
  }

  setConfig(config) {
    if (!config.entity) throw new Error("You need to define an entity");

    this.config = {
        deduplicate_via: true,
        merge_via: [],
        ignore_via: [],
        abbreviations: false, // Default: False (No built-in abbreviations)
        add_delay_to_time: true,
        ...config
    };
  }

  disconnectedCallback() {
    if (this._resizeObserver) this._resizeObserver.disconnect();
  }

  // --- Helper Methods ---

  getIcon(transportName) {
    if (transportName === null || transportName === undefined || transportName === "") {
        return "#icon-fussweg";
    }
    const name = String(transportName).trim();

    if (name === "10") return "#icon-zacke";
    if (name === "20") return "#icon-seilbahn";

    if (name.startsWith("S")) return "#icon-sbahn";
    if (name.startsWith("U")) return "#icon-ubahn";
    if (name.startsWith("R") || name.startsWith("IRE") || name.startsWith("MEX") || name.startsWith("IC") || name.startsWith("EC")) return "#icon-rbahn";

    return "#icon-bus";
  }

  getTransportName(transportName) {
    if (!transportName) return "";
    const name = String(transportName).trim();
    if (name === "10") return "Zacke";
    if (name === "20") return "SB";
    return name;
  }

  addMinutesToTime(timeStr, minutesToAdd) {
    if (!timeStr || !minutesToAdd) return timeStr;
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes + minutesToAdd);

    const newH = String(date.getHours());
    const newM = String(date.getMinutes()).padStart(2, '0');
    return `${newH}:${newM}`;
  }

  renderDelay(delay, isRealTime) {
    if (!delay || delay === 0) return "";
    const text = `(+${delay}')`;
    const className = isRealTime ? "delay-neutral" : "delay-warning";
    return `<span class="${className}">${text}</span>`;
  }

  formatDuration(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}:${m.toString().padStart(2, '0')} h`;
  }

  abbreviateStation(name, charLimit) {
    if (!name) return "";
    let n = String(name);

    // Apply built-in abbreviations if enabled
    if (this.config.abbreviations === true) {
        n = n.replace('Stuttgart', 'Stgt');
        n = n.replace('Hauptbahnhof', 'Hbf');
        n = n.replace('Bahnhof', 'Bhf');
        n = n.replace('Straße', 'Str.');
        n = n.replace('straße', 'str.');
        n = n.replace('platz', 'pl.');
        n = n.replace('(tief)', '');
        n = n.replace('(oben)', '');
        n = n.trim();
    }

    // Truncation logic (ALWAYS applies to save layout)
    if (n.length > charLimit) {
      return n.substring(0, charLimit - 2) + "..";
    }
    return n;
  }

  processViaStops(rawVia) {
    if (!rawVia || rawVia.length === 0) return [];
    let stops = rawVia.slice(0, -1).map(s => String(s).trim());
    if (stops.length === 0) return [];

    if (this.config.merge_via && Array.isArray(this.config.merge_via)) {
        stops = stops.map(stopName => {
            for (const group of this.config.merge_via) {
                if (typeof group === 'object' && group.alias && Array.isArray(group.stations)) {
                    if (group.stations.includes(stopName)) {
                        return group.alias;
                    }
                }
            }
            return stopName;
        });
    }

    if (this.config.deduplicate_via !== false) {
        stops = stops.filter((item, pos, arr) => {
            return pos === 0 || item !== arr[pos - 1];
        });
    }

    if (this.config.ignore_via && Array.isArray(this.config.ignore_via)) {
        stops = stops.filter(stop => !this.config.ignore_via.includes(stop));
    }

    return stops;
  }

  render() {
    if (!this._trips || !this.content) return;

    const currentWidth = this._width || 350;
    const availableTimelineWidth = currentWidth - 120;
    const useRealTime = this.config.add_delay_to_time !== false;

    const headingHTML = this.config.title
        ? `<div class="card-header">${this.config.title}</div>`
        : "";

    const tripsHTML = this._trips.map(trip => {
      let transportHTML = "";
      if (trip.transports) {
        transportHTML = trip.transports.map(t => `
          <div class="transport-item">
            <svg class="icon"><use xlink:href="${this.getIcon(t)}"></use></svg>
            <span class="transport-number">${this.getTransportName(t)}</span>
          </div>
        `).join("");
      }

      const depDelay = trip.departure_delay || 0;
      const arrDelay = trip.arrival_delay || 0;

      let depTime = trip.departure;
      let arrTime = trip.arrival;

      let depClass = "time";
      let arrClass = "time";

      if (useRealTime && depDelay !== 0) {
          depTime = this.addMinutesToTime(trip.departure, depDelay);
          depClass += " delayed-time";
      }
      if (useRealTime && arrDelay !== 0) {
          arrTime = this.addMinutesToTime(trip.arrival, arrDelay);
          arrClass += " delayed-time";
      }

      const viaStops = this.processViaStops(trip.via);
      const displayStops = viaStops.slice(0, 3);
      const count = displayStops.length;

      const pxPerStop = count > 0 ? availableTimelineWidth / count : 0;
      let charLimit = Math.floor(pxPerStop / 7);
      if (charLimit < 5) charLimit = 5;

      let dotsHTML = "";
      let namesHTML = "";

      displayStops.forEach((stopName, index) => {
        const percent = ((index + 1) / (count + 1)) * 100;
        dotsHTML += `<div class="circle via" style="left: ${percent}%"></div>`;
        namesHTML += `<div class="via-name" style="left: ${percent}%">${this.abbreviateStation(stopName, charLimit)}</div>`;
      });

      return `
        <div class="vvs-trip">
          <div class="trip-header">
            <div class="transports">${transportHTML}</div>
            <div class="duration">${this.formatDuration(trip.duration)}</div>
          </div>

          <div class="timeline-container">
            <div class="time-left">
              <div class="${depClass}">${depTime}</div>
              <div class="delay-container">${this.renderDelay(depDelay, useRealTime)}</div>
            </div>

            <div class="timeline-graphic">
              <div class="circle left"></div>
              <div class="line"></div>
              ${dotsHTML}
              <div class="circle right"></div>
            </div>

            <div class="time-right">
              <div class="${arrClass}">${arrTime}</div>
              <div class="delay-container">${this.renderDelay(arrDelay, useRealTime)}</div>
            </div>
          </div>

          <div class="station-names-container">
             ${namesHTML}
          </div>
        </div>
      `;
    }).join("");

    this.content.innerHTML = headingHTML + tripsHTML;
  }

  getCardSize() { return 3; }

  static get observedAttributes() { return ['hass', 'config']; }

  connectedCallback() {
    const style = document.createElement('style');
    style.textContent = `
      ha-card { padding: 8px 16px; }

      .card-header {
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: 12px;
        color: var(--primary-text-color);
      }

      .vvs-trip {
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        font-family: Roboto, sans-serif;
      }
      .vvs-trip:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
      }

      .trip-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0px; }
      .transports { display: flex; gap: 10px; flex-wrap: wrap; }
      .transport-item { display: flex; align-items: center; gap: 4px; font-weight: bold; font-size: 1.1em; }
      .icon { width: 24px; height: 24px; }
      .duration { font-size: 1em; color: var(--secondary-text-color); }

      .timeline-container { display: flex; align-items: center; justify-content: space-between; height: 32px; }

      .time-left, .time-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50px;
        flex-shrink: 0;
        transform: translateY(5px);
      }
      .time { font-weight: bold; font-size: 1.1em; color: var(--primary-text-color); }
      .delayed-time { color: #db4437; }

      .delay-container { font-size: 0.9em; height: 1em; line-height: 1; }
      .delay-warning { color: #db4437; font-weight: bold; }
      .delay-neutral { color: var(--secondary-text-color); font-weight: normal; }

      .timeline-graphic { flex-grow: 1; position: relative; height: 20px; display: flex; align-items: center; margin: 0 10px; }
      .line { height: 2px; background-color: var(--primary-text-color); width: 100%; }

      .circle {
        width: 8px; height: 8px;
        background-color: var(--card-background-color);
        border: 2px solid var(--primary-text-color);
        border-radius: 50%;
        position: absolute;
        z-index: 2;
      }
      .circle.left { left: 0; }
      .circle.right { right: 0; }
      .circle.via { transform: translateX(-50%); }

      .station-names-container {
        position: relative;
        height: 1.2em;
        margin: -8px 60px 0 60px;
      }
      .via-name {
        position: absolute;
        transform: translateX(-50%);
        font-size: 0.75em;
        color: var(--secondary-text-color);
        white-space: nowrap;
        text-align: center;
      }
    `;
    this.appendChild(style);
  }
}

customElements.define('vvs-card', VVSCard);
