document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('You selected: ' + this.textContent);
        // Add your navigation or logic here
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
    // Center on Stettler County
    var map = L.map('business-map').setView([52.3167, -112.7167], 10);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const industryIcons = {
        'Retail': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        }),
        'Farm': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        }),
        'Health': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        }),
        'Groceries & Local Foods': L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        })
        // Add more industries/colors as needed
    };

    // Example business locations (replace with real data)
    var businesses = [
        { 
            name: "LP Farm Fresh Chicken", 
            lat: 52.33279, 
            lng: -112.44390,
            phone: "(403) 742 3454",
            address: "Botha, AB, T0C 0N0", 
            industry: "Farm"
        },
        { 
            name: "Byemoor Poultry Farm", 
            lat: 52.06208, 
            lng: -112.20197, 
            phone: "(587) 282 4706",
            address: "1 Ave, Byemoor, AB T0J 0L0", 
            industry: "Farm"
        },
        { 
            name: "G3 Erskine", 
            lat: 52.31265, 
            lng: -112.89245,
            phone: "(403) 743 1246",
            address: "38568 Highway 835, Erskine, AB T0C 1G0", 
            industry: "Retail"
        },
        { 
            name: "Consignment Closet", 
            lat: 52.327291123758954, 
            lng: -112.73466754236172,
            phone: "(403) 742-0676",
            address: "6600 50 Ave, Stettler, AB T0C 2L2", 
            industry: "Retail"
        },
        { 
            name: "Country Chiropractic", 
            lat: 52.3241425985079, 
            lng: -112.70527885029871,
            phone: "(403) 742-8885",
            address: "4816 50 Ave, Stettler, AB T0C 2L2", 
            industry: "Health"
        },
        { 
            name: "Crossfit Stettler", 
            lat: 52.32036451893868, 
            lng: -112.70160593443339,
            phone: "(403) 740-9287",
            address: "4808 45 Ave, Stettler, AB T0C 2L0", 
            industry: "Health"
        },
        { 
            name: "Ford's Farmstead", 
            lat: 52.317725292330366, 
            lng: -112.81320168840264,
            phone: "(403) 894-3747",
            address: "Township Rd 390, Stettler, AB T0C 2L0", 
            industry: "Groceries & Local Foods"
        },
        { 
            name: "Shrum's Sausage & Meats", 
            lat: 52.3231178609908, 
            lng: -112.69135820374231,
            phone: "(403) 742-1427",
            address: "4703 42 St, Stettler, AB T0C 2L0", 
            industry: "Groceries & Local Foods"
        }
    ];

    // Store marker references
    var markers = [];

    businesses.forEach(function(biz, idx) {
        var marker = L.marker([biz.lat, biz.lng], {
            icon: industryIcons[biz.industry] || industryIcons['Small Business']
        })
        .addTo(map)
        .bindPopup(
            `<b>${biz.name}</b><br>
            ${biz.phone ? 'Phone: ' + biz.phone + '<br>' : ''}
            ${biz.address ? 'Address: ' + biz.address + '<br>' : ''}`
        );
        markers.push(marker);
    });


    // Create business list below the map as tiles
    var listContainer = document.createElement('div');
    listContainer.id = 'business-list';
    listContainer.style.margin = '2rem auto'; // Center the grid
    listContainer.style.maxWidth = '1200px'; 
    listContainer.style.padding = '0 2rem'; 
    listContainer.style.display = 'grid';
    listContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    listContainer.style.gap = '1.5rem';

    const markerColors = {
        'Retail': '#ff4d4d',           // Red marker
        'Farm': '#4caf50',             // Green marker
        'Health': '#1976d2',           // Blue marker
        'Groceries & Local Foods': '#ffa726' // Orange marker
        // Add more if needed
    };

    businesses.forEach((biz, idx) => {
        var tile = document.createElement('div');
        tile.className = 'business-tile';
        tile.style.background = markerColors[biz.industry] ? markerColors[biz.industry] + '22' : '#f7f7f7'; // '22' for light shade
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

    // Add click event to each business in the list
    listContainer.querySelectorAll('a[data-idx]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var idx = parseInt(this.getAttribute('data-idx'));
            var marker = markers[idx];
            if (marker) {
                map.setView(marker.getLatLng(), 14, { animate: true });
                marker.openPopup();
            }
        });
    });

    // Add legend to the map
    if (typeof map !== 'undefined') {
      var legend = L.control({ position: 'topright' });

      legend.onAdd = function (map) {
          var div = L.DomUtil.create('div', 'map-legend');
          div.innerHTML += '<h4>Industry Legend</h4>';
          div.innerHTML += '<div><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png" style="height:20px;"> Retail</div>';
          div.innerHTML += '<div><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png" style="height:20px;"> Farm</div>';
          div.innerHTML += '<div><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png" style="height:20px;"> Health</div>';
          div.innerHTML += '<div><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png" style="height:20px;"> Groceries & Local Foods</div>';
          return div;
      };

      legend.addTo(map);
  }
});


/* NEWS SNAPSHOT - RSS FEED */
document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.cbc.ca/cmlink/rss-canada')
    .then(response => response.json())
    .then(data => {
      const newsBoxes = document.querySelectorAll('.snapshot-box');
      if (newsBoxes.length && data.items) {
        data.items.slice(0, newsBoxes.length).forEach((item, idx) => {
          // Try enclosure image first
          let imgUrl = item.enclosure && item.enclosure.link
            ? item.enclosure.link
            : null;

          // If no enclosure image, try to extract from description
          if (!imgUrl && item.description) {
            const match = item.description.match(/<img[^>]+src="([^">]+)"/);
            if (match && match[1]) imgUrl = match[1];
          }

          newsBoxes[idx].style.backgroundImage = imgUrl
            ? `url('${imgUrl}')`
            : 'none';
          newsBoxes[idx].style.backgroundSize = 'cover';
          newsBoxes[idx].style.backgroundPosition = 'center';
          newsBoxes[idx].style.color = '#fff';

          newsBoxes[idx].innerHTML = `
            <div style="background: rgba(0,0,0,0.5); border-radius: 12px; padding: 1rem;">
              <div class="snapshot-title">
                <a href="${item.link}" target="_blank" style="color: #fff; text-shadow: 1px 1px 4px #000;">${item.title}</a>
              </div>
            </div>
          `;
        });
      }
    });
});


/* STATISTICS DASHBOARD - PYRAMID CHART */
function addChartCaption(canvasId, captionText) {
    const chartCanvas = document.getElementById(canvasId);
    if (chartCanvas) {
        const captionDiv = document.createElement('div');
        captionDiv.textContent = captionText;
        captionDiv.style.textAlign = 'center';
        captionDiv.style.fontSize = '0.95rem';
        captionDiv.style.color = '#555';
        captionDiv.style.marginTop = '0.5rem';
        chartCanvas.parentNode.appendChild(captionDiv); // Use appendChild
    }
}

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
                // font: { size: 13 }
            },
            ticks: {
                callback: function(value) {
                    return Math.abs(value);
                },
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
                // font: { size: 13 }
            },
        }
        },
        plugins: {
            legend: { 
                position: 'bottom',
                // labels: {
                //     font: { size: 10 },
                // }

            },
            title: {
                // font: { size: 18 },
                display: true,
                text: '2024 Population Age and Gender Pyramid',
                font: {
                    size: 20
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
addChartCaption('pyramidChart', 'Source: Alberta Regional Dashboard Data');

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
            font: {
              size: 20
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          },
          legend: {
            position: 'bottom'
          }
        },
        scales: {
          x: {
            stacked: true,
            grid: {
                display: false,
            },
            title: {
              display: true,
              text: 'Year'
            }
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: 'Number of Permits'
            }
          }
        }
      }
    });
  });
// Example for a chart with canvas id="pyramidChart"
addChartCaption('buildingPermitChart', 'Source: Alberta Regional Dashboard Data');

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
            font: {
              size: 20
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
            title: {
              display: true,
              text: 'Year'
            }
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: 'Number of Businesses'
            }
          }
        }
      }
    });
  });
// Example for a chart with canvas id="pyramidChart"
addChartCaption('businessAreaChart', 'Source: Alberta Regional Dashboard Data');


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
            font: {
              size: 20
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
                size: 14
              }
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
            title: {
              display: true,
              text: 'Year'
            }
          },
          y: {
            stacked: false, // Not stacked
            title: {
              display: true,
              text: 'Participation Rate'
            }
          }
        }
      }
    });
  });
// Example for a chart with canvas id="pyramidChart"
addChartCaption('participationRateChart', 'Source: Alberta Regional Dashboard Data');

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
            font: {
              size: 20
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
                size: 14
              }
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
            title: {
              display: true,
              text: 'Year'
            }
          },
          y: {
            stacked: false, // Not stacked
            title: {
              display: true,
              text: 'Unemployment Rate'
            }
          }
        }
      }
    });
  });
// Example for a chart with canvas id="pyramidChart"
addChartCaption('unemploymentRateChart', 'Source: Alberta Regional Dashboard Data');

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
            font: {
              size: 20
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
              text: 'Industry'
            },
            grid: {
                display: false,
            }
          },
          y: {
            title: {
              display: true,
              text: 'Local Work Force'
            }
          }
        }
      }
    });
  });
// Example for a chart with canvas id="pyramidChart"
addChartCaption('laborMarketChart', 'Source: Statistics Canada 2021 Community Profile Data');

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