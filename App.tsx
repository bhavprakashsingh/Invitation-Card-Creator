import * as React from 'react';
import { InvitationDetails, DEFAULT_DETAILS } from './types';
import { generateHindiMessage } from './services/geminiService';
import { InvitationPreview } from './components/InvitationPreview';
import { FormEditor } from './components/FormEditor';
import { Download, Share2, Image as ImageIcon, CheckCircle, AlertCircle, X } from 'lucide-react';
import html2canvas from 'html2canvas';

type NotificationType = 'success' | 'error' | 'info';

interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

const App: React.FC = () => {
  const [details, setDetails] = React.useState<InvitationDetails>(DEFAULT_DETAILS);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [notifications, setNotifications] = React.useState<Notification[]>([]);
  const [validationErrors, setValidationErrors] = React.useState<string[]>([]);
  const [showShareMenu, setShowShareMenu] = React.useState(false);
  const printRef = React.useRef<HTMLDivElement>(null);

  // Notification system
  const showNotification = (message: string, type: NotificationType = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4000);
  };

  // Validation
  const validateForm = (): boolean => {
    const errors: string[] = [];
    
    // Check if this is a wedding-related event by looking at event names
    const eventNames = details.events.map(e => e.name.toLowerCase()).join(' ');
    const isWeddingRelated = eventNames.includes('wedding') ||
                             eventNames.includes('विवाह') ||
                             eventNames.includes('marriage') ||
                             eventNames.includes('engagement') ||
                             eventNames.includes('सगाई') ||
                             eventNames.includes('tilak') ||
                             eventNames.includes('तिलक') ||
                             eventNames.includes('roka') ||
                             eventNames.includes('रोका') ||
                             eventNames.includes('haldi') ||
                             eventNames.includes('हल्दी') ||
                             eventNames.includes('mehendi') ||
                             eventNames.includes('मेहंदी') ||
                             eventNames.includes('sangeet') ||
                             eventNames.includes('संगीत') ||
                             eventNames.includes('reception') ||
                             eventNames.includes('स्वागत');
    
    // Only validate bride/groom fields for wedding-related events
    if (isWeddingRelated) {
      if (!details.brideName.trim()) errors.push('Bride name is required');
      if (!details.groomName.trim()) errors.push('Groom name is required');
      if (!details.brideFatherName.trim()) errors.push('Bride\'s father name is required');
      if (!details.groomFatherName.trim()) errors.push('Groom\'s father name is required');
    }
    
    if (details.events.length === 0) errors.push('At least one event is required');
    
    details.events.forEach((event, idx) => {
      if (!event.name.trim()) errors.push(`Event ${idx + 1}: Name is required`);
      if (!event.date) errors.push(`Event ${idx + 1}: Date is required`);
      if (!event.time.trim()) errors.push(`Event ${idx + 1}: Time is required`);
      if (!event.venue.trim()) errors.push(`Event ${idx + 1}: Venue is required`);
    });

    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleFieldChange = (field: keyof InvitationDetails, value: any) => {
    setDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setDetails(prev => ({ ...prev, imageUrl: url }));
    }
  };

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    try {
      const newMessage = await generateHindiMessage(details);
      setDetails(prev => ({ ...prev, poeticMessage: newMessage }));
      showNotification('AI message generated successfully!', 'success');
    } catch (error) {
      showNotification('Failed to generate AI message. Please try again.', 'error');
      console.error('AI generation error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    if (!validateForm()) {
      showNotification('Please fill in all required fields before printing', 'error');
      return;
    }
    window.print();
    showNotification('Opening print dialog...', 'info');
  };

  const handleDownloadImage = async () => {
    if (!validateForm()) {
      showNotification('Please fill in all required fields before downloading', 'error');
      return;
    }

    if (!printRef.current) {
      showNotification('Preview not ready. Please wait and try again.', 'error');
      return;
    }
    
    setIsDownloading(true);
    
    try {
      // Wait longer for fonts and styles to load completely
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const element = printRef.current;
      
      // Get the actual dimensions of the element
      const rect = element.getBoundingClientRect();
      
      const canvas = await html2canvas(element, {
        scale: 2, // Reduced scale for better compatibility
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: rect.width,
        height: rect.height,
        windowWidth: rect.width,
        windowHeight: rect.height,
        scrollX: 0,
        scrollY: 0,
        x: 0,
        y: 0,
        // Ensure fonts are loaded
        foreignObjectRendering: false,
        // Force rendering of all elements with proper styles
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.querySelector('[data-invitation-card]');
          if (clonedElement) {
            // Ensure all styles are applied
            (clonedElement as HTMLElement).style.transform = 'none';
            (clonedElement as HTMLElement).style.position = 'relative';
            
            // Force font rendering by ensuring font-family is set
            const allElements = clonedElement.querySelectorAll('*');
            allElements.forEach((el) => {
              const htmlEl = el as HTMLElement;
              const computedStyle = window.getComputedStyle(el);
              
              // Preserve font properties
              htmlEl.style.fontFamily = computedStyle.fontFamily;
              htmlEl.style.fontSize = computedStyle.fontSize;
              htmlEl.style.fontWeight = computedStyle.fontWeight;
              htmlEl.style.lineHeight = computedStyle.lineHeight;
              htmlEl.style.textAlign = computedStyle.textAlign;
              htmlEl.style.color = computedStyle.color;
              htmlEl.style.whiteSpace = computedStyle.whiteSpace;
              htmlEl.style.wordBreak = computedStyle.wordBreak;
              
              // Preserve layout properties
              htmlEl.style.display = computedStyle.display;
              htmlEl.style.position = computedStyle.position;
              htmlEl.style.padding = computedStyle.padding;
              htmlEl.style.margin = computedStyle.margin;
              htmlEl.style.width = computedStyle.width;
              htmlEl.style.height = computedStyle.height;
            });
          }
        }
      });
      
      // Convert to blob for better quality
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          
          // Generate filename based on available names
          let filename = 'invitation.png';
          if (details.brideName && details.groomName) {
            filename = `${details.brideName}-${details.groomName}-invitation.png`;
          } else if (details.groomName) {
            filename = `${details.groomName}-invitation.png`;
          } else if (details.brideName) {
            filename = `${details.brideName}-invitation.png`;
          } else if (details.events.length > 0) {
            filename = `${details.events[0].name}-invitation.png`;
          }
          
          link.download = filename;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
          showNotification('Invitation downloaded successfully!', 'success');
        } else {
          throw new Error('Failed to create image blob');
        }
      }, 'image/png', 1.0);
      
    } catch (error) {
      showNotification('Failed to download image. Please try again.', 'error');
      console.error('Download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const getShareText = () => {
    const eventDetails = details.events[0];
    
    // Generate title based on event type and available names
    let title = '🕉️ Invitation 🕉️';
    if (eventDetails) {
      const eventName = eventDetails.name.toLowerCase();
      if (eventName.includes('birthday') || eventName.includes('जन्मदिन')) {
        title = '🎂 Birthday Invitation 🎂';
      } else if (eventName.includes('mundan') || eventName.includes('मुंडन')) {
        title = '🕉️ Mundan Ceremony Invitation 🕉️';
      } else if (eventName.includes('anniversary') || eventName.includes('जयंती')) {
        title = '💐 Anniversary Celebration 💐';
      } else if (eventName.includes('wedding') || eventName.includes('विवाह')) {
        title = '🕉️ Wedding Invitation 🕉️';
      }
    }
    
    // Generate names line based on what's available
    let namesLine = '';
    if (details.brideName && details.groomName) {
      namesLine = `${details.brideName} & ${details.groomName}`;
    } else if (details.groomName) {
      namesLine = details.groomName;
    } else if (details.brideName) {
      namesLine = details.brideName;
    }
    
    return `${title}

${namesLine}

${eventDetails ? `📅 ${new Date(eventDetails.date).toLocaleDateString('en-IN', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})}
⏰ ${eventDetails.time}
📍 ${eventDetails.venue}` : ''}

${details.poeticMessage}

RSVP: ${details.rsvpName}
${details.rsvpContact ? `📞 https://wa.me/${details.rsvpContact}` : ''}`.trim();
  };

  const handleShareWhatsApp = () => {
    if (!validateForm()) {
      showNotification('Please fill in all required fields before sharing', 'error');
      return;
    }
    const text = encodeURIComponent(getShareText());
    window.open(`https://wa.me/?text=${text}`, '_blank');
    setShowShareMenu(false);
    showNotification('Opening WhatsApp...', 'success');
  };

  const handleShareFacebook = () => {
    if (!validateForm()) {
      showNotification('Please fill in all required fields before sharing', 'error');
      return;
    }
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    setShowShareMenu(false);
    showNotification('Opening Facebook...', 'success');
  };

  const handleShareInstagram = async () => {
    if (!validateForm()) {
      showNotification('Please fill in all required fields before sharing', 'error');
      return;
    }
    // Instagram doesn't have direct web sharing, so copy text to clipboard
    try {
      await navigator.clipboard.writeText(getShareText());
      showNotification('Text copied! Open Instagram and paste in your story or post', 'success');
      setShowShareMenu(false);
    } catch (err) {
      showNotification('Unable to copy to clipboard', 'error');
    }
  };

  const handleShare = async () => {
     if (!validateForm()) {
       showNotification('Please fill in all required fields before sharing', 'error');
       return;
     }

     const shareText = getShareText();

     if (navigator.share) {
       try {
           // Generate title based on available names
           let shareTitle = 'Invitation';
           if (details.brideName && details.groomName) {
             shareTitle = `${details.brideName} weds ${details.groomName}`;
           } else if (details.groomName) {
             shareTitle = `Invitation for ${details.groomName}`;
           } else if (details.brideName) {
             shareTitle = `Invitation for ${details.brideName}`;
           } else if (details.events.length > 0) {
             shareTitle = details.events[0].name;
           }
           
           await navigator.share({
               title: shareTitle,
               text: shareText,
           });
           showNotification('Invitation shared successfully!', 'success');
       } catch (error) {
           if ((error as Error).name !== 'AbortError') {
             showNotification('Failed to share invitation', 'error');
           }
       }
     } else {
         // Show share menu for desktop
         setShowShareMenu(!showShareMenu);
     }
  };

  return (
    <div className="min-h-screen bg-neutral-900 font-sans text-gray-900 overflow-x-hidden">
      
      {/* Notifications */}
      <div className="fixed top-20 right-4 z-[60] space-y-2 max-w-sm">
        {notifications.map(notif => (
          <div
            key={notif.id}
            className={`flex items-center gap-3 p-4 rounded-lg shadow-lg backdrop-blur-sm animate-slide-in ${
              notif.type === 'success' ? 'bg-green-500/90 text-white' :
              notif.type === 'error' ? 'bg-red-500/90 text-white' :
              'bg-blue-500/90 text-white'
            }`}
          >
            {notif.type === 'success' ? <CheckCircle className="w-5 h-5" /> :
             notif.type === 'error' ? <AlertCircle className="w-5 h-5" /> :
             <AlertCircle className="w-5 h-5" />}
            <p className="text-sm font-medium">{notif.message}</p>
          </div>
        ))}
      </div>

      {/* Navbar */}
      <nav className="bg-[#2a1b12] text-amber-500 p-4 shadow-2xl sticky top-0 z-50 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-3xl filter drop-shadow-md">🕉️</span>
            <div>
                <h1 className="text-xl md:text-2xl font-hindiTitle tracking-wide text-amber-400 leading-none">
                शुभ अवसर
                </h1>
                <p className="text-[10px] text-amber-600 uppercase tracking-widest font-bold">Invitation Card Creator</p>
            </div>
          </div>
          <div className="flex gap-2 relative">
            <button
                onClick={handleDownloadImage}
                disabled={isDownloading}
                className="flex items-center bg-green-600 text-white px-3 py-2 rounded-lg font-bold hover:bg-green-500 transition-colors text-xs md:text-sm border border-green-700/50 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Download as Image"
            >
                {isDownloading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin md:mr-2" />
                ) : (
                  <ImageIcon className="w-4 h-4 md:mr-2" />
                )}
                <span className="hidden md:inline">{isDownloading ? 'Downloading...' : 'Image'}</span>
            </button>
            
            {/* Share Button with Dropdown */}
            <div className="relative">
              <button
                  onClick={handleShare}
                  className="flex items-center bg-gray-800 text-amber-500 px-3 py-2 rounded-lg font-bold hover:bg-gray-700 transition-colors text-xs md:text-sm border border-amber-900/50"
                  title="Share Invitation"
              >
                  <Share2 className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">Share</span>
              </button>
              
              {/* Share Menu */}
              {showShareMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-amber-500/30 rounded-lg shadow-xl z-50 overflow-hidden">
                  <div className="flex items-center justify-between p-3 border-b border-amber-500/20">
                    <span className="text-amber-400 font-bold text-sm">Share via</span>
                    <button
                      onClick={() => setShowShareMenu(false)}
                      className="text-amber-400 hover:text-amber-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={handleShareWhatsApp}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors text-left"
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium">WhatsApp</span>
                  </button>
                  <button
                    onClick={handleShareFacebook}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors text-left"
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium">Facebook</span>
                  </button>
                  <button
                    onClick={handleShareInstagram}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors text-left"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium">Instagram</span>
                  </button>
                </div>
              )}
            </div>
            
            <button
                onClick={handlePrint}
                className="flex items-center bg-amber-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-amber-500 transition-colors text-xs md:text-sm shadow-lg shadow-amber-900/20"
                title="Save as PDF"
            >
                <Download className="w-4 h-4 mr-2" />
                Save PDF
            </button>
          </div>
        </div>
      </nav>

      {/* Validation Errors */}
      {validationErrors.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-red-500 font-bold mb-2">Please fix the following errors:</h3>
                <ul className="list-disc list-inside space-y-1 text-red-400 text-sm">
                  {validationErrors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:h-[calc(100vh-100px)]">
          
          {/* Editor Panel - Scrollable Side */}
          <div className="lg:w-[400px] xl:w-[450px] shrink-0 lg:h-full overflow-hidden">
            <FormEditor
              details={details}
              onChange={handleFieldChange}
              onImageUpload={handleImageUpload}
              onGenerateAI={handleGenerateAI}
              isGenerating={isGenerating}
            />
          </div>

          {/* Preview Panel - Centered & Responsive */}
          <div className="flex-1 bg-neutral-800/50 rounded-2xl p-4 md:p-8 shadow-inner border border-white/5 overflow-y-auto flex items-start justify-center min-h-[600px] lg:min-h-0">
            <div id="printable-area" className="w-full flex justify-center scale-[0.85] sm:scale-90 md:scale-100 origin-top transition-transform duration-300">
              <InvitationPreview details={details} innerRef={printRef} />
            </div>
          </div>

        </div>
      </main>

      {/* Print Styles */}
      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        @media print {
          @page {
            margin: 0;
            size: auto;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body * {
            visibility: hidden;
          }
          
          #printable-area, #printable-area * {
            visibility: visible;
          }
          
          #printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 0;
            margin: 0;
            transform: scale(1) !important;
          }
          
          nav, button, .print\\:hidden {
            display: none !important;
          }
          
          body {
            background: white;
            margin: 0;
            padding: 0;
          }
          
          html {
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default App;