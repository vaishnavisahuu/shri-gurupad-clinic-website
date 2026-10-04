(function () {
  "use strict";

  document.addEventListener(
    "submit",
    (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      const status = form.querySelector('[role="status"]');
      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) {
          status.textContent = "Please complete the required fields before continuing.";
          status.classList.add("is-visible");
        }
        return;
      }

      const values = Object.fromEntries(
        [...new FormData(form).entries()]
          .filter(([key, value]) => key.toLowerCase() !== "website" && typeof value === "string")
          .map(([key, value]) => [key, String(value).trim()]),
      );
      const date = values.date
        ? new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeZone: "UTC" }).format(
            new Date(`${values.date}T00:00:00Z`),
          )
        : "Not specified";
      const message = [
        "New Appointment Request",
        `Name: ${values.name || "Not provided"}`,
        `Phone: ${values.phone || "Not provided"}`,
        `Date: ${date}`,
        `Time: ${values.time || "Not specified"}`,
        `Treatment/Concern: ${values.service || values.condition || "Not specified"}`,
        `Message: ${values.concern || values.description || "Not provided"}`,
        "",
        "Website: Shri Gurupad Clinic",
      ].join("\n");
      const whatsappUrl = `https://wa.me/917999771845?text=${encodeURIComponent(message)}`;

      if (status) {
        status.textContent = "Your appointment details are ready in WhatsApp. Please review the message and press Send.";
        status.classList.add("is-visible");
      }

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    },
    true,
  );
})();
