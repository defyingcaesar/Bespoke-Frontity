const settings = {
  "name": "bespoke",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Bespoke Web",
      "description": "Marketing agency based in Mbombela, South Africa"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Blog",
              "/blog/"
            ],
            [
              "Our Work",
              "/our-work/"
            ],
            [
              "Tools",
              "/tools/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://www.bespokeweb.co.za/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
