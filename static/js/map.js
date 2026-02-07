const map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Use a FeatureGroup to group markers
const group = new L.featureGroup().addTo(map);

markers.forEach(m => {
    const label = `<b>${m.name}</b><br>${m.text}`;
    
    // Add marker directly to the group
    L.marker([m.latitude, m.longitude])
     .bindPopup(label)
     .addTo(group);
});

// Fit the map to the group's bounds
if (markers.length > 0) {
    map.fitBounds(group.getBounds(), { padding: [20, 20] });
}