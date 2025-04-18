module.exports = {
    ci: {
      collect: {
        url: [
          "http://localhost:57901/buy",
          "http://localhost:57901/sell",
          "http://localhost:57901/exchange",
          "http://localhost:57901/faq",
          "http://localhost:57901/home",
          "http://localhost:57901/login",
          "http://localhost:57901/register",
          "http://localhost:57901/contact"
        ],
        startServerCommand: "npm run start",
      },
      upload: {
        target: "temporary-public-storage",
      },
    }
  };
  