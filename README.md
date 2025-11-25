# VVS Card for Home Assistant

A custom Lovelace card designed for the [VVS Integration](https://github.com/sigathi/ha_vvs). It visualizes public transport connections in Stuttgart (VVS) using a clean, responsive "Timeline" style.

<img src="./card.png" alt="Card image description" width="50%">

## Installation

### Option 1: HACS (Recommended)
1.  Ensure you have [HACS](https://hacs.xyz/) installed.
2.  Go to **HACS** > **Frontend**.
3.  Click the 3 dots (top right) > **Custom repositories**.
4.  Add the URL `https://github.com/sigathi/ha_vvs_card` and select category **Dashboard**.
5.  Click **Install**.
6.  Reload your browser resources.

### Option 2: Manual Installation
1.  Download `vvs-card.js` from the releases section.
2.  Upload it to your Home Assistant `config/www` folder.
3.  Go to **Settings** > **Dashboards** > **3 dots** > **Resources**.
4.  Add Resource: `/local/vvs-card.js` (Type: JavaScript Module).

## Configuration

### Basic Usage
Minimal configuration to get started.

```yaml
type: custom:vvs-card
entity: sensor.bad_cannstatt_to_olgaeck
title: "Commute to Work"
```

### Advanced Usage

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`entity`** | string | **Required** | The entity ID of the VVS sensor (e.g., `sensor.vvs_stuttgart_to_esslingen`). |
| `title` | string | `null` | A custom heading displayed at the top of the card. |
| `add_delay_to_time`| boolean | `true` | **`true`**: Adds delay to the displayed time (e.g., 12:05 in Red) and shows delay info in black.<br>**`false`**: Shows scheduled time (12:00 in Black) and delay info in Red. |
| `abbreviations` | boolean / list | `true` | **`true`**: Enables standard abbreviations (Stuttgart -> Stgt, Hauptbahnhof -> Hbf).<br>**`false`**: Disables standard abbreviations.<br>**List**: Define custom rules (e.g., `[{from: 'Wilhelmsplatz', to: 'Pl.'}]`). |
| `deduplicate_via` | boolean | `true` | If `true`, prevents the same station from appearing twice in a row on the timeline (exact match). |
| `merge_via` | list | `[]` | A list of objects to group redundant station names. Used to normalize names *before* deduplication (e.g., `{ alias: "Stgt Hbf", stations: ["Stuttgart Hbf (tief)", "Hauptbf (A.-Klett-Pl.)"] }`). This option can also be used to create a custom abbreviation by adding an alias to a specific station. |
| `ignore_via` | list | `[]` | A list of exact station names to completely hide from the timeline. |


This example shows all options of the card:
```yaml
type: custom:vvs-card
entity: sensor.bad_cannstatt_to_olgaeck
title: "Commute to Work"
add_delay_to_time: true
abbreviations: true
deduplicate_via: true
merge_via:
  - alias: Hauptbf (A.-Klett-Pl.)
    stations:
      - Hauptbf (A.-Klett-Pl.)
      - Hauptbf (Arnulf-Klett-Platz)
      - Stuttgart Hauptbahnhof (oben)
      - Stuttgart Hauptbahnhof (tief)
ignore_via:
  - Some Irrelevant Stop
```
