// Constantes du site VAPELT mobile — branding + SEO.
import { TELEGRAM_HANDLE } from "./telegram";

export const SITE_NAME = "VAPELT";
export const SITE_TITLE = "VAPELT — elektroninės cigaretės, vape ir nikotino pagalvėlės pirkti Lietuvoje";
export const SITE_URL = "https://vapelt.dealsnows.com";
export const SITE_LANG = "lt";
export const TELEGRAM_URL = `https://t.me/${TELEGRAM_HANDLE}`;

/** Majoration des prix catalogue (prix vapesale24) — +50% → ×1.5, arrondi au
 *  centime (`Math.round(p * PRICE_MULTIPLIER * 100) / 100`), même logique que
 *  vape24be. Ici appliquée UNE FOIS directement dans src/data/products.json
 *  (pas de catalog.ts : les pages SSR et slim-catalog.ts lisent ce fichier),
 *  donc se propage partout (cartes, fiche, packs, panier, récap, Telegram, JSON-LD). */
export const PRICE_MULTIPLIER = 1.5;

/** Pays de livraison (code ISO 3166-1 alpha-2) — utilisé dans le schema offers
 *  (shippingDetails + hasMerchantReturnPolicy). À adapter pour FI/EE/BE. */
export const SHIPPING_COUNTRY = "LT";

/** Description par défaut (SEO) — lituanien. */
export const SITE_DESCRIPTION =
  "VAPELT — elektroninės cigaretės, vienkartiniai garintuvai, e-skysčiai ir nikotino pagalvėlės. Pristatome visoje Lietuvoje. Užsakymas per Telegram.";

/** Coordonnées géo (Vilnius) pour schema LocalBusiness/OnlineStore. */
export const ORG_ADDRESS = {
  street: "Gedimino pr. 1",
  city: "Vilnius",
  region: "Vilniaus apskritis",
  country: "LT",
  postalCode: "01103",
  lat: 54.6872,
  lng: 25.2797,
};
