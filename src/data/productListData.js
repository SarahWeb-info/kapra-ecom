import { getData } from "./filterData";

const productListData = async () => {
  
  let result = {
    "meta": {
      "version": "v1.0",
      "status": 200,
      "copywrite": "https://devAPI.ai",
      "isFreeShip": "y",
      "page": "1",
      "categoryID": "100003269"
    },
    "body": [
      {
        "productId": "3256801385071141",
        "productType": "natural",
        "title": "2020 New Designs Elegant Sleeveless Spaghetti Strap V-Neck Backless Simple Lace Wedding Gowns Dress Bridal Mermaid",
        "prices": {
          "skuId": "12000016633356107",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 110,
            "minPriceType": 1,
            "formattedPrice": "US $110.00",
            "cent": 11000
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "https://ae04.alicdn.com/kf/Hf632d45cfe0d4ca5afff6e78aa4b5e57f.jpg",
          "imgWidth": 800,
          "imgHeight": 899,
          "imgType": "3"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000063",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Extra 2% off with coins",
              "tagStyle": {
                "color": "#FD384F",
                "position": "2"
              }
            },
            "source": "flexiCoin_new_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 10
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256801385071141.html"
      },
      {
        "productId": "3256805969247012",
        "productType": "natural",
        "title": "RODDRSYA Princess Wedding Dress Detachable Puff Sleeves Sweetheart Bride Party Gowns Lace Applique A-Line Tulle robe de mariée",
        "prices": {
          "skuId": "12000036023616685",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 35,
            "minPriceDiscount": 35,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 115,
            "minPriceType": 2,
            "formattedPrice": "US $115.00",
            "cent": 11500
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/S661ff3bda83e4388b2f5e9dd1a13f3a6R.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000063",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Extra 2% off with coins",
              "tagStyle": {
                "color": "#FD384F",
                "position": "2"
              }
            },
            "source": "flexiCoin_new_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 10
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805969247012.html"
      },
      {
        "productId": "3256805654640675",
        "productType": "ad",
        "title": "Lakshmigown New White A Line Bridal Dress 2024 Vestidos De Novias Beading Elegant Women Beach Wedding Gowns Sleeveless",
        "prices": {
          "skuId": "12000034540144374",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 31,
            "minPriceDiscount": 31,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 131.09,
            "minPriceType": 2,
            "formattedPrice": "US $131.09",
            "cent": 13109
          },
          "taxRate": "0"
        },
        "sales": {
          "raw": "3 sold",
          "value": 3
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/S95fc48715b2142b18cafd339fd2c912ac.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805654640675.html"
      },
      {
        "productId": "3256805970036982",
        "productType": "natural",
        "title": "2023 Ivory Mermaid Lace Detachable Train Vintage Bridal Wedding Dreses Gowns Robe De Mariée ZJ047",
        "prices": {
          "skuId": "12000036025984696",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 30,
            "minPriceDiscount": 30,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 140.9,
            "minPriceType": 2,
            "formattedPrice": "US $140.90",
            "cent": 14090
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/Sb838506239254698ad7f6816225fcf437.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000063",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Extra 5% off with coins",
              "tagStyle": {
                "color": "#FD384F",
                "position": "2"
              }
            },
            "source": "flexiCoin_new_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 10
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805970036982.html"
      },
      {
        "productId": "3256805965429836",
        "productType": "natural",
        "title": "Long Sleeves Backless Boat Neck Wedding Dresses Mermaid Low-cut Sexy Formal Bride Gown Simple Pure white vestidos de novia",
        "prices": {
          "skuId": "12000035998188061",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 47,
            "minPriceDiscount": 47,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 94.53,
            "minPriceType": 2,
            "formattedPrice": "US $94.53",
            "cent": 9453
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/S135018e439f04ed2a3b6a311c8b3a656X.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805965429836.html"
      },
      {
        "productId": "3256803430612833",
        "productType": "natural",
        "title": "2022 Boho Wedding Dress Sexy A-Line Sheer V Neck Sleeveless Lace Appliques Floor Length Sweep Train Formal Bride Gowns",
        "prices": {
          "skuId": "12000026525997781",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 20,
            "minPriceDiscount": 20,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 93.6,
            "minPriceType": 2,
            "formattedPrice": "US $93.60",
            "cent": 9360
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "https://ae04.alicdn.com/kf/Hdc3feacf06134073baf5112c4eddc47eT.jpg",
          "imgWidth": 800,
          "imgHeight": 800,
          "imgType": "11"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "885603359",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "+Shipping: $8.42",
              "tagStyle": {
                "color": "#757575",
                "position": "4"
              }
            },
            "source": "Shipping_Fee_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 100
          }
        ],
        "link": "https://www.aliexpress.com/item/3256803430612833.html"
      },
      {
        "productId": "3256805977661699",
        "productType": "natural",
        "title": "RODDRSYA Elegant Long Sleeves Lace Wedding Dress 2024 Applique A-Line Bride Gowns Hochzeitskleider Tulle Civil robe de mariée",
        "prices": {
          "skuId": "12000036063061569",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 30,
            "minPriceDiscount": 30,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 115,
            "minPriceType": 2,
            "formattedPrice": "US $115.00",
            "cent": 11500
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/Sad2c58a143404351876c9a6bd5f11c6ex.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000063",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Extra 2% off with coins",
              "tagStyle": {
                "color": "#FD384F",
                "position": "2"
              }
            },
            "source": "flexiCoin_new_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 10
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805977661699.html"
      },
      {
        "productId": "3256805956203214",
        "productType": "natural",
        "title": "PERFECT Bohemian V-Neck Long Sleeves Wedding Dresses Lace Appliqued Chiffon Bridal Gowns For Women Robe Vestidos De Gala 2023",
        "prices": {
          "skuId": "12000035951819823",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 50,
            "minPriceDiscount": 50,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 89.24,
            "minPriceType": 2,
            "formattedPrice": "US $89.24",
            "cent": 8924
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/Sf37c6e35bcbf48ee875494bac64a1b11Q.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805956203214.html"
      },
      {
        "productId": "3256805964520408",
        "productType": "natural",
        "title": "Wedding Dress Pink/Blue Long Prom Dresses Straps Tiered Skirt A-Line Party Dresses Pleated Tulle Formal Gowns For Women 2023",
        "prices": {
          "skuId": "12000035994923232",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 53,
            "minPriceDiscount": 53,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 70.98,
            "minPriceType": 2,
            "formattedPrice": "US $70.98",
            "cent": 7098
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/S363a3c34ea3446ef923bf537ab10bf69I.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805964520408.html"
      },
      {
        "productId": "3256805969981766",
        "productType": "natural",
        "title": "2023 White Lace Long Sleeves Satin Vintage Bridal Wedding Dreses Gowns  Robe De Mariée ZJ046",
        "prices": {
          "skuId": "12000036025882563",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 30,
            "minPriceDiscount": 30,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 120.62,
            "minPriceType": 2,
            "formattedPrice": "US $120.62",
            "cent": 12062
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/S939d6a1714424820865f75067ceecdf1k.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000063",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Extra 5% off with coins",
              "tagStyle": {
                "color": "#FD384F",
                "position": "2"
              }
            },
            "source": "flexiCoin_new_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 10
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805969981766.html"
      },
      {
        "productId": "3256803469830517",
        "productType": "ad",
        "title": "Sexy A-Line Backless Wedding Dress 2023 Vintage Lace Applique Beaded Off White Tulle Wedding Gowns Trouwjurk Long Bridal Dress",
        "prices": {
          "skuId": "12000026693682377",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "originalPrice": {
            "priceType": "original_price",
            "currencyCode": "USD",
            "minPrice": 185,
            "minPriceType": 1,
            "formattedPrice": "US $185.00",
            "cent": 18500
          },
          "salePrice": {
            "discount": 31,
            "minPriceDiscount": 31,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 127.65,
            "minPriceType": 2,
            "formattedPrice": "US $127.65",
            "cent": 12765
          },
          "taxRate": "0"
        },
        "sales": {
          "raw": "81 sold",
          "value": 81
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/H1ed5d61d93ee47c59da4555d1365f05ed.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000025",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "image",
              "tagImgUrl": "https://ae01.alicdn.com/kf/Saa94d6f7f18e4bf5ad94bb3ddb0a7870A/228x64.png",
              "tagImgWidth": 228,
              "tagImgHeight": 64,
              "tagStyle": {
                "position": "1"
              }
            },
            "source": "real_super_deals_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 330
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256803469830517.html"
      },
      {
        "productId": "3256805965369956",
        "productType": "natural",
        "title": "Zavana Classic With cloak Wedding Dresses For Women Satin Mermaid Jewel Neck Zipper 3D Appliques Vestidos De Novia Brautmode",
        "prices": {
          "skuId": "12000035998251282",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 25,
            "minPriceDiscount": 25,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 109.67,
            "minPriceType": 2,
            "formattedPrice": "US $109.67",
            "cent": 10967
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/S340697cca7ad4bf8a3aa58acb1da4802u.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805965369956.html"
      },
      {
        "productId": "3256805964476492",
        "productType": "natural",
        "title": "Graceful Appliques One Shoulder Evening Dress Elegant Sweetheart Neck Sheath Cocktail Party Gown Romantic Vestidos De Novia",
        "prices": {
          "skuId": "12000035994529629",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 50,
            "minPriceDiscount": 50,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 160,
            "minPriceType": 2,
            "formattedPrice": "US $160.00",
            "cent": 16000
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/S1c9b0c89ac9f4aa48957c4172b83acdaQ.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000063",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Extra 2% off with coins",
              "tagStyle": {
                "color": "#FD384F",
                "position": "2"
              }
            },
            "source": "flexiCoin_new_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 10
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805964476492.html"
      },
      {
        "productId": "3256805973589827",
        "productType": "natural",
        "title": "RODDRSYA Civil Lace Wedding Dresses Long Sleeves Boat Neck Champagne Applique Bride Gown A-Line Tulle Illusion vestidos de novia",
        "prices": {
          "skuId": "12000036045282017",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 30,
            "minPriceDiscount": 30,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 118,
            "minPriceType": 2,
            "formattedPrice": "US $118.00",
            "cent": 11800
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/Sc462a121245c4b1296f3e101fcce764db.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000063",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Extra 2% off with coins",
              "tagStyle": {
                "color": "#FD384F",
                "position": "2"
              }
            },
            "source": "flexiCoin_new_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 10
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805973589827.html"
      },
      {
        "productId": "3256805638849537",
        "productType": "natural",
        "title": "JEHETH Elegant Oversize Wedding Dresses For Woman 2023 Sleeveless Lace Up Back Bride Applique A-Line Tulle vestidos de novia",
        "prices": {
          "skuId": "12000034485316201",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 40,
            "minPriceDiscount": 40,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 99,
            "minPriceType": 2,
            "formattedPrice": "US $99.00",
            "cent": 9900
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/S6dba7ee787c143c4a98e26a0929872b5Z.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000063",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Extra 2% off with coins",
              "tagStyle": {
                "color": "#FD384F",
                "position": "2"
              }
            },
            "source": "flexiCoin_new_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 10
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805638849537.html"
      },
      {
        "productId": "3256805918789510",
        "productType": "natural",
        "title": "2024 Simple Strapless Women's Wedding Dresses Zipper Backless Organza Applique Ball Gowns Floor-Length Brush Train Sexy Party",
        "prices": {
          "skuId": "12000035766976009",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 48,
            "minPriceDiscount": 48,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 92.67,
            "minPriceType": 2,
            "formattedPrice": "US $92.67",
            "cent": 9267
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/S932965dcf489465387d1107d7470b1d2K.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805918789510.html"
      },
      {
        "productId": "3256805969710499",
        "productType": "natural",
        "title": "RODDRSYA Civil Wedding Gowns Long Sleeves Double V-Neck Lace Bridal Gowns Lace Applique A-Line 2024 vestido de noiva casamento",
        "prices": {
          "skuId": "12000036024778270",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 35,
            "minPriceDiscount": 35,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 109,
            "minPriceType": 2,
            "formattedPrice": "US $109.00",
            "cent": 10900
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/S9748d07418c94c99ac9b698e9bbcc60f2.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000063",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Extra 2% off with coins",
              "tagStyle": {
                "color": "#FD384F",
                "position": "2"
              }
            },
            "source": "flexiCoin_new_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 10
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805969710499.html"
      },
      {
        "productId": "3256805960110900",
        "productType": "natural",
        "title": "Beach Deep V-neck Appliques Evening Dress Pastrol Cap Sleeve A-line Cocktail Party Gown Romantic Vestidos De Novia",
        "prices": {
          "skuId": "12000035971929015",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 50,
            "minPriceDiscount": 50,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 149,
            "minPriceType": 2,
            "formattedPrice": "US $149.00",
            "cent": 14900
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/Se7cff790af1e468dab0709c7616fa80b3.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000063",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Extra 2% off with coins",
              "tagStyle": {
                "color": "#FD384F",
                "position": "2"
              }
            },
            "source": "flexiCoin_new_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 10
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805960110900.html"
      },
      {
        "productId": "3256804279060222",
        "productType": "ad",
        "title": "Lakshmigown Puffy Chiffon A Line Wedding Dress Beach Summer 2022 Abito Sposa Donna Elegant Bridal Hoho Gowns Sequin Lace Bodice",
        "prices": {
          "skuId": "12000029263454065",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "originalPrice": {
            "priceType": "original_price",
            "currencyCode": "USD",
            "minPrice": 169.99,
            "minPriceType": 1,
            "formattedPrice": "US $169.99",
            "cent": 16999
          },
          "salePrice": {
            "discount": 38,
            "minPriceDiscount": 38,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 105.39,
            "minPriceType": 2,
            "formattedPrice": "US $105.39",
            "cent": 10539
          },
          "taxRate": "0"
        },
        "sales": {
          "raw": "40 sold",
          "value": 40
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/A94594c13e23a46f5b51571304cf1f8cax.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000025",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "image",
              "tagImgUrl": "https://ae01.alicdn.com/kf/Saa94d6f7f18e4bf5ad94bb3ddb0a7870A/228x64.png",
              "tagImgWidth": 228,
              "tagImgHeight": 64,
              "tagStyle": {
                "position": "1"
              }
            },
            "source": "real_super_deals_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 330
          },
          {
            "sellingPointTagId": "8810981987",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "image_text",
              "tagText": "14-day delivery on $5",
              "tagImgUrl": "//img.alicdn.com/imgextra/i4/O1CN01CWU3qh1RzOz3tnAET_!!6000000002182-2-tps-48-48.png",
              "tagImgWidth": 30,
              "tagImgHeight": 30,
              "tagStyle": {
                "position": "4",
                "color": "#009966",
                "row_cnt": "1"
              }
            },
            "source": "X_Day_Delivery_over_Y_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 250
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256804279060222.html"
      },
      {
        "productId": "3256805964507955",
        "productType": "natural",
        "title": "Classic Square Neck Sheath Evening Dress Elegant Tank Sleeve Floor-length Cocktail Party Gown Simple Vestidos De Novia",
        "prices": {
          "skuId": "12000035994973367",
          "pricesStyle": "default",
          "builderType": "skuCoupon",
          "currencySymbol": "$",
          "prefix": "Sale price:",
          "salePrice": {
            "discount": 50,
            "minPriceDiscount": 50,
            "priceType": "sale_price",
            "currencyCode": "USD",
            "minPrice": 139,
            "minPriceType": 2,
            "formattedPrice": "US $139.00",
            "cent": 13900
          },
          "taxRate": "0"
        },
        "image": {
          "imgUrl": "//ae04.alicdn.com/kf/S81807395e90f462a8ad00803a87863e0p.jpg",
          "imgWidth": 750,
          "imgHeight": 1000,
          "imgType": "1"
        },
        "sellingPoints": [
          {
            "sellingPointTagId": "m0000063",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Extra 2% off with coins",
              "tagStyle": {
                "color": "#FD384F",
                "position": "2"
              }
            },
            "source": "flexiCoin_new_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 10
          },
          {
            "sellingPointTagId": "m0000064",
            "tagStyleType": "default",
            "tagContent": {
              "displayTagType": "text",
              "tagText": "Free shipping",
              "tagStyle": {
                "color": "#009966",
                "position": "4"
              }
            },
            "source": "Free_Shipping_atm",
            "resourceCode": "searchItemCard",
            "resourcePriority": 186
          }
        ],
        "link": "https://www.aliexpress.com/item/3256805964507955.html"
      }
    ]
  }
  return result = getData(result); // filtering data in using format 
};

// const productListData = async () => {
  
//   const url = 'https://aliexpress-ecommerce.p.rapidapi.com/v1/aliexpress/products?categoryID=13&page=1&freeShipping=true&fourStarsAndUp=true';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '10a4ba1cd4msh1ea4162312a54efp1c67bdjsnec864ab7b06e',
//       'X-RapidAPI-Host': 'aliexpress-ecommerce.p.rapidapi.com'
//     }
//   };
  
//   try {
//     const response = await fetch(url, options);
//     let result = await response.json(); 
    
//     if (response.status === 200) {
//       result = getData(result); // filtering data in using format 
//     }
//     return result;
  
//   } catch (error) {
//     return error;
//   }
// };

export {productListData};
