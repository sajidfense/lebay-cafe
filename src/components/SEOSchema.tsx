import { useEffect } from "react";

const SEOSchema = () => {
  useEffect(() => {
    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Cafe",
      "@id": "https://lebaycafe.com.au/#cafe",
      "name": "Le Bay Café",
      "image": "https://lebaycafe.com.au/our-story.jpg",
      "description": "Family-owned café in Wynnum serving premium coffee, house-baked pastries, gourmet breakfast & lunch, and elegant High Tea experiences.",
      "url": "https://lebaycafe.com.au/",
      "telephone": "+61493848179",
      "email": "hello@lebaycafe.com.au",
      "priceRange": "$$",
      "servesCuisine": ["Café", "Australian", "Breakfast", "Brunch"],
      "acceptsReservations": true,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "90 Berrima Street",
        "addressLocality": "Wynnum",
        "addressRegion": "QLD",
        "postalCode": "4178",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-27.443611",
        "longitude": "153.172222"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "06:30",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "07:00",
          "closes": "14:00"
        }
      ],
      "hasMenu": {
        "@type": "Menu",
        "description": "Fresh, daily menu featuring house-baked pastries, gourmet breakfast & lunch, premium coffee, smoothies, and High Tea",
        "hasMenuSection": [
          {
            "@type": "MenuSection",
            "name": "High Tea",
            "description": "Elegant High Tea experience with unlimited barista-made coffee, handcrafted pastries, scones, and seasonal sweets"
          },
          {
            "@type": "MenuSection",
            "name": "Breakfast & Brunch",
            "description": "Gourmet breakfast and lunch options with healthy, seasonal dishes"
          },
          {
            "@type": "MenuSection",
            "name": "Beverages",
            "description": "Premium espresso coffee, smoothies, juices & more"
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Outdoor Seating",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Indoor Seating",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Family Friendly",
          "value": true
        }
      ],
      "paymentAccepted": "Cash, Credit Card, Debit Card",
      "sameAs": [
        "https://www.facebook.com/TheBayCafee",
        "https://www.instagram.com/lebaycafe"
      ]
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Le Bay Café",
      "url": "https://lebaycafe.com.au/",
      "logo": "https://lebaycafe.com.au/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61493848179",
        "contactType": "Customer Service",
        "email": "hello@lebaycafe.com.au",
        "areaServed": "AU",
        "availableLanguage": "English"
      }
    };

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Le Bay Café",
      "url": "https://lebaycafe.com.au/",
      "description": "Family-owned local favourite serving Wynnum with great coffee, delicious food, and warm hospitality",
      "publisher": {
        "@type": "Organization",
        "name": "Le Bay Café"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://lebaycafe.com.au/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://lebaycafe.com.au/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Menu",
          "item": "https://lebaycafe.com.au/#menu"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "High Tea",
          "item": "https://lebaycafe.com.au/#high-tea"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Our Story",
          "item": "https://lebaycafe.com.au/#story"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Contact",
          "item": "https://lebaycafe.com.au/#contact"
        }
      ]
    };

    // Create script tags and append to head
    const schemas = [localBusinessSchema, organizationSchema, websiteSchema, breadcrumbSchema];
    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // Cleanup function to remove scripts when component unmounts
    return () => {
      scriptElements.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default SEOSchema;
