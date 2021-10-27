/* eslint-disable no-unused-vars */
let iconData = {
  us: { width: 24, height: 14 },
  ca: { width: 24, height: 14 },
  "flag-shadow": { width: 40, height: 30 },
  house: { width: 32, height: 32 },
  "house-shadow": { width: 59, height: 32 },
  headquarters: { width: 32, height: 32 },
  "headquarters-shadow": { width: 59, height: 32 },
};

let officeLayer = [
  {
    zoom: [0, 3],
    places: [
      {
        name: "USA Offices",
        icon: ["us", "flag-shadow"],
        position: [40, -97],
      },
      {
        name: "Canadian Offices",
        icon: ["ca", "flag-shadow"],
        position: [58, -101],
      },
    ],
  },
  {
    zoom: [4, 6],
    places: [
      {
        name: "Headquarters",
        icon: ["headquarters", "headquarters-shadow"],
        position: [37.423021, -122.083739],
      },
      {
        name: "New York Sales & Engineering Office",
        icon: ["house", "house-shadow"],
        position: [40.754606, -73.986794],
      },
      {
        name: "Atlanta Sales &amp; Engineering Office",
        icon: ["house", "house-shadow"],
        position: [33.781506, -84.387422],
      },
      {
        name: "Dallas Sales Office",
        icon: ["house", "house-shadow"],
        position: [36.4724385, -101.044637],
      },
      {
        name: "Cambridge Sales & Engineering Office",
        icon: ["house", "house-shadow"],
        position: [42.362331, -71.083661],
      },
      {
        name: "Chicago Sales Office",
        icon: ["house", "house-shadow"],
        position: [41.889232, -87.628767],
      },
      {
        name: "Denver & Boulder Offices",
        icon: ["house", "house-shadow"],
        position: [39.563011, -104.868962],
      },
      {
        name: "Detroit Sales Office",
        icon: ["house", "house-shadow"],
        position: [42.475482, -83.244587],
      },
      {
        name: "Santa Monica & Irvine Offices",
        icon: ["house", "house-shadow"],
        position: [33.715585, -118.177435],
      },
      {
        name: "Phoenix Sales & Engineering Office",
        icon: ["house", "house-shadow"],
        position: [33.411782, -111.926247],
      },
      {
        name: "Pittsburgh Engineering Office",
        icon: ["house", "house-shadow"],
        position: [40.444541, -79.946254],
      },
      {
        name: "Seattle Engineering & Sales Offices",
        icon: ["house", "house-shadow"],
        position: [47.664261, -122.274308],
      },
      {
        name: "Canada Sales Office",
        icon: ["house", "house-shadow"],
        position: [43.645478, -79.378843],
      },
    ],
  },
  {
    zoom: [7, 17],
    places: [
      {
        name: "Headquarters",
        position: [37.423021, -122.083739],
      },
      {
        name: "New York Sales & Engineering Office",
        position: [40.754606, -73.986794],
      },
      {
        name: "Atlanta Sales &amp; Engineering Office",
        position: [33.781506, -84.387422],
      },
      {
        name: "Boulder Sales & Engineering Office",
        position: [40.01852, -105.276882],
      },
      {
        name: "Cambridge Sales & Engineering Office",
        position: [42.362331, -71.083661],
      },
      {
        name: "Chicago Sales Office",
        position: [41.889232, -87.628767],
      },
      {
        name: "Dallas Sales Office",
        position: [32.925355, -96.816087],
      },
      {
        name: "Denver Sales Office",
        position: [39.563011, -104.868962],
      },
      {
        name: "Detroit Sales Office",
        position: [42.475482, -83.244587],
      },
      {
        name: "Irvine Sales & Engineering Office",
        position: [33.660021, -117.860142],
      },
      {
        name: "Phoenix Sales & Engineering Office",
        position: [33.411782, -111.926247],
      },
      {
        name: "Pittsburgh Engineering Office",
        position: [40.444541, -79.946254],
      },
      {
        name: "Santa Monica Sales & Engineering Office",
        position: [34.019388, -118.494728],
      },
      {
        name: "Seattle Engineering Office",
        position: [47.678415, -122.195713],
      },
      {
        name: "Seattle Sales Office",
        position: [47.650106, -122.352903],
      },
      {
        name: "Toronto Sales Office",
        position: [43.645478, -79.378843],
      },
    ],
  },
];
