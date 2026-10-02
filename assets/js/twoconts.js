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
    categoryList.innerHTML = data.categories.map(category => {
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
        <h3>${escapeHtml(area.label)} is next.</h3>
        <p>TwoConts will only publish places we would genuinely send a friend to. This collection is waiting for its first recommendation.</p>
        <span class="empty-rule"></span>
        <p class="empty-note">Add a place in <code>assets/js/twoconts-data.js</code> and this card becomes a full recommendation automatically.</p>
      </article>`;
      return;
    }

    placesGrid.innerHTML = matches.map(place => `<article class="place-card">
      <div class="place-image"${place.image ? ` style="background-image:url('${escapeHtml(place.image)}')"` : ""}>
        <span>${escapeHtml(place.category)}</span>
      </div>
      <div class="place-copy">
        <p class="place-kicker">${escapeHtml(place.kicker || area.label)}</p>
        <h3>${escapeHtml(place.name)}</h3>
        <p>${escapeHtml(place.description)}</p>
        ${place.tip ? `<p class="place-tip"><strong>Local tip</strong> ${escapeHtml(place.tip)}</p>` : ""}
      </div>
    </article>`).join("");
  }

  function renderIntroduction() {
    const side = currentSide();
    const area = currentArea();
    areaEyebrow.textContent = side.eyebrow;
    areaTitle.textContent = `${area.label}, at your pace.`;
    areaDescription.textContent = side.intro;
  }

  function render() {
    renderSideButtons();
    renderIntroduction();
    renderAreas();
    renderCategories();
    renderPlaces();
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