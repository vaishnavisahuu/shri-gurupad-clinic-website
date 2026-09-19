(() => {
  const removeExtraSpecialistSection = () => {
    document.querySelectorAll("section").forEach((section) => {
      if (section.classList.contains("restored-clinic-intro")) return;
      const heading = [...section.querySelectorAll("h1, h2, h3, h4")].find((element) =>
        element.textContent.trim().toLowerCase() === "meet your ayurvedic specialist"
      );
      if (heading) section.remove();
    });
  };

  const addTreatmentsButton = () => {
    const grid = document.querySelector(".treatments-grid");
    if (!grid || document.querySelector(".show-all-treatments")) return;
    const button = document.createElement("a");
    button.className = "show-all-treatments";
    button.href = "/treatments.html";
    button.textContent = "Show all treatments";
    grid.insertAdjacentElement("afterend", button);
  };

  const RootCauseCard = () => `
    <section class="root-cause-card" aria-labelledby="root-cause-heading">
      <div class="root-cause-icon" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <path d="M12 30h24M16 30c0 5 3.5 8 8 8s8-3 8-8M18 30V19h12v11M21 19v-4h6v4M10 30h28" />
          <path d="M32 12c4 1 6 4 5 8-4 0-7-2-7-6 0-1 1-2 2-2Z" />
        </svg>
      </div>
      <div class="root-cause-copy">
        <h2 id="root-cause-heading">We look beyond the symptoms to understand the root cause.</h2>
        <p>With Panchkarma therapies, we help restore balance, support natural healing, and guide your body toward lasting wellness.</p>
      </div>
      <span class="root-cause-leaf root-cause-leaf-top" aria-hidden="true"></span>
      <span class="root-cause-leaf root-cause-leaf-bottom" aria-hidden="true"></span>
    </section>`;

  const PanchkarmaJourney = () => {
    const treatments = [
      { number: "01", name: "VAMANA", subtitle: "Therapeutic Emesis", description: "A traditional Panchkarma stage presented within a carefully guided Ayurvedic therapy plan.", image: "/images/gurupad_ai_2.jpeg" },
      { number: "02", name: "VIRECHANA", subtitle: "Therapeutic Ayurvedic Cleansing", description: "A traditional Ayurvedic cleansing stage included within a personalized Panchkarma path.", image: "/images/gurupad_ai_3.jpeg" },
      { number: "03", name: "NASYA", subtitle: "Nasal Ayurvedic Therapy", description: "A concise introduction to Nasya as part of a carefully guided traditional therapy plan.", image: "/images/gurupad_ai_4.jpeg" },
      { number: "04", name: "BASTI", subtitle: "Medicated Ayurvedic Therapy", description: "A structured medicated Ayurvedic therapy stage, guided around individual wellness needs.", image: "/images/gurupad_ai_5.jpeg" },
      { number: "05", name: "ABHYANGA", subtitle: "Ayurvedic Oil Massage", description: "A guided Ayurvedic oil massage presented in a calm, traditional therapy setting.", image: "/images/one.jpeg" },
      { number: "06", name: "SHIRODHARA", subtitle: "Ayurvedic Oil Flow Therapy", description: "A focused Ayurvedic oil flow therapy stage delivered with quiet attention and care.", image: "/images/two.jpeg" },
    ];
    const section = document.createElement("section");
    section.className = "panchkarma-journey";
    section.id = "panchkarma-journey";
    section.setAttribute("aria-labelledby", "panchkarma-journey-heading");
    section.innerHTML = `
      <div class="panchkarma-journey-inner">
        <div class="panchkarma-journey-header">
          <p class="panchkarma-journey-eyebrow">OUR PANCHKARMA JOURNEY</p>
          <h2 id="panchkarma-journey-heading">Traditional Therapies. Personalized Care.</h2>
          <p>Discover our approach to Panchkarma through carefully guided Ayurvedic therapies designed around individual wellness needs.</p>
        </div>
        <div class="panchkarma-timeline">
          <div class="panchkarma-timeline-line" aria-hidden="true"></div>
          ${treatments.map((treatment) => `
            <article class="panchkarma-stage" data-stage-number="${treatment.number}">
              <div class="panchkarma-stage-marker">${treatment.number}</div>
              <div class="panchkarma-stage-image-wrap">
                <img class="panchkarma-stage-image" src="${treatment.image}" alt="${treatment.name} — ${treatment.subtitle}" loading="lazy" />
              </div>
              <div class="panchkarma-stage-copy">
                <p class="panchkarma-stage-number">${treatment.number}</p>
                <h3>${treatment.name}</h3>
                <h4>${treatment.subtitle}</h4>
                <p>${treatment.description}</p>
                <a href="#contact">Explore Treatment <span aria-hidden="true">→</span></a>
              </div>
            </article>`).join("")}
        </div>
      </div>`;
    return section;
  };

  const addPanchkarmaJourney = () => {
    const button = document.querySelector(".show-all-treatments");
    if (!button || document.querySelector(".panchkarma-journey")) return;
    const section = PanchkarmaJourney();
    const journeyHeader = section.querySelector(".panchkarma-journey-header");
    journeyHeader.innerHTML = `
      <img class="panchkarma-journey-heading-image" src="/images/journey-heading.png" alt="The Five Purifications, showing Vamana, Virechana, Nasya Karma, Kati Basti, Abhyanga, Leech Therapy, and Shirodhara" />`;
    button.insertAdjacentElement("afterend", section);
    const stages = [...section.querySelectorAll(".panchkarma-stage")];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      stages.forEach((stage) => stage.classList.add("is-active"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-active");
      });
    }, { threshold: 0.42 });
    stages.forEach((stage) => observer.observe(stage));
  };

  const renderClinicIntro = () => {
    removeExtraSpecialistSection();
    const intro = document.querySelector(".restored-clinic-intro");
    if (!intro || intro.dataset.contentVersion === "requested") return Boolean(intro);

    intro.dataset.contentVersion = "requested";
    intro.innerHTML = `
      <div class="clinic-intro-inner">
        <div class="clinic-specialist">
          <div class="clinic-specialist-copy">
            <div class="clinic-card-brand">
              <p class="clinic-card-eyebrow">AUTHENTIC AYURVEDIC CARE</p>
              <p class="clinic-card-name">SHRI GURUPAD</p>
              <p class="clinic-card-type">MULTISPECIALITY CLINIC</p>
              <div class="clinic-card-mark" aria-hidden="true">⌁</div>
            </div>
            <div class="clinic-doctor-image">
              <img src="/images/doctor.jpeg" alt="Dr. Ashish Choyal in his clinic" />
            </div>
            <p class="clinic-card-specialist">Meet your Ayurvedic specialist</p>
            <p class="clinic-doctor-name">Dr. Ashish Choyal</p>
            <p class="clinic-credentials">B.A.M.S., M.D. (Panchakarma)</p>
            <p class="clinic-description">We provide authentic Ayurvedic treatments with a holistic approach to restore balance, relieve ailments and promote long-term wellness.</p>
            <h2>Care guided by experience and compassion.</h2>
            ${RootCauseCard()}
            <div class="clinic-education" aria-label="Dr. Ashish Choyal's education and clinic">
              <article class="clinic-education-item">
                <div class="clinic-education-icon" aria-hidden="true">🎓</div>
                <div>
                  <h3>Professor — R.N.K. Ayurved Medical College, Indore</h3>
                  <p>Teaching and practicing Ayurvedic medicine at one of MP's premier institutions</p>
                </div>
              </article>
              <article class="clinic-education-item">
                <div class="clinic-education-icon" aria-hidden="true">🌿</div>
                <div>
                  <h3>Founder — <strong>SHRI GURUPAD MULTISPECIALITY CLINIC</strong></h3>
                  <p>Established a center of excellence in Panchkarma in Madhya Pradesh</p>
                </div>
              </article>
            </div>
            <div class="clinic-cta-actions" aria-label="Profile and appointment actions">
              <a class="clinic-cta clinic-cta-profile" href="#about">Full Profile <span aria-hidden="true">→</span></a>
              <button class="clinic-cta clinic-cta-book" type="button">Book Now</button>
            </div>
          </div>
        </div>
      </div>`;
    return true;
  };

  const style = document.createElement("style");
  style.textContent = `
    .restored-clinic-intro { padding: 0 1.25rem clamp(4rem, 10vw, 6rem) !important; }
    .uploaded-gallery { padding-bottom: 0 !important; opacity: 0; transform: translateY(5rem); }
    .show-all-treatments { display: block; width: fit-content; margin: 1.5rem auto 0; padding: .75rem 1.2rem; border: 1px solid #174d36; border-radius: 999px; background: #174d36; color: #fff; font: 700 .78rem/1 Manrope, sans-serif; letter-spacing: .08em; text-decoration: none; text-transform: uppercase; transition: background .2s ease, transform .2s ease; }
    .show-all-treatments:hover { background: #b0802d; transform: translateY(-2px); }
    .treatment-card { width: 95% !important; min-height: 0 !important; justify-self: center; }
    .treatment-card [class*="image-frame"] { display: block !important; margin-bottom: 0 !important; aspect-ratio: 2.35 / 1 !important; }
    .treatment-card [class*="image-frame"] img { display: block !important; }
    .treatment-card-body { margin-top: 0 !important; padding: .45rem .8rem .7rem !important; }
    .treatment-card__head { display: none !important; }
    .treatment-card p { margin-bottom: .4rem !important; line-height: 1.4 !important; }
    .treatment-card .treatment-card__tags { margin-bottom: .45rem !important; }
    .clinic-intro-inner { position: relative; max-width: 52rem; margin: 0 auto; }
    .clinic-eyebrow, .clinic-type, .clinic-credentials { font-family: Manrope, sans-serif; font-weight: 800; letter-spacing: .2em; }
    .clinic-eyebrow { margin: 0 0 .65rem; color: #b0802d; font-size: .7rem; }
    .clinic-name { margin: 0; color: #174d36; font: 700 clamp(1.35rem, 3.5vw, 1.9rem)/1.1 "DM Serif Display", Georgia, serif; letter-spacing: .14em; }
    .clinic-type { margin: .45rem 0 1.8rem; color: #a17735; font-size: clamp(.68rem, 1.4vw, .82rem); }
    .clinic-divider { width: 5.5rem; height: 1px; margin: 0 auto 2rem; background: #c8ae7d; color: #a17735; font-size: 1.2rem; line-height: 1; }
    .clinic-specialist { padding-top: 0; text-align: center; opacity: 0; transform: translateY(5rem); }
    .clinic-doctor-image { width: min(100%, 18rem); margin: 0 auto 1.5rem; overflow: hidden; aspect-ratio: 4 / 5; border-radius: 10px; background: #e7dccb; box-shadow: 0 10px 24px rgba(88,63,27,.12); }
    .clinic-doctor-image img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center 58%; }
    .clinic-specialist-copy { padding: clamp(1.5rem, 4vw, 2.25rem); border: 1px solid rgba(161,119,53,.35); border-radius: 12px; background: linear-gradient(145deg, rgba(255,255,255,.78), rgba(244,236,223,.92)); box-shadow: 0 14px 30px rgba(23,63,56,.1); text-align: center; }
    .clinic-card-brand { padding-bottom: 1.25rem; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(161,119,53,.28); }
    .clinic-card-eyebrow, .clinic-card-type { font-family: Manrope, sans-serif; font-weight: 800; letter-spacing: .16em; }
    .clinic-card-eyebrow { margin: 0 0 .55rem; color: #b0802d; font-size: .64rem; }
    .clinic-card-name { margin: 0; color: #174d36; font: 700 clamp(1.25rem, 3vw, 1.7rem)/1.1 "DM Serif Display", Georgia, serif; letter-spacing: .12em; }
    .clinic-card-type { margin: .35rem 0 .65rem; color: #a17735; font-size: .65rem; }
    .clinic-card-mark { color: #b0802d; font: 1.25rem/1 Georgia, serif; }
    .clinic-card-specialist { margin: 0 0 .55rem; color: #b0802d; font: 800 .68rem/1.3 Manrope, sans-serif; letter-spacing: .16em; text-transform: uppercase; }
    @keyframes clinic-card-rise { from { opacity: 0; transform: translateY(5rem); } to { opacity: 1; transform: translateY(0); } }
    .clinic-specialist.is-visible, .uploaded-gallery.is-visible { animation: clinic-card-rise .45s cubic-bezier(.2,.75,.3,1) both; }
    @media (prefers-reduced-motion: reduce) { .clinic-specialist, .uploaded-gallery { opacity: 1; transform: none; animation: none; } }
    .clinic-doctor-name { margin: 0; color: #173f38; font: 800 clamp(1.8rem, 4vw, 2.8rem)/1.05 "DM Serif Display", Georgia, serif; }
    .clinic-credentials { margin: .65rem 0 1.15rem; color: #86662f; font-size: clamp(.72rem, 1.4vw, .95rem); letter-spacing: .06em; }
    .clinic-description, .clinic-specialist-copy > p:last-child { color: #4d5952; font: clamp(.84rem, 1.5vw, .96rem)/1.65 Manrope, sans-serif; }
    .clinic-description { max-width: 34rem; margin: 0 auto 1.4rem; }
    .clinic-specialist-copy h2 { margin: 0 0 .65rem; color: #174d36; font: 400 clamp(1.45rem, 4vw, 2.15rem)/1.05 "DM Serif Display", Georgia, serif; }
    .clinic-specialist-copy > p:last-child { margin: 0; }
    .root-cause-card { position: relative; display: grid; grid-template-columns: auto minmax(0, 1fr); gap: clamp(1.1rem, 3vw, 2rem); align-items: center; overflow: hidden; margin-top: 1.8rem; padding: clamp(1.35rem, 3.5vw, 2rem); border: 1px solid rgba(23,77,53,.08); border-radius: 22px; background: #e8f0e2; box-shadow: 0 8px 22px rgba(23,77,53,.06); text-align: left; }
    .root-cause-icon { display: grid; width: clamp(4rem, 8vw, 5rem); height: clamp(4rem, 8vw, 5rem); place-items: center; flex: 0 0 auto; border-radius: 50%; background: #174d35; }
    .root-cause-icon svg { width: 55%; height: 55%; fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.2; }
    .root-cause-copy { position: relative; z-index: 1; min-width: 0; padding-left: clamp(1.1rem, 3vw, 2rem); border-left: 1px solid rgba(23,77,53,.2); }
    .root-cause-copy h2 { margin: 0 0 .7rem; color: #174d35; font: 700 clamp(1.4rem, 3.2vw, 2.05rem)/1.16 "DM Serif Display", Georgia, serif; letter-spacing: -.01em; }
    .root-cause-copy p { margin: 0; color: #63756a; font: clamp(.95rem, 1.6vw, 1.18rem)/1.55 Manrope, sans-serif; }
    .root-cause-leaf { position: absolute; width: 4.5rem; height: 2rem; border: 1px solid rgba(23,77,53,.12); border-radius: 100% 0 100% 0; pointer-events: none; }
    .root-cause-leaf-top { top: -.35rem; right: 1.8rem; transform: rotate(28deg); }
    .root-cause-leaf-bottom { bottom: -.45rem; left: 1.2rem; transform: rotate(208deg); }
    .root-cause-leaf::after { position: absolute; top: 50%; left: 12%; width: 78%; height: 1px; background: rgba(23,77,53,.1); content: ""; transform: rotate(-22deg); transform-origin: left center; }
    .clinic-education { display: grid; gap: 1.15rem; margin: 2rem 0 0; padding-top: 1.65rem; border-top: 1px solid rgba(161,119,53,.28); text-align: left; }
    .clinic-education-item { display: grid; grid-template-columns: 2.75rem minmax(0,1fr); gap: .85rem; align-items: start; }
    .clinic-education-icon { display: grid; width: 2.75rem; height: 2.75rem; place-items: center; border-radius: 50%; background: #174d36; color: #fff; font-size: 1.2rem; box-shadow: 0 5px 12px rgba(23,77,54,.18); }
    .clinic-education-item h3 { margin: .1rem 0 .25rem; color: #173f38; font: 800 clamp(.9rem, 1.7vw, 1.05rem)/1.3 Manrope, sans-serif; }
    .clinic-education-item h3 strong { color: #174d36; }
    .clinic-education-item p { margin: 0; color: #718078; font: clamp(.78rem, 1.4vw, .88rem)/1.55 Manrope, sans-serif; }
    .clinic-cta-actions { display: flex; justify-content: center; gap: .8rem; margin-top: 1.8rem; }
    .clinic-cta { display: inline-flex; min-width: 10.5rem; min-height: 3.25rem; align-items: center; justify-content: center; padding: .85rem 1.35rem; border: 1px solid transparent; border-radius: 999px; font: 800 .82rem/1 Manrope, sans-serif; letter-spacing: .04em; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease, filter .2s ease; }
    .clinic-cta:hover { transform: translateY(-3px); box-shadow: 0 9px 18px rgba(23,63,56,.16); filter: brightness(1.04); }
    .clinic-cta:focus-visible { outline: 3px solid rgba(176,128,45,.55); outline-offset: 3px; }
    .clinic-cta-profile { background: #174d35; color: #fff; }
    .clinic-cta-profile span { margin-left: .45rem; font-size: 1.1em; }
    .clinic-cta-book { background: #d6a849; color: #173f38; }
    .panchkarma-journey { padding: clamp(4.5rem, 9vw, 7rem) 1.25rem; background: #faf9f4; }
    .panchkarma-journey-inner { max-width: 68rem; margin: 0 auto; }
    .panchkarma-journey-header { max-width: 40rem; margin: 0 auto clamp(3rem, 7vw, 5rem); text-align: center; }
    .panchkarma-journey-eyebrow { margin: 0 0 .75rem; color: #b0802d; font: 800 .68rem/1.3 Manrope, sans-serif; letter-spacing: .22em; }
    .panchkarma-journey-header h2 { margin: 0 0 .85rem; color: #174d35; font: 400 clamp(2rem, 4.5vw, 3.15rem)/1.05 "DM Serif Display", Georgia, serif; }
    .panchkarma-journey-header > p:last-child { margin: 0; color: #68776e; font: clamp(.88rem, 1.5vw, 1rem)/1.7 Manrope, sans-serif; }
    .panchkarma-journey-heading-image { display: block; width: 100%; height: auto; border-radius: 22px; box-shadow: 0 12px 28px rgba(23,77,53,.08); }
    .panchkarma-timeline { position: relative; display: grid; gap: clamp(3rem, 8vw, 6rem); }
    .panchkarma-timeline-line { position: absolute; top: 2rem; bottom: 2rem; left: 50%; width: 1px; background: rgba(23,77,53,.18); transform: translateX(-50%); }
    .panchkarma-stage { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) 4rem minmax(0, 1fr); gap: clamp(1.5rem, 5vw, 4rem); align-items: center; opacity: .42; transition: opacity .75s ease; }
    .panchkarma-stage:nth-of-type(even) .panchkarma-stage-image-wrap { grid-column: 3; grid-row: 1; }
    .panchkarma-stage:nth-of-type(even) .panchkarma-stage-copy { grid-column: 1; grid-row: 1; text-align: right; }
    .panchkarma-stage-marker { z-index: 1; display: grid; width: 3.2rem; height: 3.2rem; place-items: center; border: 1px solid rgba(23,77,53,.25); border-radius: 50%; background: #faf9f4; color: #829087; font: 800 .72rem/1 Manrope, sans-serif; letter-spacing: .06em; transition: background .5s ease, color .5s ease, border-color .5s ease, transform .5s ease; }
    .panchkarma-stage-image-wrap { overflow: hidden; aspect-ratio: 1.5 / 1; border-radius: 22px; background: #e8f0e2; box-shadow: 0 14px 28px rgba(23,77,53,.1); }
    .panchkarma-stage-image { display: block; width: 100%; height: 100%; object-fit: cover; opacity: .82; transform: scale(1.04); transition: opacity .8s ease, transform 1s cubic-bezier(.2,.75,.3,1); }
    .panchkarma-stage-copy { transform: translateY(1.25rem); transition: opacity .75s ease, transform .75s ease; }
    .panchkarma-stage-number { margin: 0 0 .5rem; color: #b0802d; font: 800 .7rem/1 Manrope, sans-serif; letter-spacing: .2em; }
    .panchkarma-stage-copy h3 { margin: 0; color: #174d35; font: 400 clamp(1.6rem, 3vw, 2.45rem)/1 "DM Serif Display", Georgia, serif; letter-spacing: .04em; }
    .panchkarma-stage-copy h4 { margin: .55rem 0 .7rem; color: #52645a; font: 800 clamp(.8rem, 1.4vw, .95rem)/1.35 Manrope, sans-serif; }
    .panchkarma-stage-copy > p:not(.panchkarma-stage-number) { max-width: 26rem; margin: 0 0 1rem; color: #718078; font: clamp(.82rem, 1.4vw, .94rem)/1.65 Manrope, sans-serif; }
    .panchkarma-stage-copy a { color: #174d35; font: 800 .76rem/1 Manrope, sans-serif; letter-spacing: .05em; text-decoration: none; }
    .panchkarma-stage-copy a span { margin-left: .3rem; transition: margin-left .2s ease; }
    .panchkarma-stage-copy a:hover span { margin-left: .55rem; }
    .panchkarma-stage.is-active { opacity: 1; }
    .panchkarma-stage.is-active .panchkarma-stage-marker { border-color: #174d35; background: #174d35; color: #fff; transform: scale(1.08); }
    .panchkarma-stage.is-active .panchkarma-stage-image { opacity: 1; transform: scale(1); }
    .panchkarma-stage.is-active .panchkarma-stage-copy { transform: translateY(0); }
    @media (max-width: 560px) { .clinic-specialist-copy { padding: 1.25rem; } .clinic-doctor-image { width: min(100%, 17rem); } .root-cause-card { grid-template-columns: 1fr; gap: .9rem; padding: 1.25rem; } .root-cause-copy { padding: 0; border-left: 0; } .root-cause-icon { width: 3.7rem; height: 3.7rem; } .root-cause-copy h2 { font-size: 1.45rem; } }
    @media (max-width: 560px) { .clinic-cta-actions { flex-direction: column; align-items: center; gap: .65rem; } .clinic-cta { width: min(100%, 13rem); min-height: 3rem; } }
    @media (max-width: 700px) { .panchkarma-journey { overflow-x: hidden; padding-inline: 1rem; } .panchkarma-journey-header { max-width: 100%; } .panchkarma-journey-heading-image { width: 100%; max-width: 100%; } .panchkarma-timeline { gap: 3.5rem; } .panchkarma-timeline-line { top: 1.5rem; bottom: 1.5rem; left: 1.25rem; } .panchkarma-stage, .panchkarma-stage:nth-of-type(even) { display: grid; grid-template-columns: 2.5rem minmax(0, 1fr); gap: 1rem; align-items: start; } .panchkarma-stage:nth-of-type(even) .panchkarma-stage-image-wrap, .panchkarma-stage:nth-of-type(even) .panchkarma-stage-copy { grid-column: 2; grid-row: auto; text-align: left; } .panchkarma-stage-marker { width: 2.5rem; height: 2.5rem; } .panchkarma-stage-image-wrap { grid-column: 2; grid-row: 1; aspect-ratio: 1.35 / 1; border-radius: 18px; } .panchkarma-stage-copy { grid-column: 2; grid-row: 2; } .panchkarma-stage-copy > p:not(.panchkarma-stage-number) { max-width: none; } }
    @media (prefers-reduced-motion: reduce) { .panchkarma-stage, .panchkarma-stage-copy, .panchkarma-stage-image { transition: none; } }
  `;
  document.head.appendChild(style);

  const observeScrollSections = () => {
    removeExtraSpecialistSection();
    addTreatmentsButton();
    addPanchkarmaJourney();
    const bookButton = document.querySelector(".clinic-cta-book");
    const appointmentButton = [...document.querySelectorAll("button")].find((button) =>
      button.textContent.trim().toLowerCase() === "book appointment"
    );
    if (bookButton && appointmentButton && bookButton.dataset.appointmentWired !== "true") {
      bookButton.dataset.appointmentWired = "true";
      bookButton.addEventListener("click", () => appointmentButton.click());
    }
    const sections = [...document.querySelectorAll(".clinic-specialist, .uploaded-gallery")];
    if (!sections.length) return false;
    sections.forEach((section) => {
      if (section.dataset.scrollAnimation === "attached") return;
      section.dataset.scrollAnimation = "attached";
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
        section.classList.add("is-visible");
        return;
      }
      new IntersectionObserver((entries, observer) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      }, { threshold: 0.15 }).observe(section);
    });
    return true;
  };

  if (!renderClinicIntro() || !observeScrollSections()) {
    new MutationObserver(() => {
      renderClinicIntro();
      observeScrollSections();
    }).observe(document.body, { childList: true, subtree: true });
  }
  observeScrollSections();
})();