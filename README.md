# 🕉️ शुभ विवाह - Hindu Wedding Invitation Creator

A modern, feature-rich web application for creating beautiful Hindu wedding invitation cards with AI-powered customization.

## ✨ Features

### Core Features
- **🎨 Multiple Themes**: Choose from 4 beautiful themes
  - Royal Dark - Elegant dark wood with gold accents
  - Cream Gold - Classic cream with red and gold
  - Maroon Classic - Traditional maroon with yellow
  - Floral Pink - Modern rose with soft tones

- **🤖 AI-Powered Messages**: Generate poetic wedding messages in Hindi using Google's Gemini AI

- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices

- **🌐 Bilingual Support**: Create invitations in Hindi or English

### Export Options
- **📄 PDF Export**: Print-ready PDF with preserved colors
- **🖼️ Image Download**: High-quality PNG image export
- **📤 Smart Share**: Share invitation details via native share or clipboard

### Professional Features
- **✅ Form Validation**: Real-time validation with helpful error messages
- **🔔 Notifications**: Success, error, and info notifications for all actions
- **⚡ Loading States**: Visual feedback for all async operations
- **🎯 Error Handling**: Graceful error handling with user-friendly messages

### Customization Options
- **👰 Couple Details**: Names and parent information
- **📅 Multiple Events**: Add unlimited wedding events (Haldi, Mehendi, Wedding, Reception)
- **📍 Venue Information**: Complete venue and timing details
- **📞 RSVP Integration**: WhatsApp integration for easy RSVP
- **🖼️ Photo Upload**: Add couple's photo to invitation
- **🕉️ Lord Ganesha**: Toggle Ganesha blessing on invitation
- **📝 Custom Messages**: Sanskrit shlokas and poetic messages

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shubh-vivah---hindu-wedding-invitation-creator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file and add your Gemini API key:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **AI Integration**: Google Gemini API
- **Image Export**: html2canvas
- **Icons**: Lucide React
- **Fonts**: 
  - Noto Serif Devanagari (Hindi)
  - Great Vibes (English Script)
  - Rozha One (Hindi Titles)

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 🎯 Usage Guide

### Creating an Invitation

1. **Fill in Details**:
   - Enter bride and groom names
   - Add parent names
   - Fill in event details (date, time, venue)
   - Add RSVP contact information

2. **Customize**:
   - Choose a theme
   - Select language (Hindi/English)
   - Upload couple's photo (optional)
   - Toggle Ganesha image
   - Add custom shloka or message

3. **Generate AI Message** (Optional):
   - Click "Generate with AI" to create a poetic message
   - The AI will generate a beautiful Hindi message based on your details

4. **Export**:
   - **Download Image**: Get a high-quality PNG
   - **Save PDF**: Print-ready PDF with colors
   - **Share**: Share invitation details via messaging apps

### Print Settings

For best print results:
1. Click "Save PDF"
2. In print dialog, enable "Background graphics"
3. Set margins to "None"
4. Choose appropriate paper size (A4 recommended)

## 🎨 Theme Customization

Each theme includes:
- Custom color palette
- Background textures
- Border styles
- Text colors optimized for readability

## 🔒 Privacy & Security

- No data is stored on servers
- All processing happens in your browser
- API keys are stored locally
- Images are processed client-side

## 🐛 Known Issues & Limitations

- AI message generation requires internet connection
- Image export quality depends on browser capabilities
- Some older browsers may not support all features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Google Fonts for beautiful typography
- Lucide for clean icons
- Transparent Textures for background patterns
- Google Gemini AI for intelligent message generation

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

Made with ❤️ for celebrating beautiful Hindu weddings
