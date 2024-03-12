/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      fontFamily :{
        roman : "roman",
        media : "media",
      } ,
      animation: {
        "spins":"spin 10s linear infinite",
        'spinslow': 'spinM 8s linear infinite alternate',
        "movex":"movex 12s linear infinite",
        "updown":"updown 5s linear infinite alternate",
        "updownlg":"updownlg 5s linear infinite alternate",
        "pop1":"pop 1s .5s",
        "pop2":"pop 1s 1.5s",
        "pop3":"pop 1s 2.5s",
      },
      keyframes: {
        pop:{
          "0%":{opacity:"0" },
          "10%":{opacity:"1"},
          "90%":{opacity:"1" },
          "100%":{opacity:"0"},

        },
        spinM: {
          '25%': { transform: 'translateY(-10%) rotate(20deg)' },
          '75%': { transform: 'translateY(15%) rotate(20deg)' },
        },
        movex:{
          "0%":{transform:"translateX(0%)"},
          "50%":{transform:"translateX(-50%)"},
          "100%":{transform:"translateX(-100%)"}
        },
        updown:{
          "0%":{transform:"translateY(0%)"},
          "25%":{transform:"translateY(-10%)"},
          "50%":{transform:"translateY(0%)"},
          "100%":{transform:"translateY(30%) scale(1.1)"}
        },
        updownlg:{
          "0%":{transform:"translateY(0%)"},
          "25%":{transform:"translateY(-10%)"},
          "50%":{transform:"translate(10%, 0%)"},
          "100%":{transform:"translate(20% , 10%) "}
        }
      },
    },
  },
  plugins: [],
}

