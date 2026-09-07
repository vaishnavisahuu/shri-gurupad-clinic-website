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
            <p>Dr. Ashish Choyal combines classical Ayurvedic wisdom with a thoughtful, personalized approach to Panchakarma and everyday wellness. Every consultation begins with listening, assessment and a care plan designed around you.</p>
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
    .clinic-specialist.is-visible, .uploaded-gallery.is-visible { animation: clinic-card-rise 1.35s cubic-bezier(.2,.75,.3,1) both; }
    @media (prefers-reduced-motion: reduce) { .clinic-specialist, .uploaded-gallery { opacity: 1; transform: none; animation: none; } }
    .clinic-doctor-name { margin: 0; color: #173f38; font: 800 clamp(1.8rem, 4vw, 2.8rem)/1.05 "DM Serif Display", Georgia, serif; }
    .clinic-credentials { margin: .65rem 0 1.15rem; color: #86662f; font-size: clamp(.72rem, 1.4vw, .95rem); letter-spacing: .06em; }
    .clinic-description, .clinic-specialist-copy > p:last-child { color: #4d5952; font: clamp(.84rem, 1.5vw, .96rem)/1.65 Manrope, sans-serif; }
    .clinic-description { max-width: 34rem; margin: 0 auto 1.4rem; }
    .clinic-specialist-copy h2 { margin: 0 0 .65rem; color: #174d36; font: 400 clamp(1.45rem, 4vw, 2.15rem)/1.05 "DM Serif Display", Georgia, serif; }
    .clinic-specialist-copy > p:last-child { margin: 0; }
    @media (max-width: 560px) { .clinic-specialist-copy { padding: 1.25rem; } .clinic-doctor-image { width: min(100%, 17rem); } }
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