# Nulmeting CRO The Lekker Company

Vastgelegd op 5 november 2026 (werkpakket 1.2). Periode: 6 oktober tot en met 4 november 2026 (30 dagen), dus vóór de livegang van de landingspagina's en de popup op 5 november.

Bronnen: Shopify Analytics (via de Shopify-koppeling), GA4-exports "Traffic acquisition" en "Landing page", GA4 events-overzicht en de GTM-container GTM-MQGDQJ8C (export 5 november).

**Gebruik Shopify als bron voor omzet en conversie.** GA4 mist ongeveer de helft van de omzet (zie hoofdstuk 4). GA4 is wel bruikbaar voor gedrag, verhoudingen en per pagina.

---

## 1. Kerncijfers (Shopify)

| Meetpunt | Waarde |
|---|---|
| Sessies | 7.355 |
| Sessies met add to cart | 721 (9,8%) |
| Sessies die de checkout bereiken | 560 (7,6%) |
| Sessies met afgeronde checkout | 304 |
| Conversieratio | 4,13% |
| Bestellingen | 350 |
| Bruto omzet | €17.248 |
| Netto omzet | €14.158 |
| Gemiddelde orderwaarde | €40,46 |
| Verzendkosten betaald door klanten | €635 |

Verschil 350 bestellingen tegenover 304 afgeronde checkouts: abonnementsorders (Subify) en andere orders die niet uit een webshop-sessie komen.

### Per apparaat (Shopify)

| Apparaat | Sessies | Met add to cart | Afgeronde checkout | Conversie |
|---|---|---|---|---|
| Mobiel | 4.726 (64%) | 482 (10,2%) | 196 | 4,15% |
| Desktop | 2.517 (34%) | 231 (9,2%) | 106 | 4,21% |
| Tablet | 76 | 8 | 2 | 2,63% |

### Bestellingen per verwijzer (Shopify)

| Bron | Bestellingen | Omzet |
|---|---|---|
| Onbekend / direct | 253 | €13.965 |
| Zoekmachine | 77 | €2.742 |
| Social | 19 | €406 |
| E-mail | 1 | €34 |

---

## 2. Kanalen (GA4)

| Kanaal | Sessies | Engagement rate | Omzet GA4 | Omzet per sessie |
|---|---|---|---|---|
| Direct | 2.753 | 46% | €6.325 | €2,30 |
| Organic Search | 1.502 | 11% | €371 | €0,25 |
| Display (= Meta-ads, zie hieronder) | 1.233 | 13% | €18 | €0,01 |
| Email | 478 | 35% | €743 | €1,56 |
| Unassigned | 443 | 2% | €1.043 | €2,35 |
| Referral | 425 | 17% | €106 | €0,25 |
| Organic Social | 190 | 2% | €28 | €0,15 |
| AI Assistant | 71 | 10% | €0 | €0 |
| Cross-network | 48 | 4% | €0 | €0 |
| Paid Social | 4 | 25% | €0 | €0 |
| **Totaal** | **7.153** | **26%** | **€8.635** | **€1,21** |

**Display is het Meta-verkeer.** De Meta-ads gebruiken utm_medium=display, waardoor GA4 ze als Display indeelt. Dit is de nulmeting voor het advertentieverkeer: 1.233 sessies, 13% engagement en vrijwel geen gemeten omzet. Deze ads landden op de homepage en de collectiepagina's.

---

## 3. Landingspagina's (GA4)

| Pagina | Sessies | Omzet GA4 | Omzet per sessie |
|---|---|---|---|
| / (homepage) | 1.577 | €236 | €0,15 |
| /collections/all-products | 1.296 | €134 | €0,10 |
| /collections | 253 | €1.058 | €4,18 |
| /collections/deodorant | 232 | €145 | €0,62 |
| /en | 230 | €63 | €0,28 |
| /products/deodorant-stick-have-fun | 134 | €94 | €0,70 |
| /products/starter-refill-body-wash-eucalyptus | 126 | €90 | €0,71 |
| /collections/deo-stick | 40 | €77 | €1,92 |
| /products/combi-deal-deodorant-stick-mix | 32 | €44 | €1,39 |

Homepage en /collections/all-products samen: 2.873 sessies en €370 gemeten omzet. Dit zijn de pagina's waar het advertentieverkeer tot nu toe landde. De nieuwe landingspagina's (/pages/deo-stick, /pages/refill-deo, /pages/body-wash) vergelijken we hiermee.

---

## 4. Meetproblemen

1. **GA4 mist ongeveer de helft van de omzet.** GA4 €8.635 tegenover Shopify ongeveer €17.150 (inclusief verzending).
2. **De sessie breekt bij de checkout.** 308 sessies in GA4 beginnen op een /checkouts/-pagina en die zijn samen goed voor €4.460, ruim de helft van de GA4-omzet. Een koper die van de webshop naar de checkout gaat, krijgt dus vaak een nieuwe sessie. Daardoor komt de aankoop bij Direct of Unassigned terecht in plaats van bij het kanaal waar de klant vandaan kwam. Waarschijnlijke oorzaken: consent (CookieYes op de webshop tegenover de consent in de Shopify-checkout) of de manier waarop de Google-app van Shopify de checkout meet. Nog uitzoeken.
3. **Meta-verkeer staat onder Display** in plaats van Paid Social (utm_medium=display).
4. **Key events zijn vervuild.** sessieduur_90_sec staat als key event en blaast de key event rate op (Direct 198 key events). De oude UA-events (koop_nu_click___overview_shop_page, single_product_page_view, ua_add_to_cart, ua_ga___order_placed) staan als key event maar ontvangen geen data meer.
5. **De GTM-container bevat alleen CookieYes.** GA4 en Meta draaien via de Shopify-apps. Het event newsletter_signup (popup en landingspagina's) gaat naar de dataLayer maar wordt nog niet doorgestuurd.

Events die GA4 wel ontvangt (laatste 28 dagen): add_payment_info, add_shipping_info, add_to_cart, begin_checkout, click, first_visit, form_start, form_submit, New email subscriber, Onsite campaign shown, page_view, purchase, remove_from_cart, scroll, search, sessieduur_90_sec, session_start, user_engagement.

GA4: property "The Lekker Company - GA4", stream 4317684062, Measurement ID G-8TCJFQ4Q7N, enhanced measurement aan.

---

## 5. Acties

| Actie | Wie | Status |
|---|---|---|
| GTM-tag GA4 newsletter_signup importeren, testen en publiceren (importbestand gemaakt door Claude) | Ruben | open |
| newsletter_signup als key event markeren in GA4 | Ruben | open, na de eerste data |
| sessieduur_90_sec als key event uitzetten, oude UA-key events opruimen | Ruben of Lekker | open |
| Meta-ads naar de landingspagina's: utm_source=facebook, utm_medium=paid_social (in plaats van display), utm_campaign en utm_content per ad | Ruben | open |
| Checkout-sessiebreuk uitzoeken (consent en Shopify-app) | nog te bepalen, buiten de begroting van 1.2 | open |

Let op bij de vergelijking: zodra het medium van display naar paid_social gaat, staat het Meta-verkeer na 5 november onder Paid Social. Vergelijk dus Display vóór met Paid Social na.

---

## 6. Hoe we straks vergelijken

Zelfde lengte periode (30 dagen) na de livegang, uit dezelfde bronnen:
- Shopify: conversieratio, add to cart rate, checkout rate, gemiddelde orderwaarde, totaal en per apparaat
- GA4: Meta-verkeer (Paid Social na tegenover Display voor): sessies, engagement, omzet per sessie
- GA4: de drie landingspagina's tegenover homepage plus /collections/all-products als landingspagina
- GA4: aantal newsletter_signup per locatie (popup tegenover landingspagina)
- Na livegang van de productpagina: add to cart rate op de productpagina's en het aandeel bestellingen boven €25
