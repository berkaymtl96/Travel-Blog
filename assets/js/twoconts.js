(() => {
  const data = window.TwoContsData;
  if (!data) return;

  const state = { side: "europe", area: "besiktas", category: "all" };
  const sideButtons = [...document.querySelectorAll("[data-side-choice]")];
  const areaList = document.querySelector("#area-list");
  const categoryList = document.querySelector("#category-list");
  const placesGrid = document.querySelector("#places-grid");
  const areaEyebrow = document.querySelector("#area-eyebrow");
  const areaTitle = document.querySelector("#area-title");
  const areaDescription = document.querySelector("#area-description");
  const selectionText = document.querySelector("#selection-text");
  const countText = document.querySelector("#collection-count");

  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);

  const currentSide = () => data.sides[state.side];
  const currentArea = () => currentSide().areas.find(area => area.id === state.area);

  function renderSideButtons() {
    sideButtons.forEach(button => {
      const selected = button.dataset.sideChoice === state.side;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    document.body.dataset.side = state.side;
  }

  function renderAreas() {
    const side = currentSide();
    areaList.innerHTML = side.areas.map(area => {
      const selected = area.id === state.area;
      return `<button class="area-card${selected ? " is-selected" : ""}" type="button" data-area="${area.id}" aria-pressed="${selected}">
        <span class="area-number">${String(side.areas.indexOf(area) + 1).padStart(2, "0")}</span>
        <strong>${area.label}</strong>
        <small>${area.note}</small>
      </button>`;
    }).join("");

    areaList.querySelectorAll("[data-area]").forEach(button => {
      button.addEventListener("click", () => {
        state.area = button.dataset.area;
        render();
        document.querySelector("#recommendations").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function renderCategories() {
    const available = new Set(data.places.filter(place => place.side === state.side && place.area === state.area).map(place => place.category));
    if (state.category !== "all" && !available.has(state.category)) state.category = "all";
    categoryList.innerHTML = data.categories.filter(category => category.id === "all" || available.has(category.id)).map(category => {
      const selected = category.id === state.category;
      return `<button class="category-pill${selected ? " is-selected" : ""}" type="button" data-category="${category.id}" aria-pressed="${selected}">${category.label}</button>`;
    }).join("");

    categoryList.querySelectorAll("[data-category]").forEach(button => {
      button.addEventListener("click", () => {
        state.category = button.dataset.category;
        render();
      });
    });
  }

  function renderPlaces() {
    const area = currentArea();
    const matches = data.places.filter(place =>
      place.side === state.side &&
      place.area === state.area &&
      (state.category === "all" || place.category === state.category)
    );

    const category = data.categories.find(item => item.id === state.category);
    selectionText.textContent = state.category === "all"
      ? `${area.label}, ${currentSide().shortLabel}`
      : `${area.label} · ${category.label}`;

    countText.textContent = matches.length
      ? `${matches.length} TwoConts pick${matches.length === 1 ? "" : "s"}`
      : "Collection in progress";

    if (!matches.length) {
      placesGrid.innerHTML = `<article class="empty-card">
        <p class="eyebrow">CURATED, NOT CROWDED</p>
        <h3>No ${escapeHtml(category.label.toLowerCase())} picks here yet.</h3>
        <p>Try Everything to see the places in this neighbourhood, or choose another category.</p>
        <span class="empty-rule"></span>
      </article>`;
      return;
    }

    const summary = data.editorial && data.editorial.categorySummaries[state.category];
    const summaryMarkup = state.category !== "all" && summary ? `<div class="category-introduction"><h3>${escapeHtml(category.label)}</h3><p>${escapeHtml(summary)}</p></div>` : "";
    placesGrid.innerHTML = summaryMarkup + matches.map(place => {
      const imageStyle = place.image ? ` style="background-image:url('${escapeHtml(place.image)}')"` : "";
      const imageAlt = escapeHtml(place.imageAlt || place.name);
      const photoCredit = place.photoCredit
        ? `<div class="photo-credit"><a href="${escapeHtml(place.photoCredit.url)}" target="_blank" rel="noopener noreferrer">Photo: ${escapeHtml(place.photoCredit.label)}</a>${place.photoCredit.licenseUrl ? ` · <a href="${escapeHtml(place.photoCredit.licenseUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(place.photoCredit.license)}</a>` : place.photoCredit.license ? ` · ${escapeHtml(place.photoCredit.license)}` : ""}${place.photoCredit.changes ? `<br>${escapeHtml(place.photoCredit.changes)}` : ""}</div>`
        : "";

      return `<article class="place-card">
        ${place.image ? `<div class="place-image"${imageStyle} role="img" aria-label="${imageAlt}">
          <span>${escapeHtml(place.category)}</span>
          ${photoCredit}
        </div>` : ""}

        <div class="place-copy">
          ${place.imageCaption ? `<p class="image-caption">${escapeHtml(place.imageCaption)}</p>` : ""}
          <p class="place-kicker">${escapeHtml(place.kicker || area.label)}</p>
          <h3>${escapeHtml(place.name)}</h3>
          <p>${escapeHtml(place.description)}</p>
          ${place.tip ? `<p class="place-tip"><strong>Local tip</strong> ${escapeHtml(place.tip)}</p>` : ""}
          ${place.visitStatus === "closed" ? '<p class="place-visit-status"><strong>Currently closed</strong> — check reopening before visiting.</p>' : ""}
          ${place.sourceUrl ? `<a class="place-source" href="${escapeHtml(place.sourceUrl)}" target="_blank" rel="noopener noreferrer">Visitor information ↗</a>` : ""}
        </div>
      </article>`;
    }).join("");
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
    section.style.display = (!["karakoy", "kadikoy"].includes(state.area) ||
      !["all", "food"].includes(state.category)) ? "none" : "";
    section.innerHTML = `<div class="place-copy">
      <p class="place-kicker">FOOD EXPERIENCE · KARAKÖY &amp; KADIKÖY</p>
      <h3>Taste of Istanbul: Street Food &amp; Culture</h3>
      <p>Explore street food in Karaköy, cross to Kadıköy by ferry, and discover local markets with a guide.</p>
      <p class="place-tip"><strong>Before you book</strong> Food, drinks and transport are not included in the tour price. Check the listing for current options and meeting details.</p>
      <a class="nav-outline" href="https://www.getyourguide.com/istanbul-l56/taste-of-istanbul-food-tour-street-food-culture-t1361409/?partner_id=GTFXDFQ&amp;utm_medium=online_publisher" target="_blank" rel="sponsored noopener noreferrer">Check availability on GetYourGuide ↗</a>
      <p><small>Affiliate link: TwoConts may earn a commission if you book through this link, at no extra cost to you.</small></p>
    </div>`;
  }

  function renderIntroduction() {
    const side = currentSide();
    const area = currentArea();
    areaEyebrow.textContent = side.eyebrow;
    areaTitle.textContent = `${area.label}, at your pace.`;
    areaDescription.textContent = (data.editorial && data.editorial.intros[state.area]) || side.intro;
  }

  function render() {
    renderSideButtons();
    renderIntroduction();
    renderAreas();
    renderCategories();
    renderPlaces();
    renderFoodTour();
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

  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".site-nav");
  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }

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