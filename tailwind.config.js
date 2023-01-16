/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.75rem',
      'full': '9999px',
      'large': '12px',
    },

    extend: {
      backgroundImage: {
        'hero': "url('../public/assets/blog/preview/cover.jpg')",
        'homeCover': "url('https://iloveformentera.com/wp-content/uploads/2017/08/CalaSaona-1024x680.jpg')",
        'aysCover': "url('https://www.ibizagocar.com/wp-content/uploads/2016/08/how-to-go-from-ibiza-to-formentera-ibizagocar-2-1024x614.jpg')",
        'planningCover': "url('https://rare-gallery.com/mocahbig/466717-boat-vehicle-water-sea-aerial-view-sailboats-top-view.jpg')",
        'rsvpCover': "url('http://ibizaglobal.tv//wp-content/uploads/2017/05/night-market-las-dalias-ibiza-welcometoibiza-1.jpg')",
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {
        'cedarvilleCursive': ['Cedarville Cursive', 'cursive']
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
