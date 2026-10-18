/**
 * CyberGuard CEP - Complete i18n Translation Engine
 * Supported Languages: English (en), Hindi (hi), Marathi (mr)
 */

const i18nData = {
  en: {
    // Top Bar & Navigation
    "alert.title": "Cyber Fraud Emergency:",
    "alert.desc": "If you lost money in an online scam, report within the golden hour.",
    "alert.helpline": "National Cyber Crime Helpline:",
    "alert.dial": "Dial 1930",
    "alert.incident": "Incident Advisory: Police and CBI never hold court hearings or interrogate citizens on Skype or WhatsApp.",
    "alert.action": "Actionable Protocol: Golden hour response is crucial to freeze stolen funds across banking networks.",
    "nav.problem": "The Problem",
    "nav.cases": "Real Cases & Videos",
    "nav.solutions": "Solutions & Simulator",
    "nav.test": "Test Your Skills",
    "brand.badge": "CEP Initiative",

    // Toast
    "toast.title": "Choose Your Language / भाषा निवडा / भाषा चुनें",
    "toast.desc": "Welcome to CyberGuard Community Project. Please select your preferred reading language:",
    "toast.dismiss": "Continue",

    // Index Page - Hero
    "hero.tag": "Community Engagement Project (CEP)",
    "hero.title": "The Human Firewall: Confronting Phishing, Social Engineering & Data Exploitation",
    "hero.lead": "Cybercriminals don't just hack firewalls anymore; they hack human psychology. Discover how deceptive emails, fake emergency calls, and leaked customer databases endanger families, students, and businesses—and how we fight back.",
    "hero.btn.problem": "Unpack The Problem",
    "hero.btn.videos": "Watch National Scams",
    "hero.btn.solutions": "View Solutions",
    "hero.badge.title": "82% of Breaches Involve Humans",
    "hero.badge.desc": "Phishing and pretexting manipulate panic and urgency before logic can intervene.",

    // Metrics
    "metric1.num": "3.4 Billion",
    "metric1.label": "Phishing Emails Sent Globally Every Day",
    "metric2.num": "₹1,750+ Cr",
    "metric2.label": "Reported Indian Digital Financial Frauds in 2024",
    "metric3.num": "91%",
    "metric3.label": "Of Targeted Attacks Start With Spear Phishing",
    "metric4.num": "10 Minutes",
    "metric4.label": "Critical Golden Window to Freeze Stolen UPI / Bank Funds",

    // Problem Cards
    "prob.tag": "The Problem Spectrum",
    "prob.title": "How Cybercriminals Weaponize Trust & Identity",
    "prob.desc": "Modern cyber threats exploit our natural inclination to trust authority, help others, or react swiftly to emergencies. Here are the three interconnected threats endangering our community:",
    
    "card1.title": "1. Phishing & Smishing",
    "card1.desc": "Deceptive digital communications crafted to clone legitimate entities like banks, utility boards, or government departments. Scammers embed malicious spoofed links to capture credentials.",
    "card1.item1": "Smishing: Fake SMS claiming electricity disconnection by 9:30 PM.",
    "card1.item2": "Clone Phishing: Replica bank login portals designed to steal OTPs.",
    "card1.item3": "QR Code Trap: Tricking victims into scanning QR codes to 'receive money'.",

    "card2.title": "2. Social Engineering",
    "card2.desc": "The psychological art of manipulating people into voluntarily surrendering confidential data, passwords, or authorizing unauthorized money transfers through fabricated narratives.",
    "card2.item1": "'Digital Arrest' Scams: Impersonating police/CBI officers on video calls.",
    "card2.item2": "Pretexting: Posing as hospital staff claiming a family emergency.",
    "card2.item3": "Authority Bias: Impersonating corporate leadership or customs inspectors.",

    "card3.title": "3. Customer Data Compromise",
    "card3.desc": "When organizations fail to protect Personally Identifiable Information (PII), customer records end up for sale on dark web forums—supplying scammers with names, phone numbers, and Aadhaar numbers.",
    "card3.item1": "Targeted Spearing: Using leaked data to make fake calls shockingly believable.",
    "card3.item2": "SIM Swapping: Stealing mobile identity using leaked customer documentation.",
    "card3.item3": "Regulatory Fines: Legal penalties under India's DPDP Act 2023.",

    // Attack Loop
    "loop.tag": "Anatomy of an Attack",
    "loop.title": "The 4-Stage Social Engineering Attack Loop",
    "loop.desc": "Attackers follow a deliberate, calculated methodology to dismantle the victim's natural skepticism.",
    "loop.s1.title": "01 Reconnaissance",
    "loop.s1.desc": "Attacker searches social media, public databases, or dark web breaches to identify target's full name, employer, bank, and contacts.",
    "loop.s2.title": "02 Pretext Fabrication",
    "loop.s2.desc": "Crafting a believable scenario: 'Your account is frozen', 'Urgent tax refund waiting', or 'Your electric power will be cut tonight'.",
    "loop.s3.title": "03 High-Pressure Trigger",
    "loop.s3.desc": "The attacker forces an immediate deadline. Rushed targets skip critical logic and follow instructions without consulting family.",
    "loop.s4.title": "04 Data / Money Extraction",
    "loop.s4.desc": "The victim shares the OTP, installs AnyDesk/TeamViewer remote screen-sharing tools, or completes an irreversible UPI transaction.",

    // Comparison
    "comp.prob.title": "The Problem: Why Traditional Defenses Fail",
    "comp.prob.1.t": "Firewalls Don't Stop Convincing Lies",
    "comp.prob.1.d": "An employee or citizen will open a door when convinced the person knocking is legitimate police or banking staff.",
    "comp.prob.2.t": "Customer Data Neglected in Plaintext",
    "comp.prob.2.d": "Small shops, colleges, and local service providers store customer contacts in unencrypted spreadsheets and unsecured clouds.",
    "comp.prob.3.t": "Stigma and Hesitation to Report",
    "comp.prob.3.d": "Victims often feel embarrassed after falling for scams, delaying reports past the vital 2-hour recovery window.",

    "comp.sol.title": "The Solution: The Community Defense Model",
    "comp.sol.1.t": "Verification Before Action ('Zero Trust')",
    "comp.sol.1.d": "Always disconnect unexpected calls and verify independently via official numbers on bank cards or official websites.",
    "comp.sol.2.t": "Customer Data Privacy by Design (DPDP)",
    "comp.sol.2.d": "Mask phone numbers, mandate Multi-Factor Authentication (MFA), and purge inactive client records securely.",
    "comp.sol.3.t": "Empowered Community Reporting",
    "comp.sol.3.d": "Awareness drives speed. Dialing 1930 immediately blocks scammer beneficiary bank accounts across national financial networks.",

    "cta.cases.title": "Ready to examine real cases across the country?",
    "cta.cases.desc": "See real video breakdowns of KYC scams, UPI traps, and digital arrest cases.",
    "cta.cases.btn": "Explore Real Cases & Videos",

    // Workshop
    "ws.tag": "CEP Objectives",
    "ws.title": "Our Mission in Community Engagement",
    "ws.desc": "As part of our Community Engagement Project (CEP), we are bridging the knowledge gap between sophisticated cybercrime operations and vulnerable community members—specifically senior citizens, students entering the digital economy, and neighborhood businesses.",
    "ws.i1": "Conducting peer workshops and scam detection drills.",
    "ws.i2": "Educating shop owners on customer data protection compliance.",
    "ws.i3": "Spreading the national 1930 Cyber Fraud Helpline across localities.",

    // Page 2: Cases & Media
    "media.hero.tag": "National Media & Ground Reality",
    "media.hero.title": "Scams in the Headlines: Real Scenarios & Video Evidence",
    "media.hero.lead": "Cyber deception is not theoretical. Watch curated educational awareness videos from cyber authorities across the country and examine documented attack cases that affected everyday citizens and small businesses.",
    
    "media.vid.tag": "Awareness Video Hub",
    "media.vid.title": "Educational Videos from Cyber Experts & Regulators",
    "media.vid.desc": "High-impact video resources illustrating how social engineering psychological triggers trap unsuspecting users and how regulators urge citizens to react.",
    
    "vid1.badge": "Psychology of Fraud",
    "vid1.title": "How Hackers Hack Humans: Social Engineering Deep Dive",
    "vid1.desc": "An engaging breakdown showing why attackers bypass advanced software encryption and instead exploit trust, intimidation, urgency, and human helpfulness.",
    "vid1.tag": "Foundational Threat",

    "vid2.badge": "Email & SMS Defense",
    "vid2.title": "Anatomy of Phishing Links & Spoofed Websites",
    "vid2.desc": "Visual demonstration of fake sender headers, character-swapping domain tricks (typosquatting), and credential-harvesting replica portals.",
    "vid2.tag": "Digital Traps",

    "vid3.badge": "Banking Awareness",
    "vid3.title": "Safe Banking Practices & Golden Hour Reporting",
    "vid3.desc": "Guidance on preventing UPI pin scams, debit card cloning, and how the National Cybercrime Portal (1930) intervenes to freeze money trails.",
    "vid3.tag": "Financial Safety",

    "cases.tag": "Field Investigations",
    "cases.title": "4 Real-World Case Studies Deconstructed",
    "cases.desc": "Examining actual scam mechanisms reported across Indian cities and how attackers leveraged social engineering to compromise individuals and businesses.",

    "case1.badge": "High Severity Scam",
    "case1.title": "Case 1: The 'Digital Arrest' & Fake Customs Threat",
    "case1.desc": "A retired educator received an IVR call claiming a parcel sent to Cambodia with passports and contraband had been seized in their name. Scammers transferred the victim to fake 'officers' on Skype with artificial police backdrops. The victim was kept on a 36-hour continuous video call and coerced into transferring ₹42 lakhs to a 'Supreme Court verification escrow'.",
    "case1.hook": "The Social Engineering Hook: Overwhelming fear, simulated judicial authority, and social isolation (telling victim not to inform anyone).",
    "case1.def": "The Defense Countermeasure: Remember: No Indian agency conducts 'Digital Arrest'. Immediately hang up and dial 1930.",

    "case2.badge": "Mass Smishing Attack",
    "case2.title": "Case 2: The 9:30 PM Electricity Disconnection SMS",
    "case2.desc": "Tens of thousands of apartment residents received an SMS from an ordinary 10-digit mobile number stating: 'Dear Consumer, your electricity power will be disconnected at 9:30 PM tonight due to unpaid previous month bill. Call Electricity Officer immediately at 98XXXX.' Panicked residents called, were told to pay a nominal ₹10 test fee via a remote screen-share app (QuickSupport), which allowed scammers to read their banking OTPs and siphon funds.",
    "case2.hook": "The Social Engineering Hook: False emergency threatening daily comfort (power outage) and tiny monetary entry barrier (₹10).",
    "case2.def": "The Defense Countermeasure: Official discoms never send disconnection notices via personal WhatsApp or 10-digit mobile numbers.",

    "case3.badge": "Peer-to-Peer Marketplace Fraud",
    "case3.title": "Case 3: The 'Scan to Receive Payment' Olx Trick",
    "case3.desc": "A college student posted a study table for sale online for ₹3,000. A buyer claiming to be an army officer agreed without bargaining and sent a QR code over WhatsApp, instructing: 'Scan this QR code on Google Pay / PhonePe to instantly receive the advance money in your bank.' The student entered their 6-digit UPI PIN thinking it was a confirmation, only to find ₹15,000 debited from their savings account.",
    "case3.hook": "The Social Engineering Hook: Patriotic trust (impersonating defense personnel) and exploiting confusion over UPI PIN mechanics.",
    "case3.def": "The Defense Countermeasure: Universal Rule: Entering a UPI PIN ALWAYS deducts money from your account. Receiving money never needs a PIN.",

    "case4.badge": "Enterprise Data Breach",
    "case4.title": "Case 4: Local Pathology Lab Customer Records Leak",
    "case4.desc": "A diagnostic center network maintained patient phone numbers, addresses, and test histories on an unauthenticated Google Drive cloud folder. Threat actors scraped 12,000 records and called patients impersonating doctors, quoting exact medical test dates and demanding urgent advance deposits for prescription drugs. Patients believed the calls because the caller knew confidential personal medical details.",
    "case4.hook": "The Social Engineering Hook: Leveraging leaked Personally Identifiable Information (PII) to build unshakeable credibility.",
    "case4.def": "The Defense Countermeasure: Data fiduciaries must encrypt customer records at rest and adhere to the Digital Personal Data Protection Act (DPDP).",

    "cases.cta.title": "Now that you know the threats, learn how to stop them.",
    "cases.cta.desc": "Explore our community defense checklist, organizational data privacy frameworks, and practice our interactive 'Spot the Phish' simulation engine.",
    "cases.cta.btn": "Go to Solutions & Interactive Simulator",

    // Page 3: Solutions
    "sol.hero.tag": "Actionable Community Defense",
    "sol.hero.title": "From Vulnerability to Resilience: The Solution Playbook",
    "sol.hero.lead": "Technology alone cannot defend against psychological manipulation. Here is the concrete, three-tiered solution framework for citizens, businesses protecting customer data, and immediate victims of fraud.",
    "sol.btn.sim": "Launch Phishing Simulator",
    "sol.btn.dpdp": "Customer Data Protection",
    "sol.btn.plan": "Emergency Action Plan",

    "sim.tag": "Interactive Drill",
    "sim.title": "Spot The Phish: Live Diagnostic Challenge",
    "sim.desc": "Test your scam detection reflexes against realistic communications modeled on real-world Indian cyber scams. Inspect each scenario, check the headers, and decide if it is a legitimate message or a fraudulent trap.",

    "slcd.tag": "Individual Defense",
    "slcd.title": "The 'SLCD' Personal Defense Protocol",
    "slcd.desc": "A simple, memorable 4-step mental firewall that community members can apply whenever confronted with urgent digital demands.",
    
    "slcd.s1.t": "1. S - Stop",
    "slcd.s1.d": "Whenever a message conveys immense urgency ('A/C blocked in 2 hours', 'Arrest warrant issued', 'Electricity cut tonight'), intentionally pause. Urgency is designed to hijack your amygdala and bypass logical skepticism.",
    "slcd.s1.b": "Take a deep breath; no legitimate authority requires a 5-minute deadline.",

    "slcd.s2.t": "2. L - Look",
    "slcd.s2.d": "Inspect sender credentials closely. Check the actual email domain address (e.g., does it say @sbi.co.in or @sbi-support-portal.net?). In SMS, verify whether the sender code is a legitimate 6-character header or a standard 10-digit phone number.",
    "slcd.s2.b": "Scrutinize URLs for hidden characters, bit.ly shorteners, or spelling errors.",

    "slcd.s3.t": "3. C - Call & Check",
    "slcd.s3.d": "Never call the phone number provided inside the suspicious SMS or email. Instead, independently look up the official contact number from the back of your debit card or the official portal, and call them directly to verify.",
    "slcd.s3.b": "Out-of-band verification destroys 99% of social engineering attacks.",

    "slcd.s4.t": "4. D - Decide & Defend",
    "slcd.s4.d": "If anything feels suspicious, immediately block the number, report the message as spam/phishing, and never enter OTPs, passwords, or scan unknown QR codes. If compromised, contact 1930 instantly.",
    "slcd.s4.b": "Remember: Entering a UPI PIN always deducts funds, never receives money.",

    "dpdp.tag": "Organizational & Merchant Security",
    "dpdp.title": "Customer Data Protection: Best Practices & DPDP Act",
    "dpdp.desc": "Community businesses, coaching centers, clinics, and local startups frequently handle sensitive customer data. Protecting this data is both an ethical responsibility and a legal mandate under India's Digital Personal Data Protection (DPDP) Act 2023.",

    "dpdp.p1.t": "Data Minimization",
    "dpdp.p1.d": "Collect only the customer information that is strictly required to fulfill the service. Do not demand Aadhaar or PAN copies unless required by banking regulation.",
    "dpdp.p1.i1": "No Unnecessary KYC: Avoid collecting identity cards for routine retail sales.",
    "dpdp.p1.i2": "Purpose Limitation: Use customer numbers only for billing, not unauthorized promo calls.",
    "dpdp.p1.i3": "Timely Deletion: Purge customer logs and inquiry files after active service concludes.",

    "dpdp.p2.t": "Storage & Access Control",
    "dpdp.p2.d": "Prevent internal leaks and unauthorized exposure by replacing unencrypted spreadsheets with access-controlled, encrypted databases.",
    "dpdp.p2.i1": "No Plaintext Spreadsheets: Never leave customer phone and email lists in public cloud folders.",
    "dpdp.p2.i2": "Role-Based Access (RBAC): Only authorized staff should access customer records.",
    "dpdp.p2.i3": "Mandatory 2FA: Enforce Multi-Factor Authentication for all business CRM and email logins.",

    "dpdp.p3.t": "Compliance & Breach Plan",
    "dpdp.p3.d": "Align with India's DPDP Act obligations and maintain an immediate incident response plan if customer data is compromised.",
    "dpdp.p3.i1": "Explicit Consent: Provide transparent notice explaining why data is collected.",
    "dpdp.p3.i2": "Breach Notification: Notify the Data Protection Board of India and affected users promptly.",
    "dpdp.p3.i3": "Staff Awareness Drills: Train retail staff against social engineering and pretext callers.",

    // Calculator
    "calc.tag": "Self Assessment",
    "calc.title": "Quick Digital Vulnerability Calculator",
    "calc.desc": "Answer 4 simple questions to calculate your current social engineering risk profile.",
    "calc.q1": "1. Do you reuse the same password or variations across multiple websites?",
    "calc.q1.y": "Yes, I do",
    "calc.q1.n": "No, I use unique passwords / password manager",
    "calc.q2": "2. Do you have Two-Factor Authentication (2FA / OTP) enabled on your primary email and UPI/bank apps?",
    "calc.q2.y": "Yes, everywhere possible",
    "calc.q2.n": "No, or only on some apps",
    "calc.q3": "3. Have you ever clicked on a link in an SMS or WhatsApp without inspecting the full domain name?",
    "calc.q3.y": "Yes, sometimes in a rush",
    "calc.q3.n": "Never, I always verify",
    "calc.q4": "4. Has someone on a phone call ever asked you to read an OTP or download AnyDesk/QuickSupport?",
    "calc.q4.y": "Yes, and I shared / considered it",
    "calc.q4.n": "No, or I immediately disconnected",
    "calc.btn": "Calculate My Vulnerability Score",

    // Protocol
    "step.tag": "Incident Protocol",
    "step.title": "What to Do If You or a Community Member Get Scammed",
    "step.desc": "Time is the single most decisive factor in recovering stolen funds. Follow this emergency response ladder immediately.",
    "step1.t": "Step 1: Golden Hour Call",
    "step1.d": "Dial 1930 immediately. The Citizen Financial Cyber Fraud Reporting System can freeze recipient accounts in real-time across participating banks before the cash is laundered.",
    "step1.b": "Call 1930 Now",
    "step2.t": "Step 2: Bank Block",
    "step2.d": "Log into your mobile banking app or call your bank's toll-free emergency number to immediately freeze your netbanking, block debit/credit cards, and reset UPI PINs.",
    "step3.t": "Step 3: Lodge Online FIR",
    "step3.d": "File an official complaint at cybercrime.gov.in. Upload transaction reference numbers, screenshots of chats, fake websites, and phone numbers.",
    "step3.b": "Open Portal",
    "step4.t": "Step 4: Device Cleanup",
    "step4.d": "If you installed any remote software (AnyDesk, TeamViewer, APK files), uninstall them immediately, run a malware scan, and perform a factory reset if necessary.",

    "hotline.title": "National Cyber Crime Reporting Portal",
    "hotline.desc": "Managed by the Indian Cyber Crime Coordination Centre (I4C), Ministry of Home Affairs (MHA), Government of India. Dedicated to fast inter-bank coordination and citizen fraud intervention.",
    "hotline.lbl": "Toll-Free Helpline",
    "hotline.sub": "Available 24x7 Across India",

    // Footer
    "footer.desc": "A student-led Community Engagement Project dedicated to building digital resilience, exposing social engineering tactics, and safeguarding citizen and customer privacy.",
    "footer.badge.t": "Community Engagement Project (CEP)",
    "footer.badge.d": "Focus: Cyber Awareness, Phishing Defense & DPDP Act Data Privacy",
    "footer.nav": "Navigation",
    "footer.topics": "Key Topics",
    "footer.help": "Official Helplines",
    "footer.help.desc": "Immediate assistance for cyber financial crimes in India:",
    "footer.copy": "© 2026 CyberGuard CEP. Developed for Community Digital Awareness. Educational Non-Commercial Project."
  },

  hi: {
    // Top Bar & Navigation
    "alert.title": "साइबर धोखाधड़ी आपातकाल:",
    "alert.desc": "यदि आपने किसी ऑनलाइन घोटाले में पैसे गंवाए हैं, तो 'गोल्डन ऑवर' के भीतर रिपोर्ट करें।",
    "alert.helpline": "राष्ट्रीय साइबर अपराध हेल्पलाइन:",
    "alert.dial": "1930 पर कॉल करें",
    "alert.incident": "महत्वपूर्ण सलाह: पुलिस और सीबीआई कभी भी स्काइप या व्हाट्सएप पर वीडियो कॉल या कोर्ट सुनवाई नहीं करते।",
    "alert.action": "तत्काल कदम: बैंक नेटवर्क में चोरी किए गए पैसे को तुरंत फ्रीज कराने के लिए शुरुआती घंटे बहुत महत्वपूर्ण हैं।",
    "nav.problem": "समस्या और खतरे",
    "nav.cases": "वास्तविक केस व वीडियो",
    "nav.solutions": "समाधान व सिम्युलेटर",
    "nav.test": "जांचें अपनी सतर्कता",
    "brand.badge": "सामुदायिक पहल (CEP)",

    // Toast
    "toast.title": "अपनी भाषा चुनें / Choose Your Language / भाषा निवडा",
    "toast.desc": "साइबरगार्ड कम्युनिटी प्रोजेक्ट में आपका स्वागत है। कृपया अपनी पसंदीदा भाषा चुनें:",
    "toast.dismiss": "आगे बढ़ें",

    // Index Page - Hero
    "hero.tag": "सामुदायिक सहभागिता परियोजना (CEP)",
    "hero.title": "मानव फ़ायरवॉल: फ़िशिंग, सोशल इंजीनियरिंग और डेटा चोरी का मुकाबला",
    "hero.lead": "साइबर अपराधी अब केवल कंप्यूटर सिस्टम हैक नहीं करते, वे इंसानी मनोविज्ञान को हैक करते हैं। जानिए कैसे फर्जी ईमेल, डराने वाली कॉल और लीक हुआ डेटा हमारे परिवारों, छात्रों और व्यापारियों को संकट में डालते हैं—और हम कैसे सुरक्षित रहें।",
    "hero.btn.problem": "समस्या को समझें",
    "hero.btn.videos": "स्कैम वीडियो देखें",
    "hero.btn.solutions": "समाधान देखें",
    "hero.badge.title": "82% साइबर हमलों में इंसानी चूक शामिल",
    "hero.badge.desc": "फ़िशिंग और सोशल इंजीनियरिंग घबराहट और जल्दबाजी पैदा करके सोचने-समझने का मौका छीन लेते हैं।",

    // Metrics
    "metric1.num": "3.4 अरब",
    "metric1.label": "दुनिया भर में हर दिन भेजे जाने वाले फ़िशिंग ईमेल",
    "metric2.num": "₹1,750+ करोड़",
    "metric2.label": "2024 में भारत में दर्ज डिजिटल वित्तीय धोखाधड़ी",
    "metric3.num": "91%",
    "metric3.label": "लक्षित साइबर हमलों की शुरुआत फ़िशिंग ईमेल से होती है",
    "metric4.num": "10 मिनट",
    "metric4.label": "चोरी हुआ UPI / बैंक फंड फ्रीज कराने का स्वर्णिम समय",

    // Problem Cards
    "prob.tag": "खतरों का दायरा",
    "prob.title": "साइबर अपराधी कैसे बनाते हैं भरोसे को हथियार",
    "prob.desc": "आधुनिक साइबर खतरे सत्ता के प्रति हमारे सम्मान, मदद करने की भावना या आपात स्थिति में तुरंत प्रतिक्रिया देने की आदत का फायदा उठाते हैं। ये तीन खतरे सबसे आम हैं:",
    
    "card1.title": "1. फ़िशिंग और स्मिशिंग (Phishing & Smishing)",
    "card1.desc": "बैंक, बिजली विभाग या सरकारी संस्थाओं के नाम पर नकली ईमेल और मैसेज भेजना। इनमें फर्जी लिंक होते हैं जो आपके पासवर्ड और ओटीपी चुरा लेते हैं।",
    "card1.item1": "स्मिशिंग: 'आज रात 9:30 बजे बिजली कट जाएगी' का फर्जी मैसेज।",
    "card1.item2": "क्लोन फ़िशिंग: हूबहू बैंक जैसी दिखने वाली नकली वेबसाइटें।",
    "card1.item3": "QR कोड जाल: 'पैसे प्राप्त करने' के बहाने QR कोड स्कैन करवाना।",

    "card2.title": "2. सोशल इंजीनियरिंग (Social Engineering)",
    "card2.desc": "बातचीत और मनोवैज्ञानिक दबाव के ज़रिए लोगों से पासवर्ड, ओटीपी निकलवाना या उनसे खुद पैसे ट्रांसफर करवा लेना।",
    "card2.item1": "'डिजिटल अरेस्ट' घोटाला: पुलिस या सीबीआई अधिकारी बनकर वीडियो कॉल पर डराना।",
    "card2.item2": "बहाना (Pretexting): रिश्तेदार के अस्पताल में होने का झूठा बहाना बनाकर पैसे मांगना।",
    "card2.item3": "अधिकार का प्रभाव: कंपनी के बड़े अधिकारी या कस्टम विभाग के नाम पर डराना।",

    "card3.title": "3. ग्राहक डेटा चोरी (Customer Data Compromise)",
    "card3.desc": "जब दुकानें, कोचिंग या संस्थान ग्राहकों की निजी जानकारी सुरक्षित नहीं रखते, तो यह डेटा डार्क वेब पर बिक जाता है और अपराधियों के हाथ लग जाता है।",
    "card3.item1": "सटीक धोखाधड़ी: चुराए गए डेटा से बात करके ऐसा भरोसा दिलाना कि कॉल असली लगे।",
    "card3.item2": "सिम स्वैपिंग: ग्राहक के आधार या पहचान पत्र से उसका मोबाइल नंबर अपने नाम कराना।",
    "card3.item3": "कानूनी जुर्माना: भारत के DPDP कानून 2023 के तहत भारी पेनल्टी।",

    // Attack Loop
    "loop.tag": "हमले का चक्रव्यूह",
    "loop.title": "सोशल इंजीनियरिंग हमले के 4 चरण",
    "loop.desc": "अपराधी योजनाबद्ध तरीके से आपकी सामान्य सोच को कमजोर करते हैं।",
    "loop.s1.title": "01 रेकी (जानकारी जुटाना)",
    "loop.s1.desc": "सोशल मीडिया, सार्वजनिक रिकॉर्ड या लीक डेटा से आपका नाम, बैंक, परिवार और नौकरी की जानकारी निकालना।",
    "loop.s2.title": "02 झूठी कहानी तैयार करना",
    "loop.s2.desc": "'खाता ब्लॉक हो गया है', 'टैक्स रिफंड आया है' या 'बिजली कट जाएगी' जैसी घबराहट पैदा करने वाली कहानी बनाना।",
    "loop.s3.title": "03 भारी मानसिक दबाव",
    "loop.s3.desc": "आपको सोचने या परिवार से बात करने का समय न देकर तुरंत निर्णय लेने को विवश करना।",
    "loop.s4.title": "04 डेटा या धन की निकासी",
    "loop.s4.desc": "आपसे ओटीपी पूछना, AnyDesk/TeamViewer ऐप डाउनलोड करवाना या तुरंत UPI से पैसे ट्रांसफर करवा लेना।",

    // Comparison
    "comp.prob.title": "समस्या: पारंपरिक सुरक्षा क्यों विफल हो जाती है?",
    "comp.prob.1.t": "एंटीवायरस इंसानी झूठ को नहीं पहचान सकता",
    "comp.prob.1.d": "जब कोई व्यक्ति खुद यकीन कर लेता है कि सामने वाला असली पुलिस या बैंक मैनेजर है, तो वह खुद पासवर्ड दे देता है।",
    "comp.prob.2.t": "ग्राहक डेटा की लापरवाही से स्टोरेज",
    "comp.prob.2.d": "छोटे व्यापारी और संस्थान ग्राहकों के फोन नंबर और आधार बिना पासवर्ड वाली सामान्य एक्सेल शीट में रखते हैं।",
    "comp.prob.3.t": "धोखे के बाद शर्म और देरी",
    "comp.prob.3.d": "लोग ठगी का शिकार होने पर शर्मिंदगी के कारण शिकायत करने में देर कर देते हैं, जिससे पैसे वापस नहीं मिल पाते।",

    "comp.sol.title": "समाधान: सामुदायिक सुरक्षा मॉडल",
    "comp.sol.1.t": "कदम उठाने से पहले पुष्टि ('जीरो ट्रस्ट')",
    "comp.sol.1.d": "अपरिचित कॉल तुरंत काटें और बैंक कार्ड के पीछे दिए गए आधिकारिक नंबर पर खुद कॉल करके जांच करें।",
    "comp.sol.2.t": "डेटा गोपनीयता नियम (DPDP कानून)",
    "comp.sol.2.d": "ग्राहकों के फोन नंबर सुरक्षित रखें, 2-स्टेप वेरिफिकेशन अनिवार्य करें और पुराने डेटा को सुरक्षित रूप से मिटाएं।",
    "comp.sol.3.t": "सशक्त और त्वरित रिपोर्टिंग",
    "comp.sol.3.d": "जागरूकता से समय बचता है। तुरंत 1930 पर कॉल करने से अपराधी का बैंक खाता पूरे देश में फ्रीज हो जाता है।",

    "cta.cases.title": "क्या आप देश भर के असली मामलों को देखना चाहते हैं?",
    "cta.cases.desc": "केवाईसी धोखाधड़ी, यूपीआई जाल और डिजिटल अरेस्ट के वीडियो विश्लेषण देखें।",
    "cta.cases.btn": "वास्तविक केस व वीडियो देखें",

    // Workshop
    "ws.tag": "सामुदायिक लक्ष्य",
    "ws.title": "सामुदायिक सहभागिता में हमारा संकल्प",
    "ws.desc": "हमारे कम्युनिटी एंगेजमेंट प्रोजेक्ट (CEP) के तहत हम तकनीक और आम नागरिकों—विशेषकर वरिष्ठ नागरिकों, छात्रों और स्थानीय दुकानदारों—के बीच सुरक्षा की दूरी मिटा रहे हैं।",
    "ws.i1": "सहपाठी कार्यशालाएं और स्कैम पहचानने का अभ्यास कराना।",
    "ws.i2": "व्यापारियों को ग्राहक डेटा सुरक्षा और नए कानूनों की जानकारी देना।",
    "ws.i3": "राष्ट्रीय साइबर हेल्पलाइन 1930 को घर-घर तक पहुंचाना।",

    // Page 2: Cases & Media
    "media.hero.tag": "राष्ट्रीय मीडिया व ज़मीनी हकीकत",
    "media.hero.title": "अख़बारों के चर्चित स्कैम: वास्तविक केस व वीडियो प्रमाण",
    "media.hero.lead": "साइबर धोखाधड़ी कोई काल्पनिक बात नहीं है। देश के प्रमुख साइबर विशेषज्ञों और नियामकों के वीडियो देखें और समझें कि आम नागरिक और व्यापारी कैसे शिकार बनते हैं।",
    
    "media.vid.tag": "जागरूकता वीडियो केंद्र",
    "media.vid.title": "साइबर विशेषज्ञों और नियामकों द्वारा जारी जागरूकता वीडियो",
    "media.vid.desc": "ये वीडियो दर्शाते हैं कि सोशल इंजीनियरिंग से कैसे दिमाग पर असर डाला जाता है और भारतीय कानून हमें क्या सलाह देते हैं।",
    
    "vid1.badge": "धोखे का मनोविज्ञान",
    "vid1.title": "हैकर्स इंसानों को कैसे हैक करते हैं: सोशल इंजीनियरिंग",
    "vid1.desc": "यह वीडियो समझाता है कि अपराधी सुरक्षा सॉफ्टवेयर तोड़ने के बजाय लोगों के डर, लालच और भरोसे का फायदा कैसे उठाते हैं।",
    "vid1.tag": "मूलभूत खतरा",

    "vid2.badge": "ईमेल व मैसेज सुरक्षा",
    "vid2.title": "फ़िशिंग लिंक और नकली वेबसाइटों की पहचान कैसे करें",
    "vid2.desc": "नकली सेंडर ईमेल, गलत स्पेलिंग वाली वेबसाइटें और पासवर्ड चुराने वाले फर्जी पेजों की लाइव पहचान।",
    "vid2.tag": "डिजिटल जाल",

    "vid3.badge": "बैंकिंग सुरक्षा",
    "vid3.title": "सुरक्षित बैंकिंग आदतें और 1930 हेल्पलाइन का उपयोग",
    "vid3.desc": "आरबीआई और पुलिस की सलाह: यूपीआई पिन के नियम, डेबिट कार्ड सुरक्षा और वित्तीय धोखाधड़ी में शुरुआती घंटे का महत्व।",
    "vid3.tag": "वित्तीय सुरक्षा",

    "cases.tag": "फील्ड केस स्टडी",
    "cases.title": "4 वास्तविक केस स्टडीज का गहन विश्लेषण",
    "cases.desc": "भारतीय शहरों में घटित वास्तविक घटनाएं और सोशल इंजीनियरिंग के जरिए हुआ नुकसान।",

    "case1.badge": "अत्यधिक गंभीर घोटाला",
    "case1.title": "केस 1: 'डिजिटल अरेस्ट' और फर्जी कस्टम्स का खौफ",
    "case1.desc": "एक सेवानिवृत्त शिक्षक को फोन आया कि उनके नाम से विदेश भेजे गए पार्सल में गैरकानूनी सामान मिला है। स्काइप पर फर्जी पुलिस स्टेशन का बैकग्राउंड बनाकर वर्दीधारी नकली अधिकारियों ने 36 घंटे वीडियो कॉल पर रखा और 'जांच एस्क्रो' के नाम पर ₹42 लाख ट्रांसफर करवा लिए।",
    "case1.hook": "सोशल इंजीनियरिंग का तरीका: गिरफ्तारी का भारी खौफ, वर्दी का रौब और किसी से बात न करने का सख्त दबाव।",
    "case1.def": "सुरक्षा उपाय: याद रखें: भारत में कोई भी पुलिस या अदालत 'डिजिटल अरेस्ट' नहीं करती। कॉल काटें और 1930 मिलाएं।",

    "case2.badge": "सामूहिक स्मिशिंग हमला",
    "case2.title": "केस 2: 'रात 9:30 बजे बिजली कटने' वाला फर्जी SMS",
    "case2.desc": "हजारों नागरिकों को साधारण 10-अंकों के मोबाइल नंबर से SMS मिला: 'बिल जमा न होने से आज रात 9:30 बजे आपकी बिजली काट दी जाएगी।' घबराए लोगों ने दिए गए नंबर पर कॉल किया। ठगों ने ₹10 के भुगतान के बहाने QuickSupport ऐप डाउनलोड कराया और बैंक का ओटीपी पढ़कर खाते से पैसे साफ कर दिए।",
    "case2.hook": "सोशल इंजीनियरिंग का तरीका: तुरंत बिजली कटने की घबराहट और मात्र ₹10 का मामूली झांसा।",
    "case2.def": "सुरक्षा उपाय: बिजली विभाग कभी भी निजी मोबाइल नंबर या व्हाट्सएप से लाइन काटने का नोटिस नहीं भेजता।",

    "case3.badge": "मार्केटप्लेस यूपीआई जाल",
    "case3.title": "केस 3: 'पैसे पाने के लिए QR कोड स्कैन करें' का झांसा",
    "case3.desc": "एक छात्र ने ₹3,000 में टेबल बेचने का विज्ञापन डाला। खरीदार ने खुद को सेना का जवान बताकर तुरंत सौदा तय किया और व्हाट्सएप पर QR कोड भेजकर कहा: 'पैसे खाते में पाने के लिए इस QR कोड को स्कैन करके पिन डालें।' छात्र ने पिन डाला और उसके खाते से ₹15,000 कट गए।",
    "case3.hook": "सोशल इंजीनियरिंग का तरीका: सेना के प्रति सम्मान का दुरुपयोग और यूपीआई पिन के काम करने के तरीके की गलतफहमी।",
    "case3.def": "सुरक्षा उपाय: पक्का नियम: यूपीआई पिन डालने से हमेशा पैसे कटते हैं, पैसे प्राप्त करने के लिए पिन की कभी जरूरत नहीं होती।",

    "case4.badge": "डेटा लीक का परिणाम",
    "case4.title": "केस 4: पैथोलॉजी लैब से मरीजों के रिकॉर्ड की चोरी",
    "case4.desc": "एक डायग्नोस्टिक सेंटर ने मरीजों के नाम, फोन नंबर और मेडिकल रिपोर्ट बिना पासवर्ड वाले गूगल ड्राइव फोल्डर में रखे थे। ठगों ने 12,000 रिकॉर्ड चुरा लिए और मरीजों को डॉक्टर बनकर कॉल किया। पुरानी रिपोर्ट की सही तारीख बताकर आवश्यक दवाइयों के नाम पर तत्काल एडवांस पैसे जमा करवा लिए।",
    "case4.hook": "सोशल इंजीनियरिंग का तरीका: मरीज की असली मेडिकल जानकारी बोलकर अटूट विश्वास जीत लेना।",
    "case4.def": "सुरक्षा उपाय: व्यवसायों को ग्राहक डेटा सुरक्षित रखना चाहिए और भारत के DPDP कानून का कड़ाई से पालन करना चाहिए।",

    "cases.cta.title": "अब जब आप खतरों को जान चुके हैं, जानिए इनसे कैसे बचें।",
    "cases.cta.desc": "व्यक्तिगत सुरक्षा नियम, ग्राहक डेटा सुरक्षा चेकलिस्ट और हमारा इंटरएक्टिव फ़िशिंग सिम्युलेटर आज़माएं।",
    "cases.cta.btn": "समाधान और इंटरएक्टिव सिम्युलेटर पर जाएं",

    // Page 3: Solutions
    "sol.hero.tag": "व्यावहारिक सामुदायिक सुरक्षा",
    "sol.hero.title": "कमजोरी से आत्मनिर्भरता: संपूर्ण सुरक्षा समाधान",
    "sol.hero.lead": "केवल तकनीक हमें दिमागी चालाकियों से नहीं बचा सकती। यहां नागरिकों, व्यवसायों और पीड़ितों के लिए व्यावहारिक 3-स्तरीय समाधान गाइड दी गई है।",
    "sol.btn.sim": "फ़िशिंग सिम्युलेटर शुरू करें",
    "sol.btn.dpdp": "ग्राहक डेटा सुरक्षा",
    "sol.btn.plan": "आपातकालीन कार्ययोजना",

    "sim.tag": "इंटरएक्टिव अभ्यास",
    "sim.title": "स्पॉट द फिश: लाइव स्कैम पहचान चुनौती",
    "sim.desc": "भारतीय परिवेश के वास्तविक स्कैम पर आधारित मैसेजों की जांच करें। हेडर, लिंक और भाषा देखकर तय करें कि मैसेज असली है या खतरनाक स्कैम।",

    "slcd.tag": "व्यक्तिगत सुरक्षा",
    "slcd.title": "'SLCD' पर्सनल डिफेंस प्रोटोकॉल",
    "slcd.desc": "जब भी कोई संदेश या कॉल तुरंत निर्णय लेने का दबाव बनाए, यह 4-कदमों का नियम अपनाएं:",
    
    "slcd.s1.t": "1. S - Stop (रुकें)",
    "slcd.s1.d": "जब भी कोई मैसेज भयंकर जल्दबाजी दिखाए ('2 घंटे में खाता बंद', 'वारंट जारी', 'बिजली कटेगी'), जानबूझकर 2 मिनट रुकें। जल्दबाजी आपकी तार्किक सोच को दबाने के लिए बनाई जाती है।",
    "slcd.s1.b": "गहरी सांस लें; कोई भी असली संस्था 5 मिनट की डेडलाइन नहीं देती।",

    "slcd.s2.t": "2. L - Look (जांचें)",
    "slcd.s2.d": "भेजने वाले का पता गौर से देखें। ईमेल डोमेन चेक करें (क्या यह @sbi.co.in है या कोई अजीब डोमेन?)। मैसेज में देखें कि सेंडर कोड 6 अक्षरों का आधिकारिक कोड है या 10 अंकों का अनजान नंबर।",
    "slcd.s2.b": "वेबसाइट लिंक में स्पेलिंग की गलतियों और bit.ly जैसे छोटे लिंक की जांच करें।",

    "slcd.s3.t": "3. C - Call & Check (पुष्टि करें)",
    "slcd.s3.d": "संदेहास्पद मैसेज में दिए गए नंबर पर कभी कॉल न करें। अपने डेबिट कार्ड के पीछे लिखे टोल-फ्री नंबर या आधिकारिक वेबसाइट से नंबर लेकर खुद फोन करें।",
    "slcd.s3.b": "स्वतंत्र जांच से 99% सोशल इंजीनियरिंग हमले वहीं नाकाम हो जाते हैं।",

    "slcd.s4.t": "4. D - Decide & Defend (निर्णय व बचाव)",
    "slcd.s4.d": "जरा भी शक हो तो नंबर ब्लॉक करें, मैसेज को स्पैम रिपोर्ट करें, और कभी ओटीपी या पासवर्ड न दें। अगर ठगी हो जाए तो तुरंत 1930 पर संपर्क करें।",
    "slcd.s4.b": "याद रखें: यूपीआई पिन दर्ज करने से केवल पैसे कटते हैं, पैसे मिलते नहीं।",

    "dpdp.tag": "व्यापार व संस्थान सुरक्षा",
    "dpdp.title": "ग्राहक डेटा सुरक्षा: नियम व DPDP कानून 2023",
    "dpdp.desc": "स्थानीय दुकानें, कोचिंग सेंटर, क्लीनिक और स्टार्टअप अक्सर संवेदनशील ग्राहक डेटा संभालते हैं। इस डेटा की सुरक्षा एक नैतिक जिम्मेदारी और कानूनी अनिवार्यता दोनों है।",

    "dpdp.p1.t": "न्यूनतम डेटा संग्रह (Data Minimization)",
    "dpdp.p1.d": "केवल वही ग्राहक जानकारी मांगें जो सेवा देने के लिए बेहद जरूरी हो। सामान्य बिलिंग के लिए आधार या पैन की फोटोकॉपी कभी न मांगें।",
    "dpdp.p1.i1": "अनावश्यक KYC बंद करें: सामान्य खरीदारी पर पहचान पत्र न मांगें।",
    "dpdp.p1.i2": "उद्देश्य की सीमा: फोन नंबर केवल बिलिंग के लिए रखें, प्रमोशन के लिए नहीं।",
    "dpdp.p1.i3": "समय पर मिटाना: सेवा समाप्त होने के बाद अप्रयुक्त ग्राहक डेटा नष्ट करें।",

    "dpdp.p2.t": "सुरक्षित स्टोरेज व एक्सेस कंट्रोल",
    "dpdp.p2.d": "ग्राहकों के फोन नंबर और जानकारी को खुली एक्सेल शीट से हटाकर पासवर्ड और एन्क्रिप्शन वाले सुरक्षित सॉफ्टवेयर में रखें।",
    "dpdp.p2.i1": "बिना पासवर्ड एक्सेल शीट नहीं: ग्राहक डेटा पब्लिक क्लाउड ड्राइव पर न छोड़ें।",
    "dpdp.p2.i2": "सीमित पहुंच: केवल अधिकृत कर्मचारियों को ही ग्राहक रिकॉर्ड देखने की अनुमति दें।",
    "dpdp.p2.i3": "अनिवार्य 2FA: सभी बिजनेस सॉफ्टवेयर और ईमेल पर टू-स्टेप वेरिफिकेशन लगाएं।",

    "dpdp.p3.t": "कानूनी अनुपालन व ब्रीच प्लान",
    "dpdp.p3.d": "भारत के DPDP कानून के तहत ग्राहकों की स्पष्ट सहमति लें और डेटा लीक होने की स्थिति में तत्काल कार्रवाई की योजना तैयार रखें।",
    "dpdp.p3.i1": "स्पष्ट सहमति: ग्राहक को बताएं कि उनका डेटा किस काम के लिए लिया जा रहा है।",
    "dpdp.p3.i2": "लीक की सूचना: यदि डेटा लीक हो, तो तुरंत डेटा प्रोटेक्शन बोर्ड और ग्राहक को सूचित करें।",
    "dpdp.p3.i3": "कर्मचारियों का प्रशिक्षण: स्टाफ को फोन पर पासवर्ड या डेटा शेयर न करने की ट्रेनिंग दें।",

    // Calculator
    "calc.tag": "आत्म-परीक्षण",
    "calc.title": "डिजिटल जोखिम (Vulnerability) कैलकुलेटर",
    "calc.desc": "4 सरल प्रश्नों के उत्तर देकर जानें कि आप पर साइबर हमले का कितना खतरा है।",
    "calc.q1": "1. क्या आप कई वेबसाइटों पर एक ही पासवर्ड या उससे मिलता-जुलता पासवर्ड इस्तेमाल करते हैं?",
    "calc.q1.y": "हाँ, मैं ऐसा करता/करती हूँ",
    "calc.q1.n": "नहीं, मैं हर जगह अलग पासवर्ड रखता/रखती हूँ",
    "calc.q2": "2. क्या आपके प्राथमिक ईमेल और यूपीआई/बैंक ऐप्स पर टू-फैक्टर ऑथेंटिकेशन (2FA/OTP) चालू है?",
    "calc.q2.y": "हाँ, सभी ऐप्स पर",
    "calc.q2.n": "नहीं, या केवल कुछ ऐप्स पर",
    "calc.q3": "3. क्या आपने कभी जल्दीबाजी में बिना पूरा लिंक देखे किसी SMS या व्हाट्सएप लिंक पर क्लिक किया है?",
    "calc.q3.y": "हाँ, कभी-कभी जल्दबाजी में",
    "calc.q3.n": "कभी नहीं, मैं हमेशा जांचता/जांचती हूँ",
    "calc.q4": "4. क्या किसी फोन कॉल पर आपसे कभी ओटीपी मांगा गया या AnyDesk/QuickSupport डाउनलोड करने को कहा गया?",
    "calc.q4.y": "हाँ, और मैंने शेयर किया या सोचा था",
    "calc.q4.n": "नहीं, या मैंने तुरंत फोन काट दिया",
    "calc.btn": "मेरा जोखिम स्कोर निकालें",

    // Protocol
    "step.tag": "आपातकालीन प्रोटोकॉल",
    "step.title": "यदि आप या आपका कोई साथी ठगा जाए, तो तुरंत क्या करें?",
    "step.desc": "पैसे वापस पाने में समय सबसे महत्वपूर्ण हथियार है। इन 4 चरणों का तुरंत पालन करें:",
    "step1.t": "चरण 1: 1930 पर तत्काल कॉल",
    "step1.d": "तुरंत 1930 मिलाएं। गृह मंत्रालय का सिस्टम सभी बैंकों के बीच रीयल-टाइम संपर्क करके अपराधी के खाते में पहुंचे पैसे को फ्रीज करा देता है।",
    "step1.b": "अभी 1930 पर कॉल करें",
    "step2.t": "चरण 2: बैंक खाते को ब्लॉक करें",
    "step2.d": "अपने मोबाइल बैंकिंग ऐप से नेटबैंकिंग, यूपीआई और एटीएम कार्ड तुरंत ब्लॉक करें ताकि आगे कोई निकासी न हो सके।",
    "step3.t": "चरण 3: ऑनलाइन FIR दर्ज करें",
    "step3.d": "cybercrime.gov.in पर औपचारिक शिकायत दर्ज करें। ट्रांजैक्शन आईडी, चैट स्क्रीनशॉट और कॉल नंबर संलग्न करें।",
    "step3.b": "पोर्टल खोलें",
    "step4.t": "चरण 4: मोबाइल की सफाई",
    "step4.d": "यदि कोई रिमोट ऐप (AnyDesk, TeamViewer) या अनजान APK डाउनलोड कराया गया था, तो उसे तुरंत अनइंस्टॉल करें और फोन रीसेट करें।",

    "hotline.title": "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल",
    "hotline.desc": "भारतीय साइबर अपराध समन्वय केंद्र (I4C), गृह मंत्रालय, भारत सरकार द्वारा संचालित। अंतर-बैंक समन्वय और तत्काल वित्तीय सहायता के लिए समर्पित।",
    "hotline.lbl": "टोल-फ्री हेल्पलाइन",
    "hotline.sub": "पूरे भारत में 24x7 उपलब्ध",

    // Footer
    "footer.desc": "डिजिटल साक्षरता, सोशल इंजीनियरिंग से बचाव और ग्राहक डेटा सुरक्षा को बढ़ावा देने वाला छात्र-नेतृत्व वाला सामुदायिक सहभागिता प्रोजेक्ट।",
    "footer.badge.t": "कम्युनिटी एंगेजमेंट प्रोजेक्ट (CEP)",
    "footer.badge.d": "मुख्य विषय: साइबर जागरूकता, फ़िशिंग बचाव एवं DPDP डेटा गोपनीयता",
    "footer.nav": "नेविगेशन",
    "footer.topics": "मुख्य विषय",
    "footer.help": "आधिकारिक हेल्पलाइन",
    "footer.help.desc": "भारत में साइबर वित्तीय अपराध की तत्काल सहायता के लिए:",
    "footer.copy": "© 2026 CyberGuard CEP. सामुदायिक डिजिटल जागरूकता हेतु शैक्षणिक गैर-व्यावसायिक परियोजना।"
  },

  mr: {
    // Top Bar & Navigation
    "alert.title": "सायबर फसवणूक आणीबाणी:",
    "alert.desc": "ऑनलाइन घोटाळ्यात तुमचे पैसे गेले असल्यास, 'गोल्डन अवर' (पहिल्या तासात) तातडीने तक्रार नोंदवा.",
    "alert.helpline": "राष्ट्रीय सायबर गुन्हे हेल्पलाइन:",
    "alert.dial": "1930 वर कॉल करा",
    "alert.incident": "महत्त्वाची सूचना: पोलीस किंवा सीबीआय कधीही स्काईप किंवा व्हॉट्सॲपवर व्हिडिओ कॉल करून कोर्ट सुनावणी किंवा अटक करत नाहीत.",
    "alert.action": "तातडीची कृती: बँक खात्यातून चोरीला गेलेली रक्कम फ्रीझ करण्यासाठी सुरुवातीचा वेळ अत्यंत महत्त्वाचा आहे.",
    "nav.problem": "समस्या आणि धोके",
    "nav.cases": "प्रत्यक्ष घटना व व्हिडिओ",
    "nav.solutions": "उपाय व सिम्युलेटर",
    "nav.test": "तुमची सुरक्षा तपासा",
    "brand.badge": "सामुदायिक उपक्रम (CEP)",

    // Toast
    "toast.title": "आपली भाषा निवडा / Choose Your Language / अपनी भाषा चुनें",
    "toast.desc": "सायबरगार्ड कम्युनिटी प्रोजेक्टमध्ये आपले स्वागत आहे. कृपया आपली पसंतीची भाषा निवडा:",
    "toast.dismiss": "पुढे जा",

    // Index Page - Hero
    "hero.tag": "कम्युनिटी एंगेजमेंट प्रोजेक्ट (CEP)",
    "hero.title": "ह्युमन फायरवॉल: फिशिंग, सोशल इंजिनिअरिंग आणि डेटा चोरीविरुद्ध लढा",
    "hero.lead": "सायबर गुन्हेगार आता फक्त संगणक हॅक करत नाहीत, तर ते माणसाच्या मानसिकतेशी खेळतात. बनावट मेसेज, खोट्या धमक्या आणि ग्राहकांचा चोरीला गेलेला डेटा आपल्या कुटुंबाला, विद्यार्थ्यांना व स्थानिक व्यावसायिकांना कसा धोक्यात आणतो—आणि आपण सुरक्षित कसे राहावे ते समजून घ्या.",
    "hero.btn.problem": "समस्या समजून घ्या",
    "hero.btn.videos": "घोटाळ्यांचे व्हिडिओ",
    "hero.btn.solutions": "उपाययोजना पहा",
    "hero.badge.title": "82% सायबर हल्ले मानवी चुकीमुळे",
    "hero.badge.desc": "फिशिंग आणि भीतीची क्लृप्ती माणसाला विचार करायला वेळच न देता फसवणूक करते.",

    // Metrics
    "metric1.num": "3.4 अब्ज",
    "metric1.label": "दररोज जगभरात पाठवले जाणारे फिशिंग ईमेल्स",
    "metric2.num": "₹1,750+ कोटी",
    "metric2.label": "2024 मध्ये भारतात नोंदवलेली डिजिटल आर्थिक फसवणूक",
    "metric3.num": "91%",
    "metric3.label": "सायबर हल्ल्यांची सुरुवात बनावट फिशिंग लिंकने होते",
    "metric4.num": "10 मिनिटे",
    "metric4.label": "चोरी झालेली UPI / बँक रक्कम गोठवण्याचा सुवर्ण काळ",

    // Problem Cards
    "prob.tag": "धोक्यांचे स्वरूप",
    "prob.title": "सायबर गुन्हेगार विश्वासाचा गैरफायदा कसा घेतात?",
    "prob.desc": "आधुनिक सायबर हल्ले आपल्या भीती, अधिकार पदावरील व्यक्तींबद्दलचा आदर किंवा घाईगडबडीत घेतलेल्या निर्णयांचा फायदा घेतात. आपल्या समुदायापुढील तीन मुख्य धोके पुढीलप्रमाणे आहेत:",
    
    "card1.title": "1. फिशिंग आणि स्मिशिंग (Phishing & Smishing)",
    "card1.desc": "बँक किंवा वीज विभागाच्या नावावर बनावट SMS किंवा ईमेल पाठवून पासवर्ड आणि ओटीपी चोरणे.",
    "card1.item1": "स्मिशिंग: 'आज रात्री 9:30 वाजता वीज खंडित होईल' असा खोटा मेसेज.",
    "card1.item2": "क्लोन फिशिंग: हुबेहूब बँकेसारखी दिसणारी खोटी संकेतस्थळे.",
    "card1.item3": "QR कोडचा सापळा: 'पैसे मिळवण्यासाठी' QR कोड स्कॅन करायला लावणे.",

    "card2.title": "2. सोशल इंजिनिअरिंग (Social Engineering)",
    "card2.desc": "माणसाशी गोड बोलून किंवा भीती दाखवून त्याच्याकडून गोपनीय माहिती, पासवर्ड काढून घेणे किंवा स्वतः पैसे पाठवायला लावणे.",
    "card2.item1": "'डिजिटल अरेस्ट' घोटाळा: पोलीस किंवा सीबीआय अधिकारी बनून व्हिडिओ कॉलवर धमकावणे.",
    "card2.item2": "खोटे बहाणे (Pretexting): नातेवाईक रुग्णालयात असल्याचे सांगून पैसे उकळणे.",
    "card2.item3": "अधिकार पदाचा धाक: कस्टम किंवा गुप्तहेर खात्याच्या नावाखाली पैसे उकळणे.",

    "card3.title": "3. ग्राहक डेटा चोरी (Customer Data Compromise)",
    "card3.desc": "जेव्हा दुकाने, क्लासेस किंवा संस्था ग्राहकांचे फोन नंबर आणि कागदपत्रे असुरक्षित ठेवतात, तेव्हा हा डेटा डार्क वेबवर गुन्हेगारांच्या हाती पडतो.",
    "card3.item1": "अचूक टार्गेटिंग: ग्राहकाचा खरा डेटा बोलून त्याचा पूर्ण विश्वास जिंकणे.",
    "card3.item2": "सिम स्वॅपिंग: कागदपत्रांचा वापर करून दुसऱ्याच्या नावाचे सिम कार्ड मिळवणे.",
    "card3.item3": "कायदेशीर दंड: भारताच्या DPDP कायदा 2023 अंतर्गत होणारा मोठा दंड.",

    // Attack Loop
    "loop.tag": "हल्ल्याचे चक्र",
    "loop.title": "सोशल इंजिनिअरिंग हल्ल्याचे 4 टप्पे",
    "loop.desc": "गुन्हेगार एका ठराविक पद्धतीने माणसाच्या संशयाची भावना नष्ट करतात.",
    "loop.s1.title": "01 माहिती गोळा करणे",
    "loop.s1.desc": "सोशल मीडिया, सार्वजनिक नोंदी किंवा लीक झालेल्या डेटामधून नाव, बँक, कुटुंब आणि नोकरीची माहिती काढणे.",
    "loop.s2.title": "02 बनावट कारण तयार करणे",
    "loop.s2.desc": "'खाते बंद झाले आहे', 'कर परतावा आला आहे' किंवा 'वीज कापली जाईल' अशी घाबरवणारी कथा रचणे.",
    "loop.s3.title": "03 प्रचंड मानसिक दबाव",
    "loop.s3.desc": "विचार करायला किंवा नातेवाईकांशी बोलायला वेळ न देता लगेच निर्णय घेण्यास भाग पाडणे.",
    "loop.s4.title": "04 पैसे किंवा डेटा काढणे",
    "loop.s4.desc": "ओटीपी मागणे, AnyDesk/TeamViewer द्वारे स्क्रीन शेअरिंग करून घेणे किंवा स्वतः UPI वरून पैसे पाठवायला लावणे.",

    // Comparison
    "comp.prob.title": "समस्या: नेहमीची सुरक्षा का अपुरी पडते?",
    "comp.prob.1.t": "अँटीव्हायरस माणसाच्या खोट्या बोलण्याला रोखू शकत नाही",
    "comp.prob.1.d": "समोरचा खरा पोलीस किंवा बँक मॅनेजर आहे असे वाटल्यास माणूस स्वतःहून सर्व पासवर्ड सांगून टाकतो.",
    "comp.prob.2.t": "ग्राहकांचा डेटा एक्सेल शीटमध्ये उघडा ठेवणे",
    "comp.prob.2.d": "लहान व्यापारी आणि संस्था ग्राहकांचे फोन नंबर आणि आधार सामान्य संगणकात सुरक्षिततेशिवाय ठेवतात.",
    "comp.prob.3.t": "फसवणुकीनंतरची लाज आणि तक्रारीत उशीर",
    "comp.prob.3.d": "फसलो ही गोष्ट कबूल करायला लाज वाटल्यामुळे लोक वेळेवर तक्रार करत नाहीत आणि पैसे बुडतात.",

    "comp.sol.title": "उपाय: सामुदायिक सुरक्षा पद्धत",
    "comp.sol.1.t": "कृती करण्यापूर्वी पडताळणी ('झिरो ट्रस्ट')",
    "comp.sol.1.d": "अनोळखी कॉल लगेच कट करा आणि बँकेच्या कार्डावरील अधिकृत नंबरवर स्वतः कॉल करून खात्री करा.",
    "comp.sol.2.t": "ग्राहक डेटा गोपनीयता (DPDP कायदा)",
    "comp.sol.2.d": "ग्राहकांचे नंबर सुरक्षित ठेवा, 2-स्टेप व्हेरिफिकेशन अनिवार्य करा आणि नको असलेला डेटा नष्ट करा.",
    "comp.sol.3.t": "सजग आणि जलद तक्रार",
    "comp.sol.3.d": "जागरूकतेमुळे वेळ वाचतो. लगेच 1930 वर कॉल केल्यास गुन्हेगाराचे बँक खाते संपूर्ण देशात गोठवले जाते.",

    "cta.cases.title": "देशभरातील सत्य घटना आणि व्हिडिओ पाहण्यास तयार आहात?",
    "cta.cases.desc": "केवायसी घोटाळे, यूपीआय ट्रॅप आणि डिजिटल अरेस्टचे व्हिडिओ विश्लेषण पहा.",
    "cta.cases.btn": "प्रत्यक्ष घटना व व्हिडिओ पहा",

    // Workshop
    "ws.tag": "सामुदायिक उद्दिष्टे",
    "ws.title": "सामुदायिक सहभागातील आमचा संकल्प",
    "ws.desc": "आमच्या कम्युनिटी एंगेजमेंट प्रोजेक्ट (CEP) अंतर्गत आम्ही आधुनिक सायबर गुन्हे आणि सर्वसामान्य नागरिक—विशेषतः ज्येष्ठ नागरिक, विद्यार्थी आणि छोटे व्यावसायिक यांच्यातील सुरक्षिततेची दरी मिटवत आहोत.",
    "ws.i1": "विद्यार्थ्यांच्या कार्यशाळा आणि घोटाळे ओळखण्याचा सराव घेणे.",
    "ws.i2": "स्थानिक दुकानदारांना ग्राहक डेटा सुरक्षा नियमांचे मार्गदर्शन करणे.",
    "ws.i3": "राष्ट्रीय 1930 सायबर हेल्पलाइनची माहिती घराघरांत पोहोचवणे.",

    // Page 2: Cases & Media
    "media.hero.tag": "राष्ट्रीय वास्तव व जनजागृती",
    "media.hero.title": "चर्चेतील सायबर गुन्हे: प्रत्यक्ष घटना व व्हिडिओ पुरावे",
    "media.hero.lead": "सायबर फसवणूक ही केवळ पुस्तकी गोष्ट नाही. सायबर तज्ज्ञ आणि पोलिसांचे व्हिडिओ पहा आणि सर्वसामान्य नागरिक कसे फसवले जातात ते समजून घ्या.",
    
    "media.vid.tag": "व्हिडिओ दालन",
    "media.vid.title": "सायबर तज्ज्ञ व नियामकांचे जनजागृती व्हिडिओ",
    "media.vid.desc": "सोशल इंजिनिअरिंगद्वारे माणसाच्या मनावर कसा ताबा मिळवला जातो हे दाखवणारे महत्त्वपूर्ण व्हिडिओ.",
    
    "vid1.badge": "फसवणुकीचे मानसशास्त्र",
    "vid1.title": "हॅकर्स माणसांना कसे हॅक करतात: सोशल इंजिनिअरिंग",
    "vid1.desc": "सायबर गुन्हेगार सॉफ्टवेअर तोडण्याऐवजी माणसाची भीती, आदर आणि लालसा यांचा गैरवापर कसा करतात याचे स्पष्टीकरण.",
    "vid1.tag": "पायाभूत धोका",

    "vid2.badge": "मेसेज व ईमेल सुरक्षा",
    "vid2.title": "बनावट फिशिंग लिंक्स आणि खोट्या वेबसाइट्स कशा ओळखाव्या?",
    "vid2.desc": "बनावट ईमेल ॲड्रेस, स्पेलिंगमधील लबाडी आणि पासवर्ड चोरणाऱ्या खोट्या पेजेसचे प्रात्यक्षिक.",
    "vid2.tag": "डिजिटल सापळा",

    "vid3.badge": "बँकिंग सुरक्षा",
    "vid3.title": "सुरक्षित बँकिंग आणि 1930 हेल्पलाइनची मदत",
    "vid3.desc": "आरबीआय आणि पोलिसांचा सल्ला: यूपीआय पिनचे नियम, कार्ड सुरक्षा आणि 'गोल्डन अवर' तक्रारीचे महत्त्व.",
    "vid3.tag": "आर्थिक सुरक्षा",

    "cases.tag": "प्रत्यक्ष केस स्टडीज",
    "cases.title": "4 प्रत्यक्ष घटनांचे सविस्तर विश्लेषण",
    "cases.desc": "भारतीय शहरांमध्ये घडलेले खरे सायबर गुन्हे आणि सोशल इंजिनिअरिंगचा वापर.",

    "case1.badge": "अत्यंत गंभीर फसवणूक",
    "case1.title": "केस 1: 'डिजिटल अरेस्ट' आणि बनावट कस्टम्सची धमकी",
    "case1.desc": "एका निवृत्त शिक्षकाला फोन आला की त्यांच्या नावाने पाठवलेल्या पार्सलमध्ये बेकायदेशीर वस्तू सापडल्या आहेत. स्काईपवर बनावट पोलीस ठाण्याचा देखावा उभा करून तोतया अधिकाऱ्यांनी 36 तास व्हिडिओ कॉलवर ठेवले आणि सुप्रीम कोर्टाच्या पडताळणी खात्याच्या नावाखाली ₹42 लाख ट्रान्सफर करून घेतले.",
    "case1.hook": "सोशल इंजिनिअरिंगची क्लृप्ती: अटकेची प्रचंड भीती, वर्दीचा धाक आणि कोणाशीही बोलू न देण्याचा कडक नियम.",
    "case1.def": "बचावाचा उपाय: लक्षात ठेवा: भारतात कोणतीही यंत्रणा व्हिडिओ कॉलवर 'डिजिटल अरेस्ट' करत नाही. कॉल तोडा आणि 1930 वर संपर्क करा.",

    "case2.badge": "मोठा स्मिशिंग हल्ला",
    "case2.title": "केस 2: 'रात्री 9:30 वाजता वीज खंडित' होण्याचा बनावट मेसेज",
    "case2.desc": "हजारो नागरिकांना 10-अंकी मोबाईल नंबरवरून मेसेज आला: 'मागील महिन्याचे बिल न भरल्याने आज रात्री 9:30 वाजता वीज कापली जाईल.' घाबरलेल्या नागरिकांनी त्या नंबरवर फोन केला. गुन्हेगारांनी ₹10 भरण्याच्या बहाण्याने QuickSupport ॲप डाउनलोड करायला लावले आणि ओटीपी वाचून बँक खात्यातील रक्कम पळवली.",
    "case2.hook": "सोशल इंजिनिअरिंगची क्लृप्ती: वीज जाण्याची भीती आणि केवळ ₹10 भरण्याचा खोटा बहाणा.",
    "case2.def": "बचावाचा उपाय: महावितरण किंवा वीज कंपन्या वैयक्तिक मोबाईल किंवा व्हॉट्सॲपवरून वीज कापण्याचा मेसेज कधीही पाठवत नाहीत.",

    "case3.badge": "मार्केटप्लेस यूपीआय फसवणूक",
    "case3.title": "केस 3: 'पैसे मिळवण्यासाठी QR कोड स्कॅन करा' असा सापळा",
    "case3.desc": "एका विद्यार्थ्याने ₹3,000 मध्ये टेबल विकण्याची जाहिरात दिली. स्वतःला फौजी सांगणाऱ्या खरेदीदाराने कोणताही घासाघीस न करता व्हॉट्सॲपवर QR कोड पाठवून सांगितले: 'हे स्कॅन करून पिन टाका म्हणजे आगाऊ पैसे तुमच्या खात्यात जमा होतील.' विद्यार्थ्याने पिन टाकला आणि त्याच्या खात्यातून उलट ₹15,000 कापले गेले.",
    "case3.hook": "सोशल इंजिनिअरिंगची क्लृप्ती: सैनिकाबद्दलचा आदर आणि यूपीआय पिन कसा काम करतो याबद्दलचा गैरसमज.",
    "case3.def": "बचावाचा उपाय: पक्का नियम: यूपीआय पिन टाकल्याने नेहमी पैसे कट होतात; पैसे मिळवण्यासाठी पिनची कधीही गरज नसते.",

    "case4.badge": "डेटा लीकचा परिणाम",
    "case4.title": "केस 4: पॅथॉलॉजी लॅबमधून रुग्णांच्या नोंदींची चोरी",
    "case4.desc": "एका लॅबने रुग्णांचे नाव, फोन नंबर आणि तपासणी अहवाल सुरक्षेशिवाय गुगल ड्राईव्हवर ठेवले होते. हॅकर्सनी 12,000 नोंदी चोरल्या आणि रुग्णांना डॉक्टर बनून फोन केले. जुन्या टेस्टची खरी तारीख सांगून त्वरित महागड्या औषधांसाठी आगाऊ रक्कम खात्यावर भरण्यास सांगितले. माहिती खरी असल्याने रुग्ण फसले.",
    "case4.hook": "सोशल इंजिनिअरिंगची क्लृप्ती: रुग्णाचा खरा वैद्यकीय डेटा सांगून निर्विवाद विश्वास संपादन करणे.",
    "case4.def": "बचावाचा उपाय: संस्थांनी ग्राहकांचा डेटा एन्क्रिप्ट करून सुरक्षित ठेवलाच पाहिजे आणि DPDP कायद्याचे पालन केले पाहिजे.",

    "cases.cta.title": "धोके समजले, आता स्वतःचा आणि ग्राहकांचा बचाव कसा करावा ते पहा.",
    "cases.cta.desc": "सुरक्षा मार्गदर्शक, ग्राहक डेटा संरक्षण चेकलिस्ट आणि आमचे थेट फिशिंग सिम्युलेटर वापरा.",
    "cases.cta.btn": "उपाययोजना आणि थेट सिम्युलेटरकडे जा",

    // Page 3: Solutions
    "sol.hero.tag": "सामुदायिक डिजिटल संरक्षण",
    "sol.hero.title": "असुरक्षिततेकडून सक्षमीकरणाकडे: सुरक्षिततेची मार्गदर्शिका",
    "sol.hero.lead": "केवळ तंत्रज्ञान माणसाला मानसिक लबाडीपासून वाचवू शकत नाही. नागरिक, ग्राहक डेटा हाताळणारे व्यावसायिक आणि फसवणूक झालेल्या व्यक्तींसाठी ही त्रिसूत्री मार्गदर्शिका आहे.",
    "sol.btn.sim": "फिशिंग सिम्युलेटर सुरू करा",
    "sol.btn.dpdp": "ग्राहक डेटा संरक्षण",
    "sol.btn.plan": "तातडीची कृती योजना",

    "sim.tag": "थेट सराव",
    "sim.title": "स्पॉट द फिश: स्कॅम ओळखण्याचे थेट आव्हान",
    "sim.desc": "भारतीय वातावरणातील खऱ्या स्कॅमवर आधारित मेसेजेस तपासा. हेडर, लिंक आणि भाषा तपासून ठरवा की हा मेसेज खरा आहे की लबाडीचा सापळा.",

    "slcd.tag": "वैयक्तिक सुरक्षा",
    "slcd.title": "'SLCD' पर्सनल डिफेन्स प्रोटोकॉल",
    "slcd.desc": "कोणताही मेसेज तातडीचा निर्णय घेण्याचा दबाव आणत असेल, तेव्हा हे 4 नियम पाळा:",
    
    "slcd.s1.t": "1. S - Stop (थांबा)",
    "slcd.s1.d": "जेव्हा मेसेज अतिशय घाई दाखवतो ('2 तासात खाते बंद', 'अटक वॉरंट', 'वीज कापली जाईल'), तेव्हा जाणीवपूर्वक 2 मिनिटे थांबा. घाई माणसाची विचारशक्ती मंद करण्यासाठीच केली जाते.",
    "slcd.s1.b": "दीर्घ श्वास घ्या; कोणतीही खरी सरकारी किंवा बँक यंत्रणा 5 मिनिटांची डेडलाईन देत नाही.",

    "slcd.s2.t": "2. L - Look (तपासा)",
    "slcd.s2.d": "पाठवणाऱ्याचा पत्ता काळजीपूर्वक पहा. ईमेल डोमेन तपासा (@sbi.co.in आहे की भलतेच काही?). SMS मधील सेंडर कोड 6 अक्षरी अधिकृत कोड आहे की 10 अंकी अनोळखी नंबर ते पहा.",
    "slcd.s2.b": "संकेतस्थळाच्या लिंकमधील अक्षरांच्या चुका आणि bit.ly सारख्या शॉर्ट लिंक्स तपासा.",

    "slcd.s3.t": "3. C - Call & Check (खात्री करा)",
    "slcd.s3.d": "संशयास्पद मेसेजमधील नंबरवर कधीही कॉल करू नका. बँकेच्या एटीएम कार्डाच्या मागील टोल-फ्री नंबरवरून किंवा अधिकृत वेबसाइटवरून नंबर घेऊन स्वतः फोन करा.",
    "slcd.s3.b": "स्वतःहून केलेल्या स्वतंत्र खात्रीमुळे 99% सोशल इंजिनिअरिंग हल्ले तिथेच निकामी होतात.",

    "slcd.s4.t": "4. D - Decide & Defend (निर्णय व बचाव)",
    "slcd.s4.d": "किंचितही संशय आल्यास नंबर ब्लॉक करा, स्पॅम रिपोर्ट करा आणि ओटीपी किंवा पासवर्ड कधीही देऊ नका. पैसे गेले असल्यास लगेच 1930 वर संपर्क करा.",
    "slcd.s4.b": "लक्षात ठेवा: यूपीआई पिन टाकल्याने फक्त पैसे जातात, पैसे मिळत नाहीत.",

    "dpdp.tag": "व्यावसायिक व संस्था सुरक्षा",
    "dpdp.title": "ग्राहक डेटा संरक्षण: सर्वोत्तम पद्धती व DPDP कायदा 2023",
    "dpdp.desc": "स्थानिक दुकाने, कोचिंग क्लासेस, दवाखाने आणि स्टार्टअप्स ग्राहकांचा संवेदनशील डेटा हाताळतात. या डेटाचे रक्षण करणे ही नैतिक जबाबदारी आणि भारताच्या DPDP कायद्यानुसार बंधनकारक आहे.",

    "dpdp.p1.t": "कमीत कमी डेटा गोळा करणे (Data Minimization)",
    "dpdp.p1.d": "केवळ सेवेसाठी आवश्यक असलेलीच माहिती ग्राहकाकडून घ्या. साध्या खरेदीसाठी आधार किंवा पॅन कार्डची प्रत कधीही मागू नका.",
    "dpdp.p1.i1": "नको असलेले KYC टाळा: साध्या खरेदीसाठी ओळखपत्र मागू नका.",
    "dpdp.p1.i2": "वापराची मर्यादा: ग्राहकाचा फोन नंबर फक्त बिलासाठी वापरा, जाहिरातीसाठी नाही.",
    "dpdp.p1.i3": "वेळेवर नष्ट करणे: सेवा पूर्ण झाल्यानंतर अप्रयुक्त डेटा सुरक्षितपणे मिटवून टाका.",

    "dpdp.p2.t": "सुरक्षित साठवणूक व मर्यादित प्रवेश",
    "dpdp.p2.d": "ग्राहकांची माहिती साध्या असुरक्षित एक्सेल शीटमध्ये न ठेवता पासवर्ड आणि एन्क्रिप्शन असलेल्या सुरक्षित सॉफ्टवेअरमध्ये ठेवा.",
    "dpdp.p2.i1": "उघडी एक्सेल शीट नको: ग्राहकांचे पत्ते आणि फोन पब्लिक क्लाउडवर ठेवू नका.",
    "dpdp.p2.i2": "मर्यादित अधिकार (RBAC): फक्त अधिकृत कर्मचाऱ्यांनाच ग्राहक नोंदी पाहण्याची परवानगी द्या.",
    "dpdp.p2.i3": "अनिवार्य 2FA: सर्व व्यावसायिक सॉफ्टवेअर आणि ईमेलवर टू-स्टेप व्हेरिफिकेशन चालू ठेवा.",

    "dpdp.p3.t": "कायदेशीर पालन व डेटा ब्रीच योजना",
    "dpdp.p3.d": "भारताच्या DPDP कायद्यानुसार ग्राहकाची स्पष्ट संमती घ्या आणि डेटा चोरी झाल्यास तत्काळ कारवाईची तयारी ठेवा.",
    "dpdp.p3.i1": "स्पष्ट संमती: ग्राहकाला स्पष्ट सांगा की त्यांची माहिती कशासाठी घेतली जात आहे.",
    "dpdp.p3.i2": "लीकची तात्काळ सूचना: डेटा चोरी झाल्यास डेटा प्रोटेक्शन बोर्ड आणि ग्राहकाला त्वरित कळवा.",
    "dpdp.p3.i3": "कर्मचाऱ्यांचे प्रबोधन: कर्मचाऱ्यांना अनोळखी फोनवर ग्राहक डेटा न देण्याचे प्रशिक्षण द्या.",

    // Calculator
    "calc.tag": "स्वयं-चाचणी",
    "calc.title": "डिजिटल असुरक्षितता (Vulnerability) कॅल्क्युलेटर",
    "calc.desc": "4 सोप्या प्रश्नांची उत्तरे देऊन सायबर हल्ल्याचा तुम्हाला किती धोका आहे ते तपासा.",
    "calc.q1": "1. तुम्ही अनेक वेबसाइट्सवर एकच पासवर्ड किंवा त्याचे मिळतेजुळते रूप वापरता का?",
    "calc.q1.y": "होय, मी एकच पासवर्ड वापरतो/वापरते",
    "calc.q1.n": "नाही, मी सर्वत्र वेगवेगळे पासवर्ड वापरतो/वापरते",
    "calc.q2": "2. तुमच्या मुख्य ईमेल आणि यूपीआय/बँक ॲप्सवर टू-फॅक्टर ऑथेंटिकेशन (2FA / OTP) चालू आहे का?",
    "calc.q2.y": "होय, सर्व महत्त्वाच्या ॲप्सवर",
    "calc.q2.n": "नाही, किंवा फक्त काही ॲप्सवर",
    "calc.q3": "3. तुम्ही कधी घाईघाईत संपूर्ण लिंक न तपासता SMS किंवा व्हॉट्सॲपवरील लिंकवर क्लिक केले आहे का?",
    "calc.q3.y": "होय, कधीतरी घाईत केले आहे",
    "calc.q3.n": "कधीच नाही, मी नेहमी खात्री करतो/करते",
    "calc.q4": "4. फोन कॉलवर कोणी तुमच्याकडे ओटीपी मागितला किंवा AnyDesk/QuickSupport ॲप डाउनलोड करायला सांगितले होते का?",
    "calc.q4.y": "होय, आणि मी सांगितला किंवा विचार करत होतो",
    "calc.q4.n": "नाही, किंवा मी त्वरित फोन कट केला",
    "calc.btn": "माझा धोका स्कोअर काढा",

    // Protocol
    "step.tag": "आणीबाणी प्रोटोकॉल",
    "step.title": "तुमची किंवा परिचितांची फसवणूक झाल्यास तातडीने काय करावे?",
    "step.desc": "पैसे वाचवण्यात वेळ हा सर्वात मोठा घटक आहे. पुढील 4 पायऱ्या ताबडतोब अमलात आणा:",
    "step1.t": "पायरी 1: 1930 वर त्वरित कॉल",
    "step1.d": "लगेच 1930 डायल करा. गृह मंत्रालयाची यंत्रणा सर्व बँकांशी थेट संपर्क साधून गुन्हेगाराच्या खात्यात गेलेली रक्कम तत्काळ गोठवते.",
    "step1.b": "आताच 1930 वर कॉल करा",
    "step2.t": "पायरी 2: बँक खाते व कार्ड ब्लॉक करा",
    "step2.d": "मोबाईल बँकिंग ॲपवरून किंवा बँकेच्या टोल-फ्री नंबरवर संपर्क साधून नेटबँकिंग, यूपीआय आणि एटीएम कार्ड लगेच बंद करा.",
    "step3.t": "पायरी 3: ऑनलाइन FIR नोंदवा",
    "step3.d": "cybercrime.gov.in वर अधिकृत तक्रार नोंदवा. व्यवहाराचा संदर्भ क्रमांक (UTR), चॅटचे स्क्रीनशॉट आणि फोन नंबर जोडा.",
    "step3.b": "पोर्टल उघडा",
    "step4.t": "पायरी 4: मोबाईलची स्वच्छता",
    "step4.d": "कोणतेही रिमोट ॲप (AnyDesk, TeamViewer) किंवा अज्ञात APK डाउनलोड केले असल्यास ते लगेच काढून टाका आणि फोन फॉरमॅट करा.",

    "hotline.title": "राष्ट्रीय सायबर गुन्हे नोंदणी पोर्टल",
    "hotline.desc": "भारतीय सायबर गुन्हे समन्वय केंद्र (I4C), गृह मंत्रालय, भारत सरकार द्वारे संचलित. बँकांशी त्वरित समन्वय साधून नागरिकांची रक्कम वाचवण्यासाठी कटिबद्ध.",
    "hotline.lbl": "टोल-फ्री हेल्पलाइन",
    "hotline.sub": "संपूर्ण भारतात 24x7 उपलब्ध",

    // Footer
    "footer.desc": "डिजिटल साक्षरता, सोशल इंजिनिअरिंगपासून बचाव आणि ग्राहक डेटा सुरक्षिततेसाठी विद्यार्थ्यांद्वारे चालवलेला सामुदायिक उपक्रम.",
    "footer.badge.t": "कम्युनिटी एंगेजमेंट प्रोजेक्ट (CEP)",
    "footer.badge.d": "प्रमुख विषय: सायबर जनजागृती, फिशिंग संरक्षण आणि DPDP डेटा गोपनीयता",
    "footer.nav": "नेव्हिगेशन",
    "footer.topics": "प्रमुख विषय",
    "footer.help": "अधिकृत हेल्पलाइन",
    "footer.help.desc": "भारतात सायबर आर्थिक गुन्ह्यांच्या त्वरित मदतीसाठी:",
    "footer.copy": "© 2026 CyberGuard CEP. सामुदायिक डिजिटल जनजागृतीसाठी शैक्षणिक बिगर-व्यावसायिक प्रकल्प."
  }
};

// Global Translation Helpers
function getTranslation(lang, key) {
  if (i18nData[lang] && i18nData[lang][key]) {
    return i18nData[lang][key];
  }
  if (i18nData['en'] && i18nData['en'][key]) {
    return i18nData['en'][key];
  }
  return key;
}

function applyLanguage(lang) {
  if (!['en', 'hi', 'mr'].includes(lang)) {
    lang = 'en';
  }
  localStorage.setItem('cep_language', lang);
  document.documentElement.lang = lang;

  // Translate all elements marked with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getTranslation(lang, key);
    if (el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit')) {
      el.value = text;
    } else {
      el.textContent = text;
    }
  });

  // Update active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Notify components that language changed (e.g., simulator)
  window.dispatchEvent(new CustomEvent('cep_language_changed', { detail: { lang } }));
}
