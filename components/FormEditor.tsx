import * as React from 'react';
import { InvitationDetails, Language, Theme, WeddingEvent, DEFAULT_DETAILS, FontFamily, BorderStyle, TextAlign } from '../types';
import { Loader2, Wand2, Plus, Trash2, Globe, Heart, Calendar, Users, FileText, Sparkles, Palette, Type, AlignCenter } from 'lucide-react';
import { themeStyles } from '../themes';
import { COMPLETE_TEMPLATES, TEMPLATE_CATEGORIES } from '../templates';

interface FormEditorProps {
  details: InvitationDetails;
  onChange: (field: keyof InvitationDetails, value: any) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenerateAI: () => void;
  isGenerating: boolean;
  onGaneshaImageUpload?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Keep old templates for backward compatibility
const OLD_TEMPLATES: Record<string, Partial<InvitationDetails>> = {
  // Complete Hindu Wedding Template
  'Traditional Hindu Wedding': {
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
  
  // Tilak Ceremony Template
  'Tilak Ceremony': {
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
  
  // Engagement Ceremony Template
  'Engagement Ceremony': {
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
};

export const FormEditor: React.FC<FormEditorProps> = ({
  details,
  onChange,
  onImageUpload,
  onGenerateAI,
  isGenerating,
  onGaneshaImageUpload
}) => {
  
  // Handler for Ganesha image upload
  const handleGaneshaImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange('ganeshaImageUrl', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const [activeTab, setActiveTab] = React.useState<'basics' | 'couple' | 'events' | 'extra' | 'customize'>('basics');

  const applyTemplate = (name: string) => {
    const template = COMPLETE_TEMPLATES[name] || OLD_TEMPLATES[name];
    if (template) {
        Object.keys(template).forEach(key => {
            // @ts-ignore
            onChange(key, template[key]);
        });
    }
  };

  const inputClass = "w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none text-sm transition-all";
  const labelClass = "block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide";
  const sectionClass = "bg-white p-5 rounded-xl border border-gray-100 shadow-sm animate-fade-in";

  // Event Management Handlers
  const handleAddEvent = () => {
    const newEvent: WeddingEvent = {
        id: Date.now().toString(),
        name: details.language === 'hi' ? 'नया कार्यक्रम' : 'New Event',
        date: new Date().toISOString().split('T')[0],
        time: '10:00 AM',
        venue: ''
    };
    onChange('events', [...details.events, newEvent]);
  };

  const handleUpdateEvent = (id: string, field: keyof WeddingEvent, value: string) => {
    const updatedEvents = details.events.map(ev => 
        ev.id === id ? { ...ev, [field]: value } : ev
    );
    onChange('events', updatedEvents);
  };

  const handleRemoveEvent = (id: string) => {
    onChange('events', details.events.filter(ev => ev.id !== id));
  };

  return (
    <div className="bg-gray-50/80 backdrop-blur-md rounded-2xl shadow-xl lg:h-full flex flex-col overflow-hidden border border-white/50">
      
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 z-10">
        <h2 className="text-lg font-bold text-amber-900 flex items-center">
            Edit Invitation
        </h2>
        
        {/* Language Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
            <button 
                onClick={() => onChange('language', 'hi')}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${details.language === 'hi' ? 'bg-amber-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
            >
                हिंदी
            </button>
            <button 
                onClick={() => onChange('language', 'en')}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${details.language === 'en' ? 'bg-amber-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
            >
                ENG
            </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto bg-white border-b border-gray-200 hide-scrollbar">
        {[
            { id: 'basics', icon: Globe, label: 'Theme' },
            { id: 'couple', icon: Heart, label: 'Couple' },
            { id: 'events', icon: Calendar, label: 'Events' },
            { id: 'extra', icon: FileText, label: 'Texts' },
            { id: 'customize', icon: Palette, label: 'Style' }
        ].map(tab => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex flex-col items-center p-3 min-w-[70px] border-b-2 transition-colors ${activeTab === tab.id ? 'border-amber-600 text-amber-800 bg-amber-50' : 'border-transparent text-gray-500 hover:text-amber-600 hover:bg-gray-50'}`}
            >
                <tab.icon className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-bold uppercase">{tab.label}</span>
            </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {/* --- THEME TAB --- */}
        {activeTab === 'basics' && (
            <div className={sectionClass}>
                 <div className="mb-6">
                    <label className={labelClass}><Sparkles className="inline w-3 h-3 mr-1"/> Complete Invitation Templates (25+)</label>
                    <p className="text-[10px] text-gray-500 mb-2">Ready-to-use invitations organized by ceremony type - all details included!</p>
                    <div className="max-h-[400px] overflow-y-auto p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200 space-y-3">
                        {Object.entries(TEMPLATE_CATEGORIES).map(([category, templates]) => (
                            <div key={category}>
                                <h4 className="text-[11px] font-bold text-green-800 mb-2 uppercase tracking-wide">{category}</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {templates.map(name => (
                                        <button
                                            key={name}
                                            onClick={() => applyTemplate(name)}
                                            className="text-xs py-2 px-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-sm hover:shadow-md text-left"
                                            title={`Apply ${name} - Complete invitation`}
                                        >
                                            {name.split(' - ')[1] || name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>

                <div className="mb-4">
                    <label className={labelClass}>Visual Theme (50 Options)</label>
                    <select
                        value={details.theme}
                        onChange={(e) => onChange('theme', e.target.value as Theme)}
                        className={`${inputClass} font-semibold`}
                    >
                        <optgroup label="🔴 Red & Gold">
                            <option value="royal-dark">Royal Dark</option>
                            <option value="maroon-classic">Maroon Classic</option>
                            <option value="crimson-gold">Crimson Gold</option>
                            <option value="ruby-elegance">Ruby Elegance</option>
                            <option value="scarlet-royal">Scarlet Royal</option>
                            <option value="burgundy-gold">Burgundy Gold</option>
                            <option value="vermillion-classic">Vermillion Classic</option>
                        </optgroup>
                        <optgroup label="🔵 Blue">
                            <option value="royal-blue">Royal Blue</option>
                            <option value="navy-gold">Navy Gold</option>
                            <option value="sapphire-dream">Sapphire Dream</option>
                            <option value="turquoise-bliss">Turquoise Bliss</option>
                            <option value="azure-elegance">Azure Elegance</option>
                        </optgroup>
                        <optgroup label="🟢 Green">
                            <option value="emerald-gold">Emerald Gold</option>
                            <option value="jade-classic">Jade Classic</option>
                            <option value="forest-elegance">Forest Elegance</option>
                            <option value="mint-fresh">Mint Fresh</option>
                            <option value="olive-gold">Olive Gold</option>
                        </optgroup>
                        <optgroup label="🟣 Purple">
                            <option value="royal-purple">Royal Purple</option>
                            <option value="lavender-dream">Lavender Dream</option>
                            <option value="plum-elegance">Plum Elegance</option>
                            <option value="violet-gold">Violet Gold</option>
                            <option value="mauve-classic">Mauve Classic</option>
                        </optgroup>
                        <optgroup label="🟠 Orange & Yellow">
                            <option value="sunset-gold">Sunset Gold</option>
                            <option value="amber-glow">Amber Glow</option>
                            <option value="saffron-royal">Saffron Royal</option>
                            <option value="tangerine-dream">Tangerine Dream</option>
                            <option value="golden-hour">Golden Hour</option>
                        </optgroup>
                        <optgroup label="🌸 Pink">
                            <option value="floral-pink">Floral Pink</option>
                            <option value="rose-gold">Rose Gold</option>
                            <option value="blush-elegance">Blush Elegance</option>
                            <option value="magenta-royal">Magenta Royal</option>
                            <option value="coral-dream">Coral Dream</option>
                            <option value="fuchsia-classic">Fuchsia Classic</option>
                        </optgroup>
                        <optgroup label="🟤 Brown & Beige">
                            <option value="chocolate-gold">Chocolate Gold</option>
                            <option value="caramel-elegance">Caramel Elegance</option>
                            <option value="bronze-royal">Bronze Royal</option>
                            <option value="sand-classic">Sand Classic</option>
                            <option value="copper-dream">Copper Dream</option>
                        </optgroup>
                        <optgroup label="⚫ Black & White">
                            <option value="cream-gold">Cream Gold</option>
                            <option value="midnight-gold">Midnight Gold</option>
                            <option value="pearl-elegance">Pearl Elegance</option>
                            <option value="onyx-royal">Onyx Royal</option>
                            <option value="ivory-classic">Ivory Classic</option>
                            <option value="silver-dream">Silver Dream</option>
                        </optgroup>
                        <optgroup label="🌈 Multicolor">
                            <option value="rainbow-celebration">Rainbow Celebration</option>
                            <option value="peacock-splendor">Peacock Splendor</option>
                            <option value="lotus-garden">Lotus Garden</option>
                            <option value="mandala-magic">Mandala Magic</option>
                            <option value="rangoli-colors">Rangoli Colors</option>
                        </optgroup>
                        <optgroup label="🎨 Pastel">
                            <option value="pastel-dream">Pastel Dream</option>
                            <option value="soft-romance">Soft Romance</option>
                            <option value="gentle-breeze">Gentle Breeze</option>
                            <option value="cotton-candy">Cotton Candy</option>
                            <option value="spring-blossom">Spring Blossom</option>
                        </optgroup>
                    </select>
                    
                    {/* Theme Preview */}
                    <div className="mt-2 p-3 rounded-lg border-2" style={{
                        backgroundColor: themeStyles[details.theme]?.wrapper.includes('gradient')
                            ? 'transparent'
                            : themeStyles[details.theme]?.wrapper.replace('bg-', '').replace('[', '').replace(']', ''),
                        background: themeStyles[details.theme]?.wrapper.includes('gradient')
                            ? themeStyles[details.theme]?.wrapper.replace('bg-', '')
                            : undefined,
                        borderColor: themeStyles[details.theme]?.fill
                    }}>
                        <p className="text-xs font-bold text-center" style={{ color: themeStyles[details.theme]?.fill }}>
                            Theme Preview
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-3 mb-4 p-3 bg-amber-50 rounded-lg">
                    <input 
                        type="checkbox" 
                        checked={details.showGanesha}
                        onChange={(e) => onChange('showGanesha', e.target.checked)}
                        className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500"
                    />
                    <label className="text-sm font-semibold text-amber-900">Show Lord Ganesha & Shubh Labh</label>
                </div>

                <div>
                    <label className={labelClass}>Top Mantra / Shloka</label>
                    <textarea 
                        value={details.shloka}
                        onChange={(e) => onChange('shloka', e.target.value)}
                        className={`${inputClass} font-hindi text-amber-900 bg-amber-50/50`}
                        rows={3}
                    />
                </div>
            </div>
        )}

        {/* --- COUPLE TAB --- */}
        {activeTab === 'couple' && (
            <>
                <div className={sectionClass}>
                    <label className={labelClass}>Card Created From (कार्ड किसकी ओर से)</label>
                    <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
                        <button
                            onClick={() => onChange('cardSide', 'bride')}
                            className={`flex-1 px-4 py-2 rounded-md text-sm font-bold transition-colors ${details.cardSide === 'bride' ? 'bg-pink-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
                        >
                            👰 Bride Side (वधू पक्ष)
                        </button>
                        <button
                            onClick={() => onChange('cardSide', 'groom')}
                            className={`flex-1 px-4 py-2 rounded-md text-sm font-bold transition-colors ${details.cardSide === 'groom' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
                        >
                            🤵 Groom Side (वर पक्ष)
                        </button>
                    </div>
                </div>

                <div className={sectionClass}>
                    <h3 className="text-sm font-bold text-pink-600 mb-3 border-b border-pink-100 pb-2">Bride Side (वधू पक्ष)</h3>
                    <div className="space-y-3">
                        <input placeholder="Bride Name" value={details.brideName} onChange={e => onChange('brideName', e.target.value)} className={inputClass} />
                        <div className="grid grid-cols-2 gap-2">
                            <input placeholder="Father" value={details.brideFatherName} onChange={e => onChange('brideFatherName', e.target.value)} className={inputClass} />
                            <input placeholder="Mother" value={details.brideMotherName} onChange={e => onChange('brideMotherName', e.target.value)} className={inputClass} />
                        </div>
                    </div>
                </div>

                <div className={sectionClass}>
                    <h3 className="text-sm font-bold text-blue-600 mb-3 border-b border-blue-100 pb-2">Groom Side (वर पक्ष)</h3>
                    <div className="space-y-3">
                        <input placeholder="Groom Name" value={details.groomName} onChange={e => onChange('groomName', e.target.value)} className={inputClass} />
                        <div className="grid grid-cols-2 gap-2">
                            <input placeholder="Father" value={details.groomFatherName} onChange={e => onChange('groomFatherName', e.target.value)} className={inputClass} />
                            <input placeholder="Mother" value={details.groomMotherName} onChange={e => onChange('groomMotherName', e.target.value)} className={inputClass} />
                        </div>
                    </div>
                </div>
            </>
        )}

        {/* --- EVENTS TAB --- */}
        {activeTab === 'events' && (
            <div className="space-y-4">
                {details.events.map((event, index) => (
                    <div key={event.id} className="bg-white p-4 rounded-xl border border-gray-200 relative group">
                        <div className="absolute top-2 right-2">
                            {details.events.length > 1 && (
                                <button onClick={() => handleRemoveEvent(event.id)} className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                        <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase">Event {index + 1}</h4>
                        
                        <div className="space-y-3">
                            <input 
                                value={event.name} 
                                onChange={e => handleUpdateEvent(event.id, 'name', e.target.value)} 
                                placeholder="Event Name (e.g. Sangeet)"
                                className="w-full font-bold text-lg border-b border-gray-200 focus:border-amber-500 outline-none pb-1"
                            />
                            <div className="grid grid-cols-2 gap-2">
                                <input type="date" value={event.date} onChange={e => handleUpdateEvent(event.id, 'date', e.target.value)} className={inputClass} />
                                <input type="text" value={event.time} onChange={e => handleUpdateEvent(event.id, 'time', e.target.value)} placeholder="Time" className={inputClass} />
                            </div>
                            <textarea 
                                value={event.venue} 
                                onChange={e => handleUpdateEvent(event.id, 'venue', e.target.value)} 
                                placeholder="Full Venue Address"
                                className={inputClass}
                                rows={2}
                            />
                        </div>
                    </div>
                ))}
                
                <button 
                    onClick={handleAddEvent}
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-bold text-sm hover:border-amber-500 hover:text-amber-600 transition-all flex items-center justify-center gap-2"
                >
                    <Plus className="w-4 h-4" /> Add Another Event
                </button>
            </div>
        )}

        {/* --- TEXTS TAB --- */}
        {activeTab === 'extra' && (
            <div className={sectionClass}>
                 <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <label className={labelClass}>Poetic Message</label>
                        <button 
                            onClick={onGenerateAI}
                            disabled={isGenerating}
                            className="text-[10px] font-bold flex items-center text-amber-600 bg-amber-50 px-2 py-1 rounded-full hover:bg-amber-100"
                        >
                            {isGenerating ? <Loader2 className="w-3 h-3 animate-spin mr-1"/> : <Wand2 className="w-3 h-3 mr-1"/>}
                            AI Rewrite
                        </button>
                    </div>
                    <textarea 
                        value={details.poeticMessage}
                        onChange={(e) => onChange('poeticMessage', e.target.value)}
                        className={`${inputClass} min-h-[80px]`}
                    />
                 </div>

                 <div className="mb-4">
                    <label className={labelClass}>RSVP Name (Family)</label>
                    <input 
                        value={details.rsvpName}
                        onChange={(e) => onChange('rsvpName', e.target.value)}
                        className={inputClass}
                    />
                 </div>

                 <div>
                    <label className={labelClass}>WhatsApp Number (for RSVP)</label>
                    <div className="flex items-center">
                        <span className="p-2.5 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-500 text-sm">
                            +91
                        </span>
                        <input 
                            value={details.rsvpContact}
                            onChange={(e) => onChange('rsvpContact', e.target.value)}
                            className={`${inputClass} rounded-l-none`}
                            placeholder="9876543210"
                            type="tel"
                        />
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1">Visitors can click this to WhatsApp you.</p>
                 </div>
            </div>
        )}

        {/* --- CUSTOMIZE TAB --- */}
        {activeTab === 'customize' && (
            <>
                {/* Font Customization */}
                <div className={sectionClass}>
                    <h3 className="text-sm font-bold text-purple-600 mb-3 border-b border-purple-100 pb-2 flex items-center">
                        <Type className="w-4 h-4 mr-2" /> Font & Typography
                    </h3>
                    
                    <div className="space-y-4">
                        <div>
                            <label className={labelClass}>Font Family</label>
                            <select
                                value={details.fontFamily || 'default'}
                                onChange={(e) => onChange('fontFamily', e.target.value as FontFamily)}
                                className={inputClass}
                            >
                                <option value="default">Default (Mixed Hindi/English)</option>
                                <option value="hindi">Traditional Hindi (Devanagari)</option>
                                <option value="serif">Classic Serif (Elegant)</option>
                                <option value="sans">Modern Sans-Serif</option>
                                <option value="elegant">Elegant Script</option>
                                <option value="modern">Modern Geometric</option>
                            </select>
                        </div>

                        <div>
                            <label className={labelClass}>Font Size: {details.fontSize || 100}%</label>
                            <input
                                type="range"
                                min="80"
                                max="120"
                                value={details.fontSize || 100}
                                onChange={(e) => onChange('fontSize', parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                                <span>Smaller</span>
                                <span>Normal</span>
                                <span>Larger</span>
                            </div>
                        </div>

                        <div>
                            <label className={labelClass}>Line Spacing: {details.lineSpacing || 150}%</label>
                            <input
                                type="range"
                                min="100"
                                max="200"
                                value={details.lineSpacing || 150}
                                onChange={(e) => onChange('lineSpacing', parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                                <span>Compact</span>
                                <span>Normal</span>
                                <span>Spacious</span>
                            </div>
                        </div>

                        <div>
                            <label className={labelClass}>Text Alignment</label>
                            <div className="flex gap-2">
                                {[
                                    { value: 'left', label: 'Left', icon: '⬅️' },
                                    { value: 'center', label: 'Center', icon: '↔️' },
                                    { value: 'right', label: 'Right', icon: '➡️' }
                                ].map(align => (
                                    <button
                                        key={align.value}
                                        onClick={() => onChange('textAlign', align.value as TextAlign)}
                                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold transition-all ${
                                            (details.textAlign || 'center') === align.value
                                                ? 'bg-purple-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        {align.icon} {align.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Border Customization */}
                <div className={sectionClass}>
                    <h3 className="text-sm font-bold text-purple-600 mb-3 border-b border-purple-100 pb-2 flex items-center">
                        <AlignCenter className="w-4 h-4 mr-2" /> Border & Frame
                    </h3>
                    
                    <div>
                        <label className={labelClass}>Border Style</label>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { value: 'none', label: 'No Border', preview: '⬜' },
                                { value: 'simple', label: 'Simple Line', preview: '▭' },
                                { value: 'double', label: 'Double Line', preview: '▬' },
                                { value: 'decorative', label: 'Decorative', preview: '✦' },
                                { value: 'floral', label: 'Floral', preview: '🌸' },
                                { value: 'geometric', label: 'Geometric', preview: '◆' }
                            ].map(border => (
                                <button
                                    key={border.value}
                                    onClick={() => onChange('borderStyle', border.value as BorderStyle)}
                                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                                        (details.borderStyle || 'decorative') === border.value
                                            ? 'bg-purple-600 text-white shadow-md'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    {border.preview} {border.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Color Customization */}
                <div className={sectionClass}>
                    <h3 className="text-sm font-bold text-purple-600 mb-3 border-b border-purple-100 pb-2 flex items-center">
                        <Palette className="w-4 h-4 mr-2" /> Custom Colors (Override Theme)
                    </h3>
                    <p className="text-[10px] text-gray-500 mb-3">Leave empty to use theme colors</p>
                    
                    <div className="space-y-3">
                        {[
                            { key: 'primary', label: 'Primary Color', desc: 'Main headings & borders' },
                            { key: 'secondary', label: 'Secondary Color', desc: 'Subheadings & accents' },
                            { key: 'accent', label: 'Accent Color', desc: 'Highlights & decorations' },
                            { key: 'text', label: 'Text Color', desc: 'Body text' },
                            { key: 'background', label: 'Background Color', desc: 'Card background' }
                        ].map(color => (
                            <div key={color.key} className="flex items-center gap-2">
                                <div className="flex-1">
                                    <label className="text-[10px] font-semibold text-gray-700">{color.label}</label>
                                    <p className="text-[9px] text-gray-400">{color.desc}</p>
                                </div>
                                <input
                                    type="color"
                                    value={details.customColors?.[color.key as keyof typeof details.customColors] || '#000000'}
                                    onChange={(e) => {
                                        const newColors = { ...details.customColors, [color.key]: e.target.value };
                                        onChange('customColors', newColors);
                                    }}
                                    className="w-16 h-10 rounded border-2 border-gray-300 cursor-pointer"
                                />
                                {details.customColors?.[color.key as keyof typeof details.customColors] && (
                                    <button
                                        onClick={() => {
                                            const newColors = { ...details.customColors };
                                            delete newColors[color.key as keyof typeof newColors];
                                            onChange('customColors', newColors);
                                        }}
                                        className="text-xs text-red-500 hover:text-red-700 font-bold"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Customization */}
                <div className={sectionClass}>
                    <h3 className="text-sm font-bold text-purple-600 mb-3 border-b border-purple-100 pb-2 flex items-center">
                        🖼️ Upload Images
                    </h3>
                    <p className="text-[10px] text-gray-500 mb-3">Upload custom images for Lord Ganesha and couple photo</p>
                    
                    <div className="space-y-4">
                        <div>
                            <label className={labelClass}>Lord Ganesha Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleGaneshaImageUpload}
                                className="block w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                            />
                            <p className="text-[9px] text-gray-400 mt-1">Upload your own Ganesha image or leave empty for default</p>
                            {details.ganeshaImageUrl && (
                                <div className="mt-2 flex items-center gap-2">
                                    <img src={details.ganeshaImageUrl} alt="Preview" className="w-16 h-16 object-cover rounded border-2 border-purple-200" />
                                    <button
                                        onClick={() => onChange('ganeshaImageUrl', undefined)}
                                        className="text-xs text-red-500 hover:text-red-700 font-bold"
                                    >
                                        ✕ Remove
                                    </button>
                                </div>
                            )}
                        </div>

                        <div>
                            <label className={labelClass}>Photo Upload</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={onImageUpload}
                                className="block w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                            />
                            <p className="text-[9px] text-gray-400 mt-1">Upload a photo (couple, person, or celebrant)</p>
                            {details.imageUrl && (
                                <div className="mt-2 flex items-center gap-2">
                                    <img src={details.imageUrl} alt="Preview" className="w-16 h-16 object-cover rounded-full border-2 border-purple-200" />
                                    <button
                                        onClick={() => onChange('imageUrl', null)}
                                        className="text-xs text-red-500 hover:text-red-700 font-bold"
                                    >
                                        ✕ Remove
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Reset Customization */}
                <div className={sectionClass}>
                    <h3 className="text-sm font-bold text-red-600 mb-3 border-b border-red-100 pb-2">Reset Customization</h3>
                    <p className="text-[10px] text-gray-500 mb-3">Reset all style customizations to default values</p>
                    <button
                        onClick={() => {
                            onChange('fontFamily', 'default');
                            onChange('borderStyle', 'decorative');
                            onChange('textAlign', 'center');
                            onChange('customColors', {});
                            onChange('fontSize', 100);
                            onChange('lineSpacing', 150);
                            onChange('ganeshaImageUrl', undefined);
                            onChange('imageUrl', null);
                        }}
                        className="w-full py-2 px-4 bg-red-50 text-red-600 rounded-lg font-bold text-sm hover:bg-red-100 transition-colors border-2 border-red-200"
                    >
                        🔄 Reset All Customizations
                    </button>
                </div>
            </>
        )}

      </div>
    </div>
  );
};

// Made with Bob
