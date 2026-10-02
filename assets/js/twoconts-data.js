/* TwoConts content model
   Add your recommendations to places below. The homepage will place them in the
   right side, area and category automatically — no layout changes needed. */
window.TwoContsData = {
  sides: {
    europe: {
      label: "European side",
      shortLabel: "Europe",
      eyebrow: "WEST OF THE BOSPHORUS",
      intro: "Old-city landmarks, creative streets and the city’s liveliest waterfronts.",
      areas: [
        { id: "besiktas", label: "Beşiktaş", note: "Bosphorus energy" },
        { id: "karakoy", label: "Karaköy", note: "Design, coffee, galleries" },
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
      intro: "Neighbourhood rituals, sea air and a slower way to experience Istanbul.",
      areas: [
        { id: "kadikoy", label: "Kadıköy", note: "Markets and makers" },
        { id: "moda", label: "Moda", note: "Sea walks and cafés" },
        { id: "uskudar", label: "Üsküdar", note: "Ferries and silhouettes" },
        { id: "kuzguncuk", label: "Kuzguncuk", note: "Village-like charm" },
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
    /*
    {
      id: "unique-place-id",
      side: "europe",           // europe or asia
      area: "karakoy",          // use an area id from above
      category: "cafes",        // use a category id from above
      name: "Place name",
      kicker: "A short useful label",
      description: "Why TwoConts recommends it.",
      tip: "A helpful local tip",
      image: "assets/img/your-photo.jpg"
    }
    */
  ]
};