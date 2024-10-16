// eslint-disable-next-line @typescript-eslint/no-var-requires
/** @type {import('tailwindcss').Config} */
import path from 'node:path'

module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    path.join(path.dirname(require.resolve('@coinbase/onchainkit')), '**/*.js,ts,jsx,tsx,mdx'),
  ],
  theme: {
    container: {
      center: 'true',
      screens: {
        ios: '320px',
        samsungS8: '360px',
        xs: '390px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xls': '1350px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
    extend: {
      colors: {
        grey: {
          DEFAULT: '#949494',
          light: '#f6f6f6',
        },
        background: {
          DEFAULT: '#f2e8cd',
        },
      },
      fontFamily: {
        nounish: ['LondrinaSolid-Regular', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: (theme) => ({
        gradientTopRight:
          'linear-gradient(229.7deg,#ffbb88 10.61%,#ff7cba 26.17%,#887bff 31.93%,#03c7f6 46.54%,#0F1014 54.36%)',

        gradientTopRightLight:
          // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #ff7eb9 20.61%, #ff65a3 31.93%, #7afcff 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // red wow !
          // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #84fab0 20.61%, #8fd3f4 31.93%, #a6c1ee 46.54%, rgba(255, 255, 255, 0.3) 80.36%)", // blue-green !
          // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #ffecd2 20.61%, #fcb69f 31.93%, #ff6f61 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // red-orange !
          'linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #fbc2eb 20.61%, #a6c1ee 31.93%, #d4fc79 46.54%, rgba(255, 255, 255, 0.3) 50.36%)', // lime-blue-pink!
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #ff9a8b 20.61%, #ff6a88 31.93%, #ff99ac 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // deep-red-pink
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #a1ffce 20.61%, #faffd1 31.93%, #ffc3a0 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // cool-orange-green

        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #ffabbb 20.61%, #ffdfba 31.93%, #fcd1d1 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // pink-orange
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #a1c4fd 20.61%, #c2e9fb 31.93%, #b3e5fc 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // blue-lightblue
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #fad0c4 20.61%, #ffd1ff 31.93%, #fbc2eb 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // peach-pink
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #f6d365 20.61%, #fda085 31.93%, #fcb69f 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // orange-yellow
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #a8edea 20.61%, #fed6e3 31.93%, #c3cfe2 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // teal-pink
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #ff9a9e 20.61%, #fad0c4 31.93%, #fad0c4 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // red-peach

        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #a18cd1 20.61%, #fbc2eb 31.93%, #f5f7fa 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // purple
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #ff9a9e 20.61%, #fad0c4 31.93%, #fad0c4 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // orange
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #ff758c 20.61%, #ff7eb3 31.93%, #ffe39f 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // orange-pink
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #ffafbd 20.61%, #ffc3a0 31.93%, #ff96f9 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // pink-yellow-orange
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #f6d365 20.61%, #fda085 31.93%, #fcb69f 46.54%, rgba(255, 255, 255, 0.3) 50.36%)", // orange-yellow
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3) 14.85%, #a1c4fd 20.61%, #c2e9fb 31.93%, #8fd3f4 46.54%, rgba(255, 255, 255, 0.3) 50.36%)",
        // "linear-gradient(210.7deg, rgba(255, 255, 255, 0.3)  14.85%, #6edbff 20.61%,  #ffadd4 31.93%,  #ffe0b3 46.54%, rgba(255, 255, 255, 0.3) 50.36%)",

        gradientTopRightLightHeader:
          'linear-gradient(30.7deg,#ffe0b3  0.61%,  #ffadd4 17.93%,  #6edbff 49.54%, rgba(255, 255, 255, 0.3)  56.36% )',

        gradientTopRightLightHeaderSm:
          'linear-gradient(30.7deg, #ffadd4 0.93%,  #6edbff 41.54%, rgba(255, 255, 255, 0.3)  64.36% )',
      }),
    },
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [require('tailwindcss-animate')],
}
