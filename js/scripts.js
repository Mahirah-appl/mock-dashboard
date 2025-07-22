document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('You selected: ' + this.textContent);
        // Add your navigation or logic here
    });
});

/* TOPBAR NAVIGATION - HAMBURGER MENU */
document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.topbar-hamburger');
    const menu = document.querySelector('.topbar-menu');
    if (hamburger && menu) {
        hamburger.addEventListener('click', function () {
            menu.classList.toggle('show');
        });
    }

    // Dropdown toggle for mobile
    document.querySelectorAll('.dropdown').forEach(function(drop) {
        drop.addEventListener('click', function(e) {
            if (window.innerWidth <= 760) {
                e.stopPropagation();
                drop.classList.toggle('open');
            }
        });
    });
});

/* BUSINESS RESOURCES HUB - SMALL BUSINESS RESOURCES  */
document.addEventListener('DOMContentLoaded', function() {
    const startupLink = document.getElementById('startup-link');
    const mainContent = document.querySelector('.main-content');
    if (startupLink && mainContent) {
        startupLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.innerHTML = `
                <section>
                    <h1>Startup & Growth Tools</h1>
                    <ul style="text-align:left; max-width:600px; margin:2rem auto;">
                    <ul>
                        <li>How to register a business</li>
                        <li>Local licensing/permit guides</li>
                        <li>Business plan templates</li>
                        <li>Accounting & tax basics</li>
                    </ul>
                </section>
            `;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const startupLink = document.getElementById('startup-link2');
    const mainContent = document.querySelector('.main-content');
    if (startupLink && mainContent) {
        startupLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.innerHTML = `
                <section>
                    <h1>Connections and Mentorship</h1>
                    <ul>
                        <li>County business network</li>
                        <li>Partner agency directory (e.g., chambers, banks, rural lenders)</li>
                        <li>Access to advisors or peer mentors</li>
                    </ul>
                </section>
            `;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const startupLink = document.getElementById('startup-link3');
    const mainContent = document.querySelector('.main-content');
    if (startupLink && mainContent) {
        startupLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.innerHTML = `
                <section>
                    <h1>Funding & Loan Info</h1>
                    <ul>
                        <li>County-level grant programs</li>
                        <li>Federal/provincial business grants</li>
                        <li>Microloans and application links</li>
                    </ul>
                </section>
            `;
        });
    }
});

/* BUSINESS RESOURCES HUB - AGRICULTURE RESOURCES  */
document.addEventListener('DOMContentLoaded', function() {
    const startupLink = document.getElementById('startup-link4');
    const mainContent = document.querySelector('.main-content');
    if (startupLink && mainContent) {
        startupLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.innerHTML = `
                <section>
                    <h1>Startup & Growth Tools</h1>
                    <ul>
                        <li>How to register a business</li>
                        <li>Local licensing/permit guides</li>
                        <li>Business plan templates</li>
                        <li>Accounting & tax basics</li>
                    </ul>
                </section>
            `;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const startupLink = document.getElementById('startup-link5');
    const mainContent = document.querySelector('.main-content');
    if (startupLink && mainContent) {
        startupLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.innerHTML = `
                <section>
                    <h1>Connections and Mentorship</h1>
                    <ul>
                        <li>County business network</li>
                        <li>Partner agency directory (e.g., chambers, banks, rural lenders)</li>
                        <li>Access to advisors or peer mentors</li>
                    </ul>
                </section>
            `;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const startupLink = document.getElementById('startup-link6');
    const mainContent = document.querySelector('.main-content');
    if (startupLink && mainContent) {
        startupLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.innerHTML = `
                <section>
                    <h1>Funding & Loan Info</h1>
                    <ul>
                        <li>County-level grant programs</li>
                        <li>Federal/provincial business grants</li>
                        <li>Microloans and application links</li>
                    </ul>
                </section>
            `;
        });
    }
});

/* JOB SUPPORTS - JOB READY TOOLS  */
document.addEventListener('DOMContentLoaded', function() {
    const startupLink = document.getElementById('startup-link7');
    const mainContent = document.querySelector('.main-content');
    if (startupLink && mainContent) {
        startupLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.innerHTML = `
                <section>
                    <h1>Training Providers</h1>
                    <ul>
                        <li>List of providers offering trainings</li>
                    </ul>
                </section>
            `;
        });
    }
});

/* JOB SUPPORTS - Employer Listing  */
document.addEventListener('DOMContentLoaded', function() {
    const startupLink = document.getElementById('startup-link8');
    const mainContent = document.querySelector('.main-content');
    if (startupLink && mainContent) {
        startupLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.innerHTML = `
                <section>
                    <h1>Work/Internships Placements</h1>
                    <ul>
                        <li>List or Maps of places offering Work/Interships</li>
                    </ul>
                </section>
            `;
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const startupLink = document.getElementById('startup-link9');
    const mainContent = document.querySelector('.main-content');
    if (startupLink && mainContent) {
        startupLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.innerHTML = `
                <section>
                    <h1>Tips/FAQs</h1>
                    <ul>
                        <li>List of tips and FAQs</li>
                    </ul>
                </section>
            `;
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const startupLink = document.getElementById('startup-link10');
    const mainContent = document.querySelector('.main-content');
    if (startupLink && mainContent) {
        startupLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.innerHTML = `
                <section>
                    <h1>Training Calendars</h1>
                    <ul>
                        <li>Calendars with training date</li>
                    </ul>
                </section>
            `;
        });
    }
});

/* SUPPORT TOOLS - FIND A BUSINESS  */
document.addEventListener('DOMContentLoaded', function () {
    // Only initialize if we're on the support-tools page
    if (!document.getElementById('business-map')) return;
    // Center on Stettler County
    var map = L.map('business-map').setView([52.3167, -112.7167], 10);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // ADD GEOJSON REGION OUTLINE HERE
    fetch('altalis_export_22-07-2025.geojson')
    .then(response => {
        console.log('Fetch response status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('GeoJSON data loaded:', data);
        console.log('Number of features:', data.features ? data.features.length : 'No features property');
        
        const geoLayer = L.geoJSON(data, {
            style: {
                color: '#D27D2D',        // Mustard color border
                weight: 3,               // Border thickness
                opacity: 0.8,            // Border opacity
                fillColor: '#D27D2D',    // Fill color
                fillOpacity: 0.1,        // Fill opacity (very light)
                dashArray: null          // Solid line
            }
        }).addTo(map);

        console.log('GeoJSON layer added to map');
        
        // Fit the map view to the region bounds
        const bounds = geoLayer.getBounds();
        console.log('Layer bounds:', bounds);
        map.fitBounds(bounds);
        
    })
    .catch(error => {
        console.error('Error loading GeoJSON:', error);
        console.error('Make sure the file altalis_export_22-07-2025.geojson exists in your project root');
    });

    const industryIcons = {
        'Retail': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        }),
        'Agriculture': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        }),
        'Professional Services': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        }),
        'Groceries & Local Foods': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        }),
        'Building Supplies': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        }),
        'Construction': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        }),
        'Education': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        }),
        'Tourism & Recreation': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        }),
        'Industrial': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        })
        // Add more industries/colors as needed
    };


    fetch('js/businesses-list.csv')
      .then(response => response.text())
      .then(csv => {
        const result = Papa.parse(csv, { header: true });
        const businesses = result.data.filter(row => row.lat && row.lng);

        var markers = [];

        // 1. Create markers
        businesses.forEach(function(biz, idx) {
            var marker = L.marker([parseFloat(biz.lat), parseFloat(biz.lng)], {
                icon: industryIcons[biz.industry] || industryIcons['Small Business']
            })
            .addTo(map)
            .bindPopup(
                `<b>${biz.name}</b><br>
                ${biz.phone ? 'Phone: ' + biz.phone + '<br>' : ''}
                ${biz.email ? 'Email: ' + biz.email + '<br>' : ''}
                ${biz.addess ? 'Address: ' + biz.addess + '<br>' : ''}
                ${biz.industry ? 'Industry: ' + biz.industry : ''}`
            );
            marker.industry = biz.industry;
            markers.push(marker);
        });

        // 2. Create business list tiles
        var listContainer = document.createElement('div');
        listContainer.id = 'business-list';
        listContainer.style.margin = '2rem auto';
        listContainer.style.maxWidth = '1200px';
        listContainer.style.padding = '0 2rem';
        listContainer.style.display = 'grid';
        listContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
        listContainer.style.gap = '1.5rem';

        const markerColors = {
            'Retail': '#ff4d4d',
            'Agriculture': '#4caf50',
            'Professional Services': '#1976d2',
            'Groceries & Local Foods': '#7B7B7B',
            'Building Supplies': 'orange',
            'Construction': '#ff9800',
            'Education': '#FFD326',
            'Tourism & Recreation': '#3D3D3D',
            'Industrial': '#9C2BCB'
        };

        businesses.forEach((biz, idx) => {
            var tile = document.createElement('div');
            tile.className = 'business-tile';
            tile.style.background = markerColors[biz.industry] ? markerColors[biz.industry] + '22' : '#f7f7f7';
            tile.style.borderRadius = '12px';
            tile.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
            tile.style.padding = '1rem';
            tile.style.cursor = 'pointer';
            tile.style.transition = 'box-shadow 0.2s';
            tile.style.border = '2px solid #e0e0e0';

            tile.innerHTML = `
                <div style="font-weight:bold; color:#1976d2; font-size:1.1em;">${biz.name}</div>
                ${biz.address ? `<div style="font-size:0.95em; color:#333;">${biz.address}</div>` : ''}
                ${biz.phone ? `<div style="font-size:0.95em; color:#333;">${biz.phone}</div>` : ''}
            `;

            tile.addEventListener('click', function() {
                var marker = markers[idx];
                if (marker) {
                    map.setView(marker.getLatLng(), 14, { animate: true });
                    marker.openPopup();
                }
            });

            tile.addEventListener('mouseover', function() {
                tile.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                tile.style.border = '2px solid #1976d2';
            });
            tile.addEventListener('mouseout', function() {
                tile.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                tile.style.border = '2px solid #e0e0e0';
            });

            listContainer.appendChild(tile);
        });

        // Insert the tile grid after the map
        var mapSection = document.querySelector('.map-section');
        if (mapSection) {
            mapSection.appendChild(listContainer);
        } else {
            var mapEl = document.getElementById('business-map');
            if (mapEl && mapEl.parentNode) {
                mapEl.parentNode.insertBefore(listContainer, mapEl.nextSibling);
            }
        }

        // 3. Add legend to the map
        var legend = L.control({ position: 'topright' });
        legend.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'map-legend');
            div.innerHTML += '<h4>Industry Legend</h4>';
            div.innerHTML += '<div class="legend-item" data-industry="Retail" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png" style="height:20px;"> Retail</div>';
            div.innerHTML += '<div class="legend-item" data-industry="Agriculture" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png" style="height:20px;"> Agriculture</div>';
            div.innerHTML += '<div class="legend-item" data-industry="Professional Services" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png" style="height:20px;"> Professional Services</div>';
            div.innerHTML += '<div class="legend-item" data-industry="Groceries & Local Foods" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png" style="height:20px;"> Groceries & Local Foods</div>';
            div.innerHTML += '<div class="legend-item" data-industry="Building Supplies" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png" style="height:20px;"> Building Supplies</div>';
            div.innerHTML += '<div class="legend-item" data-industry="Construction" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png" style="height:20px;"> Construction</div>';
            div.innerHTML += '<div class="legend-item" data-industry="Education" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png" style="height:20px;"> Education</div>';
            div.innerHTML += '<div class="legend-item" data-industry="Tourism & Recreation" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png" style="height:20px;"> Tourism & Recreation</div>';
            div.innerHTML += '<div class="legend-item" data-industry="Industrial" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png" style="height:20px;"> Industrial</div>';
            // Add more as needed
            return div;
        };
        legend.addTo(map);

        // 4. Attach legend click handlers
        setTimeout(function() {
            document.querySelectorAll('.legend-item').forEach(function(item) {
                item.onclick = function() {
                    const isSelected = this.classList.contains('selected');
                    document.querySelectorAll('.legend-item').forEach(i => i.classList.remove('selected'));
                    if (isSelected) {
                        markers.forEach(function(marker) {
                            if (!map.hasLayer(marker)) map.addLayer(marker);
                        });
                    } else {
                        this.classList.add('selected');
                        var selected = this.getAttribute('data-industry');
                        markers.forEach(function(marker) {
                            if (marker.industry === selected) {
                                if (!map.hasLayer(marker)) map.addLayer(marker);
                            } else {
                                if (map.hasLayer(marker)) map.removeLayer(marker);
                            }
                        });
                    }
                };
            });
        }, 200);

    }); // END fetch

    // // Store marker references
    // var markers = [];

    // businesses.forEach(function(biz, idx) {
    //     var marker = L.marker([biz.lat, biz.lng], {
    //         icon: industryIcons[biz.industry] || industryIcons['Small Business']
    //     })
    //     .addTo(map)
    //     .bindPopup(
    //         `<b>${biz.name}</b><br>
    //         ${biz.phone ? 'Phone: ' + biz.phone + '<br>' : ''}
    //         ${biz.address ? 'Address: ' + biz.address + '<br>' : ''}`
    //     );
    //     marker.industry = biz.industry;
    //     markers.push(marker);
    // });


    // // Create business list below the map as tiles
    // var listContainer = document.createElement('div');
    // listContainer.id = 'business-list';
    // listContainer.style.margin = '2rem auto'; // Center the grid
    // listContainer.style.maxWidth = '1200px'; 
    // listContainer.style.padding = '0 2rem'; 
    // listContainer.style.display = 'grid';
    // listContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    // listContainer.style.gap = '1.5rem';

    // const markerColors = {
    //     'Retail': '#ff4d4d',           // Red marker
    //     'Agriculture': '#4caf50',             // Green marker
    //     'Professional Services': '#1976d2',           // Blue marker
    //     'Groceries & Local Foods': 'grey', // Grey marker
    //     'Building Supplies': 'orange', // Orange marker
    //     'Construction': '#ff9800', // Yellow marker
    //     'Education': '#gold', // Dark Green marker
    //     'Tourism & Recreation': 'black', // Brown marker  
    //     'Industrial': '#violet' // Pink marker

    //     // Add more if needed
    // };

    // businesses.forEach((biz, idx) => {
    //     var tile = document.createElement('div');
    //     tile.className = 'business-tile';
    //     tile.style.background = markerColors[biz.industry] ? markerColors[biz.industry] + '22' : '#f7f7f7'; // '22' for light shade
    //     tile.style.borderRadius = '12px';
    //     tile.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    //     tile.style.padding = '1rem';
    //     tile.style.cursor = 'pointer';
    //     tile.style.transition = 'box-shadow 0.2s';
    //     tile.style.border = '2px solid #e0e0e0';

    //     tile.innerHTML = `
    //         <div style="font-weight:bold; color:#1976d2; font-size:1.1em;">${biz.name}</div>
    //         ${biz.address ? `<div style="font-size:0.95em; color:#333;">${biz.address}</div>` : ''}
    //         ${biz.phone ? `<div style="font-size:0.95em; color:#333;">${biz.phone}</div>` : ''}
    //     `;

    //     tile.addEventListener('click', function() {
    //         var marker = markers[idx];
    //         if (marker) {
    //             map.setView(marker.getLatLng(), 14, { animate: true });
    //             marker.openPopup();
    //         }
    //     });

    //     tile.addEventListener('mouseover', function() {
    //         tile.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
    //         tile.style.border = '2px solid #1976d2';
    //     });
    //     tile.addEventListener('mouseout', function() {
    //         tile.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    //         tile.style.border = '2px solid #e0e0e0';
    //     });

    //     listContainer.appendChild(tile);
    // });

    // // Insert the tile grid after the map
    // var mapSection = document.querySelector('.map-section');
    // if (mapSection) {
    //     mapSection.appendChild(listContainer);
    // } else {
    //     var mapEl = document.getElementById('business-map');
    //     if (mapEl && mapEl.parentNode) {
    //         mapEl.parentNode.insertBefore(listContainer, mapEl.nextSibling);
    //     }
    // }

    // // Add click event to each business in the list
    // listContainer.querySelectorAll('a[data-idx]').forEach(function(link) {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         var idx = parseInt(this.getAttribute('data-idx'));
    //         var marker = markers[idx];
    //         if (marker) {
    //             map.setView(marker.getLatLng(), 14, { animate: true });
    //             marker.openPopup();
    //         }
    //     });
    // });

    // // Add legend to the map
    // if (typeof map !== 'undefined') {
    //   var legend = L.control({ position: 'topright' });

    //   legend.onAdd = function (map) {
    //       var div = L.DomUtil.create('div', 'map-legend');
    //       div.innerHTML += '<h4>Industry Legend</h4>';
    //       div.innerHTML += '<div class="legend-item" data-industry="Retail" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png" style="height:20px;"> Retail</div>';
    //       div.innerHTML += '<div class="legend-item" data-industry="Farm" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png" style="height:20px;"> Farm</div>';
    //       div.innerHTML += '<div class="legend-item" data-industry="Health" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png" style="height:20px;"> Health</div>';
    //       div.innerHTML += '<div class="legend-item" data-industry="Groceries & Local Foods" style="cursor:pointer;"><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png" style="height:20px;"> Groceries & Local Foods</div>';
    //       // div.innerHTML += '<div class="legend-item" data-industry="all" style="cursor:pointer; font-weight:bold; margin-top:8px;">Show All</div>';
    //       return div;
    //   };

    //   legend.addTo(map);

    //   // Attach legend click handlers after legend is in the DOM
    //   setTimeout(function() {
    //     document.querySelectorAll('.legend-item').forEach(function(item) {
    //         item.onclick = function() {
    //             const isSelected = this.classList.contains('selected');
    //             // Remove 'selected' from all legend items
    //             document.querySelectorAll('.legend-item').forEach(i => i.classList.remove('selected'));

    //             if (isSelected) {
    //                 // If already selected, unselect and show all
    //                 markers.forEach(function(marker) {
    //                     if (!map.hasLayer(marker)) map.addLayer(marker);
    //                 });
    //             } else {
    //                 // Add 'selected' to the clicked item
    //                 this.classList.add('selected');
    //                 var selected = this.getAttribute('data-industry');
    //                 markers.forEach(function(marker) {
    //                     if (selected === 'all' || marker.industry === selected) {
    //                         if (!map.hasLayer(marker)) map.addLayer(marker);
    //                     } else {
    //                         if (map.hasLayer(marker)) map.removeLayer(marker);
    //                     }
    //                 });
    //             }
    //         };
    //     });
    //   }, 200);
    //     }
});





// /* NEWS SNAPSHOT - RSS FEED */
// document.addEventListener('DOMContentLoaded', function() {
//   fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.cbc.ca/cmlink/rss-canada')
//     .then(response => response.json())
//     .then(data => {
//       const newsBoxes = document.querySelectorAll('.snapshot-box');
//       if (newsBoxes.length && data.items) {
//         data.items.slice(0, 3).forEach((item, idx) => {
//           // Try enclosure image first
//           let imgUrl = item.enclosure && item.enclosure.link
//             ? item.enclosure.link
//             : null;

//           // If no enclosure image, try to extract from description
//           if (!imgUrl && item.description) {
//             const match = item.description.match(/<img[^>]+src="([^">]+)"/);
//             if (match && match[1]) imgUrl = match[1];
//           }

//           newsBoxes[idx].style.backgroundImage = imgUrl
//             ? `url('${imgUrl}')`
//             : 'none';
//           newsBoxes[idx].style.backgroundSize = 'cover';
//           newsBoxes[idx].style.backgroundPosition = 'center';
//           newsBoxes[idx].style.color = '#fff';

//           newsBoxes[idx].innerHTML = `
//             <div style="background: rgba(0,0,0,0.5); border-radius: 12px; padding: 1rem;">
//               <div class="snapshot-title">
//                 <a href="${item.link}" target="_blank" style="color: #fff; text-shadow: 1px 1px 4px #000;">${item.title}</a>
//               </div>
//             </div>
//           `;
//         });
//       }
//     });
// });



// STATISTICS DASHBOARD - POPULATION PYRAMID CHART
fetch('js/age-gender.csv')
  .then(response => response.text())
  .then(csv => {
    const result = Papa.parse(csv, { header: true });
    const data = result.data;

    // Aggregate by Age Group and Gender
    const ageGroups = [...new Set(data.map(row => row['Age Group']))].filter(g => g); // Unique age groups
    const maleCounts = {};
    const femaleCounts = {};

    ageGroups.forEach(group => {
      maleCounts[group] = 0;
      femaleCounts[group] = 0;
    });

    data.forEach(row => {
      const group = row['Age Group'];
      console.log(group);
      const gender = row['Gender'];
      const value = Number(row['OriginalValue']);
      if (gender === 'Male') maleCounts[group] += value;
      if (gender === 'Female') femaleCounts[group] += value;
    });

    // Sort ageGroups to start from "0-4"
    const ageOrder = [
        "0-4", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34", "35-39",
        "40-44", "45-49", "50-54", "55-59", "60-64", "65-69", "70-74", "75-79", "80-84", "85-89", "90+"
    ];
    const sortedAgeGroups = ageOrder.filter(group => ageGroups.includes(group)); // <--- REMOVE .reverse()
    console.log(sortedAgeGroups);

    const maleData = sortedAgeGroups.map(group => -maleCounts[group]);
    const femaleData = sortedAgeGroups.map(group => femaleCounts[group]);

    const ctx = document.getElementById('pyramidChart').getContext('2d');
    new Chart(ctx, {
    type: 'bar',
    data: {
        labels: sortedAgeGroups,
        datasets: [
        {
            label: 'Male',
            data: maleData,
            backgroundColor: '#1976d2'
        },
        {
            label: 'Female',
            data: femaleData,
            backgroundColor: '#D27D2D'
        }
        ]
    },
    options: {
        responsive: false, // <--- Add this line
        maintainAspectRatio: false, // <--- Add this line
        animation: {
          duration: 1200,         // Animation duration in ms
          easing: 'easeOutQuart', // Easing function
          animateScale: true,     // For bar/pie charts: scales up from zero
          animateRotate: true     // For pie/doughnut charts: rotates in
        },
        indexAxis: 'y',
        scales: {
        x: {
            stacked: true,
            title: {
                display: true,
                text: 'Population Count',
                color: '#000000' // Black title
                // font: { size: 13 }
            },
            ticks: {
                callback: function(value) {
                    return Math.abs(value);
                },
                color: '#000000', // Black tick labels
                // font: { size: 10 },
                stepSize: 50,
            },
            grid: {
                display: false,
            }

        },
        y: {
            // ticks: { font: { size: 10 } },
            stacked: true,
            reverse: true,
            title: {
                display: true,
                text: 'Age Group',
                color: '#000000' // Black title
                // font: { size: 13 }
            },
            ticks: {
              color: '#000000' // Black tick labels
            }
        }
        },
        plugins: {
            legend: { 
                position: 'bottom',
                labels: {
                    font: { size: 12 },
                    color: '#000000' // Black tick labels
                }

            },
            title: {
                // font: { size: 18 },
                display: true,
                text: '2024 Population Age and Gender Pyramid',
                color: '#000000', // Black title
                font: {
                    size: 16
                }
            },
            tooltip: {
                padding: 16, // Increase tooltip padding
                boxPadding: 8, // Chart.js v4+
                bodyFont: { size: 10 }, // Make tooltip text bigger
                titleFont: { size: 12 },
                callbacks: {
                    label: function(context) {
                        const gender = context.dataset.label;
                        const value = Math.abs(context.parsed.x);
                        return `${gender}: ${value}`;
                    }
                }
            }

        }
    }
    });
    
  });


// Example for a chart with canvas id="pyramidChart"
// addChartCaption('pyramidChart', 'Source: Alberta Regional Dashboard Data');

// STATISTICS DASHBOARD - POPULATION BY YEAR CHART
fetch('js/population-year.csv')
  .then(response => response.text())
  .then(csv => {
    const result = Papa.parse(csv, { header: true });
    const data = result.data;

    // Get unique Local Force Work values
    const localForceWorks = [...new Set(data.map(row => row['Year']))].filter(Boolean);

    // Prepare data for the bar chart
    const totals = localForceWorks.map(lfw =>
      data
        .filter(row => row['Year'] === lfw)
        .reduce((sum, row) => sum + Number(row['Population'] || 0), 0)
    );

    const ctx = document.getElementById('populationYearChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: localForceWorks,
        datasets: [{
          label: 'Total',
          data: totals,
          backgroundColor: '#1976d2'
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        animation: {
          duration: 1200,         // Animation duration in ms
          easing: 'easeOutQuart', // Easing function
          animateScale: true,     // For bar/pie charts: scales up from zero
          animateRotate: true     // For pie/doughnut charts: rotates in
        },
        plugins: {
          title: {
            display: true,
            text: 'Population by Year',
            color: '#000000', // Black title
            font: {
              size: 16
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Total Population',
              color: '#000000' // Black title
            },
            ticks: {
              color: '#000000' // Black tick labels
            },
            grid: {
                display: false,
            }
          },
          y: {
            title: {
              display: true,
              text: 'Year',
              color: '#000000' // Black title
            },
            ticks: {
              color: '#000000' // Black tick labels
            }
          }
        }
      }
    });
  });
// // Example for a chart with canvas id="pyramidChart"
// addChartCaption('populationYearChart', 'Source: Alberta Regional Dashboard Data');

// STATISTICS DASHBOARD - LABOR MARKET CHART
fetch('js/labor-market.csv')
  .then(response => response.text())
  .then(csv => {
    const result = Papa.parse(csv, { header: true });
    const data = result.data;

    // Get unique Local Force Work values
    const localForceWorks = [...new Set(data.map(row => row['Local Work Force']))].filter(Boolean);

    // Prepare data for the bar chart
    const totals = localForceWorks.map(lfw =>
      data
        .filter(row => row['Local Work Force'] === lfw)
        .reduce((sum, row) => sum + Number(row['Total'] || 0), 0)
    );

    const ctx = document.getElementById('laborMarketChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: localForceWorks,
        datasets: [{
          label: 'Total',
          data: totals,
          backgroundColor: '#1976d2'
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        animation: {
          duration: 1200,         // Animation duration in ms
          easing: 'easeOutQuart', // Easing function
          animateScale: true,     // For bar/pie charts: scales up from zero
          animateRotate: true     // For pie/doughnut charts: rotates in
        },
        plugins: {
          title: {
            display: true,
            text: '2021 Local Work Force by Industry',
            color: '#000000', // Black title
            font: {
              size: 16
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Industry',
              color: '#000000' // Black title
            },
            ticks: {
              color: '#000000' // Black tick labels
            },
            grid: {
                display: false,
            }
          },
          y: {
            title: {
              display: true,
              text: 'Local Work Force',
              color: '#000000' // Black title
            },
            ticks: {
              color: '#000000' // Black tick labels
            }
          }
        }
      }
    });
  });
// // Example for a chart with canvas id="pyramidChart"
// addChartCaption('laborMarketChart', 'Source: Statistics Canada 2021 Community Profile Data');

// STATISTICS DASHBOARD - PARTICIPATION RATE CHART
fetch('js/participation-rate.csv')
  .then(response => response.text())
  .then(csv => {
    const result = Papa.parse(csv, { header: true });
    const data = result.data;

    // Get unique periods (years) and genders, sorted
    const periods = [...new Set(data.map(row => row['Period']))].filter(Boolean).sort();
    const genders = [...new Set(data.map(row => row['Gender']))].filter(Boolean);

    // Assign a color for each gender
    const colors = [
      '#D27D2D', '#1976d2', '#388e3c', '#fbc02d'
    ];

    // Prepare datasets for each gender
    const datasets = genders.map((gender, idx) => ({
      label: gender,
      data: periods.map(period => {
        // Sum values for this period/gender (should be one value per period/gender)
        return data
          .filter(row => row['Period'] === period && row['Gender'] === gender)
          .reduce((sum, row) => sum + Number(row['OriginalValue'] || 0), 0);
      }),
      fill: false,
      borderColor: colors[idx % colors.length],
      backgroundColor: colors[idx % colors.length],
      tension: 0.4
    }));

    const ctx = document.getElementById('participationRateChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: periods,
        datasets: datasets
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        animation: {
          duration: 1200,         // Animation duration in ms
          easing: 'easeOutQuart', // Easing function
          animateScale: true,     // For bar/pie charts: scales up from zero
          animateRotate: true     // For pie/doughnut charts: rotates in
        },
        plugins: {
          title: {
            display: true,
            text: 'Historical Participation Rates',
            color: '#000000', // Black title
            font: {
              size: 16
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          },
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 12,
              },
              color: '#000000' // Black tick labels
            }
          }
        },
        interaction: {
          mode: 'index',
          intersect: false
        },
        scales: {
          x: {
            stacked: false, // Not stacked
            grid: {
                display: false,
            },
            ticks: {
              color: '#000000' // Black tick labels
            },
            title: {
              display: true,
              text: 'Year',
              color: '#000000' // Black title
            }
          },
          y: {
            stacked: false, // Not stacked
            title: {
              display: true,
              text: 'Participation Rate',
              color: '#000000' // Black title
            },
            ticks: {
              color: '#000000' // Black tick labels
            }
          }
        }
      }
    });
  });


// STATISTICS DASHBOARD - PERMIT TYPE CHART
fetch('js/building-permit.csv')
  .then(response => response.text())
  .then(csv => {
    const result = Papa.parse(csv, { header: true });
    const data = result.data;

    // Get unique periods (years) and building types, sorted
    const periods = [...new Set(data.map(row => row['Period']))].filter(Boolean).sort();
    const buildingTypes = [...new Set(data.map(row => row['Building Type']))].filter(Boolean);

    // Assign a color for each building type
    const colors = [
      '#1976d2', '#D27D2D', '#388e3c', '#fbc02d', '#7b1fa2', '#0288d1'
    ];

    // Prepare datasets for each building type
    const datasets = buildingTypes.map((type, idx) => ({
      label: type,
      data: periods.map(period => {
        // Sum values for this period/type
        return data
          .filter(row => row['Period'] === period && row['Building Type'] === type)
          .reduce((sum, row) => sum + Number(row['OriginalValue'] || 0), 0);
      }),
      backgroundColor: colors[idx % colors.length]
    }));

    const ctx = document.getElementById('buildingPermitChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: periods,
        datasets: datasets
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        animation: {
        duration: 1200,         // Animation duration in ms
        easing: 'easeOutQuart', // Easing function
        animateScale: true,     // For bar/pie charts: scales up from zero
        animateRotate: true     // For pie/doughnut charts: rotates in
      },
        plugins: {
          title: {
            display: true,
            text: 'Historical Building Permits by Type',
            color: '#000000', // Black title
            font: {
              size: 16
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          },
          legend: {
            position: 'bottom',
            labels: {
              color: '#000000' // Black tick labels
              
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            grid: {
                display: false,
            },
            ticks: {
              color: '#000000' // Black tick labels
            },
            title: {
              display: true,
              text: 'Year',
              color: '#000000' // Black title
            }
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: 'Number of Permits',
              color: '#000000' // Black title
            },
            ticks: {
              color: '#000000' // Black tick labels
            }
          }
        }
      }
    });
  });
// // Example for a chart with canvas id="pyramidChart"
// addChartCaption('buildingPermitChart', 'Source: Alberta Regional Dashboard Data');

// STATISTICS DASHBOARD - BUSINESS AREA CHART
fetch('js/business.csv')
  .then(response => response.text())
  .then(csv => {
    const result = Papa.parse(csv, { header: true });
    const data = result.data;

    // Get unique periods (years) and industries, sorted
    const periods = [...new Set(data.map(row => row['Period']))].filter(Boolean).sort();
    const industries = [...new Set(data.map(row => row['Industry']))].filter(Boolean);

    // Assign a color for each industry
    const colors = [
      '#1976d2', '#D27D2D', '#388e3c', '#fbc02d', '#7b1fa2', '#0288d1',
      '#c62828', '#00897b', '#f57c00', '#6d4c41', '#455a64', '#c0ca33'
    ];

    // Prepare datasets for each industry
    const datasets = industries.map((industry, idx) => ({
      label: industry,
      data: periods.map(period => {
        // Sum values for this period/industry
        return data
          .filter(row => row['Period'] === period && row['Industry'] === industry)
          .reduce((sum, row) => sum + Number(row['OriginalValue'] || 0), 0);
      }),
      fill: true,
      backgroundColor: colors[idx % colors.length] + '99', // semi-transparent
      borderColor: colors[idx % colors.length],
      tension: 0.4
    }));

    const ctx = document.getElementById('businessAreaChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: periods,
        datasets: datasets
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        animation: {
          duration: 1200,         // Animation duration in ms
          easing: 'easeOutQuart', // Easing function
          animateScale: true,     // For bar/pie charts: scales up from zero
          animateRotate: true     // For pie/doughnut charts: rotates in
        },
        plugins: {
          title: {
            display: true,
            text: 'Number of Businesses by Industry',
            color: '#000000', // Black tick labels
            font: {
              size: 16
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          },
          legend: {
            position: 'bottom',
            labels: {
                font: {
                    size: 8 // <-- Change this value to resize the legend text
                },
                color: '#000000' // Black tick labels
                
            }
          }
        },
        interaction: {
          mode: 'index',
          intersect: false
        },
        scales: {
          x: {
            stacked: true,
            grid: {
                display: false,
            },
            ticks: {
              color: '#000000' // Black tick labels
            },
            title: {
              display: true,
              text: 'Year',
              color: '#000000' // Black tick labels
            }
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: 'Number of Businesses',
              color: '#000000' // Black tick labels
            },
            ticks: {
              color: '#000000' // Black tick labels
            }
          }
        }
      }
    });
  });
// // Example for a chart with canvas id="pyramidChart"
// addChartCaption('businessAreaChart', 'Source: Alberta Regional Dashboard Data');


// STATISTICS DASHBOARD - UNEMPLOYMENT RATE CHART
fetch('js/unemployment-rate.csv')
  .then(response => response.text())
  .then(csv => {
    const result = Papa.parse(csv, { header: true });
    const data = result.data;

    // Get unique periods (years) and genders, sorted
    const periods = [...new Set(data.map(row => row['Period']))].filter(Boolean).sort();
    const genders = [...new Set(data.map(row => row['Gender']))].filter(Boolean);

    // Assign a color for each gender
    const colors = [
      '#D27D2D', '#1976d2', '#388e3c', '#fbc02d'
    ];

    // Prepare datasets for each gender
    const datasets = genders.map((gender, idx) => ({
      label: gender,
      data: periods.map(period => {
        // Sum values for this period/gender (should be one value per period/gender)
        return data
          .filter(row => row['Period'] === period && row['Gender'] === gender)
          .reduce((sum, row) => sum + Number(row['OriginalValue'] || 0), 0);
      }),
      fill: false,
      borderColor: colors[idx % colors.length],
      backgroundColor: colors[idx % colors.length],
      tension: 0.4
    }));

    const ctx = document.getElementById('unemploymentRateChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: periods,
        datasets: datasets
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        animation: {
          duration: 1200,         // Animation duration in ms
          easing: 'easeOutQuart', // Easing function
        },
        plugins: {
          title: {
            display: true,
            text: 'Historical Unemployment Rates',
            color: '#000000', // Black tick labels
            font: {
              size: 16
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          },
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 12
              },
              color: '#000000' // Black tick labels
              
            }
          }
        },
        interaction: {
          mode: 'index',
          intersect: false
        },
        scales: {
          x: {
            stacked: false, // Not stacked
            grid: {
                display: false,
            },
            ticks: {
              color: '#000000' // Black tick labels
            },
            title: {
              display: true,
              text: 'Year',
              color: '#000000'
            }
          },
          y: {
            stacked: false, // Not stacked
            title: {
              display: true,
              text: 'Unemployment Rate',
              color: '#000000'
            },
            ticks: {
              color: '#000000' // Black tick labels
            }
          }
        }
      }
    });
  });
// // Example for a chart with canvas id="pyramidChart"
// addChartCaption('unemploymentRateChart', 'Source: Alberta Regional Dashboard Data');

// STATISTICS DASHBOARD - Forecast Employment 
fetch('js/ForecastEmp.csv')
  .then(response => response.text())
  .then(csv => {
    const result = Papa.parse(csv, { header: true });
    const data = result.data;

    // Get unique Local Force Work values
    const localForceWorks = [...new Set(data.map(row => row['Industry']))].filter(Boolean);

    // Prepare data for the bar chart
    const totals = localForceWorks.map(lfw =>
      data
        .filter(row => row['Industry'] === lfw)
        .reduce((sum, row) => sum + Number(row['Employment Growth by Industry (2024-2029)'] || 0), 0)
    );

    const ctx = document.getElementById('forecastEmpChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: localForceWorks,
        datasets: [{
          label: 'Total',
          data: totals,
          backgroundColor: '#1976d2'
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: false,
        maintainAspectRatio: false,
        animation: {
          duration: 1200,         // Animation duration in ms
          easing: 'easeOutQuart', // Easing function
          animateScale: true,     // For bar/pie charts: scales up from zero
          animateRotate: true     // For pie/doughnut charts: rotates in
        },
        plugins: {
          title: {
            display: true,
            text: 'Employment Growth by Industry (2024-2029)',
            color: '#000000',
            font: {
              size: 16
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Employment Growth',
              color: '#000000' // Black title
            },
            ticks: {
              color: '#000000' // Black tick labels
            },
            grid: {
                display: false,
            }
          },
          y: {
            title: {
              display: true,
              text: 'Industry',
              color: '#000000' // Black title
            },
            ticks: {
              color: '#000000' // Black tick labels
            }
          }
        }
      }
    });
  });


// TOP OCCUPATIONS TABLE
fetch('js/TopOcc.csv')
  .then(response => response.text())
  .then(csv => {
    const result = Papa.parse(csv, { header: true });
    const data = result.data.filter(row => row['Top 10 Occupations (2024)']);

    // Get the container for the table
    const tableContainer = document.getElementById('topOccChart');
    
    // Set container to match canvas size with rounded corners
    tableContainer.style.width = '600px';
    tableContainer.style.height = '500px';
    tableContainer.style.overflowY = 'auto';
    tableContainer.style.border = '1px solid #ddd';
    tableContainer.style.borderRadius = '12px'; // Add curved corners
    tableContainer.style.overflow = 'hidden'; // Ensures table content respects the border radius
    
    // Create table HTML
    let tableHTML = `
      <table style="width: 100%; height: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 12px;">
        <thead>
          <tr style="background: #1976d2; color: white;">
            <th style="width: 10%; padding: 12px; text-align: left; border: 1px solid #ddd; position: sticky; top: 0; background: #1976d2;">No.</th>
            <th style="width: 70%; padding: 12px; text-align: left; border: 1px solid #ddd; position: sticky; top: 0; background: #1976d2;">Industry</th>
            <th style="width: 20%; padding: 12px; text-align: left; border: 1px solid #ddd; position: sticky; top: 0; background: #1976d2;">Top 10 Occupations (2024)</th>
          </tr>
        </thead>
        <tbody>
    `;

    data.forEach((row, index) => {
      const industry = row['Industry'];
      const occupation = row['Top 10 Occupations (2024)'];
      
      if (industry && occupation) {
        tableHTML += `
          <tr style="background: ${index % 2 === 0 ? '#f9f9f9' : '#ffffff'};">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #1976d2;">${index + 1}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${industry}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${occupation}</td>
          </tr>
        `;
      }
    });

    tableHTML += `</tbody></table>`;
    
    // Insert the table into the container
    tableContainer.innerHTML = tableHTML;
  })
  .catch(error => {
    console.error('Error loading TopOcc.csv:', error);
    document.getElementById('topOccChart').innerHTML = '<p>Error loading occupation data.</p>';
  });

// STATISTICS DASHBOARD - Forecast Employment 
fetch('js/OccGrowth.csv')
  .then(response => response.text())
  .then(csv => {
    const result = Papa.parse(csv, { header: true });
    const data = result.data;

    // Get unique Local Force Work values
    const localForceWorks = [...new Set(data.map(row => row['Occupations by 5 Digit NOC']))].filter(Boolean);

    // Prepare data for the bar chart
    const totals = localForceWorks.map(lfw =>
      data
        .filter(row => row['Occupations by 5 Digit NOC'] === lfw)
        .reduce((sum, row) => sum + Number(row['Top 10 Fastest Growing Occupations (2024-2029)'] || 0), 0)
    );

    const ctx = document.getElementById('occGrowthChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: localForceWorks,
        datasets: [{
          label: 'Total',
          data: totals,
          backgroundColor: '#1976d2'
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: false,
        maintainAspectRatio: false,
        animation: {
          duration: 1200,         // Animation duration in ms
          easing: 'easeOutQuart', // Easing function
          animateScale: true,     // For bar/pie charts: scales up from zero
          animateRotate: true     // For pie/doughnut charts: rotates in
        },
        plugins: {
          title: {
            display: true,
            text: 'Fastest Growing Occupations in County',
            color: '#000000',
            font: {
              size: 16
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Fastest Growing Occupations',
              color: '#000000'
            },
            ticks: {
              color: '#000000' // Black tick labels
            },
            grid: {
                display: false,
            }
          },
          y: {
            title: {
              display: true,
              text: 'Industry',
              color: '#000000'
            },
            ticks: {
              color: '#000000' // Black tick labels
            },
          }
        }
      }
    });
  });


// TOP OCCUPATIONS TABLE
fetch('js/ForecastGaps.csv')
  .then(response => response.text())
  .then(csv => {
    const result = Papa.parse(csv, { header: true });
    const data = result.data.filter(row => row['Occupations by 5 Digit NOC']);

    // Get the container for the table
    const tableContainer = document.getElementById('forecastGapsChart');
    
    // Set container to match canvas size with rounded corners
    tableContainer.style.width = '600px';
    tableContainer.style.height = '500px';
    tableContainer.style.overflowY = 'auto';
    tableContainer.style.border = '1px solid #ddd';
    tableContainer.style.borderRadius = '12px';
    tableContainer.style.overflow = 'hidden';
    
    // Create table HTML
    let tableHTML = `
      <table style="width: 100%; height: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 12px;">
        <thead>
          <tr style="background: #1976d2; color: white;">
            <th style="width: 10%; padding: 12px; text-align: left; border: 1px solid #ddd; position: sticky; top: 0; background: #1976d2;">No.</th>
            <th style="width: 70%; padding: 12px; text-align: left; border: 1px solid #ddd; position: sticky; top: 0; background: #1976d2;">Occupations by 5 Digit NOC</th>
            <th style="width: 10%; padding: 12px; text-align: left; border: 1px solid #ddd; position: sticky; top: 0; background: #1976d2;">Job Growth</th>
            <th style="width: 10%; padding: 12px; text-align: left; border: 1px solid #ddd; position: sticky; top: 0; background: #1976d2;">Gap</th>
          </tr>
        </thead>
        <tbody>
    `;

    data.forEach((row, index) => {
      const industry = row['Occupations by 5 Digit NOC'];
      const jobgrowth = row['Job Growth'];
      const gap = row['Gap'];
      
      if (industry && jobgrowth && gap) {
        tableHTML += `
          <tr style="background: ${index % 2 === 0 ? '#f9f9f9' : '#ffffff'};">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #1976d2;">${index + 1}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${industry}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${jobgrowth}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${gap}</td>
          </tr>
        `;
      }
    });

    // ADD THE NOTE AS A TABLE ROW
    tableHTML += `
          <tr style="background: #f8f9fa;">
            <td colspan="4" style="padding: 12px; border: 1px solid #ddd; text-align: center; font-size: 11px; color: #666; font-style: italic;">
              <strong>Note:</strong> + indicates a surplus of workers in a specific occupation and - indicates a shortage of workers.
            </td>
          </tr>
        </tbody>
      </table>
    `;
    
    // INSERT THE COMPLETE TABLE INTO THE CONTAINER
    tableContainer.innerHTML = tableHTML;
  })
  .catch(error => {
    console.error('Error loading ForecastGaps.csv:', error);
    document.getElementById('forecastGapsChart').innerHTML = '<p>Error loading forecast gaps data.</p>';
  });




// CHATBOT INTEGRATION
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');

    // Simple keyword-to-link mapping
    const links = [
        { keywords: ['job', 'work', 'career'], url: 'job-listing.html', text: 'Browse local job postings' },
        { keywords: ['business list', 'farm list'], url: 'support-tools.html', text: 'Find business resources' },
        { keywords: ['event', 'calendar'], url: 'training-calendar.html', text: 'View training calendar' },
        { keywords: ['success story', 'business review'], url: 'local-resources.html', text: 'See permit and license info' },
        { keywords: ['ask', 'question', 'support'], url: 'ask-Questions.html', text: 'Ask a question or get support' }
    ];

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const userQuestion = input.value.trim().toLowerCase();
        let response = "Sorry, I couldn't find a related link for your question.";

        for (const item of links) {
            if (item.keywords.some(keyword => userQuestion.includes(keyword))) {
                response = `<a href="${item.url}" target="_blank">${item.text}</a>`;
                break;
            }
        }

        messages.innerHTML += `<div><strong>You:</strong> ${input.value}</div>`;
        messages.innerHTML += `<div><strong>Bot:</strong> ${response}</div>`;
        input.value = '';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const fab = document.getElementById('chatbot-fab');
    const popup = document.getElementById('chatbot-popup');

    fab.addEventListener('click', function() {
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    });

    // Optional: Close chatbot when clicking outside
    document.addEventListener('click', function(e) {
        if (!popup.contains(e.target) && !fab.contains(e.target)) {
            popup.style.display = 'none';
        }
    });
});

// // SEARCH BAR IN ASK QUESTIONS PAGE
// document.addEventListener('DOMContentLoaded', function () {
//     const searchInput = document.getElementById('dashboard-search');
//     const searchBtn = document.getElementById('dashboard-search-btn');

//     function removeHighlights() {
//         document.querySelectorAll('.dashboard-highlight').forEach(el => {
//             el.outerHTML = el.innerHTML;
//         });
//     }

//     function highlightMatches(word) {
//         if (!word) return;
//         removeHighlights();
//         const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
//         while (walker.nextNode()) {
//             const node = walker.currentNode;
//             if (node.parentNode && node.nodeValue.trim() && node.nodeValue.toLowerCase().includes(word.toLowerCase())) {
//                 const regex = new RegExp(`(${word})`, 'gi');
//                 const span = document.createElement('span');
//                 span.className = 'dashboard-highlight';
//                 span.style.background = '#ffe066';
//                 span.style.color = '#222';
//                 span.style.borderRadius = '3px';
//                 span.innerHTML = node.nodeValue.replace(regex, '<mark>$1</mark>');
//                 node.parentNode.replaceChild(span, node);
//             }
//         }
//     }

//     searchBtn.addEventListener('click', function () {
//         const word = searchInput.value.trim();
//         removeHighlights();
//         if (word) highlightMatches(word);
//     });

//     searchInput.addEventListener('keydown', function (e) {
//         if (e.key === 'Enter') {
//             searchBtn.click();
//         }
//     });
// });

// STATISTICAL DASHBOARD DATA
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.access-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const graphType = this.getAttribute('data-graph');

            // Hide economic container only if NOT clicking "economic"
            if (graphType !== 'economic') {
                document.getElementById('dashboard-graph-container-economic').style.display = 'none';
            } else {
                document.getElementById('dashboard-graph-container-economic').style.display = 'block';
                document.getElementById('dashboard-graph-container-economic').scrollIntoView({ behavior: 'smooth' });
            }

            // Hide other containers
            document.getElementById('dashboard-graph-container-population').style.display = 'none';
            document.getElementById('dashboard-graph-container-business').style.display = 'none';
            document.getElementById('dashboard-graph-container-forecast').style.display = 'none';

            // Show the correct graph container
            if (graphType === 'population') {
                document.getElementById('dashboard-graph-container-population').style.display = 'block';
                document.getElementById('dashboard-graph-container-population').scrollIntoView({ behavior: 'smooth' });
            } else if (graphType === 'business') {
                document.getElementById('dashboard-graph-container-business').style.display = 'block';
                document.getElementById('dashboard-graph-container-business').scrollIntoView({ behavior: 'smooth' });
            } else if (graphType === 'forecast') {
                document.getElementById('dashboard-graph-container-forecast').style.display = 'block';
                document.getElementById('dashboard-graph-container-forecast').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
