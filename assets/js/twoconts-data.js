/* TwoConts content model
   First edition: carefully selected, photo-credited recommendations.
   Every card links a location, category and practical local note. */
window.TwoContsData = {
  sides: {
    europe: {
      label: "European side",
      shortLabel: "Europe",
      eyebrow: "WEST OF THE BOSPHORUS",
      intro: "Creative streets, historic waterfronts and green escapes—at the pace that suits your day.",
      areas: [
        { id: "karakoy", label: "Karaköy", note: "Coffee, design, side streets" },
        { id: "besiktas", label: "Beşiktaş", note: "Palaces and Bosphorus energy" },
        { id: "sariyer", label: "Sarıyer", note: "Forest paths and viewpoints" },
        { id: "eyupsultan", label: "Eyüpsultan", note: "Golden Horn from above" },
        { id: "beyoglu", label: "Beyoğlu", note: "Historic avenues, late coffee" },
        { id: "sirkeci", label: "Sirkeci", note: "Old-city dining" },
        { id: "ortakoy", label: "Ortaköy", note: "Bridge lights and dinner" },
        { id: "balat", label: "Balat", note: "Colourful, historic streets" },
        { id: "sultanahmet", label: "Sultanahmet", note: "The old city" },
        { id: "galata", label: "Galata", note: "Views and late nights" },
        { id: "sisli", label: "Şişli", note: "A local city rhythm" }
      ]
    },
    asia: {
      label: "Asian side",
      shortLabel: "Asia",
      eyebrow: "EAST OF THE BOSPHORUS",
      intro: "Sea air, quiet rituals and neighbourhoods that reward a slower itinerary.",
      areas: [
        { id: "moda", label: "Moda", note: "Sea walks and café tables" },
        { id: "kadikoy", label: "Kadıköy", note: "Markets and makers" },
        { id: "uskudar", label: "Üsküdar", note: "Ferries and silhouettes" },
        { id: "kuzguncuk", label: "Kuzguncuk", note: "Village-like charm" },
        { id: "beylerbeyi", label: "Beylerbeyi", note: "Imperial waterfront" },
        { id: "kandilli", label: "Kandilli", note: "A quieter Bosphorus" },
        { id: "beykoz", label: "Beykoz", note: "Fortress lanes and water" },
        { id: "camlica", label: "Çamlıca", note: "The city from above" }
      ]
    }
  },
  categories: [
    { id: "all", label: "Everything" },
    { id: "food", label: "Food" },
    { id: "cafes", label: "Cafés" },
    { id: "culture", label: "Culture" },
    { id: "nightlife", label: "Nightlife" },
    { id: "hidden", label: "Hidden places" },
    { id: "bosphorus", label: "Bosphorus" },
    { id: "shopping", label: "Shopping" }
  ],
  places: [
    {
      id: "karabatak",
      side: "europe", area: "karakoy", category: "cafes",
      name: "Karabatak",
      kicker: "Karaköy coffee pause",
      description: "An atmospheric coffee stop on a small Karaköy street—best used as the start or reset point for a proper neighbourhood walk.",
      tip: "Pair it with the lanes around Kara Ali Kaptan Street, not just a quick coffee.",
      image: "https://images.unsplash.com/photo-1779095146271-4f42f451d3d4?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Historic Istanbul rooftops and streets",
      photoCredit: { label: "Tommaso Ubezio / Unsplash", url: "https://unsplash.com/photos/historic-istanbul-rooftops-overlooking-the-bosphorus-and-city--NjQkrRvqn0" }
    },
    {
      id: "karakoy-after-rain",
      side: "europe", area: "karakoy", category: "hidden",
      name: "Karaköy, after rain",
      kicker: "A walk, not an address",
      description: "A loose route through weathered façades, workshop doors and pavement cafés—Karaköy is at its best when you leave room to wander.",
      tip: "Begin near Tophane, keep north of the waterfront, and take the smaller uphill streets.",
      image: "https://images.unsplash.com/photo-1723465272732-87f1c4e9ef60?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Istanbul waterfront with bridge",
      photoCredit: { label: "AHMAD BADER / Unsplash", url: "https://unsplash.com/photos/a-view-of-a-bridge-over-a-body-of-water-MCtUhEiJBHg" }
    },
    {
      id: "yildiz-palace",
      side: "europe", area: "besiktas", category: "culture",
      name: "Yıldız Palace",
      kicker: "A palace in the trees",
      description: "The final grand Ottoman palace is more like a landscape than a single building: gardens, pavilions and long views above the Bosphorus.",
      tip: "Leave time for the grounds; this is a slower visit than a quick museum stop.",
      image: "https://images.unsplash.com/photo-1753356965926-6e22d3467fee?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Bosphorus water and historic Istanbul",
      photoCredit: { label: "Tunahan Kuzgun / Unsplash", url: "https://unsplash.com/photos/watery-view-of-a-city-with-boats-and-a-mosque-okR8wdh9jIA" }
    },
    {
      id: "seker-ahmet-pasa",
      side: "europe", area: "besiktas", category: "cafes",
      name: "Şeker Ahmet Paşa Tea Room",
      kicker: "Tea after the paintings",
      description: "A quiet, elegant tea stop inside the National Palaces Painting Museum—made for extending a cultural afternoon rather than rushing through it.",
      tip: "Visit it as part of a museum day, then continue towards Beşiktaş or the waterfront.",
      image: "https://images.unsplash.com/photo-1766826236680-dc2f5529bac5?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Istanbul waterside city view",
      photoCredit: { label: "Julien Goettelmann / Unsplash", url: "https://unsplash.com/photos/istanbuls-bosphorus-strait-with-maidens-tower-and-city-skyline-oX244DoPdb4" }
    },
    {
      id: "belgrad-forest",
      side: "europe", area: "sariyer", category: "hidden",
      name: "Belgrad Forest",
      kicker: "Istanbul’s green reset",
      description: "A major northern escape for walking trails, historic waterworks and a completely different rhythm from the centre.",
      tip: "Choose one trail before you go and bring water—this is a destination, not a short city stroll.",
      image: "https://images.unsplash.com/photo-1785699385642-6b6cf16af970?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Green Istanbul park above the Bosphorus",
      photoCredit: { label: "Berat Cakirca / Unsplash", url: "https://unsplash.com/photos/istanbul-cityscape-with-bosphorus-bridge-and-lush-green-park-fePpapSyFLo" }
    },
    {
      id: "pardon-boulangerie",
      side: "europe", area: "sariyer", category: "cafes",
      name: "Pardon Boulangerie",
      kicker: "Rumeli Hisarı sourdough",
      description: "A bakery stop for sourdough bread and pastries when your Sarıyer day needs a slower, food-first pause.",
      tip: "Make it part of a Rumeli Hisarı and Bosphorus itinerary rather than a standalone cross-city detour.",
      image: "https://images.unsplash.com/photo-1774163033683-4865cabf7d29?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Bosphorus bridge and Istanbul waterfront",
      photoCredit: { label: "Anton Kireev / Unsplash", url: "https://unsplash.com/photos/bosphorus-bridge-connects-europe-and-asia-over-the-water-XWLU_njWddY" }
    },
    {
      id: "duatepe-park",
      side: "europe", area: "sariyer", category: "bosphorus",
      name: "Duatepe Park",
      kicker: "A bridge-side pause",
      description: "A small, elevated park that makes space for the Bosphorus and the Fatih Sultan Mehmet Bridge without turning the view into a big production.",
      tip: "Come close to golden hour and combine it with Rumeli Hisarı.",
      image: "https://images.unsplash.com/photo-1785699385642-6b6cf16af970?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Green park overlooking the Bosphorus bridge",
      photoCredit: { label: "Berat Cakirca / Unsplash", url: "https://unsplash.com/photos/istanbul-cityscape-with-bosphorus-bridge-and-lush-green-park-fePpapSyFLo" }
    },
    {
      id: "pierre-loti-hill",
      side: "europe", area: "eyupsultan", category: "culture",
      name: "Pierre Loti Hill",
      kicker: "An iconic Golden Horn view",
      description: "A classic Istanbul lookout above Eyüp: cemetery paths, a cable car option and the Golden Horn unfolding below.",
      tip: "Go early or near sunset; it is iconic, so the quietest moments are the best ones.",
      image: "https://storage.googleapis.com/goturkiye-tga-local/istanbul-1920x1080-56-1920x1080.jpg",
      imageAlt: "Pierre Loti Hill terrace above the Golden Horn",
      photoCredit: { label: "GoTürkiye", url: "https://goturkiye.com/istanbul/pierre-loti-hill" }
    },
    {
      id: "roastory-coffee",
      side: "europe", area: "beyoglu", category: "cafes",
      name: "Roastory Coffee Co.",
      kicker: "A pause on İstiklal",
      description: "A large, multi-floor coffeehouse for stepping out of İstiklal’s current without leaving the energy of Beyoğlu behind.",
      tip: "Use it as a daytime reset between Galata, Taksim and the smaller streets off the avenue.",
      image: "https://images.unsplash.com/photo-1779095146271-4f42f451d3d4?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Historic central Istanbul rooftops",
      photoCredit: { label: "Tommaso Ubezio / Unsplash", url: "https://unsplash.com/photos/historic-istanbul-rooftops-overlooking-the-bosphorus-and-city--NjQkrRvqn0" }
    },
    {
      id: "sirkeci-lokantasi",
      side: "europe", area: "sirkeci", category: "food",
      name: "Sirkeci Lokantası 1912",
      kicker: "Old-city dinner, dressed up",
      description: "A design-led restaurant stop for a long lunch or dinner when you want Sirkeci to feel a little more cinematic.",
      tip: "Book ahead for evenings and make time to walk the surrounding streets afterwards.",
      image: "https://images.unsplash.com/photo-1753356965926-6e22d3467fee?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Historic Istanbul by the water",
      photoCredit: { label: "Tunahan Kuzgun / Unsplash", url: "https://unsplash.com/photos/watery-view-of-a-city-with-boats-and-a-mosque-okR8wdh9jIA" }
    },
    {
      id: "olden-1772",
      side: "europe", area: "sirkeci", category: "nightlife",
      name: "Olden 1772",
      kicker: "For an occasion",
      description: "A theatrical Sirkeci dinner choice with private rooms and a more formal, evening-first feel.",
      tip: "Best saved for a celebration or a deliberately slower dinner.",
      image: "https://images.unsplash.com/photo-1766826236680-dc2f5529bac5?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Evening Istanbul cityscape",
      photoCredit: { label: "Julien Goettelmann / Unsplash", url: "https://unsplash.com/photos/istanbuls-bosphorus-strait-with-maidens-tower-and-city-skyline-oX244DoPdb4" }
    },
    {
      id: "visorante",
      side: "europe", area: "ortakoy", category: "food",
      name: "Visorante",
      kicker: "Dinner with bridge lights",
      description: "An Italian restaurant on a Bosphorus-facing hotel terrace, chosen for a considered dinner and a cinematic night view.",
      tip: "Reserve for sunset or after dark; this is a special-occasion pick.",
      image: "https://images.unsplash.com/photo-1774163033683-4865cabf7d29?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Bosphorus bridge over Istanbul",
      photoCredit: { label: "Anton Kireev / Unsplash", url: "https://unsplash.com/photos/bosphorus-bridge-connects-europe-and-asia-over-the-water-XWLU_njWddY" }
    },
    {
      id: "the-roof",
      side: "europe", area: "sisli", category: "nightlife",
      name: "The Roof",
      kicker: "A seasonal city-height stop",
      description: "A Bosphorus-facing rooftop for visitors who want a polished summer drink, a poolside setting and a big-city view.",
      tip: "Check the day’s pool, dining and event conditions before making plans.",
      image: "https://images.unsplash.com/photo-1766826236680-dc2f5529bac5?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Istanbul skyline from the water",
      photoCredit: { label: "Julien Goettelmann / Unsplash", url: "https://unsplash.com/photos/istanbuls-bosphorus-strait-with-maidens-tower-and-city-skyline-oX244DoPdb4" }
    },
    {
      id: "moda-pier-library",
      side: "asia", area: "moda", category: "culture",
      name: "Moda Pier Library",
      kicker: "Books beside the sea",
      description: "A restored historic pier reimagined as a library, book café and performance space—one of Moda’s most complete slow-afternoon stops.",
      tip: "Come for the terrace, then continue along the coast on foot.",
      image: "https://www.gazetekadikoy.com.tr/Uploads/gazetekadikoy.com.tr/202208181349433-img.jpeg",
      imageAlt: "Restored Moda Pier at dusk",
      photoCredit: { label: "Gazete Kadıköy", url: "https://www.gazetekadikoy.com.tr/gundem/moda-iskelesi-aciliyor" }
    },
    {
      id: "bomonti-moda",
      side: "asia", area: "moda", category: "cafes",
      name: "Bomonti Moda",
      kicker: "A long sea-facing seat",
      description: "An easygoing outdoor café choice on the Moda shore for unhurried drinks, conversations and the sea breeze.",
      tip: "It works best as a late-afternoon stop on a Moda walk.",
      image: "https://images.unsplash.com/photo-1774163033683-4865cabf7d29?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Bosphorus bridge and waterfront",
      photoCredit: { label: "Anton Kireev / Unsplash", url: "https://unsplash.com/photos/bosphorus-bridge-connects-europe-and-asia-over-the-water-XWLU_njWddY" }
    },
    {
      id: "beylerbeyi-palace",
      side: "asia", area: "beylerbeyi", category: "culture",
      name: "Beylerbeyi Palace",
      kicker: "An imperial summer residence",
      description: "A waterfront Ottoman palace whose rooms, gardens and Bosphorus setting make a proper reason to cross to this stretch of Üsküdar.",
      tip: "Treat the palace and its café as one calm half-day plan.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Exterior_view_of_Beylerbeyi_Palace_from_the_Bosphorus_%281%29.jpg/960px-Exterior_view_of_Beylerbeyi_Palace_from_the_Bosphorus_%281%29.jpg",
      imageAlt: "Beylerbeyi Palace viewed from the Bosphorus",
      photoCredit: { label: "José Luiz Bernardes Ribeiro / Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Exterior_view_of_Beylerbeyi_Palace_from_the_Bosphorus_(1).jpg" }
    },
    {
      id: "kandilli-pastanesi",
      side: "asia", area: "kandilli", category: "cafes",
      name: "Kandilli Pastanesi",
      kicker: "A polished Bosphorus pause",
      description: "A refined pastry and tea stop in Kandilli when you want to stay on the water’s quieter Asian shore.",
      tip: "Reserve more time for the neighbourhood itself than for a quick stop-and-go visit.",
      image: "https://images.unsplash.com/photo-1774163033683-4865cabf7d29?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Bosphorus bridge seen from Üsküdar",
      photoCredit: { label: "Anton Kireev / Unsplash", url: "https://unsplash.com/photos/bosphorus-bridge-connects-europe-and-asia-over-the-water-XWLU_njWddY" }
    },
    {
      id: "sukunet-library",
      side: "asia", area: "kuzguncuk", category: "culture",
      name: "Sükûnet Library",
      kicker: "A reserved quiet hour",
      description: "A research library beside the pond in Abdülmecid Efendi Grove, with a rare-book collection and an intentionally calm atmosphere.",
      tip: "This is reservation-only and designed for reading or research, not a casual café visit.",
      image: "https://images.unsplash.com/photo-1784594095028-a84d590582e6?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Kuzguncuk street with a café and mosque",
      photoCredit: { label: "bora acar / Unsplash", url: "https://unsplash.com/photos/white-building-cafe-on-a-sunny-street-with-a-mosque-hmzJbEuF2ps" }
    },
    {
      id: "anadolu-hisari",
      side: "asia", area: "beykoz", category: "hidden",
      name: "Anadolu Hisarı lanes",
      kicker: "A fortress by the water",
      description: "A walk through low-key Bosphorus lanes around one of Istanbul’s oldest Ottoman fortresses—more about atmosphere than ticking off sights.",
      tip: "Arrive by daylight and continue along the water; the best moments are between the fortress and the small streets.",
      image: "https://kultur.istanbul/gorsel/2020/08/anadolu-hisari-istanbul-1110x624.jpg",
      imageAlt: "Anadolu Hisarı on the Bosphorus",
      photoCredit: { label: "Kültür.İstanbul", url: "https://kultur.istanbul/istanbulu-canli-canli-izleyin/" }
    }
  ]
};