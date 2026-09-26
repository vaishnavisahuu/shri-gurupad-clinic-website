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

  const enhanceDesktopHeader = () => {
    const header = document.querySelector("header.site-header");
    const nav = header?.querySelector(".site-header__nav");
    if (!header || !nav || header.dataset.desktopEnhanced === "true") return;
    header.dataset.desktopEnhanced = "true";
    const inner = header.querySelector(".site-header__inner");
    if (inner && window.matchMedia("(min-width: 701px)").matches) inner.appendChild(nav);
    const home = document.createElement("a");
    home.className = "desktop-header-home";
    home.href = "#";
    home.textContent = "Home";
    nav.insertBefore(home, nav.firstElementChild);
    const phone = document.createElement("a");
    phone.className = "desktop-header-phone";
    phone.href = "tel:7000944387";
    phone.innerHTML = '<span aria-hidden="true">☎</span> +91 7000944387';
    inner?.appendChild(phone);
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
      { number: "01", name: "VAMANA", subtitle: "Therapeutic Emesis", description: "A traditional Panchkarma therapy involving carefully supervised therapeutic emesis as part of a personalized Ayurvedic treatment plan.", image: "/images/gurupad_ai_2.jpeg" },
      { number: "02", name: "VIRECHANA", subtitle: "Therapeutic Ayurvedic Cleansing", description: "A traditional Panchkarma therapy involving controlled therapeutic purgation to support the elimination of accumulated doshas.", image: "/images/gurupad_ai_3.jpeg" },
      { number: "03", name: "NASYA", subtitle: "Nasal Ayurvedic Therapy", description: "A traditional Ayurvedic therapy in which carefully selected medicated oils or preparations are administered through the nasal passages.", image: "/images/gurupad_ai_4.jpeg" },
      { number: "04", name: "BASTI", subtitle: "Medicated Ayurvedic Therapy", description: "A localized Ayurvedic therapy where warm medicated oil is gently retained over the lower back to support comfort and relaxation.", image: "/images/gurupad_ai_5.jpeg" },
      { number: "05", name: "ABHYANGA", subtitle: "Ayurvedic Oil Massage", description: "A traditional full-body Ayurvedic massage using warm herbal oils selected according to individual needs and Ayurvedic assessment.", image: "/images/one.jpeg" },
      { number: "06", name: "SHIRODHARA", subtitle: "Ayurvedic Oil Flow Therapy", description: "A classical Ayurvedic therapy in which a gentle, continuous stream of warm medicated oil or selected liquids is poured over the forehead.", image: "/images/two.jpeg" },
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
    section.querySelectorAll("[data-placeholder-social]").forEach((link) => link.addEventListener("click", (event) => event.preventDefault()));
    return section;
  };

  const addPanchkarmaJourney = () => {
    const button = document.querySelector(".show-all-treatments");
    if (!button || document.querySelector(".panchkarma-journey")) return;
    const section = PanchkarmaJourney();
    const journeyHeader = section.querySelector(".panchkarma-journey-header");
    journeyHeader.innerHTML = `
      <img class="panchkarma-journey-heading-image" src="/images/journey-heading-new.png" alt="The Five Purifications, showing Vamana, Virechana, Nasya Karma, Kati Basti, Abhyanga, Leech Therapy, and Shirodhara" />`;
    section.querySelector(".panchkarma-timeline").insertAdjacentElement("afterend", ExploreAllPanchkarmaButton());
    button.insertAdjacentElement("afterend", section);
    const patientStories = PatientStories();
    section.insertAdjacentElement("afterend", patientStories);
    wirePatientStories(patientStories);
    const appointment = AppointmentSection();
    patientStories.insertAdjacentElement("afterend", appointment);
    appointment.insertAdjacentElement("afterend", FindUsSection());
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

  const ExploreAllPanchkarmaButton = () => {
    const wrapper = document.createElement("div");
    wrapper.className = "explore-panchkarma-cta-section";
    wrapper.innerHTML = `
      <a class="explore-panchkarma-cta" href="/panchakarma.html">
        <span>View All Panchkarma Therapies</span>
        <span class="explore-panchkarma-cta-arrow" aria-hidden="true">→</span>
      </a>`;
    return wrapper;
  };

  const AppointmentSection = () => {
    const section = document.createElement("section");
    section.className = "homepage-appointment";
    section.id = "homepage-appointment";
    section.setAttribute("aria-labelledby", "homepage-appointment-heading");
    section.innerHTML = `
      <div class="homepage-appointment-hero">
        <div class="homepage-appointment-inner">
          <p class="homepage-appointment-eyebrow"><span></span>GET HEALED</p>
          <h2 id="homepage-appointment-heading">Book Your <em>Consultation</em><br />Today</h2>
          <p class="homepage-appointment-lead">Take the first step towards personalized Ayurvedic care with Dr. Ashish Choyal at Shri Gurupad Multispeciality Clinic.</p>
          <div class="homepage-appointment-info-grid">
            <article><span class="homepage-appointment-icon" aria-hidden="true">⌖</span><div><h3>Shri Gurupad Multispeciality Clinic</h3><p>Consultation &amp; Panchkarma Center</p><p>[ADD CLINIC ADDRESS]</p></div></article>
            <article><span class="homepage-appointment-icon" aria-hidden="true">◷</span><div><h3>OPD Timings</h3><p>[ADD OPD TIMINGS]</p></div></article>
            <article><span class="homepage-appointment-icon" aria-hidden="true">☎</span><div><h3>Phone &amp; WhatsApp</h3><p><a href="tel:7000944387">7000944387</a></p><p><a href="tel:7869869888">7869869888</a></p></div></article>
            <article><span class="homepage-appointment-icon" aria-hidden="true">✦</span><div><h3>Consultation With</h3><p>Dr. Ashish Choyal</p><p>B.A.M.S., M.D. (Panchkarma)</p></div></article>
          </div>
          <div class="homepage-appointment-whatsapp">
            <div><p class="homepage-appointment-eyebrow">QUICK WHATSAPP BOOKING</p><h3>Message us directly to enquire about your consultation.</h3></div>
            <a class="homepage-appointment-whatsapp-button" href="https://wa.me/917000944387?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Shri%20Gurupad%20Multispeciality%20Clinic%20with%20Dr.%20Ashish%20Choyal." target="_blank" rel="noreferrer">WhatsApp Us →</a>
          </div>
        </div>
      </div>
      <div class="homepage-appointment-form-wrap">
        <form class="homepage-appointment-form">
          <p class="homepage-appointment-eyebrow">PERSONALIZED CARE</p><h3>Book an Appointment</h3>
          <p class="homepage-appointment-form-lead">Share your details and our team will contact you regarding your consultation.</p>
          <div class="homepage-appointment-fields">
            <label>Full Name *<input name="name" placeholder="Your full name" required /></label>
            <label>Phone Number *<input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required /></label>
            <label>Your Condition / Concern *<select name="condition" required><option value="">Select your condition</option><option>Skin &amp; Hair Concerns</option><option>Bone &amp; Joint Concerns</option><option>Migraine / Headache</option><option>Digestive / Stomach Concerns</option><option>Diabetes</option><option>Blood Pressure</option><option>Respiratory / Asthma</option><option>Liver-related Concerns</option><option>Kidney-related Concerns</option><option>Women's Wellness</option><option>Men's Wellness</option><option>Child Wellness</option><option>Thyroid</option><option>Obesity</option><option>Constipation</option><option>Nerve-related Concerns</option><option>Panchkarma Consultation</option><option>Swarnaprashan</option><option>Other</option></select></label>
            <label>City<input name="city" placeholder="Your city" /></label>
            <label>Preferred Date<input name="date" type="date" /></label>
            <label>Preferred Time<select name="time"><option value="">Select time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
            <label class="homepage-appointment-wide">Brief Description<textarea name="description" placeholder="Briefly describe your concern or what you would like to discuss..."></textarea></label>
          </div>
          <button class="homepage-appointment-submit" type="submit">Book Consultation →</button>
          <p class="homepage-appointment-status" role="status"></p>
        </form>

      </div>
      <div class="homepage-floating-actions" aria-label="Contact shortcuts"><a href="tel:7000944387" aria-label="Call Shri Gurupad Clinic">☎ <span>Call</span></a><a href="https://wa.me/917000944387" target="_blank" rel="noreferrer" aria-label="WhatsApp Shri Gurupad Clinic">☘ <span>WhatsApp</span></a><button type="button" aria-label="Back to top">↑</button></div>`;
    const form = section.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) return form.reportValidity();
      const submit = form.querySelector("button");
      const status = form.querySelector(".homepage-appointment-status");
      submit.disabled = true;
      submit.textContent = "Submitting...";
      window.setTimeout(() => {
        submit.disabled = false;
        submit.textContent = "Book Consultation →";
        status.textContent = "Thank you! Your appointment request has been received. Our team will contact you shortly.";
        form.reset();
      }, 700);
    });
    section.querySelector(".homepage-floating-actions button").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    return section;
  };

  const FindUsSection = () => {
    const address = "245, Sector-G, Main Road, Silicon City, Indore - 452012";
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    const whatsappUrl = "https://wa.me/917000944387?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation%20at%20Shri%20Gurupad%20Multispeciality%20Clinic%20with%20Dr.%20Ashish%20Choyal.";
    const section = document.createElement("section");
    section.className = "find-us-section";
    section.id = "find-us";
    section.setAttribute("aria-labelledby", "find-us-heading");
    section.innerHTML = `
      <div class="find-us-inner">
        <header class="find-us-header">
          <p class="find-us-eyebrow">FIND US</p>
          <h2 id="find-us-heading">Visit <em>Shri Gurupad</em> Multispeciality Clinic</h2>
          <p>Visit us for personalized Ayurvedic consultation and Panchkarma care with Dr. Ashish Choyal.</p>
        </header>
        <div class="find-us-layout">
          <div class="find-us-map-wrap">
            <iframe title="Map showing Shri Gurupad Multispeciality Clinic in Silicon City, Indore" src="https://www.google.com/maps?q=245%2C%20Sector-G%2C%20Main%20Road%2C%20Silicon%20City%2C%20Indore%20-%20452012&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="find-us-map-actions"><a class="find-us-button" href="${directionsUrl}" target="_blank" rel="noreferrer">📍 Get Directions</a><a class="find-us-button find-us-button-secondary" href="#" data-placeholder-review title="Replace with the clinic's Google Business review URL">⭐ Write a Review</a></div>
          </div>
          <div class="find-us-cards">
            <article class="find-us-card"><span aria-hidden="true">📍</span><div><h3>Main Clinic — Silicon City</h3><address>245, Sector-G, Main Road,<br />Silicon City,<br />Indore - 452012</address><a href="${directionsUrl}" target="_blank" rel="noreferrer">Get Directions →</a></div></article>
            <article class="find-us-card"><span aria-hidden="true">👨‍⚕️</span><div><h3>Consultation With</h3><p><strong>Dr. Ashish Choyal</strong><br />B.A.M.S., M.D. (Panchkarma)<br />Consultation &amp; Panchkarma Center</p></div></article>
            <article class="find-us-card"><span aria-hidden="true">📞</span><div><h3>Phone &amp; WhatsApp</h3><p><a href="tel:7000944387">+91 7000944387</a><br /><a href="tel:7869869888">+91 7869869888</a></p><a href="${whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp →</a></div></article>
          </div>
        </div>
        <div class="find-us-whatsapp"><span aria-hidden="true">💬</span><div><h3>WhatsApp</h3><p>Send us a message for quick appointment enquiries.</p></div><a class="find-us-button" href="${whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp +91 7000944387 →</a></div>
        <div class="find-us-social"><p class="find-us-eyebrow">FOLLOW SHRI GURUPAD</p><div><a href="#" data-placeholder-social title="Add the clinic's Instagram URL">Instagram</a><a href="#" data-placeholder-social title="Add the clinic's Facebook URL">Facebook</a><a href="#" data-placeholder-social title="Add the clinic's YouTube URL">YouTube</a></div></div>
        <a class="find-us-full-contact" href="#contact">📍 Full Contact Page &amp; Directions →</a>
      </div>`;
    return section;
  };

  const PatientStories = () => {
    const patientStories = [
      { id: 1, name: "Priya Sharma", city: "Indore", condition: "Digestive Wellness", category: "Digestive Care", rating: 5, quote: "I was looking for guidance for my ongoing digestive concerns. During my consultation, the doctor listened carefully to my concerns and explained the Ayurvedic approach in a simple way. The treatment and lifestyle guidance were easy for me to understand and follow.", fullStory: "I was looking for guidance for my ongoing digestive concerns. During my consultation, the doctor listened carefully to my concerns and explained the Ayurvedic approach in a simple way. The treatment and lifestyle guidance were easy for me to understand and follow.", image: null },
      { id: 2, name: "Amit Verma", city: "Indore", condition: "Joint & Bone Care", category: "Joint & Bone Care", rating: 5, quote: "My consultation was detailed and personalized. Dr. Ashish Choyal took time to understand my concerns and explained the recommended Ayurvedic care clearly. I appreciated the regular guidance throughout the process.", fullStory: "My consultation was detailed and personalized. Dr. Ashish Choyal took time to understand my concerns and explained the recommended Ayurvedic care clearly. I appreciated the regular guidance throughout the process.", image: null },
      { id: 3, name: "Neha Patel", city: "Indore", condition: "Panchkarma Consultation", category: "Panchkarma", rating: 5, quote: "I visited the clinic to learn more about Panchkarma. The entire process was explained clearly before beginning the therapy. The staff was supportive and the overall experience was comfortable and well organized.", fullStory: "I visited the clinic to learn more about Panchkarma. The entire process was explained clearly before beginning the therapy. The staff was supportive and the overall experience was comfortable and well organized.", image: null },
      { id: 4, name: "Rahul Jain", city: "Indore", condition: "Migraine & Headache Care", category: "Migraine & Headache", rating: 5, quote: "The consultation gave me a better understanding of my concerns and the Ayurvedic approach suggested for them. I received clear guidance about the recommended care and follow-up.", fullStory: "The consultation gave me a better understanding of my concerns and the Ayurvedic approach suggested for them. I received clear guidance about the recommended care and follow-up.", image: null },
      { id: 5, name: "Kavita Joshi", city: "Indore", condition: "Women's Wellness", category: "Women's Wellness", rating: 5, quote: "I appreciated the personal attention during my consultation. My concerns were discussed in detail and I was given clear guidance regarding the Ayurvedic care plan and lifestyle practices.", fullStory: "I appreciated the personal attention during my consultation. My concerns were discussed in detail and I was given clear guidance regarding the Ayurvedic care plan and lifestyle practices.", image: null },
    ];
    const filters = ["All", "Panchkarma", "Joint & Bone Care", "Skin Care", "Digestive Care", "Respiratory Care", "Migraine & Headache", "Women's Wellness", "Men's Wellness", "Child Wellness", "Swarnaprashan", "Other"];
    const stars = (rating) => "★".repeat(rating);
    const avatar = (story) => story.image
      ? `<img src="${story.image}" alt="${story.name}" />`
      : `<span aria-hidden="true">${story.name.replace(/[^A-Za-z]/g, "").slice(0, 1) || "P"}</span>`;
    const storyCard = (story) => `
      <article class="patient-story-card" data-category="${story.category}">
        <div class="patient-story-avatar">${avatar(story)}</div>
        <div class="patient-story-stars" aria-label="${story.rating} out of 5 stars">${stars(story.rating)}</div>
        <p class="patient-story-quote">"${story.quote}"</p>
        <div class="patient-story-meta"><strong>${story.name}</strong><span>${story.city}</span><span>${story.condition}</span></div>
      </article>`;
    const section = document.createElement("section");
    section.className = "patient-stories";
    section.id = "patient-stories";
    section.setAttribute("aria-labelledby", "patient-stories-heading");
    section.innerHTML = `
      <div class="patient-stories-inner">
        <header class="patient-stories-header">
          <p class="patient-stories-eyebrow">PATIENT EXPERIENCES</p>
          <h2 id="patient-stories-heading">Patient Stories</h2>
          <p>Every patient's journey is unique. Read experiences shared by people who have consulted our clinic for Ayurvedic care and Panchkarma therapies.</p>
        </header>
        <div class="patient-stories-carousel">
          <div class="patient-stories-grid">${patientStories.map(storyCard).join("")}</div>
          <div class="patient-stories-carousel-controls" aria-label="Patient story carousel controls">
            <button class="patient-stories-carousel-button patient-stories-carousel-prev" type="button" aria-label="Previous patient stories">‹</button>
            <div class="patient-stories-carousel-dots" role="tablist" aria-label="Patient story pages">
              <button class="patient-stories-carousel-dot is-active" type="button" role="tab" aria-label="Show patient stories page 1" aria-selected="true"></button>
              <button class="patient-stories-carousel-dot" type="button" role="tab" aria-label="Show patient stories page 2" aria-selected="false"></button>
              <button class="patient-stories-carousel-dot" type="button" role="tab" aria-label="Show patient stories page 3" aria-selected="false"></button>
              <button class="patient-stories-carousel-dot" type="button" role="tab" aria-label="Show patient stories page 4" aria-selected="false"></button>
              <button class="patient-stories-carousel-dot" type="button" role="tab" aria-label="Show patient stories page 5" aria-selected="false"></button>
            </div>
            <button class="patient-stories-carousel-button patient-stories-carousel-next" type="button" aria-label="Next patient stories">›</button>
          </div>
        </div>
        <p class="patient-stories-empty" hidden>Patient stories for this category will be added soon.</p>
        <div class="patient-stories-review"><a class="button patient-stories-review-link" href="#contact">Write a Review</a></div>
        <div class="patient-care-timeline">
          <div class="patient-stories-subheading"><p class="patient-stories-eyebrow">FROM CONSULTATION TO CARE</p><h3>Every Care Plan Begins With Listening</h3></div>
          <ol>${["Initial Consultation", "Personalized Ayurvedic Assessment", "Recommended Care Plan", "Follow-up & Guidance"].map((step, index) => `<li><span>0${index + 1}</span><strong>${step}</strong></li>`).join("")}</ol>
        </div>
      </div>
      <div class="patient-story-modal" role="dialog" aria-modal="true" aria-labelledby="patient-story-modal-heading" hidden>
        <div class="patient-story-modal-card"><button class="patient-story-modal-close" type="button" aria-label="Close story">×</button><p class="patient-stories-eyebrow">PATIENT STORY</p><h3 id="patient-story-modal-heading"></h3><p class="patient-story-modal-meta"></p><p class="patient-story-modal-copy"></p></div>
      </div>
      </div>`;
    section._patientStories = patientStories;
    return section;
  };

  const wirePatientStories = (section) => {
    const stories = section._patientStories;
    const cards = [...section.querySelectorAll(".patient-story-card")];
    const empty = section.querySelector(".patient-stories-empty");
    const carousel = section.querySelector(".patient-stories-grid");
    const carouselDots = [...section.querySelectorAll(".patient-stories-carousel-dot")];
    const updateCarousel = (page) => {
      const card = cards[0];
      if (!card) return;
      section.dataset.carouselPage = String(page);
      const gap = parseFloat(getComputedStyle(carousel).gap) || 16;
      const pageSize = window.matchMedia("(max-width: 560px)").matches ? 1 : 3;
      const maxPage = Math.ceil(cards.length / pageSize) - 1;
      page = Math.min(page, maxPage);
      carousel.scrollTo({ left: page * (card.offsetWidth + gap) * pageSize, behavior: "smooth" });
      carouselDots.forEach((dot, index) => {
        const active = index === page;
        dot.hidden = index > maxPage;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", String(active));
      });
    };
    section.querySelector(".patient-stories-carousel-prev").addEventListener("click", () => updateCarousel(Math.max(0, Number(section.dataset.carouselPage || 0) - 1)));
    section.querySelector(".patient-stories-carousel-next").addEventListener("click", () => updateCarousel(Math.min(carouselDots.length - 1, Number(section.dataset.carouselPage || 0) + 1)));
    carouselDots.forEach((dot, index) => dot.addEventListener("click", () => {
      section.dataset.carouselPage = String(index);
      updateCarousel(index);
    }));
    carousel.addEventListener("scroll", () => {
      const card = cards[0];
      if (!card) return;
      const gap = parseFloat(getComputedStyle(carousel).gap) || 16;
      const pageSize = window.matchMedia("(max-width: 560px)").matches ? 1 : 3;
      const page = Math.min(carouselDots.length - 1, Math.round(carousel.scrollLeft / ((card.offsetWidth + gap) * pageSize)));
      section.dataset.carouselPage = String(page);
      carouselDots.forEach((dot, index) => {
        const active = index === page;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", String(active));
      });
    }, { passive: true });
    section.querySelectorAll(".patient-stories-filter").forEach((filter) => filter.addEventListener("click", () => {
      section.querySelectorAll(".patient-stories-filter").forEach((item) => item.classList.remove("is-selected"));
      filter.classList.add("is-selected");
      const category = filter.dataset.filter;
      let visible = 0;
      cards.forEach((card) => {
        const show = category === "All" || card.dataset.category === category;
        card.hidden = !show;
        if (show) visible += 1;
      });
      empty.hidden = visible > 0;
    }));
    const storyModal = section.querySelector(".patient-story-modal");
    const closeStory = () => { storyModal.hidden = true; };
    section.querySelectorAll(".patient-story-read").forEach((button) => button.addEventListener("click", () => {
      const story = stories.find((item) => String(item.id) === button.dataset.storyId);
      if (!story) return;
      section.querySelector("#patient-story-modal-heading").textContent = story.name;
      section.querySelector(".patient-story-modal-meta").textContent = `${story.city} · ${story.condition} · ${story.category}`;
      section.querySelector(".patient-story-modal-copy").textContent = story.fullStory;
      storyModal.hidden = false;
      section.querySelector(".patient-story-modal-close").focus();
    }));
    section.querySelector(".patient-story-modal-close").addEventListener("click", closeStory);
    storyModal.addEventListener("click", (event) => { if (event.target === storyModal) closeStory(); });
    section.addEventListener("keydown", (event) => { if (event.key === "Escape") closeStory(); });
  };

  const renderClinicIntro = () => {
    removeExtraSpecialistSection();
    enhanceDesktopHeader();
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
    if (window.matchMedia("(min-width: 701px)").matches) {
      const copy = intro.querySelector(".clinic-specialist-copy");
      if (copy) {
        const left = document.createElement("div");
        const right = document.createElement("div");
        left.className = "clinic-desktop-left";
        right.className = "clinic-desktop-right";
        [
          ".clinic-doctor-image",
          ".clinic-card-specialist",
          ".clinic-doctor-name",
          ".clinic-credentials",
          ".clinic-description",
          ":scope > h2",
        ].forEach((selector) => {
          const element = copy.querySelector(selector);
          if (element) left.appendChild(element);
        });
        [
          ".clinic-card-brand",
          ".root-cause-card",
          ".clinic-education",
          ".clinic-cta-actions",
        ].forEach((selector) => {
          const element = copy.querySelector(selector);
          if (element) right.appendChild(element);
        });
        const summary = document.createElement("div");
        summary.className = "clinic-desktop-summary";
        [".clinic-description", "h2"].forEach((selector) => {
          const element = left.querySelector(selector);
          if (element) summary.appendChild(element);
        });
        copy.append(left, right);
        copy.appendChild(summary);
      }
    }
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
    @media (min-width: 701px) {
      #treatments {
        padding-top: clamp(4rem, 6vw, 6rem) !important;
        padding-bottom: clamp(5rem, 7vw, 7rem) !important;
      }
      #treatments .section-heading-row {
        display: block !important;
        width: min(100%, 62rem) !important;
        margin: 0 auto clamp(2.5rem, 4vw, 4rem) !important;
        text-align: center !important;
      }
      #treatments .section-heading-row > * {
        max-width: none !important;
      }
      #treatments .section-heading-row h2 {
        margin: .65rem 0 .9rem !important;
        font-size: clamp(2.6rem, 4.5vw, 4.25rem) !important;
        line-height: 1 !important;
      }
      #treatments .section-heading-row h2 em {
        display: inline !important;
        color: #b0802d !important;
      }
      #treatments .section-heading-row p {
        max-width: 42rem !important;
        margin-inline: auto !important;
        font-size: .95rem !important;
        line-height: 1.65 !important;
      }
      #treatments .treatments-grid {
        display: grid !important;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        align-items: stretch !important;
        gap: 1.5rem !important;
      }
      #treatments .treatment-card,
      #treatments .treatments-grid .treatment-card:nth-child(3n + 2) {
        align-self: stretch !important;
        margin: 0 !important;
        transform: none !important;
      }
      #treatments .treatment-card [class*="image-frame"] {
        aspect-ratio: 16 / 8 !important;
      }
      #treatments .treatment-card-body {
        display: flex !important;
        min-height: 15rem !important;
        flex-direction: column !important;
      }
      #treatments .treatment-card-body .treatment-card__tags {
        margin-top: auto !important;
      }
      .treatments-grid {
        align-items: start !important;
      }
      .treatments-grid .treatment-card:nth-child(3n + 2) {
        margin-top: 0 !important;
        transform: translateY(0) !important;
      }
    }
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
    @media (min-width: 701px) {
      .restored-clinic-intro {
        padding: clamp(3rem, 6vw, 5.5rem) clamp(2rem, 6vw, 6rem) clamp(4rem, 7vw, 6.5rem) !important;
        background: linear-gradient(135deg, #fbf8f2 0%, #f1e7d9 100%) !important;
      }
      .clinic-intro-inner { max-width: 78rem !important; }
      .clinic-specialist-copy {
        display: grid !important;
        grid-template-columns: minmax(15rem, .82fr) minmax(0, 1.18fr);
        column-gap: clamp(2rem, 6vw, 6rem);
        padding: clamp(2.25rem, 4vw, 4rem) !important;
        border-radius: 1.5rem !important;
        text-align: left !important;
      }
      .clinic-desktop-left,
      .clinic-desktop-right {
        min-width: 0;
      }
      .clinic-desktop-left {
        grid-column: 1;
      }
      .clinic-desktop-right {
        grid-column: 2;
        display: flex;
        flex-direction: column;
        gap: .8rem;
      }
      .clinic-desktop-summary {
        grid-column: 1 / -1;
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: clamp(1.25rem, 3vw, 3rem);
        margin-top: 1.75rem;
        padding-top: 1.35rem;
        border-top: 1px solid rgba(161,119,53,.24);
        text-align: center;
      }
      .clinic-desktop-summary .clinic-description {
        max-width: 48rem;
        margin: 0 !important;
        color: #56665e !important;
        font-size: .88rem !important;
        line-height: 1.55 !important;
      }
      .clinic-desktop-summary > h2 {
        flex: 0 0 auto;
        margin: 0 !important;
        color: #174d36 !important;
        font-size: clamp(1.2rem, 2vw, 1.55rem) !important;
        line-height: 1.15 !important;
        white-space: nowrap;
      }
      .clinic-card-brand {
        padding: 0 0 .8rem !important;
        margin: 0 !important;
        border-bottom: 1px solid rgba(161,119,53,.28) !important;
        border-left: 0 !important;
      }
      .clinic-card-eyebrow {
        margin-bottom: .7rem !important;
        color: #9a6f2b !important;
        font-size: .68rem !important;
        letter-spacing: .2em !important;
        line-height: 1.4 !important;
      }
      .clinic-card-name {
        font-size: clamp(1.8rem, 3.2vw, 2.8rem) !important;
        letter-spacing: .08em !important;
        line-height: 1.05 !important;
      }
      .clinic-card-type {
        margin-top: .45rem !important;
        font-size: .68rem !important;
        letter-spacing: .16em !important;
        line-height: 1.4 !important;
      }
      .clinic-card-mark {
        display: none !important;
      }
      .clinic-doctor-image {
        width: min(100%, 19rem) !important;
        margin: 0 auto 1.5rem !important;
        align-self: flex-start !important;
      }
      .clinic-doctor-image img { object-position: center 40% !important; }
      .clinic-card-specialist,
      .clinic-doctor-name,
      .clinic-credentials,
      .clinic-description,
      .clinic-specialist-copy > h2 {
        grid-column: auto;
      }
      .clinic-card-specialist {
        margin: .1rem 0 .6rem !important;
        font-size: .64rem !important;
        letter-spacing: .18em !important;
      }
      .clinic-doctor-name {
        margin-bottom: .45rem !important;
        color: #173f38 !important;
        font-size: clamp(1.9rem, 3vw, 2.65rem) !important;
        letter-spacing: -.01em !important;
        line-height: 1.05 !important;
      }
      .clinic-credentials {
        margin: 0 0 1rem !important;
        font-size: .72rem !important;
        letter-spacing: .08em !important;
        line-height: 1.45 !important;
      }
      .clinic-description {
        max-width: 34rem;
        margin: 0 0 1.15rem !important;
        color: #56665e !important;
        font-size: .9rem !important;
        line-height: 1.7 !important;
      }
      .clinic-specialist-copy > h2 {
        margin-top: .35rem !important;
        color: #174d36 !important;
        font-size: clamp(1.25rem, 2.2vw, 1.7rem) !important;
        line-height: 1.15 !important;
      }
      .root-cause-card {
        margin: 0 !important;
        padding: 1.35rem !important;
        border-radius: 1.15rem !important;
      }
      .root-cause-copy h2 {
        margin-bottom: .5rem !important;
        font-size: clamp(1.15rem, 2vw, 1.5rem) !important;
        line-height: 1.2 !important;
      }
      .root-cause-copy p {
        font-size: .78rem !important;
        line-height: 1.55 !important;
      }
      .clinic-education {
        margin: 0 !important;
        padding-top: 1.25rem !important;
      }
      .clinic-education-item { gap: .75rem !important; }
      .clinic-education-icon { width: 2.35rem !important; height: 2.35rem !important; font-size: 1rem !important; }
      .clinic-education-item h3 { font-size: .78rem !important; line-height: 1.35 !important; }
      .clinic-education-item p { font-size: .72rem !important; line-height: 1.5 !important; }
      .clinic-cta-actions {
        justify-content: flex-start !important;
        margin-top: 0 !important;
      }
      .clinic-cta {
        min-width: 8.75rem !important;
        min-height: 2.8rem !important;
        padding: .75rem 1.1rem !important;
        font-size: .72rem !important;
      }
    }
    @media (min-width: 701px) {
      .uploaded-gallery {
        padding: clamp(4rem, 6vw, 6rem) clamp(2rem, 6vw, 6rem) clamp(4rem, 6vw, 6rem) !important;
        background: linear-gradient(135deg, #f8f2e8 0%, #f1e6d7 100%) !important;
      }
      .uploaded-gallery > div {
        width: min(100%, 72rem) !important;
        max-width: 72rem !important;
        margin: 0 auto !important;
      }
      .uploaded-gallery > div > p:first-child {
        margin-bottom: .8rem !important;
        font-size: .75rem !important;
        letter-spacing: .28em !important;
      }
      .uploaded-gallery h2 {
        margin: 0 0 .75rem !important;
        font-size: clamp(2.5rem, 4.5vw, 4.25rem) !important;
        line-height: 1 !important;
      }
      .uploaded-gallery > div > p:nth-child(3) {
        max-width: 34rem !important;
        margin: 0 auto 2rem !important;
        font-size: 1rem !important;
        line-height: 1.65 !important;
      }
      .uploaded-gallery .gallery-viewer {
        width: min(100%, 68rem) !important;
        max-width: 68rem !important;
        margin: 2.25rem auto 0 !important;
      }
      .uploaded-gallery .gallery-viewer > div {
        aspect-ratio: 16 / 8 !important;
        border-radius: 1.25rem !important;
        background: #e4d8c8 !important;
        box-shadow: 0 1.2rem 2.5rem rgba(55,43,25,.16) !important;
      }
      .uploaded-gallery .gallery-current-image {
        object-fit: contain !important;
        padding: .75rem !important;
      }
      .uploaded-gallery .gallery-prev,
      .uploaded-gallery .gallery-next {
        width: 3rem !important;
        height: 3rem !important;
        font-size: 1.7rem !important;
      }
      .uploaded-gallery .gallery-prev { left: 1.25rem !important; }
      .uploaded-gallery .gallery-next { right: 1.25rem !important; }
    }
    .panchkarma-journey { padding: clamp(4.5rem, 9vw, 7rem) 1.25rem; background: #faf9f4; }
    .panchkarma-journey-inner { max-width: 78rem; margin: 0 auto; }
    .panchkarma-journey-header { max-width: 64rem; margin: 0 auto clamp(3rem, 7vw, 5rem); text-align: center; }
    .panchkarma-journey-eyebrow { margin: 0 0 .75rem; color: #b0802d; font: 800 .68rem/1.3 Manrope, sans-serif; letter-spacing: .22em; }
    .panchkarma-journey-header h2 { margin: 0 0 .85rem; color: #174d35; font: 400 clamp(2rem, 4.5vw, 3.15rem)/1.05 "DM Serif Display", Georgia, serif; }
    .panchkarma-journey-header > p:last-child { margin: 0; color: #68776e; font: clamp(.88rem, 1.5vw, 1rem)/1.7 Manrope, sans-serif; }
    .panchkarma-journey-heading-image { display: block; width: 100%; height: auto; border-radius: 22px; box-shadow: 0 12px 28px rgba(23,77,53,.08); }
    .explore-panchkarma-cta-section { display: flex; justify-content: center; padding: 2.5rem 1.25rem; background: #0f4a2e; }
    .explore-panchkarma-cta { display: inline-flex; width: min(100%, 32rem); min-height: 3.6rem; align-items: center; justify-content: center; gap: .45rem; padding: 1rem 2rem; border-radius: 999px; background: #d8b45a; color: #123d2a; box-shadow: 0 8px 20px rgba(216,180,90,.18); font: 800 clamp(.82rem, 1.5vw, 1rem)/1.2 Manrope, sans-serif; text-align: center; text-decoration: none; transition: background-color .28s ease, box-shadow .28s ease, transform .28s ease; }
    .explore-panchkarma-cta:hover { background: #e4c875; box-shadow: 0 12px 25px rgba(216,180,90,.28); transform: translateY(-3px); }
    .explore-panchkarma-cta:focus-visible { outline: 3px solid rgba(216,180,90,.55); outline-offset: 4px; }
    .explore-panchkarma-cta-arrow { display: inline-block; transition: transform .28s ease; }
    .explore-panchkarma-cta:hover .explore-panchkarma-cta-arrow { transform: translateX(4px); }
    .panchkarma-journey .explore-panchkarma-cta-section { margin-top: clamp(2.5rem, 5vw, 4rem); padding: 0; background: transparent; }
    .panchkarma-journey .explore-panchkarma-cta { width: auto; min-height: 3.25rem; padding: .9rem 1.5rem; background: #174d35; color: #fff; box-shadow: 0 8px 18px rgba(23,77,53,.16); }
    .panchkarma-journey .explore-panchkarma-cta:hover { background: #b0802d; box-shadow: 0 10px 22px rgba(176,128,45,.2); }
    .panchkarma-journey .explore-panchkarma-cta:focus-visible { outline-color: rgba(176,128,45,.55); }
    .patient-stories { position: relative; overflow: hidden; padding: clamp(4.5rem, 9vw, 7rem) 1.25rem; background: #f7f1e8; color: #203d35; }
    .patient-stories-inner { max-width: 78rem; margin: 0 auto; }
    .patient-stories-header, .patient-stories-subheading { max-width: 48rem; margin: 0 auto clamp(2.5rem, 5vw, 4rem); text-align: center; }
    .patient-stories-eyebrow { margin: 0 0 .75rem; color: #b0802d; font: 800 .68rem/1.3 Manrope, sans-serif; letter-spacing: .2em; }
    .patient-stories-header h2, .patient-stories-subheading h3 { margin: 0; color: #174d35; font: 400 clamp(2.2rem, 4.5vw, 3.5rem)/1.05 "DM Serif Display", Georgia, serif; }
    .patient-stories-header > p:not(.patient-stories-eyebrow), .patient-stories-subheading > p:last-child { margin: 1rem auto 0; color: #68776e; font: clamp(.88rem, 1.5vw, 1rem)/1.7 Manrope, sans-serif; }
    .patient-stories-trust { display: flex; align-items: center; justify-content: center; gap: .7rem; margin: 1.3rem 0; color: #174d35; font-size: .78rem; }
    .patient-stories-trust span, .patient-story-stars { color: #b0802d; letter-spacing: .16em; }
    .patient-stories-share, .patient-stories-share-submit { border: 0; background: #174d35; color: #fff; }
    .patient-story-featured { display: grid; grid-template-columns: minmax(14rem, .75fr) minmax(0, 1.25fr); gap: clamp(1.5rem, 5vw, 4rem); align-items: center; max-width: 66rem; margin: 0 auto clamp(4rem, 8vw, 6rem); padding: clamp(1.25rem, 4vw, 2.5rem); border: 1px solid rgba(23,77,53,.13); border-radius: 1.5rem; background: #fffdf9; box-shadow: 0 1rem 2.5rem rgba(23,77,53,.08); }
    .patient-story-featured-image { display: grid; min-height: 15rem; place-items: center; border-radius: 1rem; background: linear-gradient(145deg, #dbe8d7, #ead9c2); color: #174d35; }
    .patient-story-featured-image span { display: grid; width: 5rem; height: 5rem; place-items: center; border: 1px solid rgba(23,77,53,.25); border-radius: 50%; font: 400 2.2rem "DM Serif Display", Georgia, serif; }
    .patient-story-featured-image small { margin-top: -4rem; font-size: .68rem; font-weight: 800; letter-spacing: .08em; }
    .patient-story-featured blockquote { margin: 1rem 0; color: #40584f; font: italic clamp(1.15rem, 2.5vw, 1.6rem)/1.55 "DM Serif Display", Georgia, serif; }
    .patient-story-featured-meta, .patient-story-featured-meta span { color: #68776e; font: .8rem/1.6 Manrope, sans-serif; }
    .patient-story-featured-meta { margin: 0; }
    .patient-stories-filter-wrap { margin-bottom: 1.5rem; text-align: center; }
    .patient-stories-filter-wrap h3 { margin: 0 0 1rem; color: #174d35; font: 400 1.7rem "DM Serif Display", Georgia, serif; }
    .patient-stories-filters { display: flex; flex-wrap: wrap; justify-content: center; gap: .5rem; }
    .patient-stories-filter { padding: .55rem .8rem; border: 1px solid rgba(23,77,53,.2); border-radius: 999px; background: transparent; color: #52645a; cursor: pointer; font: 700 .68rem Manrope, sans-serif; }
    .patient-stories-filter.is-selected, .patient-stories-filter:hover { border-color: #174d35; background: #174d35; color: #fff; }
    .patient-stories-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
    .patient-stories-carousel { position: relative; }
    .patient-stories-carousel .patient-stories-grid { display: flex; overflow-x: auto; gap: 1rem; padding: .35rem .25rem 1.25rem; scroll-snap-type: x mandatory; scrollbar-width: none; overscroll-behavior-x: contain; }
    .patient-stories-carousel .patient-stories-grid::-webkit-scrollbar { display: none; }
    .patient-stories-carousel .patient-story-card { flex: 0 0 calc((100% - 2rem) / 3); scroll-snap-align: start; }
    .patient-stories-carousel-controls { display: flex; align-items: center; justify-content: center; gap: 1.1rem; margin-top: 1.1rem; }
    .patient-stories-carousel-button { display: grid; width: 3.2rem; height: 3.2rem; place-items: center; border: 2px solid #174d35; border-radius: 50%; background: transparent; color: #174d35; cursor: pointer; font: 2rem/1 Georgia, serif; transition: background .2s ease, color .2s ease, transform .2s ease; }
    .patient-stories-carousel-button:hover { background: #174d35; color: #fff; transform: translateY(-2px); }
    .patient-stories-carousel-dots { display: flex; align-items: center; gap: .55rem; }
    .patient-stories-carousel-dot { width: .72rem; height: .72rem; padding: 0; border: 0; border-radius: 50%; background: #cbd7ce; cursor: pointer; }
    .patient-stories-carousel-dot.is-active { width: 2.2rem; border-radius: 999px; background: #174d35; }
    .patient-story-card { display: flex; min-height: 18rem; flex-direction: column; padding: 1.35rem; border: 1px solid rgba(23,77,53,.12); border-radius: 1rem; background: #fffdf9; box-shadow: 0 .8rem 1.8rem rgba(23,77,53,.06); transition: transform .25s ease, box-shadow .25s ease; }
    .patient-story-card:hover { transform: translateY(-4px); box-shadow: 0 1.1rem 2.2rem rgba(23,77,53,.12); }
    .patient-story-avatar, .patient-journey-avatar { display: grid; width: 2.8rem; height: 2.8rem; place-items: center; border-radius: 50%; background: #e4eee3; color: #174d35; font: 400 1.2rem "DM Serif Display", Georgia, serif; }
    .patient-story-avatar img { width: 100%; height: 100%; border-radius: inherit; object-fit: cover; }
    .patient-story-card .patient-story-stars { margin-top: 1rem; font-size: .72rem; }
    .patient-story-quote { margin: .9rem 0 1.1rem; color: #40584f; font: italic 1rem/1.6 "DM Serif Display", Georgia, serif; }
    .patient-story-meta { display: grid; gap: .18rem; margin-top: auto; color: #68776e; font-size: .72rem; }
    .patient-story-meta strong { color: #174d35; font-size: .82rem; }
    .patient-story-read { width: fit-content; margin-top: 1rem; padding: 0; border: 0; background: transparent; color: #b0802d; cursor: pointer; font: 800 .7rem Manrope, sans-serif; }
    .patient-story-read span { margin-left: .25rem; }
    .patient-stories-empty { margin: 2rem 0; color: #68776e; text-align: center; }
    .patient-journeys { margin-top: clamp(4rem, 8vw, 6rem); }
    .patient-journey-card { display: grid; grid-template-columns: auto 1fr; gap: 1.2rem; align-items: center; margin-bottom: 1rem; padding: 1.3rem; border: 1px solid rgba(23,77,53,.12); border-radius: 1rem; background: rgba(255,253,249,.72); }
    .patient-journey-card h4 { margin: 0; color: #174d35; font: 400 1.5rem "DM Serif Display", Georgia, serif; }
    .patient-journey-card p { margin: .35rem 0 0; color: #68776e; font-size: .82rem; line-height: 1.6; }
    .patient-journey-card .patient-stories-eyebrow { margin-bottom: .35rem; }
    .patient-journey-meta { color: #b0802d !important; font-weight: 700; }
    .patient-care-timeline { margin-top: clamp(4rem, 8vw, 6rem); padding: clamp(1.5rem, 4vw, 3rem); border-radius: 1.5rem; background: #e8f0e2; }
    .patient-care-timeline ol { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin: 0; padding: 0; list-style: none; }
    .patient-care-timeline li { display: grid; gap: .5rem; color: #174d35; }
    .patient-care-timeline li span { color: #b0802d; font-size: .72rem; font-weight: 800; letter-spacing: .12em; }
    .patient-care-timeline li strong { font: 400 1.25rem/1.2 "DM Serif Display", Georgia, serif; }
    .patient-stories-disclaimer { max-width: 54rem; margin: clamp(3rem, 7vw, 5rem) auto 0; padding: 1.5rem; border-left: 3px solid #b0802d; background: rgba(255,253,249,.6); }
    .patient-stories-disclaimer h3, .patient-stories-review h3 { margin: 0; color: #174d35; font: 400 1.7rem "DM Serif Display", Georgia, serif; }
    .patient-stories-disclaimer p, .patient-stories-review p { margin: .65rem 0 0; color: #68776e; font-size: .82rem; line-height: 1.7; }
    .patient-stories-review { margin: 2rem auto 0; text-align: center; }
    .patient-stories-review-link { display: inline-block; margin-top: 1rem; }
    .patient-story-modal, .patient-share-modal { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; padding: 1rem; background: rgba(9,36,27,.66); }
    .patient-story-modal[hidden], .patient-share-modal[hidden] { display: none; }
    .patient-story-modal-card, .patient-share-modal-card { position: relative; width: min(100%, 34rem); padding: 2rem; border-radius: 1rem; background: #fffdf9; box-shadow: 0 1.5rem 4rem rgba(0,0,0,.25); }
    .patient-story-modal-card h3, .patient-share-modal-card h3 { margin: 0; color: #174d35; font: 400 2rem "DM Serif Display", Georgia, serif; }
    .patient-story-modal-meta, .patient-story-modal-copy { color: #68776e; line-height: 1.7; }
    .patient-story-modal-copy { margin-top: 1.3rem; }
    .patient-story-modal-close, .patient-share-modal-close { position: absolute; top: .7rem; right: .9rem; border: 0; background: transparent; color: #174d35; cursor: pointer; font-size: 1.8rem; }
    .patient-share-modal-card { display: grid; gap: .75rem; max-height: min(90vh, 42rem); overflow-y: auto; }
    .patient-share-modal-card label { display: grid; gap: .3rem; color: #174d35; font-size: .72rem; font-weight: 800; }
    .patient-share-modal-card input, .patient-share-modal-card textarea { width: 100%; padding: .65rem; border: 1px solid rgba(23,77,53,.2); border-radius: .45rem; font: .82rem Manrope, sans-serif; }
    .patient-share-modal-card textarea { min-height: 5rem; resize: vertical; }
    .homepage-appointment { position: relative; overflow: hidden; background: #f7f1e8; color: #fff; }
    .homepage-appointment-hero { padding: clamp(4.5rem, 9vw, 7rem) 1.25rem 3rem; background: radial-gradient(circle at 85% 10%, rgba(66,111,75,.35), transparent 34%), #123f2d; }
    .homepage-appointment-inner, .homepage-appointment-form-wrap { width: min(100%, 78rem); margin: 0 auto; }
    .homepage-appointment-eyebrow { display: flex; align-items: center; gap: .7rem; margin: 0 0 1rem; color: #d9ae4f; font: 800 .68rem/1.3 Manrope, sans-serif; letter-spacing: .2em; }
    .homepage-appointment-eyebrow span { display: inline-block; width: 2.4rem; height: 1px; background: #d9ae4f; }
    .homepage-appointment h2 { margin: 0; font: 400 clamp(2.8rem, 7vw, 5.8rem)/.95 "DM Serif Display", Georgia, serif; }
    .homepage-appointment h2 em { color: #d9ae4f; }
    .homepage-appointment-lead { max-width: 42rem; margin: 1.5rem 0 2.5rem; color: #d9e7dd; font: 1rem/1.7 Manrope, sans-serif; }
    .homepage-appointment-info-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: .8rem; }
    .homepage-appointment-info-grid article { display: flex; gap: .8rem; min-height: 9rem; padding: 1.1rem; border: 1px solid rgba(255,255,255,.17); border-radius: 1rem; background: rgba(255,255,255,.08); backdrop-filter: blur(8px); }
    .homepage-appointment-icon { color: #d9ae4f; font-size: 1.4rem; }
    .homepage-appointment-info-grid h3, .homepage-appointment-whatsapp h3 { margin: 0; color: #fff; font: 400 1.15rem/1.2 "DM Serif Display", Georgia, serif; }
    .homepage-appointment-info-grid p { margin: .45rem 0 0; color: #c5d9cc; font-size: .75rem; line-height: 1.5; }
    .homepage-appointment-info-grid a { color: inherit; }
    .homepage-appointment-whatsapp { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1rem; padding: 1.25rem 1.5rem; border-radius: 1rem; background: #1c6849; }
    .homepage-appointment-whatsapp .homepage-appointment-eyebrow { margin-bottom: .45rem; }
    .homepage-appointment-whatsapp-button, .homepage-appointment-submit { display: inline-flex; min-height: 3rem; align-items: center; justify-content: center; padding: .75rem 1.25rem; border: 0; border-radius: 999px; background: #d9ae4f; color: #173f2f; cursor: pointer; font: 800 .75rem Manrope, sans-serif; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease; }
    .homepage-appointment-whatsapp-button:hover, .homepage-appointment-submit:hover { transform: translateY(-2px); box-shadow: 0 .6rem 1.2rem rgba(0,0,0,.16); }
    .homepage-appointment-form-wrap { padding: 0 1.25rem 5rem; color: #174d35; }
    .homepage-appointment-form { margin-top: -1rem; padding: clamp(1.5rem, 4vw, 3rem); border-radius: 1.5rem; background: #fffdf9; box-shadow: 0 1rem 3rem rgba(23,77,53,.12); }
    .homepage-appointment-form h3 { margin: 0; font: 400 clamp(2rem, 4vw, 3rem)/1.1 "DM Serif Display", Georgia, serif; }
    .homepage-appointment-form-lead { margin: .7rem 0 1.7rem; color: #68776e; font-size: .85rem; }
    .homepage-appointment-fields { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    .homepage-appointment-fields label { display: grid; gap: .4rem; color: #174d35; font-size: .72rem; font-weight: 800; }
    .homepage-appointment-fields input, .homepage-appointment-fields select, .homepage-appointment-fields textarea { width: 100%; min-height: 3rem; padding: .75rem .85rem; border: 1px solid rgba(23,77,53,.18); border-radius: .55rem; background: #fff; color: #40584f; font: .82rem Manrope, sans-serif; }
    .homepage-appointment-fields textarea { min-height: 7rem; resize: vertical; }
    .homepage-appointment-wide { grid-column: 1 / -1; }
    .homepage-appointment-submit { width: min(100%, 20rem); margin-top: 1.4rem; background: #174d35; color: #fff; }
    .homepage-appointment-status { min-height: 1.4rem; margin: .8rem 0 0; color: #174d35; font-size: .78rem; line-height: 1.5; }
    .homepage-floating-actions { position: fixed; right: 1rem; bottom: 1rem; z-index: 20; display: grid; gap: .55rem; }
    .homepage-floating-actions a, .homepage-floating-actions button { display: grid; min-width: 3rem; min-height: 3rem; place-items: center; padding: .4rem .65rem; border: 0; border-radius: 999px; background: #174d35; color: #fff; box-shadow: 0 .4rem 1rem rgba(0,0,0,.18); cursor: pointer; font: 800 .68rem Manrope, sans-serif; text-decoration: none; }
    .homepage-floating-actions a:nth-child(2) { background: #1c6849; }
    .homepage-floating-actions span { display: none; }
    @media (max-width: 900px) { .homepage-appointment-info-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 560px) { .homepage-appointment-hero { padding-inline: 1rem; } .homepage-appointment-info-grid, .homepage-appointment-fields { grid-template-columns: 1fr; } .homepage-appointment-whatsapp { align-items: flex-start; flex-direction: column; } .homepage-appointment-whatsapp-button, .homepage-appointment-submit { width: 100%; } .homepage-appointment-form-wrap { padding-inline: 1rem; } .homepage-appointment-wide { grid-column: auto; } .homepage-floating-actions { right: .75rem; bottom: calc(.75rem + env(safe-area-inset-bottom)); } }
    .find-us-section { padding: clamp(4.5rem, 9vw, 7rem) 1.25rem; background: #f7f1e8; color: #174d35; }
    .find-us-inner { width: min(100%, 78rem); margin: 0 auto; }
    .find-us-header { max-width: 48rem; margin: 0 auto 2.5rem; text-align: center; }
    .find-us-eyebrow { margin: 0 0 .75rem; color: #b0802d; font: 800 .68rem/1.3 Manrope, sans-serif; letter-spacing: .2em; }
    .find-us-header h2 { margin: 0; font: 400 clamp(2.2rem, 4.5vw, 3.8rem)/1.05 "DM Serif Display", Georgia, serif; }
    .find-us-header h2 em { color: #b0802d; }
    .find-us-header > p:last-child { margin: 1rem auto 0; color: #68776e; font: clamp(.88rem, 1.5vw, 1rem)/1.7 Manrope, sans-serif; }
    .find-us-layout { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(18rem, .85fr); gap: 1.25rem; align-items: stretch; }
    .find-us-map-wrap { padding: .5rem; border: 1px solid rgba(23,77,53,.12); border-radius: 1.4rem; background: #fffdf9; box-shadow: 0 .8rem 2rem rgba(23,77,53,.08); }
    .find-us-map-wrap iframe { display: block; width: 100%; height: 25rem; border: 0; border-radius: 1rem; }
    .find-us-map-actions { display: flex; flex-wrap: wrap; gap: .7rem; padding: .8rem .25rem .25rem; }
    .find-us-button, .find-us-full-contact { display: inline-flex; min-height: 2.9rem; align-items: center; justify-content: center; padding: .75rem 1rem; border-radius: 999px; background: #174d35; color: #fff; font: 800 .72rem Manrope, sans-serif; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease; }
    .find-us-button:hover, .find-us-full-contact:hover { transform: translateY(-2px); box-shadow: 0 .5rem 1rem rgba(23,77,53,.16); }
    .find-us-button-secondary { background: #b0802d; }
    .find-us-cards { display: grid; gap: .8rem; }
    .find-us-card { display: flex; gap: 1rem; padding: 1.2rem; border: 1px solid rgba(23,77,53,.1); border-radius: 1rem; background: #fffdf9; box-shadow: 0 .6rem 1.5rem rgba(23,77,53,.06); }
    .find-us-card > span { flex: 0 0 2rem; font-size: 1.35rem; }
    .find-us-card h3, .find-us-whatsapp h3 { margin: 0; color: #174d35; font: 400 1.25rem/1.2 "DM Serif Display", Georgia, serif; }
    .find-us-card p, .find-us-card address { margin: .5rem 0 0; color: #68776e; font: .8rem/1.6 Manrope, sans-serif; font-style: normal; }
    .find-us-card strong { color: #174d35; }
    .find-us-card a { display: inline-block; margin-top: .55rem; color: #b0802d; font: 800 .72rem Manrope, sans-serif; }
    .find-us-whatsapp { display: flex; align-items: center; gap: 1rem; margin-top: 1.25rem; padding: 1.3rem 1.5rem; border-radius: 1rem; background: #e2eee1; }
    .find-us-whatsapp > span { font-size: 1.5rem; }
    .find-us-whatsapp p { margin: .3rem 0 0; color: #68776e; font-size: .8rem; }
    .find-us-whatsapp .find-us-button { margin-left: auto; white-space: nowrap; }
    .find-us-social { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 2rem; text-align: center; }
    .find-us-social .find-us-eyebrow { margin: 0; }
    .find-us-social > div { display: flex; flex-wrap: wrap; justify-content: center; gap: .55rem; }
    .find-us-social a { padding: .65rem .9rem; border: 1px solid rgba(23,77,53,.2); border-radius: 999px; color: #174d35; font: 800 .72rem Manrope, sans-serif; text-decoration: none; }
    .find-us-social a:hover { border-color: #174d35; background: #174d35; color: #fff; }
    .find-us-full-contact { width: 100%; margin-top: 1.25rem; }
    @media (max-width: 900px) { .find-us-layout { grid-template-columns: 1fr; } }
    @media (max-width: 560px) { .find-us-section { padding-inline: 1rem; } .find-us-map-wrap iframe { height: 20rem; } .find-us-map-actions > * { flex: 1 1 10rem; } .find-us-whatsapp { align-items: flex-start; flex-wrap: wrap; } .find-us-whatsapp .find-us-button { width: 100%; margin-left: 0; } .find-us-social { align-items: center; flex-direction: column; } }
    @media (min-width: 701px) {
      .site-header { position: sticky !important; top: 0; left: 0; right: 0; z-index: 30; border-bottom: 1px solid rgba(217,174,79,.18) !important; background: rgba(8,53,36,.98) !important; box-shadow: 0 .7rem 1.5rem rgba(0,0,0,.12); }
      .site-header__inner { display: grid !important; grid-template-columns: auto minmax(0, 1fr) auto auto; width: min(100% - 4rem, 120rem) !important; min-height: 5.8rem !important; margin: 0 auto; gap: 1.25rem !important; align-items: center; }
      .site-header__brand { flex: 0 0 auto; gap: 1.8rem !important; }
      .site-header__logo { width: 3.7rem !important; height: 3.7rem !important; }
      .site-header__clinic-name { color: #fff !important; font-size: 1.18rem !important; letter-spacing: .01em !important; }
      .site-header__clinic-subtitle { color: #d9ae4f !important; font-size: .72rem !important; letter-spacing: .08em !important; }
      .site-header__nav { position: static !important; display: flex !important; width: auto !important; height: auto !important; min-width: 0; flex-flow: row nowrap !important; align-items: center; justify-content: flex-end; gap: .15rem !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }
      .site-header__nav a { padding: .7rem .55rem !important; border: 0 !important; border-radius: .55rem; background: transparent !important; color: rgba(255,255,255,.82) !important; font-size: .74rem !important; font-weight: 800 !important; letter-spacing: 0 !important; text-transform: none !important; white-space: nowrap; box-shadow: none !important; }
      .site-header__nav a[href="#approach"] { white-space: nowrap; }
      .site-header__nav a:hover, .site-header__nav a:focus-visible, .site-header__nav .desktop-header-home { border: 0 !important; background: rgba(72,119,77,.35) !important; color: #f2c861 !important; box-shadow: none !important; }
      .site-header__cta { margin-left: .4rem; padding: .85rem 1.25rem !important; border-radius: 999px !important; background: #e5bd58 !important; color: #123f2d !important; font-size: .82rem !important; }
      .desktop-header-phone { display: inline-flex; flex: 0 0 auto; align-items: center; gap: .55rem; color: #e5bd58; font: 800 .82rem Manrope, sans-serif; text-decoration: none; white-space: nowrap; }
      .desktop-header-phone span { color: #e83f9c; font-size: 1.15rem; }
      .site-header__menu-btn { display: none !important; }
      .site-header__brand { order: 1; }
      .site-header__nav { order: 2; }
      .site-header__cta { order: 3; }
      .desktop-header-phone { order: 4; }
    }
    @media (max-width: 700px) {
      .desktop-header-home, .desktop-header-phone { display: none !important; }
    }
    @media (min-width: 701px) {
      .site-header__brand { gap: 1.8rem !important; }
    }
    @media (min-width: 701px) and (max-width: 1200px) {
      .site-header__inner { width: calc(100% - 2rem) !important; gap: .5rem !important; padding: 0 !important; }
      .site-header__brand { min-width: 10rem; gap: 1.5rem !important; align-items: center !important; }
      .site-header__logo, .site-header__logo img { width: 3rem !important; height: 3rem !important; max-width: 3rem !important; max-height: 3rem !important; object-fit: contain !important; }
      .site-header__clinic-info { min-width: 0; }
      .site-header__clinic-name { overflow: hidden; color: #fff !important; font-size: .78rem !important; line-height: 1.1 !important; text-overflow: ellipsis; white-space: nowrap; }
      .site-header__clinic-subtitle { color: #d9ae4f !important; font-size: .5rem !important; letter-spacing: .04em !important; line-height: 1.2 !important; white-space: nowrap; }
      .site-header__nav { gap: 0 !important; }
      .site-header__nav a { padding: .65rem .3rem !important; border: 0 !important; font-size: .61rem !important; line-height: 1 !important; white-space: nowrap; }
      .site-header__cta { margin-left: .15rem; padding: .7rem .8rem !important; font-size: .68rem !important; }
      .desktop-header-phone { gap: .3rem; font-size: .66rem; }
      .desktop-header-phone span { font-size: .9rem; }
    }
    .patient-share-permission { display: flex !important; grid-template-columns: auto 1fr; align-items: start; gap: .5rem; }
    .patient-share-permission input { width: auto; }
    .patient-share-status { color: #174d35; font-size: .78rem; line-height: 1.5; }
    @media (max-width: 900px) { .patient-stories-carousel .patient-story-card { flex-basis: calc((100% - 1rem) / 2); } .patient-care-timeline ol { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 560px) { .patient-stories { padding-inline: 1rem; } .patient-story-featured { grid-template-columns: 1fr; } .patient-story-featured-image { min-height: 11rem; } .patient-stories-carousel .patient-story-card { flex-basis: 100%; } .patient-journey-card { grid-template-columns: 1fr; } .patient-care-timeline ol { grid-template-columns: 1fr; } .patient-stories-filter { font-size: .64rem; } }
    @media (prefers-reduced-motion: reduce) { .patient-story-card { transition: none; } }
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
    @media (min-width: 701px) and (max-width: 1100px) { .panchkarma-journey { padding-inline: clamp(1.5rem, 4vw, 3rem); } .panchkarma-journey-inner { max-width: 64rem; } .panchkarma-journey-header { max-width: 58rem; } .panchkarma-timeline { gap: 3.5rem; } .panchkarma-stage { grid-template-columns: minmax(0, 1fr) 3.5rem minmax(0, 1fr); gap: 1.5rem; } .panchkarma-stage-copy h3 { font-size: clamp(1.7rem, 3vw, 2.2rem); } .panchkarma-stage-copy > p:not(.panchkarma-stage-number) { font-size: .9rem; } .panchkarma-stage-image-wrap { aspect-ratio: 1.35 / 1; } }
    @media (max-width: 700px) { .panchkarma-journey { overflow-x: hidden; padding-inline: 1rem; } .panchkarma-journey-header { max-width: 100%; } .panchkarma-journey-heading-image { width: 100%; max-width: 100%; } .panchkarma-timeline { gap: 3.5rem; } .panchkarma-timeline-line { top: 1.5rem; bottom: 1.5rem; left: 1.25rem; } .panchkarma-stage, .panchkarma-stage:nth-of-type(even) { display: grid; grid-template-columns: 2.5rem minmax(0, 1fr); gap: 1rem; align-items: start; } .panchkarma-stage:nth-of-type(even) .panchkarma-stage-image-wrap, .panchkarma-stage:nth-of-type(even) .panchkarma-stage-copy { grid-column: 2; grid-row: auto; text-align: left; } .panchkarma-stage-marker { width: 2.5rem; height: 2.5rem; } .panchkarma-stage-image-wrap { grid-column: 2; grid-row: 1; aspect-ratio: 1.35 / 1; border-radius: 18px; } .panchkarma-stage-copy { grid-column: 2; grid-row: 2; } .panchkarma-stage-copy > p:not(.panchkarma-stage-number) { max-width: none; } }
    @media (max-width: 560px) { .explore-panchkarma-cta-section { padding: 2rem 1rem; } .explore-panchkarma-cta { width: 90%; min-height: 3.25rem; padding-inline: 1rem; white-space: nowrap; } .panchkarma-journey .explore-panchkarma-cta-section { padding: 0; } .panchkarma-journey .explore-panchkarma-cta { width: min(100%, 21rem); white-space: normal; } }
    @media (prefers-reduced-motion: reduce) { .panchkarma-stage, .panchkarma-stage-copy, .panchkarma-stage-image { transition: none; } }
  `;
  document.head.appendChild(style);

  const observeScrollSections = () => {
    removeExtraSpecialistSection();
    addTreatmentsButton();
    addPanchkarmaJourney();
    const appointmentSection = document.querySelector("#homepage-appointment");
    if (appointmentSection) {
      const appointmentButtons = [
        ...document.querySelectorAll(".clinic-cta-book"),
        ...[...document.querySelectorAll("button")].filter((button) => button.textContent.trim().toLowerCase() === "book appointment"),
      ];
      appointmentButtons.forEach((button) => {
        if (button.dataset.appointmentWired === "true") return;
        button.dataset.appointmentWired = "true";
        button.addEventListener("click", (event) => {
          event.preventDefault();
          appointmentSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
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