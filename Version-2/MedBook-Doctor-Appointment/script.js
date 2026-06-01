/* =====================================================
   MedBook - Online Doctor Appointment System
   JavaScript — All Logic, Mock Data, HCI Interactions
   HCI Principles applied throughout:
   - Shneiderman's 8 Golden Rules
   - Nielsen's Usability Heuristics
   - Gestalt Laws
   - Error Prevention & Recovery
   - Accessibility & Feedback
===================================================== */

'use strict';

// =====================================================
// MOCK DATA
// =====================================================

const DOCTORS = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    spec: "Cardiologist",
    exp: 12,
    rating: 4.9,
    reviews: 312,
    fee: 800,
    lang: ["English", "Hindi", "Tamil"],
    type: "online",
    wait: "~8 min",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    verified: true,
    about: "Dr. Priya Sharma is a board-certified cardiologist with over 12 years of experience treating complex heart conditions. She specializes in preventive cardiology and heart failure management.",
    education: "MBBS – AIIMS Delhi | MD Cardiology – PGI Chandigarh",
    slots: {
      morning: ["9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM"],
      afternoon: ["2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM"],
      evening: ["5:00 PM","5:30 PM","6:00 PM"]
    },
    bookedSlots: ["9:00 AM","10:00 AM","2:30 PM","5:00 PM"],
    reviews_data: [
      { name: "Rajesh K.", stars: 5, text: "Extremely knowledgeable and caring doctor." },
      { name: "Meena S.", stars: 5, text: "She explained everything clearly. Highly recommend." },
      { name: "Arjun P.", stars: 4, text: "Good experience overall, had to wait a bit." }
    ]
  },
  {
    id: 2,
    name: "Dr. Arun Mehta",
    spec: "Dermatologist",
    exp: 8,
    rating: 4.7,
    reviews: 198,
    fee: 600,
    lang: ["English", "Tamil"],
    type: "in-person",
    wait: "~15 min",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
    verified: true,
    about: "Dr. Arun Mehta is a leading dermatologist specializing in acne, eczema, psoriasis, and cosmetic dermatology. He uses the latest non-invasive techniques for skin treatments.",
    education: "MBBS – CMC Vellore | MD Dermatology – JIPMER",
    slots: {
      morning: ["9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM"],
      afternoon: ["1:00 PM","1:30 PM","2:00 PM","3:00 PM","4:30 PM"],
      evening: ["5:00 PM","6:00 PM","6:30 PM"]
    },
    bookedSlots: ["9:30 AM","1:00 PM","6:00 PM"],
    reviews_data: [
      { name: "Sunita R.", stars: 5, text: "My skin cleared up in just 3 sessions!" },
      { name: "Karthik M.", stars: 4, text: "Very thorough examination and clear diagnosis." }
    ]
  },
  {
    id: 3,
    name: "Dr. Lakshmi Nair",
    spec: "Pediatrician",
    exp: 15,
    rating: 4.9,
    reviews: 445,
    fee: 700,
    lang: ["English","Tamil","Malayalam"],
    type: "online",
    wait: "~5 min",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    verified: true,
    about: "Dr. Lakshmi Nair has dedicated her career to child healthcare with 15 years of clinical experience. She specializes in neonatal care, childhood vaccinations, and developmental pediatrics.",
    education: "MBBS – Madras Medical College | MD Pediatrics – AIIMS",
    slots: {
      morning: ["8:30 AM","9:00 AM","9:30 AM","10:00 AM","11:00 AM"],
      afternoon: ["12:00 PM","1:00 PM","2:00 PM","3:30 PM","4:00 PM"],
      evening: ["5:00 PM","5:30 PM"]
    },
    bookedSlots: ["8:30 AM","12:00 PM","2:00 PM"],
    reviews_data: [
      { name: "Ananya T.", stars: 5, text: "Best pediatrician in the city. My son loves her!" },
      { name: "Rohit M.", stars: 5, text: "She's so patient with kids. Highly recommended." },
      { name: "Deepa K.", stars: 5, text: "Always available and very thorough." }
    ]
  },
  {
    id: 4,
    name: "Dr. Vikram Reddy",
    spec: "Neurologist",
    exp: 18,
    rating: 4.8,
    reviews: 267,
    fee: 1200,
    lang: ["English","Telugu","Hindi"],
    type: "online",
    wait: "~12 min",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    verified: true,
    about: "Dr. Vikram Reddy is a senior neurologist with 18 years of experience in treating epilepsy, migraines, stroke, and Parkinson's disease. He has published over 40 research papers internationally.",
    education: "MBBS – Osmania Medical College | DM Neurology – NIMHANS",
    slots: {
      morning: ["10:00 AM","10:30 AM","11:00 AM","11:30 AM"],
      afternoon: ["2:00 PM","3:00 PM","3:30 PM","4:00 PM"],
      evening: ["6:00 PM","6:30 PM"]
    },
    bookedSlots: ["10:00 AM","3:00 PM"],
    reviews_data: [
      { name: "Srinivas P.", stars: 5, text: "Finally found relief from migraines after years." },
      { name: "Kavitha L.", stars: 4, text: "Very experienced and reassuring." }
    ]
  },
  {
    id: 5,
    name: "Dr. Farah Khan",
    spec: "Psychiatrist",
    exp: 10,
    rating: 4.8,
    reviews: 189,
    fee: 900,
    lang: ["English","Hindi","Urdu"],
    type: "online",
    wait: "~10 min",
    img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80",
    verified: true,
    about: "Dr. Farah Khan is a compassionate psychiatrist specializing in anxiety, depression, OCD, and trauma therapy. She uses evidence-based CBT and mindfulness-integrated approaches.",
    education: "MBBS – KMC Manipal | MD Psychiatry – NIMHANS",
    slots: {
      morning: ["9:00 AM","9:30 AM","10:00 AM","11:00 AM"],
      afternoon: ["1:30 PM","2:00 PM","3:00 PM","4:30 PM"],
      evening: ["5:30 PM","6:00 PM"]
    },
    bookedSlots: ["9:00 AM","1:30 PM"],
    reviews_data: [
      { name: "Anonymous", stars: 5, text: "Changed my life. She genuinely cares." },
      { name: "Preethi S.", stars: 5, text: "Safe space, excellent guidance." }
    ]
  },
  {
    id: 6,
    name: "Dr. Suresh Babu",
    spec: "Orthopedist",
    exp: 20,
    rating: 4.7,
    reviews: 388,
    fee: 1000,
    lang: ["English","Tamil","Kannada"],
    type: "in-person",
    wait: "~20 min",
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80",
    verified: true,
    about: "Dr. Suresh Babu is a veteran orthopedic surgeon with 20 years of experience in joint replacement, sports injuries, and spine surgery. He has performed over 3,000 successful surgeries.",
    education: "MBBS – Stanley Medical College | MS Orthopedics – AIIMS",
    slots: {
      morning: ["8:00 AM","8:30 AM","9:00 AM","10:00 AM","11:00 AM"],
      afternoon: ["1:00 PM","2:00 PM","3:00 PM","4:00 PM"],
      evening: []
    },
    bookedSlots: ["8:00 AM","9:00 AM","1:00 PM","3:00 PM"],
    reviews_data: [
      { name: "Murugan K.", stars: 5, text: "Knee surgery was a complete success!" },
      { name: "Leela R.", stars: 4, text: "Very experienced hands. Fully recovered." }
    ]
  },
  {
    id: 7,
    name: "Dr. Anitha Krishnan",
    spec: "Gynecologist",
    exp: 14,
    rating: 4.9,
    reviews: 521,
    fee: 750,
    lang: ["English","Tamil"],
    type: "online",
    wait: "~7 min",
    img: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&q=80",
    verified: true,
    about: "Dr. Anitha Krishnan is a highly experienced gynecologist specializing in maternal health, PCOS, infertility, and laparoscopic surgery. She is known for her empathetic care.",
    education: "MBBS – Coimbatore Medical College | MD Gynecology – CMC",
    slots: {
      morning: ["9:00 AM","9:30 AM","10:30 AM","11:00 AM"],
      afternoon: ["2:00 PM","2:30 PM","3:30 PM","4:00 PM"],
      evening: ["5:00 PM","6:00 PM"]
    },
    bookedSlots: ["9:00 AM","2:00 PM"],
    reviews_data: [
      { name: "Divya M.", stars: 5, text: "Incredibly caring. Made me feel very comfortable." },
      { name: "Pooja T.", stars: 5, text: "Best doctor for women's health." }
    ]
  },
  {
    id: 8,
    name: "Dr. Ravi Kumar",
    spec: "General Physician",
    exp: 9,
    rating: 4.6,
    reviews: 142,
    fee: 400,
    lang: ["English","Tamil","Telugu"],
    type: "online",
    wait: "~3 min",
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
    verified: false,
    about: "Dr. Ravi Kumar is a general physician available for quick consultations for fever, infections, minor injuries, and routine checkups. Great for primary care needs.",
    education: "MBBS – Madurai Medical College",
    slots: {
      morning: ["8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","11:00 AM","11:30 AM"],
      afternoon: ["12:00 PM","12:30 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","4:30 PM"],
      evening: ["5:00 PM","5:30 PM","6:00 PM","6:30 PM"]
    },
    bookedSlots: ["8:00 AM","12:00 PM"],
    reviews_data: [
      { name: "Balaji S.", stars: 4, text: "Quick and accurate diagnosis. Very helpful." },
      { name: "Nirmala V.", stars: 5, text: "Available at all hours. Lifesaver!" }
    ]
  }
];

const CATEGORIES = [
  { name: "Cardiology", icon: "❤️", spec: "Cardiologist", count: 12 },
  { name: "Dermatology", icon: "🧴", spec: "Dermatologist", count: 8 },
  { name: "Pediatrics", icon: "🧒", spec: "Pediatrician", count: 15 },
  { name: "Neurology", icon: "🧠", spec: "Neurologist", count: 7 },
  { name: "Psychiatry", icon: "🧘", spec: "Psychiatrist", count: 9 },
  { name: "Orthopedics", icon: "🦴", spec: "Orthopedist", count: 11 },
  { name: "Gynecology", icon: "🌸", spec: "Gynecologist", count: 10 },
  { name: "General", icon: "🩺", spec: "General Physician", count: 23 }
];

const SYMPTOMS_MAP = [
  { symptoms: ["chest pain","palpitation","breathlessness","irregular heartbeat"], spec: "Cardiologist", icon: "❤️" },
  { symptoms: ["rash","itching","acne","eczema","skin","psoriasis"], spec: "Dermatologist", icon: "🧴" },
  { symptoms: ["fever","cold","cough","flu","headache","fatigue","body pain","infection"], spec: "General Physician", icon: "🩺" },
  { symptoms: ["headache","migraine","dizziness","seizure","memory loss","numbness","tremor"], spec: "Neurologist", icon: "🧠" },
  { symptoms: ["child fever","baby","vaccination","growth","infant"], spec: "Pediatrician", icon: "🧒" },
  { symptoms: ["anxiety","depression","stress","insomnia","panic","phobia","OCD","trauma"], spec: "Psychiatrist", icon: "🧘" },
  { symptoms: ["joint pain","knee pain","back pain","fracture","arthritis","spine"], spec: "Orthopedist", icon: "🦴" },
  { symptoms: ["period pain","pregnancy","PCOS","infertility","ovarian","menstrual"], spec: "Gynecologist", icon: "🌸" }
];

const ALL_SYMPTOMS = [
  "chest pain","palpitation","breathlessness","rash","itching","acne","eczema","fever","cold",
  "cough","flu","headache","fatigue","body pain","migraine","dizziness","seizure","anxiety",
  "depression","stress","insomnia","joint pain","knee pain","back pain","period pain","PCOS",
  "pregnancy","skin","infection","memory loss","tremor","numbness","psoriasis"
];

const FAQS = [
  { q: "How do I book an appointment?", a: "Search for a doctor by name or specialty, view their profile, select an available slot, and confirm your booking. You'll receive a confirmation notification." },
  { q: "Can I cancel or reschedule my appointment?", a: "Yes! You can cancel or reschedule up to 2 hours before the appointment time. Go to Dashboard → Upcoming Appointments → Cancel/Reschedule." },
  { q: "Is my personal health data secure?", a: "Absolutely. We use industry-standard encryption (AES-256) and are fully HIPAA-compliant. Your data is never shared without your explicit consent." },
  { q: "What if I face technical issues during consultation?", a: "Our support team is available 24/7. Use the chat below or call 1800-MED-BOOK. We'll resolve issues promptly or reschedule at no extra cost." },
  { q: "How are doctors verified on MedBook?", a: "All doctors go through a rigorous verification process including medical license checks, credential verification, and background screening before being listed." },
  { q: "Can I get a prescription online?", a: "Yes. After your online consultation, your doctor can send a digital prescription directly to your registered email." },
  { q: "What payment methods are accepted?", a: "We accept UPI, credit/debit cards, net banking, and popular wallets. All transactions are encrypted and secure." },
  { q: "Is there an app available?", a: "Yes! MedBook is available on iOS and Android. Search 'MedBook' on your respective app store to download." }
];

const CHAT_RESPONSES = [
  "I understand your concern. Let me help you with that!",
  "Could you please provide more details so I can assist you better?",
  "That's a great question! Our support team will look into this right away.",
  "I've noted your issue. You can also reach us at support@medbook.in for faster resolution.",
  "Thank you for reaching out. Your satisfaction is our priority!",
  "I'll escalate this to our medical team right away.",
  "You can track your appointment status from the Dashboard section.",
  "For emergency situations, please click the red Emergency button in the top navigation."
];

const i18n = {
  en: {
    heroTitle: "Your Health, Simplified.",
    heroSub: "Book verified doctors instantly. No waiting rooms, no hassle.",
    search: "Search",
    checkSymptoms: "Check Symptoms",
    statDoctors: "Doctors",
    specialties: "Browse by Specialty",
    featuredDoctors: "Top Rated Doctors",
    findDoctor: "Find a Doctor",
    login: "Login",
    emergency: "Emergency",
    welcomeBack: "Welcome Back",
    appointmentConfirmed: "Appointment Confirmed!"
  },
  ta: {
    heroTitle: "உங்கள் ஆரோக்கியம், எளிமையாக.",
    heroSub: "சரிபார்க்கப்பட்ட மருத்துவர்களை உடனே பதிவு செய்யுங்கள்.",
    search: "தேடு",
    checkSymptoms: "அறிகுறிகளை சரிபார்",
    statDoctors: "மருத்துவர்கள்",
    specialties: "சிறப்பு மூலம் தேடு",
    featuredDoctors: "சிறந்த மருத்துவர்கள்",
    findDoctor: "மருத்துவர் தேடு",
    login: "உள்நுழை",
    emergency: "அவசரம்",
    welcomeBack: "மீண்டும் வரவேற்கிறோம்",
    appointmentConfirmed: "சந்திப்பு உறுதிப்படுத்தப்பட்டது!"
  }
};

// =====================================================
// STATE
// =====================================================

let state = {
  currentPage: 'home',
  currentLang: 'en',
  isDark: false,
  isLoggedIn: false,
  currentUser: null,
  selectedDoctor: null,
  selectedSlot: null,
  compareList: [],
  selectedSymptoms: [],
  appointments: [],
  chatDocDoctor: null
};

// Demo user + pre-loaded appointments
const DEMO_USER = { name: "Arun Kumar", email: "user@demo.com", password: "demo123" };
const DEMO_APPOINTMENTS = [
  { id: 1, doctorId: 1, date: getTomorrowDate(), time: "10:30 AM", type: "online", reason: "Regular checkup", status: "upcoming" },
  { id: 2, doctorId: 3, date: getPastDate(7), time: "9:00 AM", type: "online", reason: "Vaccination", status: "completed" },
  { id: 3, doctorId: 8, date: getPastDate(14), time: "5:00 PM", type: "online", reason: "Fever and cold", status: "completed" },
  { id: 4, doctorId: 2, date: getPastDate(30), time: "10:00 AM", type: "in-person", reason: "Skin rash", status: "completed" }
];

function getTomorrowDate() {
  const d = new Date(); d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}
function getPastDate(daysAgo) {
  const d = new Date(); d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split('T')[0];
}
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// =====================================================
// INIT
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderFeaturedDoctors();
  renderSearchResults(DOCTORS);
  populateSpecFilter();
  renderFAQ();
  setupBookingDate();
  checkOfflineStatus();

  // Show gamification badge if logged in with streak
  if (state.isLoggedIn) showGamification();

  // Keyboard nav for search suggestions
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-bar-hero')) closeSuggestions();
  });
});

// =====================================================
// PAGE NAVIGATION — Shneiderman: clear navigation
// =====================================================

function showPage(pageId) {
  // Guard: require login for protected pages
  const protected_pages = ['dashboard', 'booking', 'confirm', 'profile'];
  if (protected_pages.includes(pageId) && !state.isLoggedIn) {
    toast('Please login to continue', 'warning');
    showPage('login');
    return;
  }

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show target page
  const target = document.getElementById(`page-${pageId}`);
  if (!target) return;
  target.classList.add('active');
  state.currentPage = pageId;

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });

  // Page-specific init
  if (pageId === 'dashboard') initDashboard();
  if (pageId === 'search') filterDoctors();
  if (pageId === 'profile') initProfile();
  if (pageId === 'compare') renderCompare();
  if (pageId === 'symptom') initSymptomChecker();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile menu
  closeMobileMenu();
}

// =====================================================
// DARK MODE — HCI: User control & freedom
// =====================================================

function toggleDark() {
  state.isDark = !state.isDark;
  document.documentElement.setAttribute('data-theme', state.isDark ? 'dark' : 'light');
  const icon = document.querySelector('#darkToggle i');
  icon.className = state.isDark ? 'fas fa-sun' : 'fas fa-moon';
  toast(`${state.isDark ? 'Dark' : 'Light'} mode enabled`, 'success');
}

// =====================================================
// LANGUAGE TOGGLE — Multi-language support
// =====================================================

function toggleLanguage() {
  state.currentLang = state.currentLang === 'en' ? 'ta' : 'en';
  document.getElementById('langLabel').textContent = state.currentLang === 'en' ? 'EN' : 'TA';
  applyTranslations();
  toast(`Switched to ${state.currentLang === 'en' ? 'English' : 'Tamil'}`, 'success');
}

function applyTranslations() {
  const t = i18n[state.currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
}

// =====================================================
// MOBILE MENU
// =====================================================

function toggleMobileMenu() {
  const links = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  const isOpen = links.classList.toggle('open');
  ham.setAttribute('aria-expanded', isOpen);
}

function closeMobileMenu() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
}

// =====================================================
// TOAST — Shneiderman: Feedback for every action
// =====================================================

function toast(msg, type = 'info') {
  const t = document.getElementById('toast');
  const icons = { success: 'fas fa-check-circle', error: 'fas fa-times-circle', warning: 'fas fa-exclamation-triangle', info: 'fas fa-info-circle' };
  const colors = { success: 'var(--green)', error: 'var(--red)', warning: 'var(--orange)', info: 'var(--blue)' };
  t.innerHTML = `<i class="${icons[type]}" style="color:${colors[type]};font-size:1.1rem;flex-shrink:0"></i> ${msg}`;
  t.className = `toast ${type} show`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3500);
}

// =====================================================
// AUTH — Error prevention, Familiar forms
// =====================================================

function switchAuthTab(tab) {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const tabLogin = document.getElementById('tabLogin');
  const tabSignup = document.getElementById('tabSignup');
  const title = document.getElementById('authTitle');
  const subtitle = document.getElementById('authSubtitle');

  if (tab === 'login') {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    tabLogin.classList.add('active');
    tabLogin.setAttribute('aria-selected', 'true');
    tabSignup.classList.remove('active');
    tabSignup.setAttribute('aria-selected', 'false');
    title.textContent = 'Welcome Back';
    subtitle.textContent = 'Sign in to your account';
  } else {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    tabSignup.classList.add('active');
    tabSignup.setAttribute('aria-selected', 'true');
    tabLogin.classList.remove('active');
    tabLogin.setAttribute('aria-selected', 'false');
    title.textContent = 'Create Account';
    subtitle.textContent = 'Join thousands of healthy patients';
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail');
  const pass = document.getElementById('loginPass');
  let valid = true;

  // Clear previous errors — Error recovery
  clearError('loginEmailErr'); clearError('loginPassErr');
  email.classList.remove('error'); pass.classList.remove('error');

  // Validate — Error prevention
  if (!email.value.trim()) {
    showError('loginEmailErr', 'Email is required'); email.classList.add('error'); valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showError('loginEmailErr', 'Please enter a valid email'); email.classList.add('error'); valid = false;
  }
  if (!pass.value.trim()) {
    showError('loginPassErr', 'Password is required'); pass.classList.add('error'); valid = false;
  }
  if (!valid) return;

  // Check credentials
  if (email.value === DEMO_USER.email && pass.value === DEMO_USER.password) {
    loginSuccess(DEMO_USER);
  } else {
    showError('loginPassErr', 'Incorrect email or password. Try: user@demo.com / demo123');
    pass.classList.add('error');
    shakeElement(document.querySelector('.auth-card'));
  }
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signupName');
  const email = document.getElementById('signupEmail');
  const pass = document.getElementById('signupPass');
  let valid = true;

  clearError('signupNameErr'); clearError('signupEmailErr'); clearError('signupPassErr');

  if (!name.value.trim() || name.value.trim().length < 2) {
    showError('signupNameErr', 'Please enter your full name (min 2 chars)'); valid = false;
  }
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showError('signupEmailErr', 'Please enter a valid email'); valid = false;
  }
  if (!pass.value.trim() || pass.value.length < 8) {
    showError('signupPassErr', 'Password must be at least 8 characters'); valid = false;
  }
  if (!valid) return;

  // Simulate signup success
  loginSuccess({ name: name.value.trim(), email: email.value.trim() });
  toast('Account created successfully! Welcome to MedBook 🎉', 'success');
}

function loginSuccess(user) {
  state.isLoggedIn = true;
  state.currentUser = user;
  state.appointments = [...DEMO_APPOINTMENTS];

  // Update UI
  document.getElementById('authBtn').style.display = 'none';
  document.getElementById('logoutBtn').style.display = 'flex';
  document.getElementById('navDashLink').style.display = 'block';

  toast(`Welcome, ${user.name}! 👋`, 'success');
  showPage('dashboard');
  showGamification();
}

function logout() {
  state.isLoggedIn = false;
  state.currentUser = null;
  document.getElementById('authBtn').style.display = 'flex';
  document.getElementById('logoutBtn').style.display = 'none';
  document.getElementById('navDashLink').style.display = 'none';
  toast('Logged out successfully', 'info');
  showPage('home');
}

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}
function clearError(id) {
  const el = document.getElementById(id);
  if (el) el.textContent = '';
}

function shakeElement(el) {
  el.style.animation = 'none';
  el.style.animation = 'shake 0.4s ease';
  const style = document.createElement('style');
  style.textContent = '@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}';
  document.head.appendChild(style);
}

function togglePass(id) {
  const input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
}

// Password strength indicator
document.addEventListener('DOMContentLoaded', () => {
  const passInput = document.getElementById('signupPass');
  if (passInput) {
    passInput.addEventListener('input', function () {
      const bar = document.getElementById('passStrength');
      const v = this.value;
      if (v.length === 0) { bar.className = 'password-strength'; return; }
      let score = 0;
      if (v.length >= 8) score++;
      if (/[A-Z]/.test(v)) score++;
      if (/[0-9]/.test(v)) score++;
      if (/[^A-Za-z0-9]/.test(v)) score++;
      bar.className = 'password-strength ' + (score <= 1 ? 'weak' : score <= 2 ? 'medium' : 'strong');
    });
  }

  // Char counter for booking reason
  const textarea = document.getElementById('bookReason');
  if (textarea) {
    textarea.addEventListener('input', function () {
      document.getElementById('reasonCount').textContent = `${this.value.length}/300`;
    });
  }
});

// =====================================================
// CATEGORIES — Gestalt: Similarity, Proximity
// =====================================================

function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(cat => `
    <div class="category-card" 
         onclick="filterBySpec('${cat.spec}')" 
         tabindex="0" 
         role="button" 
         aria-label="Browse ${cat.name} specialists"
         onkeydown="if(event.key==='Enter'||event.key===' ')filterBySpec('${cat.spec}')">
      <span class="cat-icon">${cat.icon}</span>
      <span class="cat-name">${cat.name}</span>
      <span class="cat-count">${cat.count} doctors</span>
    </div>
  `).join('');
}

function filterBySpec(spec) {
  showPage('search');
  setTimeout(() => {
    document.getElementById('filterSpec').value = spec;
    filterDoctors();
  }, 100);
}

// =====================================================
// FEATURED DOCTORS
// =====================================================

function renderFeaturedDoctors() {
  const grid = document.getElementById('featuredDoctors');
  if (!grid) return;
  const featured = DOCTORS.filter(d => d.rating >= 4.8).slice(0, 4);
  grid.innerHTML = featured.map(d => doctorCardHTML(d)).join('');
}

// =====================================================
// DOCTOR CARD HTML — Reusable component
// =====================================================

function doctorCardHTML(doc, showCompare = false) {
  const isCompared = state.compareList.includes(doc.id);
  return `
    <article class="doctor-card" 
             tabindex="0" 
             role="listitem"
             aria-label="Dr. ${doc.name}, ${doc.spec}"
             onkeydown="if(event.key==='Enter')openDoctorProfile(${doc.id})">
      <!-- Wait time indicator — HCI: Status visibility -->
      <div class="wait-badge"><i class="fas fa-clock"></i> ${doc.wait}</div>
      ${showCompare ? `
      <div class="compare-check">
        <input type="checkbox" 
               id="cmp${doc.id}" 
               ${isCompared ? 'checked' : ''} 
               onchange="toggleCompare(${doc.id})" 
               aria-label="Add ${doc.name} to comparison"
               onclick="event.stopPropagation()" />
      </div>` : ''}
      <img src="${doc.img}" 
           alt="Photo of ${doc.name}" 
           class="doctor-card-img" 
           loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'" />
      <div class="doctor-card-body">
        <div class="doctor-card-header">
          <div>
            <div class="doctor-name">${doc.name}</div>
            <div class="doctor-spec">${doc.spec}</div>
          </div>
          ${doc.verified ? '<i class="fas fa-check-circle" style="color:var(--blue)" title="Verified Doctor" aria-label="Verified"></i>' : ''}
        </div>
        <div class="doctor-meta">
          <span class="meta-chip rating"><i class="fas fa-star"></i> ${doc.rating}</span>
          <span class="meta-chip exp"><i class="fas fa-briefcase"></i> ${doc.exp} yrs</span>
          <span class="meta-chip online"><i class="fas fa-${doc.type === 'online' ? 'video' : 'hospital'}"></i> ${doc.type === 'online' ? 'Online' : 'In-person'}</span>
        </div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:.75rem">
          <i class="fas fa-rupee-sign"></i> ${doc.fee} per consultation
        </div>
        <div class="doctor-card-actions">
          <button class="btn-secondary btn-sm" onclick="openDoctorProfile(${doc.id})" aria-label="View profile of ${doc.name}">
            View Profile
          </button>
          <button class="btn-primary btn-sm" onclick="bookDoctor(${doc.id})" aria-label="Book appointment with ${doc.name}">
            <i class="fas fa-calendar-plus"></i> Book
          </button>
        </div>
      </div>
    </article>
  `;
}

// =====================================================
// SEARCH & FILTER — Hick's Law: reduce choices
// =====================================================

function populateSpecFilter() {
  const sel = document.getElementById('filterSpec');
  if (!sel) return;
  const specs = [...new Set(DOCTORS.map(d => d.spec))].sort();
  specs.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s; opt.textContent = s;
    sel.appendChild(opt);
  });
}

function filterDoctors() {
  const query = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const spec = document.getElementById('filterSpec')?.value || '';
  const minRating = parseFloat(document.getElementById('filterRating')?.value || '0');
  const type = document.getElementById('filterType')?.value || '';

  let results = DOCTORS.filter(d => {
    const matchQuery = !query || d.name.toLowerCase().includes(query) || d.spec.toLowerCase().includes(query) || d.about.toLowerCase().includes(query);
    const matchSpec = !spec || d.spec === spec;
    const matchRating = !minRating || d.rating >= minRating;
    const matchType = !type || d.type === type;
    return matchQuery && matchSpec && matchRating && matchType;
  });

  renderSearchResults(results);

  const meta = document.getElementById('resultsMeta');
  if (meta) meta.textContent = `Showing ${results.length} doctor${results.length !== 1 ? 's' : ''}`;

  const empty = document.getElementById('emptyState');
  if (empty) empty.classList.toggle('hidden', results.length > 0);
}

function renderSearchResults(doctors) {
  const grid = document.getElementById('searchResults');
  if (!grid) return;
  grid.innerHTML = doctors.map(d => doctorCardHTML(d, true)).join('');
}

function clearFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('filterSpec').value = '';
  document.getElementById('filterRating').value = '';
  document.getElementById('filterType').value = '';
  filterDoctors();
  toast('Filters cleared', 'info');
}

// =====================================================
// LIVE SEARCH SUGGESTIONS — Recognition over recall
// =====================================================

function liveSearchSuggest(query) {
  const box = document.getElementById('searchSuggestions');
  if (!query || query.length < 2) { closeSuggestions(); return; }

  const q = query.toLowerCase();
  const docMatches = DOCTORS.filter(d =>
    d.name.toLowerCase().includes(q) || d.spec.toLowerCase().includes(q)
  ).slice(0, 4);

  const specMatches = CATEGORIES.filter(c =>
    c.name.toLowerCase().includes(q) || c.spec.toLowerCase().includes(q)
  ).slice(0, 3);

  if (!docMatches.length && !specMatches.length) { closeSuggestions(); return; }

  box.innerHTML = [
    ...specMatches.map(c => `<div class="suggestion-item" role="option" tabindex="0" onclick="filterBySpec('${c.spec}')" onkeydown="if(event.key==='Enter')filterBySpec('${c.spec}')"><i class="fas fa-stethoscope"></i>${c.name}</div>`),
    ...docMatches.map(d => `<div class="suggestion-item" role="option" tabindex="0" onclick="openDoctorProfile(${d.id})" onkeydown="if(event.key==='Enter')openDoctorProfile(${d.id})"><i class="fas fa-user-md"></i>${d.name} — ${d.spec}</div>`)
  ].join('');
  box.classList.add('open');
}

function closeSuggestions() {
  const box = document.getElementById('searchSuggestions');
  if (box) { box.innerHTML = ''; box.classList.remove('open'); }
}

function doHeroSearch() {
  const q = document.getElementById('heroSearch').value;
  closeSuggestions();
  showPage('search');
  setTimeout(() => {
    document.getElementById('searchInput').value = q;
    filterDoctors();
  }, 100);
}

// =====================================================
// VOICE SEARCH — Progressive enhancement UI
// =====================================================

function voiceSearch() {
  const btn = document.querySelector('.voice-btn');
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    toast('Voice search: try saying a specialty or symptom!', 'info');
    btn.classList.add('listening');
    setTimeout(() => {
      btn.classList.remove('listening');
      document.getElementById('heroSearch').value = 'Cardiologist';
      liveSearchSuggest('Cardiologist');
    }, 1500);
    return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recog = new SR();
  recog.lang = 'en-IN';
  btn.classList.add('listening');
  recog.start();
  recog.onresult = (e) => {
    const text = e.results[0][0].transcript;
    document.getElementById('heroSearch').value = text;
    liveSearchSuggest(text);
    btn.classList.remove('listening');
    toast(`Voice: "${text}"`, 'info');
  };
  recog.onerror = () => { btn.classList.remove('listening'); toast('Voice not recognized', 'error'); };
  recog.onend = () => btn.classList.remove('listening');
}

// =====================================================
// DOCTOR PROFILE — Visual hierarchy, persuasion
// =====================================================

function openDoctorProfile(docId) {
  const doc = DOCTORS.find(d => d.id === docId);
  if (!doc) return;
  state.selectedDoctor = doc;

  document.getElementById('docBreadcrumb').textContent = doc.name;

  const stars = '⭐'.repeat(Math.round(doc.rating));
  const content = document.getElementById('doctorProfileContent');
  content.innerHTML = `
    <div class="doc-profile-hero">
      <img src="${doc.img}" alt="${doc.name}" class="doc-profile-img"
           onerror="this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'" />
      <div class="doc-profile-info">
        <h1>${doc.name}</h1>
        <div class="doc-profile-badges">
          <span class="profile-badge">${doc.spec}</span>
          ${doc.verified ? '<span class="profile-badge verified"><i class="fas fa-check-circle"></i> Verified</span>' : ''}
          <span class="profile-badge"><i class="fas fa-${doc.type==='online'?'video':'hospital'}"></i> ${doc.type==='online'?'Online Available':'In-person'}</span>
        </div>
        <div class="doc-stats-row">
          <div class="doc-stat"><span class="doc-stat-val">${doc.rating}</span><span class="doc-stat-label">Rating</span></div>
          <div class="doc-stat"><span class="doc-stat-val">${doc.reviews}+</span><span class="doc-stat-label">Reviews</span></div>
          <div class="doc-stat"><span class="doc-stat-val">${doc.exp} yrs</span><span class="doc-stat-label">Experience</span></div>
          <div class="doc-stat"><span class="doc-stat-val">₹${doc.fee}</span><span class="doc-stat-label">Fee</span></div>
        </div>
        <div style="font-size:.85rem;color:var(--text-muted);margin-bottom:.5rem">
          <i class="fas fa-language"></i> ${doc.lang.join(', ')}
        </div>
        <div style="font-size:.85rem;color:var(--text-muted)">
          <i class="fas fa-graduation-cap"></i> ${doc.education}
        </div>
        <div class="doc-profile-actions">
          <!-- Fitts's Law: Large primary action button -->
          <button class="btn-primary btn-lg" onclick="bookDoctor(${doc.id})">
            <i class="fas fa-calendar-plus"></i> Book Appointment
          </button>
          <button class="btn-secondary" onclick="chatWithDoctor(${doc.id})">
            <i class="fas fa-comments"></i> Chat
          </button>
          <button class="btn-icon" onclick="toggleCompare(${doc.id});toast('Added to compare','success')" aria-label="Compare doctor">
            <i class="fas fa-balance-scale"></i> Compare
          </button>
        </div>
      </div>
    </div>

    <div class="doc-profile-grid">
      <div>
        <div class="doc-info-card" style="margin-bottom:1.5rem">
          <h3>About</h3>
          <p class="doc-about">${doc.about}</p>
        </div>
        <div class="doc-info-card">
          <h3>Patient Reviews (${doc.reviews})</h3>
          ${doc.reviews_data.map(r => `
            <div class="review-item">
              <div class="reviewer-name">${r.name}</div>
              <div class="reviewer-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
              <div class="reviewer-text">${r.text}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div>
        <div class="doc-info-card" style="position:sticky;top:calc(var(--nav-h)+1rem)">
          <h3>Book a Slot</h3>
          <div style="font-size:.85rem;color:var(--text-muted);margin-bottom:.75rem">
            <i class="fas fa-clock" style="color:var(--orange)"></i> Wait time: ${doc.wait}
          </div>
          <button class="btn-primary btn-full btn-lg" onclick="bookDoctor(${doc.id})">
            <i class="fas fa-calendar-check"></i> Book Now
          </button>
          <div style="font-size:.78rem;color:var(--text-muted);text-align:center;margin-top:.75rem">
            <i class="fas fa-shield-alt"></i> Free cancellation up to 2 hrs before
          </div>
        </div>
      </div>
    </div>
  `;

  showPage('doctor');
}

// =====================================================
// BOOKING — Affordance, error prevention
// =====================================================

function bookDoctor(docId) {
  if (!state.isLoggedIn) {
    toast('Please login to book an appointment', 'warning');
    showPage('login');
    return;
  }
  const doc = DOCTORS.find(d => d.id === docId);
  if (!doc) return;
  state.selectedDoctor = doc;
  state.selectedSlot = null;

  // Doctor summary
  document.getElementById('bookingDocSummary').innerHTML = `
    <img src="${doc.img}" alt="${doc.name}" onerror="this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'" />
    <div class="doctor-name" style="margin-bottom:.25rem">${doc.name}</div>
    <div class="doctor-spec">${doc.spec}</div>
    <div style="margin:.75rem 0;display:flex;justify-content:center;gap:.5rem;flex-wrap:wrap">
      <span class="meta-chip rating"><i class="fas fa-star"></i> ${doc.rating}</span>
      <span class="meta-chip exp">${doc.exp} yrs exp</span>
    </div>
    <div style="font-size:.9rem;font-weight:700;color:var(--blue)">₹${doc.fee}</div>
    <div style="font-size:.78rem;color:var(--text-muted);margin-top:.35rem">
      <i class="fas fa-clock"></i> Est. wait: ${doc.wait}
    </div>
  `;

  // Reset slot section
  document.getElementById('slotsSection').style.display = 'none';
  document.getElementById('waitTimeBox').style.display = 'none';
  document.getElementById('bookDate').value = '';

  setupBookingDate();
  showPage('booking');
}

function setupBookingDate() {
  const dateInput = document.getElementById('bookDate');
  if (!dateInput) return;
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1); // Cannot book same-day
  dateInput.min = minDate.toISOString().split('T')[0];
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 30);
  dateInput.max = maxDate.toISOString().split('T')[0];
}

function loadSlots() {
  const doc = state.selectedDoctor;
  if (!doc) return;
  const dateVal = document.getElementById('bookDate').value;
  if (!dateVal) return;

  clearError('bookDateErr');
  const slotsSection = document.getElementById('slotsSection');
  const slotsGrid = document.getElementById('timeSlots');
  const waitBox = document.getElementById('waitTimeBox');
  slotsSection.style.display = 'block';
  waitBox.style.display = 'flex';
  state.selectedSlot = null;

  const allSlots = [
    ...doc.slots.morning.map(s => ({ time: s, period: 'Morning' })),
    ...doc.slots.afternoon.map(s => ({ time: s, period: 'Afternoon' })),
    ...doc.slots.evening.map(s => ({ time: s, period: 'Evening' }))
  ];

  if (allSlots.length === 0) {
    slotsGrid.innerHTML = '<p style="color:var(--text-muted);font-size:.9rem">No slots available for this date. Please choose another day.</p>';
    return;
  }

  slotsGrid.innerHTML = allSlots.map(slot => {
    const booked = doc.bookedSlots.includes(slot.time);
    return `
      <button class="slot-btn" 
              ${booked ? 'disabled aria-disabled="true"' : ''} 
              onclick="selectSlot(this,'${slot.time}')"
              aria-label="${slot.time}${booked ? ' (unavailable)' : ' (available)'}">
        ${slot.time}
        ${booked ? '<br><small>Booked</small>' : ''}
      </button>
    `;
  }).join('');
}

function selectSlot(btn, time) {
  document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.selectedSlot = time;
  clearError('bookSlotErr');
  document.getElementById('waitTimeBox').style.display = 'flex';
  toast(`Slot ${time} selected`, 'info');
}

function confirmBooking() {
  const date = document.getElementById('bookDate').value;
  const reason = document.getElementById('bookReason').value.trim();
  const type = document.querySelector('input[name="consultType"]:checked')?.value || 'online';
  let valid = true;

  clearError('bookDateErr'); clearError('bookSlotErr');

  if (!date) { showError('bookDateErr', 'Please select a date'); valid = false; }
  if (!state.selectedSlot) { showError('bookSlotErr', 'Please select a time slot'); valid = false; }
  if (!valid) return;

  const doc = state.selectedDoctor;
  const newAppt = {
    id: Date.now(),
    doctorId: doc.id,
    date,
    time: state.selectedSlot,
    type,
    reason: reason || 'General consultation',
    status: 'upcoming'
  };
  state.appointments.push(newAppt);

  // Mark slot as booked — real-time simulation
  doc.bookedSlots.push(state.selectedSlot);

  // Show confirmation
  renderConfirmation(newAppt, doc);
  showPage('confirm');
  toast('Appointment confirmed! 🎉', 'success');

  // Check offline
  if (!navigator.onLine) {
    document.getElementById('offlineNote').style.display = 'flex';
  }
}

function renderConfirmation(appt, doc) {
  document.getElementById('confirmDetails').innerHTML = `
    <div class="confirm-detail-row"><span>Doctor</span><span>${doc.name}</span></div>
    <div class="confirm-detail-row"><span>Specialty</span><span>${doc.spec}</span></div>
    <div class="confirm-detail-row"><span>Date</span><span>${formatDate(appt.date)}</span></div>
    <div class="confirm-detail-row"><span>Time</span><span>${appt.time}</span></div>
    <div class="confirm-detail-row"><span>Type</span><span>${appt.type === 'online' ? '📹 Online' : '🏥 In-person'}</span></div>
    <div class="confirm-detail-row"><span>Fee</span><span>₹${doc.fee}</span></div>
    <div class="confirm-detail-row"><span>Booking ID</span><span>#${appt.id.toString().slice(-6)}</span></div>
  `;
}

// =====================================================
// DASHBOARD — Serial Position, personalization
// =====================================================

function initDashboard() {
  if (!state.currentUser) return;

  // Greeting based on time
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  document.getElementById('dashGreeting').textContent = `${greet}, ${state.currentUser.name}! 👋`;

  // Upcoming
  const upcoming = state.appointments.filter(a => a.status === 'upcoming');
  const upcomingEl = document.getElementById('upcomingAppts');
  if (upcomingEl) {
    upcomingEl.innerHTML = upcoming.length ? upcoming.map(a => appointmentCardHTML(a)).join('') :
      `<div class="empty-state" style="padding:2rem"><i class="fas fa-calendar" style="font-size:2rem;opacity:.4;display:block;margin-bottom:.5rem"></i>
       <p>No upcoming appointments</p>
       <button class="btn-primary btn-sm" onclick="showPage('search')">Book Now</button></div>`;
  }

  // Recent doctors (one-click rebooking)
  const recentDocIds = [...new Set(state.appointments.slice().reverse().map(a => a.doctorId))].slice(0, 3);
  const recentEl = document.getElementById('recentDoctors');
  if (recentEl) {
    recentEl.innerHTML = recentDocIds.map(id => {
      const doc = DOCTORS.find(d => d.id === id);
      if (!doc) return '';
      return `
        <div class="appt-card" style="cursor:default">
          <img src="${doc.img}" class="appt-avatar" alt="${doc.name}" onerror="this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'" />
          <div class="appt-info">
            <div class="appt-doc-name">${doc.name}</div>
            <div class="appt-time">${doc.spec}</div>
          </div>
          <button class="btn-primary btn-sm" onclick="bookDoctor(${doc.id})">
            <i class="fas fa-redo"></i> Rebook
          </button>
        </div>
      `;
    }).join('') || '<p class="text-muted" style="font-size:.9rem">No recent doctors</p>';
  }

  // Timeline
  const timelineEl = document.getElementById('apptTimeline');
  if (timelineEl) {
    const sorted = [...state.appointments].sort((a,b) => new Date(b.date) - new Date(a.date));
    timelineEl.innerHTML = sorted.map(a => {
      const doc = DOCTORS.find(d => d.id === a.doctorId);
      return `
        <div class="timeline-item ${a.status === 'completed' ? 'done' : ''}">
          <div class="tl-date">${formatDate(a.date)} — ${a.time}</div>
          <div class="tl-body">${doc ? doc.name : 'Doctor'} • ${doc ? doc.spec : ''} • <span class="appt-status ${a.status}">${a.status}</span></div>
        </div>
      `;
    }).join('');
  }

  document.getElementById('totalAppts').textContent = state.appointments.length;
}

function appointmentCardHTML(appt) {
  const doc = DOCTORS.find(d => d.id === appt.doctorId);
  if (!doc) return '';
  return `
    <div class="appt-card">
      <img src="${doc.img}" class="appt-avatar" alt="${doc.name}" onerror="this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'" />
      <div class="appt-info">
        <div class="appt-doc-name">${doc.name}</div>
        <div class="appt-time"><i class="fas fa-calendar" style="color:var(--blue)"></i> ${formatDate(appt.date)} at ${appt.time}</div>
        <div class="appt-time"><i class="fas fa-${appt.type==='online'?'video':'hospital'}" style="color:var(--text-muted)"></i> ${appt.type}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:.4rem;align-items:flex-end">
        <span class="appt-status ${appt.status}">${appt.status}</span>
        ${appt.status === 'upcoming' ? `<button class="btn-sm btn-danger" onclick="cancelAppt(${appt.id})" aria-label="Cancel appointment">Cancel</button>` : 
          `<button class="btn-sm btn-secondary" onclick="bookDoctor(${appt.doctorId})" aria-label="Book again">Rebook</button>`}
      </div>
    </div>
  `;
}

function cancelAppt(apptId) {
  if (!confirm('Are you sure you want to cancel this appointment?')) return;
  const appt = state.appointments.find(a => a.id === apptId);
  if (appt) appt.status = 'cancelled';
  initDashboard();
  toast('Appointment cancelled. You can rebook anytime.', 'info');
}

// =====================================================
// USER PROFILE
// =====================================================

function initProfile() {
  if (!state.currentUser) return;
  document.getElementById('profileName').textContent = state.currentUser.name;
  document.getElementById('profileEmail').textContent = state.currentUser.email;
  renderAppointmentHistory();
  switchProfileTab('history');
}

function renderAppointmentHistory() {
  const list = document.getElementById('appointmentHistory');
  if (!list) return;
  const sorted = [...state.appointments].sort((a,b) => new Date(b.date) - new Date(a.date));
  list.innerHTML = sorted.length ? sorted.map(a => appointmentCardHTML(a)).join('') :
    '<div class="empty-state"><i class="fas fa-clipboard-list empty-icon"></i><p>No appointment history yet.</p></div>';
}

function switchProfileTab(tab) {
  const histTab = document.getElementById('profileHistoryTab');
  const privTab = document.getElementById('profilePrivacyTab');
  document.querySelectorAll('.profile-tab').forEach((t, i) => {
    const tabs = ['history', 'privacy'];
    t.classList.toggle('active', tabs[i] === tab);
    t.setAttribute('aria-selected', tabs[i] === tab);
  });
  histTab.classList.toggle('hidden', tab !== 'history');
  privTab.classList.toggle('hidden', tab !== 'privacy');
}

function editProfile() {
  toast('Profile editing coming soon!', 'info');
}

// =====================================================
// SYMPTOM CHECKER
// =====================================================

function initSymptomChecker() {
  state.selectedSymptoms = [];
  renderSelectedSymptoms();
  document.getElementById('symptomResult').style.display = 'none';
  document.getElementById('symptomInput').value = '';

  // Common symptom chips
  const chips = document.getElementById('commonSymptomChips');
  const common = ['headache', 'fever', 'cough', 'rash', 'chest pain', 'anxiety', 'joint pain', 'PCOS'];
  chips.innerHTML = common.map(s => `
    <button class="symptom-chip" onclick="addSymptom('${s}')" aria-label="Add symptom: ${s}">${s}</button>
  `).join('');
}

function symptomAutocomplete(query) {
  const drop = document.getElementById('symptomDropdown');
  if (!query || query.length < 2) { drop.classList.remove('open'); return; }
  const matches = ALL_SYMPTOMS.filter(s => s.toLowerCase().includes(query.toLowerCase())).slice(0, 6);
  if (!matches.length) { drop.classList.remove('open'); return; }
  drop.innerHTML = matches.map(s => `
    <div class="symptom-dropdown-item" role="option" onclick="addSymptom('${s}')">${s}</div>
  `).join('');
  drop.classList.add('open');
}

function addSymptom(s) {
  if (!state.selectedSymptoms.includes(s)) {
    state.selectedSymptoms.push(s);
    renderSelectedSymptoms();
  }
  document.getElementById('symptomInput').value = '';
  document.getElementById('symptomDropdown').classList.remove('open');
}

function removeSymptom(s) {
  state.selectedSymptoms = state.selectedSymptoms.filter(x => x !== s);
  renderSelectedSymptoms();
}

function renderSelectedSymptoms() {
  const area = document.getElementById('selectedSymptoms');
  if (!area) return;
  area.innerHTML = state.selectedSymptoms.map(s => `
    <span class="symptom-tag">${s}
      <button onclick="removeSymptom('${s}')" aria-label="Remove ${s}">✕</button>
    </span>
  `).join('');
}

function checkSymptoms() {
  if (!state.selectedSymptoms.length) {
    toast('Please add at least one symptom', 'warning'); return;
  }
  const q = state.selectedSymptoms.map(s => s.toLowerCase());
  let best = null, bestScore = 0;
  SYMPTOMS_MAP.forEach(map => {
    const score = map.symptoms.filter(s => q.some(qs => qs.includes(s) || s.includes(qs))).length;
    if (score > bestScore) { bestScore = score; best = map; }
  });
  if (!best) best = { spec: 'General Physician', icon: '🩺' };

  const result = document.getElementById('symptomResult');
  result.style.display = 'block';
  result.innerHTML = `
    <div style="font-size:3rem">${best.icon}</div>
    <h3>Recommended: ${best.spec}</h3>
    <p>Based on your symptoms, we suggest consulting a <strong>${best.spec}</strong>.</p>
    <button class="btn-primary" style="margin-top:1rem" onclick="filterBySpec('${best.spec}')">
      <i class="fas fa-search"></i> Find ${best.spec}s
    </button>
  `;
  result.scrollIntoView({ behavior: 'smooth' });
}

// =====================================================
// DOCTOR COMPARISON — Side-by-side
// =====================================================

function toggleCompare(docId) {
  const idx = state.compareList.indexOf(docId);
  if (idx === -1) {
    if (state.compareList.length >= 3) { toast('You can compare up to 3 doctors', 'warning'); return; }
    state.compareList.push(docId);
  } else {
    state.compareList.splice(idx, 1);
  }
  updateCompareBar();
}

function updateCompareBar() {
  const bar = document.getElementById('compareBar');
  const count = document.getElementById('compareCount');
  if (!bar) return;
  if (state.compareList.length > 0) {
    bar.style.display = 'flex';
    count.textContent = state.compareList.length;
  } else {
    bar.style.display = 'none';
  }
}

function clearCompare() {
  state.compareList = [];
  updateCompareBar();
  document.querySelectorAll('.compare-check input').forEach(cb => cb.checked = false);
}

function renderCompare() {
  const content = document.getElementById('compareContent');
  if (!content) return;
  const docs = state.compareList.map(id => DOCTORS.find(d => d.id === id)).filter(Boolean);

  if (!docs.length) {
    content.innerHTML = `
      <div class="compare-empty">
        <i class="fas fa-balance-scale"></i>
        <h3>No doctors selected for comparison</h3>
        <p>Go to <a href="#" onclick="showPage('search')">Find Doctors</a> and check the compare box on up to 3 doctors.</p>
      </div>`;
    return;
  }

  const rows = [
    ['Photo', docs.map(d => `<img src="${d.img}" class="compare-img" alt="${d.name}" onerror="this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'" /><div class="compare-doc-name">${d.name}</div>`)],
    ['Specialty', docs.map(d => d.spec)],
    ['Rating', docs.map(d => `⭐ ${d.rating}`)],
    ['Experience', docs.map(d => `${d.exp} years`)],
    ['Fee', docs.map(d => `₹${d.fee}`)],
    ['Type', docs.map(d => d.type === 'online' ? '📹 Online' : '🏥 In-person')],
    ['Wait Time', docs.map(d => d.wait)],
    ['Languages', docs.map(d => d.lang.join(', '))],
    ['Verified', docs.map(d => d.verified ? '✅ Yes' : '—')],
    ['Book', docs.map(d => `<button class="btn-primary btn-sm" onclick="bookDoctor(${d.id})">Book Now</button>`)]
  ];

  content.innerHTML = `
    <div class="compare-table-wrap">
      <table class="compare-table" role="table" aria-label="Doctor comparison table">
        <thead><tr>
          <th></th>
          ${docs.map(d => `<th>${d.name}</th>`).join('')}
        </tr></thead>
        <tbody>
          ${rows.map(([label, vals]) => `
            <tr>
              <td>${label}</td>
              ${vals.map(v => `<td>${v}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;
}

// =====================================================
// FAQ — User support systems
// =====================================================

function renderFAQ() {
  const el = document.getElementById('faqSection');
  if (!el) return;
  el.innerHTML = `<h3 style="margin-bottom:1rem"><i class="fas fa-question-circle"></i> Frequently Asked Questions</h3>` +
    FAQS.map((faq, i) => `
      <div class="faq-item">
        <button class="faq-question" 
                id="faqQ${i}" 
                aria-expanded="false"
                aria-controls="faqA${i}"
                onclick="toggleFAQ(${i})">
          ${faq.q}
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer" id="faqA${i}" role="region" aria-labelledby="faqQ${i}">${faq.a}</div>
      </div>
    `).join('');
}

function toggleFAQ(i) {
  const q = document.getElementById(`faqQ${i}`);
  const a = document.getElementById(`faqA${i}`);
  const isOpen = q.classList.toggle('open');
  a.classList.toggle('open', isOpen);
  q.setAttribute('aria-expanded', isOpen);
}

// =====================================================
// CHAT SUPPORT — Static UI simulation
// =====================================================

function sendChatMsg() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;

  const win = document.getElementById('chatWindow');
  win.innerHTML += `
    <div class="chat-msg user">
      <div class="chat-bubble">${escapeHtml(msg)}</div>
    </div>`;
  input.value = '';
  win.scrollTop = win.scrollHeight;

  // Simulated bot reply
  setTimeout(() => {
    const reply = CHAT_RESPONSES[Math.floor(Math.random() * CHAT_RESPONSES.length)];
    win.innerHTML += `
      <div class="chat-msg bot">
        <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=40&q=80" class="chat-avatar" alt="Support" />
        <div class="chat-bubble">${reply}</div>
      </div>`;
    win.scrollTop = win.scrollHeight;
  }, 800);
}

// =====================================================
// CHAT WITH DOCTOR
// =====================================================

function chatWithDoctor(docId) {
  const doc = DOCTORS.find(d => d.id === docId);
  if (!doc) return;
  if (!state.isLoggedIn) { toast('Please login to chat with doctors', 'warning'); showPage('login'); return; }
  state.chatDocDoctor = doc;

  document.getElementById('chatDocInfo').innerHTML = `
    <img src="${doc.img}" alt="${doc.name}" style="width:40px;height:40px;border-radius:50%;object-fit:cover" onerror="this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'" />
    <div>
      <div style="font-weight:700;font-size:.9rem">${doc.name}</div>
      <div style="font-size:.78rem;color:var(--green)"><i class="fas fa-circle" style="font-size:.5rem"></i> Online</div>
    </div>`;

  const win = document.getElementById('docChatWindow');
  win.innerHTML = `
    <div class="chat-msg bot">
      <img src="${doc.img}" class="chat-avatar" alt="${doc.name}" onerror="this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'" />
      <div class="chat-bubble">Hello! I'm ${doc.name}. How can I help you today?</div>
    </div>`;
  showPage('chat');
}

const DOC_REPLIES = [
  "Thank you for sharing that. Can you tell me more about when the symptoms started?",
  "I understand your concern. Based on what you've described, I'd recommend a proper consultation.",
  "That's a common issue. Let me walk you through what could be causing this.",
  "Have you had any prior history of this condition?",
  "I'd suggest we schedule a proper consultation to discuss this in detail.",
  "Please don't worry — this sounds manageable. Let's figure it out together."
];

function sendDocMsg() {
  const input = document.getElementById('docChatInput');
  const msg = input.value.trim();
  if (!msg || !state.chatDocDoctor) return;
  const doc = state.chatDocDoctor;
  const win = document.getElementById('docChatWindow');

  win.innerHTML += `<div class="chat-msg user"><div class="chat-bubble">${escapeHtml(msg)}</div></div>`;
  input.value = '';
  win.scrollTop = win.scrollHeight;

  setTimeout(() => {
    const reply = DOC_REPLIES[Math.floor(Math.random() * DOC_REPLIES.length)];
    win.innerHTML += `
      <div class="chat-msg bot">
        <img src="${doc.img}" class="chat-avatar" alt="${doc.name}" onerror="this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'" />
        <div class="chat-bubble">${reply}</div>
      </div>`;
    win.scrollTop = win.scrollHeight;
  }, 1000);
}

// =====================================================
// EMERGENCY
// =====================================================

function handleEmergency() {
  document.getElementById('emergencyModal').style.display = 'flex';
}

function closeEmergencyModal() {
  document.getElementById('emergencyModal').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('emergencyModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeEmergencyModal();
});

// =====================================================
// GAMIFICATION
// =====================================================

function showGamification() {
  const banner = document.getElementById('gameBanner');
  if (banner && state.isLoggedIn) {
    banner.style.display = 'flex';
    document.getElementById('streakCount').textContent = state.appointments.filter(a => a.status === 'completed').length;
  }
}

// =====================================================
// OFFLINE DETECTION
// =====================================================

function checkOfflineStatus() {
  const banner = document.getElementById('offlineBanner');
  if (!navigator.onLine) banner.style.display = 'flex';

  window.addEventListener('online', () => {
    if (banner) banner.style.display = 'none';
    toast('Back online! 🌐', 'success');
  });
  window.addEventListener('offline', () => {
    if (banner) banner.style.display = 'flex';
    toast('You are offline. Limited functionality available.', 'warning');
  });
}

// =====================================================
// UTILITIES
// =====================================================

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// =====================================================
// KEYBOARD ACCESSIBILITY — Universal Design
// =====================================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeEmergencyModal();
    closeSuggestions();
    document.getElementById('symptomDropdown')?.classList.remove('open');
  }
});

// =====================================================
// NAVBAR SCROLL BEHAVIOR
// =====================================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) {
    nav.style.boxShadow = 'var(--shadow-md)';
  } else {
    nav.style.boxShadow = 'none';
  }
}, { passive: true });
