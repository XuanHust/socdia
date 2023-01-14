/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        index: "url(assets/bg_tet.png)",
        gradiale65009:
          "linear-gradient(90deg, rgba(104,204,227,0) 0%, rgba(104,204,227,0.75) 15%, rgba(104,204,227,1) 50%, rgba(104,204,227,0.75) 85%, rgba(104,204,227,0) 100%)",
        gradialbt6a0503:
          "linear-gradient(180deg, rgba(106,5,3,1) 0%, rgba(246,208,100,1) 100%)",
        gradialtb49b8e8:
          "linear-gradient(180deg, rgba(73,184,232,1) 30%, rgba(93,210,242,1) 100%)",
        gradialtbee7030:
          "linear-gradient(180deg, rgba(238,112,48,1) 30%, rgba(238,165,108,1) 100%)",
        gradiallrffe412:
          "linear-gradient(-90deg, rgba(255,228,18,1) 30%, rgba(254,147,96,1) 100%)",
        gradialtb98eaff:
          "linear-gradient(180deg, rgba(68,191,234,1) 0%, rgba(255,255,255,1) 100%)",
        gradiallr13f9b6:
          "linear-gradient(90deg, rgba(19,249,182,1) 0%, rgba(126,213,85,1) 50%, rgba(242,179,10,1) 100%)",
        gradiallrf6dc00:
          "linear-gradient(90deg, rgba(246,220,0,1) 0%, rgba(252,161,69,1) 50%, rgba(255,142,103,1) 100%)",
        gradiallr5efff5:
          "linear-gradient(90deg, rgba(94,255,245,1) 0%, rgba(217,255,255,1) 100%)",
        gradiallr055a26:
          "linear-gradient(90deg, rgba(5,90,38,1) 0%, rgba(112,239,168,1) 100%)",
        gradiallr979797:
          "linear-gradient(90deg, rgba(151,151,151,1) 0%, rgba(60,60,60,1) 100%)",
        gradiallr5dfff4:
          "linear-gradient(90deg, rgba(93,255,244,1) 0%, rgba(255,255,255,1) 100%)",
        gradiallr055924:
          "linear-gradient(90deg, rgba(5,89,36,1) 0%, rgba(112,239,168,1) 100%)",
        gradiallr9e9e9e:
          "linear-gradient(90deg, rgba(158,158,158,1) 0%, rgba(60,60,60,1) 100%)",
        gradialtb803e00:
          "linear-gradient(180deg, rgba(128,62,0,1) 0%, rgba(231,124,5,1) 100%)",
        gradial40385a:
          "linear-gradient(90deg, rgba(64,56,90,0) 0%, rgba(64,56,90,0.75) 15%, rgba(64,56,90,1) 50%, rgba(64,56,90,0.75) 85%, rgba(64,56,90,0) 100%)",
        gradialtr01a0ff:
          "linear-gradient(180deg, rgba(1,160,255,1) 0%, rgba(50,153,214,1) 100%)",
        gradiattb9ce1f3:
          "linear-gradient(180deg, rgba(156,225,243,1) 0%, rgba(162,204,234,1) 100%)",
        gradialtb27b3cb:
          "linear-gradient(180deg, rgba(39,179,203,1) 0%, rgba(70,180,255,1) 100%)",
        gradialtb70b4e3:
          "linear-gradient(180deg, rgba(112,180,227,1) 0%, rgba(90,177,208,1) 100%)",
        gradialtb9e3e0a:
          "linear-gradient(180deg, rgba(158,62,10,1) 30%, rgba(255,96,15,1) 100%)",

      },
      index: "url('/images/bg-index.png')",
      fontFamily: {
        roboto: ['Roboto']
      },
      container: {
        center: true
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      strokeWidth: {
        0.5: 0.5,
        1.5: 1.5,
        2.5: 2.5
      }
    }
  },
  plugins: [],
}