import { InvitationDetails } from './types';

export const COMPLETE_TEMPLATES: Record<string, Partial<InvitationDetails>> = {
  
  // ========== WEDDING TEMPLATES ==========
  
  'Wedding - Traditional Hindu': {
    language: 'hi',
    theme: 'royal-dark',
    cardSide: 'bride',
    shloka: "|| ॐ श्री गणेशाय नमः ||\n\nवक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    brideName: 'कु. प्रिया शर्मा',
    brideFatherName: 'श्री राजेश शर्मा',
    brideMotherName: 'श्रीमती सुनीता शर्मा',
    groomName: 'श्री आदित्य वर्मा',
    groomFatherName: 'श्री विनोद वर्मा',
    groomMotherName: 'श्रीमती मीना वर्मा',
    events: [
      { id: '1', name: 'हल्दी समारोह', date: '2026-02-15', time: 'प्रातः 10:00 बजे', venue: 'निवास स्थान, नई दिल्ली' },
      { id: '2', name: 'मेहंदी संध्या', date: '2026-02-16', time: 'सायं 6:00 बजे', venue: 'ताज पैलेस, नई दिल्ली' },
      { id: '3', name: 'विवाह संस्कार', date: '2026-02-17', time: 'प्रातः 9:00 बजे', venue: 'श्री राधा कृष्ण मंदिर, नई दिल्ली' },
      { id: '4', name: 'स्वागत समारोह', date: '2026-02-17', time: 'सायं 7:00 बजे', venue: 'ग्रैंड बॉलरूम, ताज पैलेस' }
    ],
    poeticMessage: "दो दिलों का मिलन, दो परिवारों का संगम\nप्रेम और आशीर्वाद के साथ\nआपकी उपस्थिति से इस पावन अवसर को\nऔर भी शुभ बनाएं",
    rsvpName: 'शर्मा परिवार',
    rsvpContact: '9876543210'
  },
  
  'Wedding - South Indian': {
    language: 'en',
    theme: 'golden-hour',
    cardSide: 'bride',
    shloka: "|| Om Shri Ganeshaya Namaha ||\n\nVakratunda Mahakaya Suryakoti Samaprabha\nNirvighnam Kuru Me Deva Sarva Karyeshu Sarvada",
    brideName: 'Ms. Priya Iyer',
    brideFatherName: 'Mr. Venkatesh Iyer',
    brideMotherName: 'Mrs. Lakshmi Iyer',
    groomName: 'Mr. Karthik Krishnan',
    groomFatherName: 'Mr. Ramesh Krishnan',
    groomMotherName: 'Mrs. Radha Krishnan',
    events: [
      { id: '1', name: 'Muhurtham', date: '2026-07-10', time: '9:30 AM', venue: 'Sri Venkateswara Temple, Chennai' },
      { id: '2', name: 'Reception', date: '2026-07-10', time: '7:00 PM', venue: 'Leela Palace, Chennai' }
    ],
    poeticMessage: "With the divine blessings of Lord Ganesha,\nwe invite you to witness our sacred union.\n\nYour presence will sanctify this auspicious occasion.",
    rsvpName: 'Iyer Family',
    rsvpContact: '9876543210'
  },
  
  'Wedding - Punjabi Style': {
    language: 'hi',
    theme: 'royal-purple',
    cardSide: 'groom',
    shloka: "|| ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ ||\n|| ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫਤਹਿ ||",
    brideName: 'कु. सिमरन कौर',
    brideFatherName: 'सरदार जसवीर सिंह',
    brideMotherName: 'श्रीमती हरप्रीत कौर',
    groomName: 'श्री अमनदीप सिंह',
    groomFatherName: 'सरदार बलविंदर सिंह',
    groomMotherName: 'श्रीमती मनप्रीत कौर',
    events: [
      { id: '1', name: 'मेहंदी व संगीत', date: '2026-05-15', time: 'सायं 6:00 बजे', venue: 'बैंक्वेट हॉल, अमृतसर' },
      { id: '2', name: 'आनंद कारज', date: '2026-05-16', time: 'प्रातः 10:00 बजे', venue: 'गुरुद्वारा साहिब, अमृतसर' },
      { id: '3', name: 'रिसेप्शन', date: '2026-05-16', time: 'सायं 7:00 बजे', venue: 'ग्रैंड होटल, अमृतसर' }
    ],
    poeticMessage: "वाहेगुरु के आशीर्वाद से\nहमारे विवाह समारोह में\nआपकी उपस्थिति की कामना",
    rsvpName: 'सिंह परिवार',
    rsvpContact: '9123456789'
  },
  
  'Wedding - Bengali Traditional': {
    language: 'en',
    theme: 'maroon-classic',
    cardSide: 'bride',
    shloka: "|| Om Shri Ganeshaya Namaha ||\n\nShubho Bibaho",
    brideName: 'Ms. Ananya Chatterjee',
    brideFatherName: 'Mr. Amit Chatterjee',
    brideMotherName: 'Mrs. Sumita Chatterjee',
    groomName: 'Mr. Arjun Mukherjee',
    groomFatherName: 'Mr. Rajesh Mukherjee',
    groomMotherName: 'Mrs. Priya Mukherjee',
    events: [
      { id: '1', name: 'Gaye Holud', date: '2026-08-20', time: '11:00 AM', venue: 'Chatterjee Residence, Kolkata' },
      { id: '2', name: 'Biye', date: '2026-08-21', time: '8:00 PM', venue: 'Taj Bengal, Kolkata' },
      { id: '3', name: 'Bou Bhaat', date: '2026-08-22', time: '12:00 PM', venue: 'Mukherjee Residence, Kolkata' }
    ],
    poeticMessage: "With joy in our hearts,\nwe invite you to celebrate\nour Bengali wedding traditions.",
    rsvpName: 'Chatterjee Family',
    rsvpContact: '9988776655'
  },
  
  'Wedding - Marathi Traditional': {
    language: 'hi',
    theme: 'saffron-royal',
    cardSide: 'bride',
    shloka: "|| श्री गणेशाय नमः ||\n\nलग्न सोहळा",
    brideName: 'कु. प्रिया देशमुख',
    brideFatherName: 'श्री राजेंद्र देशमुख',
    brideMotherName: 'श्रीमती सुनीता देशमुख',
    groomName: 'श्री आदित्य पाटील',
    groomFatherName: 'श्री विनोद पाटील',
    groomMotherName: 'श्रीमती मीना पाटील',
    events: [
      { id: '1', name: 'हळदी कुंकू', date: '2026-09-10', time: 'प्रातः 10:00 बजे', venue: 'देशमुख निवास, पुणे' },
      { id: '2', name: 'मेहंदी', date: '2026-09-11', time: 'दोपहर 2:00 बजे', venue: 'बैंक्वेट हॉल, पुणे' },
      { id: '3', name: 'लग्न विधी', date: '2026-09-12', time: 'सायं 7:00 बजे', venue: 'शादी मंडप, पुणे' }
    ],
    poeticMessage: "आपल्या आशीर्वादाने\nआमचा लग्न सोहळा\nसुशोभित करा",
    rsvpName: 'देशमुख परिवार',
    rsvpContact: '9111222333'
  },
  
  'Wedding - Royal Style': {
    language: 'hi',
    theme: 'maroon-classic',
    cardSide: 'bride',
    shloka: "|| ॐ श्री गणेशाय नमः ||\n\nवक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    brideName: 'राजकुमारी दिव्या सिंह',
    brideFatherName: 'महाराज विक्रम सिंह',
    brideMotherName: 'महारानी पद्मिनी देवी',
    groomName: 'राजकुमार अभिमन्यु राठौर',
    groomFatherName: 'महाराज रणवीर सिंह राठौर',
    groomMotherName: 'महारानी गायत्री देवी',
    events: [
      { id: '1', name: 'स्वागत समारोह', date: '2026-04-20', time: 'सायं 7:00 बजे', venue: 'राज महल, जयपुर' },
      { id: '2', name: 'मेहंदी एवं संगीत', date: '2026-04-21', time: 'सायं 6:00 बजे', venue: 'शीश महल, राज महल' },
      { id: '3', name: 'विवाह संस्कार', date: '2026-04-22', time: 'प्रातः 8:00 बजे', venue: 'राज मंदिर, जयपुर' },
      { id: '4', name: 'भोज समारोह', date: '2026-04-22', time: 'सायं 8:00 बजे', venue: 'दरबार हॉल, राज महल' }
    ],
    poeticMessage: "राजसी परंपरा और प्रेम के साथ\nदो राजघरानों का पवित्र मिलन\n\nआपकी गरिमामय उपस्थिति से\nइस शाही समारोह को सुशोभित करें",
    rsvpName: 'सिंह राजपरिवार',
    rsvpContact: '9111222333'
  },
  
  // ========== ENGAGEMENT TEMPLATES ==========
  
  'Engagement - Modern English': {
    language: 'en',
    theme: 'cream-gold',
    cardSide: 'bride',
    shloka: "|| With the blessings of Lord Ganesha ||\n\nTwo hearts, one promise\nForever begins here",
    brideName: 'Ms. Riya Kapoor',
    brideFatherName: 'Mr. Vikram Kapoor',
    brideMotherName: 'Mrs. Anjali Kapoor',
    groomName: 'Mr. Arjun Mehta',
    groomFatherName: 'Mr. Suresh Mehta',
    groomMotherName: 'Mrs. Kavita Mehta',
    events: [
      { id: '1', name: 'Ring Ceremony', date: '2026-03-25', time: '6:00 PM onwards', venue: 'The Grand Ballroom, Taj Hotel, Mumbai' },
      { id: '2', name: 'Cocktail Party', date: '2026-03-25', time: '8:00 PM onwards', venue: 'Poolside, Taj Hotel, Mumbai' }
    ],
    poeticMessage: "Together with our families,\nwe invite you to celebrate\nthe beginning of our forever.\n\nYour presence will make this day more special.",
    rsvpName: 'Kapoor Family',
    rsvpContact: '9988776655'
  },
  
  'Engagement - Traditional Hindi': {
    language: 'hi',
    theme: 'rose-gold',
    cardSide: 'bride',
    shloka: "|| ॐ श्री गणेशाय नमः ||\n\nसगाई समारोह",
    brideName: 'कु. आरती शर्मा',
    brideFatherName: 'श्री मनोज शर्मा',
    brideMotherName: 'श्रीमती पूजा शर्मा',
    groomName: 'श्री राहुल वर्मा',
    groomFatherName: 'श्री संजय वर्मा',
    groomMotherName: 'श्रीमती नीता वर्मा',
    events: [
      { id: '1', name: 'सगाई रस्म', date: '2026-06-15', time: 'सायं 6:00 बजे', venue: 'शर्मा निवास, दिल्ली' }
    ],
    poeticMessage: "दो दिलों का मिलन\nप्रेम की शुरुआत\nआपके आशीर्वाद से",
    rsvpName: 'शर्मा परिवार',
    rsvpContact: '9876543210'
  },
  
  'Engagement - Garden Party': {
    language: 'en',
    theme: 'pastel-dream',
    cardSide: 'groom',
    shloka: "Love is in the air\n\nJoin us for our engagement",
    brideName: 'Ms. Tanya Kapoor',
    brideFatherName: 'Mr. Vikram Kapoor',
    brideMotherName: 'Mrs. Anjali Kapoor',
    groomName: 'Mr. Kabir Malhotra',
    groomFatherName: 'Mr. Anil Malhotra',
    groomMotherName: 'Mrs. Deepa Malhotra',
    events: [
      { id: '1', name: 'Garden Engagement Party', date: '2026-04-20', time: '5:00 PM onwards', venue: 'The Garden Estate, Mumbai' }
    ],
    poeticMessage: "Join us in the garden\nwhere love blooms eternal\nas we begin our journey together.",
    rsvpName: 'Malhotra Family',
    rsvpContact: '9123456789'
  },
  
  'Engagement - Cocktail Evening': {
    language: 'en',
    theme: 'midnight-gold',
    cardSide: 'bride',
    shloka: "Cheers to Love\n\nAn Evening of Celebration",
    brideName: 'Ms. Ishita Reddy',
    brideFatherName: 'Mr. Venkat Reddy',
    brideMotherName: 'Mrs. Lakshmi Reddy',
    groomName: 'Mr. Aditya Khanna',
    groomFatherName: 'Mr. Sunil Khanna',
    groomMotherName: 'Mrs. Ritu Khanna',
    events: [
      { id: '1', name: 'Engagement & Cocktails', date: '2026-05-25', time: '7:00 PM onwards', venue: 'Sky Lounge, Hyderabad' }
    ],
    poeticMessage: "Join us for an evening of\nchampagne, laughter, and love\nas we celebrate our engagement.",
    rsvpName: 'Reddy Family',
    rsvpContact: '9988776655'
  },
  
  'Engagement - Simple & Elegant': {
    language: 'en',
    theme: 'ivory-classic',
    cardSide: 'groom',
    shloka: "|| With blessings from above ||\n\nLove brought us together\nLove will keep us forever",
    brideName: 'Ms. Neha Sharma',
    brideFatherName: 'Mr. Rajesh Sharma',
    brideMotherName: 'Mrs. Priya Sharma',
    groomName: 'Mr. Karan Patel',
    groomFatherName: 'Mr. Mahesh Patel',
    groomMotherName: 'Mrs. Seema Patel',
    events: [
      { id: '1', name: 'Engagement Ceremony', date: '2026-04-15', time: '5:00 PM', venue: 'Patel Residence, Ahmedabad' }
    ],
    poeticMessage: "Join us as we exchange rings\nand promise our hearts to each other.\n\nYour blessings mean the world to us.",
    rsvpName: 'Patel Family',
    rsvpContact: '9444555666'
  },
  
  // ========== TILAK/ROKA CEREMONY TEMPLATES ==========
  
  'Tilak - Traditional': {
    language: 'hi',
    theme: 'sunset-gold',
    cardSide: 'groom',
    shloka: "|| ॐ गं गणपतये नमः ||\n\nशुभ लाभ",
    brideName: 'कु. अनन्या गुप्ता',
    brideFatherName: 'श्री अमित गुप्ता',
    brideMotherName: 'श्रीमती रेखा गुप्ता',
    groomName: 'श्री रोहन मल्होत्रा',
    groomFatherName: 'श्री संजय मल्होत्रा',
    groomMotherName: 'श्रीमती नीलम मल्होत्रा',
    events: [
      { id: '1', name: 'तिलक समारोह', date: '2026-03-10', time: 'प्रातः 11:00 बजे', venue: 'मल्होत्रा निवास, मुंबई' }
    ],
    poeticMessage: "तिलक रस्म के इस शुभ अवसर पर\nआपके आशीर्वाद एवं उपस्थिति की\nहार्दिक कामना\n\nआपका स्वागत है",
    rsvpName: 'मल्होत्रा परिवार',
    rsvpContact: '9123456789'
  },
  
  'Roka - Punjabi Style': {
    language: 'hi',
    theme: 'amber-glow',
    cardSide: 'groom',
    shloka: "|| ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ ||\n\nरोका रस्म",
    brideName: 'कु. हरलीन कौर',
    brideFatherName: 'सरदार गुरप्रीत सिंह',
    brideMotherName: 'श्रीमती जसप्रीत कौर',
    groomName: 'श्री मनप्रीत सिंह',
    groomFatherName: 'सरदार अमरजीत सिंह',
    groomMotherName: 'श्रीमती सुखविंदर कौर',
    events: [
      { id: '1', name: 'रोका समारोह', date: '2026-03-20', time: 'दोपहर 12:00 बजे', venue: 'सिंह निवास, चंडीगढ़' }
    ],
    poeticMessage: "रोका रस्म के इस शुभ अवसर पर\nआपकी उपस्थिति अपेक्षित है",
    rsvpName: 'सिंह परिवार',
    rsvpContact: '9111222333'
  },
  
  'Tilak - Royal Style': {
    language: 'hi',
    theme: 'royal-dark',
    cardSide: 'groom',
    shloka: "|| श्री गणेशाय नमः ||\n\nतिलक महोत्सव",
    brideName: 'राजकुमारी दिव्या',
    brideFatherName: 'महाराज विक्रम सिंह',
    brideMotherName: 'महारानी पद्मिनी देवी',
    groomName: 'राजकुमार अभिमन्यु',
    groomFatherName: 'महाराज रणवीर सिंह',
    groomMotherName: 'महारानी गायत्री देवी',
    events: [
      { id: '1', name: 'तिलक महोत्सव', date: '2026-04-10', time: 'प्रातः 11:00 बजे', venue: 'राज महल, जयपुर' }
    ],
    poeticMessage: "राजसी तिलक समारोह में\nआपकी गरिमामय उपस्थिति\nअपेक्षित है",
    rsvpName: 'राज परिवार',
    rsvpContact: '9444555666'
  },
  
  // ========== HALDI CEREMONY TEMPLATES ==========
  
  'Haldi - Traditional': {
    language: 'hi',
    theme: 'golden-hour',
    cardSide: 'bride',
    shloka: "|| श्री गणेशाय नमः ||\n\nहल्दी रस्म",
    brideName: 'कु. साक्षी जोशी',
    brideFatherName: 'श्री मनोज जोशी',
    brideMotherName: 'श्रीमती स्मिता जोशी',
    groomName: 'श्री विवेक अग्रवाल',
    groomFatherName: 'श्री राकेश अग्रवाल',
    groomMotherName: 'श्रीमती पूजा अग्रवाल',
    events: [
      { id: '1', name: 'हल्दी समारोह', date: '2026-05-05', time: 'प्रातः 10:00 बजे', venue: 'जोशी निवास, पुणे' }
    ],
    poeticMessage: "हल्दी की पीली रौनक के साथ\nशुभ आरंभ का उत्सव\nआपकी उपस्थिति से",
    rsvpName: 'जोशी परिवार',
    rsvpContact: '9876543210'
  },
  
  'Haldi - Modern Celebration': {
    language: 'en',
    theme: 'tangerine-dream',
    cardSide: 'bride',
    shloka: "Yellow & Bright\n\nHaldi Celebration",
    brideName: 'Ms. Naina Mehta',
    brideFatherName: 'Mr. Rajiv Mehta',
    brideMotherName: 'Mrs. Kavita Mehta',
    groomName: 'Mr. Rohan Kapoor',
    groomFatherName: 'Mr. Amit Kapoor',
    groomMotherName: 'Mrs. Priya Kapoor',
    events: [
      { id: '1', name: 'Haldi Ceremony', date: '2026-06-10', time: '11:00 AM', venue: 'Poolside, Grand Hotel, Mumbai' }
    ],
    poeticMessage: "Join us for a vibrant celebration\nof turmeric, laughter, and love\nat our Haldi ceremony.",
    rsvpName: 'Mehta Family',
    rsvpContact: '9123456789'
  },
  
  // ========== MEHENDI CEREMONY TEMPLATES ==========
  
  'Mehendi - Traditional': {
    language: 'hi',
    theme: 'emerald-gold',
    cardSide: 'bride',
    shloka: "|| श्री गणेशाय नमः ||\n\nमेहंदी रस्म",
    brideName: 'कु. तान्या वर्मा',
    brideFatherName: 'श्री अशोक वर्मा',
    brideMotherName: 'श्रीमती नीता वर्मा',
    groomName: 'श्री कार्तिक शर्मा',
    groomFatherName: 'श्री दिनेश शर्मा',
    groomMotherName: 'श्रीमती अनीता शर्मा',
    events: [
      { id: '1', name: 'मेहंदी समारोह', date: '2026-08-08', time: 'दोपहर 2:00 बजे', venue: 'वर्मा गार्डन, चंडीगढ़' }
    ],
    poeticMessage: "मेहंदी की महक और खुशियों का रंग\nहाथों में सजेगी प्यार की कहानी",
    rsvpName: 'वर्मा परिवार',
    rsvpContact: '9988776655'
  },
  
  'Mehendi - Garden Party': {
    language: 'en',
    theme: 'mint-fresh',
    cardSide: 'bride',
    shloka: "Henna & Happiness\n\nMehendi Celebration",
    brideName: 'Ms. Riya Sharma',
    brideFatherName: 'Mr. Vikram Sharma',
    brideMotherName: 'Mrs. Anjali Sharma',
    groomName: 'Mr. Arjun Malhotra',
    groomFatherName: 'Mr. Suresh Malhotra',
    groomMotherName: 'Mrs. Kavita Malhotra',
    events: [
      { id: '1', name: 'Mehendi Garden Party', date: '2026-07-15', time: '3:00 PM onwards', venue: 'The Garden Estate, Delhi' }
    ],
    poeticMessage: "Join us for an afternoon of\nhenna art, music, and celebration\nin the garden.",
    rsvpName: 'Sharma Family',
    rsvpContact: '9111222333'
  },
  
  // ========== SANGEET CEREMONY TEMPLATES ==========
  
  'Sangeet - Traditional': {
    language: 'hi',
    theme: 'peacock-splendor',
    cardSide: 'bride',
    shloka: "|| संगीत और नृत्य ||\nखुशियों का उत्सव",
    brideName: 'कु. प्रिया गुप्ता',
    brideFatherName: 'श्री राजेश गुप्ता',
    brideMotherName: 'श्रीमती सुनीता गुप्ता',
    groomName: 'श्री आदित्य सिंह',
    groomFatherName: 'श्री विनोद सिंह',
    groomMotherName: 'श्रीमती मीना सिंह',
    events: [
      { id: '1', name: 'संगीत संध्या', date: '2026-09-20', time: 'सायं 7:00 बजे', venue: 'बैंक्वेट हॉल, दिल्ली' }
    ],
    poeticMessage: "संगीत की धुन पर नाचे दिल\nखुशियों का जश्न मनाएं",
    rsvpName: 'गुप्ता परिवार',
    rsvpContact: '9444555666'
  },
  
  'Sangeet - Bollywood Night': {
    language: 'en',
    theme: 'magenta-royal',
    cardSide: 'groom',
    shloka: "Dance, Music & Celebration\n\nBollywood Sangeet Night",
    brideName: 'Ms. Ishita Kapoor',
    brideFatherName: 'Mr. Vikram Kapoor',
    brideMotherName: 'Mrs. Anjali Kapoor',
    groomName: 'Mr. Kabir Mehta',
    groomFatherName: 'Mr. Anil Mehta',
    groomMotherName: 'Mrs. Deepa Mehta',
    events: [
      { id: '1', name: 'Bollywood Sangeet Night', date: '2026-10-15', time: '8:00 PM onwards', venue: 'Grand Ballroom, Mumbai' }
    ],
    poeticMessage: "Get ready to dance the night away\nat our Bollywood-themed Sangeet!\nDress code: Glamorous & Festive",
    rsvpName: 'Mehta Family',
    rsvpContact: '9876543210'
  },
  
  // ========== RECEPTION TEMPLATES ==========
  
  'Reception - Grand Celebration': {
    language: 'en',
    theme: 'midnight-gold',
    cardSide: 'groom',
    shloka: "Celebrating Love & Togetherness\n\nJoin us for an evening of elegance",
    brideName: 'Mrs. Simran Malhotra',
    brideFatherName: 'Mr. Rajiv Malhotra',
    brideMotherName: 'Mrs. Deepa Malhotra',
    groomName: 'Mr. Kabir Chopra',
    groomFatherName: 'Mr. Anil Chopra',
    groomMotherName: 'Mrs. Meera Chopra',
    events: [
      { id: '1', name: 'Wedding Reception', date: '2026-06-25', time: '7:00 PM onwards', venue: 'The Imperial, New Delhi' }
    ],
    poeticMessage: "As we begin our journey together,\nwe invite you to celebrate with us.\nYour presence will add joy to our special evening.",
    rsvpName: 'Chopra Family',
    rsvpContact: '9123456789'
  },
  
  'Reception - Traditional': {
    language: 'hi',
    theme: 'royal-purple',
    cardSide: 'bride',
    shloka: "|| श्री गणेशाय नमः ||\n\nस्वागत समारोह",
    brideName: 'श्रीमती अनन्या शर्मा',
    brideFatherName: 'श्री राजेश शर्मा',
    brideMotherName: 'श्रीमती सुनीता शर्मा',
    groomName: 'श्री रोहन वर्मा',
    groomFatherName: 'श्री विनोद वर्मा',
    groomMotherName: 'श्रीमती मीना वर्मा',
    events: [
      { id: '1', name: 'स्वागत समारोह', date: '2026-07-20', time: 'सायं 8:00 बजे', venue: 'ग्रैंड बॉलरूम, जयपुर' }
    ],
    poeticMessage: "विवाह के पश्चात\nस्वागत समारोह में\nआपकी उपस्थिति अपेक्षित है",
    rsvpName: 'शर्मा परिवार',
    rsvpContact: '9988776655'
  },
  
  // ========== ANNIVERSARY TEMPLATES ==========
  
  'Anniversary - 25th Silver': {
    language: 'en',
    theme: 'silver-dream',
    cardSide: 'bride',
    shloka: "25 Years of Love\n\nSilver Jubilee Celebration",
    brideName: 'Mrs. Sunita Sharma',
    brideFatherName: '',
    brideMotherName: '',
    groomName: 'Mr. Rajesh Sharma',
    groomFatherName: '',
    groomMotherName: '',
    events: [
      { id: '1', name: '25th Anniversary Celebration', date: '2026-12-15', time: '7:00 PM', venue: 'Grand Hotel, Mumbai' }
    ],
    poeticMessage: "Join us as we celebrate\n25 beautiful years of togetherness\nand renew our vows of love.",
    rsvpName: 'Sharma Family',
    rsvpContact: '9111222333'
  },
  
  'Anniversary - 50th Golden': {
    language: 'hi',
    theme: 'sunset-gold',
    cardSide: 'groom',
    shloka: "|| 50 वर्ष का सुनहरा सफर ||\n\nस्वर्ण जयंती समारोह",
    brideName: 'श्रीमती कमला देवी',
    brideFatherName: '',
    brideMotherName: '',
    groomName: 'श्री रामप्रसाद शर्मा',
    groomFatherName: '',
    groomMotherName: '',
    events: [
      { id: '1', name: 'स्वर्ण जयंती समारोह', date: '2026-11-20', time: 'सायं 6:00 बजे', venue: 'शर्मा निवास, दिल्ली' }
    ],
    poeticMessage: "50 वर्षों की प्रेम यात्रा\nआपके आशीर्वाद से\nऔर भी खूबसूरत बनी",
    rsvpName: 'शर्मा परिवार',
    rsvpContact: '9444555666'
  },
  
  // ========== MUNDAN CEREMONY TEMPLATES ==========
  
  'Mundan - Traditional': {
    language: 'hi',
    theme: 'golden-hour',
    cardSide: 'groom',
    shloka: "|| श्री गणेशाय नमः ||\n\nमुंडन संस्कार",
    brideName: '',
    brideFatherName: '',
    brideMotherName: '',
    groomName: 'बालक आर्यन शर्मा',
    groomFatherName: 'श्री राजेश शर्मा',
    groomMotherName: 'श्रीमती प्रिया शर्मा',
    events: [
      { id: '1', name: 'मुंडन संस्कार', date: '2026-08-15', time: 'प्रातः 10:00 बजे', venue: 'शर्मा निवास, वाराणसी' }
    ],
    poeticMessage: "हमारे प्यारे बेटे के\nमुंडन संस्कार में\nआपकी उपस्थिति और आशीर्वाद\nअपेक्षित है",
    rsvpName: 'शर्मा परिवार',
    rsvpContact: '9876543210'
  },
  
  'Mundan - Temple Ceremony': {
    language: 'hi',
    theme: 'saffron-royal',
    cardSide: 'groom',
    shloka: "|| ॐ श्री गणेशाय नमः ||\n\nचूड़ाकर्म संस्कार",
    brideName: '',
    brideFatherName: '',
    brideMotherName: '',
    groomName: 'बालक विवान गुप्ता',
    groomFatherName: 'श्री अमित गुप्ता',
    groomMotherName: 'श्रीमती नेहा गुप्ता',
    events: [
      { id: '1', name: 'मुंडन संस्कार', date: '2026-09-10', time: 'प्रातः 8:00 बजे', venue: 'काशी विश्वनाथ मंदिर, वाराणसी' },
      { id: '2', name: 'भोज समारोह', date: '2026-09-10', time: 'दोपहर 1:00 बजे', venue: 'गुप्ता निवास, वाराणसी' }
    ],
    poeticMessage: "भगवान के आशीर्वाद से\nहमारे बेटे के चूड़ाकर्म में\nआपका स्वागत है",
    rsvpName: 'गुप्ता परिवार',
    rsvpContact: '9123456789'
  },
  
  'Mundan - Modern Celebration': {
    language: 'en',
    theme: 'pastel-dream',
    cardSide: 'groom',
    shloka: "|| With Divine Blessings ||\n\nFirst Haircut Ceremony",
    brideName: '',
    brideFatherName: '',
    brideMotherName: '',
    groomName: 'Baby Aarav Kapoor',
    groomFatherName: 'Mr. Vikram Kapoor',
    groomMotherName: 'Mrs. Anjali Kapoor',
    events: [
      { id: '1', name: 'Mundan Ceremony', date: '2026-07-20', time: '11:00 AM', venue: 'Kapoor Residence, Mumbai' }
    ],
    poeticMessage: "Join us as we celebrate\nour little one's first haircut\nwith your blessings and love.",
    rsvpName: 'Kapoor Family',
    rsvpContact: '9988776655'
  },
  
  // ========== BIRTHDAY TEMPLATES ==========
  
  'Birthday - First Birthday': {
    language: 'en',
    theme: 'rainbow-celebration',
    cardSide: 'groom',
    shloka: "One Year of Joy\n\nFirst Birthday Celebration",
    brideName: '',
    brideFatherName: '',
    brideMotherName: '',
    groomName: 'Baby Anaya Sharma',
    groomFatherName: 'Mr. Rajesh Sharma',
    groomMotherName: 'Mrs. Priya Sharma',
    events: [
      { id: '1', name: '1st Birthday Party', date: '2026-06-15', time: '4:00 PM onwards', venue: 'The Garden Club, Delhi' }
    ],
    poeticMessage: "Join us as we celebrate\nour little princess turning ONE!\nCome for cake, fun, and lots of love.",
    rsvpName: 'Sharma Family',
    rsvpContact: '9876543210'
  },
  
  'Birthday - Kids Party': {
    language: 'en',
    theme: 'cotton-candy',
    cardSide: 'groom',
    shloka: "Let's Celebrate!\n\nBirthday Bash",
    brideName: '',
    brideFatherName: '',
    brideMotherName: '',
    groomName: 'Aarav Malhotra',
    groomFatherName: 'Mr. Amit Malhotra',
    groomMotherName: 'Mrs. Neha Malhotra',
    events: [
      { id: '1', name: '5th Birthday Party', date: '2026-08-20', time: '5:00 PM', venue: 'Fun Zone, Mumbai' }
    ],
    poeticMessage: "Join us for games, cake, and fun\nas Aarav turns 5!\nDress code: Colorful & Festive",
    rsvpName: 'Malhotra Family',
    rsvpContact: '9123456789'
  },
  
  'Birthday - Traditional Hindi': {
    language: 'hi',
    theme: 'royal-blue',
    cardSide: 'groom',
    shloka: "|| श्री गणेशाय नमः ||\n\nजन्मदिन समारोह",
    brideName: '',
    brideFatherName: '',
    brideMotherName: '',
    groomName: 'आर्यन वर्मा',
    groomFatherName: 'श्री विनोद वर्मा',
    groomMotherName: 'श्रीमती मीना वर्मा',
    events: [
      { id: '1', name: 'जन्मदिन समारोह', date: '2026-09-25', time: 'सायं 6:00 बजे', venue: 'वर्मा निवास, जयपुर' }
    ],
    poeticMessage: "हमारे बेटे के जन्मदिन पर\nआपकी उपस्थिति और आशीर्वाद\nअपेक्षित है",
    rsvpName: 'वर्मा परिवार',
    rsvpContact: '9988776655'
  },
  
  'Birthday - Sweet Sixteen': {
    language: 'en',
    theme: 'rose-gold',
    cardSide: 'bride',
    shloka: "Sweet Sixteen\n\nA Milestone Celebration",
    brideName: 'Riya Kapoor',
    brideFatherName: 'Mr. Vikram Kapoor',
    brideMotherName: 'Mrs. Anjali Kapoor',
    groomName: '',
    groomFatherName: '',
    groomMotherName: '',
    events: [
      { id: '1', name: '16th Birthday Party', date: '2026-10-15', time: '7:00 PM', venue: 'Grand Ballroom, Mumbai' }
    ],
    poeticMessage: "Join us for an elegant evening\nas Riya celebrates her Sweet Sixteen.\nDress code: Formal & Glamorous",
    rsvpName: 'Kapoor Family',
    rsvpContact: '9111222333'
  },
  
  'Birthday - Adult Celebration': {
    language: 'en',
    theme: 'midnight-gold',
    cardSide: 'groom',
    shloka: "Cheers to Another Year\n\nBirthday Celebration",
    brideName: '',
    brideFatherName: '',
    brideMotherName: '',
    groomName: 'Mr. Rohan Mehta',
    groomFatherName: '',
    groomMotherName: '',
    events: [
      { id: '1', name: '30th Birthday Party', date: '2026-11-20', time: '8:00 PM onwards', venue: 'Sky Lounge, Bangalore' }
    ],
    poeticMessage: "Join me for an evening of\ncocktails, music, and celebration\nas I turn 30!",
    rsvpName: 'Rohan Mehta',
    rsvpContact: '9444555666'
  },
  
  // ========== ADDITIONAL WEDDING TEMPLATES ==========
  
  'Wedding - Gujarati Traditional': {
    language: 'hi',
    theme: 'vermillion-classic',
    cardSide: 'bride',
    shloka: "|| ॐ श्री गणेशाय नमः ||\n\nलग्न पत्रिका",
    brideName: 'कु. दिव्या पटेल',
    brideFatherName: 'श्री भरत पटेल',
    brideMotherName: 'श्रीमती कोकिला पटेल',
    groomName: 'श्री निखिल शाह',
    groomFatherName: 'श्री जयेश शाह',
    groomMotherName: 'श्रीमती हंसा शाह',
    events: [
      { id: '1', name: 'मेहंदी', date: '2026-10-10', time: 'दोपहर 2:00 बजे', venue: 'पटेल निवास, अहमदाबाद' },
      { id: '2', name: 'गरबा नाइट', date: '2026-10-10', time: 'सायं 8:00 बजे', venue: 'गार्डन, अहमदाबाद' },
      { id: '3', name: 'विवाह मुहूर्त', date: '2026-10-11', time: 'सायं 7:00 बजे', venue: 'शादी मंडप, अहमदाबाद' }
    ],
    poeticMessage: "गुजराती परंपरा के साथ\nहमारे विवाह में\nआपका स्वागत है",
    rsvpName: 'पटेल परिवार',
    rsvpContact: '9777888999'
  },
  
  'Wedding - Destination Beach': {
    language: 'en',
    theme: 'turquoise-bliss',
    cardSide: 'bride',
    shloka: "Love by the Sea\n\nBeach Wedding Celebration",
    brideName: 'Ms. Tanya Reddy',
    brideFatherName: 'Mr. Venkat Reddy',
    brideMotherName: 'Mrs. Lakshmi Reddy',
    groomName: 'Mr. Karan Khanna',
    groomFatherName: 'Mr. Sunil Khanna',
    groomMotherName: 'Mrs. Ritu Khanna',
    events: [
      { id: '1', name: 'Welcome Dinner', date: '2026-12-10', time: '7:00 PM', venue: 'Beachside Resort, Goa' },
      { id: '2', name: 'Beach Wedding', date: '2026-12-11', time: '5:00 PM', venue: 'Sunset Beach, Goa' },
      { id: '3', name: 'After Party', date: '2026-12-11', time: '9:00 PM', venue: 'Resort Poolside, Goa' }
    ],
    poeticMessage: "Join us for a magical celebration\nwhere love meets the ocean.\nPack your bags for a weekend of sun, sand, and celebration!",
    rsvpName: 'Reddy Family',
    rsvpContact: '9555666777'
  },
  
  // ========== ADDITIONAL ENGAGEMENT TEMPLATES ==========
  
  'Engagement - Intimate Gathering': {
    language: 'en',
    theme: 'blush-elegance',
    cardSide: 'bride',
    shloka: "An Intimate Celebration\n\nOf Love & Commitment",
    brideName: 'Ms. Meera Joshi',
    brideFatherName: 'Mr. Prakash Joshi',
    brideMotherName: 'Mrs. Sunita Joshi',
    groomName: 'Mr. Aditya Nair',
    groomFatherName: 'Mr. Ramesh Nair',
    groomMotherName: 'Mrs. Priya Nair',
    events: [
      { id: '1', name: 'Engagement Ceremony', date: '2026-05-10', time: '6:00 PM', venue: 'Joshi Residence, Pune' }
    ],
    poeticMessage: "Join our close family and friends\nas we celebrate our engagement\nin an intimate gathering.",
    rsvpName: 'Joshi Family',
    rsvpContact: '9333444555'
  },
  
  // ========== ADDITIONAL HALDI TEMPLATES ==========
  
  'Haldi - Poolside Party': {
    language: 'en',
    theme: 'tangerine-dream',
    cardSide: 'bride',
    shloka: "Yellow & Bright\n\nPoolside Haldi Celebration",
    brideName: 'Ms. Sanya Malhotra',
    brideFatherName: 'Mr. Rajiv Malhotra',
    brideMotherName: 'Mrs. Kavita Malhotra',
    groomName: 'Mr. Arjun Kapoor',
    groomFatherName: 'Mr. Amit Kapoor',
    groomMotherName: 'Mrs. Priya Kapoor',
    events: [
      { id: '1', name: 'Poolside Haldi', date: '2026-07-05', time: '12:00 PM', venue: 'Resort Poolside, Jaipur' }
    ],
    poeticMessage: "Splash into the celebration!\nJoin us for a fun-filled Haldi by the pool.\nDress code: Bright & Comfortable",
    rsvpName: 'Malhotra Family',
    rsvpContact: '9222333444'
  },
  
  // ========== ADDITIONAL MEHENDI TEMPLATES ==========
  
  'Mehendi - Rajasthani Style': {
    language: 'hi',
    theme: 'royal-purple',
    cardSide: 'bride',
    shloka: "|| मेहंदी का रंग ||\nराजस्थानी शैली",
    brideName: 'कु. काजल राठौर',
    brideFatherName: 'श्री विक्रम सिंह राठौर',
    brideMotherName: 'श्रीमती पद्मिनी राठौर',
    groomName: 'श्री अभिमन्यु सिंह',
    groomFatherName: 'श्री रणवीर सिंह',
    groomMotherName: 'श्रीमती गायत्री देवी',
    events: [
      { id: '1', name: 'मेहंदी महोत्सव', date: '2026-11-15', time: 'दोपहर 3:00 बजे', venue: 'राज महल, उदयपुर' }
    ],
    poeticMessage: "राजस्थानी परंपरा में\nमेहंदी का उत्सव\nआपकी उपस्थिति से सुशोभित होगा",
    rsvpName: 'राठौर परिवार',
    rsvpContact: '9666777888'
  },
  
  // ========== ADDITIONAL SANGEET TEMPLATES ==========
  
  'Sangeet - DJ Night': {
    language: 'en',
    theme: 'magenta-royal',
    cardSide: 'groom',
    shloka: "Dance All Night\n\nSangeet DJ Party",
    brideName: 'Ms. Priya Sharma',
    brideFatherName: 'Mr. Vikram Sharma',
    brideMotherName: 'Mrs. Anjali Sharma',
    groomName: 'Mr. Rohan Malhotra',
    groomFatherName: 'Mr. Suresh Malhotra',
    groomMotherName: 'Mrs. Kavita Malhotra',
    events: [
      { id: '1', name: 'Sangeet DJ Night', date: '2026-08-25', time: '9:00 PM onwards', venue: 'Club Lounge, Mumbai' }
    ],
    poeticMessage: "Get ready to dance till dawn!\nJoin us for an electrifying Sangeet night.\nDress code: Party Ready",
    rsvpName: 'Malhotra Family',
    rsvpContact: '9888999000'
  },
};

// Template categories for organized display
export const TEMPLATE_CATEGORIES = {
  'Wedding': [
    'Wedding - Traditional Hindu',
    'Wedding - South Indian',
    'Wedding - Punjabi Style',
    'Wedding - Bengali Traditional',
    'Wedding - Marathi Traditional',
    'Wedding - Royal Style',
    'Wedding - Gujarati Traditional',
    'Wedding - Destination Beach',
  ],
  'Engagement': [
    'Engagement - Modern English',
    'Engagement - Traditional Hindi',
    'Engagement - Garden Party',
    'Engagement - Cocktail Evening',
    'Engagement - Simple & Elegant',
    'Engagement - Intimate Gathering',
  ],
  'Tilak/Roka': [
    'Tilak - Traditional',
    'Roka - Punjabi Style',
    'Tilak - Royal Style',
  ],
  'Haldi': [
    'Haldi - Traditional',
    'Haldi - Modern Celebration',
    'Haldi - Poolside Party',
  ],
  'Mehendi': [
    'Mehendi - Traditional',
    'Mehendi - Garden Party',
    'Mehendi - Rajasthani Style',
  ],
  'Sangeet': [
    'Sangeet - Traditional',
    'Sangeet - Bollywood Night',
    'Sangeet - DJ Night',
  ],
  'Reception': [
    'Reception - Grand Celebration',
    'Reception - Traditional',
  ],
  'Anniversary': [
    'Anniversary - 25th Silver',
    'Anniversary - 50th Golden',
  ],
  'Mundan': [
    'Mundan - Traditional',
    'Mundan - Temple Ceremony',
    'Mundan - Modern Celebration',
  ],
  'Birthday': [
    'Birthday - First Birthday',
    'Birthday - Kids Party',
    'Birthday - Traditional Hindi',
    'Birthday - Sweet Sixteen',
    'Birthday - Adult Celebration',
  ],
};

// Made with Bob
