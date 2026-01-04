import * as React from 'react';
import { InvitationDetails, Language } from '../types';
import { Phone } from 'lucide-react';
import defaultGaneshaImage from '../image/ganesha.jpg';
import { themeStyles } from '../themes';

interface InvitationPreviewProps {
  details: InvitationDetails;
  innerRef?: React.Ref<HTMLDivElement>;
}

// Dictionary for static labels
const LABELS = {
  hi: {
    weds: "संग",
    sonOf: "सुपुत्र",
    daughterOf: "सुपुत्री",
    venue: "स्थान",
    rsvp: "दर्शनाभिलाषी",
    shubhLabh: ["शुभ", "लाभ"],
    ganeshMantra: "|| श्री गणेशाय नमः ||",
    date: "दिनांक",
    time: "समय",
    and: "एवं"
  },
  en: {
    weds: "Weds",
    sonOf: "S/o",
    daughterOf: "D/o",
    venue: "Venue",
    rsvp: "RSVP",
    shubhLabh: ["Shubh", "Labh"],
    ganeshMantra: "|| Om Shri Ganeshaya Namah ||",
    date: "Date",
    time: "Time",
    and: "&"
  }
};

export const InvitationPreview: React.FC<InvitationPreviewProps> = ({ details, innerRef }) => {
  const L = LABELS[details.language];
  
  // Use custom image if provided, otherwise use default
  const ganeshaImage = details.ganeshaImageUrl || defaultGaneshaImage;

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    };
    return new Date(dateString).toLocaleDateString(details.language === 'hi' ? 'hi-IN' : 'en-IN', options);
  };

  const theme = themeStyles[details.theme] || themeStyles['royal-dark'];
  
  // Apply custom font family
  const getFontFamily = () => {
    switch (details.fontFamily) {
      case 'hindi': return 'font-hindi';
      case 'serif': return 'font-serif';
      case 'sans': return 'font-sans';
      case 'elegant': return 'font-script';
      case 'modern': return 'font-sans';
      default: return details.language === 'hi' ? 'font-hindi' : 'font-serif';
    }
  };
  
  const fontMain = getFontFamily();
  const fontTitle = details.language === 'hi' ? 'font-hindiTitle' : 'font-script';
  
  // Apply custom colors or use theme colors
  const colors = {
    primary: details.customColors?.primary || theme.fill,
    secondary: details.customColors?.secondary || theme.fill,
    accent: details.customColors?.accent || theme.fill,
    text: details.customColors?.text || undefined,
    background: details.customColors?.background || undefined
  };
  
  // Apply text alignment
  const textAlign = details.textAlign || 'center';
  const alignmentClass = textAlign === 'left' ? 'text-left' : textAlign === 'right' ? 'text-right' : 'text-center';
  
  // Apply font size and line spacing
  const fontSize = details.fontSize || 100;
  const lineSpacing = details.lineSpacing || 150;
  
  // Apply border style
  const getBorderStyle = () => {
    const borderStyle = details.borderStyle || 'decorative';
    const borderColor = colors.primary;
    
    switch (borderStyle) {
      case 'none':
        return { borderWidth: '0px', borderStyle: 'none' };
      case 'simple':
        return { borderWidth: '4px', borderStyle: 'solid', borderColor };
      case 'double':
        return { borderWidth: '6px', borderStyle: 'double', borderColor };
      case 'decorative':
        return { borderWidth: '8px', borderStyle: 'ridge', borderColor };
      case 'floral':
        return { borderWidth: '10px', borderStyle: 'groove', borderColor, borderRadius: '8px' };
      case 'geometric':
        return { borderWidth: '6px', borderStyle: 'dashed', borderColor };
      default:
        return { borderWidth: '8px', borderStyle: 'ridge', borderColor };
    }
  };
  
  const borderStyles = getBorderStyle();
  
  // Check if this is a wedding/marriage invitation (should show "Weds" section)
  const isWeddingInvitation = details.events.some(event =>
    event.name.toLowerCase().includes('wedding') ||
    event.name.toLowerCase().includes('marriage') ||
    event.name.toLowerCase().includes('विवाह') ||
    event.name.toLowerCase().includes('शादी')
  );

  return (
    <div className="w-full flex justify-center p-2 md:p-6 transition-all duration-500">
      <div
        ref={innerRef}
        data-invitation-card
        className={`w-full max-w-[480px] ${theme.wrapper} relative shadow-2xl overflow-hidden`}
        style={{
          minHeight: '800px',
          backgroundImage: `url("${theme.bgImage}")`,
          backgroundColor: colors.background,
          fontSize: `${fontSize}%`,
          lineHeight: `${lineSpacing}%`,
          ...borderStyles
        }}
      >
        {/* Background Mandala Overlay */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/arabesque.png")`
        }}></div>

        {/* Decorative corners - removed peacock images */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 opacity-30 pointer-events-none print:hidden" style={{ borderColor: theme.fill }}></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 opacity-30 pointer-events-none print:hidden" style={{ borderColor: theme.fill }}></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 opacity-30 pointer-events-none print:hidden" style={{ borderColor: theme.fill }}></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 opacity-30 pointer-events-none print:hidden" style={{ borderColor: theme.fill }}></div>

        {/* --- Content Scroll Wrapper --- */}
        <div className={`flex flex-col items-center py-10 px-4 ${alignmentClass} relative z-10 h-full`} style={{ color: colors.text }}>
          
          {/* Shubh Labh & Ganesha */}
          {details.showGanesha && (
            <div className="w-full mb-6">
              {/* Ganesha Mantra at Top */}
              <div className="text-center mb-4">
                <span className={`${fontMain} text-sm md:text-base font-bold tracking-wider ${theme.textPrimary} drop-shadow-md`} style={{ color: colors.primary }}>
                  || श्री गणेशाय नमः ||
                </span>
              </div>
              
              <div className="w-full flex justify-between items-start px-1 sm:px-2 md:px-4">
                {/* Shubh */}
                <div className={`flex flex-col items-center ${theme.textPrimary} w-16 sm:w-20`}>
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 border-2 sm:border-3 ${theme.border} rounded-lg flex items-center justify-center mb-1 sm:mb-2 shadow-lg relative overflow-hidden`}
                         style={{
                           background: `linear-gradient(135deg, ${theme.fill}15 0%, ${theme.fill}05 100%)`,
                           transform: 'rotate(45deg)'
                         }}>
                         <span className="text-xl sm:text-2xl font-bold" style={{ transform: 'rotate(-45deg)', color: theme.fill }}>卐</span>
                    </div>
                    <span className={`${fontMain} text-sm sm:text-base md:text-lg font-extrabold tracking-wider ${theme.textPrimary} drop-shadow-md`}>{L.shubhLabh[0]}</span>
                </div>
                
                {/* Center Ganesha Image */}
                <div className="flex flex-col items-center animate-fade-in -mt-2 flex-shrink-0">
                    <div className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-3 sm:border-4 ${theme.border} overflow-hidden shadow-2xl flex items-center justify-center`}
                         style={{ background: 'linear-gradient(135deg, #fff9e6 0%, #ffffff 100%)' }}>
                        <img
                            src={ganeshaImage}
                            alt="Lord Ganesha"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className={`text-xs md:text-sm font-bold mt-1 sm:mt-2 tracking-widest uppercase ${theme.textPrimary} drop-shadow-md`}>{L.ganeshMantra}</span>
                </div>

                {/* Labh */}
                <div className={`flex flex-col items-center ${theme.textPrimary} w-16 sm:w-20`}>
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 border-2 sm:border-3 ${theme.border} rounded-lg flex items-center justify-center mb-1 sm:mb-2 shadow-lg relative overflow-hidden`}
                         style={{
                           background: `linear-gradient(135deg, ${theme.fill}15 0%, ${theme.fill}05 100%)`,
                           transform: 'rotate(45deg)'
                         }}>
                        <span className="text-xl sm:text-2xl font-bold" style={{ transform: 'rotate(-45deg)', color: theme.fill }}>卐</span>
                    </div>
                    <span className={`${fontMain} text-sm sm:text-base md:text-lg font-extrabold tracking-wider ${theme.textPrimary} drop-shadow-md`}>{L.shubhLabh[1]}</span>
                </div>
              </div>
            </div>
          )}

          {/* Sanskrit Shloka */}
          <div className={`${fontMain} ${theme.textSecondary} text-xs md:text-sm italic mb-8 px-6 whitespace-pre-wrap leading-relaxed opacity-90`} style={{ color: colors.secondary }}>
            {details.shloka}
          </div>


          {/* --- Couple --- */}
          <div className="w-full my-4 space-y-4">
            
            {/* First Person (based on cardSide) */}
            <div className="relative group">
                <h1 className={`text-4xl md:text-6xl ${fontTitle} ${theme.textPrimary} drop-shadow-md`} style={{ color: colors.primary }}>
                    {details.cardSide === 'bride' ? details.brideName : details.groomName}
                </h1>
                <div className={`${fontMain} text-xs md:text-sm ${theme.textSecondary} mt-2 opacity-80`} style={{ color: colors.text }}>
                    {details.cardSide === 'bride'
                        ? `${L.daughterOf} ${details.brideMotherName} ${L.and} ${details.brideFatherName}`
                        : `${L.sonOf} ${details.groomMotherName} ${L.and} ${details.groomFatherName}`
                    }
                </div>
                {details.imageUrl && (
                  <div className={`w-32 h-32 mx-auto mt-3 rounded-full border-4 ${theme.border} overflow-hidden shadow-xl`}>
                     <img src={details.imageUrl} className="w-full h-full object-cover" />
                  </div>
                )}
            </div>

            {/* Weds - Only show for wedding/marriage invitations */}
            {isWeddingInvitation && (
              <div className={`flex items-center justify-center gap-4 ${theme.ornament} opacity-80`} style={{ color: colors.accent }}>
                 <span className="h-px w-12 bg-current"></span>
                 <span className={`${details.language === 'en' ? 'font-script text-2xl' : 'font-hindi text-xl'} font-bold`}>{L.weds}</span>
                 <span className="h-px w-12 bg-current"></span>
              </div>
            )}

            {/* Second Person (opposite of cardSide) */}
            <div className="relative">
                <h1 className={`text-4xl md:text-6xl ${fontTitle} ${theme.textPrimary} drop-shadow-md`} style={{ color: colors.primary }}>
                    {details.cardSide === 'bride' ? details.groomName : details.brideName}
                </h1>
                <div className={`${fontMain} text-xs md:text-sm ${theme.textSecondary} mt-2 opacity-80`} style={{ color: colors.text }}>
                    {details.cardSide === 'bride'
                        ? `${L.sonOf} ${details.groomMotherName} ${L.and} ${details.groomFatherName}`
                        : `${L.daughterOf} ${details.brideMotherName} ${L.and} ${details.brideFatherName}`
                    }
                </div>
            </div>
          </div>

          {/* --- Events Timeline --- */}
          <div className="w-full mt-8 space-y-4 px-2 md:px-4">
            {details.events.map((event, idx) => (
                <div key={event.id} className={`p-4 rounded-xl border ${theme.eventBg} backdrop-blur-sm relative overflow-hidden group shadow-sm`}>
                   {/* Decorative corner */}
                   <div className={`absolute top-0 left-0 w-8 h-8 border-t border-l ${theme.border} opacity-50`}></div>
                   <div className={`absolute bottom-0 right-0 w-8 h-8 border-b border-r ${theme.border} opacity-50`}></div>

                   <h3 className={`${fontTitle} text-2xl md:text-3xl ${theme.textPrimary} mb-2`} style={{ color: colors.secondary }}>{event.name}</h3>
                   <div className={`grid grid-cols-1 gap-1 ${fontMain} ${theme.textSecondary}`}>
                        <p className="font-semibold text-lg" style={{ color: colors.text }}>{formatDate(event.date)}</p>
                        <p className="text-sm opacity-90" style={{ color: colors.text }}>{event.time}</p>
                        <p className="text-sm mt-1 px-4 italic leading-tight" style={{ color: colors.text }}>{event.venue}</p>
                   </div>
                </div>
            ))}
          </div>

          {/* Poetic Message */}
          <div className="mt-8 mb-4 px-6">
            <p className={`${fontMain} text-sm md:text-base ${theme.textSecondary} italic leading-relaxed`} style={{ color: colors.accent }}>
                "{details.poeticMessage}"
            </p>
          </div>

          {/* --- Footer / RSVP --- */}
          <div className={`mt-6 w-full pt-4 border-t ${theme.border} border-opacity-30`}>
             <div className={`${fontMain} text-sm font-bold uppercase tracking-wider ${theme.textPrimary} mb-1`} style={{ color: colors.secondary }}>
                {L.rsvp}
             </div>
             <div className={`${fontMain} text-sm ${theme.textSecondary}`} style={{ color: colors.text }}>
                {details.rsvpName}
             </div>
             
             {/* WhatsApp Button (Visible but clean) */}
             {details.rsvpContact && (
                 <a 
                   href={`https://wa.me/${details.rsvpContact}?text=Namaste, we are happy to confirm our presence at the wedding of ${details.brideName} and ${details.groomName}.`}
                   target="_blank"
                   rel="noreferrer"
                   className={`inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full border ${theme.border} ${theme.textPrimary} text-xs font-bold hover:bg-white/10 transition-colors print:hidden`}
                 >
                    <Phone className="w-3 h-3" />
                    Confirm Presence
                 </a>
             )}
          </div>

        </div>
      </div>
    </div>
  );
};