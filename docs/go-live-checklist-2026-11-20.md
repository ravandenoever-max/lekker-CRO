# Go-live checklist CRO-thema, vrijdag 20 november 2026

Uitvoering: Claude, Ruben hoeft niets te doen behalve de punten onder "Handmatig (Ruben)".
Methode: het dev-thema "Lekker Company - Ruben edits" (209847812435) publiceren. Het huidige live thema
"Lekker Company 2026/11/05 - LP + popup" (211197362515) blijft ongepubliceerd staan als terugvaloptie.
Let op: vrijdag is Esthers vrije dag.

## A. Voorbereiding (voor publiceren)

- [x] 19 nov: live en dev vergeleken. Alle wijzigingen die Lekker na onze start in live deed staan nu ook in dev:
      Droppie-pagina (page.winactie), vacatures, verkooppunten, list-collections, newsletter-sign-up-only,
      nieuwe banner op collectiepagina, nieuwsbrieftekst homepage ("Nieuw bij Lekker?"). Commit f12d6f8.
- [x] settings_data.json (app-embeds Drip, Judge.me, CookieYes, thema-instellingen) is in live en dev gelijk.
- [x] Footer-fixes en lekker-drip in dev zijn een overkoepelende versie van wat in live staat.
- [ ] Ochtend 20 nov: opnieuw controleren of iemand na 19 nov 13:00 iets in het live thema heeft aangepast
      (updatedAt van live-bestanden). Zo ja: die bestanden eerst naar dev overnemen.
- [ ] Laatste controle dev via screenshots: home, collectie, deo stick, deo crème, duo, refill, LP deostick, Droppie-pagina, winkelwagen.

## B. Publiceren

- [ ] Dev-thema hernoemen naar "Lekker Company 2026/11/20 - CRO" en publiceren (theme_publish).
- [ ] Direct na publiceren live checken (desktop en mobiel):
  - [ ] Productpagina: koopblok, staffel 1/3/6 stuks met juiste prijs per stuk, reviews, accordeon, combideal-knoppen oranje.
  - [ ] In winkelwagen: 3 stuks kiezen geeft 3x de gewone variant, korting zichtbaar in de winkelwagen.
  - [ ] Winkelwagen: verzendbalk, kortingscode-veld (LekkerWelkom onder en boven €15).
  - [ ] Popup gratis verzending (?lk_popup=1), knopje rechtsonder, popup-vinkje per pagina werkt.
  - [ ] Droppie-pagina: formulier verstuurt, event telt als "droppie" en niet als gratis verzending.
  - [ ] Collectiepagina: filters klikbaar, USP-rij met 5 USP's, B Corp-icoon wit.
  - [ ] Footer: link cookie-instellingen opent CookieYes. Recent bekeken / iets voor jou gevuld.
  - [ ] Landingspagina's deostick, bodywash, refill-deo.

## C. Direct na publiceren (store data, live)

- [ ] Staffelkortingen omzetten van vast bedrag naar percentage (16 automatische kortingen, "... buy 3 get 3%" en "... buy 6 get 6%"):
      3% vanaf 3 stuks, 6% vanaf 6 stuks. Combineren blijft zoals het is.
      Fresh Laundry en Go Gentle koppelen aan het product in plaats van aan de 3/6-varianten.
      Bij normale prijzen blijven de bedragen gelijk (stick: €0,75 en €2,98).
- [ ] Testbestelling tot aan de checkout: 3 en 6 stuks deo stick, Fresh Laundry, 12 stuks (6% op alles).
- [ ] Pas als B en C goed zijn: varianten "3 stuks" en "6 stuks" verwijderen (38 varianten op 19 producten,
      lijst hieronder). Kan NIET ongedaan worden gemaakt. Akkoord Esther: optie 1 gekozen op 19 nov.
      Akkoord Ruben: nodig voor uitvoeren.
- [ ] Daarna controleren: productpagina's tonen nog steeds 1/3/6 (uit snippets/lekker-staffel.liquid),
      deo travel toont geen staffel meer (heeft geen korting).

## D. Handmatig (Ruben, kan niet via onze koppelingen)

- [ ] CookieYes: zwevend icoontje (revisit consent button) uitzetten in het CookieYes-dashboard.
- [ ] Search & Discovery: filters aanzetten (geur, productsoort, zonder baking soda). Metafields staan klaar.
- [ ] GTM: tag GA4 newsletter_signup importeren en publiceren; in GA4 signup_offer en signup_location als dimensie.

## E. Afronden

- [ ] Repo: go-live commit en tag.
- [ ] Mail aan Esther (maandag, vrijdag is haar vrije dag): wat live staat en wat ze zelf kan instellen
      (popup-vinkje, USP's, staffel via ons).
- [ ] Projectbrief bijwerken: go-live datum, meerwerk-uren, open punten.

## Terugdraaien

- Thema: het oude thema "Lekker Company 2026/11/05 - LP + popup" opnieuw publiceren (1 klik).
- Kortingen: terugzetten naar vaste bedragen (oude waarden hieronder).
- Varianten: niet terug te zetten. Daarom pas na controle.

## Oude kortingswaarden (vast bedrag, 1x per bestelling)

| Korting | Vanaf | Bedrag |
|---|---|---|
| Deo Stick 3% / 6% | 3 / 6 | €0,75 / €2,98 |
| Deo Crème 3% / 6% | 3 / 6 | €0,78 / €3,13 |
| Deo Go Gentle 3% / 6% | 3 / 6 | €0,83 / €3,31 |
| Deo Refill 3% / 6% | 3 / 6 | €0,67 / €2,70 |
| Lip balm 3% / 6% | 3 / 6 | €0,49 / €1,98 |
| Handcrème 3% / 6% | 3 / 6 | €0,72 / €2,88 |
| Bodybutter 3% / 6% | 3 / 6 | €0,72 / €2,88 |
| Body Wash Refill 3% / 6% | 3 / 6 | €0,90 / €3,60 |
| Deo Stick Fresh Laundry 3% / 6% | 3 / 6 | €0,81 / €3,24 (alleen op de 3/6-variant, gaf in de praktijk nooit korting) |

## Te verwijderen varianten (3 stuks en 6 stuks)

deodorant-stick-be-active, deodorant-stick-have-fun, deodorant-stick-feel-floral, deodorant-stick-fresh-laundry,
woodland-deodorant, peppermint-and-rosemary-deodorant, mandarin-and-lemon-deodorant, neutral-deodorant,
lavender-deodorant, soft-bamboo-sensitive-deodorant, refill-deo-stick-have-fun, refill-deo-stick-be-active,
raspberry-lemonade-lip-balm, orange-vanilla-swirl-lip-balm, hand-creme-touch-me, body-butter-matcha (draft),
deo-travel-be-active, deo-travel-have-fun, refill-body-wash-eucalyptus.
