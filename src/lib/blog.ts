// Données du blog VAPELT — extraites dans ce module pour que getStaticPaths
// (hoisté au niveau module par Astro) y ait accès.
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: { h: string; p: string }[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "nikotino-pagalveles-kas-tai",
    title: "Nikotino pagalvėlės: kas jos ir kaip išsirinkti savo stiprumą",
    excerpt:
      "Nikotino pagalvėlės — populiarus bekvapis būdas vartoti nikotiną be tabako ir garų. Kaip išsirinkti stiprumą, kada jos vartojamos ir kokius prekių ženklus rinktis.",
    date: "2026-09-29",
    body: [
      ["Nikotino pagalvėlės (nicotine pouches)", "— maži balti maišeliai, kuriuos prideda po lūpa. Jose yra nikotino, skonių ir drėkiklių, bet nėra tabako lapų. Kadangi nėra degimo ir garų, jas galima vartoti praktiškai bet kur — darbe, kelionėje, restorane."],
      ["Stiprumas mg", "žymimas vienam maišeliui. Silpnesnės (4–6 mg) tinka pradedantiesiems. Vidutinės (9–12 mg) — dažniausiai pasirenkamas diapazonas. Stiprios (14–20 mg) skirtos buvusiems rūkoriams. Svarbu pradėti nuo mažesnio stiprumo ir stebėti organizmo reakciją."],
      ["Populiariausi ženklai", "Lietuvoje — VELO, ZYN, 4NX, Arctic7, HELWIT, NOR. VAPELT siūlo platų nikotino pagalvėlių asortimentą nuo 4 mg iki 20 mg ir pristato visoje Lietuvoje."],
      ["Ar legalu užsisakyti internetu?", "Taip. Skirtingai nei elektroninės cigaretės ir e-skysčiai, nikotino pagalvėlės Lietuvoje gali būti parduodamos ir įsigyjamos nuotoliniu būdu. Tai vienas pagrindinių skirtumų, dėl kurio jas renkasi daug pirkėjų."],
    ].map(([h, p]) => ({ h, p })),
  },
  {
    slug: "e-skysciai-10mg-kaip-isrinkti",
    title: "E-skysčiai: ką reiškia 3 mg, 6 mg, 10 mg ir 20 mg nikotino?",
    excerpt:
      "E-skysčių stiprumas — vienas svarbiausių pasirinkimų. Paaiškiname, ką reiškia nikotino kiekis, kada rinktis salt nic, o kada freebase, ir kaip išsirinkti tinkamą skystį.",
    date: "2026-09-22",
    body: [
      ["Nikotino kiekis e-skystyje", "žymimas mg vienam mililitrui. 3 mg ir 6 mg — švelnūs, tinkami lengviems vartotojams. 10 mg apie subalansuotą pasirinkimą. 20 mg — stipriausi, dažniausiai salt nic tipo."],
      ["Salt nic vs freebase", "Salt nic (nikotino druskos) — lygesnis pojūtis gerklėje, greitesnis įsisavinimas, tinka didelio stiprumo skysčiams (10–20 mg). Freebase — aštresnis pojūtis, dažniau 3–6 mg, tinka didesniems įrenginiams su rite."],
      ["VG/PG santykis", "50/50 tinka podams ir mažiems įrenginiams, 70/30 ar 80/20 — didesniems modams, kurie generuoja daugiau garų."],
      ["Kaip išsirinkti", "jei perėjote nuo rūkymo — pradėkite nuo 10–20 mg salt nic. Jei vartojate retai ar jau sumažinote dozę — 3–6 mg freebase. VAPELT siūlo e-skysčius nuo 0 mg iki 20 mg, įskaitant populiarias premijas."],
    ].map(([h, p]) => ({ h, p })),
  },
  {
    slug: "vienkartiniai-garintuvai-puffai",
    title: "Vienkartiniai garintuvai: kaip išsirinkti pagal pūtimų skaičių",
    excerpt:
      "Nuo 600 iki 50 000 pūtimų — kaip perskaityti pūtimų skaičių, kiek jų pakanka ir į ką dar atkreipti dėmesį renkantis vienkartinį garintuvą.",
    date: "2026-09-15",
    body: [
      ["Pūtimų skaičius", "yra pagrindinis vienkartinių garintuvų rodiklis. 600–2 000 pūtimų — kompaktiški, pigesni. 6 000–15 000 — vidutinis dydis („Geek Bar Pulse“, „Lost Mary“). 20 000–50 000 — didžiausi, su įkrovimu USB-C."],
      ["Įkraunami ar ne?", "Dauguma didelių modelių (nuo 6 000 pūtimų) turi įkrovimo prievadą, kad baterija laikytų iki paskutinio skysčio lašo. Mažesni (iki 2 000) dažniausiai neįkraunami."],
      ["Nikotino kiekis", "vienkartiniuose garintuvuose dažniausiai būna 0, 10 arba 20 mg. Yra ir 0 % nikotino variantų — vien skoniui."],
      ["Kada pirkti", "per „Telegram“ patogu užsisakyti visoje Lietuvoje. VAPELT asortimente — „Elf Bar“, „Lost Mary“, „Geek Bar“, „RAZ“ ir kiti ženklai nuo 600 iki 50 000 pūtimų."],
    ].map(([h, p]) => ({ h, p })),
  },
];