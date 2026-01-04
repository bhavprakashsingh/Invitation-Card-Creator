// Theme configuration for wedding invitations
export interface ThemeStyle {
  wrapper: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  ornament: string;
  eventBg: string;
  bgImage: string;
  fill: string;
}

export const themeStyles: Record<string, ThemeStyle> = {
  // Original themes
  'royal-dark': {
    wrapper: "bg-[#2a1b12]",
    textPrimary: "text-amber-400",
    textSecondary: "text-amber-100",
    border: "border-amber-500",
    ornament: "text-amber-500",
    eventBg: "bg-black/30 border-amber-500/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#fbbf24"
  },
  'cream-gold': {
    wrapper: "bg-[#fffdf5]",
    textPrimary: "text-red-900",
    textSecondary: "text-red-800",
    border: "border-amber-500",
    ornament: "text-amber-500",
    eventBg: "bg-amber-50 border-amber-200",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#7f1d1d"
  },
  'maroon-classic': {
    wrapper: "bg-[#5D0016]",
    textPrimary: "text-yellow-400",
    textSecondary: "text-yellow-100",
    border: "border-yellow-500",
    ornament: "text-yellow-400",
    eventBg: "bg-white/10 border-yellow-500/30",
    bgImage: "https://www.transparenttextures.com/patterns/black-scales.png",
    fill: "#facc15"
  },
  'floral-pink': {
    wrapper: "bg-rose-50",
    textPrimary: "text-rose-900",
    textSecondary: "text-rose-800",
    border: "border-rose-300",
    ornament: "text-rose-400",
    eventBg: "bg-white/60 border-rose-200",
    bgImage: "https://www.transparenttextures.com/patterns/flower-trail.png",
    fill: "#881337"
  },

  // Red & Gold themes
  'crimson-gold': {
    wrapper: "bg-[#8B0000]",
    textPrimary: "text-yellow-300",
    textSecondary: "text-yellow-100",
    border: "border-yellow-400",
    ornament: "text-yellow-300",
    eventBg: "bg-black/20 border-yellow-400/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-matter.png",
    fill: "#fde047"
  },
  'ruby-elegance': {
    wrapper: "bg-[#9B111E]",
    textPrimary: "text-amber-300",
    textSecondary: "text-amber-100",
    border: "border-amber-400",
    ornament: "text-amber-300",
    eventBg: "bg-white/10 border-amber-400/30",
    bgImage: "https://www.transparenttextures.com/patterns/asfalt-dark.png",
    fill: "#fcd34d"
  },
  'scarlet-royal': {
    wrapper: "bg-[#FF2400]",
    textPrimary: "text-yellow-50",
    textSecondary: "text-yellow-100",
    border: "border-yellow-300",
    ornament: "text-yellow-200",
    eventBg: "bg-black/30 border-yellow-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#fef08a"
  },
  'burgundy-gold': {
    wrapper: "bg-[#800020]",
    textPrimary: "text-amber-400",
    textSecondary: "text-amber-200",
    border: "border-amber-500",
    ornament: "text-amber-400",
    eventBg: "bg-white/15 border-amber-500/30",
    bgImage: "https://www.transparenttextures.com/patterns/black-linen.png",
    fill: "#fbbf24"
  },
  'vermillion-classic': {
    wrapper: "bg-[#E34234]",
    textPrimary: "text-yellow-50",
    textSecondary: "text-yellow-100",
    border: "border-yellow-400",
    ornament: "text-yellow-300",
    eventBg: "bg-black/25 border-yellow-400/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-matter.png",
    fill: "#fde047"
  },

  // Blue themes
  'royal-blue': {
    wrapper: "bg-[#002366]",
    textPrimary: "text-amber-300",
    textSecondary: "text-amber-100",
    border: "border-amber-400",
    ornament: "text-amber-300",
    eventBg: "bg-white/10 border-amber-400/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-denim.png",
    fill: "#fcd34d"
  },
  'navy-gold': {
    wrapper: "bg-[#000080]",
    textPrimary: "text-yellow-300",
    textSecondary: "text-yellow-100",
    border: "border-yellow-400",
    ornament: "text-yellow-300",
    eventBg: "bg-white/15 border-yellow-400/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-matter.png",
    fill: "#fde047"
  },
  'sapphire-dream': {
    wrapper: "bg-[#0F52BA]",
    textPrimary: "text-amber-200",
    textSecondary: "text-amber-100",
    border: "border-amber-300",
    ornament: "text-amber-200",
    eventBg: "bg-white/20 border-amber-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#fef3c7"
  },
  'turquoise-bliss': {
    wrapper: "bg-[#30D5C8]",
    textPrimary: "text-blue-900",
    textSecondary: "text-blue-800",
    border: "border-blue-600",
    ornament: "text-blue-700",
    eventBg: "bg-white/60 border-blue-300",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#1e3a8a"
  },
  'azure-elegance': {
    wrapper: "bg-[#007FFF]",
    textPrimary: "text-yellow-100",
    textSecondary: "text-yellow-50",
    border: "border-yellow-300",
    ornament: "text-yellow-200",
    eventBg: "bg-white/20 border-yellow-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-denim.png",
    fill: "#fef3c7"
  },

  // Green themes
  'emerald-gold': {
    wrapper: "bg-[#046307]",
    textPrimary: "text-amber-300",
    textSecondary: "text-amber-100",
    border: "border-amber-400",
    ornament: "text-amber-300",
    eventBg: "bg-white/15 border-amber-400/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-matter.png",
    fill: "#fcd34d"
  },
  'jade-classic': {
    wrapper: "bg-[#00A86B]",
    textPrimary: "text-yellow-100",
    textSecondary: "text-yellow-50",
    border: "border-yellow-300",
    ornament: "text-yellow-200",
    eventBg: "bg-white/20 border-yellow-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#fef3c7"
  },
  'forest-elegance': {
    wrapper: "bg-[#228B22]",
    textPrimary: "text-amber-200",
    textSecondary: "text-amber-100",
    border: "border-amber-300",
    ornament: "text-amber-200",
    eventBg: "bg-white/15 border-amber-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-denim.png",
    fill: "#fef3c7"
  },
  'mint-fresh': {
    wrapper: "bg-[#98FF98]",
    textPrimary: "text-green-900",
    textSecondary: "text-green-800",
    border: "border-green-600",
    ornament: "text-green-700",
    eventBg: "bg-white/60 border-green-300",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#14532d"
  },
  'olive-gold': {
    wrapper: "bg-[#808000]",
    textPrimary: "text-yellow-200",
    textSecondary: "text-yellow-100",
    border: "border-yellow-400",
    ornament: "text-yellow-300",
    eventBg: "bg-white/20 border-yellow-400/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-matter.png",
    fill: "#fef3c7"
  },

  // Purple themes
  'royal-purple': {
    wrapper: "bg-[#7851A9]",
    textPrimary: "text-amber-200",
    textSecondary: "text-amber-100",
    border: "border-amber-300",
    ornament: "text-amber-200",
    eventBg: "bg-white/15 border-amber-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#fef3c7"
  },
  'lavender-dream': {
    wrapper: "bg-[#E6E6FA]",
    textPrimary: "text-purple-900",
    textSecondary: "text-purple-800",
    border: "border-purple-400",
    ornament: "text-purple-600",
    eventBg: "bg-white/60 border-purple-200",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#581c87"
  },
  'plum-elegance': {
    wrapper: "bg-[#8E4585]",
    textPrimary: "text-pink-200",
    textSecondary: "text-pink-100",
    border: "border-pink-300",
    ornament: "text-pink-200",
    eventBg: "bg-white/20 border-pink-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-denim.png",
    fill: "#fce7f3"
  },
  'violet-gold': {
    wrapper: "bg-[#8F00FF]",
    textPrimary: "text-yellow-200",
    textSecondary: "text-yellow-100",
    border: "border-yellow-300",
    ornament: "text-yellow-200",
    eventBg: "bg-white/15 border-yellow-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-matter.png",
    fill: "#fef3c7"
  },
  'mauve-classic': {
    wrapper: "bg-[#E0B0FF]",
    textPrimary: "text-purple-900",
    textSecondary: "text-purple-800",
    border: "border-purple-500",
    ornament: "text-purple-700",
    eventBg: "bg-white/60 border-purple-300",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#581c87"
  },

  // Orange & Yellow themes
  'sunset-gold': {
    wrapper: "bg-[#FF6347]",
    textPrimary: "text-yellow-100",
    textSecondary: "text-yellow-50",
    border: "border-yellow-300",
    ornament: "text-yellow-200",
    eventBg: "bg-black/20 border-yellow-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#fef3c7"
  },
  'amber-glow': {
    wrapper: "bg-[#FFBF00]",
    textPrimary: "text-orange-900",
    textSecondary: "text-orange-800",
    border: "border-orange-600",
    ornament: "text-orange-700",
    eventBg: "bg-white/60 border-orange-300",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#7c2d12"
  },
  'saffron-royal': {
    wrapper: "bg-[#FF9933]",
    textPrimary: "text-white",
    textSecondary: "text-orange-50",
    border: "border-white",
    ornament: "text-white",
    eventBg: "bg-black/20 border-white/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-matter.png",
    fill: "#ffffff"
  },
  'tangerine-dream': {
    wrapper: "bg-[#F28500]",
    textPrimary: "text-yellow-100",
    textSecondary: "text-yellow-50",
    border: "border-yellow-300",
    ornament: "text-yellow-200",
    eventBg: "bg-white/20 border-yellow-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#fef3c7"
  },
  'golden-hour': {
    wrapper: "bg-[#FFD700]",
    textPrimary: "text-amber-900",
    textSecondary: "text-amber-800",
    border: "border-amber-700",
    ornament: "text-amber-800",
    eventBg: "bg-white/60 border-amber-400",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#78350f"
  },

  // Pink themes
  'rose-gold': {
    wrapper: "bg-[#B76E79]",
    textPrimary: "text-amber-100",
    textSecondary: "text-amber-50",
    border: "border-amber-300",
    ornament: "text-amber-200",
    eventBg: "bg-white/20 border-amber-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#fef3c7"
  },
  'blush-elegance': {
    wrapper: "bg-[#FFC0CB]",
    textPrimary: "text-pink-900",
    textSecondary: "text-pink-800",
    border: "border-pink-500",
    ornament: "text-pink-700",
    eventBg: "bg-white/60 border-pink-300",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#831843"
  },
  'magenta-royal': {
    wrapper: "bg-[#FF00FF]",
    textPrimary: "text-yellow-100",
    textSecondary: "text-yellow-50",
    border: "border-yellow-300",
    ornament: "text-yellow-200",
    eventBg: "bg-black/20 border-yellow-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-matter.png",
    fill: "#fef3c7"
  },
  'coral-dream': {
    wrapper: "bg-[#FF7F50]",
    textPrimary: "text-white",
    textSecondary: "text-orange-50",
    border: "border-white",
    ornament: "text-white",
    eventBg: "bg-white/20 border-white/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#ffffff"
  },
  'fuchsia-classic': {
    wrapper: "bg-[#FF00FF]",
    textPrimary: "text-pink-100",
    textSecondary: "text-pink-50",
    border: "border-pink-300",
    ornament: "text-pink-200",
    eventBg: "bg-white/15 border-pink-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-denim.png",
    fill: "#fce7f3"
  },

  // Brown & Beige themes
  'chocolate-gold': {
    wrapper: "bg-[#7B3F00]",
    textPrimary: "text-amber-300",
    textSecondary: "text-amber-100",
    border: "border-amber-400",
    ornament: "text-amber-300",
    eventBg: "bg-white/15 border-amber-400/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#fcd34d"
  },
  'caramel-elegance': {
    wrapper: "bg-[#C68E17]",
    textPrimary: "text-amber-900",
    textSecondary: "text-amber-800",
    border: "border-amber-700",
    ornament: "text-amber-800",
    eventBg: "bg-white/60 border-amber-400",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#78350f"
  },
  'bronze-royal': {
    wrapper: "bg-[#CD7F32]",
    textPrimary: "text-yellow-100",
    textSecondary: "text-yellow-50",
    border: "border-yellow-300",
    ornament: "text-yellow-200",
    eventBg: "bg-black/20 border-yellow-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-matter.png",
    fill: "#fef3c7"
  },
  'sand-classic': {
    wrapper: "bg-[#F4A460]",
    textPrimary: "text-amber-900",
    textSecondary: "text-amber-800",
    border: "border-amber-700",
    ornament: "text-amber-800",
    eventBg: "bg-white/60 border-amber-400",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#78350f"
  },
  'copper-dream': {
    wrapper: "bg-[#B87333]",
    textPrimary: "text-amber-100",
    textSecondary: "text-amber-50",
    border: "border-amber-300",
    ornament: "text-amber-200",
    eventBg: "bg-white/20 border-amber-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#fef3c7"
  },

  // Black & White themes
  'midnight-gold': {
    wrapper: "bg-[#000000]",
    textPrimary: "text-amber-400",
    textSecondary: "text-amber-200",
    border: "border-amber-500",
    ornament: "text-amber-400",
    eventBg: "bg-white/10 border-amber-500/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-matter.png",
    fill: "#fbbf24"
  },
  'pearl-elegance': {
    wrapper: "bg-[#F0EAD6]",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    border: "border-gray-600",
    ornament: "text-gray-700",
    eventBg: "bg-white/60 border-gray-300",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#1f2937"
  },
  'onyx-royal': {
    wrapper: "bg-[#353839]",
    textPrimary: "text-amber-300",
    textSecondary: "text-amber-100",
    border: "border-amber-400",
    ornament: "text-amber-300",
    eventBg: "bg-white/15 border-amber-400/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-denim.png",
    fill: "#fcd34d"
  },
  'ivory-classic': {
    wrapper: "bg-[#FFFFF0]",
    textPrimary: "text-amber-900",
    textSecondary: "text-amber-800",
    border: "border-amber-600",
    ornament: "text-amber-700",
    eventBg: "bg-amber-50 border-amber-300",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#78350f"
  },
  'silver-dream': {
    wrapper: "bg-[#C0C0C0]",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    border: "border-gray-700",
    ornament: "text-gray-800",
    eventBg: "bg-white/60 border-gray-400",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#1f2937"
  },

  // Multicolor themes
  'rainbow-celebration': {
    wrapper: "bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500",
    textPrimary: "text-white",
    textSecondary: "text-white",
    border: "border-white",
    ornament: "text-white",
    eventBg: "bg-white/20 border-white/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-matter.png",
    fill: "#ffffff"
  },
  'peacock-splendor': {
    wrapper: "bg-gradient-to-br from-blue-600 via-green-500 to-purple-600",
    textPrimary: "text-yellow-100",
    textSecondary: "text-yellow-50",
    border: "border-yellow-300",
    ornament: "text-yellow-200",
    eventBg: "bg-white/15 border-yellow-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#fef3c7"
  },
  'lotus-garden': {
    wrapper: "bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400",
    textPrimary: "text-white",
    textSecondary: "text-pink-50",
    border: "border-white",
    ornament: "text-white",
    eventBg: "bg-white/20 border-white/30",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#ffffff"
  },
  'mandala-magic': {
    wrapper: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500",
    textPrimary: "text-yellow-100",
    textSecondary: "text-yellow-50",
    border: "border-yellow-300",
    ornament: "text-yellow-200",
    eventBg: "bg-black/20 border-yellow-300/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-matter.png",
    fill: "#fef3c7"
  },
  'rangoli-colors': {
    wrapper: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600",
    textPrimary: "text-white",
    textSecondary: "text-white",
    border: "border-white",
    ornament: "text-white",
    eventBg: "bg-white/20 border-white/30",
    bgImage: "https://www.transparenttextures.com/patterns/dark-wood.png",
    fill: "#ffffff"
  },

  // Pastel themes
  'pastel-dream': {
    wrapper: "bg-[#FFE5E5]",
    textPrimary: "text-pink-800",
    textSecondary: "text-pink-700",
    border: "border-pink-400",
    ornament: "text-pink-600",
    eventBg: "bg-white/60 border-pink-200",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#9f1239"
  },
  'soft-romance': {
    wrapper: "bg-[#FFF0F5]",
    textPrimary: "text-rose-800",
    textSecondary: "text-rose-700",
    border: "border-rose-400",
    ornament: "text-rose-600",
    eventBg: "bg-white/60 border-rose-200",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#881337"
  },
  'gentle-breeze': {
    wrapper: "bg-[#E0F2F7]",
    textPrimary: "text-blue-900",
    textSecondary: "text-blue-800",
    border: "border-blue-400",
    ornament: "text-blue-700",
    eventBg: "bg-white/60 border-blue-200",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#1e3a8a"
  },
  'cotton-candy': {
    wrapper: "bg-[#FFCCF9]",
    textPrimary: "text-purple-900",
    textSecondary: "text-purple-800",
    border: "border-purple-400",
    ornament: "text-purple-700",
    eventBg: "bg-white/60 border-purple-200",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#581c87"
  },
  'spring-blossom': {
    wrapper: "bg-[#F0FFF0]",
    textPrimary: "text-green-900",
    textSecondary: "text-green-800",
    border: "border-green-500",
    ornament: "text-green-700",
    eventBg: "bg-white/60 border-green-200",
    bgImage: "https://www.transparenttextures.com/patterns/binding-light.png",
    fill: "#14532d"
  }
};

// Made with Bob
