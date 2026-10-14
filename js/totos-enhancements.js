/**
 * Totos Group - Production Enhancements
 * Includes:
 * 1. Multi-Department Floating WhatsApp Hub
 * 2. Back-to-Top Button
 * 3. Schema.org JSON-LD Structured Data
 */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Inject Schema.org JSON-LD
  try {
    if (!document.getElementById("totos-schema-jsonld")) {
      var schemaScript = document.createElement("script");
      schemaScript.id = "totos-schema-jsonld";
      schemaScript.type = "application/ld+json";
      schemaScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Totos Group",
        "url": "https://totosgroup.com",
        "logo": "https://totosgroup.com/img/logo.png",
        "description": "Integrated solutions for lifestyle, travel, e-commerce, hospitality, and transportation across Egypt.",
        "founder": {
          "@type": "Person",
          "name": "Mohamed Aly Othman"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Alexandria",
          "addressCountry": "EG"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+201014157552",
            "contactType": "customer service",
            "availableLanguage": ["English", "Arabic"]
          }
        ],
        "sameAs": [
          "https://www.facebook.com/Totos.Group",
          "https://www.instagram.com/siwa_guide/",
          "https://www.facebook.com/Mohamed.Aly.Othman"
        ]
      });
      document.head.appendChild(schemaScript);
    }
  } catch (e) {}

  // 2. Inject Floating WhatsApp Hub & Back-to-Top
  if (!document.getElementById("totos-enhancements-container")) {
    var container = document.createElement("div");
    container.id = "totos-enhancements-container";

    container.innerHTML = `
      <!-- Back to Top Button -->
      <a href="javascript:void(0)" id="totosBackToTop" class="totos-back-to-top" title="Back to Top" aria-label="Back to Top">
        <i class="fa fa-chevron-up"></i>
      </a>

      <!-- Floating WhatsApp Hub -->
      <div class="totos-wa-float">
        <div id="totosWaPopup" class="totos-wa-popup">
          <div class="totos-wa-header">
            <button type="button" class="totos-wa-close" onclick="closeTotosWaPopup()" aria-label="Close">&times;</button>
            <h6>Chat with Totos Group</h6>
            <p>Select your inquiry to start WhatsApp chat</p>
          </div>
          <div class="totos-wa-body">
            <a href="https://wa.me/201014157552?text=Hi%20Totos%20CarGo,%20I'd%20like%20to%20book%20a%20ride%20or%20transfer" target="_blank" rel="noopener" class="totos-wa-item">
              <div class="totos-wa-item-icon" style="background: #ff6a3e;">
                <i class="fa fa-car"></i>
              </div>
              <div class="totos-wa-item-info">
                <p class="totos-wa-item-title">Totos CarGo</p>
                <p class="totos-wa-item-desc">Airport transfers, intercity & city rides</p>
              </div>
            </a>

            <a href="https://wa.me/201000395320?text=Hi%20Siwa%20Guide,%20I'd%20like%20to%20inquire%20about%20tours%20and%20safaris" target="_blank" rel="noopener" class="totos-wa-item">
              <div class="totos-wa-item-icon" style="background: #2ea043;">
                <i class="fa fa-compass"></i>
              </div>
              <div class="totos-wa-item-info">
                <p class="totos-wa-item-title">Siwa Guide & Tours</p>
                <p class="totos-wa-item-desc">Desert safari, salt lakes & camping</p>
              </div>
            </a>

            <a href="https://wa.me/201014157552?text=Hi%20Totos%20Lodge,%20I'd%20like%20to%20inquire%20about%20room%20reservations" target="_blank" rel="noopener" class="totos-wa-item">
              <div class="totos-wa-item-icon" style="background: #0284c7;">
                <i class="fa fa-bed"></i>
              </div>
              <div class="totos-wa-item-info">
                <p class="totos-wa-item-title">Totos Lodge (Siwa)</p>
                <p class="totos-wa-item-desc">Authentic eco-stays & retreat booking</p>
              </div>
            </a>

            <a href="https://wa.me/201014157552?text=Hi%20Totos%20Store,%20I%20have%20an%20inquiry%20about%20Amazon%20products" target="_blank" rel="noopener" class="totos-wa-item">
              <div class="totos-wa-item-icon" style="background: #eab308;">
                <i class="fa fa-shopping-basket"></i>
              </div>
              <div class="totos-wa-item-info">
                <p class="totos-wa-item-title">Totos Amazon Store</p>
                <p class="totos-wa-item-desc">Online grocery & product support</p>
              </div>
            </a>

            <a href="https://wa.me/201014157552?text=Hi%20Totos%20Group,%20I%20have%20a%20general%20question" target="_blank" rel="noopener" class="totos-wa-item">
              <div class="totos-wa-item-icon" style="background: #25d366;">
                <i class="fa fa-whatsapp"></i>
              </div>
              <div class="totos-wa-item-info">
                <p class="totos-wa-item-title">General Support & Info</p>
                <p class="totos-wa-item-desc">Alexandria center & customer service</p>
              </div>
            </a>
          </div>
        </div>

        <a href="javascript:void(0)" class="totos-wa-btn" onclick="toggleTotosWaPopup()" title="Chat on WhatsApp" aria-label="Open WhatsApp Support">
          <span class="totos-wa-pulse"></span>
          <i class="fa fa-whatsapp"></i>
        </a>
      </div>
    `;

    document.body.appendChild(container);

    // Scroll listener for Back to Top
    var bttBtn = document.getElementById("totosBackToTop");
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        bttBtn.classList.add("visible");
      } else {
        bttBtn.classList.remove("visible");
      }
    });

    bttBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

function toggleTotosWaPopup() {
  var popup = document.getElementById("totosWaPopup");
  if (popup) {
    popup.classList.toggle("active");
  }
}

function closeTotosWaPopup() {
  var popup = document.getElementById("totosWaPopup");
  if (popup) {
    popup.classList.remove("active");
  }
}

// Close on outside click
document.addEventListener("click", function (e) {
  var floatWrap = document.querySelector(".totos-wa-float");
  var popup = document.getElementById("totosWaPopup");
  if (popup && popup.classList.contains("active") && floatWrap && !floatWrap.contains(e.target)) {
    popup.classList.remove("active");
  }
});

/**
 * 4. Totos CarGo Fare Estimator & WhatsApp Pre-fill
 */
var CARGO_RATES = {
  alex_borg: {
    title: "Alexandria ⟷ Borg El Arab Airport (HBE)",
    distance: "~45 km",
    duration: "~45 mins",
    rates: { sedan: 750, suv: 1200, van: 1500, cruiser: 1800 }
  },
  alex_cairo: {
    title: "Alexandria ⟷ Cairo / Cairo Airport (CAI)",
    distance: "~220 km",
    duration: "~2.5 hrs",
    rates: { sedan: 2800, suv: 4000, van: 4800, cruiser: 5500 }
  },
  alex_siwa: {
    title: "Alexandria ⟷ Siwa Oasis",
    distance: "~600 km",
    duration: "~7 hrs",
    rates: { sedan: 6500, suv: 8500, van: 10500, cruiser: 11500 }
  },
  cairo_siwa: {
    title: "Cairo ⟷ Siwa Oasis",
    distance: "~750 km",
    duration: "~8.5 hrs",
    rates: { sedan: 8000, suv: 10500, van: 13000, cruiser: 14000 }
  },
  alex_tour: {
    title: "Alexandria Sightseeing Day Chauffeur (8 Hours)",
    distance: "Up to 100 km",
    duration: "8 Hours",
    rates: { sedan: 1800, suv: 2600, van: 3200, cruiser: 3500 }
  },
  siwa_safari: {
    title: "Siwa 4x4 Desert Safari & Salt Lakes (Full Day)",
    distance: "Desert Dunes & Oasis",
    duration: "Full Day (6-8 hrs)",
    rates: { sedan: 3500, suv: 3800, van: 4500, cruiser: 3500 }
  }
};

var CARGO_VEHICLE_NAMES = {
  sedan: "Comfort Sedan (1-3 pax)",
  suv: "Executive SUV (1-4 pax)",
  van: "Family / Group Van (4-8 pax)",
  cruiser: "4x4 Desert Cruiser (1-4 pax)"
};

function updateCargoFare() {
  var routeSelect = document.getElementById("cargoRouteSelect");
  var vehicleSelect = document.getElementById("cargoVehicleSelect");
  var dateInput = document.getElementById("cargoDateInput");
  var nameInput = document.getElementById("cargoNameInput");

  if (!routeSelect || !vehicleSelect) return;

  var routeKey = routeSelect.value;
  var vehicleKey = vehicleSelect.value;
  var data = CARGO_RATES[routeKey] || CARGO_RATES["alex_borg"];
  var price = data.rates[vehicleKey] || data.rates["sedan"];
  var vehicleName = CARGO_VEHICLE_NAMES[vehicleKey] || vehicleKey;

  var titleEl = document.getElementById("cargoRouteTitle");
  var distEl = document.getElementById("cargoDistance");
  var durEl = document.getElementById("cargoDuration");
  var vehEl = document.getElementById("cargoVehicleName");
  var priceEl = document.getElementById("cargoPriceDisplay");
  var bookBtn = document.getElementById("cargoBookBtn");

  if (titleEl) titleEl.textContent = data.title;
  if (distEl) distEl.innerHTML = '<i class="fa fa-road col_oran me-1"></i> Distance: ' + data.distance;
  if (durEl) durEl.innerHTML = '<i class="fa fa-clock-o col_oran me-1"></i> Est. Time: ' + data.duration;
  if (vehEl) vehEl.innerHTML = '<i class="fa fa-car col_oran me-1"></i> ' + vehicleName;
  if (priceEl) priceEl.textContent = price.toLocaleString() + " EGP";

  if (bookBtn) {
    var dateVal = (dateInput && dateInput.value.trim()) ? dateInput.value.trim() : "To be confirmed";
    var nameVal = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : "Guest";
    var msg = "Hi Totos CarGo, I would like to book a ride:%0A" +
              "• Route: " + encodeURIComponent(data.title) + "%0A" +
              "• Vehicle: " + encodeURIComponent(vehicleName) + "%0A" +
              "• Estimated Rate: " + price.toLocaleString() + " EGP%0A" +
              "• Date / Time: " + encodeURIComponent(dateVal) + "%0A" +
              "• Passenger: " + encodeURIComponent(nameVal);
    bookBtn.href = "https://wa.me/201014157552?text=" + msg;
  }
}

// Attach listeners if cargo form exists
document.addEventListener("DOMContentLoaded", function () {
  var routeSelect = document.getElementById("cargoRouteSelect");
  var vehicleSelect = document.getElementById("cargoVehicleSelect");
  var dateInput = document.getElementById("cargoDateInput");
  var nameInput = document.getElementById("cargoNameInput");

  if (routeSelect && vehicleSelect) {
    routeSelect.addEventListener("change", updateCargoFare);
    vehicleSelect.addEventListener("change", updateCargoFare);
    if (dateInput) dateInput.addEventListener("input", updateCargoFare);
    if (nameInput) nameInput.addEventListener("input", updateCargoFare);
    updateCargoFare();
  }
});
