/**
 * CyberGuard CEP - Main Interactive Engine
 * Handles Theme (Dark/Light), Multi-language (EN/HI/MR), Language Toast, Simulator & Assessment
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initMobileNav();
  initSimulator();
  initRiskAssessment();
});

/* --------------------------------------------------------------------------
   Theme Switcher (Dark / Light)
   -------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem('cep_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);

  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('cep_theme', newTheme);
      updateThemeButton(newTheme);
    });
  });
}

function updateThemeButton(theme) {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    if (theme === 'dark') {
      btn.innerHTML = '<i class="fa-solid fa-sun" style="color: #f59e0b;"></i>';
      btn.setAttribute('title', 'Switch to Light Theme');
      btn.setAttribute('aria-label', 'Switch to Light Theme');
    } else {
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      btn.setAttribute('title', 'Switch to Dark Theme');
      btn.setAttribute('aria-label', 'Switch to Dark Theme');
    }
  });
}

/* --------------------------------------------------------------------------
   Multi-Language (i18n) & Welcome Toast
   -------------------------------------------------------------------------- */
function initLanguage() {
  const savedLang = localStorage.getItem('cep_language') || 'en';
  applyLanguage(savedLang);

  // Setup language button listeners in header
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      applyLanguage(selected);
      closeLanguageToast();
    });
  });

  // Check if toast was already answered
  const hasChosenLang = localStorage.getItem('cep_language_chosen');
  if (!hasChosenLang) {
    setTimeout(showLanguageToast, 800);
  }

  // Toast button click listeners
  document.querySelectorAll('.lang-toast-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
      localStorage.setItem('cep_language_chosen', 'true');
      closeLanguageToast();
    });
  });

  const toastClose = document.querySelector('.lang-toast-close');
  if (toastClose) {
    toastClose.addEventListener('click', () => {
      localStorage.setItem('cep_language_chosen', 'true');
      closeLanguageToast();
    });
  }
}

function showLanguageToast() {
  const toastContainer = document.querySelector('.lang-toast-container');
  if (toastContainer) {
    toastContainer.classList.add('show');
  }
}

function closeLanguageToast() {
  const toastContainer = document.querySelector('.lang-toast-container');
  if (toastContainer) {
    toastContainer.classList.remove('show');
  }
}

/* --------------------------------------------------------------------------
   Mobile Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });
  }
}

/* --------------------------------------------------------------------------
   Interactive "Spot The Phish" Simulator (Multi-lingual)
   -------------------------------------------------------------------------- */
const simulatorData = {
  en: [
    {
      type: "SMS / Smishing",
      sender: "VK-SBINB-ALERT",
      date: "Today, 11:42 AM",
      subject: "Urgent: Electricity Connection & Bank KYC Deactivation",
      content: "Dear Customer, Your Bank A/C KYC has expired. Your electric power supply will also be suspended by 9:30 PM tonight unless updated immediately. Click here to verify your Aadhaar & Pan: http://bit.ly/sbi-kyc-update99",
      isPhishing: true,
      redFlags: [
        "Suspicious bit.ly shortened link instead of official bank domain",
        "High-pressure artificial urgency ('suspended tonight by 9:30 PM')",
        "Mashing two unrelated services together (Electricity + Bank KYC) to cause panic",
        "Banks never request KYC updates via random bit.ly SMS links"
      ]
    },
    {
      type: "Email",
      sender: "no-reply@amazon.in",
      date: "Yesterday, 3:15 PM",
      subject: "Your Amazon.in order #402-8821941 has been dispatched",
      content: "Hello Aryan, Your order for 'Stainless Steel Water Bottle' has been handed over to the courier. You can track your package directly inside your Amazon account under 'Your Orders'. Amazon will never call you asking for OTP or card CVV for delivery.",
      isPhishing: false,
      redFlags: [
        "Legitimate sender domain matches official registered service (@amazon.in)",
        "Addressed to user specifically, with authentic order context",
        "Explicitly reminds user never to share OTP or CVV",
        "Does not pressure you to click obscure links or transfer funds"
      ]
    },
    {
      type: "WhatsApp / Video Call Threat",
      sender: "+91 98210-XXXXX (Profile picture: State Police Logo)",
      date: "Today, 02:05 PM",
      subject: "TRAI & Cyber Crime Department Warning",
      content: "WARNING: A parcel with contraband registered under your Aadhaar ID has been intercepted at Mumbai Customs. An arrest warrant has been issued. Join this Skype video call immediately for interrogation and transfer ₹50,000 security deposit to the RBI verification escrow to avoid detention.",
      isPhishing: true,
      redFlags: [
        "Classic 'Digital Arrest' scam - law enforcement NEVER conducts interrogations on Skype/WhatsApp",
        "No Indian police agency or court asks for 'security deposits' to private bank accounts via UPI",
        "Exploits severe fear and intimidation to prevent consulting family"
      ]
    },
    {
      type: "Email / Work Impersonation",
      sender: "ceo.office-internal-update@gmail.com",
      date: "Today, 09:12 AM",
      subject: "URGENT: Quick favor for client meeting",
      content: "Hi, I am stuck in an all-day executive board meeting and cannot talk on phone. I need you to urgently buy 5 Apple Gift Cards worth ₹10,000 each for our international clients and email the gift codes to this address immediately. I will reimburse you by evening.",
      isPhishing: true,
      redFlags: [
        "Sent from a free @gmail.com address impersonating company leadership",
        "Insists that you cannot call or verify their voice",
        "Gift card payment requests are non-traceable and 100% scam indicator",
        "Exploits perceived corporate authority"
      ]
    }
  ],
  hi: [
    {
      type: "SMS / स्मिशिंग",
      sender: "VK-SBINB-ALERT",
      date: "आज, 11:42 AM",
      subject: "अति आवश्यक: बिजली कनेक्शन और बैंक KYC निलंबन",
      content: "प्रिय ग्राहक, आपके बैंक खाते का KYC समाप्त हो गया है। आज रात 9:30 बजे आपकी बिजली आपूर्ति भी काट दी जाएगी। आधार व पैन तुरंत सत्यापित करने के लिए यहाँ क्लिक करें: http://bit.ly/sbi-kyc-update99",
      isPhishing: true,
      redFlags: [
        "आधिकारिक बैंक वेबसाइट के बजाय संदेहास्पद bit.ly शॉर्ट लिंक",
        "जल्दबाजी का झूठा दबाव ('आज रात 9:30 बजे बिजली कटेगी')",
        "घबराहट पैदा करने के लिए दो अलग-अलग सेवाओं (बिजली + बैंक) को मिलाना",
        "बैंक कभी भी साधारण SMS लिंक द्वारा KYC अपडेट नहीं मांगते"
      ]
    },
    {
      type: "ईमेल",
      sender: "no-reply@amazon.in",
      date: "कल, 3:15 PM",
      subject: "आपका Amazon.in ऑर्डर #402-8821941 भेज दिया गया है",
      content: "नमस्ते आर्यन, आपका 'स्टेनलेस स्टील वॉटर बॉटल' का ऑर्डर कूरियर को सौंप दिया गया है। आप सीधे अपने अमेज़न अकाउंट में जाकर 'Your Orders' में इसे ट्रैक कर सकते हैं। अमेज़न डिलीवरी के लिए आपसे कभी ओटीपी या कार्ड सीवीवी नहीं मांगता।",
      isPhishing: false,
      redFlags: [
        "भेजने वाले का डोमेन आधिकारिक सेवा से मेल खाता है (@amazon.in)",
        "ग्राहक के वास्तविक ऑर्डर संदर्भ के साथ नाम से संबोधित किया गया",
        "स्पष्ट रूप से याद दिलाता है कि कभी किसी को OTP या CVV न दें",
        "किसी संदेहास्पद लिंक या पैसे ट्रांसफर का कोई दबाव नहीं"
      ]
    },
    {
      type: "व्हाट्सएप / डिजिटल अरेस्ट",
      sender: "+91 98210-XXXXX (डीपी: राज्य पुलिस लोगो)",
      date: "आज, 02:05 PM",
      subject: "TRAI एवं साइबर अपराध विभाग चेतावनी",
      content: "चेतावनी: आपके आधार कार्ड के तहत मुंबई कस्टम्स में नशीले पदार्थों का पार्सल पकड़ा गया है। आपके खिलाफ गैर-जमानती वारंट जारी हुआ है। तुरंत स्काइप वीडियो कॉल से जुड़ें और गिरफ्तारी से बचने हेतु आरबीआई सत्यापन खाते में ₹50,000 सुरक्षा राशि जमा करें।",
      isPhishing: true,
      redFlags: [
        "क्लासिक 'डिजिटल अरेस्ट' घोटाला - पुलिस कभी भी स्काइप/व्हाट्सएप पर पूछताछ नहीं करती",
        "कोई भी भारतीय एजेंसी या कोर्ट यूपीआई से 'सिक्योरिटी डिपॉजिट' नहीं मांगता",
        "सोचने और परिवार से बात करने से रोकने के लिए भारी खौफ पैदा करना"
      ]
    },
    {
      type: "ईमेल / बॉस का छद्मवेश",
      sender: "ceo.office-internal-update@gmail.com",
      date: "आज, 09:12 AM",
      subject: "अति आवश्यक: क्लाइंट मीटिंग हेतु मदद",
      content: "नमस्ते, मैं बोर्ड मीटिंग में व्यस्त हूँ और कॉल पर बात नहीं कर सकता। मुझे विदेशी क्लाइंट्स के लिए ₹10,000 वाले 5 ऐपल गिफ्ट कार्ड तुरंत चाहिए। कोड खरीदकर इसी पते पर ईमेल करें। मैं शाम को पैसे दे दूंगा।",
      isPhishing: true,
      redFlags: [
        "कंपनी अधिकारी के नाम पर मुफ्त @gmail.com पते से भेजा गया ईमेल",
        "कॉल पर आवाज की पुष्टि न करने देने का बहाना",
        "गिफ्ट कार्ड कोड मांगना 100% स्कैम का संकेत है क्योंकि इसे ट्रैक नहीं किया जा सकता",
        "पद और अधिकार के दबाव का दुरुपयोग"
      ]
    }
  ],
  mr: [
    {
      type: "SMS / स्मिशिंग",
      sender: "VK-SBINB-ALERT",
      date: "आज, 11:42 AM",
      subject: "तातडीचे: वीज कनेक्शन आणि बँक KYC निलंबन",
      content: "प्रिय ग्राहक, तुमच्या बँक खात्याचे KYC संपले आहे. त्वरित अपडेट न केल्यास आज रात्री 9:30 वाजता तुमचा वीज पुरवठा खंडित केला जाईल. आधार आणि पॅन पडताळण्यासाठी येथे क्लिक करा: http://bit.ly/sbi-kyc-update99",
      isPhishing: true,
      redFlags: [
        "अधिकृत बँकेच्या संकेतस्थळाऐवजी bit.ly शॉर्ट लिंकचा संशयास्पद वापर",
        "घाईगडबडीचा खोटा दबाव ('आज रात्री 9:30 वाजता वीज कापली जाईल')",
        "घाबरवून टाकण्यासाठी दोन असंबंधित गोष्टी (वीज + बँक) एकत्र करणे",
        "बँका कधीही अशा अनोळखी SMS लिंकद्वारे KYC माहिती मागत नाहीत"
      ]
    },
    {
      type: "ईमेल",
      sender: "no-reply@amazon.in",
      date: "काल, 3:15 PM",
      subject: "तुमची Amazon.in ऑर्डर #402-8821941 रवाना झाली आहे",
      content: "नमस्कार आर्यन, तुमची 'स्टेनलेस स्टील वॉटर बॉटल' ची ऑर्डर कुरिअरकडे सोपवण्यात आली आहे. तुम्ही तुमच्या ॲमेझॉन खात्यात 'Your Orders' विभागात ट्रॅक करू शकता. ॲमेझॉन डिलिव्हरीसाठी कधीही OTP किंवा कार्ड CVV मागत नाही.",
      isPhishing: false,
      redFlags: [
        "पाठवणाऱ्याचा पत्ता अधिकृत डोमेनशी तंतोतंत जुळतो (@amazon.in)",
        "खऱ्या ऑर्डर संदर्भासह ग्राहकाच्या नावाचा स्पष्ट उल्लेख",
        "ओटीपी किंवा सीव्हीव्ही कोणालाही न देण्याची स्पष्ट सूचना",
        "कोणतीही संशयास्पद लिंक किंवा तातडीने पैसे भरण्याचा दबाव नाही"
      ]
    },
    {
      type: "व्हॉट्सॲप / डिजिटल अरेस्ट धमकी",
      sender: "+91 98210-XXXXX (डीपी: राज्य पोलीस लोगो)",
      date: "आज, 02:05 PM",
      subject: "TRAI व सायबर गुन्हे विभाग इशारा",
      content: "इशारा: तुमच्या आधार क्रमांकावर मुंबई कस्टम्समध्ये अंमली पदार्थांचे पार्सल जप्त करण्यात आले आहे. तुमच्याविरुद्ध अटक वॉरंट निघाले आहे. चौकशीसाठी लगेच स्काईप व्हिडिओ कॉल जॉईन करा आणि अटक टाळण्यासाठी आरबीआय पडताळणी खात्यावर ₹50,000 सुरक्षा अनामत रक्कम ट्रान्सफर करा.",
      isPhishing: true,
      redFlags: [
        "कुख्यात 'डिजिटल अरेस्ट' घोटाळा - पोलीस कधीही स्काईप/व्हॉट्सॲपवर चौकशी करत नाहीत",
        "कोणतीही भारतीय पोलीस यंत्रणा किंवा न्यायालय यूपीआयद्वारे 'डिपॉझिट' मागत नाही",
        "नातेवाईकांशी विचारविनिमय करू न देण्यासाठी प्रचंड भीतीचा वापर"
      ]
    },
    {
      type: "ईमेल / वरिष्ठ अधिकाऱ्याची तोतयागिरी",
      sender: "ceo.office-internal-update@gmail.com",
      date: "आज, 09:12 AM",
      subject: "तातडीचे: क्लायंट मीटिंगसाठी एक काम",
      content: "नमस्कार, मी दिवसभर महत्त्वाच्या बैठकीत अडकलो आहे आणि फोनवर बोलू शकत नाही. मला विदेशी क्लायंट्ससाठी प्रत्येकी ₹10,000 चे 5 ॲपल गिफ्ट कार्ड तातडीने हवे आहेत. ते खरेदी करून गिफ्ट कोड लगेच या ईमेलवर पाठवा. मी संध्याकाळी पैसे देईन.",
      isPhishing: true,
      redFlags: [
        "कंपनीच्या मोठ्या अधिकाऱ्याचे नाव वापरून मोफत @gmail.com वरून आलेला ईमेल",
        "फोनवर आवाज पडताळण्यास नकार देण्याचा बहाणा",
        "गिफ्ट कार्ड कोड मागणे हे 100% फसवणुकीचे लक्षण आहे",
        "अधिकार पदाचा दबाव वापरून विचार न करू देणे"
      ]
    }
  ]
};

function initSimulator() {
  const container = document.getElementById('phishing-sim-container');
  if (!container) return;

  let currentIdx = 0;
  let score = 0;
  let answered = false;

  function getCurrentLang() {
    return localStorage.getItem('cep_language') || 'en';
  }

  function renderScenario() {
    const lang = getCurrentLang();
    const scenarios = simulatorData[lang] || simulatorData['en'];
    const item = scenarios[currentIdx] || scenarios[0];
    const total = scenarios.length;
    const progressPct = ((currentIdx + 1) / total) * 100;
    answered = false;

    const lblScenario = lang === 'hi' ? 'परिदृश्य' : (lang === 'mr' ? 'घटना' : 'Scenario');
    const lblOf = lang === 'hi' ? 'का' : (lang === 'mr' ? 'पैकी' : 'of');
    const btnFlag = lang === 'hi' ? '⚠️ फ़िशिंग / स्कैम चिह्नित करें' : (lang === 'mr' ? '⚠️ फिशिंग / स्कॅम चिन्हांकित करा' : '⚠️ Flag as Phishing / Scam');
    const btnSafe = lang === 'hi' ? '🛡️ सुरक्षित व असली संदेश' : (lang === 'mr' ? '🛡️ सुरक्षित व खरा मेसेज' : '🛡️ Looks Safe & Authentic');
    const btnNext = currentIdx + 1 === total 
      ? (lang === 'hi' ? 'अंतिम परिणाम देखें 🎉' : (lang === 'mr' ? 'अंतिम निकाल पहा 🎉' : 'See Final Results 🎉'))
      : (lang === 'hi' ? 'अगला परिदृश्य ➡️' : (lang === 'mr' ? 'पुढील घटना ➡️' : 'Next Scenario ➡️'));

    container.innerHTML = `
      <div class="simulator-box">
        <div class="sim-header">
          <div>
            <span class="section-tag">${escapeHtml(item.type)}</span>
            <h3 style="margin-top: 0.25rem;">${lblScenario} ${currentIdx + 1} ${lblOf} ${total}</h3>
          </div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 1.1rem; color: var(--primary);">
            Score: <span id="current-score">${score}</span>/${total}
          </div>
        </div>

        <div class="sim-progress-bar">
          <div class="sim-progress-fill" style="width: ${progressPct}%"></div>
        </div>

        <div class="mockup-message">
          <div class="mockup-header">
            <div class="mockup-row"><span class="mockup-label">From:</span> <span class="mockup-value">${escapeHtml(item.sender)}</span></div>
            <div class="mockup-row"><span class="mockup-label">Date:</span> <span class="mockup-value">${escapeHtml(item.date)}</span></div>
            <div class="mockup-row"><span class="mockup-label">Subject:</span> <span class="mockup-value">${escapeHtml(item.subject)}</span></div>
          </div>
          <div class="mockup-body">
            <p>${escapeHtml(item.content)}</p>
          </div>
        </div>

        <div class="sim-actions" id="sim-button-group">
          <button class="btn btn-danger" id="btn-phishing">${btnFlag}</button>
          <button class="btn btn-secondary" id="btn-legit">${btnSafe}</button>
        </div>

        <div id="sim-feedback" class="sim-feedback"></div>

        <div style="text-align: right; margin-top: 1.25rem; display: none;" id="sim-next-wrap">
          <button class="btn btn-primary" id="btn-next-scenario">${btnNext}</button>
        </div>
      </div>
    `;

    document.getElementById('btn-phishing').addEventListener('click', () => handleChoice(true));
    document.getElementById('btn-legit').addEventListener('click', () => handleChoice(false));
  }

  function handleChoice(userSaysPhishing) {
    if (answered) return;
    answered = true;

    const lang = getCurrentLang();
    const scenarios = simulatorData[lang] || simulatorData['en'];
    const item = scenarios[currentIdx];
    const isCorrect = userSaysPhishing === item.isPhishing;
    if (isCorrect) score++;

    const scoreEl = document.getElementById('current-score');
    if (scoreEl) scoreEl.textContent = score;

    const feedbackBox = document.getElementById('sim-feedback');
    feedbackBox.style.display = 'block';

    if (isCorrect) {
      feedbackBox.className = 'sim-feedback correct';
      const heading = lang === 'hi' ? '🎯 बिल्कुल सही पहचान!' : (lang === 'mr' ? '🎯 अगदी अचूक निदान!' : '🎯 Correct Diagnosis!');
      const text = item.isPhishing
        ? (lang === 'hi' ? 'यह वाकई एक खतरनाक फ़िशिंग / सोशल इंजीनियरिंग हमला था।' : (lang === 'mr' ? 'हा खरोखरच एक धोकादायक फिशिंग / स्कॅम सापळा होता.' : 'This was indeed a dangerous phishing / social engineering scam.'))
        : (lang === 'hi' ? 'यह एक सुरक्षित और प्रामाणिक संदेश था।' : (lang === 'mr' ? 'हा एक सुरक्षित आणि अधिकृत मेसेज होता.' : 'This was a legitimate and authentic communication.'));

      feedbackBox.innerHTML = `
        <h4 style="font-weight:700; margin-bottom: 0.35rem;">${heading}</h4>
        <p style="font-size: 0.92rem;">${text}</p>
        <ul style="margin-top: 0.5rem; padding-left: 1.25rem; font-size: 0.88rem;">
          ${item.redFlags.map(rf => `<li>${rf}</li>`).join('')}
        </ul>
      `;
    } else {
      feedbackBox.className = 'sim-feedback wrong';
      const heading = lang === 'hi' ? '❌ सावधानी: आप जाल में फंस गए!' : (lang === 'mr' ? '❌ सावधान: तुम्ही सापळ्यात अडकलात!' : '❌ Caution: Trapped!');
      const text = item.isPhishing
        ? (lang === 'hi' ? 'यह वास्तव में आपको ठगने के लिए रचा गया स्कैम था।' : (lang === 'mr' ? 'हा प्रत्यक्षात फसवणुकीसाठी रचलेला स्कॅम होता.' : 'This was an active scam designed to defraud you.'))
        : (lang === 'hi' ? 'यह सुरक्षित था, लेकिन सतर्कता हमेशा अच्छी बात है।' : (lang === 'mr' ? 'हा खरा मेसेज होता, तरीही सतर्कता बाळगणे नेहमीच चांगले.' : 'This was actually safe, but caution is always good!'));

      feedbackBox.innerHTML = `
        <h4 style="font-weight:700; margin-bottom: 0.35rem;">${heading}</h4>
        <p style="font-size: 0.92rem;">${text}</p>
        <ul style="margin-top: 0.5rem; padding-left: 1.25rem; font-size: 0.88rem;">
          ${item.redFlags.map(rf => `<li>${rf}</li>`).join('')}
        </ul>
      `;
    }

    document.getElementById('btn-phishing').disabled = true;
    document.getElementById('btn-legit').disabled = true;
    document.getElementById('sim-button-group').style.opacity = '0.5';

    const nextWrap = document.getElementById('sim-next-wrap');
    nextWrap.style.display = 'block';
    document.getElementById('btn-next-scenario').addEventListener('click', () => {
      currentIdx++;
      if (currentIdx < scenarios.length) {
        renderScenario();
      } else {
        renderCompletion();
      }
    });
  }

  function renderCompletion() {
    const lang = getCurrentLang();
    const scenarios = simulatorData[lang] || simulatorData['en'];
    const total = scenarios.length;
    const percentage = Math.round((score / total) * 100);

    let title = lang === 'hi' ? 'अभ्यास पूर्ण हुआ' : (lang === 'mr' ? 'सराव पूर्ण झाला' : 'Simulation Complete');
    let yourScore = lang === 'hi' 
      ? `आपका स्कोर: ${score} / ${total} (${percentage}%)` 
      : (lang === 'mr' ? `तुमचा निकाल: ${score} / ${total} (${percentage}%)` : `Your Defense Score: ${score} / ${total} (${percentage}%)`);
    let retakeBtn = lang === 'hi' ? '🔄 पुनः अभ्यास करें' : (lang === 'mr' ? '🔄 पुन्हा सराव करा' : '🔄 Retake Simulation');

    container.innerHTML = `
      <div class="simulator-box" style="text-align: center; padding: 2.5rem 1.5rem;">
        <span class="section-tag success">${title}</span>
        <h2 style="font-size: 2rem; margin: 1rem 0;">${yourScore}</h2>

        <div style="background-color: var(--bg-subtle); border-radius: var(--radius-sm); padding: 1.25rem; max-width: 520px; margin: 0 auto 2rem; text-align: left; font-size: 0.9rem;">
          <h4 style="color: var(--primary); margin-bottom: 0.5rem;">📌 3 Golden Rules:</h4>
          <p style="margin-bottom: 0.35rem;">✅ Never click bit.ly or shortened links in bank/electricity SMS</p>
          <p style="margin-bottom: 0.35rem;">✅ Entering a UPI PIN always sends money, never receives money</p>
          <p>✅ Indian police never conduct video call interrogations or 'Digital Arrest'</p>
        </div>

        <button class="btn btn-primary" id="btn-restart-sim">${retakeBtn}</button>
      </div>
    `;

    document.getElementById('btn-restart-sim').addEventListener('click', () => {
      currentIdx = 0;
      score = 0;
      renderScenario();
    });
  }

  window.addEventListener('cep_language_changed', () => {
    currentIdx = 0;
    score = 0;
    renderScenario();
  });

  renderScenario();
}

/* --------------------------------------------------------------------------
   Quick Risk Assessment (Vulnerability Checker)
   -------------------------------------------------------------------------- */
function initRiskAssessment() {
  const form = document.getElementById('risk-calc-form');
  const resultBox = document.getElementById('risk-calc-result');
  if (!form || !resultBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    let riskPoints = 0;

    if (data.get('q_pwd') === 'yes') riskPoints += 3;
    if (data.get('q_2fa') === 'no') riskPoints += 3;
    if (data.get('q_links') === 'yes') riskPoints += 2;
    if (data.get('q_otp') === 'yes') riskPoints += 4;

    const lang = localStorage.getItem('cep_language') || 'en';
    resultBox.style.display = 'block';

    if (riskPoints <= 2) {
      const heading = lang === 'hi' ? '🟢 कम जोखिम (Low Vulnerability)' : (lang === 'mr' ? '🟢 कमी धोका (Low Vulnerability)' : '🟢 Low Vulnerability Profile');
      const text = lang === 'hi' 
        ? 'उत्कृष्ट डिजिटल सुरक्षा! अपने सभी खातों पर 2FA सक्रिय रखकर हमेशा सुरक्षित रहें।'
        : (lang === 'mr' ? 'उत्कृष्ट डिजिटल सवय! आपली सर्व खाती 2FA ने सुरक्षित ठेवून सतर्क राहा.' : 'Excellent digital hygiene! Keep 2FA active across all accounts to stay protected.');
      resultBox.innerHTML = `
        <div style="background-color: var(--success-subtle); border: 1px solid var(--success-border); padding: 1.15rem; border-radius: var(--radius-sm); color: var(--success);">
          <h4 style="font-weight: 700;">${heading} (Score: ${riskPoints}/12)</h4>
          <p style="font-size: 0.9rem; margin-top: 0.25rem;">${text}</p>
        </div>
      `;
    } else if (riskPoints <= 6) {
      const heading = lang === 'hi' ? '🟡 मध्यम जोखिम (Moderate Risk)' : (lang === 'mr' ? '🟡 मध्यम धोका (Moderate Risk)' : '🟡 Moderate Exposure Risk');
      const text = lang === 'hi'
        ? 'आप कुछ सावधानियां बरतते हैं, लेकिन एक ही पासवर्ड रखना या 2FA न होना आपको हैकिंग और फ़िशिंग के जोखिम में डालता है।'
        : (lang === 'mr' ? 'काही चांगल्या सवयी आहेत, मात्र पासवर्ड पुन्हा वापरणे किंवा 2FA नसणे यामुळे फसवणुकीचा धोका वाढतो.' : 'You have some safe habits, but reused passwords or missing 2FA leave you exposed.');
      resultBox.innerHTML = `
        <div style="background-color: var(--warning-subtle); border: 1px solid var(--warning-border); padding: 1.15rem; border-radius: var(--radius-sm); color: var(--warning);">
          <h4 style="font-weight: 700;">${heading} (Score: ${riskPoints}/12)</h4>
          <p style="font-size: 0.9rem; margin-top: 0.25rem;">${text}</p>
        </div>
      `;
    } else {
      const heading = lang === 'hi' ? '🔴 गंभीर जोखिम चेतावनी! (High Threat)' : (lang === 'mr' ? '🔴 गंभीर धोका इशारा! (High Threat)' : '🔴 Critical Threat Exposure!');
      const text = lang === 'hi'
        ? 'गंभीर खतरा! आपकी वर्तमान आदतें वित्तीय धोखाधड़ी और खाता चोरी के लिए अति संवेदनशील हैं। तुरंत 2FA चालू करें और फोन पर कभी ओटीपी न दें।'
        : (lang === 'mr' ? 'गंभीर धोका! तुमची खाती सायबर चोरांच्या सहज जाळ्यात अडकू शकतात. ताबडतोब 2FA चालू करा आणि फोनवर कधीही ओटीपी सांगू नका.' : 'Critical vulnerability! You are at high risk of financial fraud. Enable 2FA immediately and never share OTPs.');
      resultBox.innerHTML = `
        <div style="background-color: var(--danger-subtle); border: 1px solid var(--danger-border); padding: 1.15rem; border-radius: var(--radius-sm); color: var(--danger);">
          <h4 style="font-weight: 700;">${heading} (Score: ${riskPoints}/12)</h4>
          <p style="font-size: 0.9rem; margin-top: 0.25rem;">${text}</p>
        </div>
      `;
    }
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}
