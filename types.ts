export type EventType = 'Tilak' | 'Marriage' | 'Engagement' | 'Reception' | 'Haldi' | 'Sangeet';
export type Theme =
  // Original themes
  | 'royal-dark' | 'cream-gold' | 'maroon-classic' | 'floral-pink'
  // Red & Gold themes
  | 'crimson-gold' | 'ruby-elegance' | 'scarlet-royal' | 'burgundy-gold' | 'vermillion-classic'
  // Blue themes
  | 'royal-blue' | 'navy-gold' | 'sapphire-dream' | 'turquoise-bliss' | 'azure-elegance'
  // Green themes
  | 'emerald-gold' | 'jade-classic' | 'forest-elegance' | 'mint-fresh' | 'olive-gold'
  // Purple themes
  | 'royal-purple' | 'lavender-dream' | 'plum-elegance' | 'violet-gold' | 'mauve-classic'
  // Orange & Yellow themes
  | 'sunset-gold' | 'amber-glow' | 'saffron-royal' | 'tangerine-dream' | 'golden-hour'
  // Pink themes
  | 'rose-gold' | 'blush-elegance' | 'magenta-royal' | 'coral-dream' | 'fuchsia-classic'
  // Brown & Beige themes
  | 'chocolate-gold' | 'caramel-elegance' | 'bronze-royal' | 'sand-classic' | 'copper-dream'
  // Black & White themes
  | 'midnight-gold' | 'pearl-elegance' | 'onyx-royal' | 'ivory-classic' | 'silver-dream'
  // Multicolor themes
  | 'rainbow-celebration' | 'peacock-splendor' | 'lotus-garden' | 'mandala-magic' | 'rangoli-colors'
  // Pastel themes
  | 'pastel-dream' | 'soft-romance' | 'gentle-breeze' | 'cotton-candy' | 'spring-blossom';

export type Language = 'hi' | 'en';
export type CardSide = 'bride' | 'groom';
export type FontFamily = 'default' | 'serif' | 'sans' | 'hindi' | 'elegant' | 'modern';
export type BorderStyle = 'none' | 'simple' | 'double' | 'decorative' | 'floral' | 'geometric';
export type TextAlign = 'left' | 'center' | 'right';

export interface CustomColors {
  primary?: string;
  secondary?: string;
  accent?: string;
  text?: string;
  background?: string;
}

export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
}

export interface InvitationDetails {
  language: Language;
  theme: Theme;
  cardSide: CardSide;
  
  // Header
  shloka: string;
  showGanesha: boolean;
  
  // Groom Side
  groomName: string;
  groomFatherName: string;
  groomMotherName: string;
  
  // Bride Side
  brideName: string;
  brideFatherName: string;
  brideMotherName: string;
  
  // Events
  events: WeddingEvent[];
  
  // Footer
  poeticMessage: string;
  rsvpName: string;
  rsvpContact: string; // WhatsApp number
  
  imageUrl: string | null;
  
  // Customization options
  fontFamily?: FontFamily;
  borderStyle?: BorderStyle;
  textAlign?: TextAlign;
  customColors?: CustomColors;
  fontSize?: number; // 80-120
  lineSpacing?: number; // 100-200
  ganeshaImageUrl?: string; // Custom Ganesha image URL
}

export const DEFAULT_DETAILS: InvitationDetails = {
  language: 'hi',
  theme: 'royal-dark',
  cardSide: 'bride',
  
  shloka: "|| वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ||\n|| निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ||",
  showGanesha: true,
  
  groomName: "अभय सिंह",
  groomFatherName: "श्री पप्पू सिंह. ",
  groomMotherName: "श्रीमती प्रेरणा सिंह. ",
  
  brideName: "अरुणिमा सिंह",
  brideFatherName: "स्वर्गीय एकेंद्र बहादुर सिंह",
  brideMotherName: "श्रीमती उषा सिंह",
  
  events: [
    {
      id: '1',
      name: 'शुभ विवाह',
      date: '2024-12-25',
      time: 'सायं 7:00 बजे',
      venue: 'आमंत्रण होटल, उदयपुर'
    }
  ],
  
  poeticMessage: "मांगलिक बेला पर आपका स्नेह और आशीर्वाद हमारे लिए अनमोल है।",
  rsvpName: "Singh परिवार",
  rsvpContact: "",
  
  imageUrl: null,
  
  // Default customization values
  fontFamily: 'default',
  borderStyle: 'none',
  textAlign: 'center',
  fontSize: 100,
  lineSpacing: 150,
  ganeshaImageUrl: undefined,
};
