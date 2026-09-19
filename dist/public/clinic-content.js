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
    .treatment-card { min-height: 0 !important; }
    .treatment-card [class*="image-frame"] { aspect-ratio: 2.35 / 1 !important; }
    .treatment-card-body { padding: .65rem .8rem .7rem !important; }
    .treatment-card__head { margin-bottom: .35rem !important; }
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
    @media (max-width: 560px) { .clinic-specialist-copy { padding: 1.25rem; } .clinic-doctor-image { width: min(100%, 17rem); } .root-cause-card { grid-template-columns: 1fr; gap: .9rem; padding: 1.25rem; } .root-cause-copy { padding: 0; border-left: 0; } .root-cause-icon { width: 3.7rem; height: 3.7rem; } .root-cause-copy h2 { font-size: 1.45rem; } }
  `;
  document.head.appendChild(style);

  const observeScrollSections = () => {
    removeExtraSpecialistSection();
    addTreatmentsButton();
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