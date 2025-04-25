
// Define basic island polygons for Indonesia
// These are simplified polygon coordinates [longitude, latitude]
const ISLANDS = [
    {
        id: "sumatra",
        name: "Sumatra",
        color: "#4CAF50",
        polygon: [
            [95.3, 5.8], [95.8, 2.0], [96.5, -1.5],
            [99.0, -3.4], [102.0, -4.0], [104.0, -3.2],
            [105.5, -1.8], [104.5, 0.5], [103.0, 2.5],
            [100.0, 3.8], [98.5, 5.0], [97.0, 5.9],
            [95.3, 5.8]
        ]
    },
    {
        id: "java",
        name: "Java",
        color: "#F44336",
        polygon: [
            [105.2, -5.9], [106.0, -6.2], [107.5, -6.8],
            [110.0, -7.0], [112.0, -7.7], [114.5, -8.0],
            [115.0, -8.5], [114.0, -8.8], [112.0, -8.7],
            [110.0, -8.0], [108.0, -7.8], [106.0, -7.0],
            [105.2, -5.9]
        ]
    },
    {
        id: "bali",
        name: "Bali",
        color: "#9C27B0",
        polygon: [
            [114.4321, -8.1704], [114.6000, -8.1500], [114.8000, -8.2000],
            [115.0000, -8.2500], [115.2000, -8.3000], [115.4000, -8.3500],
            [115.7114, -8.3936], [115.7000, -8.5000], [115.5000, -8.6000],
            [115.3000, -8.6500], [115.1616, -8.8505], [114.8000, -8.7500],
            [114.5000, -8.8000], [114.4321, -8.1704], [115.1840, -8.0616]
        ]
    },
    {
        id: "ntb",
        name: "Nusa Tenggara Barat",
        color: "#FF9800",
        polygon: [
            [115.8, -8.2], [116.5, -8.4], [117.5, -8.6],
            [118.5, -8.6], [119.0, -8.9], [118.2, -9.1],
            [116.0, -9.0], [115.8, -8.2]
        ]
    },
    {
        id: "ntt",
        name: "Nusa Tenggara Timur",
        color: "#03A9F4",
        polygon: [
            [119.1, -8.3], [120.0, -8.5], [121.5, -8.6],
            [123.0, -8.4], [125.0, -8.3], [125.2, -9.0],
            [124.0, -9.5], [122.0, -9.7], [120.5, -9.5],
            [119.1, -8.3]
        ]
    },
    {
        id: "kalimantan",
        name: "Kalimantan (Borneo)",
        color: "#8BC34A",
        polygon: [
            [109.0, 1.0], [110.5, 2.0], [112.0, 3.5],
            [114.5, 4.5], [116.0, 4.2], [117.5, 3.0],
            [118.0, 1.0], [117.0, -1.0], [116.0, -3.0],
            [114.0, -3.5], [111.0, -3.0], [110.0, -1.0],
            [109.0, 1.0]
        ]
    },
    {
        id: "sulawesi",
        name: "Sulawesi (Celebes)",
        color: "#FF5722",
        polygon: [
            [119.0, 1.5], [120.5, 1.0], [122.0, 0.5],
            [123.0, -0.5], [124.0, -1.5], [125.0, -3.5],
            [122.5, -4.5], [121.0, -5.5], [120.0, -5.0],
            [119.5, -3.5], [119.0, -2.0], [118.5, -0.5],
            [119.0, 1.5]
        ]
    },
    {
        id: "maluku",
        name: "Maluku",
        color: "#3F51B5",
        polygon: [
            [126.0, -3.0], [127.5, -3.2], [128.0, -3.5],
            [129.0, -4.0], [130.0, -4.5], [130.5, -5.5],
            [131.0, -7.0], [129.0, -7.5], [128.0, -7.0],
            [127.0, -5.5], [126.0, -3.0]
        ]
    },
    {
        id: "halmahera",
        name: "Halmahera",
        color: "#673AB7",
        polygon: [
            [127.5, 1.0], [128.0, 0.5], [128.5, -0.5],
            [129.0, -1.5], [127.5, -1.0], [127.0, 0.0],
            [127.5, 1.0]
        ]
    },
    {
        id: "papua",
        name: "Papua",
        color: "#795548",
        polygon: [
            [130.5, -1.0], [132.0, -1.5], [134.0, -2.0],
            [136.0, -2.5], [138.0, -3.0], [140.0, -3.5],
            [141.0, -4.0], [141.0, -8.0], [139.0, -8.5],
            [137.0, -8.0], [135.0, -7.0], [133.0, -5.5],
            [131.0, -4.0], [130.5, -1.0]
        ]
    },
    {
        id: "small-islands",
        name: "Small Islands",
        color: "#607D8B",
        polygon: [
            [104.0, -5.0], [105.0, -5.2], [105.5, -5.5],
            [105.0, -6.0], [104.5, -5.5], [104.0, -5.0]
        ]
    }
];

// Indonesia's approximate boundaries
const INDONESIA_BOUNDS = {
    minLat: -11.0,  // Southern boundary
    maxLat: 6.0,    // Northern boundary
    minLng: 95.0,   // Western boundary
    maxLng: 141.0   // Eastern boundary
};

// Check if a point is inside a polygon
function isPointInPolygon(point, polygon) {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i][0], yi = polygon[i][1];
        const xj = polygon[j][0], yj = polygon[j][1];

        const intersect = ((yi > point[1]) != (yj > point[1])) &&
            (point[0] < (xj - xi) * (point[1] - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}

// Get selected islands
function getSelectedIslands() {
    return ISLANDS.filter(island => {
        const checkbox = document.getElementById(island.id);
        return checkbox && checkbox.checked;
    });
}

// Generate a random coordinate within selected islands
function generateCoordinate() {
    const selectedIslands = getSelectedIslands();

    // If no islands selected, return null
    if (selectedIslands.length === 0) {
        return null;
    }

    // Randomly select one of the checked islands
    const randomIslandIndex = Math.floor(Math.random() * selectedIslands.length);
    const selectedIsland = selectedIslands[randomIslandIndex];

    let attempts = 0;
    let point;

    // Find bounding box for the selected island
    const lngs = selectedIsland.polygon.map(p => p[0]);
    const lats = selectedIsland.polygon.map(p => p[1]);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);

    do {
        // Generate random coordinates within the island's bounding box
        const lng = minLng + Math.random() * (maxLng - minLng);
        const lat = minLat + Math.random() * (maxLat - minLat);

        point = [lng, lat];
        attempts++;

        // After many attempts, just return a point in the bounding box
        if (attempts > 100) {
            break;
        }
    } while (!isPointInPolygon(point, selectedIsland.polygon));

    return {
        latitude: point[1].toFixed(6),
        longitude: point[0].toFixed(6),
        island: selectedIsland.name
    };
}

// Create Google Maps URL
function createGoogleMapsUrl(latitude, longitude) {
    return `https://www.google.com/maps?q=${latitude},${longitude}`;
}

// UI Functions
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Leaflet map
    const map = L.map('leaflet-map').setView([-2.5, 118], 5);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Load GeoJSON data for Indonesia
    fetch('./indonesia.geojson')
        .then(response => response.json())
        .then(data => {
            const geoJsonLayer = L.geoJSON(data, {
                style: feature => ({
                    color: '#3388ff',
                    weight: 2,
                    fillOpacity: 0.2
                }),
                onEachFeature: (feature, layer) => {
                    layer.bindPopup(feature.properties.name);
                }
            }).addTo(map);

            // Fit map bounds to the GeoJSON layer
            map.fitBounds(geoJsonLayer.getBounds());
        })
        .catch(error => {
            console.error('Error loading GeoJSON:', error);
        });
    const markers = L.layerGroup().addTo(map);

    const generateBtn = document.getElementById('generate-btn');
    const numCoordsInput = document.getElementById('num-coords');
    const outputDiv = document.getElementById('coordinates-output');
    const copyAllBtn = document.getElementById('copy-all-btn');
    const historyList = document.getElementById('history-list');
    const selectAllBtn = document.getElementById('select-all-btn');
    const selectNoneBtn = document.getElementById('select-none-btn');

    let coordinateHistory = [];

    // Select All and Select None buttons
    selectAllBtn.addEventListener('click', () => {
        ISLANDS.forEach(island => {
            const checkbox = document.getElementById(island.id);
            if (checkbox) checkbox.checked = true;
        });
    });

    selectNoneBtn.addEventListener('click', () => {
        ISLANDS.forEach(island => {
            const checkbox = document.getElementById(island.id);
            if (checkbox) checkbox.checked = false;
        });
    });

    // Generate coordinates
    generateBtn.addEventListener('click', () => {
        const count = parseInt(numCoordsInput.value) || 1;
        const coordinates = [];

        // Check if any islands are selected
        const selectedIslands = getSelectedIslands();
        if (selectedIslands.length === 0) {
            alert("Please select at least one island");
            return;
        }

        outputDiv.innerHTML = '';
        markers.clearLayers();

        for (let i = 0; i < count; i++) {
            const coord = generateCoordinate();
            coordinates.push(coord);

            // Add marker to map
            const lat = parseFloat(coord.latitude);
            const lng = parseFloat(coord.longitude);
            const marker = L.marker([lat, lng]).addTo(markers);
            marker.bindPopup(`<b>Point ${i + 1}</b><br>${lat}, ${lng}<br>Island: ${coord.island}`);

            const coordDiv = document.createElement('div');
            coordDiv.className = 'coordinate-display bg-gray-50 border border-gray-300 rounded-lg p-3 mb-2 shadow-sm';

            const coordText = document.createElement('div');
            coordText.className = 'coord-text font-medium text-gray-800';
            coordText.textContent = `${i + 1}. ${coord.latitude}, ${coord.longitude} (${coord.island})`;
            coordDiv.appendChild(coordText);

            const buttonGroup = document.createElement('div');
            buttonGroup.className = 'button-group flex gap-2 mt-2';

            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700';
            copyBtn.textContent = 'Copy';
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(`${coord.latitude}, ${coord.longitude}`);
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            });

            const mapsBtn = document.createElement('button');
            mapsBtn.className = 'maps-btn bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700';
            mapsBtn.textContent = 'Google Maps';
            mapsBtn.addEventListener('click', () => {
                const mapsUrl = createGoogleMapsUrl(coord.latitude, coord.longitude);
                window.open(mapsUrl, '_blank');
            });

            const locateBtn = document.createElement('button');
            locateBtn.className = 'locate-btn bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700';
            locateBtn.textContent = 'Show on Map';
            locateBtn.addEventListener('click', () => {
                map.setView([lat, lng], 12);
                marker.openPopup();
            });

            buttonGroup.appendChild(copyBtn);
            buttonGroup.appendChild(mapsBtn);
            buttonGroup.appendChild(locateBtn);
            coordDiv.appendChild(buttonGroup);
            outputDiv.appendChild(coordDiv);
        }

        // Fit map to all markers if there are multiple
        if (coordinates.length > 1) {
            const group = L.featureGroup(markers.getLayers());
            map.fitBounds(group.getBounds(), { padding: [30, 30] });
        } else if (coordinates.length === 1) {
            map.setView([
                parseFloat(coordinates[0].latitude),
                parseFloat(coordinates[0].longitude)
            ], 10);
        }

        // Add to history
        if (coordinates.length > 0) {
            const timestamp = new Date().toLocaleTimeString();
            const historyEntry = {
                timestamp,
                coordinates,
                selectedIslandIds: selectedIslands.map(island => island.id)
            };

            coordinateHistory.unshift(historyEntry);
            if (coordinateHistory.length > 10) {
                coordinateHistory.pop();
            }

            updateHistoryDisplay();
        }
    });

    // Copy all coordinates
    copyAllBtn.addEventListener('click', () => {
        const allCoords = Array.from(document.querySelectorAll('.coord-text'))
            .map(div => {
                const text = div.textContent;
                // Extract just the coordinates part, removing island name
                const coordPart = text.split('(')[0].trim();
                return coordPart.substring(coordPart.indexOf('.') + 1).trim();
            })
            .join('\n');

        navigator.clipboard.writeText(allCoords);
        copyAllBtn.textContent = 'Copied All!';
        setTimeout(() => {
            copyAllBtn.textContent = 'Copy All Coordinates';
        }, 2000);
    });

    // Update history display
    function updateHistoryDisplay() {
        // Clear existing history display   
        historyList.innerHTML = '';

        if (coordinateHistory.length === 0) {
            const emptyMsg = document.createElement('div');
            emptyMsg.className = 'text-gray-500 text-center py-4';
            emptyMsg.textContent = 'No history yet. Generate coordinates to see them here.';
            historyList.appendChild(emptyMsg);
            return;
        }

        coordinateHistory.forEach((entry, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item bg-white border border-gray-300 rounded-lg p-3 mb-2 shadow-sm hover:bg-gray-100 cursor-pointer';

            const coordCount = entry.coordinates.length;

            // Get the islands used in this history entry
            const islandNames = entry.selectedIslandIds
                .map(id => ISLANDS.find(island => island.id === id)?.name || id)
                .join(", ");

            historyItem.textContent = `${entry.timestamp} - ${coordCount} coordinate${coordCount !== 1 ? 's' : ''} (${islandNames})`;

            historyItem.addEventListener('click', () => {
                // Set the checkboxes to match the history state
                ISLANDS.forEach(island => {
                    const checkbox = document.getElementById(island.id);
                    if (checkbox) {
                        checkbox.checked = entry.selectedIslandIds.includes(island.id);
                    }
                });

                outputDiv.innerHTML = '';
                markers.clearLayers();

                entry.coordinates.forEach((coord, i) => {
                    // Add marker to map
                    const lat = parseFloat(coord.latitude);
                    const lng = parseFloat(coord.longitude);
                    const marker = L.marker([lat, lng]).addTo(markers);
                    marker.bindPopup(`<b>Point ${i + 1}</b><br>${lat}, ${lng}<br>Island: ${coord.island}`);

                    const coordDiv = document.createElement('div');
                    coordDiv.className = 'coordinate-display bg-gray-50 border border-gray-300 rounded-lg p-3 mb-2 shadow-sm';

                    const coordText = document.createElement('div');
                    coordText.className = 'coord-text font-medium text-gray-800';
                    coordText.textContent = `${i + 1}. ${coord.latitude}, ${coord.longitude} (${coord.island})`;
                    coordDiv.appendChild(coordText);

                    const buttonGroup = document.createElement('div');
                    buttonGroup.className = 'button-group flex gap-2 mt-2';

                    const copyBtn = document.createElement('button');
                    copyBtn.className = 'copy-btn bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700';
                    copyBtn.textContent = 'Copy';
                    copyBtn.addEventListener('click', () => {
                        navigator.clipboard.writeText(`${coord.latitude}, ${coord.longitude}`);
                        copyBtn.textContent = 'Copied!';
                        setTimeout(() => {
                            copyBtn.textContent = 'Copy';
                        }, 2000);
                    });

                    const mapsBtn = document.createElement('button');
                    mapsBtn.className = 'maps-btn bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700';
                    mapsBtn.textContent = 'Google Maps';
                    mapsBtn.addEventListener('click', () => {
                        const mapsUrl = createGoogleMapsUrl(coord.latitude, coord.longitude);
                        window.open(mapsUrl, '_blank');
                    });

                    const locateBtn = document.createElement('button');
                    locateBtn.className = 'locate-btn bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700';
                    locateBtn.textContent = 'Show on Map';
                    locateBtn.addEventListener('click', () => {
                        map.setView([lat, lng], 12);
                        marker.openPopup();
                    });

                    buttonGroup.appendChild(copyBtn);
                    buttonGroup.appendChild(mapsBtn);
                    buttonGroup.appendChild(locateBtn);
                    coordDiv.appendChild(buttonGroup);
                    outputDiv.appendChild(coordDiv);
                });

                // Fit map to all markers
                if (entry.coordinates.length > 1) {
                    const group = L.featureGroup(markers.getLayers());
                    map.fitBounds(group.getBounds(), { padding: [30, 30] });
                } else if (entry.coordinates.length === 1) {
                    map.setView([
                        parseFloat(entry.coordinates[0].latitude),
                        parseFloat(entry.coordinates[0].longitude)
                    ], 10);
                }
            });

            historyList.appendChild(historyItem);
        });
    }

    // Initialize history display
    updateHistoryDisplay();

    // Add island checkboxes change listeners
    ISLANDS.forEach(island => {
        const checkbox = document.getElementById(island.id);
        if (checkbox) {
            checkbox.addEventListener('change', function () {
                const poly = polygonLayers[island.id];
                if (this.checked) {
                    poly.setStyle({ fillOpacity: 0.2 });
                } else {
                    poly.setStyle({ fillOpacity: 0.05 });
                }
            });
        }
    });

});
