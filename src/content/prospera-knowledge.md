# PRÓSPERA — MASTER KNOWLEDGE FILE

**A single-file knowledge base about Próspera ZEDE (Roatán, Honduras): what it is, what its legal status is, how tax and companies work, and what daily life there actually costs.**

- **Compiled:** 2026-08-03 · **Revision 2, same day** — rescanned after the research base was updated. New in this revision: the **Roatán Municipality's 30 July 2026 requerimiento** (§3.6, a primary document), the **municipal-vs-national framing correction** (§0.2 rule 6 and §3.1 — the most important editorial change in this file), the **RTN/CAI invoicing consequence** (§8.6), the **tokenization legal machinery that already exists** (§7.11), and a **correction: RFSA Administrative Action No. 25 has never been published** and must not be cited.
- **Compiled from:** the "Prospera knowledge" research base (12 topic folders, ~500KB, built Jun–Aug 2026) plus ~554 dated community listings from the prospera.place / Agora database.
- **Intended use:** source material for a public knowledge website about Próspera. Everything here is written so it can be chunked into pages, quoted, or turned into structured data.
- **Not legal, tax or investment advice.**

---

## 0. HOW TO USE THIS FILE (instructions for the website builder)

### 0.1 Source tiers — keep these when you publish

Most significant claims in this file carry a tier tag. A few tables and JSON blocks aggregate several tiers at once — where a tier is absent, treat the claim as unverified rather than as fact. Do not strip the tags; convert them into visible labels, tooltips, or a "how we know this" badge. Credibility is the product here.

| Tag | Meaning | How to present it |
| --- | --- | --- |
| `[OFFICIAL]` | From Próspera's own statutes, charter, Help Center, or a government body (Honduran ministry, US State Dept, ICSID) | "Official source" |
| `[CLAIM]` | Marketing or self-reported by Próspera or a commercial provider | "Self-reported — unverified" |
| `[INDEPENDENT]` | Third-party press, research, court/tribunal records | "Independent source" |
| `[RESIDENT]` | First-hand report from a named person living or operating in the zone, dated | "Resident report — one person's experience" |
| `[ESTIMATE]` | Derived or assembled by the researcher, not found in any source | "Our estimate" |
| `[TOMEK]` | Personal knowledge of the researcher, who is on the ground in Próspera with direct contacts. Not published anywhere | "Direct report — not publicly documented" |
| `[CONFIRMED]` | Cross-checked across two or more independent records | "Confirmed" |

### 0.2 Hard editorial rules

1. **Never present a `[CLAIM]` figure as fact.** Especially business counts, job counts and investment totals — Próspera's own websites give three different numbers for the same thing.
2. **Prices go stale fast.** Every price on this page has a date. Publish the date next to the number. A community price from April 2026 is not a price today.
3. **Anecdote ≠ policy.** One resident's experience is a data point. Do not write "Próspera does X" from a single resident report.
4. **Do not invent local detail.** If it is not in this file, it was not verified. There is a documented incident where 12 fabricated "community tips" listings (plausible-sounding newcomer advice, power outage tips, internet provider comparisons) sat in the source data, and **three of them reached this research base** before being caught and removed the same day. Generic-sounding expat advice with no name, price or contact attached is exactly what fabrication looks like.
5. **Publish the risk.** A knowledge site that omits the legal dispute will be dismissed as marketing. Section 3 exists for this.
6. ⭐ **Never write "Honduras versus Próspera."** The conflict has **two separate layers and they point in opposite directions.** The **municipality of Roatán** is hostile — permits, local taxes, landfill access, the occasional gate closure. The **national government** is currently comparatively friendly — it rejoined ICSID, its officials appear alongside Próspera, and it has signalled it wants to expand ZEDEs. Collapsing the two produces a badly wrong risk model in both directions: **national good news does not resolve municipal friction, and municipal friction is not evidence of national hostility.** Municipal conflict is containable, local and recurring. The existential risk lives at the national/constitutional layer. `[TOMEK — on the ground, 2026-08-03]`
7. **Distinguish three different "Prósperas":** the *zone* (the jurisdiction), *Honduras Próspera Inc.* (the Delaware company that operates it), and *Próspera the place* (the buildings on Roatán). Most public confusion comes from conflating them.

### 0.3 Suggested site structure

```json
{
  "suggested_sections": [
    {"slug": "what-is-prospera", "source": "Section 1", "audience": "everyone"},
    {"slug": "living-in-prospera", "source": "Sections 10-11", "audience": "residents & visitors", "note": "highest-traffic content — nobody else has this"},
    {"slug": "legal-status", "source": "Section 3", "audience": "researchers, investors, journalists"},
    {"slug": "taxes", "source": "Section 4", "audience": "founders, relocators"},
    {"slug": "start-a-company", "source": "Section 5", "audience": "founders"},
    {"slug": "residency", "source": "Section 6", "audience": "relocators"},
    {"slug": "property", "source": "Section 7", "audience": "buyers"},
    {"slug": "banking-and-money", "source": "Section 8", "audience": "founders, residents"},
    {"slug": "business-directory", "source": "Section 11", "audience": "residents"},
    {"slug": "compare-jurisdictions", "source": "Section 13", "audience": "founders"},
    {"slug": "criticism-and-debate", "source": "Section 14", "audience": "everyone"},
    {"slug": "faq", "source": "Section 15", "audience": "everyone"},
    {"slug": "what-we-dont-know", "source": "Section 16", "audience": "everyone", "note": "publishing open questions builds more trust than pretending completeness"}
  ]
}
```

---

## 1. WHAT PRÓSPERA IS

### 1.1 In plain language

Próspera is a special economic zone in Honduras that runs much of its own government. It writes its own business, tax and regulatory rules, runs its own arbitration courts instead of ordinary Honduran civil courts, and lets people set up residency and companies online. Think "a country within a country for business law" — but still inside Honduras, which keeps sovereignty, criminal law, defence, borders and citizenship. `[OFFICIAL]`

The legal vehicle is a **ZEDE** — *Zona de Empleo y Desarrollo Económico* (Zone for Employment and Economic Development). Honduras created the ZEDE model in 2013 to let private operators build zones with their own rules and attract investment. Próspera is the most developed one. `[OFFICIAL]`

The operating company is **Honduras Próspera Inc.**, a US (Delaware) company founded by **Erick Brimen**. Investors include **Pronomos Capital**; public backers have included Balaji Srinivasan, Coinbase's Brian Armstrong (invested Jan 2025) and Tim Draper. `[CLAIM]`

### 1.2 Where it is

- **Roatán, Bay Islands** — the main hub. Caribbean island, established dive-tourism destination, ~20 minutes from an international airport. Contains the **DUNA Tower** (tallest building on the island), the **St. John's Bay / Pristine Bay** developments, a Pete Dye golf course, Las Verandas hotel, coworking. This is the crypto/biotech/innovation cluster.
- **Puerto Satuyé, La Ceiba** (mainland coast) — a second zone oriented to manufacturing and nearshoring. Incorporated into Próspera in **March 2021**. Planned as a **396-acre (160 ha)** city-scale build for **100,000+ workers and 50,000 residents**. `[CLAIM]` Now also the proposed site of the **Satuyé Technology & Data Center**, an LNG-powered AI/data complex (see §3.9).

Land only enters the zone by **voluntary application from its owner**. Próspera is barred by its charter from taking land by force — expropriation and eminent domain are prohibited, and land taken by eminent domain is refused entry. `[OFFICIAL]`

**Requirements for land to be incorporated into the zone** `[OFFICIAL]`:

| Test | Requirement |
| --- | --- |
| Location | Departments adjoining the Gulf of Fonseca or the Caribbean Sea, including the Bay Islands |
| Encumbrance | Must be unencumbered |
| Population density | Under **35 permanent inhabitants/km²** (per CAMP procedure under Art. 39 of the Organic Law) — roughly max 1 permanent inhabitant per 7 acres |
| Provenance | Exclusively voluntary; land taken by eminent domain is refused |

### 1.3 Who runs it

| Body | Role |
| --- | --- |
| **Technical Secretary** — Jorge Constantino Colindres, a Honduran attorney appointed by the State of Honduras in January 2022 | The official link to the Honduran government; the zone's chief executive-type officer `[OFFICIAL]` |
| **Próspera Council (Council of Trustees)** | The rule-making body, structured like a board of trustees. Includes the Technical Secretary, the Promoter/Organizer (the company — Erick Brimen, Jeanette Doran and others), and property-owner representatives `[OFFICIAL]` |
| **Próspera Arbitration Center (PAC)** | Dispute resolution, used instead of ordinary Honduran courts for civil and commercial matters `[OFFICIAL]` |
| **Roatán Financial Services Authority (RFSA)** | The financial regulator for banks, fintech and crypto firms in the zone `[OFFICIAL]` |
| **CAMP** | The *national* Honduran ZEDE oversight agency (external to Próspera) `[OFFICIAL]` |

Residents have a **Bill of Rights** and several democratic rights — electing the Technical Secretary subject to approval, a Council majority, and repealing rules by referendum. In practice the operating company holds most of the power today. `[OFFICIAL]` That gap between the formal rights and the practical balance of power is a fair thing to state plainly on a knowledge site.

### 1.4 Legal foundation

- **Article 329 of the Honduran Constitution** and the **ZEDE Organic Law (Decree 120-2013)**. `[OFFICIAL]`
- Honduras granted a **50-year legal-stability guarantee** via Legal Stability Agreements, backed (Próspera argues) by **CAFTA-DR** (the US–Central America trade deal) and a **Kuwait bilateral investment treaty**. `[OFFICIAL]`
- Honduran **criminal law applies in full inside the zone** under Art. 41(3) of the ZEDE Organic Law. Próspera can write commercial, civil, labour and regulatory law — it cannot write criminal law. `[OFFICIAL]` This matters more than people expect (see §9.4 on gaming).
- **The cloud:** Congress voted to repeal the ZEDE law in 2022 and the Supreme Court ruled the framework unconstitutional in 2024. Próspera disputes both and keeps operating. Full detail in §3.

### 1.5 Key numbers — read the warning first

⚠️ **Próspera's own websites publish different numbers for the same things.** Do not print a single confident figure.

```json
{
  "key_numbers": {
    "businesses_registered": {
      "published_figures": ["200+ (prospera.co)", "500+ (prosperaglobal.com)", "250+ (current marketing)"],
      "house_rule": "quote 'roughly 250 registered entities, self-reported'",
      "critical_caveat": "registration is cheap - roughly $330-480/yr ongoing, see section 5.3 - so registrations are a poor proxy for real activity; nobody has counted how many have employees or revenue",
      "tier": "CLAIM - inconsistent"
    },
    "residents": {"figure": "1,700+ from 40+ countries", "tier": "CLAIM"},
    "local_jobs": {"figures": ["~950 active (prospera.co)", "3,400+ created (myths page)"], "note": "different definitions", "tier": "CLAIM"},
    "investment": {"deployed": "$100M+", "in_development": "$2.5B", "tier": "CLAIM"},
    "built_real_estate_sqm": {"figure": "34,000+", "tier": "CLAIM"},
    "land_incorporated": {"figure": "1,000+ acres (~400 ha)", "independent_note": "Criterio reports expansion toward ~4% of Roatán's surface", "tier": "CLAIM / INDEPENDENT"},
    "ease_of_doing_business_rank": {
      "figure": "#9 globally, score 83.1, ahead of Norway",
      "source": "Ernst & Young proforma commissioned by Próspera",
      "caveat": "uses the World Bank's discontinued Doing Business methodology — that index was scrapped in 2021 over a data-rigging scandal. Treat as marketing.",
      "tier": "CLAIM"
    },
    "freedom_index": {"figure": "#1 of 235 territories, 2026 Denationalize.me Freedom Index", "caveat": "note the index's ideological priors", "tier": "RESIDENT/CLAIM"}
  }
}
```

**The honest read on scale**, from counting who actually transacts rather than who registers: this is a **village-scale economy with a disproportionately loud institutional layer**. The service base is hospitality, diving, food, transport, wellness and cleaning — a resort town. The high-value activity (biotech, governance, finance) is real but concentrated in a handful of named entities. Present Próspera as a functioning small town with an unusual legal wrapper, not as a deep business ecosystem. `[ESTIMATE — from 554 community listings, Feb–Jul 2026]`

### 1.6 Why people are drawn to it

Low in-zone tax, fast and cheap online company setup, choice of regulatory regime, crypto-friendliness, private arbitration, and a Caribbean lifestyle hub with real community density (roughly one community event per day). The pitch is "the next Dubai." Whether it survives its legal fight is the open question.

---

## 2. GLOSSARY (publish this — the vocabulary is a barrier)

| Term | Meaning |
| --- | --- |
| **ZEDE** | *Zona de Empleo y Desarrollo Económico*. The Honduran legal category Próspera exists under, created 2013 |
| **Próspera ZEDE** | The jurisdiction / zone itself |
| **Honduras Próspera Inc.** | The Delaware company that operates the zone ("the Promoter/Organizer") |
| **Technical Secretary** | The zone's chief officer, appointed by the State of Honduras. Currently Jorge Colindres |
| **Council of Trustees** | The rule-making body |
| **RFSA** | Roatán Financial Services Authority — the zone's financial regulator |
| **RIFC** | Roatán International Financial Center — the licensing framework RFSA administers |
| **RCLC** | Roatán Common Law Code — the default legal code; imports Delaware common law as of 30 Nov 2018 as a gap-filler |
| **PAC** | Próspera Arbitration Center |
| **eProspera** | The e-government portal (eprospera.com) — residency, entities, filings |
| **(e)Resident vs Resident** | Two tiers of membership. (e)Residents get 30 days' physical access/year; full Residents get year-round access plus the legal stability guarantee |
| **Agreement of Coexistence** | The document every resident/entity signs to join. Doubles as a proof-of-address document for some KYC processes |
| **PTC** | Próspera Tax Credit — a transferable blockchain token used to prepay Próspera tax at a discount |
| **MTC** | Marketable Tax Credit — employer credits for labour premiums, benefits and overtime. Not the same as a PTC despite similar naming |
| **MFNT** | Most Favored Nation Treatment — the right to ask Próspera to match a competitor jurisdiction's tax deal |
| **CAMP** | The national Honduran ZEDE oversight agency |
| **CC&Rs** | Covenants, Conditions & Restrictions — the community declaration attached to most parcels; replaces zoning |
| **ICSID** | International Centre for Settlement of Investment Disputes (World Bank). Where Próspera is suing Honduras |
| **CAFTA-DR** | The US–Central America–Dominican Republic free trade agreement; the treaty basis for Próspera's claim |
| **CFC** | Controlled Foreign Company rules — your *home* country's rules that can tax a low-taxed foreign company's profits in your hands |
| **Infinita City** | A biotech/longevity sub-community inside the zone, with its own token ($LIVES) and venues |
| **SJBEC** | St. John's Bay Electric Company — the zone's sole electricity *and* water utility |

---

## 3. LEGAL STATUS AND RISK — the honest section

> **Editorial note for the website:** this is the section that decides whether the site is trusted. Publish it fully. The strongest possible framing is neutral and dated: here is what happened, here is who says what, here is what has not been resolved.

### 3.1 The short version

Honduras created ZEDEs in 2013, then reversed course. Congress voted to repeal the ZEDE law in April 2022, and the Supreme Court ruled the framework unconstitutional in September 2024. Próspera rejects both, keeps operating, and is suing Honduras in international arbitration — **for ~$1.63 billion**, cut from the widely-quoted $10.775 billion in October 2025 and confirmed at the lower figure by Honduras's own state attorney's office. A pro-business president (Nasry Asfura) took office in January 2026 and completed Honduras's return to the World Bank's investment court (ICSID) on 17 July 2026, effective 16 August 2026.

**So: a real legal cloud, materially improving political weather, outcome still unknown.**

⭐ **But read the whole of this section through the two-layer lens set out in §0.2.** The national picture improved through 2026. **The municipal picture did not** — and in July 2026 it escalated (§3.6). These are different fights with different opponents, different stakes and different timescales. Most published writing about Próspera conflates them.

### 3.2 The single most important legal nuance: the 2022 repeal was never completed

The **US State Department's June 2026 Report to Congress on United States Investment in Próspera ZEDE** — the most authoritative non-party source available — states: `[INDEPENDENT — US Government]`

> *"Because the ZEDE law was incorporated into the Honduran constitution, the National Congress needed to ratify the repeal in its subsequent session, **which it failed to do**."*

The famous "128–0 repeal" was the **first of two constitutionally required votes**. The second never happened. On the US government's reading the repeal is **procedurally incomplete**.

**This is independently corroborated by an opponent.** A March 2026 opinion piece in *Criterio.hn* — hostile to Próspera — says the repeal *"debió ser ratificada en la legislatura siguiente (2023), pero diputados de los partidos tradicionales se reusaron a ello."* `[INDEPENDENT]`

It does **not** cancel the separate 2024 Supreme Court unconstitutionality ruling. But it means the *legislative* leg of the attack on ZEDEs is weaker than the headlines suggest.

### 3.3 Three more findings from the same US State Department report `[INDEPENDENT — US Government, Jun 2026]`

- **No expropriation has been found.** *"At this time, the U.S. government is not aware of any case in which properties in the ZEDEs were determined by a competent tribunal to have been expropriated by the Honduran government."*
- **But real municipal friction exists.** The municipal government of Roatán ***allegedly*** locked access to a Próspera building over a dispute about unpaid *local* taxes. (The hedge is the State Department's own wording; the underlying event is separately documented in Honduran press — see §3.5.)
- **The US is actively mediating.** State meets "regularly with both parties" in Washington and Tegucigalpa and has raised the dispute with Asfura's team since his January 2026 inauguration.

### 3.4 Honduras and ICSID — the 2026 development

- **6 Mar 2026:** Asfura signs the ICSID Convention — Honduras becomes the 166th signatory. A signature only. `[OFFICIAL — ICSID]`
- **17 Jul 2026:** Ambassador Roberto Flores Bermúdez deposits the **Instrument of Ratification** at World Bank offices in Washington DC; receipt confirmed same day by ICSID Secretary-General Martina Polasek under Art. 68(2). Honduras is the **159th State to ratify**. `[OFFICIAL — Honduran Foreign Ministry]`
- **16 Aug 2026:** the Convention **enters into force for Honduras** (30 days after deposit).

**What it changes and does not change:**

- ❌ It does **not** change this case. Próspera's claim was already unaffected by the 2024 denunciation — Honduras "must still defend against Próspera's claim and any previously filed ICSID claims."
- ✅ It **is** a strong signal of intent. A government planning to stonewall investor claims does not spend a year of political capital rejoining the investor-arbitration system. This raises the odds of a negotiated settlement.
- ⚠️ It cuts both ways for Honduras: per IISD/ITN (Apr 2026), rejoining deepens Honduras's own exposure to future multi-billion-dollar claims.
- ⚖️ It does **nothing** about the domestic constitutional problem. The 2024 ruling and the missing restoration legislation are untouched.

### 3.5 The municipal dispute — the risk people actually feel

This is more practically relevant to most people than the constitutional question. `[INDEPENDENT — Honduran press]`

- **14 October 2024** — the **Alcaldía de Roatán closed Próspera's gates**, claiming roughly **L12,000,000 (~USD 480,000)** in unpaid municipal taxes. **Armed police officers were authorised** to close the central administrative building. Mayor **Ron McNab**: *"tenemos meses atrasados de Próspera y tenemos que hacer cumplir las leyes."*
- **It was never only about tax.** McNab: *"no reconocemos a Próspera como otra nación ni país… Los reconozco como malos inversionistas, que ni siquiera pagan sus permisos de operación, construcción y ambientales."* **The municipality disputes Próspera's operating, construction and environmental permits.** That reaches directly into real estate and development.
- **Próspera's position:** it owes nothing; operations were *"100% compliant, including the corresponding taxes."* Technical Secretary Colindres grounds the autonomy claim in Art. 329 of the Constitution, Arts. 2 and 30 of the ZEDE Organic Law, and Art. 17-A of the Financial System Law, plus the 50-year guarantee. A Próspera representative called the closure an illegal exaction under Art. 483 of the Penal Code. Próspera says it transfers **12% of its tax collection** to national and municipal government (Colindres, Mar 2026).
- **Timing:** the closure came about one month after the September 2024 Supreme Court ruling. The municipality acted on the ruling before anyone else did.
- **The durable fact: Ron McNab was re-elected mayor of Roatán in December 2025** (12,867 votes, a record for a Liberal candidate in Islas de la Bahía). **Municipal friction is a standing condition, not a past incident.**

> The constitutional question decides whether Próspera exists in ten years. The municipal question decides whether a building is accessible next quarter.

### 3.6 ⭐ The 30 July 2026 municipal requerimiento — the newest and most concrete friction

**A primary document, not press coverage.** On **30 July 2026** the **Alcaldía Municipal de Roatán, Departamento de Mora Tributaria** issued a *Cédula de Requerimiento* to companies associated with Próspera. Signed by **Lic. Cherie Peralta López**, head of the arrears department; legal basis cited is **Arts. 73, 74 and 75 of the Ley de Municipalidades**. `[PRIMARY — document held; pages 1, 2, 3 and 6 of 6]`

**⚠️ Get the first fact right: it is not a tax bill.** The title mentions taxes and municipal fees, but **the operative demand is to regularise operating permits and appear in person. No monetary amount appears anywhere in the pages held.** Most coverage of this will get that wrong.

The companies are described as *"Sociedades Mercantiles que en su momento **supuestamente** fueron creadas o afiliadas de manera ilegal por 'PRÓSPERA ZEDE'"* — note the **"supuestamente"** ("allegedly"): the Municipality hedges its own characterisation.

⚠️ **And the qualifier that most limits near-term risk:** per Próspera's Technical Secretary, the demand was issued to 267 companies but **formally notified to only one**. `[RESIDENT — first-party]` Service of process matters; an unserved demand is a weaker instrument than the headline count suggests.

**Four operative consequences:**

1. **It is expressly a first summons** — *"POR PRIMERA VEZ"*. An escalation ladder is implied.
2. **15 calendar days** to appear at the Palacio Municipal, Dixon Cove → **deadline on or about 14 August 2026**.
3. **If they do not appear:** the Municipality *"procederá al cierre de dichos negocios"* — **will close the businesses** — and file a *Denuncia* with the **Fiscalía del Ministerio Público** for **Desobediencia**.
4. ⚠️ **Already in force, not conditional:** the listed companies *"no se les permitirá el ingreso de desechos sólidos al **Relleno Municipal** a partir de la presente fecha."* **Municipal landfill access is barred as of 30 July**, regardless of whether anyone complies. This clause is bold and underlined in the original.

**Why point 4 matters more than it looks.** Every other consequence is a threat contingent on non-compliance; the grammar makes that explicit (*"de no hacerlo…"*). **The waste ban is not conditioned on anything.** Próspera sits on an island with one municipal landfill, and solid-waste disposal is exactly the dependency a special jurisdiction cannot easily self-provide. **It is the one lever the Municipality can pull without a court, a police action, or anyone's cooperation.** Anyone modelling this risk as "legal argument versus legal argument" is reading the wrong clause.

⚠️ **Be precise about what is document and what is reading.** The **grammatical difference is the document**; treating the waste ban as *the* operative measure is **inference, not the Municipality's words** — it nowhere describes the ban as a strategy. Publish the clause and the grammar; present the significance as analysis.

**⚠️ The list is old, and probably a registry dump rather than a survey of trading businesses.** Internal evidence: **entry #22 is literally `TEST Prospera Entity LLC`**. The list mixes holding companies, SPVs, trusts and foundations with actual storefronts, and it includes **Próspera's own institutions** — Honduras Próspera Inc., the **Próspera Arbitration Center**, its internal security company, and its **medicines regulator**. Demanding a municipal operating permit from a jurisdiction's own arbitration centre and regulator *is* the competence dispute, not an administrative oversight. **Counting caveat:** the document says 267, but the numbering jumps 264 → 267, so the true row count is likely **265**. Cite "267" as the document's own figure, not as a verified count.

**Próspera's response, from the official who signs it.** Technical Secretary **Jorge Colindres** issued a notice to residents on **1 August 2026** stating the Municipality has **no tax competence inside Próspera ZEDE** and that the demand is ***nulo de pleno derecho*** under **Art. 34(a) of the Ley de Procedimiento Administrativo**, warning that coercive collection could constitute ***exacciones ilegales***, ***prevaricato administrativo*** and ***abuso de autoridad***. In the community channel he called it *"a local tradition we honor every year — where the municipality tries to illegally extort us into paying taxes we don't owe. Since 2020."* On enforcement: *"Worst case scenario is that they put **stickers on the front door**."* `[RESIDENT — first-party, on the record]`

**⚠️ Two things to publish alongside that quote, because it is the ZEDE's characterisation and not the demonstrated ceiling:**

- **The document is harsher than the summary.** It threatens business closure and a criminal referral, and it imposes an immediate waste ban. Colindres's legal position may well be right; *"stickers"* describes the outcome he expects, not what the notice says.
- **The demonstrated ceiling is higher.** In **October 2024** the same Municipality closed Próspera's gates and suspended operations over ~L12m (~$480k) — see §3.5. **Price operational interruption, not stickers.** *(Caveat: that was the previous municipal administration. **One named resident**, Emilio F. Castillo, describes the current one as having *"a more constructive posture"* — that is a single first-hand impression, not a documented change of policy.)*

**The most quotable line, and the most uncomfortable one.** Asked to circulate the list of companies, Colindres replied: *"I don't want to be part of this tradition either, but it is what it is and, for now, comes with doing business here — **it is also a risk that everyone here has contractually assumed and accepted**."* `[RESIDENT]`

**That reframes municipal tax and permit risk from a tail risk to a known, recurring, disclosed cost of doing business.** For a knowledge site, that is the honest headline: not "this might happen," but "this happens annually, and the operator's position is that you accepted it."

**What is genuinely unknown — do not fill this in:** what happened at the ~14 August deadline (did anyone appear, was anything closed, was the *Denuncia* filed), and whether the landfill ban is actually being enforced. Both are cheap to check on the ground and neither has been checked.

### 3.7 Political normalisation in 2026 — and the argument that it helps Próspera legally

Through H1 2026 Próspera moved from pariah to sponsor. `[INDEPENDENT — Criterio.hn, 18 Jun 2026]`

- **President Asfura posed at Próspera's stand** at the Foro Iberoamericano de Turismo — an event organised by COHEP (the Honduran private-enterprise council) and CEIB, with Próspera among the sponsors.
- **COHEP reversed itself.** In 2021 COHEP published a legal analysis calling ZEDEs *"una imposición de un nuevo Estado dentro del Estado de Honduras"* and warned investors off. In April 2026 its president and vice-president **visited Próspera**. COHEP did not respond to Criterio's request to explain the reversal.
- **State bodies participated** — Senprende and the Culture/Arts/Sports Secretariat joined a Próspera-organised forum in April 2026.
- Nationalist deputy **Marco Midence** floated "reviewing" the model in January 2026. **Still the closest thing to a legislative move — and still not a bill.**

**The legal point critics themselves raise:** Fernando García, the former presidential commissioner *against* ZEDEs, warned that officials appearing at Próspera events *"could be interpreted as tacit recognition"* and **could be used by the claimants in the arbitration**. Set the rhetoric aside and the observation stands: a state that treats an entity as a legitimate counterparty weakens its own argument that the entity has no legal existence. **Every photo-op is, at the margin, evidence for Próspera.**

**Do not read this as the storm passing.** It is elite realignment, not law. Oxfam Honduras, OFRANEH and ERIC-SJ remain opposed; the constitutional ruling is untouched; and Próspera is expanding, which enlarges the political target as much as the business.

### 3.8 The judicial-independence crisis — uncomfortable, and it cuts both ways

`[INDEPENDENT — AFP/swissinfo, WOLA, CEJIL, Criterio.hn]`

- **25 March 2026** (AFP wires date it 26 March — same session): Congress removed **Attorney General Johel Zelaya** by *juicio político* (impeachment) — **93 of 128 votes**, with support from four parliamentary blocs, days after the process opened. **Pablo Emilio Reyes Theodore** was installed the same night for a term to February 2029. This was the first use of *juicio político* in Honduran history.
- **The same session:** as the impeachment petition against **Supreme Court President Rebeca Ráquel Obando** began to be read, her "irrevocable" letter of resignation from the court presidency was read instead. **She resigned the presidency only — she remains a sitting magistrate.** Her stated reason was **Decreto Legislativo 10-2026**, which stripped the presidency of its administrative powers.
- Congress then extended *juicio político* to senior figures at the Public Ministry, the CNE (electoral council), the TJE (electoral tribunal) and the Supreme Court.
- **WOLA and CEJIL** objected publicly; specialists note it runs against the Inter-American Court's ruling in *Gutiérrez Navas and others v. Honduras*, which concerns arbitrary removal of Honduran judges.

**Both halves, honestly:**

- ✅ Mechanically it **helps** Próspera. The court that issued the 2024 ruling is being reshaped by a Nacional–Liberal co-government that is openly pro-ZEDE. A future court revisiting that ruling is more plausible in August 2026 than in December 2025.
- ❌ Substantively it **should worry** anyone relying on Honduran legal guarantees. A jurisdiction where the legislature can remove the attorney general in 48 hours is one where *any* guarantee is weaker — including Próspera's.
- ⚖️ It also complicates the arbitration narrative: it strengthens Próspera's argument that Honduran domestic institutions cannot be relied on, while undermining "the weather is improving, relax."

**The one-line framing:** *the odds that the ZEDE framework survives went up this year; the value of any Honduran legal guarantee went down. Those are not the same thing.*

### 3.9 The Satuyé Technology & Data Center — the newest flashpoint

`[INDEPENDENT — Criterio.hn, 13 Jul 2026]` / `[CLAIM — Próspera blog, 16 Apr 2026]`

- Próspera is promoting the **STDC** at Puerto Satuyé, La Ceiba — a data-centre and "Sovereign AI" complex powered by imported **liquefied natural gas**.
- Co-investor **MAG Technologies Group** (cybersecurity, founded 2007, Petah Tikva, Israel), CEO **Rami Arad**, met **President Asfura** in mid-April 2026, with Economic Development Secretary Eddy Ordóñez present.
- ⚠️ **Read the caveats.** Criterio's "ex-IDF" description of Arad is one hostile source deep and not independently confirmed — do not state it as fact. Próspera's readout of the Asfura meeting names only Ordóñez and covers digital banking, cybersecurity and telecoms — **not the STDC**. The government's own post about the meeting **appears to have been deleted**, while Próspera's stayed up. MAG's corporate profile described a **BOT (Build–Operate–Transfer) model with a 20–25 year operating period**, and Criterio says that description was subsequently changed. So: a presidential courtesy meeting plus a private co-investor, **not a signed state partnership**. Do not oversell it in either direction.
- **Opposition is territorial, not just constitutional.** OFRANEH's **Rony Castillo** frames coastal expansion as a threat to Garífuna communities along *"more than 800 km"* of coast. The Garífuna hold **four favourable Inter-American Court judgments** on territorial rights and prior consultation. **This is a distinct and durable legal-risk channel, separate from the ZEDE constitutional case.**
- **History correction worth publishing:** Puerto Satuyé was incorporated into Próspera in **March 2021**, and the municipality of **La Ceiba declared itself "ZEDE-free" in June 2021** — after the fact. Próspera's ICSID memorial says the 2018 expansion offer came from then-mayor Jerry Sabio.

### 3.10 Timeline

```json
{
  "timeline": [
    {"date": "2013", "event": "ZEDE Organic Law passed (Decree 120-2013)", "tier": "OFFICIAL"},
    {"date": "2017-2020", "event": "Próspera ZEDE approved and launched on Roatán", "tier": "OFFICIAL"},
    {"date": "2021-03", "event": "Puerto Satuyé (La Ceiba) incorporated into Próspera", "tier": "OFFICIAL"},
    {"date": "2021-06", "event": "Municipality of La Ceiba declares itself 'ZEDE-free'", "tier": "INDEPENDENT"},
    {"date": "2021", "event": "COHEP publishes legal analysis calling ZEDEs 'a state within a state'", "tier": "INDEPENDENT"},
    {"date": "2022-02", "event": "Securitize security token offering: additional $100M raise by Honduras Próspera Inc.", "tier": "OFFICIAL"},
    {"date": "2022-04", "event": "Honduran Congress votes 128-0 to repeal the ZEDE law - but this was only the first of two constitutionally required votes; the ratifying vote never happened", "tier": "INDEPENDENT - US State Dept"},
    {"date": "2022-12", "event": "Próspera files notice of intent; later a formal ICSID/CAFTA-DR claim", "tier": "INDEPENDENT"},
    {"date": "2023", "event": "Claim quantified publicly at US$10.775 billion (~2/3 of Honduras's annual budget)", "tier": "CLAIM"},
    {"date": "2024-02-24", "event": "Honduras (Castro govt) denounces the ICSID Convention; effective 25 Aug 2024", "tier": "INDEPENDENT"},
    {"date": "2024-09-20", "event": "Honduras Supreme Court declares ZEDEs unconstitutional, retroactive (ex tunc), unanimous", "tier": "INDEPENDENT"},
    {"date": "2024-10-14", "event": "Alcaldía de Roatán closes Próspera's gates with armed police over ~L12m (~USD 480k) claimed unpaid municipal taxes; also disputes operating, construction and environmental permits", "tier": "INDEPENDENT"},
    {"date": "2025-02-26", "event": "ICSID Tribunal rejects Honduras's preliminary objection; case proceeds", "tier": "INDEPENDENT"},
    {"date": "2025-10-15", "event": "Claimants file Memorial on the Merits - claim cut to ~$1.63B", "tier": "INDEPENDENT"},
    {"date": "2025-10-22", "event": "Honduras's own Procuraduría General (PGR) publicly confirms the cut from $10,775M to $1,630M, calling it an 85% reduction", "tier": "OFFICIAL - PGR Honduras"},
    {"date": "2025-11-30", "event": "Honduras general election", "tier": "INDEPENDENT"},
    {"date": "2025-12", "event": "Ron McNab re-elected mayor of Roatán (12,867 votes)", "tier": "INDEPENDENT"},
    {"date": "2025-12-24", "event": "Nasry Asfura (National Party) declared winner (~40% vs Nasralla ~39%; LIBRE's Moncada ~19%)", "tier": "INDEPENDENT"},
    {"date": "2026-01-27", "event": "Asfura inaugurated - pro-business, pro-investment stance", "tier": "INDEPENDENT"},
    {"date": "2026-03-06", "event": "Asfura signs the ICSID Convention - Honduras becomes 166th signatory", "tier": "OFFICIAL - ICSID"},
    {"date": "2026-03-19", "event": "Tribunal declines to bifurcate (Procedural Order No. 6) - no separate early exit for Honduras", "tier": "INDEPENDENT"},
    {"date": "2026-03-25", "event": "Judicial crisis: Congress removes AG Johel Zelaya by juicio político (93 of 128); CSJ President Rebeca Ráquel Obando resigns the court presidency", "tier": "INDEPENDENT"},
    {"date": "2026-04", "event": "COHEP leadership visits Próspera; state bodies join a Próspera-run forum", "tier": "INDEPENDENT"},
    {"date": "2026-04-16", "event": "MAG Technologies CEO Rami Arad meets President Asfura", "tier": "CLAIM - Próspera blog"},
    {"date": "2026-06", "event": "US State Dept report to Congress: repeal never ratified; no tribunal has found expropriation; State actively mediating", "tier": "INDEPENDENT - US Government"},
    {"date": "2026-06-18", "event": "Asfura poses at Próspera's sponsor stand at the COHEP/CEIB tourism forum", "tier": "INDEPENDENT"},
    {"date": "2026-07-13", "event": "Satuyé Technology & Data Center reported: Próspera + MAG Technologies, LNG-powered AI/data complex. OFRANEH warns of Garífuna territorial displacement", "tier": "INDEPENDENT"},
    {"date": "2026-07-17", "event": "Honduras deposits its Instrument of Ratification of the ICSID Convention - 159th State to ratify", "tier": "OFFICIAL - Honduran Foreign Ministry"},
    {"date": "2026-07-21", "event": "Updated Procedural Order No. 7 issued (amicus curiae applications)", "tier": "INDEPENDENT - Jusmundi"},
    {"date": "2026-07-30", "event": "MUNICIPAL: Alcaldía de Roatán issues a Cédula de Requerimiento to companies associated with Próspera (267 per the document, likely 265 rows) - demanding they regularise OPERATING PERMITS and appear within 15 days. Threatens business closure plus a criminal Denuncia for Desobediencia. Bars the listed companies from the municipal landfill with immediate effect. Signed by Lic. Cherie Peralta López, Departamento de Mora Tributaria", "tier": "PRIMARY - document held"},
    {"date": "2026-08-01", "event": "Próspera's Technical Secretary Jorge Colindres notifies residents that the demand is nulo de pleno derecho under Art. 34(a) of the Ley de Procedimiento Administrativo and that the Municipality has no tax competence inside the ZEDE", "tier": "RESIDENT - first-party"},
    {"date": "2026-08-14", "event": "APPROXIMATE DEADLINE in the municipal requerimiento. WHAT ACTUALLY HAPPENED IS UNKNOWN - do not assume either way", "tier": "PRIMARY - derived from the document"},
    {"date": "2026-08-16", "event": "ICSID Convention enters into force for Honduras - formally a member state again", "tier": "OFFICIAL"},
    {"date": "pending", "event": "Arbitration continues; NO AWARD. Claim stands at ~$1.63B. No Counter-Memorial or hearing date public as of 1 Aug 2026", "tier": "INDEPENDENT"}
  ]
}
```

### 3.11 The two sides of the argument, fairly stated

**Honduras / the repeal side:** ZEDEs gave away too much sovereignty and violated the Constitution; the Supreme Court agreed and voided the framework from inception. A sovereign state can change its laws. Critics call the zones undemocratic.

**Próspera / the investor side:** ZEDEs were enabled by a constitutional amendment and protected by a 50-year legal stability guarantee, plus CAFTA-DR and the Kuwait BIT. A government cannot simply repeal away binding guarantees to investors. International arbitration, not Honduran courts, decides whether Honduras must restore the framework or pay damages.

**Both can be true at once:** Honduras can lawfully change domestic law *and* still owe compensation under international treaties. That is the likely shape of the outcome.

### 3.12 Scenarios

| Scenario | Shape | Effect on someone inside Próspera |
| --- | --- | --- |
| **Restoration / settlement** | New government restores the framework or settles with Próspera | Best case. Zone continues; guarantees firm up |
| **Status quo limbo** | Zone keeps operating in legal grey while arbitration drags on for years | Business as usual day-to-day, but no certainty; reputational and banking friction |
| **Damages-only win** | Tribunal says Honduras owes money but does not force restoration | Próspera (the company) may get paid; the zone's future still political |
| **Wind-down** | Honduras ultimately dissolves the zone | Worst case. Entities need redomiciliation; land cannot move |

### 3.13 The asymmetry that matters most

**A Próspera *company* can redomicile. Próspera *land* cannot move. A *PTC token* is worthless outside the zone.** The same headline legal risk is mild for a holding company, serious for real estate, and near-total for zone-specific instruments. Anyone writing about "the risk" should specify which exposure they mean.

### 3.14 A relevant precedent: the Network School

Not a Próspera fact, but the closest available comparator for host-state political risk. Balaji Srinivasan's **Network School was forced out of Johor, Malaysia** inside a week, and signed an MOU with a new host nation within days (confirmed in *Fortune*, 26 Jul 2026, naming Johor as the exit and Israel and Kazakhstan in the successor picture). `[INDEPENDENT]`

**Update, 2026-08-03:** community members with direct contact report the next host is **Kazakhstan, probably Almaty, probably October**, with the Network School conference to be held there and **some residents already relocated**. `[RESIDENT — community report, not independently confirmed]` A second-order point residents themselves raised: a cohort in transit is a concrete **inbound-resident opportunity** for Próspera.

Two lessons residents themselves drew: **a pre-arranged exit option massively reduces the damage** — but **the human cost of a fast exit is real**. A jurisdiction can survive an eviction; the residents and businesses inside it absorb the disruption.

---

## 4. TAX

> ⚠️ **The one thing to put at the top of any tax page:** Próspera's low tax is the rate charged *inside the zone*. It does **not** cancel home-country tax. This is the single most common mistake people make.

### 4.1 The four taxes

Próspera levies only four. The "effective" rate comes from taxing only part of the base at a 10% rate — a "presumed income" model borrowed from Brazil's *Lucro Presumido*. `[OFFICIAL]`

```json
{
  "taxes": [
    {"tax": "Personal income tax", "headline_rate": "10%", "base": "50% of gross income", "effective": "5% of gross", "note": "less after the $8,000 allowance - see 4.3"},
    {"tax": "Business income tax", "headline_rate": "10%", "base": "10% of gross revenue", "effective": "1% of gross"},
    {"tax": "Retail VAT / sales tax", "headline_rate": "5%", "base": "50% of retail price", "effective": "2.5%"},
    {"tax": "Land value tax", "headline_rate": "1%", "base": "land value, buildings excluded", "effective": "1%", "status": "CURRENTLY SUSPENDED - suspension is discretionary, model hold costs as if it returns"}
  ],
  "important": "Everything is taxed on GROSS, not profit. For a low-margin business this can cost more than it looks; for a high-margin business it is extremely cheap.",
  "tier": "OFFICIAL"
}
```

### 4.2 What Próspera does not charge

No wealth tax, estate/inheritance tax, gift tax, payroll tax, social security tax, import or export duties, excise taxes, or Medicare-style taxes. Capital gains are outside the charge. `[OFFICIAL]`

⚠️ **Unresolved source conflict on customs duties.** Próspera's tax materials list "no import or export duties" among the taxes not charged, while the lump-sum material says lump-sum users "still owe VAT, customs duties and property charges." **Both appear in Próspera-side sources — do not print either as settled.**

⚠️ **Two qualifications on the capital-gains line, both real:**

1. **§7(2)(c)** exempts sales of *capital assets*, but the exemption does **not** apply to **trading stock**, and **§9** recharacterises the sale of a *right to receive income* as revenue. **An active trader — including in crypto — cannot assume 0%.**
2. The Tax Statute's withholding schedule charges roughly **1% effective on dividends, interest, royalties and rent** (see §4.7).

### 4.3 The $8,000 allowance — the detail the marketing barely mentions

**Tax Statute §22** grants every natural person resident in the zone *"an allowance of $8,000 to be deducted from the natural person's **presumed income**."* `[OFFICIAL — statute text]`

The mechanics matter: the deduction comes off **presumed** income, i.e. *after* the 50% deeming. Because presumed income is half of gross, an $8,000 allowance shelters roughly **$16,000 of gross income**. §22(1) covers Honduran citizens resident outside a ZEDE in the prior five years; **§22(2) extends the same $8,000 to every other natural person resident in the zone — so foreigners get it too.**

```json
{
  "personal_income_tax_worked_examples": [
    {"gross": 16000, "presumed_50pct": 8000, "less_allowance": 0, "tax_at_10pct": 0, "effective_rate": "0%"},
    {"gross": 50000, "presumed_50pct": 25000, "less_allowance": 17000, "tax_at_10pct": 1700, "effective_rate": "3.4%"},
    {"gross": 100000, "presumed_50pct": 50000, "less_allowance": 42000, "tax_at_10pct": 4200, "effective_rate": "4.2%"},
    {"gross": 250000, "presumed_50pct": 125000, "less_allowance": 117000, "tax_at_10pct": 11700, "effective_rate": "4.7%"}
  ],
  "takeaway": "5% is the ceiling the rate approaches, not what most people pay",
  "tier": "OFFICIAL - Tax Statute §22"
}
```

### 4.4 Other mechanics

- **No double tax on owners:** tax a company pays is credited against the owner's tax, in proportion to ownership. `[OFFICIAL]`
- **Non-residents earning in the zone:** the payer withholds 5% of gross monthly and remits within 15 days of month-end. `[OFFICIAL]`
- **Foreign tax credit:** §43 lets a person credit foreign tax paid against Próspera tax on zone-sourced income. Rarely relevant at ~1%, but notable because **Honduras nationally grants no foreign tax credit at all.** `[OFFICIAL]`
- **Filing:** online at eprospera.com; pay by card, bank transfer or crypto. A founder claims returns take "less than 5 minutes." `[CLAIM]`

### 4.5 ⚠️ Two different April deadlines — do not conflate them

This is a documented source of confusion, including in Próspera's own pages.

| Filing | Deadline | Authority |
| --- | --- | --- |
| **Tax Statement** (the tax return) | **30 April** — "four months after the end of the year of assessment" | Tax Statute **§74** `[OFFICIAL]` |
| **Annual Report** (the entity/corporate filing) | **After 1 January and before 1 April** | Próspera Help Center `[OFFICIAL]` |

VAT is filed quarterly within 15 days of quarter-end. Extensions are available under §97.

*(Unresolved: one Próspera page says the annual report is due in the same period of "each second calendar year thereafter" — i.e. biennial after the first — while another prices it at "$100/year." Cannot be reconciled from public sources.)*

### 4.6 The "0% on non-Próspera revenue" claim — it has a statutory basis

Providers market a Próspera LLC as "0% tax on global revenue for LLCs with no local operations; 1% only on gross *local* revenue." Próspera's own site just says "~1% effective business tax." Reading the statute rather than the marketing:

> *"For the avoidance of doubt, tax under this Part shall **not** be imposed or charged on — (a) any revenue or income that is **not sourced in, or derived from, the PZ**…; (c) any revenue or income arising from the sale of capital assets."*
> — Próspera Tax Statute **§7(2)** `[OFFICIAL]`

And §7(1) charges tax only on *"presumed income arising in or derived from the PZ."* So the 0%-on-foreign-revenue position is **not merely marketing spin — it has a direct statutory basis.**

**Three cautions, and the second is the one that bites:**

1. **"Sourced in or derived from the PZ" is the load-bearing phrase**, and it is defined elsewhere. **§13** attributes certain amounts *back* into zone-source income. If you run the company from an office in Próspera with staff in Próspera, the argument that revenue is not zone-derived gets *harder*, not easier.
2. **Home-country risk.** Even at a true statutory 0% in Próspera, your home country applies its own rules (CFC, place of effective management, personal tax residency). See §4.9.
3. **Get it in writing** for a specific fact pattern. A statutory carve-out is a strong starting point, not a ruling on your facts.

**Fair framing:** *"the statute expressly excludes non-zone-source revenue; the live question is whether your revenue is zone-source, and separately what your home country does about it."*

### 4.7 ⚠️ Statute vs marketing: the withholding on investment income

**Próspera's official site says:** *"There are no additional taxes on dividends, capital gains, excise taxes, or any other type of tax."* `[OFFICIAL — pzgps.hn]`

**The Tax Statute sets out a withholding schedule.** For dividend, interest, royalty and rent payments the text is structurally identical: *"An amount calculated by applying to **10% of the gross amount** … the following prescribed rate: … at the fixed rate of **10%**."* `[OFFICIAL — statute]`

10% of gross taxed at 10% = **1% effective withholding**, on all four payment types. This is the same deeming architecture as the 1% business tax, so it is deliberate design, not a drafting quirk.

**Do not report this as "Próspera is lying."** A withholding is usually a **collection mechanism** for income tax already due, not a separate layer. If the 1% is creditable against the recipient's income tax, both statements are true at once and there is only a cash-flow effect. **Whether it is final or creditable is genuinely unresolved.** Correct phrasing: *"expect roughly 1% withheld on dividends, interest, royalties and rent; whether that's a final cost or creditable is unconfirmed."*

**A rate-matching escape hatch exists.** Every row of the schedule lets a taxpayer and the Commissioner enter a **legal stability agreement for a lower rate**, if the taxpayer shows the lower rate is required to match the effective rate on the same income in Honduras, another ZEDE, or *"any other tax jurisdiction that is demonstrably competing with the PZ."* **The rate is negotiable if you can evidence a competing offer.** `[OFFICIAL]`

### 4.8 The $5,000/year lump-sum option

Qualifying individuals can pay a flat **$5,000/year** instead of the 5% personal income tax. `[OFFICIAL]`

**Requirements:**

- Pledge you are **not a tax resident of any other country** (and will not become one).
- Keep a registered Próspera entity.
- Visit Próspera **at least 7 consecutive days** but **no more than 90 days** within 12 months. The 7-day floor appears in Próspera's own material; the **90-day ceiling is so far only stated by Nomad Layer** and has not been seen in a statute. `[OFFICIAL]` / `[CLAIM]`
- The regime is **not** in the 2019 Tax Statute — it comes from a separate *"Regulation Establishing the Lump Sum Tax Regime"* issued by the Tax Commissioner after Council approval. **That regulation has never been obtained**, so treat the details as unconfirmed.

**Limits:**

- **US citizens / US tax residents cannot use it.** Not necessarily a nationality ban in the rules — but a US citizen is always a US tax resident and so cannot make the required pledge. Same result, clearer reason. (The usual US alternative is Puerto Rico Act 60.)
- You still owe VAT, customs duties and property charges — income tax only.
- If your in-zone income tax would exceed $5,000, the lump sum acts as a credit/prepayment.
- Payment accepted in USD, Honduran lempira, **gold**, or approved crypto. `[CLAIM]`

**How it mechanically works — the part that decides whether it's usable:**

> **Próspera issues you a tax certificate. Your *previous* country of residence then has to recognise that certificate in order to sign you off as no longer tax resident there.**

**The binding constraint is your old country's willingness to accept it, not Próspera's willingness to issue it.** And **Honduras has no double-tax treaty with any country**, so there is no treaty tie-breaker article to fall back on. The exit rests entirely on the former country's *domestic* de-registration rules.

Practical consequences: some countries de-register on a straightforward filing (Panama, Paraguay, most territorial systems; Poland's centre-of-life test is fact-based). Others look hard for continuing ties (Germany, Spain, the Nordics). The US effectively never lets go, via citizenship-based taxation. **Sequence matters** — sever the old residency first or in parallel; the certificate is evidence, not a discharge. **Budget for a gap** where you can be claimed by both or neither.

**Who sells it:** **Nomad Layer** (nomadlayer.com), which describes itself as both the *"official Próspera channel"* and the *"originator and policy architect"* of the regime — i.e. the company that wrote the program also controls access to it. Convenient, and a conflict of interest worth disclosing. Its package: **$5,000/year, zero setup fees**, including tax-residency certificate, Próspera residency + company formation, personal liability insurance, banking and proof-of-address support, remote onboarding. Advertised timeline: apply online (~1 min) → pay → KYC and residency application (~30 min) → residency approval 1–2 days → tax-regime approval 2–4 weeks → digital certificate. A **"Layer Pro"** tier promising Honduran residency and a pathway to Honduran citizenship is announced but **not live**. `[CLAIM]`

**Reality check:** the "not tax resident anywhere" condition is a high bar. Most people are tax resident somewhere, and the difficulty sits in the exit, not the entry.

### 4.9 The home-country trap — the most important section for most readers

Próspera's ~1% is only the *Próspera-level* tax. What actually happens depends on the reader's own country.

**Two facts decide everything:**

1. **Honduras has zero double-tax treaties. Not "few" — none.** PwC's country summary: *"Honduras has not signed any tax treaties with foreign jurisdictions,"* and *"There are no provisions for foreign tax credits in Honduras."* The only real treaty Honduras ever had was a 1957 US income-tax treaty, **terminated by Honduras on 31 December 1966**. `[INDEPENDENT — PwC]`
2. **CFC rules belong to the owner's home country, not to the company.** A Próspera company does not "have" or "lack" CFC. Your country of tax residence does.

**What Honduras does have** (information exchange, not double-tax relief):

| Instrument | Counterparties | Effect |
| --- | --- | --- |
| **FATCA** Model 1 IGA (signed 2014) | United States | US persons' Honduran account data flows to the IRS |
| **TIEA** | United States | Exchange of tax information on request |
| **Regional TIEA** | Costa Rica, El Salvador, Guatemala, Nicaragua | Central-American tax-info exchange |
| **CRS** | — | **Honduras is NOT a CRS participating jurisdiction** (confirmed Jul 2026). Non-US account-holder data is not automatically reported to home tax authorities. This is not secrecy — targeted TIEA/MLAT requests may still produce data — but it is a real distinction |

**Country-by-country reality:**

```json
{
  "cfc_landscape": {
    "no_cfc_rules_mostly_territorial": ["Panama", "Paraguay", "Costa Rica", "Georgia", "Singapore", "Switzerland (no statutory CFC, but anti-abuse look-through)", "Liechtenstein", "Belize", "Guatemala", "Nicaragua", "Bolivia", "Macao"],
    "light_cfc_or_remittance": ["UAE (CFC concepts exist but negligible in practice; ~140 treaties)", "Thailand (taxes foreign income on remittance)", "Malaysia (territorial)", "Uruguay (10-11 yr 0% holiday for new residents)", "Malta (ATAD on paper, non-dom remittance in practice)", "Hong Kong (FSIE regime since 2024 now taxes offshore passive income without local substance)"],
    "strict_cfc": ["United States (Subpart F + NCTI/GILTI; follows citizens worldwide; tightened by 2025 OBBBA)", "United Kingdom", "Japan", "Brazil (Law 14.754 taxes 15%/yr on offshore-entity profits whether distributed or not)", "Germany", "France", "Canada", "Australia", "China"],
    "eu_reality": "EVERY EU member state has CFC rules - mandatory since ATAD took effect in 2019. There is no CFC-free EU country.",
    "poland_specific": "CFC bites where a Polish resident holds (directly or indirectly, 30+ days) at least 25% of shares/votes/profit rights, the entity earns 50%+ passive income, and it is taxed 25%+ below the Polish rate (19% → roughly below ~14.25%). Próspera at ~1% is far under that floor. The EU/EEA 'genuine business activity' carve-out does NOT help: Honduras is neither EU nor EEA.",
    "tier": "INDEPENDENT"
  }
}
```

**Putting it together:** for someone who stays tax-resident in a CFC country, a passive Próspera company is close to a worst case — CFC pulls the ~1% profits into the home rate, and there is no treaty to soften it. **Incorporating in Próspera, by itself, changes nothing.**

**Próspera tax planning only works through one of three doors:**

1. **Move your personal tax residency** to a no-CFC / territorial country (Panama, Paraguay, UAE, Georgia, Costa Rica are the usual picks).
2. **Build genuine substance and active income** in Próspera — real office, staff, decisions on the ground — so the company is active, not a passive shell.
3. **Be a true perpetual traveller** with no tax residence anywhere (which is what the $5,000 lump-sum requires).

**What does not work:** a home-based owner running a paper Próspera LLC from the living room and expecting ~1% to be the end of the story. CFC + place-of-effective-management + no treaty all push the tax back home.

### 4.10 Rate caps and guarantees

- The **Charter caps the rates**: income tax max 10%, VAT max 5%, land value tax max 2.5%. Rates cannot rise above these without amending the Charter. `[OFFICIAL]`
- From the later of **1 January 2030 or 50,000 residents**, total tax take is capped at **7.5% of the zone's GDP**, with any excess refunded to taxpayers. A debt limit starts at the same point. `[OFFICIAL]`
- **Legal stability agreements** let you lock in today's taxes and rules for life. `[CLAIM]` — but the ultimate guarantor is Honduras, whose courts have challenged the whole framework.
- **Most Favored Nation Treatment (MFNT):** financial institutions may apply to the Council to **match the tax benefits of any other Honduran special regime or any competing jurisdiction**. Basis: Charter §8.02(8) and Tax Statute §78(1)(d). `[OFFICIAL]` A negotiating lever most advisers do not know exists.

### 4.11 Not a secrecy jurisdiction

Próspera states it is **not** a secrecy haven: rules, council minutes and filings are public, and Honduras participates in FATCA and US tax-information treaties. Frame Próspera as a place to *legally lower in-zone tax*, never as a place to *hide* income. `[OFFICIAL]`

### 4.12 Próspera Tax Credit (PTC) tokens — prepaying tax at a discount

The RFSA runs a blockchain tax-credit scheme. A **PTC** is a transferable token used to pay Próspera taxes and fees. `[CLAIM/OFFICIAL — RFSA]`

- Buy by prepaying at an advertised **1.5×–4.25× multiplier**: $1 spent yields $1.50–$4.25 of tax-credit value — a claimed **33–76% effective discount** on future tax.
- **1 PTC = US$1.00** of credit, minted against "Analog MTCs" bought from the Próspera Trust.
- Chains: **Bitcoin (Rootstock), Ethereum (ERC-20), Solana**. Pre-minted PTCs trade on **Uniswap**.
- **Minting fee:** 0.75% under $2.5m, rising to 2.12% above $10m.
- Classified as a **utility token and Qualifying Cryptocurrency** (legal tender inside the zone) — expressly **"neither Analog MTCs nor security tokens"** (RFSA AA-19 §9(f)–(g)).
- KYC/AML: namescan.io at minting, **Chainalysis** at redemption; "Severe Risk" wallets refused, with de novo review by the arbitration provider.
- Process: become an (e)Resident → buy credits (crypto accepted) → email certificate + wallet address to mint.

**The honest analysis — four constraints:**

1. **A PTC is only worth something if you owe Próspera tax.** The 4.25× multiplier requires a large purchase, which only pays off against a large future in-zone liability. At ~1% effective business tax, sheltering $100k of tax implies **$10m of in-zone gross revenue**. For most people the high multipliers are unusable, and unused credit is dead money.
2. **The discount partly prices the risk.** A PTC is a claim on the tax system of a jurisdiction whose framework is contested. **In a wind-down scenario, PTCs plausibly go to zero.**
3. **Liquidity is thin.** Secondary trading is on Uniswap; the natural buyer is another Próspera taxpayer, a small set.
4. **It cuts the wrong tax.** Próspera tax is already ~1%/~5%. The binding constraint for most people is home-country tax, which a PTC does nothing about.

⚠️ **Sunset flag:** RFSA AA-19 (13 Mar 2023) was **interim**, with each (e)Resident waiving any expectation of legal stability **beyond 31 December 2025**. That date has passed. Whether it was renewed or left to drift is **unknown**. Best available reading (2026-08-03): AA-19 is still listed **live and unqualified** on Próspera's official rules index, which uses explicit "superseding" language elsewhere when it applies — so **no public evidence of rescission, and none of renewal either. Probably operative, unconfirmed.** Do not describe the PTC program as definitively current without checking. *(And do not cite "AA No. 25" as its replacement — see §7.10; it has never been published.)*

⚠️ PTCs also appear as **forced purchases** in land-incorporation agreements (§7.4).

---

## 5. STARTING A COMPANY

### 5.1 The pitch and the steps

Register a company online in about **24 hours**, from a few hundred dollars, then run it from the eProspera portal. `[CLAIM]`

1. Register as a resident — **(e)Residency is enough to start**.
2. Complete the entity application and e-sign the documents.
3. Start operating — hire, raise money, invoice.

A **background check / KYC** applies to people and entities joining the zone. `[OFFICIAL]`

### 5.2 The full entity menu

Nine domestic forms, plus registration of a foreign entity. `[OFFICIAL — Próspera Help Center]`

```json
{
  "entity_types": [
    {"type": "Limited Liability Company (LLC)", "note": "The default. Suffix 'LLC' for English-speaking markets or 'S. de R.L.' for Spanish-speaking ones - same entity, chosen for how it reads to counterparties"},
    {"type": "For-profit corporation", "note": "Suffix 'Inc.' or 'Corp.'"},
    {"type": "Non-profit corporation"},
    {"type": "Statutory trust", "note": "Business-oriented; formed by filing a certificate of trust"},
    {"type": "Limited Liability Partnership (LLP)"},
    {"type": "Limited partnership"},
    {"type": "Limited cooperative association", "note": "Unusual to find offered anywhere; relevant for co-op / community-owned structures"},
    {"type": "Unincorporated nonprofit association"},
    {"type": "General partnership"},
    {"type": "Foreign entity registration", "cost": "$50 one-off", "note": "Register an existing company (Delaware, Wyoming, Polish sp. z o.o., etc.) to do business in Próspera WITHOUT redomiciling it. Underrated route"}
  ],
  "also_supported": ["conversions between entity types", "domestications (changing jurisdiction) - relevant to exit planning"],
  "tier": "OFFICIAL"
}
```

### 5.3 ⚠️ The real cost stack — correcting a widespread error

**"$280 setup" and "$279/year" are the same number, not two.** $279–280 is the *minimum first-year total* ($150 registration + $130 entity residency), not a setup fee plus a separate annual fee. Próspera's own stated range is **"as low as $279 and as high as $790+."**

```json
{
  "cost_components": [
    {"item": "New entity registration", "cost_usd": 150, "frequency": "one-off"},
    {"item": "Foreign entity registration (alternative)", "cost_usd": 50, "frequency": "one-off"},
    {"item": "Entity residency - (e)Residency OR full Residency", "cost_usd": 130, "frequency": "annual", "note": "same price either way"},
    {"item": "Registered agent / office", "cost_usd": "99-250", "frequency": "annual", "required": true},
    {"item": "Liability insurance", "cost_usd": 260, "frequency": "annual", "required": "mandatory for full-Resident entities, optional for (e)Resident"},
    {"item": "Annual Report", "cost_usd": 100, "frequency": "starting one year after creation"},
    {"item": "Regulated-industry insurance", "cost_usd": "risk-scored", "frequency": "annual", "required": "only if in a regulated industry"}
  ],
  "realistic_totals": {
    "year_1_minimum_eresident_entity": "$280-380",
    "ongoing_years_minimum": "$330-480",
    "full_resident_entity_ongoing": "$590-740 (adds the mandatory $260 insurance)",
    "via_provider_prospin": "~$650-950 to start, ~$649/year plus a $100 annual filing fee"
  },
  "prospera_own_range": "$279 to $790+",
  "tier": "OFFICIAL"
}
```

**Trust-specific fees:** certificate of trust **$150**; annual report **$100**; amendments **$50**; registered-agent change **$25**. Payable in USD, lempira or qualifying crypto. `[OFFICIAL]`

**Dissolution: $25** via ProspIn — a genuinely cheap, fast exit, which matters given the legal risk. `[CLAIM]`

### 5.4 (e)Resident vs Resident — the distinction that actually matters

Same $130 price, very different substance. Próspera says plainly: `[OFFICIAL]`

> *"The strongest case for regulatory and tax jurisdiction in Próspera is made if you set up a **Resident** legal entity, not an (e)Resident legal entity, because only the former can operate year round inside the Próspera ZEDE."*

- **(e)Residency** caps physical access at **30 days per 12-month term**.
- **Full Residency** gives year-round access **plus the legal stability guarantee**, and costs an extra **$260/yr** in mandatory liability insurance.

**For anyone relying on Próspera for a tax position, the $260 is not optional in substance — it buys the jurisdictional argument.**

### 5.5 Privacy — what is and is not on the public register

`[OFFICIAL]`

- **Not filed, kept private:** operating agreements, bylaws, shareholder agreements. Próspera states these *"are not registered in Próspera's registry, and are maintained privately."*
- **Filed and public:** entity name, principal office address, registered agent name and address, incorporator names (for corporations), and the annual report.

So **ownership terms are private but the formation shell is not** — a structural privacy feature.

**Separate and easy to confuse:** ProspIn markets an **"anonymous LLC structure"** where ownership is not in public records. The disclosed catch: it works **because you incorporate through ProspIn and skip personal e-residency**. Migrate to Próspera's own platform later and you must pay for personal e-residency **and lose the privacy layer**. So provider-dependent anonymity ≠ an inherent Próspera feature. And anonymity from *the public* is not anonymity from *tax authorities*. `[CLAIM]`

### 5.6 The headline feature: choose your own regulation

This is what makes Próspera unusual. A business picks one of **three** options: `[OFFICIAL]`

1. **Adopt the rules of any of ~30 "Best Practice Peer Countries"** — Honduras, US, UK, Canada, Australia, Japan, Korea, Mexico, Chile, Israel, Hong Kong, Singapore, Dubai, **Poland**, and most of Western Europe. (Loose phrasings of "20+ OECD" or "~35 peer countries" all point at this same ~30-jurisdiction list; several are not OECD members.)
2. **The default Roatán Common Law Code (RCLC)** — minimal prescriptive rules, but you carry **treble (3×) damages** liability for harm, plus personal liability of officers/owners.
3. **Propose a new "Optimal Regulation"** — petition the Council; if adopted it becomes an option for everyone in that industry. **You may operate under your proposed regulation while the petition is pending**, which is unusually founder-friendly. The petition form is live at pzgps.hn.

Instead of a government licensing monopoly, regulated activity is backed by **mandatory liability insurance** sized to the activity.

### 5.7 Permits

Permitting is **voluntary**, with **27 permit types**, a simple application (company name, registration, permit type, chosen regulatory framework), and issuance usually **within 7 business days**. Unregulated industries need none — the Guidepost Montessori school opened with no licence at all. `[OFFICIAL]` / `[CLAIM]`

The standard permit for a non-regulated business is the **Próspera Non-Regulated Industry Business Operation Permit** (Resolution §5-1-187-0-0-0-1).

### 5.8 Labour rules if you hire locally

`[OFFICIAL]`

- **90% of employees must be Honduran** — excluding the owner's family, substantial owners, interns, true entry-level hires, and small firms (under 10 full-time staff or under $1M revenue).
- **Minimum wage is set 10–25% above** Honduras's national minimum. Standard Honduran on-costs (up to **$0.42 per $1** of wages) are removed, so workers net more and employers still save.
- **Próspera Labor Benefit Fund:** no social-security or healthcare tax; instead each employer pays into a **portable, employee-owned trust** (retirement, healthcare, education, legal or emergency use). ⚠️ **The contribution rate differs across Próspera's own documents — at least 8%, at least 10%, or 10–25% depending on the source.** Best available guidance: **quote "roughly 8–10% of payroll" and flag it as unconfirmed. Do not quote 25%.**
- **Overtime:** 125% pay beyond 48 hours or 6 days a week.
- **Marketable Tax Credits (MTCs):** employers can obtain credits equal to what they paid in labour premium, benefit and overtime, to offset future tax.
- **USD is the default pay currency**; the right to unionise is guaranteed (closed-shop contracts presumptively unenforceable).

### 5.9 Which entity for which situation

| Situation | Suggested form | Why |
| --- | --- | --- |
| Digital founder who wants the tax position to hold | **LLC + full Residency** | Only a Resident entity operates year-round and carries the legal stability guarantee |
| Already has a Wyoming/Delaware/EU company | **Foreign registration ($50)** | Presence without restructuring; keeps existing banking and history |
| Raising outside investment | **For-profit corporation** | Share classes investors recognise |
| Asset segregation (property, portfolios) | **Series statutory trust** | Liability segregation per series |
| Estate / family planning | **Common-law trust** | No registration required |
| Community or co-op project | **Limited cooperative association** | Rarely offered elsewhere |

⚠️ **None of this answers the CFC question** — entity form barely moves US or EU CFC analysis. Control and passivity do.

### 5.10 Trusts and asset protection — better than "untested," worse than proven

`[OFFICIAL]`

- **Common-law trusts** governed by the **Restatement of Trusts Third (2003–12)**, adopted via RCLC **§3405**. No registration required.
- **Statutory trusts** governed by the **Uniform Statutory Trust Entity Act**, via RCLC **§3710**.
- ⭐ **Gap-filler: Delaware common law as of 30 November 2018**, per RCLC **§5004**.
- **Series trusts** available: separate series of assets with liability segregation inside one entity, comparable to Delaware series LLCs.

**The fair framing:** not "no case law" but **"no *local* case law, but an explicit statutory bridge to Delaware's."** That is materially stronger than a jurisdiction inventing trust law from scratch. What remains genuinely untested is **enforcement** — whether a Próspera tribunal's decision is recognised abroad.

---

## 6. RESIDENCY AND IMMIGRATION

> **The distinction people constantly get wrong:** Próspera residency (zone membership) ≠ Honduran immigration residency ≠ tax residency. Three different things.

### 6.1 The three things people call "residency"

1. **Próspera (e)Residency** — a digital membership that lets you set up and run an entity online. No need to live there. The entry point.
2. **Próspera physical residency** — you actually spend time in the zone. Required for some benefits and for building tax substance.
3. **Tax residency** — where the world considers you liable to tax. **Zone membership does not by itself end your home-country tax residency.**

### 6.2 How to join the zone

- **Natural persons:** anyone may apply, subject to Honduran sovereignty, a criminal background check, and signing the **Agreement of Coexistence**. Apply at eprospera.com. `[OFFICIAL]`
- **Legal persons:** entities can also join as residents, subject to background checks. Entity residency costs **$130/year** either tier.
- **Landowners** can apply to bring qualifying land into the zone — voluntary only.
- **Personal e-Governance Platform fee: $130/year** — reduced from $1,300 in September 2024. (Previously $260 for Hondurans.) `[OFFICIAL — confirmed 2026-06-24]`

### 6.3 ⚠️ To actually live there, you need Honduran immigration residency

This is the part the marketing skips. Próspera's own Immigration Guide says that **until Próspera has its own immigration policy, anyone who wants to physically move there must obtain residency in *Honduras***. Zone membership alone does not grant the right to live and work in the country. `[CLAIM — Próspera Immigration Guide]`

- A **Honduran immigration attorney is required by law** (~$300–500 in fees).
- The process runs **3–6 months** via the Secretary of State in the Interior.

**Honduran residency categories** (income-based; exempt from Honduran income tax on that income):

```json
{
  "honduran_residency_categories": [
    {"category": "Rentier", "requirement": "passive income >= $2,500/month", "restriction": "no paid work allowed"},
    {"category": "Pensioner", "requirement": "pension >= $1,500/month", "restriction": "no paid work allowed"},
    {"category": "Investor", "requirement": "invest >= $50,000 plus a >= $5,000 certificate of deposit"}
  ],
  "special_permits": {
    "types": ["employment-contract", "businessman"],
    "duration": "temporary, max 5 years",
    "benefit": "opens a path to residency or naturalization",
    "requirement": "a tie to a company operating in Honduras; processed by the National Institute of Migration"
  },
  "tier": "CLAIM - Próspera Immigration Guide"
}
```

### 6.4 ⚠️ Residency cards are running months late (2026)

**Report (Jason Sugar, 12 Jul 2026):** a renewal **processed 3 months earlier**, card still not issued. At least one other resident waiting on the same. `[RESIDENT]`

**Stated cause** (Ricardo Gonzalez, same thread): *"The government change earlier this year has made many institutions slow and inconsistent, as they're switching employees around and removing people from the previous administration. There are delays in general."* His advice: **go to the office often and ask politely so they prioritise you.** `[RESIDENT]`

**Note the irony worth publishing:** the January 2026 Asfura transition, which improved Próspera's legal outlook, is simultaneously slowing routine administration. **If a plan depends on holding a physical Honduran residency card by a given date (bank onboarding, school enrolment, vehicle paperwork), add a 3–6 month buffer and expect to show up in person.**

### 6.5 Visiting

**You do not need a conference or an invitation to visit.** Per Kara Isabella (Infinita, June 2026): Próspera has its own land and its own security, but it remains part of Roatán — **anyone in Roatán can visit with a visitor pass.** One resident recommends coming on a normal week rather than a conference week, to meet the full-time residents rather than the conference crowd. `[RESIDENT]`

**You also do not need to buy a paid membership to join the community chat.** Confirmed by Kara Isabella (26 Jul 2026): the Infinita **Builders' Hub** (Telegram) is *"open to both current members of Infinita and people who are interested in becoming part of the community."* The node pass is a paid product; it does **not** gate community access. `[RESIDENT]` **This removes a false cost barrier from the newcomer path — worth stating clearly on any "how do I get started" page.**

### 6.6 Good fit / weak fit

**Good fit:** digital entrepreneurs who will spend real time on Roatán; perpetual travellers with no other tax residency; people who want a low-friction online entity plus a foothold in the zone.

**Weak fit:** anyone who keeps living full-time in a high-tax home country and expects Próspera to erase that tax; US citizens seeking a tax cut (worldwide taxation, lump-sum closed to them).

---

## 7. REAL ESTATE AND PROPERTY

> Property is the highest-stakes way to be exposed to Próspera, and the one area where the legal dispute has already produced concrete, documented friction rather than hypothetical risk. **Two of the most important facts below come from Próspera's own Help Center and are more candid than anything on the marketing site.**

### 7.1 ⚠️ Your title may not be recognised by the national registry — Próspera says so itself

Registering land into the Próspera Property Registry does **not** automatically move it in Honduras's national registry. Próspera's Help Center recommends a further "ministerial step" and then says the quiet part out loud:

> *"…we recommend also pursuing the ministerial step of causing the **National Property Institute to transfer title** to the land from the national property registry to the Próspera Property [Registry]. This requires a petition and, due to an unlawful lack of cooperation from the Castro administration with its ministerial duties, **also litigation in all likelihood** to compel the registrar to effectuate the title transfer."*
> — Próspera Help Center, *Property Ownership in Próspera*, 12 June 2024 `[OFFICIAL]`

So a buyer can hold title Próspera regards as perfected while the **national** record still shows the pre-incorporation position — and closing that gap may require **suing the national registrar**. Próspera separately reports that municipalities *"have illegally denied cadastral certificate rights to property owners associated to Próspera ZEDE and hampered the administrative process required to transfer real estate title seats."* `[OFFICIAL]`

⭐ **The single most important open question about Próspera property:** that quote is dated June 2024 and blames the *Castro* administration, which is gone. **Has the Asfura government changed the National Property Institute's posture?** If yes, this risk has shrunk enormously. If no, it is unchanged. **Nobody has publicly answered this.** Any site publishing property content should flag it as unresolved rather than assume either way.

### 7.2 ⚠️ The national-law fallback is much narrower than what people buy

Honduras's constitution restricts foreign land ownership within **40 km of coastline or borders** — which covers all of Roatán. The Bay Islands rely on a carve-out, **Decree 90-90**, under which a foreign *individual* may own urban residential property **capped at 3,000 m² and, as of early 2026, one property per person** (inheritance the only exception). `[INDEPENDENT — needs primary verification]`

**The implication people miss:** someone who buys several units, or a large parcel, relying on the Próspera regime may have **no lawful individual-ownership fallback** under ordinary Honduran law if the zone unwinds. Holding through a Honduran corporation is the usual workaround — but that is a structuring question to settle *before* buying.

### 7.3 Who is even allowed to own

> *"Only natural persons and legal entities that are **physical (full-time) Residents or eResidents (not limited eResidents)** are entitled to own or lease real property in Próspera."* `[OFFICIAL — Help Center]`

- **You must hold residency to own or even lease.** Property is not open to unattached foreign buyers the way a company is.
- **Registrations may only be filed by attorneys, or by individuals carrying a $1,000,000 liability policy.** You cannot self-file.
- **The Registrar may not accept a registration from anyone not current on tax, fee or regulatory compliance.** Read that as a lien on liquidity: a compliance lapse — including a disputed one — can freeze your ability to sell or mortgage.

**A structural consequence worth publishing:** the residency prerequisite **shrinks the buyer pool**. Only (e)Residents can buy from you. That matters for resale depth.

### 7.4 How the registry works

- **Próspera Property Registry** — a **Torrens registry**, modelled on New Zealand/Australia, run on US common-law property principles. **Public at prospera-sure.hn (username/password: `public`)** — anyone can inspect registered properties directly. `[OFFICIAL]`
- Torrens means **registered title is presumptively reliable by law**, so Próspera argues title insurance is unnecessary — *"unless you are especially risk averse **or seeking to mitigate political risk**."* That trailing clause is Próspera hedging in its own document. For a buyer today, "seeking to mitigate political risk" is simply an accurate description.
- Most parcels carry a **common interest community declaration (CC&Rs)** that binds you to the Rules of Próspera ZEDE, grants *parens patriae* enforcement rights to the Promoter/Organizer, and binds successor community bodies to the Resident Bill of Rights **unless knowingly waived**. Read the waiver clause before signing.

**Getting land into the zone** follows: notarial declaration of intent → registration in the **CAMP** ZEDE special registry (the national agency) → registration in the Próspera Property Registry → then the contested national-title step above.

⚠️ **The incorporation agreement bundles in more than the CC&Rs.** It includes *"provisions aimed at defraying the cost of public services, which may include **impact fees**, as well as **required purchases of (e)Residencies or Marketable Tax Credits**."* `[OFFICIAL]` **The headline price of land is not the entry cost.** Terms are negotiable but must be approved by Resolution, with equal-protection limits.

### 7.5 ⚠️ Correction: the "severed rights" system is not live

Many write-ups (including earlier versions of this research base) describe tradable **air / development / pollution-exclusion rights** as Próspera's operative land-use regime. **That overstates it.** Próspera's Help Center describes the 3D severed-rights system as *"under development"* and **opt-in** — *"Owners of land to be incorporated have the **option** of joining the system."* `[OFFICIAL]`

The concept is real and documented in the Real Estate Development Guide (rights to excludable, buildable or built cubic-metre volumes, replacing the common-law "heaven to hell" bundle). **But do not describe it as the operating system of land in Próspera today.**

### 7.6 Development and permitting — fast, but disputed

Próspera's model is "market urbanist": **no traditional zoning**, CC&Rs plus rights ownership as the only veto. `[OFFICIAL]`

- **Permitting:** a **1–2 page application** and a fee **under $200** to start construction within your CC&Rs.
- **Construction liability insurance:** premiums **capped at $780/year**.
- **Real example:** developer **Apolo Group** reports land-to-groundbreaking cut from ~12 months to **2**, project cost down ~**20%**, and a **14-storey** tower where mainland codes would force two 6-storey buildings — while paying staff 10–25% more. Próspera-funded case study, so it is the upside view, but concrete. `[CLAIM]`

**🔴 The catch that makes all of this conditional.** When the Alcaldía de Roatán closed Próspera's gates on 14 October 2024, Mayor McNab's complaint included that Próspera and its businesses *"don't even pay their operating, construction and environmental permits."* **The municipality does not accept that Próspera's permitting regime displaces its own.** A sub-$200 Próspera construction permit is fast precisely because it is issued by an authority the surrounding municipality disputes. McNab was re-elected in December 2025.

### 7.7 Land value tax

- **1% of land value**, buildings and improvements excluded — **currently suspended**. `[OFFICIAL]`
- Valuation may use a recent sale, an appraisal, or a **self-assessed "standing option to sell" price you must honour if someone takes you up on it** — an elegant anti-undervaluation device. Understand it before self-assessing low.
- Because it taxes land and not improvements, it is structurally friendly to developers and hostile to land-banking. **Suspension is discretionary — model hold costs as if it returns.**

### 7.8 What is actually built

- **Roatán (St. John's Bay / Pristine Bay):** the main built-up area — **DUNA Tower** (tallest building on the island — **82 apartments, 1,230 m² offices, 380 m² retail** `[CONFIRMED]`), residences, a **Pete Dye golf course**, beach club, hotels (**Las Verandas**), coworking.
- **Puerto Satuyé, La Ceiba:** mainland, industrial/manufacturing orientation; the proposed STDC data-centre site (see §3.9).
- ~**34,000 m² built** and ~**1,000 acres (~400 ha) incorporated**, self-reported. Criterio reports expansion toward **~4% of Roatán's surface**. `[CLAIM]` / `[INDEPENDENT]`

### 7.9 What nobody knows — do not fill these gaps with guesses

- **Price points** per m², residences vs raw land. **No reliable non-marketing dataset exists.**
- **Financing.** Assume cash or developer financing; no evidence of ordinary mortgage availability.
- **Rental yields** and how Próspera property competes with the wider Roatán tourist-rental market.
- **Resale depth.** Who is the marginal buyer if you need out quickly?
- **Closing costs and timeline inside the zone.** For comparison, the *ordinary Honduran* process runs ~30–60 days to closing plus **3–4 months** for full registration at the Instituto de la Propiedad. `[INDEPENDENT]`

### 7.10 Real estate tokenization — what was actually done

Four separate things get conflated. **Only one raised money, and it was equity in the developer, not title to a unit. Nothing has ever put a Próspera land title on a blockchain.**

```json
{
  "tokenization_efforts": [
    {
      "n": 1, "name": "Securitize STO - Honduras Próspera Inc.", "date": "2021-2022",
      "what_it_really_was": "Tokenized shares/convertible notes in the DELAWARE developer, marketed as 'fractional ownership of real estate'",
      "detail": "Additional $100M raise announced Feb 2022. Book-entry security with an option to receive security tokens on Ethereum. Accredited investors, KYC via Securitize iD, structured for US securities compliance. Platform: prospera.invest.securitize.io",
      "status": "Raised; offering page long dormant. No public evidence of a functioning secondary market. Anyone who bought is illiquid.",
      "tier": "OFFICIAL - Business Wire 14 Feb 2022"
    },
    {
      "n": 2, "name": "PTC tokens (RFSA AA-19)", "date": "2023-03",
      "what_it_really_was": "Tokenized TAX CREDITS - expressly not securities and not real estate",
      "status": "Live-ish; legal stability expired 31 Dec 2025, current status unconfirmed",
      "tier": "OFFICIAL"
    },
    {
      "n": 3, "name": "Bitcoin Bond Authority", "date": "2022-07",
      "what_it_really_was": "An announcement of regulatory CAPACITY to issue bonds from the zone, mirroring El Salvador's Volcano Bond",
      "status": "No known real-estate bond ever issued. File under regulatory marketing, not track record.",
      "tier": "CLAIM"
    },
    {
      "n": 4, "name": "Fracta.city", "date": "~2024-present",
      "what_it_really_was": "The only project marketing tokens in SPECIFIC Próspera units (Duna 802)",
      "claims": "Tokens in Duna Residences from $100, '6-12% ROI'. Listing: 802 Duna Residences studio, property value $190,000, 1,000 tokens at $190, 9.8% expected yield, chain Base, 'Prospera Permit Required'. Homepage counters: $2.5M+ TVL, 8.2% avg ROI, 127+ active investors, 15 properties listed.",
      "reality": "The site's own property page shows Tokens Minted: 0 and Available Listings: 0. Footer says (c) 2024. No named team, no legal entity, no issuer disclosures, no contract address; 'Legal' links are dead anchors.",
      "house_position": "Do NOT describe it as an operating tokenized real estate platform. Describe it as 'a project marketing tokenized Duna units; no tokens minted as of 3 Aug 2026.'",
      "tier": "CLAIM - unverified"
    }
  ],
  "noise_to_ignore": [
    "prosperahavens.space - 'AI-Powered Real Estate in Próspera ZEDE', no provenance",
    "medium.com/@prosperabuild - generic SEO explainer, 5 followers, no connection to Honduras Próspera Inc. Probably the source of half the 'Próspera tokenizes real estate' impression online",
    "Unrelated companies also called Prospera: Prospera Energy, Prospera Real Estate Collective, Prospera Real Estate Group"
  ]
}
```

**⚠️ Correction — RFSA Administrative Action No. 25 does not publicly exist.** An earlier revision of this file cited *"RFSA AA No. 25 — RIFC Financial Market Rules, signed 27 Sep 2025."* **Próspera's official rules index publishes Administrative Actions only up to No. 23** (Forced Liquidation of Seshat Bank, Jan 2025), on a page last modified 22 October 2025. **Do not cite AA-25 until someone has actually seen it.** `[OFFICIAL — pzgps.hn rules index]`

**On AA-19 (the PTC rules), whose legal-stability waiver expired 31 Dec 2025:** it is still listed **live and unqualified** on the rules index, which uses explicit "superseding" language elsewhere when it applies. AAs 20–23 are on unrelated subjects. So there is **no public evidence of rescission — and none of renewal either. Treat as probably operative, unconfirmed.**

**Fracta.city, chased to the end of public data:** Vercel-hosted Next.js with a RainbowKit wallet connector. **Every page carries `<meta name="robots" content="noindex">`** — it is deliberately hidden from search engines. Only three routes resolve (`/`, `/marketplace`, `/kyc`); `/about`, `/terms`, `/legal` and `/faq` all 404. No team, no legal entity, no contract address, WHOIS unavailable. **Consistent with an unfinished prototype.**

### 7.11 ⭐⭐ The tokenization machinery already exists — and nobody has used it

This is the finding that inverts the usual story. Próspera has already adopted, inside the **Roatán Common Law Code**, the complete private-law stack for tokenized property. `[OFFICIAL — pzgps.hn rules index, page modified 2025-10-22]`

```json
{
  "legal_primitives_already_adopted": [
    {"instrument": "UCC Article 12 - Controllable Electronic Records", "section": "3510", "why_it_matters": "The property-law primitive for digital assets. 'Control' substitutes for possession; take-free protection for good-faith purchasers. MOST JURISDICTIONS HAVE NO EQUIVALENT."},
    {"instrument": "UCC Article 8 - Investment Securities", "section": "3508", "why_it_matters": "Makes a token a recognised security entitlement, not a database row"},
    {"instrument": "UCC Article 9 - Secured Transactions", "section": "3509", "why_it_matters": "Lending against tokenized interests"},
    {"instrument": "Uniform Real Property Electronic Recording Act", "section": "3802", "why_it_matters": "Electronic documents recordable against land - the smart-contract-to-registry bridge"},
    {"instrument": "Uniform Statutory Trust Entity Act", "section": "3710", "why_it_matters": "Series trusts - one trust, ring-fenced series per building. The natural vehicle"},
    {"instrument": "Uniform Electronic Transactions Act", "section": "3801", "why_it_matters": "Electronic signature and record validity"}
  ],
  "relevant_licences_and_real_fees": [
    {"licence": "Private Fund (Exempt Offering)", "fee_usd": 100, "note": "NOTICE FILING ONLY - no registration, no pre-approval. File within 15 days of first sale. Residents / accredited / sophisticated investors only. Próspera's own page names DIGITAL ASSET FUNDS as an intended user"},
    {"licence": "Alternative Transaction System", "fee_usd": 2500, "bundled_fee_usd": 1500, "note": "A secondary trading venue - 'physical or virtual place that allows its participants to quote, offer, or trade financial instruments or publicly traded securities'"},
    {"licence": "Crowdfunding Platform", "fee_usd": 2500, "bundled_fee_usd": 1500, "note": "Primary distribution"}
  ],
  "framework": "Both fintech licences run under Fintech Regulation A (§3-2-190) plus RFSA AA No. 15. A REGULATORY SANDBOX exists under AA No. 9.",
  "land_and_registry_law_located": ["Land Title Law of Próspera (§2-1-22-1)", "Decentralized Land Regulation Statute (§2-2-103)", "Land Title Law 2019 Clarification Resolution (§5-1-112)", "Land Registry Fees Resolution", "2019 Land Value Tax Resolution (§5-1-75)", "Mortgage Foreclosure Sale Statute (§2-3-20)", "Landlord-Tenant Statute (§2-3-29)", "Resolution Rejecting Expropriation (§5-1-113)", "Prospera Foundation SA as a land-banking vehicle (§5-1-131)"],
  "live_property_registry": "https://prospera-sure.hn/",
  "tier": "OFFICIAL"
}
```

**The story worth telling:** a $100 notice filing and a $2,500 trading-venue licence, sitting on top of UCC Article 12 — a legal primitive most developed jurisdictions have not adopted — and **the only things anyone has actually shipped are a tax-credit token and an unfinished prototype.** The gap between the statute book and the market is the interesting fact here, not the marketing.

**Why the gap persists — four real blockers:**

1. **The title recognition gap** (§7.1). You cannot reliably tokenize a claim whose underlying title is contested at the national level.
2. **The ownership gate** (§7.3). Only Residents/eResidents may own. A token sold to an anonymous wallet cannot itself convey ownership — only a claim against a holding entity. Fracta's *"Prospera Permit Required"* line acknowledges exactly this.
3. **Decree 90-90** caps foreign ownership at ~3,000 m², one property per foreigner — a hard ceiling on any pooled structure holding many units. `[INDEPENDENT — needs primary verification]`
4. **It is a security.** A token paying rental yield is a **security token**, not a utility token, so it needs RFSA authorisation, KYC/AML/ATF, and likely an RIFC licence. RFSA AA-19 §9(g) draws that line explicitly; §8 ("Open Platform") is the petition doorway a real-estate token would have to use.

---

## 8. BANKING, PAYMENTS AND MONEY

### 8.1 What banking actually looks like

Próspera does not run its own retail bank. `[CLAIM]` / `[OFFICIAL]`

```json
{
  "banking_options": {
    "fintech_digital_accounts": [
      {"name": "Slash", "offers": "virtual cards, ACH, stablecoin transfers, cashback"},
      {"name": "OneSafe", "offers": "international wires (ACH, SWIFT) plus crypto (USDC)"}
    ],
    "payment_processing": ["Paddle", "PayPal"],
    "real_bank_accounts": [
      {"name": "Towerbank", "status": "CONFIRMED - Próspera's own Help Center carries a dedicated walkthrough, 'Open a Towerbank Account', linked from its entity-formation page. An institutionalised route, not a one-off. Documentation burden is heavier than a fintech - plan for thorough KYC."},
      {"name": "Arrival Bank", "status": "Available for Próspera entities", "tier": "TOMEK - direct report, not publicly documented"},
      {"name": "Network Bank", "status": "In development - 'soon' to open", "tier": "TOMEK - direct report, not publicly documented"},
      {"name": "Banpais", "status": "Ran an on-site account-opening drive inside Próspera (signing sessions at Green Cilantro restaurant, April 2026). The practical bridge to the Honduran banking system for lempira accounts, local payroll, utility direct debits."}
    ],
    "private_banking": "Available for larger/established companies; depends on AUM and revenue profile. TIER: TOMEK - direct report, not publicly documented",
    "setup_tip": "Where a form offers it, pick 'Honduras' as country and 'Prospera' as sub-jurisdiction"
  }
}
```

**Honest assessment:** the banking picture is better than the public sites suggest — Próspera entities can access real chartered bank accounts, not just fintechs. ⚠️ **Note the evidence base:** only **Towerbank** has independent first-party documentation (Próspera's own Help Center walkthrough). Arrival Bank, Network Bank and the private-banking option rest on a `[TOMEK]` direct report and are not publicly documented anywhere. For most digital businesses Slash + OneSafe will suffice; for full correspondent banking or credit lines, test Towerbank or Arrival early.

### 8.2 ✅ The proof point: a Próspera entity was KYB-verified by Bybit in about a week

The single most useful operational data point in the community record. `[RESIDENT — Florian L, 10 Jun 2026]`

What made it work:

- Documents pulled from **eProspera**.
- **The Agreement of Coexistence was accepted as proof of address.** The standard residency/entity agreement doubles as a KYC address document.
- **Recency mattered** — his agreement had been signed **less than one month before**.

**Corroborated by Próspera's own Technical Secretary, Jorge Colindres**, on the same thread:

> *"You may thank the folks who got Bybit to recognize the Próspera ZEDE and even RFSA licenses."*

That is a bigger claim than one successful KYB: it says **Bybit recognises the jurisdiction itself and RFSA licences** — a deliberately built standing relationship. If accurate, an RFSA licence has demonstrated external recognition value. `[RESIDENT]`

**Actionable takeaway:** sign or re-sign the Agreement of Coexistence shortly *before* starting a KYB process, not years earlier. **Caveat:** Bybit is a crypto exchange, not a bank, and exchanges tolerate unusual jurisdictions more readily than correspondent banks do.

### 8.3 ⚠️ The open gap: international credit-card acceptance

A working founder asked the community on **3 July 2026** how to receive **international credit card payments** from a Próspera company selling digital products. **No answer was posted.** `[RESIDENT]`

The standard answer given in Próspera's own materials is Paddle and PayPal. The fact that a founder asked and got silence suggests **card acquiring is genuinely harder than the marketing implies.** Treat *"can I take Visa/Mastercard from a Próspera entity?"* as **unresolved** until someone produces a live merchant account.

*(One lead: **PayWithMoon** issues prepaid Visa cards funded by crypto — but that solves *outbound* spending, not inbound merchant acquiring. Confirm which problem it actually solves before writing it up.)*

### 8.4 Bitcoin rails are real, not decorative

Próspera markets **Bitcoin as an official unit of account** — it says it is the first jurisdiction to allow accounting and tax payments in BTC. `[CLAIM]` The community data shows an actual retail economy behind that claim. `[RESIDENT]`

**Infrastructure:**

- **Two Bitcoin ATMs**, both relocated to **Duna Tower** (mid-2026). BTC↔USD both directions.
- **La Bitcoinera** (labitcoinera.com) — lempira ↔ Bitcoin exchange.
- **AmityAge Bitcoin Center** (amityage.com) — Bitcoin-backed loans, OTC exchange, Bitcoin education, at the **Bitcoin Center, Pristine Bay**. The closest thing to a Bitcoin-native financial services shop in the zone.
- **Blink wallet** launched non-custodial accounts (mid-2026).
- ⚠️ **SimpleFi** — one resident reported incoming **Lightning payments appearing to vanish**; no resolution captured. Test before relying on it.
- Informal **P2P crypto→USD cash** happens over WhatsApp; the community answer is usually "use the BTC ATM."

**Merchants accepting BTC** (running list from 2026 captures): The Scuba Shop · **Tugliani & Tugliani law firm** (Lawson Rock) · Deco Stop Bar & Grill (West End) · Sea Hunt Divers (West End) · Duna Late-Night Kitchen · ProsperaSub cleaning (Lightning) · Tidal Festival ticketing · a Roatán tour operator via OpenNode.

**Bitcoin Roatán reported roughly 3 new BTC merchants per month** in both May and June 2026. **A lawyer taking Bitcoin is the interesting data point** — professional services, not just tourism.

⚠️ **Correction, 2026-08-03: 2Cans does not accept Bitcoin.** An earlier list had it as a BTC merchant. The Duna operator's own guidebook states the in-building **2 Cans** convenience store accepts **only $LIVES or PayPal**, corroborated by a BTC Map check the same day. **A merchant list is one of the fastest-decaying facts on a site like this — date it and re-check it.**

⚠️ **"Accepts Bitcoin" does not automatically mean "no questions asked."** Jorge Taxi is listed as accepting BTC but **"after KYC — source of income and tax residency required"** (a community member disputed this in the comments). City Taxi is cash only.

### 8.5 $LIVES — the Infinita community token

Distinct from Bitcoin; people confuse them. `[RESIDENT]`

- **$LIVES** is Infinita City's community currency, on **Solana**.
- Buy/sell via **infinita.money** — sells for USDT/USDC; a 15% purchase discount ran in 2026.
- Accepted at: Bodega 22, Door of Confidence, Arcadia Cafe, Roatan Vibes, Diamond Dental Center, Yadikiss (Megaplaza), 2Cans, plus community events and food vendors.
- **You can pay SJBEC utility bills in $LIVES**, directly on the SJBEC billing interface.
- **HIVE referral rewards:** up to 5% of a referee's first-month spending via the Infinita Wallet.
- The Infinita App has had wallet/login/transaction outages (reported May 2026).

**Assessment:** a closed-loop community token with a real but small merchant base and a working exit to stablecoins. **A lifestyle/community instrument, not an investment or a treasury asset.**

### 8.6 ⚠️ ZEDE invoices carry no RTN and no CAI — the first documented downstream cost of fiscal separation

**Source: the official Duna Residences guidebook, first-party, stated twice on the same page.** `[OFFICIAL — operator publication, retrieved 2026-08-03]`

Duna Tower states plainly that because it sits inside Próspera ZEDE, which *"operates under its own jurisdictional framework separate from the standard Honduran legal system,"* it **cannot issue invoices carrying**:

- an **RTN** (*registro tributario nacional*), or
- a **CAI** (*código de autorización de impresión*)

because both *"are specific to Honduras' national tax system and not applicable in Próspera ZEDE."*

**Why this matters more than it looks.** This is not a policy paper — it is a landlord explaining to residents why their receipts look wrong to a mainland accountant. **Practical effect: if a counterparty, employer, insurer or tax authority *outside* Próspera requires an RTN-bearing invoice, a ZEDE-issued invoice will not satisfy them.** That is an expense-reimbursement and deductibility problem for the payer, not for Próspera. Anyone budgeting a Próspera presence against a mainland Honduran or foreign parent company should check this **before signing a lease.**

**⚠️ The wrinkle — do not print the simplified version.** The same operator group **does** hold a Honduran RTN and **does** bank on the mainland: its published payment instructions include a Ficohsa account held by **Pristine Services SA de CV**, carrying an RTN. So *"Próspera has nothing to do with the Honduran tax system"* is the wrong summary, and anyone repeating it will be caught out by the operator's own payment page.

**The accurate formulation:** *a ZEDE entity's invoice carries no RTN or CAI; that does not mean the operator has no Honduran tax presence.*

**The published payment rails, and what they reveal:**

| Rail | Entity | Where |
| --- | --- | --- |
| US ACH / domestic wire | **Saint John's Bay Development Company LLC** | Brex business account, beneficiary address Washington, DC |
| Honduran transfer, USD **and** HNL | **Pristine Services SA de CV** | Ficohsa savings, Roatán |
| **Crypto — advertised as the no-fee option** | via a form | **USDC/USDT, Bitcoin, Solana, Ethereum** |

**Crypto is the cheapest published rail.** A landlord actively steers customers to crypto on price, **for rent** — the largest recurring payment a resident makes. That is stronger evidence that "Bitcoin rails are real here" than any merchant list.

⚠️ **Source-reliability caveat, applying to everything drawn from this guidebook:** it is first-party and current-looking but **not carefully maintained** — placeholder phone numbers, dead links, and three mutually contradictory statements of the building's own quiet hours. **Treat structural and legal statements like the RTN/CAI note as reliable** (an operator does not invent a reason it cannot invoice you); **treat operational detail — hours, phone numbers — as needing confirmation.**

### 8.7 Compliance posture

The RFSA enforces AML/CFT. Honduras participates in **FATCA** and bilateral tax-info treaties with the US, but is **NOT a CRS participating jurisdiction** (confirmed July 2026). So:

- **US persons' data flows to the IRS** via FATCA/TIEA.
- **Non-US persons' data does not flow automatically** to their home tax authority through the OECD's 120-country network.
- This is **not secrecy** — targeted TIEA or mutual-legal-assistance requests can still produce data, and CFC rules push taxation home regardless.
- Correct framing: **transparent and AML-compliant, but outside the global automatic exchange network for non-US persons.**

---

## 9. REGULATED INDUSTRIES, HEALTHCARE, FINANCE LICENSING AND GAMING

### 9.1 What counts as a "regulated industry"

Eleven sectors, per the **Industrial Regulation Statute §2-2-28**: `[OFFICIAL]`

**agriculture · health · construction · manufacturing · energy · mining/subsurface · food · waste management · finance · insurance · private security**

**Everything else is effectively unregulated** — software, education, professional services, hospitality, gaming. The Guidepost Montessori school opened with **no licence at all** because education is unregulated in the zone.

Regulated firms use the three-option "choose your regulation" model (§5.6), backed by **mandatory liability insurance** sized to the activity rather than a government licensing monopoly.

### 9.2 Health and biotech — the biggest genuine differentiator

`[OFFICIAL]`

- **Full reciprocity:** practitioners may use **any drug, device, procedure or biologic approved by the regulator of any of the ~30 listed countries** (US, EU, UK, Japan, etc.). Próspera claims this exists nowhere else — it is why biotech clusters here.
- **Liability cap:** non-economic malpractice damages capped at **$250,000 per cause of action** (modelled on Texas).
- **Informed consent:** practitioners must disclose their regulatory-election and licensure status or be **presumptively liable for battery**.
- A proposed Optimal Regulation could, for example, **drop Phase III trial requirements** or let firms set OTC-vs-prescription status. Powerful — and exactly what critics worry about.

**What you can actually buy there** — from **enhancement.bio**, an open third-party catalogue of genetic enhancement released 28 Jul 2026 by Anton Kulaga's team (109 genes, 1,023 experiments, 108 organizations, open-sourced on DoltHub). This is the first **outside** index of Próspera's biotech offering. `[INDEPENDENT]`

| Operator | Therapy | Stage | Jurisdiction | Listed price |
| --- | --- | --- | --- | --- |
| **Minicircle Inc.** | FST (follistatin / myostatin) | Commercial | Próspera ZEDE · USA | **$25,000** |
| **Unlimited Bio** | FST (follistatin) | Phase 1/2 | Próspera ZEDE · Honduras | — |
| *BioViva Sciences (comparator)* | TERT | — | USA | $2,500,000 |
| *Libella Gene Therapeutics (comparator)* | TERT | — | Colombia | $1,000,000 |

⚠️ **Prices and stages are as recorded by a third party, not confirmed with the operators**, and the site describes its coverage as "selective." Treat the **$25,000 Minicircle figure as indicative**, needing operator confirmation.

**Also on the ground:** **GARM** (Roatán) hosts clinical work, e.g. an **Unlimited Bio AAV Follistatin gene therapy trial registered as NCT07443826** on ClinicalTrials.gov, with therapy and clinic costs covered for participants (May 2026). `[RESIDENT]`

**Positioning signal:** Infinita published a podcast with **Reason, CEO of Repair Biotechnologies**, arguing promising gene therapies are increasingly developed outside the US and that **Próspera is emerging as a venue for new clinical trials**. It runs on Infinita's own channel, so it is **evidence of positioning, not of trial volume.** `[RESIDENT]`

### 9.3 Finance — the RFSA and what you can license

The **Roatán Financial Services Authority (RFSA)** is the **independent, exclusive** regulator of financial services "in or from" Próspera, running the **Roatán International Financial Center (RIFC)**. The Council of Trustees creates and ratifies the rules and delegates enforcement to the RFSA. `[OFFICIAL — rfsa.hn]`

**Legal base:** Honduran Constitution art. 329; ZEDE Organic Law arts. 2 and 30; Financial System Law art. 17-A (which lets zone regulators set rules "equal or superior" to the national CNBS).

**Leadership** (per rfsa.hn): **José Luis Moncada** (ex-president of Honduras's bank/insurance regulator, CNBS), **Dr. Sohan Dasgupta** (ex-Deputy General Counsel, US DHS), **Chirag Shah** (ex-Chief Strategy Officer, Dubai's DIFC).

```json
{
  "rifc_licence_menu": {
    "funds_and_capital_markets": ["Investment Companies", "Private Funds (Exempt Offerings)", "Public Offerings", "Private Placements", "Alternative Transaction System"],
    "intermediation": ["Brokerage of Financial Instruments", "Order Routing", "Investment Advisory", "Credit Advisory"],
    "asset_servicing": ["Custody of Financial Instruments", "Escrow Agents", "Trust Companies"],
    "credit_and_banking": ["Banking", "Non-Banking Lender", "Money Transmitting Business"],
    "retail_capital": ["Crowdfunding Platform"],
    "crypto": ["crypto custody", "crypto exchange", "crypto service providers"],
    "purpose_built_regimes": ["Financial Regulation A (banking/credit)", "FinTech Regulation A (fintech)"],
    "tier": "OFFICIAL"
  },
  "insurance_requirements": {
    "general": "Every resident must hold liability insurance for arbitration awards against them; regulated firms must hold a supplemental policy",
    "finance_and_insurance_firms": "Financial Responsibility Statute §2-2-76: cover with annual loss limits of the LESSER of $500,000 or 7% of funds handled; premiums capped at the LESSER of $390,000 or 1% of projected funds",
    "qualified_insurers": "must hold 50% reinsurance and keep 12% of premiums in reserve",
    "insurer_of_last_resort": "Próspera's GSP, premium capped at 1% of funds handled per year, never exceeding US$390,000",
    "marketing_claim": "premiums 'as low as $500/year' for simple cases - the range is enormous and depends entirely on activity and funds handled"
  },
  "go_to_market": {"claim": "3-9 months and ~$50k-$300k for a regulated industry", "tier": "CLAIM"}
}
```

- **ZEDE Organic Law also provides** that markets for **foreign exchange, gold, securities, futures and commodities may operate freely**, and that ZEDEs must **safeguard free movement of capital** in, into and out of the zone. `[OFFICIAL]`
- ⚠️ **The gap between the menu and reality is the thing to check.** A published licence category is not evidence anyone holds one, or that counterparties and correspondent banks will deal with the holder. **Nobody has counted how many RIFC licences of each type are actually live.** The registry at pzgps.hn/registered-entities is the place to start.
- ⚠️ **The RFSA website is footer-dated © 2022–2023** and has not visibly updated. Confirm the team and rules are current before treating any of it as live.
- ⚠️ **Do not cite "RFSA Administrative Action No. 25 — RIFC Financial Market Rules, 27 Sep 2025."** It circulates, but **Próspera's official rules index publishes Administrative Actions only up to No. 23** (page last modified 22 Oct 2025). Nobody has produced AA-25. `[OFFICIAL — pzgps.hn]`

**One caveat that qualifies the whole territorial story:** **§8** of the Tax Statute charges income tax on interest arising through a **financial institution's business in Próspera** *"notwithstanding that the money … is made available **outside** of Próspera,"* and on revenue from the sale, disposal, redemption or maturity of certificates of deposit or bills of exchange even if the money was made available or the sale effected outside the zone. **Plain English: run a *financial* business from Próspera and the territorial shield leaks.** This does not affect an ordinary investor holding a portfolio; it very much affects a fund, lender or treasury operation. `[OFFICIAL]`

### 9.4 Gaming and poker — no regime, and Honduran criminal law is the real gate

This is a good example of a question where the obvious answer is wrong, and it makes strong explainer content.

**The one-line answer:** Próspera has **no gaming framework and no gaming licence** — gaming is not one of its eleven regulated industries and there is **not a single gaming statute in its published rulebook** (the complete 600+ line rules index contains zero instances of gaming, gambling, casino, wagering, betting, lottery, *juego* or *azar*). But **Honduran national criminal law applies inside the zone**, and **Article 387 of the Honduran Penal Code makes running an unauthorised game of chance punishable by 2–4 years' prison.** The RFSA is the *financial* regulator and does not license gaming. `[OFFICIAL]`

**Article 387, Código Penal (Decreto 130-2017, in force 25 June 2020)** — four points that matter:

1. **The verb is *"efectúen"* — to operate/run.** The offence targets whoever *runs* the game.
2. **Players are not criminalised.** The old 1983 code punished players with 1–3 years; **the 2020 code dropped that entirely.**
3. **"Casino" and "casa de juego" do not appear anywhere in the current code.** Unlicensed casinos are caught only by the residual phrase *"demás juegos de azar no concesionados o autorizados legalmente."*
4. **The charitable exception covers only *"rifas y sorteos"*** — raffles and draws. It does not grammatically reach *"demás juegos de azar."*

**Fines:** day-fines of L.20–5,000/day × 500–1,000 days = **L.10,000 to L.5,000,000** (≈ US$380–$190,000).

**The genuinely open legal question:** could a Próspera business permit count as *"autorizado legalmente"*? **Arguments both ways, nobody has litigated it, treat it as unresolved with real downside.** Próspera's own regulatory-insurance intake already screens for *"likely violation of Honduran national criminal law"* — the zone built the tripwire into its own process.

**Where the RFSA *does* bite** (the trap):

| Activity | RFSA relevant? |
| --- | --- |
| Live poker, players' own chips/sats, no house float | **No** |
| You hold player balances / run a cashier or wallet | **Yes** — money transmission or custody |
| You take deposits, offer credit or staking | **Yes** — non-banking lender / MTB |
| Online poker platform with an account balance | **Yes** — MTB registration |
| Prize pool escrowed by you between events | **Likely** — escrow agent |

**What already happens on the ground** `[CONFIRMED]`:

- **Roatán Bitcoin Bar Poker League** — **3 nights/week**, sats prizes. One of the most frequent recurring events in the whole Próspera calendar.
- **Bitcoin Poker Championship**, 4–7 March 2026, part of **Infinite Games 2026** — satoshi buy-ins, Lightning-enabled, three satellites into a final, rebuys allowed, **"No rake"**, open entry.

> **Read "no rake" as legal architecture, not marketing.** With no rake, no house edge and no operator take, the organiser is arguably not *"efectuando un juego de azar"* as a business — they are hosting a contest whose entire prize pool is player-contributed.

**The Honduran national casino route is effectively closed to foreigners.** Under the **Ley de Casinos, Decreto 488 (1977)** as amended: only **Hondurans by birth** and Honduran-incorporated legal persons may apply (Art. 3); a first-category tourism establishment with fixed investment over **L.1,000,000** is required; licences run up to 25 years; and on the operative consolidated text **Art. 6 bars admitting any player who cannot prove foreign nationality by passport** — i.e. it would exclude Honduran players. Island-zone tax is **L.300,000/yr or 20% of gross win minus prizes, whichever is greater** (≈ US$11.4k minimum on Roatán). Applications now run through the **Instituto Hondureño de Turismo (IHT)**, 45-day processing, L.200 fee. `[OFFICIAL]`

⚠️ **Research hygiene note worth repeating on any site:** searches for "Honduras gambling law" return heavily contaminated results. Prominent hits describing a *Cámara de Diputados* and a *Senado* voting on gaming bills are **Dominican Republic or Chile** — **Honduras has a unicameral Congress.** Affiliate sites claiming a *"Junta de Control de Juegos"* regulates Honduran gambling have **no statutory or government source**. Do not repeat it.

### 9.5 Other industry specifics

- **Manufacturing & energy:** a **Coral Reef Protection Statute** bars activity likely to significantly damage coral within **10 km** of Próspera. A **Hazard Precaution Statute** allows "abnormally dangerous" activities only under a named regulatory election with good-faith compliance, and the arbitration center's **Hazardous Division must resolve enforcement within 60 days**. `[OFFICIAL]`
- **AI agents — the differentiator nobody else has, stated precisely.** Próspera says it is ***exploring launching*** the world's first **AI agent sandbox**, allowing AI agents to incorporate companies, pay taxes, and over time acquire increasing legal personality. **As of mid-2026 this is an announced intention with a roadmap and an API surface (api-docs.eprospera.com) — not a shipped legal regime. No statute has been identified.** Wyoming has DAO LLCs; nobody offers agent legal personality. **Present it as a roadmap, not a product.** `[CLAIM]`

---

## 10. LIVING IN PRÓSPERA — the practical guide

> **This is the section nobody else has.** It comes from ~554 dated community listings (Feb–Jul 2026) posted by residents and businesses. Every figure is one person's report at one moment. Publish the dates.

### 10.1 ⚠️ Utilities: SJBEC and its "dynamic pricing"

**St. John's Bay Electric Company (SJBEC) is the only utility in Próspera** — electricity *and* water, for every home and business inside the zone. Confirmed in SJBEC's own job posting (May 2026): *"the only utility in Próspera, Roatán."* It is a **monopoly**. `[RESIDENT]`

*(Its exact relationship to Próspera is not established by the source data — the job posting describes SJBEC representing itself in technical conversations *with* Próspera, which reads as a separate company rather than a department. Do not assert either way.)*

**From the June 2026 invoice, SJBEC introduced tiered "dynamic pricing adjustments," priced per customer, using — among other factors — your latest eProspera tax return.** `[RESIDENT — Komninos, reporting what SJBEC told him directly, replying on a thread opened 12 Jul 2026; his reply date is not recorded]`

> *"SJBEC has introduced **dynamic pricing adjustments** effective from the June 2026 invoice, calculated per customer based on factors including your latest eProspera tax return. I was assigned to 'Tier 4', which they say justifies a **90% increase**. They also asked me to provide audited financial statements and my last three bank statements so they can 'accurately price services in the future'."*

- **Tier 4**, said to justify a **90% increase**. His bill went **$178 → $336** in one month.
- Another resident asked in-thread: *"So they charge you differently depending on what you earn?"* — **nobody from SJBEC answered.**
- A second resident reported thousands of gallons per month metered on a mostly-empty unit, suspecting broken meters or common areas fed from private meters.

**Why this matters far beyond the water bill:**

| Angle | Implication |
| --- | --- |
| **Tax** | A utility monopoly reading your tax return means declared income has a *direct cash cost* inside the zone. That partly offsets the headline ~1%/~5% rates |
| **Privacy** | Being asked for audited financials and bank statements by an electricity company is a data-sharing pattern worth knowing about before moving |
| **Underwriting** | Utilities are **not** a fixed cost you can benchmark. Price them as a variable tied to your own revenue |
| **Governance** | The private-governance trade-off in miniature: fast and flexible, but **no rate-setting regulator to appeal to** |

⚠️ **Caveat, stated plainly:** this is one resident's account of what one company told him, plus one corroborating bill complaint and one unanswered question. **No published SJBEC tariff has been located.** Quotable with attribution; not quotable as policy.

**Also reported:** **power surges have destroyed resident appliances** (a Samsung TV, a washer-dryer). Community suggested remedy: small claims / the Próspera tribunal — **nobody reported an outcome.** **Budget for surge protection and a UPS.** SJBEC's own job posting says it is *"in turnaround mode: improving operations, reducing losses, and getting ready for on-site solar within the next year."*

**You can pay SJBEC bills in $LIVES** directly on the SJBEC billing interface.

**The plumbing behind the billing** — from the Duna operator's own guidebook, 2026-08-03 `[OFFICIAL — operator]`:

| What | Platform | Support |
| --- | --- | --- |
| Booking dates, leases, maintenance requests, invoices, rent payments | **DoorLoop** | via the front desk |
| **Energy and water consumption** | **Utilities Portal** — `portal.utilities.hn` | **support@sjbec.com** |
| Resident feature requests / shared-space improvements | **Canny** — `rez.canny.io/duna-improvements` | — |

**Rent and utilities are deliberately separate systems and do not arrive on one bill.** Anyone modelling monthly cost needs to look at **both** portals — and the utility side is the one under SJBEC's tariff, which is exactly where the complaints above originate. `support@sjbec.com` is a concrete escalation route residents did not previously have documented, and the Canny board means complaints do have somewhere to go.

### 10.2 Housing

```json
{
  "housing": [
    {"item": "Beta Hostel", "price_usd": 23, "unit": "per night", "date": "2026", "note": "cheapest bed inside the zone; ~$690/month equivalent"},
    {"item": "Duna Tower units", "price_usd": null, "note": "not published; book direct via dunaresidences.com/contact", "date": "2026"},
    {"item": "Studio + car, Duna short let", "price_usd": null, "note": "peer-to-peer, listed by residents", "date": "May-Jul 2026"}
  ],
  "monthly_rentals": {
    "status": "Available at Pristine Bay and Las Verandas, but BROKERED, not publicly listed - the visible online inventory is nightly/vacation only",
    "route": "Roatan Life Vacation Rentals (roatanlifevacationrentals.com)",
    "confirmed_by": "Kara Isabella, Infinita/Próspera staff, 22 Jul 2026",
    "gap": "NO monthly price has ever been disclosed. This is the single biggest hole in the cost-of-living picture."
  },
  "supply_signal": "Two 'wanted: 1BR / 2 rooms in Duna' posts appear in 554 listings (Apr and Jun 2026) - suggestive of tight supply, but two data points is not a market signal",
  "tier": "RESIDENT"
}
```

**Duna Tower is the centre of gravity** — residences, the gym, L1 cowork, the Bitcoin ATMs, Ad Astra medical clinic, the late-night kitchen, and most community life. **Pristine Bay** is the second full-time residential cluster.

**Amenities included at Duna** (relevant when comparing a Duna unit against a standalone rental elsewhere on the island — the gym, pool and coworking are **not** separate line items here) `[OFFICIAL — operator guidebook, 2026-08-03]`: fitness centre 24/7 · infinity pool (Mon–Wed 7AM–7PM, Thu–Sun 24h) · sauna 24/7 · BBQ grills by booking · rooftop terrace · a **24/7 self-checkout convenience store** in the building · a **Bitcoin ATM in the lobby** (BTC ⇄ physical USD, 24/7) · Infinita coworking on Level 1, 24/7 with a Builder's Pass.

⚠️ **Pets are effectively unavailable to renters.** Duna states it is **not resourced to accept pets** and restricts them to **owners only** — maximum **one pet per apartment**, **25 lb weight limit**, registered with management. **Anyone relocating with an animal and planning to rent should treat this as a hard constraint and check it building by building.** It is exactly the kind of thing that surfaces late and changes a relocation plan. `[OFFICIAL — operator guidebook]`

### 10.3 Services and recurring costs

```json
{
  "services": [
    {"service": "Apartment cleaning, weekly, studio/1BR", "price_usd": 79, "period": "month", "provider": "ProsperaSub (prosperasub.com/cleaning)", "note": "pays via Lightning"},
    {"service": "Apartment cleaning, weekly, 2BR", "price_usd": 99, "period": "month", "provider": "ProsperaSub"},
    {"service": "Yoga drop-in", "price_usd": 12, "provider": "Dharma Holistic Living, Duna L1"},
    {"service": "Yoga class pack", "price_usd": "from 30", "provider": "Dharma Holistic Living"},
    {"service": "Group weight training, Duna gym", "price_usd": 0, "note": "free, 3x/week"},
    {"service": "Cold plunge, Level 8", "price_usd": 1.80, "note": "per use, 70%-off promo price"},
    {"service": "Taxi, island-wide", "price_usd": 25, "note": "per ride, Roatan Taxis (roatan.online/taxi-rates)"},
    {"service": "Liberty Line shuttle", "price_usd": null, "note": "cards sold at Duna lobby"},
    {"service": "Duna to Eldon's/Pristine Bay shuttle", "price_usd": 0, "note": "free, Henrych's Shuttle"},
    {"service": "Printing, per sheet (heavy cardstock)", "price_usd": 1.25, "provider": "Próspera Print Center, L1 Cowork"},
    {"service": "Photo print 8.5x11 glossy 600 DPI", "price_usd": 2, "provider": "L1 Cowork", "note": "needs Infinita_City WiFi; a VPN blocks it"},
    {"service": "Pool access, Pristine Bay", "price_usd": 75, "period": "month", "provider": "ProsperaSub (prosperasub.com/discovery)", "date": "2026-08-03", "note": "A MONTHLY MEMBERSHIP, NOT A DAY PASS. Las Verandas sells no standard day pass and charges separately for casual pool use; this is the cheapest documented route in. Re-check the site before quoting."},
    {"service": "Potable water, 5-gal jug, lobby pickup (Duna)", "price_usd": 3, "date": "2026-08-03", "note": "ordered via DoorLoop, not at the desk"},
    {"service": "Potable water, 5-gal jug, delivered to unit (Duna)", "price_usd": 5, "date": "2026-08-03", "note": "a $2 premium for in-building delivery"}
  ],
  "duna_penalty_fees": [
    {"violation": "Smoking policy", "fee_usd": 150, "note": "repeat violations lead to lease termination"},
    {"violation": "Noise / quiet hours", "fee_usd": 150},
    {"violation": "Pool quiet hours", "fee_usd": 150}
  ],
  "note_on_fees": "$150 recurs across three separate policies - it reads as a standard penalty unit rather than three independently-set fines",
  "note_on_water": "Drinking water is bought by the jug. This is not a place where tap water is the default, and the recurring cost belongs in any monthly floor calculation.",
  "date": "2026-07-25, with 2026-08-03 additions",
  "tier": "RESIDENT + OFFICIAL (operator guidebook)"
}
```

### 10.4 Food prices

```json
{
  "food": [
    {"item": "Daily lunch delivery, Duna (chicken/shrimp/pinchos)", "price_usd": 8, "note": "Lps 200; order by noon, delivered 12:20"},
    {"item": "Green Cilantro breakfast", "price_usd": 8},
    {"item": "Green Cilantro smoothie", "price_usd": 7},
    {"item": "Taco Tuesday order", "price_usd": 12},
    {"item": "Saturday sushi roll", "price_usd": 11},
    {"item": "Sunday lobster meal", "price_usd": 21},
    {"item": "Empanada", "price_usd": 4.30},
    {"item": "Late-night delivery 9pm-2am, Duna", "price_usd": "from 3", "note": "pays in $LIVES / BTC / cash"},
    {"item": "Fresh eggs, carton, from Oakridge", "price_usd": 12.50},
    {"item": "Frozen beef, 1 lb", "price_usd": 4, "note": "L100"},
    {"item": "Coconut (group buy)", "price_usd": 1.50}
  ],
  "restaurants": ["Green Cilantro (closed Mondays; Tue-Sat 8am-8pm, Sun 11am-5pm)", "Pete's Place", "Pergolas (Pristine Bay)", "Las Palmas (Dixon Cove)", "Las Verandas"],
  "date": "2026-07-25",
  "tier": "RESIDENT"
}
```

### 10.5 Imported goods carry an island premium

```json
{
  "goods_examples": [
    {"item": "iPhone 15 Pro Max 256GB, used-like-new", "price_usd": 800},
    {"item": "iPhone 15 Pro 256GB, used-like-new", "price_usd": 520},
    {"item": "Mac Mini M4 1TB/32GB", "price_usd": 1300, "note": "sold"},
    {"item": "Ford Escape XLT 2011", "price_usd": 5700},
    {"item": "Trezor Model T", "price_usd": 103},
    {"item": "TwentyTwo hardware wallet", "price_usd": 54}
  ],
  "shipping": {
    "amazon": "Residents confirm Amazon delivers to the island",
    "mainland": "For Tegucigalpa to Próspera the community recommends CARGO EXPRESS - 'reliable and decent price' (Cesar Gonzales, April 2026). No cost or transit-time figures given.",
    "real_friction": "CUSTOMS, not shipping. A resident had a FedEx computer caught in customs. Budget time and possible duty on high-value electronics."
  },
  "tier": "RESIDENT"
}
```

### 10.6 Rough monthly cost for one person

⚠️ **`[ESTIMATE]` — assembled from the figures above, not from any official source. Label it as an estimate wherever it appears.**

```json
{
  "monthly_estimate_single_person_modest": {
    "housing": "$690/mo at hostel rate; realistically $800-1,500+ for a Duna unit",
    "food": "$400-700 at $8-15/meal out, less if self-catering",
    "cleaning": "$79",
    "utilities": "UNPREDICTABLE - $150-350+, and see section 10.1",
    "transport": "$100-200",
    "all_in": "$1,600-2,800/month",
    "wild_card": "utilities",
    "tier": "ESTIMATE - do not quote as fact"
  }
}
```

### 10.7 Mail and physical address — read this before ordering anything

The clearest piece of practical tradecraft in the community record, from a resident who received **six months of accumulated mail** he assumed had never arrived. `[RESIDENT — Komninos, 30 Jun 2026]`

**Address format used:**

```
[Name]
Duna Tower, Unit XXX
Roatán, Honduras
```

| Carrier | Delivers to |
| --- | --- |
| **UPS** | Duna Tower directly |
| **FedEx** | Duna Tower directly |
| **USPS** | The **Beta offices** — and is *not* automatically relayed to Duna. **Go and collect it.** |

**The format was not the fix.** He used exactly that address and *"would never get the mail. Turns out it was being delivered to another address."* What actually changed was discovering a stack accumulating at Beta. **There is no reliable relay to Duna for anything outside UPS/FedEx — you have to know to go and ask at Beta.**

**The operator's own published address format** — the first documented ZEDE-side address template `[OFFICIAL — operator guidebook, 2026-08-03]`:

```
Duna Tower #1, Unit ____
St. John's Bay Próspera ZEDE
Roatán, IB, Honduras, 34101
```

Note the structure: building + unit, then **"St. John's Bay Próspera ZEDE"** as the locality line, then `Roatán, IB, Honduras` with postcode **34101**. **The ZEDE is named in the address but the country line is still Honduras** — consistent with the finding that mail works when it is addressed as a Honduran destination.

**Package handling at Duna:** received and logged at the front desk, resident notified, collected during desk hours. **Food-delivery couriers wait in the lobby** and do not go up.

There are *"a few people trying to advance a physical address system"* in Próspera. **As of mid-2026 there is no formal one.**

**Why this matters beyond convenience:** anyone building genuine economic substance for CFC or place-of-management purposes needs a reliable registered address that receives official mail. **Próspera does not yet have a formal system for this.** Treat it as a gap to solve deliberately, not something that comes with the entity.

### 10.8 Getting there and getting around

- **Daily direct flights from Miami, ~2 hours**, on **American** and **United** (per Niklas Anzinger, June 2026). A genuine advantage over most exotic jurisdictions. `[RESIDENT]`
- **Taxis:** **City Taxi** (cash only, `+504 3388-4358`), Jorge Taxi, Mario Santos; island-wide rides ~$25. *(Note: "CityFlow" appearing in some listings is a misnomer for the same operator — the correct name is City Taxi. Do not create two entries.)* `[TOMEK — confirmed 2026-08-03]` **Liberty Line shuttle** cards sold at the Duna lobby. **Henrych's Shuttle** runs Duna → Eldon's/Pristine Bay free.
- ⚠️ **Open gap:** a visitor asked (May 2026) for the fastest route from the **Roatán cruise port** to Próspera Village / Beta District and **got no replies**. **Nobody has published a port-to-Próspera route or timing.** Genuine content opportunity for a knowledge site.

**Vehicles** `[RESIDENT — Ricardo Gonzalez, 12 Jul 2026]`:

- Cars are often sold with **provisional plates**. Permanent plates are *"always problematic to get due to material shortage."*
- There **is** an annual vehicle registration fee, normally paid around **September**, with the exact month keyed to **the last digit of your plate number**.
- Pay it at **any bank** — bring the registration, pay what's due, get an updated document.

### 10.9 Health and medical

**Clinics and providers on the ground** `[RESIDENT]`:

- **Ad Astra Clinic** — medical consultations at **DUNA Tower**, booked via WhatsApp.
- **Blood panels / lab tests** — a clinic just past Pineapple Grill, next to a well-drilling company; samples taken there, **results returned by WhatsApp or email**.
- **BiFat Center** — peptide therapy clinic at Pristine Bay Beach Club.
- **GARM** (Roatán) — hosts clinical trials (see §9.2).

**Health insurance — what residents actually hold.** The best-answered thread in the whole community record (June 2026, 11 substantive replies). Hard-to-source information. `[RESIDENT]`

```json
{
  "health_insurance_reports": [
    {"product": "SafetyWing", "cost": null, "experience": "The clear community default. 'Worked perfectly in my recent emergency and surgery - immensely more efficient than my local insurance' (JP). 'Paid out for me... full claim paid across two separate countries' (Daniel Thompson). Two further endorsements."},
    {"product": "Genki Traveler", "cost_usd_month": 70, "note": "International cover but CAPPED AT 12 MONTHS"},
    {"product": "Genki / PassportCard (ongoing)", "cost_usd_month": "200-500", "note": "the normal band for real ongoing international cover"},
    {"product": "assist-365.com", "cost_usd_year": 2500, "note": "for a family of 5. 'Works great here and great price' - BUT it is TRAVEL insurance, so one resident could not renew after his second year on the island"},
    {"product": "Global Rescue", "cost": null, "note": "chosen for high-altitude rescue cover; no claim filed"},
    {"product": "Local Honduran broker", "cost": null, "note": "used by one resident for himself and his employees - REQUIRES Honduran residency"}
  ],
  "the_dissenting_case": "One resident carries no health insurance: routine healthcare on the island costs less than any premium, and genuinely serious care would require a MEDIVAC anyway. Standalone medivac plans run ~30% of the cost of travel health insurance, and SafetyWing would not cover travel back to your home state.",
  "the_buying_tip_that_matters_most": "Pick a policy that is digital-nomad friendly or lets you use Honduras as your home address. Most policies cover one country plus 3-month stays abroad, and will demand proof you left within the last 3 months before paying. If you actually live in Roatán on a normal travel policy, YOU MAY BE UNINSURED WITHOUT KNOWING IT.",
  "practical_read": "SafetyWing for nomads and new arrivals; a local broker + Honduran residency if settling; a standalone medivac plan as the serious-risk hedge. Verify current pricing - these are mid-2026 figures.",
  "tier": "RESIDENT"
}
```

**Measles requirement (2026):** **Acuerdo 3270-2026, dated 2 June 2026**, requires proof of measles vaccination to be presented **at any air, sea or land exit and entry point** — the source describes it as applying to travel **to and from** Honduras, not outbound only. There is an active national outbreak and the vaccine is now offered to adults. Ad Astra Clinic clarified this is **not** a blanket revaccination recommendation — priority groups are tourism workers and others dealing with recent arrivals, people with incomplete or undocumented childhood schedules, and healthcare workers. ⚠️ **Verify against the official Acuerdo before relying on it**, especially the inbound-traveller scope; no resident reported actually being checked. `[RESIDENT]`

### 10.10 Connectivity and power

- **Internet: no named provider or benchmarked speed exists in the community data.** What *is* documented: repeated **Duna Tower WiFi outages**, serious enough that a service credit was negotiated with the provider in 2026, and a live proposal for a single **Próspera-wide WiFi network with one login**, which insiders call *"not as simple or quick as it sounds"* but confirm is being explored. One resident notes the **Duna elevator is a dead zone** — he was stuck in it and could not call for help. `[RESIDENT]`
- The L1 print service **only works on Infinita_City WiFi — a VPN blocks it.**
- **Power surges** have destroyed appliances. Budget surge protection.
- **Phone numbers — directly relevant to banking:** WhatsApp rejects most VoIP numbers (Google Voice included). Community advice: use a real **eSIM** rather than VoIP, because VoIP also breaks SMS 2FA for banks and exchanges. **Tello.com** (US eSIM, under $10/mo with data + calls) was recommended by a resident running 15+ eSIMs on one phone. **Textverified.com** was the one VoIP-ish service reported as reliable. → **Get a stable non-VoIP number before starting KYC anywhere.** `[RESIDENT]`

### 10.11 Access control, visitor permits, and who actually enforces the law

**Entry to the zone is scanned, every time.** The operator's guidebook states: `[OFFICIAL — operator guidebook, 2026-08-03]`

> *"All residents will have their Próspera e-Residency scanned upon **every entry** to the zone and buildings."*

Not on arrival, not at first registration — **every entry**, to the zone *and* to individual buildings. The guidebook frames it warmly ("think of it as your key to our secure community"), but the mechanism is a per-entry identity check tied to e-Residency status.

**What that implies, and it is worth confirming:** an e-Residency credential is not merely a legal status, it is the **operative physical access token**. Anyone whose credential lapses, or who has applied but not received one, may have a building-access problem and not just a paperwork problem. **Nothing in the record says what happens on a failed scan.**

**Every visitor needs a permit number:**

- **All** visitors to Próspera ZEDE **and to the buildings** must hold a **permit number**
- Apply at **`prospera.co/visitor-pass`**
- It can later be upgraded to e-residency or full residency — **the visitor pass is the bottom rung of the same ladder, not a separate track**
- Building-side, on top of the zone permit: visitors check in at the front desk, residents should **pre-authorise** expected guests with the security post, guest parking is capped at **24 hours**, and **overnight visitors staying longer than 7 days must be registered with management**

**Practical note:** the zone permit is the step outsiders forget. **It is not a formality applied at the gate — it has to exist before arrival.**

#### ⭐ Policing: a policing *function* without a police *force*

This corrects a natural assumption, and the correction comes from the official who would know.

**Technical Secretary Jorge Colindres, 31 July 2026:** *"There is **no chief currently, nor police**. Crime investigation is led by the **Law Enforcement Committee** and the **private Security Team**."* `[RESIDENT — first-party, on the record]`

⚠️ **He had said something that reads differently two months earlier** (31 May 2026), pitching to prospective landowners: *"Our ZEDE has its own police and security system, so problems on the mainland don't reach us."*

**Both are accurate, and the distinction is the finding — not a footnote.** Próspera operates a **policing *function*** without a **police *force***: the **Law Enforcement Committee** sets and directs it; a **contracted private security agency** performs it. The May statement describes the *system*; the July statement describes the *institution*. `[TOMEK — confirmed 2026-08-03]`

**Never quote the May line alone** — read on its own it implies a public police force that does not exist. For anyone doing security, insurance or personal-safety due diligence, **the July framing is the operational picture.**

- **911** is the emergency number — the same national number, not a ZEDE-specific one.
- The **building security post is staffed 24/7**; the front desk is not. First-aid kits at the security desk and on every floor by the elevator.
- Official framework page: `pzgps.hn/pz-law-enforcement/`.

**⚠️ Two real open questions this leaves, and neither is answered anywhere in the record:** what the escalation route to Honduran **national** police is for a serious crime, and whether the contracted private security agency has **any power of detention**. A private contractor is not a substitute for a public force on either point.

**One dated, concrete data point on enforcement in practice:** the **2Cans** convenience store in Duna Tower announced in July 2026 that shoplifting losses were bad enough that it was **installing AI surveillance** and warned it *"can't keep this store open if this continues."* Residents in the thread openly debated **exile from Próspera** as the appropriate sanction. **This is one merchant's account, not a crime statistic** — but it shows the enforcement question is live and commercially material inside the flagship residential tower. `[RESIDENT]`

---

## 11. THE ECONOMY, BUSINESSES, JOBS AND COMMUNITY

### 11.1 What the community data volume itself tells you

554 community listings, February–July 2026, of which **12 are confirmed fabricated seed rows** (see §16.2), so read ~542 as the real corpus:

```json
{
  "listing_categories": [
    {"category": "events", "count": 203, "read_through": "Very high community density for a settlement this small"},
    {"category": "goods", "count": 86, "read_through": "Real retail, mostly small-ticket and Bitcoin-branded"},
    {"category": "announcements", "count": 83, "read_through": "Active civic/comms layer"},
    {"category": "forum", "count": 70, "read_through": "People solving each other's operational problems"},
    {"category": "services", "count": 60, "read_through": "The actual local service economy"},
    {"category": "jobs", "count": 52, "read_through": "Real hiring, mostly by Próspera-affiliated entities"}
  ],
  "period": "2026-02 to 2026-07",
  "honest_reading": "A village-scale economy with a disproportionately loud institutional layer. The service base is hospitality, diving, food, transport, wellness and cleaning - a resort town. The high-value activity (biotech, governance, finance) is real but concentrated in a handful of named entities.",
  "tier": "RESIDENT"
}
```

### 11.2 Event cadence — what social life actually looks like

**~28–31 events per month, steady** (Apr 28, May 31, Jun 27, Jul 28). *(March shows 71 — that is the platform's seed/backfill month and includes fabricated filler; discount it entirely.)*

**Roughly one event per day, year-round, in a settlement of a few hundred people. That density is the single best argument that Próspera is a functioning community rather than a registered-address scheme.**

```json
{
  "event_themes": [
    {"theme": "Bitcoin-related", "count": 20, "character": "Meetups, education, merchant onboarding, Bitcoin Roatán"},
    {"theme": "Festivals", "count": 14, "character": "Tidal Festival, Espressate (coffee), Food & Wine"},
    {"theme": "Yoga / wellness", "count": 12, "character": "Dharma Holistic Living - the most frequent single host (9 listings)"},
    {"theme": "Running / races", "count": 12, "character": "21K Roatán reef half-marathon, Roatan Run Club"},
    {"theme": "Poker", "count": 8, "character": "Roatan Bitcoin Bar Poker League - 3 nights/week, sats prizes"},
    {"theme": "Workshops / talks", "count": 16, "character": "AI talks, community building, first aid, town halls"},
    {"theme": "Gym / sauna / cold plunge", "count": 8, "character": "Duna Tower gym, Level 8"},
    {"theme": "Game nights", "count": 6, "character": "P1 Makerspace, weekly"},
    {"theme": "Conferences / summits", "count": 7, "character": "Free Cities Conference (Sept), Liberty Acceleration Summit, LBF8"},
    {"theme": "Chess", "count": 3, "character": "Próspera Chess Cup, FIDE-registered"}
  ],
  "recurring_hosts": ["Dharma Holistic Living (9)", "Jason H / Duna Próspera (12 across two handles)", "The Club at Pristine Bay (6)", "Infinita City (5)", "Kimpton Grand Roatán (5)", "Infinite Games 2026 (4)", "Roatán Divers (6)"],
  "planning_note": "The forward calendar thins out fast - Aug 7 listings, Sep 3, Oct 2, Dec 1. Events are announced DAYS TO WEEKS ahead, not months. September is the anchor month (Free Cities Conference).",
  "period": "2026-02 to 2026-07",
  "tier": "RESIDENT"
}
```

### 11.3 Who is actually hiring

| Employer | What it tells you |
| --- | --- |
| **Próspera** (the entity) — PMO, Governance, Legal, Real Estate, Apps | **The zone administration is itself the largest employer** |
| **St. John's Bay Electric Company (SJBEC)** | The utility monopoly — electricity + water |
| **St. John's Bay Development Company LLC** | Multiple real-estate projects |
| **Próspera Hospitality** (Las Verandas Hotel & Villas) | Hotel operations |
| **Wohlstand Security** | Private security — the zone's own security provider |
| **Pristine Academy** | Private school (middle/high school English teacher) |
| **FrontierU** | Alt-university launching in Próspera |
| **Bay Island Seafood Distribution** | Roatán-wide; hiring a Honduran-qualified accountant |
| **Maxcom · RGB Graphic Solutions · Roatán Sector Inmobiliario** | Ordinary Roatán businesses, not zone-specific |
| **CiVL Studios** (studios.civl.com) | Recording studio & media startup; a full-service video podcast studio |

Most Próspera roles are posted through **jobs.polymer.co/prospera**, plus a community job board ("Work in Próspera").

**Two signals worth publishing:**

1. Próspera repeatedly hires **Bilingual Legal Specialists in "cross-jurisdictional property and corporate law,"** a **Director of Legal Operations**, and a **Governance Operations** lead. **A jurisdiction staffing up its legal function that hard is a jurisdiction expecting legal work.**
2. It hires hard in **real estate** — Director of Real Estate, Real Estate Sales Lead, Real Estate Marketing Director, Manager of Development Partnerships (*"bring external development partners onto our land to launch new projects"*). **That is a sales-push posture**, useful context when evaluating real-estate marketing claims.

### 11.4 Salaries — the only published benchmark

**SJBEC, Software Engineer (May 2026):** `[RESIDENT]`

- **USD $1,500/month base, plus housing in Roatán.** *(The listing's structured salary fields say $1,200–1,499 while the job body says $1,500 — the export disagrees with itself.)*
- Relocation support; **$750 referral bonus**.
- Requires 2+ years production TypeScript/React/Node/PostgreSQL, **fluent English and fluent-or-near-fluent Spanish**, willingness to move to Roatán full-time.

**Implications:** ~$18k/year plus housing for a mid-level engineer is **far below** US/EU rates and roughly Latin-American market. **If you are modelling a Próspera operating company, labour is cheap — a genuine cost advantage that is easier to rely on than the tax rate.** Conversely, this is not a place where a high-earning employee relocates for the salary; the people moving are founders, remote workers on foreign income, and mission-driven staff.

*(For context on the wider labour market, Próspera claims 3,400+ local jobs created and wages 25%+ above minimum, with a median reported ~$1,582/month in 2023. `[CLAIM]`)*

### 11.5 Professional services on the ground

| Need | Named provider |
| --- | --- |
| Law (real estate, corporate, notary) | **Tugliani & Tugliani**, Lawson Rock — accepts Bitcoin |
| Law / general | **Cesar Gonzales, Atty.** — also runs roatantg.com |
| Company structure & tax | Community consistently points to **onesafe.io**, **nomadlayer.com**, and **Próspera directly**; **ProspIn** (prospin.io) is the official incorporation partner |
| Bitcoin financial services / OTC / BTC-backed loans | **AmityAge** (amityage.com), Bitcoin Center Roatán |
| Accounting (Honduran side) | Roles advertised for *Perito Mercantil / Contador Público* — SAR filings, payroll, taxes |
| Security & logistics packages | **Wohlstand Security** |
| Venue for events | **Infinita Dome** (infinitadome.com) |
| Cowork / print / business services | **L1 Cowork, Duna Tower**; Infinita Cowork |
| Cleaning | **ProsperaSub** (prosperasub.com) — pays via Lightning |
| Real-estate platform (in development) | **Prospera Havens** — AI-powered listings, pre-launch feedback stage 2026. ⚠️ unverified provenance |

### 11.6 Ecosystem organisations

```json
{
  "ecosystem": [
    {"name": "Infinita City", "url": "infinita.city", "what": "The biotech/longevity-focused sub-community inside Próspera (Niklas Anzinger). Runs the BioHub accelerator, the Cowork, the Dome, the $LIVES token, Crypto Cities Month, and its own newsletter and podcast"},
    {"name": "Vitalia City", "url": "vitalia.city", "what": "Longevity/biotech community inside Próspera, 500+ people, $500 access pass"},
    {"name": "Bitcoin District", "url": "thebitcoindistrict.com", "what": "Bitcoin-focused community layer inside Próspera - coliving, real estate, community. Runs BitChill seasons, Bitcoin Vibecamp, Orangeville"},
    {"name": "Bitcoin Roatán", "what": "Merchant adoption org; reports ~3 new BTC merchants/month (May and June 2026)"},
    {"name": "The Prosperity Press", "url": "theprosperitypress.com", "what": "Monthly newsletter - a good running record of the zone"},
    {"name": "Próspera Podcast", "what": "Launched 2026; episode 1 featured Tim Urban (Wait But Why)"},
    {"name": "prospera.events", "what": "Public event calendar covering Roatán and Próspera"},
    {"name": "prospera.place / Agora", "what": "Community listings platform - events, goods, services, jobs, forum. The primary on-the-ground record"},
    {"name": "Purrdict", "what": "Billed as the first on-chain prediction market in Próspera, on Hyperliquid HIP-4. TESTNET LIVE, mainnet 'coming soon' as of mid-2026 - not yet in production"},
    {"name": "Westy", "url": "westy.com.br", "what": "Startup building local-services/bureaucracy tooling for network cities; backed by canary.com.br and boost.vc"},
    {"name": "Polis Labs", "what": "Pop-up city research"},
    {"name": "FrontierU", "what": "Alt-university launching in Próspera"},
    {"name": "P1 Makerspace", "what": "Makerspace; hosts weekly game nights"},
    {"name": "Ciudad Morazán", "what": "The OTHER Honduras ZEDE - mainland, industrial/blue-collar focus, same legal framework as Próspera. Useful comparison point"}
  ]
}
```

### 11.6b Can families actually live there? One real data point

**Próspera hosted a month-long 47-person family residency** — **24 adults and 23 children** — through the **Noma Families** programme at Las Verandas, wrapping at the start of August 2026. Organiser Daniel Thompson confirmed it in the community channel; it was the most-reacted post of the period. `[RESIDENT]`

**Why it is worth publishing:** nearly half the participants were **children**. Almost all Próspera material describes a jurisdiction for founders, biohackers and remote workers. This is dated evidence that it absorbed a **47-person family cohort for a full month**, with the venue, logistics and community reception all working.

⚠️ **The honest caveat: a month-long residency is not the same as year-round family life.** Schooling, healthcare and childcare capacity are untested by it. **The open question — whether any of those families stayed on, or intend to return — is the difference between a tourism data point and a relocation one, and nobody has asked.**

*(For schooling: Guidepost Montessori / Higher Ground and Pristine Academy both operate in the zone — see §12 and §11.3.)*

### 11.7 Reputational data points

- **Próspera ranked #1 on the 2026 Denationalize.me Freedom Index** (235 territories). Note the index's own ideological priors before citing it. `[RESIDENT/CLAIM]`
- **Próspera ZEDE attended the 12th World FZO Congress in Panama City** (1,500+ free-zone leaders) and hosted a **Spanish entrepreneur delegation** (biotech, real estate, tourism). Evidence of mainstream free-zone-world engagement, not just crypto-libertarian circles. `[RESIDENT]`
- Economist **Juan Ramón Rallo** interviewed **Jorge Colindres** on the Próspera model — a credentialed-economist source.

### 11.8 The wider free cities ecosystem (context for a knowledge site)

Próspera is the most developed instance of a broader movement. Useful for "how does this fit into a bigger picture" content.

| Organisation | What it is |
| --- | --- |
| **Free Cities Foundation** (free-cities.org) | 501(c)(3); chairman **Titus Gebel**, MD Peter Young; 100+ global ambassadors; runs the Free Cities Conference and a project directory. Primary movement hub |
| **Charter Cities Institute** (chartercitiesinstitute.org) | 501(c)(3) founded by Mark Lutter; publishes the *Journal of Special Jurisdictions*, policy briefs, the New Cities Map |
| **Startup Societies Foundation** | Think tank on decentralised governance; open-source legal templates |
| **Adrianople Group** | SEZ research and advisory; built the Open Zone Map and Startup Cities Map |
| **Pronomos Capital** (pronomos.vc) | Charter city VC — Patri Friedman + Peter Thiel. Portfolio includes Próspera, Praxis, Itana (Nigeria), Metropolis (Palau), Afropolitan |
| **SEZ Explorer** (sezexplorer.org) | 6,200+ SEZs across 179 countries — the broadest SEZ database |
| **Open Zone Map / Startup Cities Map** | Interactive maps; Próspera appears as a "city designed as a startup" |

**Peer projects for comparison:** Ciudad Morazán (Honduras, mainland), Infinita City and Vitalia (inside/near Próspera), FREE Madeira (Portugal, Bitcoin circular economy, 160+ merchants), Praxis Society ($525M raised — **not $900B**, a number that circulates online), Network School (Balaji Srinivasan; forced out of Johor, Malaysia in 2026 — see §3.14), Afropolitan, Metropolis (Palau).

**Conferences:** Free Cities Conference (Prague, 31 Oct – 2 Nov 2026); a Free Cities conference in Próspera (3 Sep 2026); Network State Conference (Singapore, 9 Oct 2026); Bitcoin Atlantis (Madeira).

**Foundational texts:** *Free Private Cities* (Titus Gebel), *The Network State* (Balaji Srinivasan, free online).

---

## 12. CASE STUDIES — real operators with numbers

⚠️ **All four are from Próspera's own Resource Center, funded and published by Honduras Próspera Inc.** (interviews conducted by third-party Erdös Associates). They are useful because they give **real numbers and named operators**, but they are **the upside case, not neutral audits.** Always label them. `[CLAIM — Próspera-funded]`

**Apolo Group — real estate development.** Honduran developer (founded 2012, San Pedro Sula); in Próspera since 2020.
- Land acquisition to groundbreaking in **2 months vs ~12** on the mainland
- About **20% lower project cost**; about **90% lower tax** (1% effective vs ~10% outside)
- Regulatory flexibility allowed **one 14-storey** mixed-use tower instead of two 6-storey buildings
- **100% Honduran** workforce; wages **10–25% above** comparable mainland roles
- Credits e-Resident e-signatures plus arbitration and legal-stability guarantees for winning international buyers

**Minicircle — biotech / gene therapy.** US-founded (2020) longevity gene-therapy startup running Phase I trials.
- Launched a trial **under 8 months** after forming the entity; claims about **1/1,000th** the US cost
- For the cost of **one** Phase I trial in the US, it runs **six** in Próspera
- Cites a US FDA IND filing at **$300k+** and up to **3 years**, plus **$70–100k/month** to keep developing
- Chose the **Roatán Common Law (default) framework** — and unlike US trials it operates **with** liability for harm rather than shielded. Exploring proposing a custom gene-therapy rule

**Relay Human Cloud — remote staffing.** Houston-based staff-hosting firm; in Próspera since January 2021.
- Grew its Próspera footprint **10×**; **30** hires to date
- Its clients save **up to 70%** on labour; setup was "weeks, not months"
- Picked Roatán for **US time-zone overlap** and **native-English local talent** (former British colony plus bilingual schooling)

**Higher Ground / Guidepost Montessori — education.** The world's largest Montessori operator; its first Latin-American school.
- School opened **90 days** after the first intro call (vs an estimated ~2 years elsewhere)
- **Education is an unregulated industry in Próspera** — no permit or licence needed
- "Profitable from day one"; students grew 6 → 12 → 30, with 50 projected

---

## 13. COMPARISON WITH OTHER JURISDICTIONS

> **One-line frame: Próspera competes on price, speed and flexibility, but loses on certainty.** Every other option below has a more settled legal foundation. That trade — cheap and flexible vs proven and durable — is the whole comparison.

Figures verified 2026-06-19 unless noted; tax and fees move, so publish the verification date.

```json
{
  "comparison_tax_and_cost": [
    {"jurisdiction": "Próspera (Honduras)", "company_tax": "~1% effective on gross", "personal_tax": "~5% headline; ~4.2% after the $8k allowance; or $5k/yr lump sum (not US persons)", "setup": "~24h, from ~$280", "annual": "~$330-480 basic, ~$590-740 full-Resident, ~$750 via provider"},
    {"jurisdiction": "Cayman Islands", "company_tax": "0%", "personal_tax": "0% (no income/capital-gains tax)", "setup": "3-6 days, ~$1,300", "annual": "~$925+ (more with substance)"},
    {"jurisdiction": "Wyoming (US)", "company_tax": "0% state; US federal applies (pass-through)", "personal_tax": "0% state income tax", "setup": "~1 day, ~$100 + agent", "annual": "~$60 + agent"},
    {"jurisdiction": "Dubai / UAE free zone", "company_tax": "0% on qualifying income, else 9%", "personal_tax": "0%", "setup": "days-weeks, ~$3k-$15k", "annual": "renewal ~$3k-$10k+"},
    {"jurisdiction": "Panama", "company_tax": "0% foreign income; 25% local", "personal_tax": "0% foreign income (territorial)", "setup": "~1-2 wks, ~$1k-$2k", "annual": "~$300+ franchise tax"},
    {"jurisdiction": "Bahamas", "company_tax": "0% (15% only for MNEs over EUR750M)", "personal_tax": "0%", "setup": "~1-2 wks, ~$1k+", "annual": "~$1k+"},
    {"jurisdiction": "Puerto Rico (Act 60)", "company_tax": "4% export-services", "personal_tax": "0% to 4% on cap gains/div/int for new applicants from 2026", "setup": "weeks + decree", "annual": "decree + filing fees"},
    {"jurisdiction": "Nevis", "company_tax": "0% on foreign income", "personal_tax": "0% on foreign income", "setup": "~1-2 days, ~$1k-$1.5k", "annual": "~$220+ govt"}
  ]
}
```

| Jurisdiction | Asset protection | Reputation & banking | Best for | Standout risk |
| --- | --- | --- | --- | --- |
| **Próspera** | No local case law, but the code **imports Delaware common law (30 Nov 2018) as gap-filler** + Restatement of Trusts Third; series trusts. **Enforcement abroad is the untested part** | New/niche; fintechs **plus** real banks (Towerbank has an official onboarding path) | Cheap fast online entity; crypto/biotech founders on the ground | Framework repealed + ruled unconstitutional; arbitration pending |
| **Cayman** | Strong, mature case law | Top-tier; the fund/VC standard; heavy KYC | Funds, holding cos, institutional capital | Cost + substance rules |
| **Wyoming** | Excellent (charging-order, privacy) | US-solid; easy Stripe/banking | Non-US founders wanting a US entity | US filing (Form 5472); US-source income taxed |
| **Dubai / UAE** | Good | Excellent; a real global hub; ~140 treaties | Relocators wanting 0% + substance + lifestyle | Substance + audit to keep 0%; setup cost |
| **Panama** | Good (foundations) | Mixed (past grey-lists); improving | Territorial-tax relocators, LATAM base | Income must stay genuinely foreign-source |
| **Bahamas** | Good | Decent; conservative banking | 0%-tax lifestyle near the US | Cost of living; banking KYC |
| **Puerto Rico** | Moderate | US system; US banking | **US citizens** seeking legal low tax without expatriating | Must truly relocate (183 days); rising IRS scrutiny |
| **Nevis** | **Best-in-class** (LLC/trust) | Weak "offshore" label; hard banking | Pure asset protection, lawsuit shielding | Banking difficulty; perception |

### 13.1 Decision shortcuts

- **US citizen wanting lower tax:** Próspera usually does **not** help (worldwide taxation; lump-sum closed to them). **Puerto Rico Act 60** is normally the answer — but you must genuinely move. Wyoming for a clean US operating entity.
- **EU/Polish resident who stays home:** the entity's location rarely fixes home tax (CFC + management rules). Próspera or Cayman only help with real relocation or substance.
- **Wants to relocate to 0% + lifestyle + credibility:** **Dubai** is the benchmark Próspera is chasing — more expensive, far more proven.
- **Territorial relocation, LATAM time zone, lower cost:** **Panama**.
- **Pure asset protection:** **Nevis** (or Wyoming for US persons).
- **Funds / raising institutional money:** **Cayman**, full stop. Próspera lacks the track record investors expect.
- **Crypto or biotech founder who will spend real time on Roatán and accepts the legal risk:** **Próspera** is genuinely attractive on price, speed and flexible regulation.

### 13.2 Where Próspera wins and loses

**Wins:** cheapest and fastest entity setup of the group · the **only** one offering "choose your own regulation" plus the regulatory-insurance model · crypto-native (Bitcoin unit of account) · a strong lifestyle/community pull · the **AI agent sandbox roadmap**, which no other jurisdiction offers · **cheap labour** (~$1,500/month for a mid-level engineer).

**Loses:** legal certainty (the big one) · banking depth and reputation · track record for funds or institutional capital · asset-protection case law (Nevis, Cayman and Wyoming have decades) · **the SJBEC utility monopoly with revenue-linked pricing, which has no Cayman/Wyoming/Dubai equivalent.**

### 13.3 Residency-programme comparison (vendor-supplied — verify before quoting)

Nomad Layer markets Próspera against these. **These are a vendor's selling points, not verified figures.** `[CLAIM — unverified]`

| Program | Setup | Annual | Min. presence |
| --- | --- | --- | --- |
| Próspera | $0 | $5,000 flat | 7–90 days/yr |
| Antigua & Barbuda | $3,000+ | $20,000 | 30 days/yr |
| Paraguay | $5,000+ | Territorial | two visits |
| Cyprus non-dom | $10,000+ | 2.65% health levy | 60 days/yr |
| UAE | $25,000+ | 9% corporate | 90 days/yr |

---

## 14. CRITICISM, DEBATE AND PUBLIC SENTIMENT

> Próspera is genuinely polarising: tech and libertarian circles love it; many Hondurans, academics and rights groups oppose it. **A knowledge site that presents only one pole will be read as an advocacy site.** Present both, sourced.

### 14.1 Supportive voices

- **High-profile tech investors.** Balaji Srinivasan (*"crypto, bio, robo… not San Francisco"*), Coinbase's **Brian Armstrong** (invested Jan 2025), and **Tim Draper** (*"best place to do business on the planet… the next Dubai"*). `[CLAIM — via prospera.co]`
- **Astral Codex Ten — "Prospectus on Prospera"** (Scott Alexander): a long, broadly sympathetic but balanced outsider analysis. **The best fair primer to send a curious reader.**
- **Mises Institute — "Visiting the Free City of Prospera"**: positive libertarian travelogue.
- **Common themes:** fast setup, low tax, a smart and engaged community, genuine biotech and crypto activity, real building happening.

### 14.2 Critical voices

- **Honduran sovereignty and democracy.** The core objection: a private entity exercising governmental powers over Honduran territory is undemocratic and unconstitutional — the view the Supreme Court endorsed in 2024. (International Relations Review; Contra Corriente.) `[INDEPENDENT]`
- **Land and local community.** The fishing village of **Crawfish Rock** has felt pressured; locals fear losing land and influence. Próspera counters that all land is voluntary and expropriation is barred. `[INDEPENDENT]` vs `[CLAIM]`
- **Public services strain.** Critics say Próspera's growth strains Roatán's roads and police while its taxes are reinvested inside the zone rather than into shared local services. *(Próspera says it transfers 12% of its tax collection to national and municipal government.)* `[INDEPENDENT]` vs `[CLAIM]`
- **Labour and safety.** Concern that regulatory autonomy can expose workers; **a worker died in a 2024 construction accident at the Duna Residences tower.** `[INDEPENDENT]`
- **Human Rights Watch (World Report 2025)** and a **US House Judiciary** document (*"How a Start-Up Utopia Became a Nightmare for Honduras"*) reflect the critical framing reaching Washington. `[INDEPENDENT]`
- **Indigenous territorial rights.** **OFRANEH** warns of Garífuna displacement along the coast where Próspera is expanding; the Garífuna hold **four favourable Inter-American Court judgments** on territorial rights and prior consultation. `[INDEPENDENT]`
- **Oxfam Honduras and ERIC-SJ** remain opposed.
- **"A private city suing a poor country."** The optics of the original **$10.8B** claim (~2/3 of Honduras's annual budget) draw heavy criticism.
  - ⚠️ **Important correction to publish alongside this:** the claim was **cut to ~$1.63B** in the October 2025 Memorial, and **Honduras's own PGR confirmed it publicly on 22 October 2025**, calling it an 85% reduction. **Most critical coverage still runs the $10.8B figure. Quoting $10.8B in 2026 is simply out of date.** `[OFFICIAL — PGR Honduras]`

### 14.3 Local Honduran opinion is mixed, not monolithic

Some Roatán residents welcome the jobs and investment; others worry about land, sovereignty and unequal benefit. Próspera highlights 3,400+ local jobs and wages 25%+ above minimum (median reported ~$1,582/month in 2023). `[CLAIM]`

### 14.4 How to handle the debate editorially

- If a reader arrives **bullish** (from Balaji or ACX): validate the upside, then make sure they have internalised the legal-status risk and the banking friction.
- If a reader arrives **sceptical** (from HRW or Contra Corriente): separate the *political and ethical* controversy from the *practical* question of whether a specific plan is safe and useful. Both can be addressed honestly.
- Either way, **point to primary sources and the risk section** rather than to marketing or hit pieces.

---

## 15. FAQ — website-ready answers

```json
{
  "faq": [
    {
      "q": "What is Próspera, in one line?",
      "a": "A private-governance special economic zone in Honduras (mainly on Roatán island) with its own low-tax, business-friendly rules and online company setup."
    },
    {
      "q": "Is it a country?",
      "a": "No. It is a zone inside Honduras. Honduras keeps sovereignty, criminal law, defence, borders and citizenship. Próspera writes its own commercial, civil, labour, tax and regulatory law."
    },
    {
      "q": "How low is the tax really?",
      "a": "About 1% effective on company gross revenue, about 5% on personal income (less in practice - an $8,000 allowance shelters roughly the first $16,000 of gross), a 2.5% sales tax, and a 1% land tax that is currently suspended. No wealth, inheritance or payroll tax. Long-term capital gains are outside the charge, though active traders including crypto traders should not assume 0%, and there is a ~1% withholding on dividends, interest, royalties and rent. Crucially, this is only the tax INSIDE the zone."
    },
    {
      "q": "Will it cut my taxes if I keep living in my home country?",
      "a": "Usually not by itself. Your personal tax residency and your country's CFC rules typically still apply. Every EU country has CFC rules. It helps most if you genuinely relocate or build real substance in the zone."
    },
    {
      "q": "I'm a US citizen - does this lower my taxes?",
      "a": "Generally no. The US taxes worldwide income and the $5,000 lump-sum option is closed to US persons in practice. Puerto Rico Act 60 is usually the better US route."
    },
    {
      "q": "How fast and how much to set up a company?",
      "a": "About 24 hours, online. The honest cost is a stack, not a single fee: $150 to register, $130/year entity residency, $99-250/year for a required registered agent, $100/year annual report from year two, and $260/year liability insurance if you want full-Resident status. Próspera's own range is '$279 to $790+.' Through a provider, budget ~$650-950 to start and ~$750/year."
    },
    {
      "q": "Can my Próspera company get a bank account?",
      "a": "Yes, and better than the public sites suggest. Fintechs (Slash, OneSafe) plus real chartered banks - Towerbank has an official Próspera onboarding walkthrough, Arrival Bank is available, and Banpais has run on-site account openings. Documentation burden is heavier at the real banks. One genuine open gap: taking international credit-card payments from a Próspera entity is unresolved."
    },
    {
      "q": "Is it a tax haven? Is it secret?",
      "a": "No secrecy. Rules, council minutes and filings are public, and Honduras participates in FATCA with the US. It is a transparent low-tax zone, not a hiding place. One factual nuance: Honduras is not a CRS participating jurisdiction, so non-US account data is not automatically exchanged - but targeted information requests are still possible, and CFC rules push taxation home regardless."
    },
    {
      "q": "Is it legal? Is it going to disappear?",
      "a": "This is the real question. Honduras repealed the zone law in 2022 and its top court ruled the framework unconstitutional in 2024. Próspera disputes both, still operates, and is in international arbitration. Two things cut in its favour: the 2022 repeal was never constitutionally completed (it needed a second ratifying vote in the following session that never happened), and the pro-business Asfura government finished rejoining the World Bank's investment court in July 2026, effective 16 August 2026. But no law restoring the zone framework has been found in any public reporting (searched repeatedly in Spanish and English through July 2026 - a negative, not a certainty), and the 2024 ruling still stands. Treat it as promising but uncertain."
    },
    {
      "q": "What's the risk I'd actually notice day to day?",
      "a": "Not the constitution - the municipality. In October 2024 the Alcaldía de Roatán locked Próspera's gates with armed police over a disputed local tax bill of about $480,000, and it also disputes Próspera's operating, construction and environmental permits. That mayor was re-elected in December 2025. No tribunal has ruled any property expropriated, but friction with the surrounding municipality is a live, recurring condition."
    },
    {
      "q": "Can I lock in the tax rates?",
      "a": "Próspera offers legal-stability agreements that lock your taxes and rules, and the Charter caps the rates (income 10%, VAT 5%, land 2.5%). The catch: the ultimate guarantor is Honduras, whose courts are challenging the framework. Read what the agreement actually commits."
    },
    {
      "q": "Is it good for crypto?",
      "a": "Yes on the ground. Bitcoin is marketed as an official unit of account, accounting and tax can be paid in BTC, there are two Bitcoin ATMs at Duna Tower, a Bitcoin-backed lending and OTC shop, and a running merchant list including a law firm. But active crypto traders should not assume 0% capital gains, and your home country's crypto tax still applies."
    },
    {
      "q": "Should I buy property there?",
      "a": "Higher risk than forming a company, because land cannot be moved if the zone winds down. Three specific things first: you must hold Próspera residency to own or even lease; title registered with Próspera is NOT automatically recognised by Honduras's national registry, and Próspera's own guidance says perfecting it may require litigation against the national registrar; and if the framework ever unwound, foreign individuals fall back on a national rule (Decree 90-90) reported to cap them at roughly 3,000 m² and one property - a figure that has not been verified against primary law and should be checked with a Honduran lawyer before relying on it."
    },
    {
      "q": "Can I visit? Do I need an invitation?",
      "a": "You can just visit. Próspera has its own land and security but remains part of Roatán - anyone on the island can visit with a visitor pass. You do not need a conference. You also do not need to buy any paid membership to join the community chat; the Infinita Builders' Hub on Telegram is open to prospective members."
    },
    {
      "q": "How do I get there?",
      "a": "Daily direct flights from Miami, about 2 hours, on American and United. Roatán's international airport is about 20 minutes from the zone."
    },
    {
      "q": "What does it cost to live there?",
      "a": "Our estimate for a modest single-person setup is roughly $1,600-2,800/month all-in, with utilities as the wild card. A hostel bed inside the zone is $23/night; a Duna unit is realistically $800-1,500+/month. Meals out run $8-15. Weekly cleaning is $79/month. Nobody has published a monthly price for a family-sized villa - that is a real gap."
    },
    {
      "q": "Who is the largest employer?",
      "a": "Próspera itself - the zone administration. After that: the utility (SJBEC), St. John's Bay Development Company, Próspera Hospitality (Las Verandas), Wohlstand Security, and a handful of schools and startups."
    },
    {
      "q": "What do jobs pay?",
      "a": "The only published benchmark is a mid-level software engineer at SJBEC (May 2026): $1,500/month base plus housing. That is far below US/EU rates and roughly Latin-American market. Labour is genuinely cheap - a real cost advantage for an operating company."
    },
    {
      "q": "Is there a casino or licensed gambling?",
      "a": "No. Próspera has no gaming framework and no gaming licence, and gaming is not one of its eleven regulated industries. Honduran national criminal law still applies inside the zone, and Article 387 of the Penal Code punishes running an unauthorised game of chance with 2-4 years. Players are not criminalised. Regular no-rake poker nights run in the zone; a raked poker room or an online platform would be a different and much riskier proposition."
    },
    {
      "q": "Has real estate there been tokenized?",
      "a": "Partly, and less than the headlines suggest. In 2021-22 the Delaware developer ran a $100M security token offering with Securitize - but investors got equity in the developer, not title to any specific property. The regulator also authorised PTC tax-credit tokens in 2023, which are not securities and not real estate. One site (Fracta.city) markets fractional tokens in Duna units, but its own property page shows zero tokens minted as of August 2026. Nothing has ever put a Próspera land title on a blockchain."
    },
    {
      "q": "How many businesses are actually there?",
      "a": "Próspera's own websites give three different numbers - 200+, 250+, and 500+. The defensible line is 'roughly 250 registered entities, self-reported.' Registration costs only a few hundred dollars a year, so registrations are a poor proxy for real activity, and nobody has counted how many have employees or revenue."
    },
    {
      "q": "What is the honest one-sentence summary?",
      "a": "It is a real, working, very low-tax zone with a genuine legal cloud over its long-term future - good for someone who accepts that risk, sizes their exposure to it, and has a plan B."
    }
  ]
}
```

---

## 16. WHAT WE DON'T KNOW — publish this section

> **Publishing open questions builds more trust than pretending completeness.** Every item below is genuinely unresolved as of 3 August 2026. If a site fills them in with plausible-sounding content, it becomes part of the misinformation problem it is trying to solve.

### 16.1 Open questions by topic

```json
{
  "open_questions": {
    "property": [
      "⭐ HAS THE ASFURA GOVERNMENT CHANGED THE NATIONAL PROPERTY INSTITUTE'S POSTURE on ZEDE title transfers? The highest-value unanswered question about Próspera property. The Help Center quote blaming non-cooperation dates from June 2024 and names an administration that is gone.",
      "How many parcels have actually completed the national-registry transfer, vs sitting only in the Próspera registry?",
      "Is the 3D severed-rights system live for anyone yet, or still purely prospective?",
      "What do impact fees and required PTC/(e)Residency purchases actually cost on a real land-incorporation deal?",
      "Does anyone write title insurance on Próspera property, and at what premium?",
      "What is the real resale market - any arm's-length secondary sales?",
      "Price points per m², residences vs raw land. No reliable non-marketing dataset exists.",
      "Is ordinary mortgage financing available at all?"
    ],
    "tax_and_investment": [
      "⭐ Is the ~1% withholding on dividends/interest/royalties/rent a FINAL tax or CREDITABLE? This decides whether the marketing line 'no additional taxes on dividends' is accurate.",
      "How is the capital/revenue line drawn in practice, especially for active crypto traders?",
      "The 'Regulation Establishing the Lump Sum Tax Regime' has never been obtained - so the 90-day ceiling and other details remain unconfirmed.",
      "Is the Labor Benefit Fund contribution 8% or 10%? Próspera's own documents disagree (and a third figure, 10-25%, appears to be a conflation with the minimum-wage premium).",
      "Is the entity Annual Report annual or biennial? Two Próspera pages disagree.",
      "Is the 'most-favoured-jurisdiction' tax petition actually live and used?"
    ],
    "financial_services": [
      "How many RIFC licences are actually live, by category? Nobody has counted the registry.",
      "Has anyone obtained MFNT (Most Favored Nation Treatment), and what did they get matched to?",
      "Is the PTC program still current? RFSA AA-19 legal stability expired 31 Dec 2025. It is still listed live and unqualified on the rules index - probably operative, unconfirmed. (The supposed replacement, AA No. 25, has never been published - the index stops at No. 23.)",
      "What is the real secondary market for PTCs - volume, spread, typical holder?",
      "Is the Agreement of Coexistence accepted as proof of address by BANKS, or only by crypto platforms?",
      "Which exchanges besides Bybit have onboarded Próspera entities?",
      "⭐ CAN A PRÓSPERA ENTITY GET A CARD-ACQUIRING / MERCHANT ACCOUNT? Asked by a working founder in July 2026 and never answered."
    ],
    "on_the_ground": [
      "What is SJBEC's published tariff, and is the tax-return-linked tiering documented anywhere? No rate schedule has been located.",
      "What are actual Duna Tower monthly rents by unit type? And what does a family-sized villa cost per month? The single biggest hole in the cost-of-living picture.",
      "Named internet providers and benchmarked speeds - genuinely absent from all source data.",
      "Realistic current end-to-end timeline for a Honduran residency card.",
      "Is the measles vaccination requirement enforced on inbound travellers in practice?",
      "Has any resident actually run a Próspera tribunal small claim to completion, and what happened?",
      "Fastest route from the Roatán cruise port to Próspera - asked, never answered.",
      "Is anyone actually building the formal physical-address / registered-mail system residents say is being 'advanced'?"
    ],
    "municipal_conflict_HIGHEST_VALUE": [
      "⭐ WHAT HAPPENED AT THE ~14 AUGUST 2026 DEADLINE in the municipal requerimiento? Did anyone appear at the Palacio Municipal? Was any business closed? Was the Denuncia actually filed with the Fiscalía? This converts a threat into a data point and is the highest-value open item in the whole file.",
      "⭐ IS THE MUNICIPAL LANDFILL BAN ACTUALLY BEING ENFORCED? It is the only clause with immediate effect and it needs no court. Ask a Duna or Pristine Bay operator whether waste collection changed after 30 July 2026. Cheap to check, and it is the real bite in the notice.",
      "How did Próspera's entity registry reach the Municipality? The list contains a TEST Prospera Entity LLC row, so it looks like a database dump rather than fieldwork. Bears on whether this is routine enforcement or something else.",
      "Pages 4 and 5 of the Cédula de Requerimiento are missing (we hold 1, 2, 3 and 6 of 6), covering roughly entries 146-249 - about 104 company names. UNTIL THEY ARE OBTAINED, NEVER STATE THAT A COMPANY IS ABSENT FROM THE LIST.",
      "Confirm the true row count: the numbering jumps 264 to 267, so it is likely 265, not 267.",
      "Is the October 2024 escalation (closed gates, suspended operations) still on the table under the new municipal administration? One named resident describes the current one as having a more constructive posture - a single impression, not a documented policy change - and nobody has asked Colindres directly what changed."
    ],
    "governance_and_law": [
      "What is the escalation route to Honduran NATIONAL police for a serious crime in Próspera, and does the contracted private security agency have any power of detention? A private contractor is not a substitute for a public force on either point, and nothing in the record answers it.",
      "What happens on a FAILED e-Residency scan at a zone or building entrance? The scan is per-entry and the credential is the access token, but no source says what the failure mode is.",
      "Is 'Made in Próspera ZEDE' permitted on product labels, and is the dual chevron trademarked? Two residents assumed yes; nobody from Próspera answered. Affects every resident business printing packaging.",
      "Has anyone actually used the tokenization machinery in section 7.11 - the $100 private-fund notice filing, the $2,500 trading-venue licence, UCC Article 12? No evidence anyone has.",
      "Does Próspera take the position that a Próspera business permit constitutes 'autorización legal' for the purposes of Art. 387 of the Honduran Penal Code? Untested.",
      "Does the AI agent sandbox have a statute behind it, or is it still a proposal with API docs?",
      "How many of the '250+ registered companies' have any employees or revenue in the zone?",
      "What treaty, if any, protects a non-US investor? CAFTA-DR protects US investors; the position for a Polish or German investor is unclear.",
      "Whether the reconstituted Supreme Court will take up the 2024 ruling - possibly a faster route than legislation."
    ]
  }
}
```

### 16.2 ⚠️ The fabrication warning — read before adding any "community knowledge"

**The prospera.place launch tranche contains fabricated filler rows.** Twelve are confirmed fake. **Three of them made it into an earlier draft of this research base before being caught and removed the same day.**

The 12 confirmed fakes are generic community filler: newcomer tips, power outages, internet providers, coffee spots, hiking groups, a book exchange, town halls, first aid, water maintenance, cleanup day, recycling bins. **They read exactly like plausible resident knowledge, which is why they got through.**

**Exclusion filter — treat a source row as fabricated if:**

- The author is one of: `Tom B.` · `Elena P.` · `James W.` · `Lucas M.` · `Sara K.` · `David R.` · `María V.` · `Governance Office` · `Health & Safety Team` · `Infrastructure Team` · `Sustainability Committee` · `Próspera Community Board`
- The website is a `.example` domain, or the phone looks like `50499990000`
- The name is literally `Event test`
- **General rule:** created before **2026-04-11**, no provenance, zero comments, and a person-shaped author → treat as demo unless a real contact detail proves otherwise

**Everything from 2026-04-11 onward is real.** Pre-April rows from *named businesses* (Bitcoin Center, Amity Age, The Scuba Shop, Green Cilantro, Próspera entities) are also real — the filter targets person-shaped and committee-shaped authors with no contact details.

**The standing lesson for anyone building a Próspera knowledge site: an on-the-ground claim with no name, price or contact attached needs a provenance check before it gets published.**

### 16.3 Other verification traps documented in this research

- **Do not declare a source "wrong" before checking whether two sources describe the same obligation.** The "April 1 vs April 30" episode: both dates were real, for two different filings.
- **Do not double-count costs.** "$280 setup" and "$279/year" are the same number.
- **Honduras has a unicameral Congress.** Search results about a Honduran "Senado" or "Cámara de Diputados" voting on anything are Dominican Republic or Chile.
- **Several unrelated companies are called "Prospera"** (Prospera Energy, Prospera Real Estate Collective, Prospera Real Estate Group). Search results mix them freely.
- **The $10.775B arbitration figure is out of date.** It is ~$1.63B since October 2025.
- **Praxis Society raised $525M, not $900B** — a number that circulates online.
- **The e-Governance fee is $130/year, not $1,300** — it was reduced in September 2024 and stale pages still show the old figure.
- **The RFSA website is footer-dated © 2022–2023.** Do not assume anything on it is current without checking.
- **"RFSA Administrative Action No. 25" does not publicly exist.** It circulates as "RIFC Financial Market Rules, 27 Sep 2025," but Próspera's official rules index stops at **No. 23**. This file cited it in its first revision and was wrong. **Do not cite it.**
- **"Honduras versus Próspera" is the wrong frame** — see §0.2 rule 6. Municipal and national are different layers pointing in opposite directions.
- **Merchant lists decay fastest of anything on this page.** 2Cans was recorded as a Bitcoin merchant and is not one — it takes $LIVES or PayPal. Date every merchant claim.
- **A "not yet" fact expires.** This research base recorded "Honduras has NOT rejoined ICSID, it has only signed" — correct in June 2026, obsolete by 17 July 2026. Date every status claim.

---

## 17. SOURCE REGISTER — where this knowledge comes from

### 17.1 Primary and first-party sources

| Source | What it is best for | Note |
| --- | --- | --- |
| **Próspera 2019 Tax Statute** (PDF/text) | The actual tax law — §7 source rules, §8 financial-services carve-out, §9 income-rights, §22 allowance, §43 foreign tax credit, §74 filing deadline, §78 MFNT, §97 extensions, withholding schedule | **Statute beats marketing.** Where a PDF and a web page disagree, the statute wins |
| **Próspera Help Center** (intercom.help) | *How does X actually work* — entity formation, property ownership, Towerbank onboarding, fees, deadlines | **First-party, operational, and more candid than the marketing site.** Check it first for process/fee questions |
| **pzgps.hn** | The full published rules index (600+ lines), regulated industries, applicable national legislation, registered entities | The canonical rulebook |
| **rfsa.hn** | Licence menu, laws, PTC program, RFSA leadership | ⚠️ footer-dated © 2022–2023 |
| **RFSA Administrative Action No. 19** (13 Mar 2023) | The PTC token rules; the securities/utility line; the §8 petition route | The only worked example of the RFSA authorising a token |
| **prospera-sure.hn** | The public Próspera Property Registry (username/password: `public`) | Anyone can inspect registered properties |
| **eprospera.com / api-docs.eprospera.com** | The e-government portal; the AI agent API surface | |
| **prospera.co · prosperaglobal.com · blog.prospera.co · info.prospera.hn** | Marketing, case studies, announcements | `[CLAIM]` tier — the three sites disagree on headline numbers |

### 17.2 Independent and government sources

| Source | Why it matters |
| --- | --- |
| **US State Department, Report to Congress on United States Investment in Próspera ZEDE** (June 2026; an Aug 2025 edition also exists) | **The most authoritative non-party source available.** Origin of the "repeal was never ratified" finding, the "no expropriation found" finding, and the confirmation that the US is actively mediating |
| **ICSID / Jusmundi / italaw** — case ARB/23/2 | The arbitration docket. ⚠️ **italaw lags badly; check Jusmundi first** |
| **Procuraduría General de la República (PGR), Honduras** | Officially confirmed the claim cut from $10,775M to $1,630M (22 Oct 2025) |
| **Honduran Foreign Ministry (Secretaría de Relaciones Exteriores)** | The ICSID ratification deposit, 17 Jul 2026 |
| **Criterio.hn** | Hostile to Próspera, and therefore valuable — it independently corroborated the "repeal never ratified" point, and broke the STDC and political-normalisation stories |
| **PwC country summaries** | Honduras's zero-treaty status and lack of foreign tax credits |
| **Consortium Legal** (Jul 2026) | Honduran professional-class analysis of the ICSID return |
| **IISD / ITN** (Apr 2026) | Analysis of Honduras's deepened exposure from rejoining ICSID |
| **Human Rights Watch World Report 2025; US House Judiciary; Contra Corriente; OFRANEH; Oxfam Honduras; ERIC-SJ; WOLA; CEJIL** | The critical case |
| **enhancement.bio** (Anton Kulaga, Jul 2026) | The first outside catalogue of Próspera's biotech offering |
| **Astral Codex Ten, "Prospectus on Prospera"** | The best balanced outsider long-read |
| **Fortune** (26 Jul 2026) | Confirmed the Network School's exit from Johor — the closest comparator for host-state political risk |

### 17.3 Community / resident sources

- **prospera.place (Agora)** — 554 dated community listings (Feb–Jul 2026): events, goods, services, jobs, forum threads, plus comments. **The listing body is the question; the comments are the knowledge** — three threads were wrongly called "unanswered" on a first pass because only the bodies were read. Read with the fabrication filter in §16.2.
- **Infinita Builders' Hub** (Telegram) and *Prosperians on Ground* (WhatsApp) — open community channels.
- **The Prosperity Press** (theprosperitypress.com) — monthly newsletter, a good running record.

### 17.4 Commercial providers (treat as `[CLAIM]`)

**ProspIn** (prospin.io) — the official incorporation partner, with direct API integration. **Nomad Layer** (nomadlayer.com) — sells the $5,000 lump-sum residency and says it authored the regime. **AmityAge** — Bitcoin financial services. **Tugliani & Tugliani** and **Cesar Gonzales** — law. **onesafe.io** — banking. All have commercial incentives; their figures are selling points, not audits.

---

## 18. CLOSING NOTE FOR THE WEBSITE BUILDER

The strongest thing this material can do is be **the place people go when they want the real answer instead of the pitch or the takedown.** That means:

1. **Lead with the practical.** "How much does a lunch cost, how do I get mail, what does the utility bill do" is content nobody else has and everybody wants. The legal and tax material is available elsewhere; the resident knowledge is not.
2. **Date everything.** A price without a date is a liability.
3. **Show the tier.** "Próspera says" and "a resident reported" and "the US State Department found" are three different kinds of fact. Let the reader see which they are reading.
4. **Publish the open questions.** §16 is a feature, not an admission.
5. **Never resolve an unknown by writing something plausible.** The fabricated-listings incident in §16.2 is the cautionary tale, and it happened inside this very research base.

---

## 19. WHAT CHANGED IN REVISION 2 (same day)

The research base was updated after the first compile. Everything below is new or corrected — worth reading if you already started building from revision 1.

| # | Change | Where |
| --- | --- | --- |
| 1 | ⭐⭐ **The municipal-vs-national framing rule.** Never write "Honduras versus Próspera" — the municipality is hostile, the national government is currently friendly, and collapsing them produces a wrong risk model in both directions | §0.2 rule 6, §3.1 |
| 2 | ⭐ **The 30 July 2026 municipal requerimiento** — a primary document. Permits demand, not a tax bill; **267 per the document, likely 265 rows** — and formally notified to only one; 15-day deadline ≈ 14 Aug; threatens closure and a criminal *Denuncia*; **already bars the listed companies from the municipal landfill** | New §3.6 |
| 3 | Colindres's response, his *"stickers on the front door"* line, and the *"a risk that everyone here has contractually assumed"* quote — which reframes municipal risk as a **known, recurring, disclosed cost** rather than a tail risk | §3.6 |
| 4 | ⭐⭐ **The tokenization machinery already exists** — UCC Art. 12, Art. 8, Art. 9, URPERA, series trusts, all adopted in the Roatán Common Law Code; a **$100** private-fund notice filing and a **$2,500** trading-venue licence. And nobody has used any of it | New §7.11 |
| 5 | ⚠️ **Correction: RFSA Administrative Action No. 25 has never been published.** Revision 1 cited it. The official index stops at No. 23 | §7.10, §9.3, §16.3 |
| 6 | **AA-19 (the PTC rules) is probably still operative** — listed live and unqualified on the rules index, though its legal-stability waiver expired 31 Dec 2025 | §4.12, §7.10 |
| 7 | ⭐ **ZEDE invoices carry no RTN and no CAI** — the first documented, customer-facing downstream consequence of fiscal separation. Plus the wrinkle: the same operator holds a Honduran RTN | New §8.6 |
| 8 | ⚠️ **Correction: 2Cans does not accept Bitcoin** — $LIVES or PayPal only. It was on revision 1's BTC merchant list | §8.4 |
| 9 | Crypto is the operator's **advertised no-fee rail for rent** — stronger evidence for "Bitcoin rails are real" than any merchant list | §8.6 |
| 10 | ⭐ **Policing: a policing *function* without a police *force*** — Law Enforcement Committee directs, contracted private security performs, no chief, no sworn police. Plus the 2Cans shoplifting/AI-surveillance data point | New §10.11 |
| 11 | **e-Residency is scanned on every entry** to the zone and to buildings; every visitor needs a permit number from `prospera.co/visitor-pass` | §10.11 |
| 12 | The **official ZEDE mailing address format**, published by the operator | §10.7 |
| 13 | Utilities run through a **separate portal** (`portal.utilities.hn`, `support@sjbec.com`) from rent (DoorLoop) — two bills, and the escalation route residents lacked | §10.1 |
| 14 | New prices: **pool access $75/month** via ProsperaSub (there is **no day pass** at Las Verandas), water jugs $3/$5, a **$150** standard penalty fee | §10.3 |
| 15 | **Pets are owner-only at Duna**, 25 lb limit — a hard constraint for relocating renters | §10.2 |
| 16 | **A 47-person family cohort** (24 adults, 23 children) completed a month-long residency — the first real evidence on Próspera as a family destination | New §11.6b |
| 17 | **Network School's next host is Kazakhstan**, probably Almaty, probably October | §3.14 |
| 18 | City Taxi / "CityFlow" are **one operator**, `+504 3388-4358` | §10.8 |
| 19 | **Six new open questions on the municipal conflict** (a new top-priority block) plus three on governance — policing escalation and detention powers, the failed-scan failure mode, and whether anyone has ever used the tokenization machinery | §16.1 |

---

**Compiled 2026-08-03 from the "Prospera knowledge" research base · revision 2 same day. Not legal, tax or investment advice.**
