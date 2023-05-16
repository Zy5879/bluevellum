/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      title: `1.5rem;`,
      subtitle: `1.3rem`,
      paragraph: `1.0rem;`,
      nav: `0.9rem`,
    },
    extend: {
      backgroundImage: {
        wallet:
          "url('https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
        bag: "url('https://images.unsplash.com/photo-1624687943971-e86af76d57de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
        access:
          "url('https://images.unsplash.com/photo-1461141346587-763ab02bced9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80')",
      },
    },
  },
  plugins: [],
};
