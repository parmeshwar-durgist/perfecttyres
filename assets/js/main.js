/**
 * ============================================================================
 * PERFECT TYRE — Frontend Interactive Engine & Configuration
 * Vanilla JavaScript | Static Architecture | Clean Accessibility
 * ============================================================================
 */

(function () {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * 1. BUSINESS CONFIGURATION (Editable by Business Owner / Administrator)
   * --------------------------------------------------------------------------
   * NOTE FOR BUSINESS OWNER:
   * Populate the fields below with your actual verified showroom details.
   * If left blank (""), the website will gracefully display neutral guidance
   * or a setup helper rather than showing invented numbers or broken links.
   */
  const BUSINESS_CONFIG = {
    brandName: "Perfect Tyre",
    tagline: "Quality Tyres. Expert Guidance. Confident Driving.",
    authorisedBrands: ["Yokohama", "Bridgestone", "Michelin", "Firestone", "Apollo Tyres"],

    // Primary Showroom Contact Details (Verified)
    phoneNumber: "+91 72620 08008",
    whatsappNumber: "917262008008",
    secondaryPhone: "+91 74477 44765",
    emailAddress: "perfect.tyreskc1@gmail.com",
    secondaryEmail: "perfect.wheels1@gmail.com",
    showroomAddress: "Kinetic Chowk, Nagar-Pune Road, Ahilyanagar & Nagar-Shirdi Road, Bholegaon Phata, Ahmednagar - 414 411",
    googleMapsUrl: "",

    // Verified Operating Hours
    businessHours: {
      weekdays: "Monday – Saturday: 9:30 AM – 8:00 PM",
      sunday: "Sunday: Please contact showroom to verify timings",
    },

    // Five Associated Showrooms and Business Identities
    networkIdentities: [
      {
        id: "bridgestone-select-pt",
        name: "Bridgestone Select – Perfect Tyre",
        badge: "Bridgestone Select Outlet",
        description: "Specialized showroom identity delivering Bridgestone passenger, SUV, and performance tyre solutions with professional customer guidance.",
        location: "Kinetic Chowk, Nagar-Pune Road, Ahilyanagar",
        phone: "+91 72620 08008",
        email: "perfect.tyreskc1@gmail.com",
        googleMapsLink: "",
        isAuthorizedClaimConfirmed: true
      },
      {
        id: "yokohama-club-network-pw",
        name: "Yokohama Club Network – Perfect Wheels",
        badge: "Yokohama Club Network",
        description: "Dedicated Yokohama showroom identity offering advanced Japanese engineered radial tyres for passenger cars and high-traction SUVs.",
        location: "Nagar-Shirdi Road, Bholegaon Phata, Ahmednagar - 414 411",
        phone: "+91 74477 44765 / +91 72620 08008",
        email: "perfect.wheels1@gmail.com",
        googleMapsLink: "",
        isAuthorizedClaimConfirmed: true
      },
      {
        id: "perfect-tyre-sales-service",
        name: "Perfect Tyre Sales Service",
        badge: "Multi-Brand Sales & Care",
        description: "Comprehensive multi-brand tyre retail, fitment, size assessment, and maintenance services across versatile vehicle segments.",
        location: "Kinetic Chowk, Nagar-Pune Road, Ahilyanagar",
        phone: "+91 72620 08008",
        email: "perfect.tyreskc1@gmail.com",
        googleMapsLink: "",
        isAuthorizedClaimConfirmed: false
      },
      {
        id: "bridgestone-select-suraj",
        name: "Bridgestone Select – Suraj Motor Comp",
        badge: "Bridgestone Select Partner",
        description: "Associated Bridgestone showroom identity providing genuine tyre supply, warranty support, and vehicle-tailored recommendations.",
        location: "Nagar-Pune Road Network Hub, Ahilyanagar",
        phone: "+91 72620 08008",
        email: "perfect.tyreskc1@gmail.com",
        googleMapsLink: "",
        isAuthorizedClaimConfirmed: true
      },
      {
        id: "perfect-tyres-zone",
        name: "PERFECT TYRES ZONE",
        badge: "Tyre Destination",
        description: "Customer-centric tyre showroom identity providing dependable multi-brand availability and tyre care support.",
        location: "Nagar-Shirdi Road Network Hub, Ahmednagar",
        phone: "+91 74477 44765",
        email: "perfect.wheels1@gmail.com",
        googleMapsLink: "",
        isAuthorizedClaimConfirmed: false
      }
    ]
  };

  /**
   * --------------------------------------------------------------------------
   * 2. Sample Tyre Catalog Data (Frontend Reference & Discovery Demonstration)
   * Note: This is client-side representative data for static browsing.
   * Real stock, prices, and fitments are confirmed directly at the showroom.
   * --------------------------------------------------------------------------
   */
  const SAMPLE_TYRE_CATALOG = [
    {
      id: "pt-b01",
      brand: "Bridgestone",
      model: "Turanza T005A",
      category: "car",
      categoryLabel: "Passenger Car",
      size: "205/55 R16",
      speedRating: "91V",
      patternType: "Luxury Touring & Wet Grip",
      featured: true,
      description: "Designed for premium sedans and hatchbacks, delivering whisper-quiet highway ride and high braking grip."
    },
    {
      id: "pt-y01",
      brand: "Yokohama",
      model: "BluEarth-GT AE51",
      category: "car",
      categoryLabel: "Passenger Car",
      size: "195/65 R15",
      speedRating: "91H",
      patternType: "Grand Touring & Fuel Saving",
      featured: true,
      description: "Asymmetric tread design delivering stable high-speed touring dynamics and long tread life."
    },
    {
      id: "pt-b02",
      brand: "Bridgestone",
      model: "Dueler A/T D697",
      category: "suv",
      categoryLabel: "SUV & MUV",
      size: "235/65 R17",
      speedRating: "108T",
      patternType: "All-Terrain & Highway Balance",
      featured: true,
      description: "Robust shoulder blocks and reinforced casing built for modern SUVs tackling both city highways and rough trails."
    },
    {
      id: "pt-y02",
      brand: "Yokohama",
      model: "Geolandar A/T G015",
      category: "suv",
      categoryLabel: "SUV & MUV",
      size: "215/60 R17",
      speedRating: "96H",
      patternType: "All-Terrain Tough Traction",
      featured: true,
      description: "Enduro compound with 3D sipes engineered for superior wet braking and off-road puncture resistance."
    },
    {
      id: "pt-b03",
      brand: "Bridgestone",
      model: "Battlax Hypersport S22",
      category: "twowheeler",
      categoryLabel: "Two-Wheeler",
      size: "120/70 ZR17",
      speedRating: "58W",
      patternType: "Sport & Cornering Grip",
      featured: true,
      description: "Multi-compound technology providing exhilarating cornering traction and confidence in wet conditions."
    },
    {
      id: "pt-y03",
      brand: "Yokohama",
      model: "RY215 Commercial",
      category: "commercial",
      categoryLabel: "Truck & Commercial",
      size: "7.50 R16",
      speedRating: "14PR",
      patternType: "Heavy-Duty All-Position",
      featured: false,
      description: "Engineered for medium commercial carriers, resisting uneven wear under heavy payloads."
    },
    {
      id: "pt-b04",
      brand: "Bridgestone",
      model: "Farm Service Radial",
      category: "tractor",
      categoryLabel: "Tractor & Agriculture",
      size: "13.6 - 28",
      speedRating: "8PR",
      patternType: "Deep High-Lug Traction",
      featured: false,
      description: "High lug depth providing powerful pulling force and self-cleaning tread in wet soil."
    },
    {
      id: "pt-b05",
      brand: "Bridgestone",
      model: "Ecopia EP150",
      category: "car",
      categoryLabel: "Passenger Car",
      size: "185/65 R15",
      speedRating: "88H",
      patternType: "Eco-Friendly Low Resistance",
      featured: false,
      description: "Nano Pro-Tech compound reducing rolling resistance for optimal fuel efficiency in everyday city transit."
    },
    {
      id: "pt-m01",
      brand: "Michelin",
      model: "Primacy 4 ST",
      category: "car",
      categoryLabel: "Passenger Car",
      size: "205/55 R16",
      speedRating: "91V",
      patternType: "EverGrip Luxury Touring",
      featured: true,
      description: "Exceptional wet braking performance throughout tyre lifespan and acoustic cabin serenity."
    },
    {
      id: "pt-m02",
      brand: "Michelin",
      model: "Latitude Cross",
      category: "suv",
      categoryLabel: "SUV & MUV",
      size: "215/65 R16",
      speedRating: "102H",
      patternType: "All-Surface Mud Catcher",
      featured: true,
      description: "Blends aggressive off-road mud and trail traction with passenger-car on-road comfort."
    },
    {
      id: "pt-f01",
      brand: "Firestone",
      model: "Destination A/T",
      category: "suv",
      categoryLabel: "SUV & MUV",
      size: "235/65 R17",
      speedRating: "108S",
      patternType: "All-Terrain Rugged Carcass",
      featured: true,
      description: "Deep interlocking shoulder blocks built to resist trail impact and deliver highway stability."
    },
    {
      id: "pt-f02",
      brand: "Firestone",
      model: "FR500 Road Touring",
      category: "car",
      categoryLabel: "Passenger Car",
      size: "185/65 R15",
      speedRating: "88H",
      patternType: "High-Mileage Indian Road Radial",
      featured: false,
      description: "Continuous central ribs and high wear resistance specifically formulated for everyday city transit."
    },
    {
      id: "pt-a01",
      brand: "Apollo Tyres",
      model: "Alnac 4G High Grip",
      category: "car",
      categoryLabel: "Passenger Car",
      size: "195/55 R16",
      speedRating: "87V",
      patternType: "High-Silica Precision Touring",
      featured: true,
      description: "Broad outer shoulder blocks engineered for precise high-speed cornering and braking."
    },
    {
      id: "pt-a02",
      brand: "Apollo Tyres",
      model: "Apterra AT2 Rough Terrain",
      category: "suv",
      categoryLabel: "SUV & MUV",
      size: "235/65 R17",
      speedRating: "104T",
      patternType: "Dual-Layer Mud-Release 4x4",
      featured: true,
      description: "Herringbone tread grooves with self-cleaning mud release for exceptional trail and road safety."
    }
  ];

  /**
   * --------------------------------------------------------------------------
   * 3. WhatsApp Message Generator Utility
   * --------------------------------------------------------------------------
   */
  function generateWhatsAppEnquiryUrl(details) {
    const { category, vehicle, tyreSize, brand, service, message, customerName } = details;

    let text = `Hello Perfect Tyre,\n\nI would like to enquire about tyres.\n\n`;
    if (customerName) text += `Name: ${customerName}\n`;
    if (category) text += `Vehicle Category: ${category}\n`;
    if (vehicle) text += `Vehicle Make/Model: ${vehicle}\n`;
    if (tyreSize) text += `Tyre Size: ${tyreSize}\n`;
    if (brand) text += `Preferred Brand: ${brand}\n`;
    if (service) text += `Required Service: ${service}\n`;
    if (message) text += `Message / Note: ${message}\n`;
    text += `\nPlease share suitable options and current availability.\n\nThank you.`;

    const encoded = encodeURIComponent(text);

    if (BUSINESS_CONFIG.whatsappNumber && BUSINESS_CONFIG.whatsappNumber.trim().length >= 8) {
      return {
        url: `https://wa.me/${BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`,
        isConfigured: true,
        text: text
      };
    } else {
      return {
        url: null,
        isConfigured: false,
        text: text
      };
    }
  }

  /**
   * Handler to launch or display WhatsApp modal
   */
  function handleWhatsAppAction(details) {
    const waData = generateWhatsAppEnquiryUrl(details);
    if (waData.isConfigured && waData.url) {
      window.open(waData.url, '_blank', 'noopener,noreferrer');
    } else {
      showConfigNoticeModal(waData.text);
    }
  }

  /**
   * Shows user-friendly modal when WhatsApp number is not yet populated
   */
  function showConfigNoticeModal(prefilledMessage) {
    let modalEl = document.getElementById('ptConfigNoticeModal');
    if (!modalEl) {
      const modalHtml = `
        <div class="modal fade" id="ptConfigNoticeModal" tabindex="-1" aria-labelledby="ptConfigNoticeLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title d-flex align-items-center gap-2" id="ptConfigNoticeLabel">
                  <i class="bi bi-whatsapp text-success"></i> WhatsApp Enquiry Prepared
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="alert alert-info border-0 mb-3" style="background:#FEF2F2; color:#991B1B;">
                  <i class="bi bi-info-circle-fill me-1"></i>
                  <strong>Showroom Phone Configuration Notice:</strong><br>
                  The showroom owner has not yet configured their official WhatsApp number in <code>assets/js/main.js</code> (<code>BUSINESS_CONFIG.whatsappNumber</code>).
                </div>
                <p class="mb-2 fw-semibold text-dark">Your enquiry message has been formatted successfully:</p>
                <div class="p-3 bg-light rounded border text-monospace small mb-3" id="ptNoticeMsgBox" style="white-space: pre-line; max-height: 200px; overflow-y: auto;"></div>
                <p class="small text-muted mb-0">
                  You can copy this text and share it directly with the showroom team over SMS or call once their official number is announced.
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-pt-dark btn-pt-sm" id="ptCopyMsgBtn">
                  <i class="bi bi-clipboard me-1"></i> Copy Message Text
                </button>
                <button type="button" class="btn btn-secondary btn-pt-sm" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHtml);
      modalEl = document.getElementById('ptConfigNoticeModal');

      const copyBtn = document.getElementById('ptCopyMsgBtn');
      if (copyBtn) {
        copyBtn.addEventListener('click', function () {
          const textToCopy = document.getElementById('ptNoticeMsgBox').textContent;
          navigator.clipboard.writeText(textToCopy).then(() => {
            copyBtn.innerHTML = '<i class="bi bi-check2 me-1"></i> Copied to Clipboard!';
            setTimeout(() => {
              copyBtn.innerHTML = '<i class="bi bi-clipboard me-1"></i> Copy Message Text';
            }, 2500);
          }).catch(() => {
            alert("Enquiry copied to clipboard.");
          });
        });
      }
    }

    document.getElementById('ptNoticeMsgBox').textContent = prefilledMessage;
    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }

  /**
   * --------------------------------------------------------------------------
   * 4. Navigation & Scroll Interactions
   * --------------------------------------------------------------------------
   */
  function initNavigation() {
    const navbar = document.querySelector('.pt-navbar');
    const backToTop = document.querySelector('.pt-back-to-top');
    const floatingBar = document.querySelector('.pt-floating-quick-bar');

    // Sticky nav, Back to Top & Floating Quick Action Bar visibility on scroll
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (navbar) {
        if (scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      if (backToTop) {
        if (scrollY > 380) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }

      if (floatingBar) {
        // Reveal only once visitor scrolls down past the hero section
        if (scrollY > 280) {
          floatingBar.classList.add('visible');
        } else {
          floatingBar.classList.remove('visible');
        }
      }
    }, { passive: true });

    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Highlight active link based on current path
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.pt-navbar .nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    // Mobile nav auto close on link click (exclude dropdown toggles)
    const navCollapse = document.getElementById('ptNavbarNav');
    if (navCollapse) {
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          // Do not close navbar when clicking dropdown toggle
          if (link.classList.contains('dropdown-toggle') || link.getAttribute('data-bs-toggle') === 'dropdown') {
            return;
          }
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse && window.innerWidth < 992) {
            bsCollapse.hide();
          }
        });
      });

      // Close navbar when clicking actual dropdown links (e.g. Yokohama, Bridgestone)
      const dropdownLinks = navCollapse.querySelectorAll('.pt-dropdown-item');
      dropdownLinks.forEach(item => {
        item.addEventListener('click', () => {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse && window.innerWidth < 992) {
            bsCollapse.hide();
          }
        });
      });
    }

    // Update phone button in header if configured
    const headerPhoneBtns = document.querySelectorAll('.pt-header-phone-btn');
    headerPhoneBtns.forEach(btn => {
      if (BUSINESS_CONFIG.phoneNumber && BUSINESS_CONFIG.phoneNumber.trim().length > 0) {
        btn.setAttribute('href', `tel:${BUSINESS_CONFIG.phoneNumber.replace(/[^0-9+]/g, '')}`);
        btn.innerHTML = `<i class="bi bi-telephone-fill"></i> ${BUSINESS_CONFIG.phoneNumber}`;
      } else {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          showConfigNoticeModal("Showroom phone number is pending owner confirmation. Please visit the Contact Us page or submit an online tyre enquiry.");
        });
      }
    });
  }

  /**
   * --------------------------------------------------------------------------
   * 5. Interactive Tyre Finder Widget (Hero & Tyres Page)
   * --------------------------------------------------------------------------
   */
  function initTyreFinder() {
    const finderForm = document.getElementById('ptTyreFinderForm');
    if (!finderForm) return;

    const tabSizeBtn = document.getElementById('ptTabSize');
    const tabVehicleBtn = document.getElementById('ptTabVehicle');
    const sizeSearchGroup = document.getElementById('ptSizeSearchGroup');
    const vehicleSearchGroup = document.getElementById('ptVehicleSearchGroup');
    const sizeInput = document.getElementById('ptTyreSizeInput');
    const vehicleCatSelect = document.getElementById('ptVehicleCategory');
    const brandSelect = document.getElementById('ptBrandSelect');
    const sizePills = document.querySelectorAll('.pt-size-guide-pill');

    // Tab switcher
    if (tabSizeBtn && tabVehicleBtn) {
      tabSizeBtn.addEventListener('click', () => {
        tabSizeBtn.classList.add('active');
        tabVehicleBtn.classList.remove('active');
        if (sizeSearchGroup) sizeSearchGroup.classList.remove('d-none');
        if (vehicleSearchGroup) vehicleSearchGroup.classList.add('d-none');
      });

      tabVehicleBtn.addEventListener('click', () => {
        tabVehicleBtn.classList.add('active');
        tabSizeBtn.classList.remove('active');
        if (sizeSearchGroup) sizeSearchGroup.classList.add('d-none');
        if (vehicleSearchGroup) vehicleSearchGroup.classList.remove('d-none');
      });
    }

    // Size suggestion pills click & Dropdown sync
    sizePills.forEach(pill => {
      pill.addEventListener('click', () => {
        const sampleSize = pill.getAttribute('data-size');
        if (sizeInput && sampleSize) {
          sizeInput.value = sampleSize;
          sizeInput.classList.remove('is-invalid');

          // Highlight selected pill
          sizePills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
        }
      });
    });

    if (sizeInput) {
      sizeInput.addEventListener('change', () => {
        const val = sizeInput.value;
        sizePills.forEach(p => {
          if (p.getAttribute('data-size') === val) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      });
    }

    // Form submit / Find suitable tyres
    finderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const category = vehicleCatSelect ? vehicleCatSelect.value : "Any Category";
      const brand = brandSelect ? brandSelect.value : "Any Brand";
      let searchMethod = "Tyre Size";
      let sizeVal = sizeInput ? sizeInput.value.trim() : "";
      let vehicleModelVal = "";

      const isVehicleTabActive = tabVehicleBtn && tabVehicleBtn.classList.contains('active');
      if (isVehicleTabActive) {
        searchMethod = "Vehicle Model";
        const vehicleModelInput = document.getElementById('ptVehicleModelInput');
        vehicleModelVal = vehicleModelInput ? vehicleModelInput.value.trim() : "";

        if (!vehicleModelVal) {
          if (vehicleModelInput) {
            vehicleModelInput.classList.add('is-invalid');
            vehicleModelInput.focus();
          }
          return;
        } else {
          if (vehicleModelInput) vehicleModelInput.classList.remove('is-invalid');
        }
      } else {
        // Size validation: simple check for tyre format like 205/55 R16 or standard sizes
        if (!sizeVal) {
          if (sizeInput) {
            sizeInput.classList.add('is-invalid');
            sizeInput.focus();
          }
          return;
        } else {
          if (sizeInput) sizeInput.classList.remove('is-invalid');
        }
      }

      // Display results in modal
      showFinderResultsModal({
        category: category,
        brand: brand,
        searchMethod: searchMethod,
        size: sizeVal || "To be confirmed from vehicle door jamb",
        vehicleModel: vehicleModelVal || "General Category"
      });
    });

    // ------------------------------------------------------------------------
    // Hero Section Smart Tyre Discovery Form
    // ------------------------------------------------------------------------
    const heroFinderForm = document.getElementById('ptHeroFinderForm');
    const heroTabVehicle = document.getElementById('ptHeroTabVehicle');
    const heroTabSize = document.getElementById('ptHeroTabSize');
    const heroVehicleGroup = document.getElementById('ptHeroVehicleGroup');
    const heroSizeGroup = document.getElementById('ptHeroSizeGroup');
    const heroSizeInput = document.getElementById('ptHeroSizeInput');

    if (heroTabVehicle && heroTabSize) {
      heroTabVehicle.addEventListener('click', () => {
        heroTabVehicle.classList.add('active');
        heroTabSize.classList.remove('active');
        if (heroVehicleGroup) heroVehicleGroup.classList.remove('d-none');
        if (heroSizeGroup) heroSizeGroup.classList.add('d-none');
      });

      heroTabSize.addEventListener('click', () => {
        heroTabSize.classList.add('active');
        heroTabVehicle.classList.remove('active');
        if (heroVehicleGroup) heroVehicleGroup.classList.add('d-none');
        if (heroSizeGroup) heroSizeGroup.classList.remove('d-none');
      });
    }

    // Hero quick size pills
    document.querySelectorAll('.pt-hero-size-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const sizeVal = pill.getAttribute('data-size');
        if (heroSizeInput && sizeVal) {
          heroSizeInput.value = sizeVal;
          heroSizeInput.classList.remove('is-invalid');
        }
      });
    });

    if (heroFinderForm) {
      heroFinderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const isVehicleTab = heroTabVehicle && heroTabVehicle.classList.contains('active');
        const catSelect = document.getElementById('ptHeroVehicleCategory');
        const brandPref = document.getElementById('ptHeroBrandPref');
        const modelInput = document.getElementById('ptHeroVehicleModel');

        const category = catSelect ? catSelect.value : "Passenger Car";
        const brand = brandPref ? brandPref.value : "Any Brand";
        let modelVal = modelInput ? modelInput.value.trim() : "";
        let sizeVal = heroSizeInput ? heroSizeInput.value.trim() : "";

        if (isVehicleTab && !modelVal) {
          modelVal = "General Passenger Vehicle";
        }
        if (!isVehicleTab && !sizeVal) {
          sizeVal = "Standard OEM Placard Size";
        }

        showFinderResultsModal({
          category: category,
          brand: brand,
          searchMethod: isVehicleTab ? "Vehicle Model" : "Tyre Size",
          size: sizeVal || "Standard OEM Specification",
          vehicleModel: modelVal || "Multi-Brand Search"
        });
      });
    }
  }

  /**
   * Finder Results Display Modal
   */
  function showFinderResultsModal(query) {
    let modalEl = document.getElementById('ptFinderResultsModal');
    if (!modalEl) {
      const modalHtml = `
        <div class="modal fade" id="ptFinderResultsModal" tabindex="-1" aria-labelledby="ptFinderModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <div>
                  <h5 class="modal-title fw-bold text-dark mb-0" id="ptFinderModalLabel">
                    <i class="bi bi-disc text-primary me-2"></i> Suitable Tyre Options & Recommendations
                  </h5>
                  <p class="text-muted small mb-0 mt-1">Based on your selection at Perfect Tyre Showroom</p>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="p-3 mb-4 rounded-3 bg-light border">
                  <div class="row g-2 text-dark small">
                    <div class="col-sm-6">
                      <strong>Vehicle Category:</strong> <span id="ptModalResCat"></span>
                    </div>
                    <div class="col-sm-6">
                      <strong>Selected Brand:</strong> <span id="ptModalResBrand"></span>
                    </div>
                    <div class="col-sm-6">
                      <strong>Tyre Size / Spec:</strong> <span id="ptModalResSize" class="text-primary fw-bold font-monospace"></span>
                    </div>
                    <div class="col-sm-6">
                      <strong>Search Criteria:</strong> <span id="ptModalResMethod"></span>
                    </div>
                  </div>
                </div>

                <div class="alert alert-warning border-0 d-flex gap-2 align-items-center py-2 px-3 small mb-4" style="background:#FFFBEB; color:#92400E;">
                  <i class="bi bi-shield-check fs-5"></i>
                  <div>
                    <strong>Verification Notice:</strong> Tyre compatibility and real-time showroom availability should always be confirmed with our technicians against your vehicle's manufacturer tyre placard.
                  </div>
                </div>

                <h6 class="fw-bold mb-3 text-dark">Recommended Tyre Patterns from Authorized Ranges:</h6>
                <div class="row g-3 mb-3" id="ptModalResCards">
                  <!-- Injected via JavaScript -->
                </div>
              </div>
              <div class="modal-footer flex-column flex-sm-row justify-content-between gap-2">
                <div class="small text-muted">
                  Static showroom catalogue. No online payment required.
                </div>
                <div class="d-flex gap-2">
                  <button type="button" class="btn btn-outline-secondary btn-pt-sm" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-pt-whatsapp btn-pt-sm d-flex align-items-center gap-1" id="ptModalWhatsAppBtn">
                    <i class="bi bi-whatsapp"></i> Enquire on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHtml);
      modalEl = document.getElementById('ptFinderResultsModal');
    }

    document.getElementById('ptModalResCat').textContent = query.category;
    document.getElementById('ptModalResBrand').textContent = query.brand;
    document.getElementById('ptModalResSize').textContent = query.size;
    document.getElementById('ptModalResMethod').textContent = query.searchMethod;

    // Filter matching or representative tyres
    const cardsContainer = document.getElementById('ptModalResCards');
    cardsContainer.innerHTML = '';

    let matched = SAMPLE_TYRE_CATALOG.filter(item => {
      if (!query.brand || query.brand === 'All Available Brands' || query.brand === 'Any Brand') return true;
      const qb = query.brand.toLowerCase().replace(/[^a-z]/g, '');
      const ib = item.brand.toLowerCase().replace(/[^a-z]/g, '');
      return ib.includes(qb) || qb.includes(ib) || (qb.includes('machelin') && ib.includes('michelin'));
    });

    if (matched.length === 0) {
      matched = SAMPLE_TYRE_CATALOG.slice(0, 2);
    } else {
      matched = matched.slice(0, 2);
    }

    matched.forEach(tyre => {
      const cardHtml = `
        <div class="col-sm-6">
          <div class="p-3 border rounded-3 bg-white h-100 d-flex flex-column justify-content-between">
            <div>
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="badge bg-primary-subtle text-primary fw-bold small">${tyre.brand}</span>
                <span class="font-monospace small text-muted">${query.size !== 'General Category' ? query.size : tyre.size}</span>
              </div>
              <h6 class="fw-bold text-dark mb-1">${tyre.model}</h6>
              <p class="text-muted small mb-2">${tyre.patternType}</p>
              <p class="text-secondary small mb-0">${tyre.description}</p>
            </div>
          </div>
        </div>
      `;
      cardsContainer.insertAdjacentHTML('beforeend', cardHtml);
    });

    // Setup WhatsApp Enquiry Button
    const waBtn = document.getElementById('ptModalWhatsAppBtn');
    if (waBtn) {
      waBtn.onclick = function () {
        handleWhatsAppAction({
          category: query.category,
          vehicle: query.vehicleModel,
          tyreSize: query.size,
          brand: query.brand,
          service: "Tyre Availability & Pricing Inquiry",
          message: "Looking for suitable tyres in this dimension."
        });
      };
    }

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }

  /**
   * --------------------------------------------------------------------------
   * 6. Interactive Tyre Anatomy Visualizer (tyres.html)
   * --------------------------------------------------------------------------
   */
  function initTyreAnatomyVisualizer() {
    const parts = document.querySelectorAll('.pt-size-part');
    const titleEl = document.getElementById('ptAnatomyTitle');
    const descEl = document.getElementById('ptAnatomyDesc');
    const noteEl = document.getElementById('ptAnatomyNote');

    if (!parts.length || !titleEl || !descEl) return;

    const anatomyData = {
      width: {
        title: "205 — Nominal Tyre Width (Millimetres)",
        desc: "This 3-digit number indicates the tyre's width from sidewall to sidewall in millimetres when mounted on its recommended rim width. A wider tyre generally provides a larger contact patch and cornering stability.",
        note: "Placard check: Verify vehicle manufacturer's rim width tolerance before opting for wider tyres."
      },
      aspect: {
        title: "55 — Aspect Ratio / Profile (Percentage %)",
        desc: "The aspect ratio is the height of the tyre sidewall expressed as a percentage of the tyre width (in this case, sidewall height is 55% of 205mm = 112.75mm). Lower numbers (like 40 or 45) offer sportier handling; higher numbers (like 65 or 70) provide greater cushion and road comfort.",
        note: "Maintaining the correct aspect ratio prevents speedometer and odometer calibration errors."
      },
      construction: {
        title: "R — Radial Construction",
        desc: "The letter 'R' stands for Radial, indicating that the internal carcass ply cords run radially at 90 degrees to the direction of travel. Radial tyres are the global automotive standard, providing flexible sidewalls, reduced fuel consumption, and cooler running temperatures.",
        note: "Almost all modern passenger cars and highway commercial vehicles utilize radial tyre construction."
      },
      diameter: {
        title: "16 — Wheel Rim Diameter (Inches)",
        desc: "This 2-digit number denotes the diameter of the wheel rim in inches that the tyre is engineered to fit. A tyre with '16' must only be installed onto a matching 16-inch wheel rim.",
        note: "Never attempt to mount a tyre on a rim of a different diameter; doing so is extremely hazardous."
      }
    };

    parts.forEach(part => {
      part.addEventListener('click', () => {
        parts.forEach(p => p.classList.remove('active'));
        part.classList.add('active');

        const key = part.getAttribute('data-part');
        if (anatomyData[key]) {
          titleEl.textContent = anatomyData[key].title;
          descEl.textContent = anatomyData[key].desc;
          if (noteEl) noteEl.textContent = anatomyData[key].note;
        }
      });
    });
  }

  /**
   * --------------------------------------------------------------------------
   * 7. Interactive Tyre Catalogue Filter (tyres.html)
   * --------------------------------------------------------------------------
   */
  function initTyreCatalogueFilter() {
    const filterCatPills = document.querySelectorAll('[data-filter-cat]');
    const filterBrandPills = document.querySelectorAll('[data-filter-brand]');
    const gridItems = document.querySelectorAll('.pt-catalogue-item');
    const emptyState = document.getElementById('ptEmptyFilterState');
    const resultCount = document.getElementById('ptFilterCount');

    if (!gridItems.length) return;

    let activeCategory = 'all';
    let activeBrand = 'all';

    function applyFilter() {
      let visibleCount = 0;

      gridItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        const itemBrand = item.getAttribute('data-brand');

        const matchCat = (activeCategory === 'all' || itemCat === activeCategory);
        const matchBrand = (activeBrand === 'all' || itemBrand === activeBrand);

        if (matchCat && matchBrand) {
          item.classList.remove('d-none');
          visibleCount++;
        } else {
          item.classList.add('d-none');
        }
      });

      if (resultCount) {
        resultCount.textContent = `Showing ${visibleCount} tyre option${visibleCount === 1 ? '' : 's'}`;
      }

      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.classList.remove('d-none');
        } else {
          emptyState.classList.add('d-none');
        }
      }
    }

    filterCatPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterCatPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.getAttribute('data-filter-cat');
        applyFilter();
      });
    });

    filterBrandPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterBrandPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeBrand = pill.getAttribute('data-filter-brand');
        applyFilter();
      });
    });

    // Check URL parameters for pre-selected brand or category (e.g. from hero slides)
    const urlParams = new URLSearchParams(window.location.search);
    const brandParam = urlParams.get('brand');
    const catParam = urlParams.get('cat') || urlParams.get('category');

    if (brandParam) {
      const pClean = brandParam.toLowerCase().replace(/[^a-z]/g, '');
      filterBrandPills.forEach(pill => {
        const pillClean = pill.getAttribute('data-filter-brand').toLowerCase().replace(/[^a-z]/g, '');
        if (pillClean === pClean ||
            (pClean.includes('apollo') && pillClean.includes('apollo')) ||
            (pClean.includes('michelin') && pillClean.includes('michelin')) ||
            (pClean.includes('machelin') && pillClean.includes('michelin')) ||
            (pClean.includes('firestone') && pillClean.includes('firestone')) ||
            (pClean.includes('yokohama') && pillClean.includes('yokohama')) ||
            (pClean.includes('bridgestone') && pillClean.includes('bridgestone'))) {
          filterBrandPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          activeBrand = pill.getAttribute('data-filter-brand');
        }
      });
    }

    if (catParam) {
      filterCatPills.forEach(pill => {
        if (pill.getAttribute('data-filter-cat').toLowerCase() === catParam.toLowerCase()) {
          filterCatPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          activeCategory = pill.getAttribute('data-filter-cat');
        }
      });
    }

    applyFilter();
  }

  /**
   * --------------------------------------------------------------------------
   * 8. Contact & Enquiry Form Handling
   * --------------------------------------------------------------------------
   */
  function initEnquiryForm() {
    const enquiryForm = document.getElementById('ptEnquiryForm');
    if (!enquiryForm) return;

    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!enquiryForm.checkValidity()) {
        e.stopPropagation();
        enquiryForm.classList.add('was-validated');
        return;
      }

      const name = document.getElementById('ptCustName') ? document.getElementById('ptCustName').value.trim() : "";
      const phone = document.getElementById('ptCustPhone') ? document.getElementById('ptCustPhone').value.trim() : "";
      const category = document.getElementById('ptCustCategory') ? document.getElementById('ptCustCategory').value : "";
      const vehicle = document.getElementById('ptCustVehicle') ? document.getElementById('ptCustVehicle').value.trim() : "";
      const tyreSize = document.getElementById('ptCustSize') ? document.getElementById('ptCustSize').value.trim() : "";
      const brand = document.getElementById('ptCustBrand') ? document.getElementById('ptCustBrand').value : "";
      const service = document.getElementById('ptCustService') ? document.getElementById('ptCustService').value : "";
      const message = document.getElementById('ptCustMsg') ? document.getElementById('ptCustMsg').value.trim() : "";

      const details = {
        customerName: name,
        customerPhone: phone,
        category: category,
        vehicle: vehicle,
        tyreSize: tyreSize,
        brand: brand,
        service: service,
        message: message
      };

      showEnquirySuccessModal(details);
    });
  }

  /**
   * Enquiry Confirmation Modal (Transparent client-side review)
   */
  function showEnquirySuccessModal(details) {
    let modalEl = document.getElementById('ptEnquirySuccessModal');
    if (!modalEl) {
      const modalHtml = `
        <div class="modal fade" id="ptEnquirySuccessModal" tabindex="-1" aria-labelledby="ptEnquiryModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title fw-bold text-dark d-flex align-items-center gap-2" id="ptEnquiryModalLabel">
                  <i class="bi bi-check-circle-fill text-success"></i> Tyre Enquiry Prepared
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="alert alert-secondary small mb-3">
                  <strong>Notice:</strong> This is a static frontend website. To submit this enquiry directly to the Perfect Tyre team, choose one of the options below.
                </div>
                <div class="p-3 bg-light rounded border small mb-3">
                  <div class="mb-1"><strong>Name:</strong> <span id="ptEnqName"></span></div>
                  <div class="mb-1"><strong>Phone:</strong> <span id="ptEnqPhone"></span></div>
                  <div class="mb-1"><strong>Category:</strong> <span id="ptEnqCat"></span></div>
                  <div class="mb-1"><strong>Vehicle:</strong> <span id="ptEnqVeh"></span></div>
                  <div class="mb-1"><strong>Tyre Size:</strong> <span id="ptEnqSize" class="font-monospace text-primary"></span></div>
                  <div class="mb-1"><strong>Preferred Brand:</strong> <span id="ptEnqBrand"></span></div>
                  <div class="mb-1"><strong>Required Service:</strong> <span id="ptEnqServ"></span></div>
                  <div class="mb-0"><strong>Message:</strong> <span id="ptEnqMsg"></span></div>
                </div>
              </div>
              <div class="modal-footer flex-column flex-sm-row justify-content-between gap-2">
                <button type="button" class="btn btn-outline-secondary btn-pt-sm" data-bs-dismiss="modal">Edit Details</button>
                <div class="d-flex gap-2">
                  <button type="button" class="btn btn-pt-whatsapp btn-pt-sm d-flex align-items-center gap-1" id="ptSendWaBtn">
                    <i class="bi bi-whatsapp"></i> Send via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHtml);
      modalEl = document.getElementById('ptEnquirySuccessModal');
    }

    document.getElementById('ptEnqName').textContent = details.customerName || "Not provided";
    document.getElementById('ptEnqPhone').textContent = details.customerPhone || "Not provided";
    document.getElementById('ptEnqCat').textContent = details.category || "Any";
    document.getElementById('ptEnqVeh').textContent = details.vehicle || "General";
    document.getElementById('ptEnqSize').textContent = details.tyreSize || "To be inspected";
    document.getElementById('ptEnqBrand').textContent = details.brand || "Any Available";
    document.getElementById('ptEnqServ').textContent = details.service || "Tyre Sales";
    document.getElementById('ptEnqMsg').textContent = details.message || "None";

    const waBtn = document.getElementById('ptSendWaBtn');
    if (waBtn) {
      waBtn.onclick = function () {
        handleWhatsAppAction(details);
      };
    }

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }

  /**
   * --------------------------------------------------------------------------
   * 9. Generic WhatsApp Click-to-Chat Triggers
   * --------------------------------------------------------------------------
   */
  function initGenericWhatsAppButtons() {
    const waButtons = document.querySelectorAll('.js-whatsapp-enquire');
    waButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const brand = btn.getAttribute('data-brand') || "Leading Brands";
        const category = btn.getAttribute('data-category') || "Vehicle Tyres";
        const service = btn.getAttribute('data-service') || "General Tyre Enquiry";
        const tyreSize = btn.getAttribute('data-size') || "Standard Fitment";

        handleWhatsAppAction({
          category: category,
          vehicle: "Vehicle enquiry",
          tyreSize: tyreSize,
          brand: brand,
          service: service,
          message: "Looking for current showroom availability and pricing options."
        });
      });
    });
  }

  /**
   * --------------------------------------------------------------------------
   * 9.5. Interactive 5-Tyre Showcase Slider (Hero Section)
   * --------------------------------------------------------------------------
   */
  function initHeroTyreSlider() {
    const heroBgSlider = document.getElementById('ptHeroBgSlider');
    const heroSection = document.getElementById('ptHero') || document.querySelector('.pt-hero');
    if (!heroBgSlider || !heroSection) return;

    const slides = heroBgSlider.querySelectorAll('.pt-hero-bg-slide');
    const slideDots = heroSection.querySelectorAll('.pt-hero-slide-dot');
    const prevBtn = document.getElementById('ptHeroPrevBtn');
    const nextBtn = document.getElementById('ptHeroNextBtn');

    if (!slides.length) return;

    let currentIndex = 0;
    let autoPlayTimer = null;
    const intervalMs = 5000;

    function goToSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }
      currentIndex = index;

      slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      slideDots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function startAutoPlay() {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
      autoPlayTimer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, intervalMs);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIndex - 1);
        startAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIndex + 1);
        startAutoPlay();
      });
    }

    slideDots.forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(idx);
        startAutoPlay();
      });
    });

    // Mobile touch swipe gesture support
    let touchStartX = 0;
    let touchEndX = 0;

    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 45) {
        if (diffX < 0) {
          goToSlide(currentIndex + 1);
        } else {
          goToSlide(currentIndex - 1);
        }
        startAutoPlay();
      }
    }, { passive: true });

    // Initialize first slide and continuous auto-play (uninterrupted by hover)
    goToSlide(0);
    startAutoPlay();
  }
  /**
   * --------------------------------------------------------------------------
   * 10. Initialization on DOMContentLoaded
   * --------------------------------------------------------------------------
   */
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHeroTyreSlider();
    initTyreFinder();
    initTyreAnatomyVisualizer();
    initTyreCatalogueFilter();
    initEnquiryForm();
    initGenericWhatsAppButtons();
  });

  // Expose configuration globally for developer reference or console inspection
  window.PERFECT_TYRE_CONFIG = BUSINESS_CONFIG;

})();
