(() => {
  const data = window.TwoContsData;
  if (!data) return;

  // Bookable experiences also make their relevant neighbourhood filters available.
  if (!data.sides.europe.areas.some(area => area.id === "beyazit")) {
    data.sides.europe.areas.push({ id: "beyazit", label: "Grand Bazaar & Beyazıt", note: "Market lanes, courtyards and crafts" });
  }
  if (data.editorial) data.editorial.intros.beyazit = "Explore the Grand Bazaar district through its market lanes, historic courtyards and workshops. A guided walk can help you discover corners beyond the main shopping routes.";
  if (!data.places.some(place => place.id === "grand-bazaar-rooftops-tour")) {
    data.places.push({
      id: "grand-bazaar-rooftops-tour", side: "europe", area: "beyazit",
      category: "shopping", secondaryCategories: ["hidden"],
      name: "Grand Bazaar: From Rooftops to the Secret Passages",
      kicker: "Guided market and hidden-passage walk",
      description: "Explore the Grand Bazaar district with a guide, discovering traditional shops, artisan workshops and historic courtyards. The experience includes rooftop access for a different perspective on the market.",
      tip: "Check your chosen option for the meeting point, route and current inclusions. Itineraries may change.",
      affiliateUrl: "https://www.getyourguide.com/istanbul-l56/tour-of-grand-bazaarfrom-rooftops-to-the-secret-passages-t643510/?partner_id=GTFXDFQ&utm_medium=online_publisher"
    });
  }
  if (!data.places.some(place => place.id === "sultanahmet-three-landmarks-tour")) {
    const photo = data.places.find(place => place.id === "blue-mosque");
    data.places.push({
      id: "sultanahmet-three-landmarks-tour", side: "europe", area: "sultanahmet", category: "culture",
      name: "Blue Mosque, Hagia Sophia & Basilica Cistern Tour",
      kicker: "Three Sultanahmet landmarks with a guide",
      description: "Explore three of the old city’s major landmarks on a small-group guided tour. The listing includes pre-reserved Hagia Sophia and Basilica Cistern admission alongside a visit to the Blue Mosque.",
      tip: "Check your selected option for the meeting point, language, admission details and visitor requirements before booking.",
      image: photo && photo.image, imageAlt: "Blue Mosque, one of the landmarks on this tour",
      photoCredit: photo && photo.photoCredit,
      affiliateLabel: "Book this Sultanahmet tour",
      affiliateUrl: "https://www.getyourguide.com/istanbul-l56/istanbul-blue-mosque-hagia-sophia-basilica-cistern-tour-t1051517/?partner_id=GTFXDFQ&utm_medium=online_publisher"
    });
  }
  const dolmabahce = data.places.find(place => place.id === "dolmabahce-palace");
  if (dolmabahce) {
    dolmabahce.affiliateUrl = "https://www.getyourguide.com/istanbul-l56/dolmabahce-palace-harem-skip-the-line-entry-audio-guide-t697865/?partner_id=GTFXDFQ&utm_medium=online_publisher";
    dolmabahce.affiliateLabel = "Book Dolmabahçe Palace & Harem tickets";
    dolmabahce.affiliateDescription = "This ticket option includes palace and Harem admission with an audio guide. Check the booking page for entry instructions and audio-guide collection requirements.";
  }
  if (!data.sides.europe.areas.some(area => area.id === "laleli")) {
    data.sides.europe.areas.push({ id: "laleli", label: "Laleli", note: "Old-city streets and a hammam pause" });
  }
  if (data.editorial) data.editorial.intros.laleli = "Laleli is part of Istanbul’s historic peninsula, west of the Grand Bazaar. Plan a Turkish bath experience here around your old-city sightseeing.";
  const balatPhoto = data.places.find(place => place.id === "balat-colourful-houses");
  const newExperiences = [
    {
      id: "uskudar-bosphorus-zipline", side: "asia", area: "uskudar", category: "bosphorus",
      name: "Zipline Adventure with Bosphorus Views", kicker: "Nakkaştepe Park · Üsküdar",
      description: "Ride a zipline over Nakkaştepe Park with views towards the Bosphorus and Istanbul’s skyline. The experience takes place within the park, with equipment and an orientation provided by the operator.",
      tip: "Check current operating conditions, participant requirements and meeting instructions before booking.",
      affiliateLabel: "Book the Nakkaştepe zipline",
      affiliateUrl: "https://www.getyourguide.com/istanbul-l56/istanbul-zipline-with-bosphorus-view-t438955/?partner_id=GTFXDFQ&utm_medium=online_publisher"
    },
    {
      id: "sultanahmet-sand-coffee-workshop", side: "europe", area: "sultanahmet", category: "cafes", secondaryCategories: ["culture"],
      name: "Sand-Brewed Turkish Coffee Workshop", kicker: "A hands-on coffee experience in Sultanahmet",
      description: "Learn how Turkish coffee is prepared using heated sand, explore its cultural significance and taste the finished coffee. A short workshop to pair with a day in the old city.",
      tip: "The listed meeting point is Villa Sphendone Suites in Sultanahmet. Follow the venue and arrival instructions on your booking confirmation.",
      affiliateLabel: "Book the Turkish coffee workshop",
      affiliateUrl: "https://www.getyourguide.com/istanbul-l56/istanbul-sand-brewed-turkish-coffee-workshop-in-old-town-t980464/?partner_id=GTFXDFQ&utm_medium=online_publisher"
    },
    {
      id: "fener-balat-walking-tour", side: "europe", area: "balat", category: "culture", secondaryCategories: ["hidden"],
      name: "Fener & Balat Guided Walking Tour", kicker: "Historic streets and neighbourhood heritage",
      description: "Walk through Fener and Balat with a guide to explore colourful streets and the neighbourhoods’ Greek, Armenian, Jewish and Bulgarian heritage. Discover religious landmarks and the stories behind the area’s historic buildings.",
      tip: "Check the current meeting point and itinerary on your booking. Wear comfortable shoes for the neighbourhood’s slopes and follow visitor guidance at religious sites.",
      image: balatPhoto && balatPhoto.image, imageAlt: "Colourful houses in Balat", photoCredit: balatPhoto && balatPhoto.photoCredit,
      affiliateLabel: "Book the Fener & Balat walking tour",
      affiliateUrl: "https://www.getyourguide.com/istanbul-l56/istanbul-fener-balat-half-day-guided-walking-tour-t454786/?partner_id=GTFXDFQ&utm_medium=online_publisher"
    },
    {
      id: "laleli-private-turkish-bath", side: "europe", area: "laleli", category: "culture",
      name: "Private Turkish Bath, Massage & Spa in the Old City", kicker: "A hammam experience in Laleli",
      description: "Take a break from sightseeing with a Turkish bath experience featuring a body scrub and foam treatment. Massage options vary by package. Bath and massage rooms are private for your booking; sauna, steam room and waiting areas are shared.",
      tip: "Check your selected package for the exact venue, treatment duration and what is included. Follow the provider’s preparation instructions.",
      affiliateLabel: "Book the Turkish bath & spa experience",
      affiliateUrl: "https://www.getyourguide.com/istanbul-l56/istanbul-private-turkish-bath-massage-and-spa-in-old-city-t593344/?partner_id=GTFXDFQ&utm_medium=online_publisher"
    }
  ];
  newExperiences.forEach(experience => {
    if (!data.places.some(place => place.id === experience.id)) data.places.push(experience);
  });
  const matchesCategory = (place, category) => category === "all" || place.category === category || (place.secondaryCategories || []).includes(category);
  const state = { side: "europe", area: "besiktas", category: "all" };
  const plannerState = { side: "europe", area: "auto", category: "all", time: "half" };
  const storageKey = "twoconts-saved-places-v1";
  const sideButtons = [...document.querySelectorAll("[data-side-choice]")];
  const areaList = document.querySelector("#area-list");
  const categoryList = document.querySelector("#category-list");
  const placesGrid = document.querySelector("#places-grid");
  const areaEyebrow = document.querySelector("#area-eyebrow");
  const areaTitle = document.querySelector("#area-title");
  const areaDescription = document.querySelector("#area-description");
  const selectionText = document.querySelector("#selection-text");
  const countText = document.querySelector("#collection-count");
  const planResult = document.querySelector("#plan-result");
  const savedList = document.querySelector("#saved-list");

  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);

  function getSavedIds() {
    try {
      const parsed = JSON.parse(window.localStorage.getItem(storageKey) || "[]");
      return new Set(Array.isArray(parsed) ? parsed.filter(id => data.places.some(place => place.id === id)) : []);
    } catch (error) {
      return new Set();
    }
  }

  const savedIds = getSavedIds();

  function persistSavedIds() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify([...savedIds]));
    } catch (error) {
      return;
    }
  }

  function currentSide() {
    return data.sides[state.side];
  }

  function currentArea() {
    return currentSide().areas.find(area => area.id === state.area);
  }

  function labelForCategory(categoryId) {
    const category = data.categories.find(item => item.id === categoryId);
    return category ? category.label : "Everything";
  }

  function mapsUrl(place, areaLabel) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(place.name + ", " + areaLabel + ", Istanbul");
  }

  function updateSavedCount() {
    document.querySelectorAll("[data-saved-count]").forEach(node => {
      node.textContent = String(savedIds.size);
      node.closest("a") && node.closest("a").setAttribute("aria-label", savedIds.size ? "My list, " + savedIds.size + " saved places" : "My list");
    });
  }

  function syncStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const requestedSide = params.get("side");
    if (requestedSide && data.sides[requestedSide]) state.side = requestedSide;
    const requestedArea = params.get("area");
    if (requestedArea && data.sides[state.side].areas.some(area => area.id === requestedArea)) {
      state.area = requestedArea;
    } else {
      state.area = data.sides[state.side].areas[0].id;
    }
    const requestedCategory = params.get("category");
    if (requestedCategory && data.categories.some(category => category.id === requestedCategory)) state.category = requestedCategory;
  }

  function syncUrl() {
    const url = new URL(window.location.href);
    if (state.side === "europe" && state.area === "besiktas" && state.category === "all") {
      url.searchParams.delete("side");
      url.searchParams.delete("area");
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("side", state.side);
      url.searchParams.set("area", state.area);
      if (state.category === "all") url.searchParams.delete("category");
      else url.searchParams.set("category", state.category);
    }
    window.history.replaceState({}, "", url);
  }

  function renderSideButtons() {
    sideButtons.forEach(button => {
      const selected = button.dataset.sideChoice === state.side;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-checked", String(selected));
    });
    document.body.dataset.side = state.side;
  }

  function renderAreas() {
    const side = currentSide();
    areaList.innerHTML = side.areas.map(area => {
      const selected = area.id === state.area;
      return '<button class="area-card' + (selected ? ' is-selected' : '') + '" type="button" role="radio" data-area="' + escapeHtml(area.id) + '" aria-checked="' + selected + '">' +
        '<span class="area-number">' + String(side.areas.indexOf(area) + 1).padStart(2, "0") + '</span>' +
        '<strong>' + escapeHtml(area.label) + '</strong><small>' + escapeHtml(area.note) + '</small></button>';
    }).join("");

    areaList.querySelectorAll("[data-area]").forEach(button => {
      button.addEventListener("click", () => {
        state.area = button.dataset.area;
        state.category = "all";
        render();
        document.querySelector("#recommendations").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function renderCategories() {
    const available = new Set(data.places.filter(place => place.side === state.side && place.area === state.area).flatMap(place => [place.category, ...(place.secondaryCategories || [])]));
    if (state.category !== "all" && !available.has(state.category)) state.category = "all";
    categoryList.innerHTML = data.categories.filter(category => category.id === "all" || available.has(category.id)).map(category => {
      const selected = category.id === state.category;
      return '<button class="category-pill' + (selected ? ' is-selected' : '') + '" type="button" role="radio" data-category="' + escapeHtml(category.id) + '" aria-checked="' + selected + '">' + escapeHtml(category.label) + '</button>';
    }).join("");

    categoryList.querySelectorAll("[data-category]").forEach(button => {
      button.addEventListener("click", () => {
        state.category = button.dataset.category;
        render();
      });
    });
  }

  function photoCreditMarkup(place) {
    if (!place.photoCredit) return "";
    const credit = place.photoCredit;
    let markup = '<div class="photo-credit"><a href="' + escapeHtml(credit.url) + '" target="_blank" rel="noopener noreferrer">Photo: ' + escapeHtml(credit.label) + '</a>';
    if (credit.licenseUrl) markup += ' · <a href="' + escapeHtml(credit.licenseUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(credit.license) + '</a>';
    else if (credit.license) markup += ' · ' + escapeHtml(credit.license);
    if (credit.changes) markup += '<br>' + escapeHtml(credit.changes);
    return markup + '</div>';
  }

  function towerBooking(place) {
    if (!["galata-tower", "galata-tower-galata"].includes(place.id)) return "";
    return '<div class="affiliate-booking"><p class="place-kicker">BOOK AN EXPERIENCE</p><h4>Galata Tower Entry Ticket with Audio Guide</h4><p>Arrange hosted entry, then explore the tower at your own pace with an audio guide.</p><p class="place-tip"><strong>Before you book</strong> Follow the host meeting instructions; security queues still apply. Check current prices, availability and inclusions on GetYourGuide.</p><a class="place-source" href="https://www.getyourguide.com/istanbul-l56/istanbul-galata-tower-entry-ticket-with-audio-guide-t446343/?partner_id=GTFXDFQ&amp;utm_medium=online_publisher" target="_blank" rel="sponsored noopener noreferrer">Book Galata Tower tickets ↗</a><p><small>Affiliate link: TwoConts may earn a commission if you book through this link, at no extra cost to you.</small></p></div>';
  }

  function placeActionsMarkup(place, area) {
    const isSaved = savedIds.has(place.id);
    return '<div class="place-actions"><a class="place-map" href="' + mapsUrl(place, area.label) + '" target="_blank" rel="noopener noreferrer">Open in Maps ↗</a>' +
      '<button class="save-place' + (isSaved ? ' is-saved' : '') + '" type="button" data-save-place="' + escapeHtml(place.id) + '" aria-pressed="' + isSaved + '">' + (isSaved ? 'Saved to my list' : 'Save place') + '</button></div>';
  }

  function bindSaveButtons(scope) {
    scope.querySelectorAll("[data-save-place]").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.savePlace;
        if (savedIds.has(id)) savedIds.delete(id);
        else savedIds.add(id);
        persistSavedIds();
        updateSavedCount();
        renderSaved();
        renderPlaces();
        renderPlanner();
      });
    });
  }

  function renderPlaces() {
    const area = currentArea();
    const matches = data.places.filter(place => place.side === state.side && place.area === state.area && matchesCategory(place, state.category));
    selectionText.textContent = state.category === "all" ? area.label + ", " + currentSide().shortLabel : area.label + " · " + labelForCategory(state.category);
    countText.textContent = matches.length ? matches.length + " considered stop" + (matches.length === 1 ? "" : "s") : "Collection in progress";

    if (!matches.length) {
      placesGrid.innerHTML = '<article class="empty-card"><p class="eyebrow">CURATED, NOT CROWDED</p><h3>No ' + escapeHtml(labelForCategory(state.category).toLowerCase()) + ' picks here yet.</h3><p>Try Everything to see the places in this neighbourhood, or choose another category.</p><span class="empty-rule"></span></article>';
      return;
    }

    const summary = data.editorial && data.editorial.categorySummaries[state.category];
    const summaryMarkup = state.category !== "all" && summary ? '<div class="category-introduction"><h3>' + escapeHtml(labelForCategory(state.category)) + '</h3><p>' + escapeHtml(summary) + '</p></div>' : "";
    placesGrid.innerHTML = summaryMarkup + matches.map(place => {
      const imageStyle = place.image ? ' style="background-image:url(&quot;' + escapeHtml(place.image) + '&quot;)"' : "";
      const image = place.image ? '<div class="place-image"' + imageStyle + ' role="img" aria-label="' + escapeHtml(place.imageAlt || place.name) + '"><span>' + escapeHtml(place.category) + '</span>' + photoCreditMarkup(place) + '</div>' : "";
      const caption = place.imageCaption ? '<p class="image-caption">' + escapeHtml(place.imageCaption) + '</p>' : "";
      const tip = place.tip ? '<p class="place-tip"><strong>Local tip</strong> ' + escapeHtml(place.tip) + '</p>' : "";
      const booking = place.affiliateUrl ? '<div class="affiliate-booking">' + (place.affiliateDescription ? '<p>' + escapeHtml(place.affiliateDescription) + '</p>' : "") + '<a class="place-source" href="' + escapeHtml(place.affiliateUrl) + '" target="_blank" rel="sponsored noopener noreferrer">' + escapeHtml(place.affiliateLabel || "Check this experience") + ' ↗</a><p><small>Affiliate link: TwoConts may earn a commission if you book through this link, at no extra cost to you.</small></p></div>' : "";
      const status = place.visitStatus === "closed" ? '<p class="place-visit-status"><strong>Currently closed</strong> — check reopening before visiting.</p>' : "";
      const source = place.sourceUrl ? '<a class="place-source" href="' + escapeHtml(place.sourceUrl) + '" target="_blank" rel="noopener noreferrer">Visitor information ↗</a>' : "";
      return '<article class="place-card">' + image + '<div class="place-copy">' + caption + '<p class="place-kicker">' + escapeHtml(place.kicker || area.label) + '</p><h3>' + escapeHtml(place.name) + '</h3><p>' + escapeHtml(place.description) + '</p>' + tip + towerBooking(place) + booking + status + source + placeActionsMarkup(place, area) + '</div></article>';
    }).join("");
    bindSaveButtons(placesGrid);
  }

  function renderFoodTour() {
    let section = document.querySelector("#food-tour");
    if (!section) {
      section = document.createElement("aside");
      section.id = "food-tour";
      section.className = "place-card";
      section.style.marginTop = "24px";
      section.setAttribute("aria-label", "Book a food tour");
      placesGrid.after(section);
    }
    section.style.display = (!["karakoy", "kadikoy"].includes(state.area) || !["all", "food"].includes(state.category)) ? "none" : "";
    section.innerHTML = '<div class="place-copy"><p class="place-kicker">FOOD EXPERIENCE · KARAKÖY &amp; KADIKÖY</p><h3>Taste of Istanbul: Street Food &amp; Culture</h3><p>Explore street food in Karaköy, cross to Kadıköy by ferry, and discover local markets with a guide.</p><p class="place-tip"><strong>Before you book</strong> Food, drinks and transport are not included in the tour price. Check the listing for current options and meeting details.</p><a class="nav-outline" href="https://www.getyourguide.com/istanbul-l56/taste-of-istanbul-food-tour-street-food-culture-t1361409/?partner_id=GTFXDFQ&amp;utm_medium=online_publisher" target="_blank" rel="sponsored noopener noreferrer">Check availability on GetYourGuide ↗</a><p><small>Affiliate link: TwoConts may earn a commission if you book through this link, at no extra cost to you.</small></p></div>';
  }

  function renderIntroduction() {
    const side = currentSide();
    const area = currentArea();
    areaEyebrow.textContent = side.eyebrow;
    areaTitle.textContent = area.label + ", at your pace.";
    areaDescription.textContent = (data.editorial && data.editorial.intros[state.area]) || side.intro;
  }

  function renderSaved() {
    if (!savedList) return;
    const savedPlaces = data.places.filter(place => savedIds.has(place.id));
    if (!savedPlaces.length) {
      savedList.innerHTML = '<div class="saved-empty"><p class="eyebrow">NOTHING SAVED YET</p><h3>See something you would make time for?</h3><p>Use “Save place” on any recommendation to keep it here for later.</p></div>';
      return;
    }
    savedList.innerHTML = '<div class="saved-actions"><p>' + savedPlaces.length + ' saved place' + (savedPlaces.length === 1 ? "" : "s") + ' for your Istanbul list.</p><div><button type="button" class="text-button" data-share-saved>Share my list</button><button type="button" class="text-button" data-clear-saved>Clear list</button></div></div><div class="saved-grid">' + savedPlaces.map(place => {
      const area = data.sides[place.side].areas.find(item => item.id === place.area);
      return '<article class="saved-card"><p class="place-kicker">' + escapeHtml(area ? area.label : "Istanbul") + '</p><h3>' + escapeHtml(place.name) + '</h3><p>' + escapeHtml(place.kicker || "A TwoConts pick") + '</p><div class="place-actions"><a class="place-map" href="' + mapsUrl(place, area ? area.label : "Istanbul") + '" target="_blank" rel="noopener noreferrer">Open in Maps ↗</a><button class="save-place is-saved" type="button" data-save-place="' + escapeHtml(place.id) + '" aria-pressed="true">Remove</button></div></article>';
    }).join("") + '</div>';
    bindSaveButtons(savedList);
    const clearButton = savedList.querySelector("[data-clear-saved]");
    if (clearButton) clearButton.addEventListener("click", () => {
      savedIds.clear();
      persistSavedIds();
      updateSavedCount();
      renderSaved();
      renderPlaces();
      renderPlanner();
    });
    const shareButton = savedList.querySelector("[data-share-saved]");
    if (shareButton) shareButton.addEventListener("click", async () => {
      const text = "My TwoConts Istanbul list: " + savedPlaces.map(place => place.name).join(", ") + ".";
      const url = window.location.href;
      try {
        if (navigator.share) await navigator.share({ title: "My TwoConts Istanbul list", text, url });
        else if (navigator.clipboard) {
          await navigator.clipboard.writeText(text + " " + url);
          shareButton.textContent = "List copied";
          window.setTimeout(() => { shareButton.textContent = "Share my list"; }, 1800);
        }
      } catch (error) {
        return;
      }
    });
  }

  function renderPlanner() {
    document.querySelectorAll("[data-plan-side]").forEach(button => {
      const selected = button.dataset.planSide === plannerState.side;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-checked", String(selected));
    });
    const planAreaOptions = document.querySelector("#plan-area-options");
    if (planAreaOptions) {
      const side = data.sides[plannerState.side];
      planAreaOptions.innerHTML = '<button type="button" class="planner-option' + (plannerState.area === "auto" ? ' is-selected' : '') + '" role="radio" aria-checked="' + (plannerState.area === "auto") + '" data-plan-area="auto">Let TwoConts choose</button>' + side.areas.map(area => '<button type="button" class="planner-option' + (plannerState.area === area.id ? ' is-selected' : '') + '" role="radio" aria-checked="' + (plannerState.area === area.id) + '" data-plan-area="' + escapeHtml(area.id) + '">' + escapeHtml(area.label) + '</button>').join("");
      planAreaOptions.querySelectorAll("[data-plan-area]").forEach(button => {
        button.addEventListener("click", () => {
          plannerState.area = button.dataset.planArea;
          renderPlanner();
        });
      });
    }
    document.querySelectorAll("[data-plan-category]").forEach(button => {
      const selected = button.dataset.planCategory === plannerState.category;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-checked", String(selected));
    });
    document.querySelectorAll("[data-plan-time]").forEach(button => {
      const selected = button.dataset.planTime === plannerState.time;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-checked", String(selected));
    });
  }

  function pickPlanArea(side, category) {
    const candidates = data.sides[side].areas.map(area => {
      const matches = data.places.filter(place => place.side === side && place.area === area.id && matchesCategory(place, category));
      return { area, matches };
    }).filter(candidate => candidate.matches.length);
    if (plannerState.area !== "auto") {
      const selected = candidates.find(candidate => candidate.area.id === plannerState.area);
      if (selected) return selected;
      if (category !== "all") return pickPlanArea(side, "all");
    }
    if (!candidates.length && category !== "all") return pickPlanArea(side, "all");
    if (!candidates.length) return null;
    const current = candidates.find(candidate => side === state.side && candidate.area.id === state.area);
    if (current) return current;
    return candidates.sort((a, b) => b.matches.length - a.matches.length)[0];
  }

  function planDirectionsUrl(stops, area) {
    const destination = stops[stops.length - 1];
    const url = new URL("https://www.google.com/maps/dir/");
    url.searchParams.set("api", "1");
    url.searchParams.set("destination", destination.name + ", " + area.label + ", Istanbul");
    if (stops.length > 1) url.searchParams.set("waypoints", stops.slice(0, -1).map(place => place.name + ", " + area.label + ", Istanbul").join("|"));
    return url.toString();
  }

  function buildPlan() {
    const side = plannerState.side;
    let category = plannerState.category;
    let choice = pickPlanArea(side, category);
    if (!choice) {
      planResult.innerHTML = '<p class="plan-placeholder">We are still building this part of the guide. Try another interest or side.</p>';
      return;
    }
    if (!choice.matches.length && category !== "all") {
      category = "all";
      choice = pickPlanArea(side, category);
    }
    const stopsByTime = { short: 2, half: 3, full: 4 };
    const stops = choice.matches.slice(0, stopsByTime[plannerState.time]);
    const timeLabel = { short: "a couple of hours", half: "a half day", full: "a full day" }[plannerState.time];
    const categoryLabel = category === "all" ? "a little of everything" : labelForCategory(category).toLowerCase();
    planResult.innerHTML = '<article class="route-card"><p class="eyebrow">YOUR ' + escapeHtml(timeLabel.toUpperCase()) + ' IN ' + escapeHtml(choice.area.label.toUpperCase()) + '</p><h3>' + escapeHtml(choice.area.label) + ', at your pace.</h3><p>Start with ' + escapeHtml(categoryLabel) + ' and keep the route focused on one part of the city.</p><ol class="route-stops">' + stops.map((place, index) => '<li><span>' + String(index + 1).padStart(2, "0") + '</span><div><h4>' + escapeHtml(place.name) + '</h4><p>' + escapeHtml(place.kicker || choice.area.label) + '</p><div class="route-actions"><a href="' + mapsUrl(place, choice.area.label) + '" target="_blank" rel="noopener noreferrer">Map stop ↗</a><button type="button" data-save-place="' + escapeHtml(place.id) + '" aria-pressed="' + savedIds.has(place.id) + '">' + (savedIds.has(place.id) ? "Saved" : "Save") + '</button></div></div></li>').join("") + '</ol><div class="route-footer"><a class="route-map" href="' + planDirectionsUrl(stops, choice.area) + '" target="_blank" rel="noopener noreferrer">Open this route in Maps ↗</a><button type="button" class="text-button" data-edit-route>Change this route</button><p>Check current opening details before you go.</p></div></article>';
    bindSaveButtons(planResult);
    const editRouteButton = planResult.querySelector("[data-edit-route]");
    if (editRouteButton) editRouteButton.addEventListener("click", () => {
      document.querySelector("#plan").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    planResult.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function render() {
    renderSideButtons();
    renderIntroduction();
    renderAreas();
    renderCategories();
    renderPlaces();
    renderFoodTour();
    renderPlanner();
    renderSaved();
    updateSavedCount();
    syncUrl();
  }

  sideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const nextSide = button.dataset.sideChoice;
      if (nextSide === state.side) return;
      state.side = nextSide;
      state.area = data.sides[nextSide].areas[0].id;
      state.category = "all";
      render();
      document.querySelector("#explore").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-plan-side]").forEach(button => button.addEventListener("click", () => {
    plannerState.side = button.dataset.planSide;
    plannerState.area = "auto";
    renderPlanner();
  }));
  document.querySelectorAll("[data-plan-category]").forEach(button => button.addEventListener("click", () => {
    plannerState.category = button.dataset.planCategory;
    renderPlanner();
  }));
  document.querySelectorAll("[data-plan-time]").forEach(button => button.addEventListener("click", () => {
    plannerState.time = button.dataset.planTime;
    renderPlanner();
  }));
  const buildButton = document.querySelector("[data-plan-build]");
  if (buildButton) buildButton.addEventListener("click", buildPlan);

  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".site-nav");
  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }

  window.addEventListener("popstate", () => {
    syncStateFromUrl();
    render();
  });

  syncStateFromUrl();
  render();
})();

(() => {
  const frame = document.querySelector(".hero-slideshow");
  if (!frame) return;
  const slides = Array.from(frame.querySelectorAll(".hero-slide"));
  const pause = frame.querySelector("[data-hero-pause]");
  const count = frame.querySelector("[data-hero-count]");
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let index = 0, paused = motion.matches, timer = null, request = 0;
  const failed = new Set();
  // Eagerly load the small slideshow images so hidden slides are ready.
  slides.forEach(slide => { slide.querySelector("img").loading = "eager"; });
  function schedule() {
    window.clearInterval(timer);
    timer = null;
    pause.textContent = paused ? "Play" : "Pause";
    pause.setAttribute("aria-label", paused ? "Play photo slideshow" : "Pause photo slideshow");
    if (!paused && !document.hidden) timer = window.setInterval(() => show(index + 1, 1), 5500);
  }
  async function ready(img) {
    if (img.complete) return img.naturalWidth > 0;
    return new Promise(resolve => {
      let timeout;
      const finish = value => {
        window.clearTimeout(timeout);
        img.removeEventListener("load", loaded);
        img.removeEventListener("error", broken);
        resolve(value);
      };
      const loaded = () => finish(img.naturalWidth > 0);
      const broken = () => finish(false);
      img.addEventListener("load", loaded);
      img.addEventListener("error", broken);
      timeout = window.setTimeout(() => finish(false), 4000);
    });
  }
  async function show(target, direction) {
    const token = ++request;
    for (let attempt = 0; attempt < slides.length; attempt++) {
      const next = ((target + attempt * direction) % slides.length + slides.length) % slides.length;
      if (failed.has(next)) continue;
      const img = slides[next].querySelector("img");
      const loaded = await ready(img);
      if (token !== request) return;
      if (!loaded) { failed.add(next); continue; }
      slides[index].classList.remove("is-active");
      slides[index].setAttribute("aria-hidden", "true");
      slides[next].classList.add("is-active");
      slides[next].setAttribute("aria-hidden", "false");
      index = next;
      count.textContent = (index + 1) + " / " + slides.length;
      return;
    }
  }
  frame.querySelector("[data-hero-prev]").addEventListener("click", () => { show(index - 1, -1); schedule(); });
  frame.querySelector("[data-hero-next]").addEventListener("click", () => { show(index + 1, 1); schedule(); });
  pause.addEventListener("click", () => { paused = !paused; schedule(); });
  document.addEventListener("visibilitychange", schedule);
  motion.addEventListener("change", () => { paused = motion.matches; schedule(); });
  schedule();
})();