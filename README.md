# MarkerManager

[![npm](https://img.shields.io/npm/v/@googlemaps/markermanager)](https://www.npmjs.com/package/@googlemaps/markermanager)
![Build](https://github.com/googlemaps/js-markermanager/workflows/Test/badge.svg)
![Release](https://github.com/googlemaps/js-markermanager/workflows/Release/badge.svg)
[![codecov](https://codecov.io/gh/googlemaps/js-markermanager/branch/main/graph/badge.svg)](https://codecov.io/gh/googlemaps/js-markermanager)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/js-markermanager?color=green)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)
[![Discord](https://img.shields.io/discord/676948200904589322?color=6A7EC2&logo=discord&logoColor=ffffff)](https://discord.gg/jRteCzP)

## Description

Marker manager is an interface between the map and the user, designed to manage adding and removing many points when the viewport changes.

> **Note**: This package was previously located at https://github.com/googlemaps/v3-utility-library.

### How it Works

The MarkerManager places its markers onto a grid, similar to the map tiles. When the user moves the viewport, it computes which grid cells have entered or left the viewport, and shows or hides all the markers in those cells. (If the users scrolls the viewport beyond the markers that are loaded, no markers will be visible until the EVENT_moveend triggers an update.) In practical consequences, this allows 10,000 markers to be distributed over a large area, and as long as only 100-200 are visible in any given viewport, the user will see good performance corresponding to the 100 visible markers, rather than poor performance corresponding to the total 10,000 markers. Note that some code is optimized for speed over space, with the goal of accommodating thousands of markers.

## Documentation

The reference documentation can be found at this [link](https://googlemaps.github.io/js-markermanager).

## Examples

- [Weather Map](https://googlemaps.github.io/js-markermanager/examples/weather_map.html)
- [Google North America Offices](https://googlemaps.github.io/js-markermanager/examples/google_northamerica_offices.html)

## Support

This library is community supported. We're comfortable enough with the stability and features of
the library that we want you to build real production applications on it.

If you find a bug, or have a feature suggestion, please [log an issue][issues]. If you'd like to
contribute, please read [How to Contribute][contrib].

[issues]: https://github.com/googlemaps/js-markermanager/issues
[contrib]: https://github.com/googlemaps/js-markermanager/blob/master/packages/markermanager/CONTRIB.md
