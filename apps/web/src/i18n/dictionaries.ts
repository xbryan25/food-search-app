export type Language = "EN" | "NL" | "DE" | "FR";

export const dictionaries = {
  EN: {
    toastSuccess: "Welcome to Pro! Your subscription is active.",
    toastCanceled: "Checkout was canceled. No charges were made.",

    proPlan: "Pro Plan",
    upgradeToPro: "Upgrade to Pro",
    checkoutLoading: "Redirecting to checkout...",

    // Hero & Header Section
    heroTitle: "Search Food & Nutritional Data",
    heroSubtitle:
      "Explore Open Food Facts dataset. Unlock instant macro insights, Nutri-Score analysis, and ingredients breakdown.",

    // Search Bar & Controls
    searchPlaceholder: "Search food by name, brand, or barcode...",
    search: "Search",
    clear: "Clear",

    // UI States
    initialState: "Type a food name above to start searching...",
    noResults: "No products found matching your search.",
    noResultsSub: "Try checking for typos or searching a broader term.",
    loading: "Loading search results...",
    showingResults: "Showing {count} products",
    errorTitle: "Search Error",
    searchResults: "Search Results",

    // Product Card & General Labels
    macrosLocked: "Macros locked",
    category: "Category",
    unknownCategory: "Unknown Category",
    unknownBrand: "Unknown Brand",
    unknownNutriscore: "UNKNOWN",
    nutriscore: "Nutri-Score",
    noImageAvailable: "No image available",
    details: "Details",
    barcode: "Barcode",

    // Nutrition & Macro Insights (Pro User Features)
    nutritionOverview: "Nutritional Breakdown",
    per100g: "Per 100g / 100ml",
    calories: "Calories",
    fat: "Fat",
    saturatedFat: "Saturated Fat",
    carbs: "Carbohydrates",
    sugars: "Sugars",
    protein: "Protein",
    salt: "Salt",
    proSubscriptionRequired: "Pro subscription required",
    macroInsightsLockedTitle: "Macro Insights are locked",
    macroInsightsLockedDescription:
      "Subscribe to Pro plan to unlock nutritional macros.",
    unlockProAccess: "Unlock Pro Access",

    // Ingredients Analysis
    ingredientsBreakdown: "Ingredients Breakdown",
    totalIngredients: "Total Ingredients",
    unknownIngredients: "Unknown Ingredients",
    subscribeToUnlock:
      "Subscribe to Pro to unlock detailed nutritional insights and ingredient analysis.",

    footerText: "© 2026 FoodSearch Demo. Data powered by Open Food Facts API.",
  },

  NL: {
    toastSuccess: "Welkom bij Pro! Je abonnement is actief.",
    toastCanceled:
      "Afrekenen is geannuleerd. Er zijn geen kosten in rekening gebracht.",

    proPlan: "Pro-abonnement",
    upgradeToPro: "Upgraden naar Pro",
    checkoutLoading: "Doorsturen naar afrekenen...",

    // Hero & Header Section
    heroTitle: "Zoek Voedings- & Voedingswaardegegevens",
    heroSubtitle:
      "Verken de Open Food Facts-dataset. Ontgrendel direct inzicht in macro's, Nutri-Score-analyse en ingrediënten opsplitsing.",

    // Search Bar & Controls
    searchPlaceholder: "Zoek voedsel op naam, merk of streepjescode...",
    search: "Zoeken",
    clear: "Wis",

    // UI States
    initialState: "Typ hierboven een voedingsnaam om te beginnen met zoeken...",
    noResults: "Geen producten gevonden die aan je zoekopdracht voldoen.",
    noResultsSub: "Controleer op typfouten of probeer een algemenere zoekterm.",
    loading: "Zoekresultaten laden...",
    showingResults: "{count} producten worden getoond",
    errorTitle: "Zoekfout",
    searchResults: "Zoekresultaten",

    // Product Card & General Labels
    macrosLocked: "Macro's vergrendeld",
    category: "Categorie",
    unknownCategory: "Onbekende categorie",
    unknownBrand: "Onbekend merk",
    unknownNutriscore: "ONBEKEND",
    nutriscore: "Nutri-Score",
    noImageAvailable: "Geen afbeelding beschikbaar",
    details: "Details",
    barcode: "Streepjescode",

    // Nutrition & Macro Insights (Pro User Features)
    nutritionOverview: "Voedingswaarden",
    per100g: "Per 100g / 100ml",
    calories: "Calorieën",
    fat: "Vetten",
    saturatedFat: "Verzadigde vetten",
    carbs: "Koolhydraten",
    sugars: "Suikers",
    protein: "Eiwitten",
    salt: "Zout",
    proSubscriptionRequired: "Pro-abonnement vereist",
    macroInsightsLockedTitle: "Macro-inzichten zijn vergrendeld",
    macroInsightsLockedDescription:
      "Neem een Pro-abonnement om voedingsmacro's te ontgrendelen.",
    unlockProAccess: "Ontgrendel Pro-toegang",

    // Ingredients Analysis
    ingredientsBreakdown: "Ingrediënten Opsplitsing",
    totalIngredients: "Totaal Aantal Ingrediënten",
    unknownIngredients: "Onbekende Ingrediënten",
    subscribeToUnlock:
      "Abonneer op Pro om gedetailleerde voedingsinzichten en ingrediëntenanalyses te ontgrendelen.",

    footerText:
      "© 2026 FoodSearch Demo. Gegevens afkomstig van de Open Food Facts API.",
  },

  DE: {
    toastSuccess: "Willkommen bei Pro! Ihr Abonnement ist aktiv.",
    toastCanceled: "Kaufvorgang abgebrochen. Es wurden keine Gebühren erhoben.",

    proPlan: "Pro-Tarif",
    upgradeToPro: "Auf Pro upgraden",
    checkoutLoading: "Weiterleitung zur Kasse...",

    // Hero & Header Section
    heroTitle: "Lebensmittel- & Nährwertdaten Suchen",
    heroSubtitle:
      "Erkunden Sie den Open Food Facts-Datensatz. Schalten Sie sofortige Makro-Einblicke, Nutri-Score-Analysen und Zutatenaufschlüsselungen frei.",

    // Search Bar & Controls
    searchPlaceholder: "Lebensmittel nach Name, Marke oder Barcode suchen...",
    search: "Suchen",
    clear: "Löschen",

    // UI States
    initialState:
      "Geben Sie oben einen Lebensmittelnamen ein, um die Suche zu starten...",
    noResults: "Keine Produkte gefunden, die Ihrer Suche entsprechen.",
    noResultsSub:
      "Überprüfen Sie auf Tippfehler oder suchen Sie nach einem allgemeineren Begriff.",
    loading: "Suchergebnisse werden geladen...",
    showingResults: "{count} Produkte werden angezeigt",
    errorTitle: "Suchfehler",
    searchResults: "Suchergebnisse",

    // Product Card & General Labels
    macrosLocked: "Makros gesperrt",
    category: "Kategorie",
    unknownCategory: "Unbekannte Kategorie",
    unknownBrand: "Unbekannte Marke",
    unknownNutriscore: "UNBEKANNT",
    nutriscore: "Nutri-Score",
    noImageAvailable: "Kein Bild verfügbar",
    details: "Details",
    barcode: "Barcode",

    // Nutrition & Macro Insights (Pro User Features)
    nutritionOverview: "Nährwertangaben",
    per100g: "Pro 100g / 100ml",
    calories: "Kalorien",
    fat: "Fett",
    saturatedFat: "Gesättigte Fettsäuren",
    carbs: "Kohlenhydrate",
    sugars: "Zucker",
    protein: "Eiweiß",
    salt: "Salz",
    proSubscriptionRequired: "Pro-Abonnement erforderlich",
    macroInsightsLockedTitle: "Makro-Einblicke sind gesperrt",
    macroInsightsLockedDescription:
      "Abonnieren Sie den Pro-Tarif, um Nährwertmakros freizuschalten.",
    unlockProAccess: "Pro-Zugriff freischalten",

    // Ingredients Analysis
    ingredientsBreakdown: "Zutatenaufschlüsselung",
    totalIngredients: "Gesamtzutaten",
    unknownIngredients: "Unbekannte Zutaten",
    subscribeToUnlock:
      "Abonnieren Sie Pro, um detaillierte Nährwertanalysen und Zutatenaufschlüsselungen freizuschalten.",

    footerText:
      "© 2026 FoodSearch Demo. Daten bereitgestellt von der Open Food Facts API.",
  },

  FR: {
    toastSuccess: "Bienvenue dans Pro ! Votre abonnement est actif.",
    toastCanceled: "Paiement annulé. Aucun frais n'a été prélevé.",

    proPlan: "Forfait Pro",
    upgradeToPro: "Passer à la version Pro",
    checkoutLoading: "Redirection vers le paiement...",

    // Hero & Header Section
    heroTitle: "Rechercher des Données Nutritionnelles",
    heroSubtitle:
      "Explorez la base de données Open Food Facts. Obtenez une analyse instantanée des macronutriments, du Nutri-Score et des ingrédients.",

    // Search Bar & Controls
    searchPlaceholder:
      "Rechercher des aliments par nom, marque ou code-barres...",
    search: "Rechercher",
    clear: "Effacer",

    // UI States
    initialState:
      "Saisissez un nom d'aliment ci-dessus pour commencer la recherche...",
    noResults: "Aucun produit ne correspond à votre recherche.",
    noResultsSub: "Vérifiez l'orthographe ou essayez un terme plus général.",
    loading: "Chargement des résultats...",
    showingResults: "Affichage de {count} produits",
    errorTitle: "Erreur de recherche",
    searchResults: "Résultats de recherche",

    // Product Card & General Labels
    macrosLocked: "Macronutriments verrouillés",
    category: "Catégorie",
    unknownCategory: "Catégorie inconnue",
    unknownBrand: "Marque inconnue",
    unknownNutriscore: "INCONNU",
    nutriscore: "Nutri-Score",
    noImageAvailable: "Aucune image disponible",
    details: "Détails",
    barcode: "Code-barres",

    // Nutrition & Macro Insights (Pro User Features)
    nutritionOverview: "Valeurs Nutritionnelles",
    per100g: "Pour 100g / 100ml",
    calories: "Calories",
    fat: "Matières grasses",
    saturatedFat: "Acides gras saturés",
    carbs: "Glucides",
    sugars: "Sucres",
    protein: "Protéines",
    salt: "Sel",
    proSubscriptionRequired: "Abonnement Pro requis",
    macroInsightsLockedTitle: "Analyses de macronutriments verrouillées",
    macroInsightsLockedDescription:
      "Abonnez-vous au forfait Pro pour débloquer les macronutriments.",
    unlockProAccess: "Débloquer l'accès Pro",

    // Ingredients Analysis
    ingredientsBreakdown: "Analyse des Ingrédients",
    totalIngredients: "Ingrédients Totaux",
    unknownIngredients: "Ingrédients Inconnus",
    subscribeToUnlock:
      "Abonnez-vous à Pro pour débloquer des analyses nutritionnelles et d'ingrédients détaillées.",

    footerText:
      "© 2026 FoodSearch Demo. Données fournies par l'API Open Food Facts.",
  },
} as const;

export type Dictionary = (typeof dictionaries)["EN"];
export type TranslationKey = keyof Dictionary;
