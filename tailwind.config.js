/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'team-bg': "url('./images/team.png')",
        }
      },
    },
    plugins: [],
  }