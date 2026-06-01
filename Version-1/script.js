const state = {
  currentPage: "home",
  loggedIn: false,
  currentUser: null,
  selectedDoctor: null,
  selectedSlot: null,
  selectedDate: null,
  language: "en",
  darkMode: false,
  offline: false,
  doctors: [
    {
      id: "doc-1",
      name: "Dr. Aathira Nair",
      specialty: "Cardiology",
      rating: 4.9,
      experience: 14,
      location: "Sunrise Heart Clinic",
      waitTime: "10 min",
      patientScore: "98%",
      image:
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
      bio: "Patient-centered cardiologist committed to reducing anxiety and delivering clear care plans.",
      slots: ["09:00 AM", "10:30 AM", "12:00 PM", "02:30 PM", "04:00 PM"],
      bookedSlots: ["10:30 AM"],
      category: "Heart",
      tags: ["Cardio", "Men", "Heart health"],
      comparison: { availability: "Good", reviews: "Excellent", price: "₹750" },
    },
    {
      id: "doc-2",
      name: "Dr. Vishal Reddy",
      specialty: "Dermatology",
      rating: 4.7,
      experience: 10,
      location: "ClearSkin Clinic",
      waitTime: "8 min",
      patientScore: "95%",
      image:
        "https://images.unsplash.com/photo-1580281657521-35a2f658dd58?auto=format&fit=crop&w=800&q=80",
      bio: "Friendly dermatologist focused on easy-to-follow skincare and rapid relief.",
      slots: ["09:30 AM", "11:00 AM", "01:00 PM", "03:30 PM"],
      bookedSlots: ["01:00 PM"],
      category: "Skin",
      tags: ["Skin", "Acne", "Cosmetic"],
      comparison: { availability: "Best", reviews: "Very Good", price: "₹680" },
    },
    {
      id: "doc-3",
      name: "Dr. Priya Menon",
      specialty: "Pediatrics",
      rating: 4.8,
      experience: 12,
      location: "Little Care Pediatrics",
      waitTime: "5 min",
      patientScore: "96%",
      image:
        "https://images.unsplash.com/photo-1580281657521-414daa3a72ab?auto=format&fit=crop&w=800&q=80",
      bio: "Compassionate pediatrician helping children feel comfortable during every visit.",
      slots: ["08:30 AM", "10:00 AM", "11:30 AM", "02:00 PM"],
      bookedSlots: ["08:30 AM"],
      category: "Child Care",
      tags: ["Children", "Vaccination", "Wellness"],
      comparison: { availability: "Good", reviews: "Excellent", price: "₹720" },
    },
    {
      id: "doc-4",
      name: "Dr. Neha Sharma",
      specialty: "General Physician",
      rating: 4.6,
      experience: 9,
      location: "City Health Center",
      waitTime: "12 min",
      patientScore: "92%",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      bio: "General physician offering fast triage and easy follow-up recommendations.",
      slots: ["09:00 AM", "10:30 AM", "12:30 PM", "03:00 PM"],
      bookedSlots: ["12:30 PM"],
      category: "General",
      tags: ["Primary", "Family", "Acute care"],
      comparison: { availability: "Fair", reviews: "Good", price: "₹550" },
    },
    {
      id: "doc-5",
      name: "Dr. Arjun Gupta",
      specialty: "Orthopedics",
      rating: 4.85,
      experience: 11,
      location: "Motion Orthopedic Center",
      waitTime: "15 min",
      patientScore: "97%",
      image:
        "https://images.unsplash.com/photo-1505751172876-9a137114fb4d?auto=format&fit=crop&w=800&q=80",
      bio: "Expert orthopedist supporting fast recovery with clear exercise plans.",
      slots: ["09:15 AM", "11:45 AM", "02:15 PM", "04:30 PM"],
      bookedSlots: ["02:15 PM"],
      category: "Bones",
      tags: ["Joints", "Spine", "Rehab"],
      comparison: { availability: "Good", reviews: "Excellent", price: "₹800" },
    },
  ],
  categories: [
    {
      name: "Cardiology",
      description: "Heart care, blood pressure & tests",
      icon: "❤️",
    },
    {
      name: "Dermatology",
      description: "Skin treatments and skincare",
      icon: "✨",
    },
    {
      name: "Pediatrics",
      description: "Child health and immunizations",
      icon: "🧸",
    },
    {
      name: "General",
      description: "Primary care and quick consultations",
      icon: "🩺",
    },
    {
      name: "Orthopedics",
      description: "Bones, joints and recovery",
      icon: "💪",
    },
  ],
  suggestedDoctors: ["doc-1", "doc-3"],
  appointments: [
    {
      id: "apt-1",
      doctorId: "doc-1",
      date: "2026-05-03",
      time: "10:30 AM",
      status: "Upcoming",
    },
    {
      id: "apt-2",
      doctorId: "doc-4",
      date: "2026-04-20",
      time: "09:00 AM",
      status: "Completed",
    },
  ],
  users: [
    {
      id: "user-1",
      name: "Ananya Kumar",
      email: "ananya@example.com",
    },
  ],
  translations: {
    en: {
      home: "Home",
      search: "Search",
      dashboard: "Dashboard",
      profile: "Profile",
      help: "Help",
      emergency: "Emergency",
      login: "Login",
      signup: "Signup",
      searchPlaceholder: "Search specialists, symptoms, doctors",
    },
    ta: {
      home: "மேடு",
      search: "தேடு",
      dashboard: "டாஷ்போர்ட்",
      profile: "சுயவிவரம்",
      help: "உதவி",
      emergency: "அவசரம்",
      login: "உள் நுழைவு",
      signup: "பதிவு",
      searchPlaceholder: "நிபுணர்கள், அறிகுறிகள், மருத்தவர்கள் தேடு",
    },
  },
};

const ui = {
  pages: document.querySelectorAll(".page"),
  navLinks: document.querySelectorAll(".nav-link"),
  pageButtons: document.querySelectorAll("[data-target]"),
  categoryGrid: document.getElementById("categoryGrid"),
  featuredDoctors: document.getElementById("featuredDoctors"),
  homeSearchForm: document.getElementById("homeSearchForm"),
  homeSearchInput: document.getElementById("homeSearchInput"),
  searchForm: document.getElementById("searchForm"),
  searchQuery: document.getElementById("searchQuery"),
  filterSpecialization: document.getElementById("filterSpecialization"),
  filterRating: document.getElementById("filterRating"),
  doctorResults: document.getElementById("doctorResults"),
  comparisonPanel: document.getElementById("comparisonPanel"),
  symptomForm: document.getElementById("symptomForm"),
  symptomInput: document.getElementById("symptomInput"),
  symptomResult: document.getElementById("symptomResult"),
  loginForm: document.getElementById("loginForm"),
  signupForm: document.getElementById("signupForm"),
  loginEmail: document.getElementById("loginEmail"),
  loginPassword: document.getElementById("loginPassword"),
  signupName: document.getElementById("signupName"),
  signupEmail: document.getElementById("signupEmail"),
  signupPassword: document.getElementById("signupPassword"),
  loginEmailError: document.getElementById("loginEmailError"),
  loginPasswordError: document.getElementById("loginPasswordError"),
  signupNameError: document.getElementById("signupNameError"),
  signupEmailError: document.getElementById("signupEmailError"),
  signupPasswordError: document.getElementById("signupPasswordError"),
  userNameDisplay: document.getElementById("userNameDisplay"),
  upcomingList: document.getElementById("upcomingList"),
  suggestedDoctors: document.getElementById("suggestedDoctors"),
  appointmentTimeline: document.getElementById("appointmentTimeline"),
  booking: document.getElementById("booking"),
  doctorProfile: document.getElementById("doctorProfile"),
  bookingDoctorName: document.getElementById("bookingDoctorName"),
  bookingDoctorSpecialty: document.getElementById("bookingDoctorSpecialty"),
  bookingSlotGrid: document.getElementById("bookingSlotGrid"),
  confirmBookingBtn: document.getElementById("confirmBookingBtn"),
  bookingError: document.getElementById("bookingError"),
  selectedSlotText: document.getElementById("selectedSlotText"),
  appointmentDate: document.getElementById("appointmentDate"),
  confirmDoctorName: document.getElementById("confirmDoctorName"),
  confirmDate: document.getElementById("confirmDate"),
  confirmTime: document.getElementById("confirmTime"),
  confirmLocation: document.getElementById("confirmLocation"),
  profileName: document.getElementById("profileName"),
  profileEmail: document.getElementById("profileEmail"),
  historyList: document.getElementById("historyList"),
  profileDoctorName: document.getElementById("profileDoctorName"),
  profileDoctorSpecialty: document.getElementById("profileDoctorSpecialty"),
  profileDoctorRating: document.getElementById("profileDoctorRating"),
  profileDoctorExperience: document.getElementById("profileDoctorExperience"),
  profileDoctorBio: document.getElementById("profileDoctorBio"),
  profileImage: document.getElementById("profileImage"),
  waitTime: document.getElementById("waitTime"),
  doctorLocation: document.getElementById("doctorLocation"),
  patientScore: document.getElementById("patientScore"),
  slotGrid: document.getElementById("slotGrid"),
  bookingDoctorProfileName: document.getElementById("bookingDoctorName"),
  helpFaqToggles: document.querySelectorAll(".faq-toggle"),
  faqAnswers: document.querySelectorAll(".faq-answer"),
  themeToggle: document.getElementById("themeToggle"),
  langToggle: document.getElementById("langToggle"),
  offlineBanner: document.getElementById("offlineBanner"),
  notificationPanel: document.getElementById("notificationPanel"),
  voiceBtn: document.getElementById("voiceBtn"),
  voiceSearchBtn: document.getElementById("voiceSearchBtn"),
};

function navigateTo(page) {
  state.currentPage = page;
  ui.pages.forEach((section) => {
    section.classList.toggle("active-page", section.id === page);
  });
  ui.navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.target === page);
  });
}

function initNavigation() {
  ui.pageButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const target = btn.dataset.target;
      if (target) {
        navigateTo(target);
      }
    });
  });
  ui.navLinks.forEach((link) => {
    link.addEventListener("click", () => navigateTo(link.dataset.target));
  });
}

function renderCategories() {
  ui.categoryGrid.innerHTML = state.categories
    .map(
      (category) => `
    <div class="category-card">
      <div class="category-icon">${category.icon}</div>
      <strong>${category.name}</strong>
      <p>${category.description}</p>
    </div>
  `,
    )
    .join("");
}

function createDoctorCard(doctor) {
  const features = doctor.tags.map((tag) => `<span>${tag}</span>`).join(" ");
  return `
    <article class="doctor-card" role="article" aria-label="Doctor profile for ${doctor.name}">
      <img src="${doctor.image}" alt="Portrait of ${doctor.name}" />
      <div>
        <h4>${doctor.name}</h4>
        <p>${doctor.specialty}</p>
        <div class="doctor-meta">
          <span>⭐ ${doctor.rating}</span>
          <span>${doctor.experience} yrs</span>
          <span>${doctor.location}</span>
        </div>
        <p>${doctor.bio}</p>
        <div class="doctor-meta">
          <button class="secondary-btn small-btn" data-action="view-profile" data-id="${doctor.id}">View Profile</button>
          <button class="primary-btn small-btn" data-action="book-now" data-id="${doctor.id}">Book</button>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedDoctors() {
  ui.featuredDoctors.innerHTML = state.doctors
    .slice(0, 4)
    .map(createDoctorCard)
    .join("");
}

function renderSuggestedDoctors() {
  ui.suggestedDoctors.innerHTML = state.suggestedDoctors
    .map((id) => {
      const doctor = state.doctors.find((doc) => doc.id === id);
      return doctor ? `<p>• ${doctor.name} — ${doctor.specialty}</p>` : "";
    })
    .join("");
}

function renderUpcomingAppointments() {
  ui.upcomingList.innerHTML =
    state.appointments
      .filter((item) => item.status === "Upcoming")
      .map((item) => {
        const doctor = state.doctors.find((doc) => doc.id === item.doctorId);
        return `
      <div class="timeline-item">
        <time>${item.date} · ${item.time}</time>
        <h4>${doctor.name}</h4>
        <p>with ${doctor.specialty}</p>
        <button class="secondary-btn small-btn" data-action="rebook" data-id="${doctor.id}">Rebook</button>
      </div>
    `;
      })
      .join("") ||
    "<p>No upcoming appointments. Search doctors to book one.</p>";
}

function renderAppointmentTimeline() {
  ui.appointmentTimeline.innerHTML = state.appointments
    .map((item) => {
      const doctor = state.doctors.find((doc) => doc.id === item.doctorId);
      return `
      <article class="timeline-item">
        <time>${item.date}</time>
        <h4>${doctor.name}</h4>
        <p>${item.status} — ${doctor.specialty}</p>
      </article>
    `;
    })
    .join("");
}

function renderHistory() {
  ui.historyList.innerHTML = state.appointments
    .map((item) => {
      const doctor = state.doctors.find((doc) => doc.id === item.doctorId);
      return `
      <article class="history-card">
        <h4>${doctor.name}</h4>
        <p>${doctor.specialty}</p>
        <p><strong>${item.date}</strong> · ${item.time}</p>
        <button class="secondary-btn small-btn" data-action="rebook" data-id="${doctor.id}">Book Again</button>
      </article>
    `;
    })
    .join("");
}

function renderDoctorResults(doctors = state.doctors) {
  ui.doctorResults.innerHTML = doctors.map(createDoctorCard).join("");
}

function renderComparison() {
  const selected = state.doctors.filter((doc) => doc.comparison.selected);
  const compareSet =
    selected.length >= 2 ? selected.slice(0, 2) : state.doctors.slice(0, 2);
  ui.comparisonPanel.innerHTML = compareSet
    .map(
      (doctor) => `
    <div class="meta-card">
      <h4>${doctor.name}</h4>
      <p>${doctor.specialty}</p>
      <p>Rating: ${doctor.rating}</p>
      <p>Experience: ${doctor.experience} yrs</p>
      <p>Availability: ${doctor.comparison.availability}</p>
      <p>Price: ${doctor.comparison.price}</p>
      <button class="secondary-btn small-btn" data-action="compare" data-id="${doctor.id}">Select</button>
    </div>
  `,
    )
    .join("");
}

function setupDoctorComparison() {
  state.doctors.forEach((doc) => (doc.comparison.selected = false));
}

function updateProfileSummary() {
  const user = state.currentUser || {
    name: "Guest User",
    email: "guest@careconnect.com",
  };
  ui.userNameDisplay.textContent = user.name;
  ui.profileName.textContent = user.name;
  ui.profileEmail.textContent = user.email;
}

function showDoctorProfile(doctorId) {
  const doctor = state.doctors.find((doc) => doc.id === doctorId);
  if (!doctor) return;
  state.selectedDoctor = doctor;
  ui.profileDoctorName.textContent = doctor.name;
  ui.profileDoctorSpecialty.textContent = doctor.specialty;
  ui.profileDoctorRating.textContent = doctor.rating;
  ui.profileDoctorExperience.textContent = doctor.experience;
  ui.profileDoctorBio.textContent = doctor.bio;
  ui.profileImage.src = doctor.image;
  ui.waitTime.textContent = doctor.waitTime;
  ui.doctorLocation.textContent = doctor.location;
  ui.patientScore.textContent = doctor.patientScore;
  renderSlotGrid(doctor.slots, doctor.bookedSlots);
  ui.bookingDoctorName.textContent = doctor.name;
  ui.bookingDoctorSpecialty.textContent = doctor.specialty;
  navigateTo("doctorProfile");
}

function renderSlotGrid(slots, bookedSlots = []) {
  ui.slotGrid.innerHTML = slots
    .map((slot) => {
      const isBooked = bookedSlots.includes(slot);
      return `<button class="slot-card ${isBooked ? "booked" : ""}" data-slot="${slot}" ${isBooked ? "disabled" : ""}>${slot}</button>`;
    })
    .join("");
}

function renderBookingSlots(date = null) {
  if (!state.selectedDoctor) return;
  const doctor = state.selectedDoctor;
  const booked = [...doctor.bookedSlots];
  if (date && date.endsWith("2026-05-03")) {
    booked.push("09:00 AM");
  }
  ui.bookingSlotGrid.innerHTML = doctor.slots
    .map((slot) => {
      const isBooked = booked.includes(slot);
      return `<button class="slot-card ${isBooked ? "booked" : ""}" data-slot="${slot}" ${isBooked ? "disabled" : ""}>${slot}</button>`;
    })
    .join("");
}

function showBookingPage() {
  if (!state.selectedDoctor) return;
  state.selectedSlot = null;
  state.selectedDate =
    ui.appointmentDate.value || new Date().toISOString().slice(0, 10);
  ui.selectedSlotText.textContent = "None";
  ui.confirmBookingBtn.disabled = true;
  renderBookingSlots(state.selectedDate);
  navigateTo("booking");
}

function confirmBooking() {
  if (!state.selectedDoctor || !state.selectedSlot || !state.selectedDate) {
    ui.bookingError.textContent =
      "Select a valid date and available slot before confirming.";
    return;
  }

  const appointment = {
    id: `apt-${Date.now()}`,
    doctorId: state.selectedDoctor.id,
    date: state.selectedDate,
    time: state.selectedSlot,
    status: "Upcoming",
  };
  state.appointments.unshift(appointment);
  ui.confirmDoctorName.textContent = state.selectedDoctor.name;
  ui.confirmDate.textContent = state.selectedDate;
  ui.confirmTime.textContent = state.selectedSlot;
  ui.confirmLocation.textContent = state.selectedDoctor.location;
  ui.bookingError.textContent = "";
  showSmartNotification(
    `Appointment confirmed for ${state.selectedDoctor.name}`,
  );
  renderUpcomingAppointments();
  renderAppointmentTimeline();
  renderHistory();
  navigateTo("confirmation");
}

function showSmartNotification(text) {
  const alert = document.createElement("div");
  alert.className = "notification-card success";
  alert.textContent = text;
  ui.notificationPanel.appendChild(alert);
  setTimeout(() => {
    alert.remove();
  }, 4500);
}

function handleDoctorAction(event) {
  const button = event.target.closest("button");
  if (!button) return;
  const action = button.dataset.action;
  const id = button.dataset.id;
  if (action === "view-profile") {
    showDoctorProfile(id);
  }
  if (action === "book-now") {
    showDoctorProfile(id);
    setTimeout(showBookingPage, 250);
  }
  if (action === "rebook") {
    showDoctorProfile(id);
    setTimeout(showBookingPage, 250);
  }
  if (action === "compare") {
    const doctor = state.doctors.find((doc) => doc.id === id);
    if (doctor) doctor.comparison.selected = !doctor.comparison.selected;
    renderComparison();
  }
}

function attachDoctorCardListeners() {
  document.body.addEventListener("click", (event) => {
    handleDoctorAction(event);
  });
}

function bindForms() {
  ui.homeSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    ui.searchQuery.value = ui.homeSearchInput.value;
    renderDoctorResults(
      state.doctors.filter((doc) =>
        filterDoctor(
          doc,
          ui.searchQuery.value,
          ui.filterSpecialization.value,
          ui.filterRating.value,
        ),
      ),
    );
    navigateTo("search");
  });

  ui.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const results = state.doctors.filter((doc) =>
      filterDoctor(
        doc,
        ui.searchQuery.value,
        ui.filterSpecialization.value,
        ui.filterRating.value,
      ),
    );
    renderDoctorResults(results);
  });

  document.getElementById("clearFiltersBtn").addEventListener("click", () => {
    ui.searchQuery.value = "";
    ui.filterSpecialization.value = "";
    ui.filterRating.value = "";
    renderDoctorResults();
  });

  ui.symptomForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const symptom = ui.symptomInput.value.trim().toLowerCase();
    const mapping = {
      headache: "Neurology or General Physician",
      chest: "Cardiology",
      rash: "Dermatology",
      cough: "General Physician",
      fever: "General Physician",
      baby: "Pediatrics",
    };
    const suggestion = Object.keys(mapping).find((key) =>
      symptom.includes(key),
    );
    ui.symptomResult.textContent = suggestion
      ? `Best match: ${mapping[suggestion]}`
      : "Try a different symptom for a better match.";
  });

  ui.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = ui.loginEmail.value.trim();
    const password = ui.loginPassword.value.trim();
    const valid = validateLogin(email, password);
    if (!valid) return;
    state.loggedIn = true;
    state.currentUser = state.users[0];
    updateProfileSummary();
    showSmartNotification("Logged in successfully");
    navigateTo("dashboard");
  });

  ui.signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = ui.signupName.value.trim();
    const email = ui.signupEmail.value.trim();
    const password = ui.signupPassword.value.trim();
    const valid = validateSignup(name, email, password);
    if (!valid) return;
    state.loggedIn = true;
    state.currentUser = { id: `user-${Date.now()}`, name, email };
    state.users.push(state.currentUser);
    updateProfileSummary();
    showSmartNotification("Welcome! Your account is ready.");
    navigateTo("dashboard");
  });

  ui.searchQuery.addEventListener("input", () => {
    ui.searchForm.requestSubmit();
  });

  ui.appointmentDate.addEventListener("change", (event) => {
    state.selectedDate = event.target.value;
    renderBookingSlots(state.selectedDate);
  });

  ui.confirmBookingBtn.addEventListener("click", confirmBooking);

  ui.themeToggle.addEventListener("click", () => {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle("dark", state.darkMode);
  });

  ui.langToggle.addEventListener("click", () => {
    state.language = state.language === "en" ? "ta" : "en";
    ui.langToggle.textContent = state.language === "en" ? "தமிழ்" : "EN";
    applyLanguage();
  });

  ui.helpFaqToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const answer = toggle.nextElementSibling;
      const open = answer.style.display !== "block";
      ui.faqAnswers.forEach((item) => (item.style.display = "none"));
      answer.style.display = open ? "block" : "none";
    });
  });

  ui.voiceBtn.addEventListener("click", () => {
    showSmartNotification("Voice search is ready. Speak now (UI simulation).");
  });
  ui.voiceSearchBtn.addEventListener("click", () => {
    showSmartNotification("Microphone active. Listening... (UI simulation)");
  });
}

function applyLanguage() {
  const labels = state.translations[state.language];
  ui.navLinks.forEach((link) => {
    const label = labels[link.dataset.target] || link.dataset.target;
    link.textContent = label;
  });
  ui.langToggle.setAttribute("aria-label", labels.search);
  ui.homeSearchInput.placeholder = labels.searchPlaceholder;
}

function validateLogin(email, password) {
  let valid = true;
  ui.loginEmailError.textContent = "";
  ui.loginPasswordError.textContent = "";
  if (!email.includes("@")) {
    ui.loginEmailError.textContent = "Enter a valid email address.";
    valid = false;
  }
  if (password.length < 6) {
    ui.loginPasswordError.textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }
  return valid;
}

function validateSignup(name, email, password) {
  let valid = true;
  ui.signupNameError.textContent = "";
  ui.signupEmailError.textContent = "";
  ui.signupPasswordError.textContent = "";
  if (name.length < 2) {
    ui.signupNameError.textContent = "Enter your full name.";
    valid = false;
  }
  if (!email.includes("@")) {
    ui.signupEmailError.textContent = "Enter a valid email address.";
    valid = false;
  }
  if (password.length < 6) {
    ui.signupPasswordError.textContent = "Choose a strong password.";
    valid = false;
  }
  return valid;
}

function filterDoctor(doctor, query, specialization, rating) {
  let match = true;
  if (query) {
    const lower = query.toLowerCase();
    match = [doctor.name, doctor.specialty, doctor.location, doctor.bio].some(
      (text) => text.toLowerCase().includes(lower),
    );
  }
  if (match && specialization) {
    match = doctor.specialty === specialization;
  }
  if (match && rating) {
    match = doctor.rating >= Number(rating);
  }
  return match;
}

function populateSpecializationFilter() {
  const options = [...new Set(state.doctors.map((doc) => doc.specialty))];
  ui.filterSpecialization.innerHTML =
    '<option value="">All specializations</option>' +
    options.map((spec) => `<option value="${spec}">${spec}</option>`).join("");
}

function setupSlotSelection() {
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest(".slot-card");
    if (!button || button.classList.contains("booked")) return;
    if (button.closest("#slotGrid")) {
      ui.slotGrid
        .querySelectorAll(".slot-card")
        .forEach((card) => card.classList.remove("selected"));
      button.classList.add("selected");
      state.selectedSlot = button.dataset.slot;
      showBookingPage();
    }
    if (button.closest("#bookingSlotGrid")) {
      ui.bookingSlotGrid
        .querySelectorAll(".slot-card")
        .forEach((card) => card.classList.remove("selected"));
      button.classList.add("selected");
      state.selectedSlot = button.dataset.slot;
      ui.selectedSlotText.textContent = state.selectedSlot;
      ui.confirmBookingBtn.disabled = false;
      ui.bookingError.textContent = "";
    }
  });
}

function simulateOfflineState() {
  if (state.offline) {
    ui.offlineBanner.hidden = false;
  } else {
    ui.offlineBanner.hidden = true;
  }
}

function init() {
  initNavigation();
  renderCategories();
  renderFeaturedDoctors();
  renderSuggestedDoctors();
  renderUpcomingAppointments();
  renderAppointmentTimeline();
  renderHistory();
  renderDoctorResults();
  setupDoctorComparison();
  renderComparison();
  populateSpecializationFilter();
  updateProfileSummary();
  bindForms();
  attachDoctorCardListeners();
  setupSlotSelection();
  applyLanguage();
  simulateOfflineState();
  ui.appointmentDate.value = new Date().toISOString().slice(0, 10);
}

window.addEventListener("DOMContentLoaded", init);

// Accessibility: enable keyboard navigation for interactive elements
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navigateTo("home");
  }
});
