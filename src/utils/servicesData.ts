export type Card = {
  id: number;
  title: string;
  description: string;
};

export type Summary = {
  id: number;
  title: string;
  description: string[];
};

export type Service = {
  id: number;
  slug: string;
  title: string;
  peopleTitle: string;
  description: string;
  image: string;
  style: { backgroundColor: string };
  width: string;
  metaTitle: string;
  metaDescription: string;

  context: {
    mainTitle: string;
    subTitle: string;
    content: string;
  };

  workingProcess: Array<{
    title: string;
    image: string;
    alt: string;
    list: Array<{
      id: number;
      title: string;
      content: string;
    }>;
  }>;

  outcomes: {
    id: number;
    title: string;
    description: string[];
    servicePlatform:boolean,
    subContent: {
      title: string;
      description: string[];
      advantages: {
        id: number;
        title: string;
        description: string;
        points: {
          id: number;
          title: string;
          description: string;
        }[];
      };
      disAdvantages: {
        id: number;
        title: string;
        description: string;
        points: {
          id: number;
          title: string;
          description: string;
        }[];
      };
    };
    question: {
      title: string;
      cards: Card[];
    };
    summery: Summary;
  };

  FAQData: Array<{
    id: number;
    title: string;
    content: string;
  }>;
};

export const outcomes = [
  {
    id: 1,
    title: "Best Web Development <br/> company in Calicut",
    description: [
      `As the best web development company in Calicut, Wisbato is well aware of  <a href="https://www.wisbato.com/blogs/why-every-business-needs-a-professional-website" target="_blank" >why you need a professional website</a>.for your business. Thousands of business organizations are there in Calicut, yet only 45% have their website. Such a clear difference shows how important it is to have a strong online presence.Research study indicates that websites convince more customers as easy access to information and services is facilitated within websites. A business website creates trust as the website is of a proper design among customers thus turning out to have some nice return sales and stronger customer loyalty. Organizations whose operations are not online face a serious struggle for customers and their loyalty business in Calicut. Traditional methods usage confines them into low reaches, delayed time response, and less professional image.

`,
      `At Wisbato, we are close to providing businesses with the opportunity to overcome the challenges arising from such difficulties by developing suitable web development projects for Kozhikode business owners. We enable the companies to provide access all the time, improve customer interactions, and even enhance their brand image by designing SEO friendly <a href="https://www.wisbato.com/blogs/how-to-build-a-professional-landing-page-on-your-website-best-practices-and-example" target="_blank" >professional landing pages</a> and websites. Companies that have a website are allowed an opportunity to engage customers as much as 80% more, and all this really makes the best investment in the future.
`,
      // "Our web development services include defining your purpose and goals, all types of website design, Front-end development, back-end development, content management system (CMS), custom software development, testing & launching, maintenance and updates.",
      `The Wisbato team uses high-end web development tools like   <a href="https://react.dev/" target="_blank" > ReactJS,</a> <a href="https://angular.dev/" target="_blank">Angular,</a><a href="https://wordpress.com/" target="_blank"> Wordpress</a>
 VueJS, Django, Svelte, jQuery to develop the most responsive websites for every business. We provide web development services are Front-end development, back-end development, content management system (CMS), custom software development, testing & launching.` ,

      `Today's 5.45 billion people are engaged in the digital world so a website with your digital presence is a powerful tool for your business. Wisbato, the best web development company in Calicut, is here to help to create websites with<a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank" > affordable prices </a>and assure that every business can get ahead and grow through a strong online presence that satisfies its customers.`,
    ],
    servicePlatform:true,
    subContent: {
      title: "Custom Solutions for Every Business",
      description: [
        `At Wisbato, we specialize in delivering exceptional websites in Calicut. We offer solutions for every business. Whether it is an e-commerce application, personal portfolio, blog writing, shopping or a business website, we construct websites that are not only pretty functional but also easy to use. Our <a href="https://www.wisbato.com/blogs/a-comprehensive-guide-to-building-your-website-wisbato" target="_black" > process of website development</a>, includes understanding your specific needs and goals, coming up with good designs, developing with all the  <a href="https://www.wisbato.com/blogs/top-5-web-development-trends-in-2024" target="_black" >latest trends</a>, and tools with comprehensive support. We make every single website in a way that it works out perfectly, performs and engages better with customers. Whether it is an online store or a business site, we build the best websites in Calicut customers. Contact Wisbato for a web development project with an affordable price. Check out our <a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank">web development costs.</a>
`,
      ],
      advantages: {
        id: 1,
        title: "The advantage of a Website",
        description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "Increased Online Presence",
            // description:
            // "A website makes your business look professional and credible. It's the first step towards establishing a strong online presence and building trust with potential customers",
          },
          {
            id: 2,
            title: "Enhanced Trustworthiness",
            // description:
            //   "A website improves your business in online searches, making it easier for potential customers to find you anywhere",
          },
          {
            id: 3,
            title: "24/7 Accessibility",
            // description:
            //   "A professional website with clear information and high-quality design portrays a positive and trustworthy image & brand value",
          },
          {
            id: 4,
            title: "Expanded Customer Reach",
            // description:
            //   "Your website acts as a constantly accessible brochure, showcasing your services, products, and brand story",
          },
          {
            id: 5,
            title: "Improved Marketing Opportunities",
            // description:
            //   "A website allows for two-way communication with customers through contact forms, live chats, or social media integration",
          },
          // {
          //   id: 6,
          //   title: "Data & Analytics",
          //   description:
          //     "Modern websites provide valuable data on user behavior and website traffic, allowing you to refine your online marketing strategies",
          // },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "The Disadvantage of Being Offline",
        description:
          "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Limited Visibility",
            // description:
            //   "In 2024, over 4.6 billion people will use the internet globally. Without a website, you're invisible to this vast pool of potential customers who research businesses online before making buying decisions",
          },
          {
            id: 2,
            title: "Decreased Credibility ",
            // description:
            //   "A professional website establishes legitimacy and builds trust with potential clients. Without one, you risk appearing outdated or even unprofessional",
          },
          {
            id: 3,
            title: "Missed Sales Opportunities",
            // description:
            //   "A website serves as your 24/7 salesperson, providing information and showcasing your services even when you're not actively working. It allows customers to learn about your offerings, contact you easily, and potentially convert into paying clients",
          },
          {
            id: 4,
            title: "Limited Marketing Reach",
            // description:
            //   "Without a website, your marketing options are significantly limited. You missed the audience through search engines, social media, and online advertising.",
          },
          {
            id: 5,
            title: "Poor Customer Accessibility",
            // description:
            //   "Customers today expect to find detailed information about your products, services, and company online. Without a website you can provide incomplete information only.",
          },
        ],
      },
    },
    question: {
      title: "Why Choose WISBATO For Web Development?",
      cards: [
        {
          id: 1,
          title: "Experience & <br/> Expertise",
          description:
            "Wisbato exalts a team of seasoned professionals with years of experience in the industry",
        },
        {
          id: 1,
          title: "Comprehensive <br/> Services",
          description:
            "Wisbato provides an extensive array of services intended to fulfill all of your digital requirements under one roof",
        },
        {
          id: 1,
          title: "Proven <br/> Result",
          description:
            "Wisbato guaranteed the best result on our projects that align with your unique goals",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Hire Expert Web Developers to Support Your Business",
      description: [
        `An excellent web developing company is a key to the success of your business. We completed over 50 successful web projects at Wisbato that created exceptional digital presence for businesses. Our team of professional web developers offers all kinds of unique, customized E-commerce and professional-looking business websites as per your needs. Wisbato, the best web development company in Calicut ensures that your site is functional and engaging. Check out some of <a href="https://www.wisbato.com/works" target="_black" > our web development previous work </a>case studies to see how we can take your business to the next level through a professional, custom-built website designed for success. And also check out our happy <a href="https://www.google.com/maps/contrib/114938746348114958075/place/ChIJpxgvczJfpjsRzd2kcmKEw_I/@11.3890999,75.8654921,10z/data=!4m6!1m5!8m4!1e1!2s114938746348114958075!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D" target="_black" > client words.</a> `,
      ],
    },
  },
  {
    id: 2,
    title:
      "Leading E-commerce Web Development Company in Calicut.",
    description: [
      `Our team specializes in delivering creative e-commerce solutions that enable businesses to arrive in the marketplace. Being the leading e-commerce web development company in Calicut,We aim to create best e-commerce websites for <a href="https://en.wikipedia.org/wiki/Kozhikode" target="_blank">Kozhikode</a>  business owners and that help to increase sales, online visibility and improve the user experience.

`,
      `Our ecommerce web developers and designers work together to deliver customized, sector-specific e-commerce platforms according to your business's needs. We service all businesses-from start-ups to well-established enterprises-by providing responsive, user-friendly, feature rich and <a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank" > cost effective e- commerce websites</a>`,
      "At Wisbato, we understand how challenging the e-commerce world is today and how important it is for your business to stay ahead in a highly competitive market. We use the integration of advanced features such as secure gateways for payments e.g.(PayPal, Amazon Pay, Stripe etc…) product management systems, inventory tracking, and SEO optimization so that it ranks high on the search engines and converts best.",
      `Are you looking for a new online store or upgrading an existing one? Let <a href="https://www.wisbato.com/" target="_blank" >Wisbato</a>  be your partner for designing and developing high-performing, scalable e-commerce websites in Calicut, Kerala that meet your business needs. We can help you grow your business in this ever-changing world of online commerce.
 `
    ],
    servicePlatform:false,
    subContent: {
      title: "Custom Solutions for Every Business",
      description: [
        `We believe that every business is unique, and so are the e-commerce needs of this business. Our team knows <a href="https://www.wisbato.com/blogs/why-every-business-needs-a-professional-website" target="_blank" > why you need a website</a>  in your e-commerce business, and we develop best solutions to challenge specific goals and problems regarding each client. From small to big <a href="https://www.wisbato.com/works" target="_blank" > website projects </a>,we deliver customized e-commerce platforms, ensuring they are scalable, functional, and thereby able to be supported for growth. With our <a href="https://www.wisbato.com/blogs/a-comprehensive-guide-to-building-your-website-wisbato" target="_blank">professional way of website development </a>  your business gets the right attention and it makes your business successful in the digital world.  `,
      ],
      advantages: {
        id: 1,
        // title: "Key advantages of having an e-commerce website",
        title: "Advantages of having an e-commerce website",
        description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "Global Reach",
            // description:
            //   "An e-commerce website allows you to reach customers beyond your local area, expanding your market to a global scale. and Your store is open 24/7, enabling customers to browse and purchase products at any time, increasing sales opportunities.",
          },
          {
            id: 2,
            title: "Cost Efficiency",
            // description:
            //   "Operating an e-commerce store can be more cost-effective than running a physical store, with savings on rent, utilities, and staffing. and Digital marketing strategies like SEO, social media, and email campaigns can be more cost-effective than traditional advertising.",
          },
          {
            id: 3,
            title: "Enhanced Customer Insights",
            // description:
            //   "Customers can shop from the comfort of their homes, which can lead to increased customer satisfaction and loyalty.",
          },
          {
            id: 4,
            title: "Increased Sales Opportunities",
            // description:
            //   "E-commerce websites provide valuable data on customer behavior, preferences, and purchase patterns, helping you make informed business decisions. You can easily track the performance of your website, marketing campaigns, and sales, allowing for continuous improvement.",
          },
          {
            id: 5,
            title: "24/7 Accessibility",
            // description:
            //   "Scaling an e-commerce business to handle more products, customers, and markets is often simpler and more cost-effective than expanding a physical store.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "Disadvantages of lacking an e-commerce website",
        description:
          "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Limited Market Reach",
            // description:
            //   "Without an e-commerce website, your customer base is restricted to your physical location, limiting your market reach. A significant number of consumers prefer shopping online for convenience and variety. Without an online presence, you miss out on this growing market segment.",
          },
          {
            id: 2,
            title: "Missed Revenue Opportunities",
            // description:
            //   "An e-commerce website allows customers to shop anytime, even outside of regular business hours. Without it, you lose potential sales that could occur during non-operational hours.",
          },
          {
            id: 3,
            title: "Higher Operational Costs",
            // description:
            //   "In today’s digital world, consumers expect businesses to have an online presence. Not having an e-commerce website can make your business appear outdated and less competitive. Competitors with e-commerce capabilities can offer more convenience and better accessibility to customers, potentially capturing your market share.",
          },
          {
            id: 4,
            title: "Loss of Competitive Advantage            ",
            // description:
            //   "A professional website enhances your business's credibility and trustworthiness. Without one, potential customers may question your legitimacy and professionalism.",
          },
          {
            id: 5,
            title: "Lack of Customer Insights",
            // description:
            //   "E-commerce platforms often include tools for automating sales processes, inventory management, and customer service. Without these tools, your operations may be less efficient and more labor-intensive.",
          },
        ],
      },
    },
    question: {
      title: "Why choose WISBATO for e-commerce web development?",
      cards: [
        {
          id: 1,
          title: "Experience & <br/> Expertise",
          description:
            "Wisbato exalts a team of seasoned professionals with years of experience in the industry.",
        },
        {
          id: 1,
          title: "Comprehensive <br/> Services",
          description:
            "Wisbato provides an extensive array of services intended to fulfill all of your digital requirements under one roof",
        },
        {
          id: 1,
          title: "Proven <br/> Result",
          description:
            "Wisbato guaranteed the best result on our projects that align with your unique goals",
        },
      ],
    },
    summery: {
      id: 1,
      title: "We make e-commerce easy for you",
      description: [
        `Over 40 successful <a href="https://www.wisbato.com/works/wiscart" target="_blank">e-commerce projects</a>  have marked the success story of Wisbato, which has enabled the company to position itself as a leading ecommerce web design and development company in Calicut. Our team is aiming at giving customized, user-friendly, and sales-driven ecommerce websites, so that they succeed in the realms of digital markets. We take pride in being able to meet each customer’s unique needs with personalized solutions that match their expectations. And Choose Wisbato and find a true partner who can commit and drive online success for your business with innovative design and strategy for ecommerce development (<a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank">Check our web development cost</a>). Let's make your visions bloom into a thriving e-commerce platform. Check out our <a href="https://www.google.com/search?q=Wisbato+Pvt.+Ltd&sca_esv=c64c958eaf0dca0a&sca_upv=1&hl=en-GB&authuser=0&biw=1366&bih=657&sxsrf=ADLYWIIU_1em3_OpIBzuiSTEmB9iLP2Chg%3A1726641860982&ei=xHbqZtjSO7mmvr0PnJaXoAU&ved=0ahUKEwjYxJyW8suIAxU5k68BHRzLBVQQ4dUDCA8&uact=5&oq=Wisbato+Pvt.+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhBXaXNiYXRvIFB2dC4gTHRkMgQQIxgnMgQQIxgnMgIQJjIIEAAYgAQYogQyCBAAGIsDGO8FMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIwglQ7QRY7QRwAXgAkAEAmAHVAaAB1QGqAQMyLTG4AQPIAQD4AQGYAgGgAuwBmAMAiAYBkgcDMi0xoAejBw&sclient=gws-wiz-serp#mpd=~18236616690819797880/customers/reviews" target="_blank">client words</a>.`,
      ],
    },
  },
  {
    id: 3,
    title:
      "Choose the No.1 IT company in Calicut for all IT support and solutions.",
    description: [
      "We pride ourselves as being the no.1 IT support and solution company in Calicut, which provides all-rounded technology services aimed at making businesses flourish in the fast-paced and rapidly changing today's digital environment. Innovation, efficiency, and customer satisfaction and our end-to-end solutions for the implementation of IT can support any type of business",
      "We deliver infrastructure management, network security, data backup solutions, and cloud services to ensure your systems run smoothly and securely. We help startups set up their IT platform or support established organizations in the improvement of performance and security capabilities. Our experienced team is ready to provide tailored solutions that can meet the specific goals you may have for your organization.",
      "Having been a leading IT support and solution provider in Calicut, we take pride in ensuring round-the-clock support to determine as many technical challenges as one may face. From troubleshooting software-related issues to optimizing hardware systems, prompt and reliable services ensure minimal downtime and uninterrupted operations.",
      `We at <a href="https://www.wisbato.com/" target="_blank">Wisbato</a>  believe in long-term relations with our clients, thus providing proactive solutions not just to current issues but also problems expected to arise in the future. Trust us as your IT partner in empowering your business today with cutting-edge technology and superior support within the highly competitive market.
`
    ],
    servicePlatform:true,
    subContent: {
      title: "Unique solution for every business",
      description: [
        "We understand that every business has unique challenges, and that is the reason why we offer specific solutions tailored to the needs of each client. Whether you are a small start-up or a well-established enterprise, our team takes the time to understand your goals, your industry needs, and your operational challenges. That is how we create customized IT strategies that can really boost productivity, enhance security, and ease operations for our clients.",
        `From advanced <a href="https://en.wikipedia.org/wiki/Cloud_computing" target="_blank">cloud solutions </a> to smooth <a href="https://en.wikipedia.org/wiki/Network_management" target="_blank">network management</a>,our aim here is to deliver services that are efficient and scalable, so your business can expand with minimal effort. We aim to empower you with the right technology and support to get you focused on running your business successfully. Wisbato provides IT services beyond just mere implementation; it's uniquely personalized to meet your success factor and new innovation.`,
      ],
      advantages: {
        id: 1,
        title: "Advantages of IT support",
        // description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "Enhanced Security",
            // description:
            //   "By providing IT support, your business can implement robust security measures to protect sensitive data and systems from cyber threats, ensuring the integrity and confidentiality of your information.",
          },
          {
            id: 2,
            title: "Minimized Downtime",
            // description:
            //   "IT support helps streamline operations by maintaining and optimizing hardware, software, and networks. This leads to fewer disruptions, allowing your team to focus on core business activities and boosting overall productivity.",
          },
          {
            id: 3,
            title: "Cost Efficiency",
            // description:
            //   "Regular IT support can prevent costly downtime and reduce the need for emergency repairs. By proactively managing and maintaining your IT infrastructure, you can avoid unexpected expenses and better allocate resources.",
          },
          {
            id: 4,
            title: "Access to Expertise",
            // description:
            //   "With IT support, you have access to skilled professionals who can offer guidance and solutions for complex technical issues, ensuring your business stays up-to-date with the latest technology advancements.",
          },
          {
            id: 5,
            title: "Improved Customer Service",
            // description:
            //   "Reliable IT support ensures that your systems and applications are always functioning smoothly, enabling you to provide consistent and high-quality service to your customers, enhancing their experience and satisfaction.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "The Drawbacks of avoiding IT support",
        // description:
        //   "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Greater Exposure to Cyber Threats",
            // description:
            //   "Without IT support, technical issues can take longer to resolve, leading to prolonged periods of downtime. This may cause operational disruptions for businesses.",
          },
          {
            id: 2,
            title: "Extended Downtime",
            // description:
            //   "Without proper IT support, your business is more susceptible to cyber attacks and data breaches. Lack of security measures and monitoring can put sensitive information at risk.",
          },
          {
            id: 3,
            title: "Higher Operational Costs",
            // description:
            //   "Ignoring IT support can lead to more significant issues that are expensive to fix. Emergency repairs and reactive solutions often cost more than proactive maintenance and support.",
          },
          {
            id: 4,
            title: "Limited Access to Expertise",
            // description:
            //   "Without IT support, your business may fall behind in adopting the latest technology trends and updates. This can impact your competitive edge and efficiency.",
          },
          {
            id: 5,
            title: "Restricted Business Expansion and Adaptability",
            // description:
            //   "Employees may spend valuable time troubleshooting IT issues instead of focusing on their primary tasks. This can lead to lower productivity and overall business inefficiency.",
          },
        ],
      },
    },
    question: {
      title: "Why choose WISBATO for your IT support?",
      cards: [
        {
          id: 1,
          title: "Personalized <br/> Solutions",
          description:
            "Wisbato offers customized IT support customized to your business's unique needs.",
        },
        {
          id: 2,
          title: "Modern <br/> Technology",
          description:
            "Wisbato stays ahead of the curve by incorporating the latest technological advancements into our services.",
        },
        {
          id: 3,
          title: "Excellent Customer <br/> Services",
          description:
            "At Wisbato, customer satisfaction is our top priority. Our dedicated support team is always ready to assist you.",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Get your IT issues resolved quickly",
      description: [
        `Wisbato supports all IT-related problems and their solutions. If you run a firm, you need reliable IT support to ensure smooth operations. From software installation to hardware; configuration of network, cyber security system, and Wisbato also covers  <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">website development</a>, <a href="https://www.wisbato.com/services/mobile-app-development" target="_blank">mobile app development</a>, <a href="https://www.wisbato.com/services/ecommerce-development-company-in-calicut" target="_blank">e-commerce website development</a> and all IT support . Our team of professionals can get those issues related to your IT solved without taking too much of your time and keep your business running. Choose Wisbato, the no.1 IT support and solution company in Calicut to fulfill all your IT needs. We help your business grow today. Contact us now.
`
      ],
    },
  },
  {
    id: 4,
    title: "Mobile App Development Company In Calicut.",
    description: [
      `Wisbato is an experienced mobile app development company in Calicut, Kerala. We create innovative and customized mobile applications for your business that help you market your products online. We specialize in creating unique <a href="https://www.wisbato.com/blogs/android-mobile-app-building-a-step-by-step-guide" target="_blank"> Android</a> , iOS, and Flutter apps that best fit your business goals.`,
      `<span>We specialize in Android app development, so we can build powerful, user-friendly and <a href="https://www.wisbato.com/blogs/understanding-mobile-app-development-costs-in-india-wisbato" target="_blank" >cost effective mobile apps</a> for the ever growing number of users on this platform. The other wing of our technical team focuses on creating smooth and highly secure applications that offer exceptional</span>`,
      "usability with all  of  Apple’s devices. Additionally, we have mastered Flutter and it can be used to develop cross-platform applications for both iOS and Android platforms, thus reaching more users while maintaining uniform results.",
      `<span>We keep ourselves informed about recent developments in technology hence bring expert solutions to our clients. Our approach to mobile application design is open, effective and directed at meeting your business objectives. and we know <a href="https://www.wisbato.com/blogs/why-people-uninstall-your-mobile-apps" target="_blank" >why users uninstall apps</a>, so we will leverage new trends and excellent UX. Wisbato, which is one of the leading Mobile App Development Company in Calicut where the best mobile solutions drive outcomes. Get ahead today with Wisbato for a triumph in your business dreams.</span>`,
    ],
    servicePlatform:true,
    subContent: {
      title: "Unique ideas for every business",
      description: [
        "Statista projects that the global number of mobile users will hit 7.49 billion by 2025. They all are using apps on these devices. Mobile phones are filled with different categories of apps, such as social media apps, e-commerce apps, educational apps, communication apps, gaming apps, music apps, etc. So creating an app for your business is a great idea and this decision will lead to more customer engagement for your business. Now you need a professional team of mobile app developers to fulfill your business needs.",
        `<span>Wisbato, which is ranked among the best mobile app development companies in Calicut, identifies your desires and the needs of your customers. Through our efficient <a href="https://www.wisbato.com/blogs/mobile-app-development-process-in-india-wisbato" target="_blank" > app development process </a>, we come up with a design that resonates with your brand perfectly. And we will use the latest <a href="https://www.wisbato.com/blogs/engage-your-audience-with-push-notifications" target="_blank" > push notification</a> technology on your app development projects That increase 90% of users' engagement. Let Wisbato design the best mobile app with an <a href="https://www.wisbato.com/blogs/understanding-mobile-app-development-costs-in-india-wisbato" target="_blank" >affordable price</a> that propels your business forward.</span>`,
      ],
      advantages: {
        id: 1,
        title: "Advantages of owning a mobile app",
        points: [
          {
            id: 1,
            title: "Customer Engagement",
            // description:
            //   "A mobile app allows you to reach the customer directly. They can get it at their convenience at any time of the day and from any part of the globe. Instant communication, customer loyalty, and notifications are among the digital advancements that help fast-growing businesses through customer relationships.",
          },
          {
            id: 2,
            title: "Enhanced Brand Experience",
            // description:
            //   "Mobile apps are perhaps the best way to communicate your brand personality on a relatively low budget. It offers a unique and easily manageable interface that depicts the company’s brand qualities and fosters customer communication.",
          },
          {
            id: 3,
            title: "Boost Sales & Revenue",
            // description:
            //   "Mobile apps are the best medium for promotions, special offers and campaigns.  Reach your customers directly with the right message at the right time, driving sales and increasing revenue streams.",
          },
          {
            id: 4,
            title: "Data-Based Insights",
            // description:
            //   "Mobile apps offer important insights regarding the consumers, user behavior, preferences and their tendency for purchasing. Such data is useful in segmenting the marketing targets, fine-tuning application features and, in general, you can meet your customers’ needs ideally.",
          },
          {
            id: 5,
            title: "Location-Based Advantages",
            // description:
            //   "Mobile apps have the use of GPS technology to facilitate location-based information services. This feature enables customers in your locality to receive highly relevant information from you about your products and services.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "Disadvantages of skipping the mobile app",
        points: [
          {
            id: 1,
            title: "Limited Brand Visibility",
            // description:
            //   "Consumers are used to having everything right at their fingertips. The inability to have a mobile site can give the overall impression that your business is not trendy or worse, inaccessible, resulting in the customers going to your competitors who are mobile-friendly. If you don’t have a proper mobile app that meets customer’s needs, they will also uninstall the app.",
          },
          {
            id: 2,
            title: "Loss of Sales Opportunities",
            // description:
            //   "Mobile applications are silent partners in marketing to take place. if you are not mobile-friendly, It just means many potential consumers are left outside of the loop and you are unable to send them offers and special deals at a time when you know they may need it.",
          },
          {
            id: 3,
            title: "Data-Blind Decision Making",
            // description:
            //   "Smartphone applications give important information on the users’ behavior and choices. Lacking this specific data, you’re basically operating in a state of near-blindness. Marketing also becomes a challenge to measure your customer base, to decide the right marketing strategies to employ and be in a position to meet all the customer needs.",
          },
          {
            id: 4,
            title: "Falling Behind the Competition",
            // description:
            //   "As it has been observed a number of companies are already using mobile apps to serve their customers and gain advantage over others. If you don’t invest in the mobile apps, you will fall out of the competition scene, unable to cope with the businesses.",
          },
        ],
      },
    },
    question: {
      title: "Why choose WISBATO for app development?",
      cards: [
        {
          id: 1,
          title: "Expertise and <br/> Innovation",
          description:
            "WISBATO boasts a team of highly skilled mobile app developers who are well-versed in the latest technologies and trends.",
        },
        {
          id: 2,
          title: "Customized <br/> Solutions",
          description:
            "At WISBATO, the focus is on creating customized mobile applications that meet the specific needs and goals of your business.",
        },
        {
          id: 3,
          title: "Comprehensive <br/> Support",
          description:
            "WISBATO provides extensive support and maintenance services post-development. ",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Develop unique apps for your business",
      description: [
        `As the mobile app development company in Calicut, we do not hesitate to transform what you have conceived into user-friendly and innovative applications. Our team of professionals is committed to producing quality apps with a built-in ability to improve how you run your business and engage your customers. <a href="https://www.wisbato.com/" target="_blank" >Wisbato</a> will make sure there are no difficulties from idea to implementation. If you trust Wisbato company, we will turn your belief into reality using state-of-the-art technology and stylish approaches. Partner with us and experience the best in app development team in Calicut.`,
      ],
    },
  },
  {
    id: 5,
    title: "Leading SEO Company In Calicut",
    description: [
      `In today’s highly competitive digital world, having a strong online presence is no longer optional, it’s essential for business growth. At<a href="https://www.wisbato.com/"target="_blank"> Wisbato</a>, we understand the importance of visibility in the online marketplace. If you <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">build a website</a> but it does not appear first in the search list, it also affects your brand badly. If your <a href="https://en.wikipedia.org/wiki/Keyword" target="_blank">keywords</a> are listed last, the customer may think your brand is not trustworthy or not an established enterprise. Our expert team focuses on best SEO strategies that help businesses grow organically and achieve long-lasting results.

`,
      `A good website is essential for effective SEO. First, focus on  <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank"> building a professional website</a>,then implement SEO strategies. This approach will help you achieve better results. At Wisbato, we don’t just focus on rankings; we aim for sustainable growth. Our method integrates on-page optimization content, link building and technical SEO to ensure the website will not only be in the first rank of the search engine result but also continue to stay there. We work with businesses from a startup to an established business and match our strategy accordingly to suit your approach.
`,
      "At Wisbato, we specialize in SEO, focusing on-page SEO, off-page SEO, local SEO, and technical SEO to ensure comprehensive optimization of your website. Our expert team creates website content based on the latest EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) factors to build trust with visitors and improve search rankings. We implement best SEO strategies, such as building relevant, high-quality backlinks, focusing on customer search intent, including case studies and testimonials, AI-driven SEO, voice search optimization, and mobile-first indexing etc... Our SEO specialists stay updated with Google algorithm changes and adapt strategies accordingly to ensure top performance. Choose Wisbato, the leading SEO company in Calicut, and let your online presence bloom into an instrument of growth and success.",
    ],
    servicePlatform:false,
    subContent: {
      title: "Personalized SEO Strategies for Long-Term Growth",
      description: [
        `Being the most success-oriented <a href="https://www.wisbato.com/services/search-engine-optimization-company-in-calicut" target="_blank">SEO company in Calicut</a>, we build customized solutions to a potential best. We, at the best SEO agency in Calicut, closely work with you to develop strategies that enhance your online presence.  Whether you want to increase your local rankings or national exposure, we provide you with tailored SEO services to fuel growth and long-term success. From keyword optimization to content strategies, we offer customized solutions for running a mile ahead in today's competitive digital space.Trust Wisbato for excellent SEO solutions that catapult your brand and maximize your growth potential.
`,
      ],
      advantages: {
        id: 1,
        title: "Benefits of implementing SEO for your website",
        // description: "A well-designed website offers a multitude of benefits",
        points: [
          {

            id: 1,
            title: "Increased visibility on search engines",
            // description:
            //   "SEO helps your website rank higher in search engine results pages (SERPs), leading to more organic traffic from potential customers searching for relevant keywords.",
          },
          {
            id: 2,
            title: "Improved user experience",
            // description:
            //   "SEO involves optimizing your website's structure and content, improving its overall usability and ensuring a better experience for your visitors.",
          },
          {
            id: 3,
            title: "Cost-effective marketing strategy",
            // description:
            //   "By attracting targeted traffic to your site, SEO increases the likelihood of converting visitors into customers, as they are actively searching for the products or services you offer.",
          },
          {
            id: 4,
            title: "Enhanced credibility and trust",
            // description:
            //   "Compared to traditional advertising methods, SEO is more cost-effective, providing a higher return on investment (ROI) over the long term.",
          },
          {
            id: 5,
            title: "Long-term traffic and business growth",
            // description:
            //   "Unlike paid advertising, the benefits of SEO are long-lasting. Once your website achieves high rankings, it can maintain those positions with ongoing optimization and maintenance.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "What Happens When You Don't Use SEO",
        // description:
        //   "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Lower visibility on search engines",
            // description:
            //   "Without SEO, your website is less likely to appear in search engine results, leading to reduced visibility and fewer visitors finding your site.",
          },
          {
            id: 2,
            title: "Missed opportunities for customer engagement",
            // description:
            //   "Lower search engine rankings mean less organic traffic, resulting in fewer potential customers visiting your website.",
          },
          {
            id: 3,
            title: "Ineffective and costly marketing efforts",
            // description:
            //   "Without local SEO, your business may not appear in local search results, making it harder to attract customers from your area.",
          },
          {
            id: 4,
            title: "Poor user experience on the website",
            // description:
            //   "If your website doesn’t attract the right audience, you’ll miss out on potential leads and sales,it will negatively impact your conversion rates and revenue.",
          },
          {
            id: 5,
            title: "Limited brand credibility and trust",
            // description:
            //   "Without the benefits of organic traffic from SEO, you may need to rely more on paid advertising, which can be more expensive and less sustainable in the long term.",
          },
        ],
      },
    },
    question: {
      title: "Why choose WISBATO for SEO services?",
      cards: [
        {
          id: 1,
          title: "EXPERIENCE &<br/> EXPERTISE",
          description:
            "Wisbato exalts a team of seasoned professionals with years of experience in the industry.",
        },
        {
          id: 2,
          title: "Comprehensive <br/> Services",
          description:
            "Wisbato provides an extensive array of services intended to fulfill all of your digital requirements under one roof.",
        },
        {
          id: 3,
          title: "Proven Result",
          description:
            "Wisbato guaranteed the best result on our projects that align with your unique goals.",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Boost Your Brand Credibility with Effective SEO",
      description: [
        `Hiring the right SEO company for your Calicut business is vital to growing and succeeding in today's digital landscape.Here, we provide SEO services for your <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank"> website</a>,<a href="https://www.wisbato.com/services/ecommerce-development-company-in-calicut" target="_blank">e-commerce platforms</a>,<a href="https://www.wisbato.com/services/mobile-app-development" target="_blank">mobile apps</a> and other types of platforms. We develop effective SEO strategies to help you achieve optimal results. The right team of <a href="https://www.linkedin.com/in/ansif-pv-43ba35241/" target="_blank"> SEO experts</a> can work together with strategies customized to increase your website's visibility, drive organic traffic, and potential customers. With expertise in search engine algorithms and best practices, we can optimize content and structure for a problem-free user experience. Wisbato, the leading SEO company in Calicut offers maintenance and review along with adjustments to ensure that your website is not left behind. Spending some money on our professional SEO services will position your business for long-term success and higher credibility in the online marketplace. Check out our <a href="https://www.google.com/search?q=Wisbato+Pvt.+Ltd&sca_esv=c64c958eaf0dca0a&sca_upv=1&hl=en-GB&authuser=0&biw=1366&bih=657&sxsrf=ADLYWIIU_1em3_OpIBzuiSTEmB9iLP2Chg%3A1726641860982&ei=xHbqZtjSO7mmvr0PnJaXoAU&ved=0ahUKEwjYxJyW8suIAxU5k68BHRzLBVQQ4dUDCA8&uact=5&oq=Wisbato+Pvt.+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhBXaXNiYXRvIFB2dC4gTHRkMgQQIxgnMgQQIxgnMgIQJjIIEAAYgAQYogQyCBAAGIsDGO8FMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIwglQ7QRY7QRwAXgAkAEAmAHVAaAB1QGqAQMyLTG4AQPIAQD4AQGYAgGgAuwBmAMAiAYBkgcDMi0xoAejBw&sclient=gws-wiz-serp#mpd=~18236616690819797880/customers/reviews" target="_blank"> client words</a>.`,
      ],
    },
  },
  {
    id: 6,
    title: "Leading Branding Agency in Calicut",
    description: [
      `Effective <a href="https://en.wikipedia.org/wiki/Branding" target="_blank">branding </a> will be more desired for a business as today's competitive marketplace demands a market presence that lasts. Being the leading branding agency in  Calicut, our primary area of specialization remains in delivering great brand values that make your target audience react to it and make your business stand up from the rest.


`,
      `
Our comprehensive branding capabilities start with an intensive consultation and discovery process with you to learn about your vision, mission, and values. We help you closely develop a specific brand strategy that ensures all of your branding efforts will place you on the right track, in the right direction. From creating memorable logos and taglines to designing cohesive visuals,  <a href="https://www.wisbato.com/team" target="_blank">our team</a> of experienced designers and strategists ensures that your brand tells an empowered story.

`,
      "We feel branding is not just an aesthetic but creating an emotion towards your audience. Our approach is toward understanding the needs and tastes of your customers, which we can then build into a brand personality that talks to them exactly. This personal contact not only increases customer loyalty but also helps in engaging and selling more.",
      `But that's not all. We also offer brand positioning, <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">web development</a>,<a href="https://www.wisbato.com/services/ecommerce-development-company-in-calicut" target="_blank">e-commerce web development</a>, market research, and <a href="https://angular.dev/" target="_blank">social media strategy </a> to ensure your brand stands out on every platform. Whether you're a new startup looking to create your mark or an old business seeking a rebranding strategy, Wisbato, a leading branding agency in Calicut is ready for you.`
    ],
    servicePlatform:false,
    subContent: {
      title: "Custom Solutions for Every Business",
      description: [
        `We believe that each business is unique, and the same strategy for branding approaches just will not be possible thus, we provide client-centric branding solutions customized to match definite needs and aspirational outcomes for each client. Here, our research team analyzes your industry as well as your target audience and develops specific strategies that align with your business's goal and outcome. Whether you need an overall brand transformation, new visual elements, or a targeted marketing campaign, we best branding agency in Calicut are here to help precision and finesse in the solution to make your brand stand out. We're committed to delivering results that not only enhance your brand identity but also deliver growth and engagement to your business. Let's create something extraordinary together.

`,
      ],
      advantages: {
        id: 1,
        title: "Advantages of Branding",
        // description: "A well-designed website offers a multitude of benefits",
        points: [
          {

            id: 1,
            title: "Builds Recognition and Trust",
            // description:
            //   "SEO helps your website rank higher in search engine results pages (SERPs), leading to more organic traffic from potential customers searching for relevant keywords.",
          },
          {
            id: 2,
            title: "Differentiates from Competitors",
            // description:
            //   "SEO involves optimizing your website's structure and content, improving its overall usability and ensuring a better experience for your visitors.",
          },
          {
            id: 3,
            title: "Enhances Customer Loyalty",
            // description:
            //   "By attracting targeted traffic to your site, SEO increases the likelihood of converting visitors into customers, as they are actively searching for the products or services you offer.",
          },
          {
            id: 4,
            title: "Increases Business Value",
            // description:
            //   "Compared to traditional advertising methods, SEO is more cost-effective, providing a higher return on investment (ROI) over the long term.",
          },
          {
            id: 5,
            title: "Improves Marketing Efficiency",
            // description:
            //   "Unlike paid advertising, the benefits of SEO are long-lasting. Once your website achieves high rankings, it can maintain those positions with ongoing optimization and maintenance.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "Disadvantage of Not Having Branding",
        // description:
        //   "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Lack of Recognition and Trust",
            // description:
            //   "Without SEO, your website is less likely to appear in search engine results, leading to reduced visibility and fewer visitors finding your site.",
          },
          {
            id: 2,
            title: "Difficult to Stand Out from Competitors",
            // description:
            //   "Lower search engine rankings mean less organic traffic, resulting in fewer potential customers visiting your website.",
          },
          {
            id: 3,
            title: "Weaker Customer Loyalty",
            // description:
            //   "Without local SEO, your business may not appear in local search results, making it harder to attract customers from your area.",
          },
          {
            id: 4,
            title: "Lower Business Value",
            // description:
            //   "If your website doesn’t attract the right audience, you’ll miss out on potential leads and sales,it will negatively impact your conversion rates and revenue.",
          },
          {
            id: 5,
            title: "Inefficient Marketing Efforts",
            // description:
            //   "Without the benefits of organic traffic from SEO, you may need to rely more on paid advertising, which can be more expensive and less sustainable in the long term.",
          },
        ],
      },
    },
    question: {
      title: "Why choose Wisbato for branding",
      cards: [
        {
          id: 1,
          title: "EXPERTISE &<br/> INNOVATION ",
          description:
            "Our team combines creativity and strategy to create truly distinctive brand identities.",
        },
        {
          id: 2,
          title: "Effective <br/> Solutions",
          description:
            " We create custom-made branding strategies to fit the different needs of each business.",
        },
        {
          id: 3,
          title: "Result-oriented <br/> solutions",
          description:
            " Wisbato delivers impact branding solutions that enhance recognition, customer loyalty, and market presence.",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Choose a Professional Branding Team in Calicut.",
      description: [
        `Are you looking for the best branding agency in Calicut, so look no further  <a href="https://www.wisbato.com/" target="_blank">wisbato</a> is the leading branding agency in Calicut. We are inspired to bring your <a href="https://en.wikipedia.org/wiki/Brand" target="_blank"> brand</a>  to life. Branding is not just about a logo or name, it's an identity designed to reflect your values and to be connected with the personal characteristics of your target market. At the same time, we have experienced expertise to help design strategic, visuals, and memorable branding strategies that separate you from the rest of the competition. From being a small startup to an established firm, our branding team works together to ensure that each minute detail about your brand is filled with richness to leave long-lasting impressions. Choose the best branding company in Calicut,for a professional, results-driven branding experience. Check out our  <a href="https://www.google.com/search?q=Wisbato+Pvt.+Ltd&sca_esv=c64c958eaf0dca0a&sca_upv=1&hl=en-GB&authuser=0&biw=1366&bih=657&sxsrf=ADLYWIIU_1em3_OpIBzuiSTEmB9iLP2Chg%3A1726641860982&ei=xHbqZtjSO7mmvr0PnJaXoAU&ved=0ahUKEwjYxJyW8suIAxU5k68BHRzLBVQQ4dUDCA8&uact=5&oq=Wisbato+Pvt.+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhBXaXNiYXRvIFB2dC4gTHRkMgQQIxgnMgQQIxgnMgIQJjIIEAAYgAQYogQyCBAAGIsDGO8FMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIwglQ7QRY7QRwAXgAkAEAmAHVAaAB1QGqAQMyLTG4AQPIAQD4AQGYAgGgAuwBmAMAiAYBkgcDMi0xoAejBw&sclient=gws-wiz-serp#mpd=~18236616690819797880/customers/reviews" target="_blank">client words</a>. 
        `,
      ],
    },
  },
  {
    id: 7,
    title:
      "Best software development company in Calicut.",
    description: [
      `As the best software development company in Calicut, we offer a wide range of services to meet the needs of businesses looking for customized software solutions.<a href="https://www.wisbato.com/team" target="_blank"> Our team</a>  specializes in creating, designing, programming, testing, and maintaining software applications that enhance efficiency and drive growth. Whether you need software for managing internal operations or customer-facing applications, we have the expertise to deliver results. Our goal is to help you bring your ideas to life by developing software that fits perfectly with your business goals.
`,
      `We follow the <a href="https://en.wikipedia.org/wiki/Software_development_process" target="_blank">Software Development Life Cycle</a> (SDLC) to ensure that every project is carefully planned and executed. Our team is skilled in popular programming languages like C, C++, Java, JavaScript, PHP, and Python, allowing us to create diverse applications that meet modern business demands.
 `,
      `Staying updated with the latest industry trends, we also incorporate agile software methodologies and DevOps practices into our software development process. Many leading companies now adopt these methods to ensure faster delivery and more efficient updates to their software. At our company, we prioritize innovation and flexibility, providing Calicut-based businesses with best solutions that align with the latest software trends and technologies.<a href="https://youtu.be/wUGiIdqjDdk?si=qXjzF6XdHo6_oyve" target="_blank">Watch how to calculate software development cost</a>  `,
     
      
      
    ],
    servicePlatform:true,
    subContent: {
      title: "Custom software for every business",
      description: [
        `Today,<a href="https://www.wisbato.com/blogs/why-need-a-custom-software-development" target="_blank"> custom made software</a> is important for every business aiming for success. Companies like Nike and Amazon have embraced custom software solutions to streamline their operations, and enhance customer experiences. Custom software allows businesses to best applications specifically to their unique needs, ensuring they can adapt quickly to market changes and specific customer demands. For instance, a retail business might require an inventory management system that integrates seamlessly with its e-commerce platform, while a healthcare provider could benefit from a patient management system designed around its specific workflow. By opting for customized software, businesses can improve efficiency, reduce operational costs, and deliver a superior service that meets their customers' expectations. Investing in custom software developed by the best software development company in Calicut, that’s easy for your business,<a href="https://www.wisbato.com/contact" target="_blank"> Contact now</a>.`,
      ],
      advantages: {
        id: 1,
        title: "What happens you make a software",
        // description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "Increased Efficiency",
            // description:
            //   "By providing IT support, your business can implement robust security measures to protect sensitive data and systems from cyber threats, ensuring the integrity and confidentiality of your information.",
          },
          {
            id: 2,
            title: "Enhanced Decision-Making",
            // description:
            //   "IT support helps streamline operations by maintaining and optimizing hardware, software, and networks. This leads to fewer disruptions, allowing your team to focus on core business activities and boosting overall productivity.",
          },
          {
            id: 3,
            title: "Improved Customer Experience",
            // description:
            //   "Regular IT support can prevent costly downtime and reduce the need for emergency repairs. By proactively managing and maintaining your IT infrastructure, you can avoid unexpected expenses and better allocate resources.",
          },
          {
            id: 4,
            title: "Save time ",
            // description:
            //   "With IT support, you have access to skilled professionals who can offer guidance and solutions for complex technical issues, ensuring your business stays up-to-date with the latest technology advancements.",
          },
          {
            id: 5,
            title: "Scalability",
            // description:
            //   "Reliable IT support ensures that your systems and applications are always functioning smoothly, enabling you to provide consistent and high-quality service to your customers, enhancing their experience and satisfaction.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "What happens you don't make a software",
        // description:
        //   "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Inefficiency",
            // description:
            //   "Without IT support, technical issues can take longer to resolve, leading to prolonged periods of downtime. This may cause operational disruptions for businesses.",
          },
          {
            id: 2,
            title: "Lack of Data Insights",
            // description:
            //   "Without proper IT support, your business is more susceptible to cyber attacks and data breaches. Lack of security measures and monitoring can put sensitive information at risk.",
          },
          {
            id: 3,
            title: "Poor Customer Experience",
            // description:
            //   "Ignoring IT support can lead to more significant issues that are expensive to fix. Emergency repairs and reactive solutions often cost more than proactive maintenance and support.",
          },
          {
            id: 4,
            title: "Limited Scalability",
            // description:
            //   "Without IT support, your business may fall behind in adopting the latest technology trends and updates. This can impact your competitive edge and efficiency.",
          },
          {
            id: 5,
            title: "Increased Risk",
            // description:
            //   "Employees may spend valuable time troubleshooting IT issues instead of focusing on their primary tasks. This can lead to lower productivity and overall business inefficiency.",
          },
        ],
      },
    },
    question: {
      title: "Why Choose Wisbato for Software Development?",
      cards: [
        {
          id: 1,
          title: "Expertise &<br/> Experience",
          description:
            " Wisbato boasts a team of skilled and experienced software developers who have successfully delivered numerous projects across various industries.",
        },
        {
          id: 2,
          title: "Customized <br/>  Solutions",
          description:
            "We understand that every business has unique requirements. At Wisbato, we prioritize understanding your specific needs and tailoring our solutions accordingly.",
        },
        {
          id: 3,
          title: "Commitment to Quality &<br/> Innovation",
          description:
            "We are dedicated to delivering high-quality software that exceeds your expectations. ",
        },
      ],
    },
    summery: {
      id: 1,
      title: "why we are different",
      description: [
        `At  <a href="https://www.wisbato.com/" target="_blank">Wisbato</a>,  we differentiate ourselves by offering a comprehensive range of software development services to Calicut business owners and companies, all powered by the latest technologies. Our professional software developers understand <a href="https://www.wisbato.com/blogs/why-need-a-custom-software-development" target="_blank">why your business needs a software solution</a>, and we work to fulfill that purpose.From custom software development and mobility solutions to cloud computing, embedded systems, blockchain, and system integration, we have the expertise to create your unique business needs.<a href="https://www.wisbato.com/team" target="_blank">Our team</a> is passionate about staying at the forefront of technological advancements, implementing AI, big data, and augmented reality to create innovative and effective solutions. We are committed to delivering exceptional results, building long-term partnerships, and exceeding your expectations. Choose Wisbato as your trusted software development partner in Calicut and experience the difference.
`
      ],
    },
  },
  {
    id: 8,
    title:
      "Best Digital Marketing Agency In Calicut",
    description: [
      `Are you looking for the best digital marketing agency in Calicut to improve your business? Look no further than Wisbato. We specialize in providing best digital marketing services to meet your business needs.<a href="https://www.wisbato.com/team" target="_blank">Our team of digital marketing experts</a>  understands why having a strong online presence is essential for your business success. That’s why we offer a wide range of services, including <a href="https://www.wisbato.com/services/social-media-marketing-agency-in-calicut" target="_blank"> social media marketing</a>, <a href="https://www.wisbato.com/services/search-engine-optimization-company-in-calicut" target="_blank">SEO</a>, Google Ads,<a href="https://www.wisbato.com/services/branding-agency-in-calicut" target="_blank">branding</a>, YouTube ads, video shoots, email marketing, <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">web development</a>, and content marketing. Whether you want to boost your brand visibility or drive more leads, Wisbato is here to help.
 
`,
    "At Wisbato, we know that each business is unique, and a one-size-fits-all approach simply won’t work. That's why we customize our strategies based on your business goals and target audience. For businesses looking to improve their search engine rankings, we offer expert Search Engine Optimization (SEO) services that help you rank higher on Google and attract organic traffic. We also specialize in Search Engine Marketing (SEM), ensuring that your business gets noticed by potential customers when they search for products or services you offer. If social media is your focus, we create engaging content that resonates with your audience across platforms like Facebook, Instagram, and LinkedIn."  
 ,`With Wisbato, you’ll get a holistic approach to digital marketing that drives results. From content marketing that tells your brand story to video shoots that bring your products to life, we cover all aspects of your digital marketing needs. When you partner with <a href="https://www.wisbato.com/" target="_blank"> Wisbato</a>, you’re choosing a team dedicated to growing your business in the competitive online world.  `,
     
      
      
    ],
    servicePlatform:true,
    subContent: {
      title: "Unique Digital Marketing Ideas for Every Business",
      description: [
        `Every business needs a custom digital <a href="https://en.wikipedia.org/wiki/Marketing_strategy" target="_blank">marketing strategy</a> , so we will focus on business owners who are constantly seeking innovative digital marketing ideas to stand out and connect with their target audience. Customized content marketing strategies, such as interactive blog posts and engaging videos, can help businesses tell their unique story and attract customers. With the rise of AI tools, businesses can now automate tasks, analyze consumer behavior, and deliver personalized content at scale. Incorporating these latest strategies into your digital marketing efforts builds strong, lasting relationships with your customers, ultimately driving growth and success for your business with the best digital marketing agency in Calicut.
`,
      ],
      advantages: {
        id: 1,
        title: "Advantages of Using Digital Marketing",
        // description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "Increased Online Visibility",
            // description:
            //   "By providing IT support, your business can implement robust security measures to protect sensitive data and systems from cyber threats, ensuring the integrity and confidentiality of your information.",
          },
          {
            id: 2,
            title: "Targeted Advertising",
            // description:
            //   "IT support helps streamline operations by maintaining and optimizing hardware, software, and networks. This leads to fewer disruptions, allowing your team to focus on core business activities and boosting overall productivity.",
          },
          {
            id: 3,
            title: "Cost Efficiency",
            // description:
            //   "Regular IT support can prevent costly downtime and reduce the need for emergency repairs. By proactively managing and maintaining your IT infrastructure, you can avoid unexpected expenses and better allocate resources.",
          },
          {
            id: 4,
            title: "Cost Efficiency",
            // description:
            //   "With IT support, you have access to skilled professionals who can offer guidance and solutions for complex technical issues, ensuring your business stays up-to-date with the latest technology advancements.",
          },
          {
            id: 5,
            title: "Enhanced Customer Interaction",
            // description:
            //   "Reliable IT support ensures that your systems and applications are always functioning smoothly, enabling you to provide consistent and high-quality service to your customers, enhancing their experience and satisfaction.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "Don't Using Digital Marketing",
        // description:
        //   "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Constantly Evolving Strategies",
            // description:
            //   "Without IT support, technical issues can take longer to resolve, leading to prolonged periods of downtime. This may cause operational disruptions for businesses.",
          },
          {
            id: 2,
            title: "High Competition Online",
            // description:
            //   "Without proper IT support, your business is more susceptible to cyber attacks and data breaches. Lack of security measures and monitoring can put sensitive information at risk.",
          },
          {
            id: 3,
            title: "Time-Consuming",
            // description:
            //   "Ignoring IT support can lead to more significant issues that are expensive to fix. Emergency repairs and reactive solutions often cost more than proactive maintenance and support.",
          },
          {
            id: 4,
            title: "Technical Issues",
            // description:
            //   "Without IT support, your business may fall behind in adopting the latest technology trends and updates. This can impact your competitive edge and efficiency.",
          },
          {
            id: 5,
            title: "Risk of Negative Feedback",
            // description:
            //   "Employees may spend valuable time troubleshooting IT issues instead of focusing on their primary tasks. This can lead to lower productivity and overall business inefficiency.",
          },
        ],
      },
    },
    question: {
      title: "Why choose WISBATO for digital marketing?",
      cards: [
        {
          id: 1,
          title: " Trusted Digital Marketing Partner",
          description:
            " Discover how Wisbato can help you achieve your marketing goals through innovative strategies, data-driven insights, and expert execution.",
        },
        {
          id: 2,
          title: "Expertise You Can Trust",
          description:
            "Choosing Wisbato means partnering with a team that has extensive experience in various digital marketing disciplines.",
        },
        {
          id: 3,
          title: " Results-Oriented Strategies",
          description:
            " Our comprehensive digital marketing services, from SEO and social media to content marketing and PPC, are designed to boost your brand visibility and drive conversions. ",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Why we are different from others.",
      description: [
        `At  <a href="https://www.wisbato.com/" target="_blank">Wisbato</a>,  we pride ourselves on being different from other digital marketing service providers. Our approach is centered around creating customized digital marketing strategies that align with your unique business goals. Unlike the one-size-fits-all methods many companies use, we offer a variety of marketing techniques, from SEO and social media marketing to Google Ads and content marketing, ensuring that each campaign is customized  to drive the best results for your brand. As the <a href="https://www.wisbato.com/services/social-media-marketing-agency-in-calicut" target="_blank"> best digital marketing company in Calicut</a>, we focus on innovation, data-driven insights, and delivering measurable growth, making us the ideal partner for businesses looking to stand out in the crowded online space. Check out our <a href="https://www.google.com/search?q=Wisbato+Pvt.+Ltd&sca_esv=c64c958eaf0dca0a&sca_upv=1&hl=en-GB&authuser=0&biw=1366&bih=657&sxsrf=ADLYWIIU_1em3_OpIBzuiSTEmB9iLP2Chg%3A1726641860982&ei=xHbqZtjSO7mmvr0PnJaXoAU&ved=0ahUKEwjYxJyW8suIAxU5k68BHRzLBVQQ4dUDCA8&uact=5&oq=Wisbato+Pvt.+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhBXaXNiYXRvIFB2dC4gTHRkMgQQIxgnMgQQIxgnMgIQJjIIEAAYgAQYogQyCBAAGIsDGO8FMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIwglQ7QRY7QRwAXgAkAEAmAHVAaAB1QGqAQMyLTG4AQPIAQD4AQGYAgGgAuwBmAMAiAYBkgcDMi0xoAejBw&sclient=gws-wiz-serp#lrd=0x3ba65f32732f18a7:0xf2c3846272a4ddcd,1,,,," target="_blank">client words</a>.
`
      ],
    },
  },
  {
    id: 9,
    title:
      "Web Application Company in Calicut",
    description: [
      `As a leading web application company in Kerala, Wisbato specializes in custom <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank"> web development </a>  solutions to meet the needs of various industries. Our emphasis on web application development makes us serve you with innovative and user-friendly applications that will always improve your digital presence. We understand how a reliable web application can make all the difference in this competitive marketplace in gaining hold of customers, streamlining operations, and going global.

 
`,
    `We have successfully developed so many web applications at <a href="https://www.wisbato.com/" target="_blank"> Wisbato </a>, including e-commerce platforms, CRM, and CMS. Our <a href="https://www.wisbato.com/services/ecommerce-development-company-in-calicut" target="_blank"> e-commerce solutions </a>  enable businesses to sell products or services online without any discomfort and properly secure payment gateways. Our CRM systems enable companies to manage customer interactions efficiently for customer satisfaction and retention.
 `  
 ,"Another significant aspect, which remains the same in all the web applications we design, is security. We ensure huge security measures protecting all of your data and ensuring smooth-running business operations. Besides, with continuous maintenance and support, we keep your web application updated so that your website continues at its best performance. With scalable solutions, we march alongside your growing business and welcome new features and functionalities easily. With the technical expertise and  deep understanding of our client's business goals, we provide result-oriented solutions for encouraging business growth.",
 "Wisbato is proud of delivering high-quality web application development services at costs allowing customers an exceptional value for their money invested. Have Wisbato become your partner, allowing you to gain the power of web applications and propel your business up the digital ladder. In this way, we can build web applications that position you in the marketplace."
 ,,
     
      
      
    ],
    servicePlatform:true,
    subContent: {
      title: "Unique Solutions for Every Business",
      description: [
        `We at Wisbato understand that every business is different. This is why we offer customized services based on the client's specific needs and goals. Our dedicated <a href="https://www.wisbato.com/team" target="_blank">team of experts</a>  works closely with you to seek insight into your whole business, your target audience, and your vision. Our web application solutions will thus be perfectly aligned with your business vision. Whether you are looking to build an online shop for any product or service you should create a customer management tool. Our flexible approach ensures increased efficiency, superior user experience, and measurable growth. Choose Wisbato to empower your business with web applications that help you grow in a competitive landscape.
`,
      ],
      advantages: {
        id: 1,
        title: "Benefits of Having Web Application Development",
        // description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "They are accessible",
            // description:
            //   "By providing IT support, your business can implement robust security measures to protect sensitive data and systems from cyber threats, ensuring the integrity and confidentiality of your information.",
          },
          {
            id: 2,
            title: "User experience gets enhanced",
            // description:
            //   "IT support helps streamline operations by maintaining and optimizing hardware, software, and networks. This leads to fewer disruptions, allowing your team to focus on core business activities and boosting overall productivity.",
          },
          {
            id: 3,
            title: "Scalable",
            // description:
            //   "Regular IT support can prevent costly downtime and reduce the need for emergency repairs. By proactively managing and maintaining your IT infrastructure, you can avoid unexpected expenses and better allocate resources.",
          },
          {
            id: 4,
            title: "Improved collaboration",
            // description:
            //   "With IT support, you have access to skilled professionals who can offer guidance and solutions for complex technical issues, ensuring your business stays up-to-date with the latest technology advancements.",
          },
          {
            id: 5,
            title: "Maintenance is cost-effective",
            // description:
            //   "Reliable IT support ensures that your systems and applications are always functioning smoothly, enabling you to provide consistent and high-quality service to your customers, enhancing their experience and satisfaction.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "Drawbacks of Not Having Web Application Development",
        // description:
        //   "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Low reach",
            // description:
            //   "Without IT support, technical issues can take longer to resolve, leading to prolonged periods of downtime. This may cause operational disruptions for businesses.",
          },
          {
            id: 2,
            title: "Inefficient processes",
            // description:
            //   "Without proper IT support, your business is more susceptible to cyber attacks and data breaches. Lack of security measures and monitoring can put sensitive information at risk.",
          },
          {
            id: 3,
            title: "Ineffective customer engagement",
            // description:
            //   "Ignoring IT support can lead to more significant issues that are expensive to fix. Emergency repairs and reactive solutions often cost more than proactive maintenance and support.",
          },
          {
            id: 4,
            title: "Unlikely to defeat the competition",
            // description:
            //   "Without IT support, your business may fall behind in adopting the latest technology trends and updates. This can impact your competitive edge and efficiency.",
          },
          {
            id: 5,
            title: "Challenges in data management",
            // description:
            //   "Employees may spend valuable time troubleshooting IT issues instead of focusing on their primary tasks. This can lead to lower productivity and overall business inefficiency.",
          },
        ],
      },
    },
    question: {
      title: "Why should one choose Wisbato for website application development?",
      cards: [
        {
          id: 1,
          title: "Experience & expertise",
          description:
            " We have an experienced team that has worked on the production of high-quality, user-friendly web applications in various industries.",
        },
        {
          id: 2,
          title: "Ongoing Support & Maintenance",
          description:
            "We keep your web application ongoing, which makes it stand in perfect condition and always on top of its performance.",
        },
        {
          id: 3,
          title: " Quality Assurance",
          description:
            "We hold quality above everything, at Wisbato, in ensuring that every application meets stringent performance as well as security standards. ",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Partner with Our Expert Web Application Team",
      description: [
        `<a href="https://www.wisbato.com/" target="_blank">Wisbato</a> lets you make your business shine above the rest by developing the best of our applications with top web application development. We are a <a href="https://www.wisbato.com/team" target="_blank"> team of professionals</a> who have rich expertise in developing customized solutions relevant to your particular business needs, emphasizing innovative designs, user-friendly interfaces, and efficient functionality that makes your web application much more than what is expected. We are always up-to-date with the latest technologies and trends in industries and styles so that you are assured that the best solutions will help bring growth and engagement to your business. Do not settle for less; partner with the best web application development company in Kerala today and change your digital presence.<a href="https://www.wisbato.com/contact" target="_blank">Call us now</a> to talk about your project.

`
      ],
    },
  },

];

export const services = [
  {
    id: 1,
    slug: "web-development-company-in-calicut",
    title: "Web Development",
    peopleTitle: "Web Development Team",
    metaTitle: "Best Web Design & Development Company In Calicut, Kerala",
    metaDescription:
      "Are you planning to develop a website for your business in Calicut? Wisbato is the best web design & development company in Calicut, Contact now for your custom website design in Kozhikode.",
    description:
      "We believe in developing websites that reach your potential clients through visually appealing and highly responsive websites.",
    image: "/images/services/webdevelopment",
    // image: "/images/services/webdevelopment.webp",
    style: {
      backgroundColor: "#FFDD78",
    },
    width: "55",
    context: {
      mainTitle:
        "Enhance <span>Your Reach</span> by Developing an Eye-Catching Online Presence",
      subTitle: "Why Web Development is considered important?",
      content: `<span>In bussiness,<a href="https://en.wikipedia.org/wiki/Web_development" target="_blank" >Web development</a> is important because it would give the business a professional online look, which in turn gives confidence and visitors to know your business. In a competitive market, a website visitor gets an overview of your products and services. While the costs of making a website are usually quite different, the investment in a responsive, SEO-friendly website ensures the growth of a business. Wisbato the best web development company in Calicut specifically engaged in cost-effective web development and design with definite requirements for your specific business needs.
</span>`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Planning and Requirement Gathering",
        image: "/images/workingProcess/planningandexicution.webp",
        alt: "web development company in Calicut",
        list: [
          {
            id: 1,
            title: "Understanding project needs",
            content:
              "As the initial stage of the working process, we will be gathering the requirements of your project, such as the target audience, objective, features, and functionality.",
          },
          {
            id: 2,
            title: "Creation of user personas",
            content:
              "To guide the web development, our team will be creating user personas and defining user stories.",
          },
          {
            id: 3,
            title: "Planning of the website",
            content:
              "The site structure of the website is planned, and the navigation is designed.",
          },
          {
            id: 4,
            title: "Development of Strategy",
            content:
              "Once the required information is gathered, we will now be developing the most appropriate strategy for further project management.",
          },
        ],
      },
      {
        id: 2,
        title: "Design of the web",
        image: "/images/workingProcess/designoftheweb.webp",
        alt: "web design company in Calicut",
        list: [
          {
            id: 5,
            title: "Creation of sitemap",
            content:
              "To visualize the layout and functionality of the website, a wireframe or prototype of the website is created. Through this, the clients will be able to perceive how the entire website will appear.",
          },
          {
            id: 6,
            title: "Receiving approval from the client",
            content:
              "We will be waiting for the approval of the client, as we have to confirm that everything looks good so that we can resume our work.",
          },
          {
            id: 7,
            title: "UI/UX is designed",
            content:
              "At this step of web development, user interface (UI) and user experience elements are designed.",
          },
          {
            id: 8,
            title: "Development of visual design",
            content: "Colour schemes, imagery, and typography are developed.",
          },
        ],
      },
      {
        id: 3,
        title: "Frontend and Backend Development",
        image: "/images/workingProcess/backend.webp",
        alt: "website development company in Calicut",
        list: [
          {
            id: 9,
            title: "Writing and styling HTML markup",
            content:
              "To structure the content, the HTML markup is scripted. Then, with the help of CSS, the desired colors, layouts, fonts etc, the HTML elements are styled.",
          },
          {
            id: 10,
            title: "Implementation of interactivity and dynamic behavior",
            content:
              "Interactivity and dynamic behavior are implemented with the help of JavaScript or frontend frameworks/libraries such as React or Angular.",
          },
          {
            id: 11,
            title: "Selection of backend technology stack",
            content:
              "Now that the frontend development has been completed, at this point, a backend technology stack such as PHP, Python with Django, Node.js or Flask is chosen.",
          },
          {
            id: 12,
            title: "Implementation of data storage",
            content:
              "With the help of databases like MongoDB, MySQL, or PostgreSQL, data storage and retrieval are implemented.",
          },
        ],
      },
      {
        id: 4,
        title: "Integration and Testing",
        image: "/images/workingProcess/integrationandtesting.webp",
        alt: "best web development company in Calicut",
        list: [
          {
            id: 13,
            title: "Integration of frontend and backend components",
            content:
              "At this stage, to work the frontend and backend components together seamlessly, they are integrated.",
          },
          {
            id: 14,
            title: "Implementation of APIs",
            content:
              "To communicate between different parts of the system or with any third-party services, APIs are implemented.",
          },
          {
            id: 15,
            title: "Conducting unit test",
            content:
              "To confirm that individual components are working properly, unit testing is performed.",
          },
          {
            id: 16,
            title: "Performing usability testing",
            content:
              "To examine the user experience, usability testing is carried out. After this, compatibility testing is performed across multiple browsers and devices.",
          },
        ],
      },
      {
        id: 5,
        title: "Deployment",
        image: "/images/workingProcess/deployment.webp",
        alt: "best web development company in Calicut",
        list: [
          {
            id: 17,
            title: "Establishing a hosting environment",
            content:
              "Through shared hosting, VPS, or cloud hosting, a hosting environment is set up.",
          },
          {
            id: 18,
            title: "Configuration of server settings",
            content:
              "The website files are deployed after the configuration of server settings.",
          },
          {
            id: 19,
            title: "Considering security measures",
            content:
              "Our team will be assuring that required security measures are taken, such as SSL certificates, firewalls etc.",
          },
          {
            id: 20,
            title: "Final monitoring of the website",
            content:
              "The performance of the website is monitored and if any issues are spotted, troubleshooting.",
          },
        ],
      },
      {
        id: 6,
        title: "Maintenance and Updates",
        image: "/images/workingProcess/updatesandmaintain.webp",
        alt: "best web development company in Calicut",
        list: [
          {
            id: 21,
            title: "Updating of contents and features",
            content:
              "As per the feedback from the client and other requirements, both contents and features are regularly updated.",
          },
          {
            id: 22,
            title: "Monitoring the performance",
            content:
              "We will be monitoring the security and performance of the website.",
          },
          {
            id: 23,
            title: "Application of patches",
            content: "Patches are applied and updates are done.",
          },
          {
            id: 24,
            title: "Regular Optimization",
            content:
              "With the aim of improving the performance, user experience, and accessibility, our team continuously optimizes the website.",
          },
        ],
      },
    ],
    outcomes: outcomes[0],
    FAQData: [
      // {
      //   id: 1,
      //   title: "How will I make my website mobile-friendly?",
      //   content:
      //     "To make your website look visually appealing on both small and large devices, you may develop a responsive website. Once creating such a website, your web traffic will also increase and thereby improve your search engine rankings. If you are hiring us, we deliver a highly responsive website that ensures an optimised browsing experience.",
      // },
      // {
      //   id: 2,
      //   title: "How does web development differ from web design?",
      //   content:
      //     "When web development introduces dynamic and interactive functions to it, web design is the process of creating a website. Moreover, web developers are the ones who add functionalities to the website and the web designers enhance the user experience of the site by adding an aesthetic value to it. Most notably, web developers are held accountable for coding.",
      // },
      // {
      //   id: 3,
      //   title: "What is the need for hiring a professional web developer?",
      //   content:
      //     "Doing web development all by yourselves will prove to be a bad idea, unless you are taking a lot of time and effort, and have the right language and its best practices. A professional web developer possesses the right skills and expertise to get your website running. Besides that, they are most likely to follow the latest web development trends and practices.",
      // },
      {
        id: 4,
        title: "Why need a website for my business?",
        content:
          `In 2024, over 5.35 billion people will use the internet globally. So think of your website as your online store, open 24/7 and easy to access. It builds credibility, showcases your products and service offerings, and attracts customers even when you're not working. It's essential for reaching new audiences, generating leads, and staying competitive in today's online world. This is the reason <a href="https://www.wisbato.com/blogs/why-every-business-needs-a-professional-website" target="_blank">why you need a website for your website</a>.`

      },
      {
        id: 5,
        title: "What website should I use for my small business in Calicut?",
        content:
          "Are you a small business owner in Calicut?, you should use a website that is professionally designed, user-friendly, and customized to your specific needs. Platforms like WordPress, Wix, or Squarespace are great for creating simple, cost-effective websites. However, for a more customized solution, partnering with a professional web development company in Calicut like WISBATO can ensure your website is unique, scalable, and aligned with your business goals.",
      },
      {
        id: 6,
        title:
          "How much time will it take to complete my website from beginning to end?",
        content:
          "The time it takes to complete a website from start to finish depends on the type and complexity of your project. Typically, the process begins with planning and organization, which takes about 1-2 weeks. If you require a standard startup website, it usually takes 1-2 weeks to build. However, if you need a more complex site like an e-commerce website, the development time can extend to 2-3 weeks. And graphic design, UI/UX, rich content, and SEO optimization are also crucial & can impact the timeline. Ultimately, the duration largely depends on your specific requirements and the project's complexity.",
      },
      {
        id: 7,
        title:
          "How can a professional website benefit my business in Calicut?",
        content:
          " A professional website will make a huge difference for your business in terms of efficiency in creating awareness of your business and can easily be accessed by many potential customers. It sets your business credibility and presents your products or services to a bigger market. Hence, with the localized SEO services, your web site can attract local consumers in Calicut in Kerala. The use of an effective website creates favorable opportunities for engaging your company’s customers and fosters trustful cooperation in the long term.",
      },
      {
        id: 8,
        title:
          "How much is the website development cost in Calicut?",
        content:
          `The cost of website development in Calicut varies based on the size and complexity of the project. For a small dynamic website, prices start from RS: 5,500 to RS: 42,500. Mid-level websites typically range from RS: 8,500 to RS: 85,000. For large business websites, costs begin at RS: 15,000 and can go up to RS: 1,70,000. The final price depends on the client's specific requirements and features they want to include. Check out full details on <a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank">website development cost.</a>
`,
      },
      {
        id: 9,
        title:
          " Why should I choose a Calicut-based company for my web development?",
        content:
          `Choosing a Calicut-based web development company offers several benefits. Local companies understand the unique business environment and customer preferences in the region, allowing them to create best solutions that resonate with your target audience.They also provide more personalized support, with easier communication and quicker response times.It reduces the <a href="https://www.wisbato.com/blogs/what-is-the-bounce-rate-how-to-improve-it" target="_blank"> bounce rates</a>, keeps visitors engaged with the website, and increases the rate of conversion.
`,
      },
    ],
  },
  {
    id: 2,
    slug: "application-development-company-in-calicut",
    title: "Application Development",
    peopleTitle: "Application Development Team",
    metaTitle: "Application Development Company In Calicut",
    metaDescription:
      "Wisbato builds custom web applications in Calicut. We craft user-friendly mobile and web applications to meet your unique business needs in Calicut. Get a free quote today!",
    description:
      "For a better online presence, we ensure functionality with our unique app services. Make your application more secure and free of bugs, as we follow neat structures of coding.",
    image: "/images/services/mobileapp",
    // image: "/images/services/mobileapp.webp",
    style: {
      backgroundColor: "#DCD2F7",
      position: "relative",
    },
    width: "45",
    context: {
      mainTitle:
        "<span>Boost productivity and engagement</span> with expertly developed web applications",
      subTitle: "Why Every Business Needs Web Application Development for Success",
      content:
        ` <a href="https://en.wikipedia.org/wiki/Web_application" target="_blank">Web application</a> development is crucial for any business, as it helps business houses sell their products or services on the internet, provide access to very important information, as well as also reach diverse audiences. Additionally, it avails features of consumer engagement, cross-platform compatibility, and centralized data that web applications have in streamlining all operations related to increasing customer experience. They also provide an inexpensive solution for businesses looking to increase their online presence and market scope.
`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Idea Generation and Planning",
        image: "/images/workingProcess/application development/Idea Generation and Planning.jpg",
        alt:"Idea Generation and Planning",
        list: [
          {
            id: 1,
            title: "Brainstorming Ideas",
            content:
              "At the very step of app development, the brainstorming of ideas will be done about how it will be feasible in the current market.",
          },
          {
            id: 2,
            title: "Identification of Target Audience",
            content:
              "You have to decide who the target audience of the app is, before moving further with your plans.",
          },
          {
            id: 3,
            title: "Defining the Purpose of the App",
            content:
              "Among the feasibility studies done around the app, the major purpose behind the development of the application will be analysed.",
          },
          {
            id: 4,
            title: "Market Research",
            content:
              "Prior to investing significant resources in the app's development and promotion, we will try to determine whether there is a market niche for the app idea.",
          },
        ],
      },
      {
        id: 2,
        title: "Wireframing and Prototyping",
        image: "/images/workingProcess/application development/Wireframing and Prototyping.jpg",
        alt:"Wireframing and Prototyping",
        list: [
          {
            id: 5,
            title: "Creation of a Rough Wireframe",
            content:
              "A basic illustration of the interface of the screen, which provides a demo about how the target audience is going to use the product, will be created.",
          },
          {
            id: 6,
            title: "Collecting Feedback on App Wireframes",
            content:
              "It is very essential to get feedback on the app wireframes at least from a larger majority of the target audience.",
          },
          {
            id: 7,
            title: "Making Use of the Tools",
            content:
              "The feedbacks are gathered with the help of certain tools.",
          },
          {
            id: 8,
            title: "Providing Mock-ups to the Clients",
            content:
              "Since we believe in an iterative approach, we will be offering as many mock-ups to the users as possible, which allow the strategy for the functionality of the app to change and adapt.",
          },
        ],
      },
      {
        id: 3,
        title: "Design",
        image: "/images/workingProcess/application development/Design.jpg",
        alt:"Design",
        list: [
          {
            id: 9,
            title: "Refining the Approved Wireframes",
            content: "The designs will be crafted by the UX and UI designers.",
          },
          {
            id: 10,
            title: "Creation of Visual Elements of the App",
            content:
              "As per the requirements of the app, these elements will be set up by the designers.",
          },
          {
            id: 11,
            title: "Production of High-Fidelity Mock-ups",
            content:
              "Once the information on what happens if the visual elements are tapped, dragged or swiped, our developers will be turning into a working app.",
          },
          {
            id: 12,
            title: "Establishment of Brand Guidelines",
            content:
              "This ensures that the branding of the app is consistent and well-implied to the designers and developers. After this, the designing of the market strategy will be done.",
          },
        ],
      },
      {
        id: 4,
        title: "Development",
        image: "/images/workingProcess/application development/Development.jpg",
        alt:"Development",
        list: [
          {
            id: 13,
            title: "Concluding Iterating through Feedback",
            content:
              "Feedback about the wireframes will be received and we will be making visible and large decisions.",
          },
          {
            id: 14,
            title: "Integration of Analytic Engine",
            content:
              "We will be cross-checking about and figuring out how the app is perceived and analyzing the general flow of users.",
          },
          {
            id: 15,
            title: "Organizing Events",
            content:
              "More user interactions will be done to know more about the users and their approach to using the app.",
          },
          {
            id: 16,
            title: "Further Iteration of the App",
            content:
              "To have the best possible outcome, we will be iterating the design of the app before it is released to the world.",
          },
        ],
      },
      {
        id: 5,
        title: "Testing and Deployment",
        image: "/images/workingProcess/application development/Testing and Deployment.jpg",
        alt:"Testing and Deployment",
        list: [
          {
            id: 17,
            title: "Identification and Fixing of Bugs",
            content:
              "It will be done thoroughly, with the help of Quality assurance testers.",
          },
          {
            id: 18,
            title: "Functional Testing and Compatibility Testing",
            content:
              "Through this, we ensure that all features of the app are functioning as per the expectations. We make sure that the app is compatible with multiple operating systems through compatibility tests.",
          },
          {
            id: 19,
            title: "Performance Testing and Security Testing",
            content:
              "The speed and the level of responsiveness will be assessed through this testing. Finally, the security tests are done to detect and address any vulnerability.",
          },
          {
            id: 20,
            title: "Deployment",
            content:
              "Now that the app has passed all these tests, it will be deployed and made available for download through app stores or channels.",
          },
        ],
      },
      {
        id: 6,
        title: "Maintenance and Updates",
        image: "/images/workingProcess/application development/Maintenance and Updates.jpg",
        alt:"Maintenance and Updates",
        list: [
          {
            id: 21,
            title: "Monitoring is Resumed",
            content:
              "Even after the launch of the application, the performance of the apps will continue to be monitored by our developers.",
          },
          {
            id: 22,
            title: "Collecting Feedback",
            content:
              "Feedback will still be gathered if they have to be iterated. It could be about enhancing functionality or fixing bugs.",
          },
          {
            id: 23,
            title: "Release Updates",
            content:
              "Any more updates will be made as per the feedback gathered by the client. The issues identified in the previous step will be addressed swiftly.",
          },
        ],
      },
    ],
    outcomes: outcomes[8],
    FAQData: [
      {
        id: 1,
        title: "What types of web applications do you develop?",
        content:
          "We build almost everything in the e-commerce space, including online selling e-commerce platforms, CRM, content management systems, and many customized applications designed to meet certain business needs. Their solutions are dynamic and scalable, meaning they reflect the needs of businesses from various sectors.",
      },
      {
        id: 2,
        title: "How long does it take to develop a web application?",
        content:
          "Our timeframes for the development of web applications will depend upon the complexity and needs of a particular project. An easy application would take about 4 to 8 weeks; a complex system could take 10 to 12 weeks. We may also be in a position to define a much more specific timeline depending on your requirements and the scope of the project that we assess.",
      },
      {
        id: 3,
        title: " Can the web application be tailored to fulfill my custom business requirements?",
        content:
          "Absolutely. Our company provides customized web application solutions that are absolutely tailored to satisfy your business needs. We can provide you with one-of-a-kind features, industry-specific solutions, or any feature that you may want on the web that would give your users a personal touch. We work closely with you to ensure the application aligns with your goals and enhances operational efficiency.",
      },
      {
        id: 4,
        title: " Can you provide support and maintenance after the completion of the project?",
        content:
          "Yes, we provide support and maintenance services after the successful delivery of your project. for your app. This is achieved through performance monitoring, bug fixes, security updates, feature enhancements, etc. We use the industry's best technology for your project based on your requirements. It will ensure speed, security and optimized performance of your app.  ",
      },
      {
        id: 5,
        title: "  How do you make sure the web application is secure?",
        content:
          "We implement security through SSL encryption, secure authentication, regular security audits, and data protection protocols. We are not only up to date with the best industry practices but also strict with the standards set for regulatory compliance, thereby eliminating vulnerabilities in your web application and attacks.",
      },
      {
        id: 6,
        title: "  What technology do you use in the development of your web application?",
        content:
          "We use the best technologies from React, Angular, Node.js, Laravel, and PHP to create scalable and highly-performing web applications. Based on the specific requirements of your project, we determine the best technology stack for your project. We ensure speed, security, and optimization for the growth of the developed application.",
      },
    ],
  },
  {
    id: 3,
    slug: "branding-agency-in-calicut",
    title: "Branding",
    peopleTitle: "Branding Team",
    metaTitle: "Top Branding Agency In Calicut | Wisbato",
    metaDescription:
      "Discover the best branding and advertising agency in Calicut. Brand your business with Wisbato for exceptional results.",
    description:
      "Enhance brand awareness with us, as we could aid you to stand out from the ordinary. Refine the visual appeal of your brand with our strong brand strategies.",
    image: "/images/services/branding",
    // image: "/images/services/branding.webp",
    style: {
      backgroundColor: "#F6C4FE",
      position: "relative",
    },
    width: "45",
    context: {
      mainTitle:
        "Create a Distinct Identity for <span>your Brand</span> with Us",
      subTitle: "How important is Branding?",
      content:
        ` <a href="https://en.wikipedia.org/wiki/Branding" target="_blank">Branding </a>is an important part of your business, because it gives your business a unique identity that sets it apart from competitors.A <a href="https://en.wikipedia.org/wiki/Brand" target="_blank">brand </a>isn't just a logo or a name; it's the entire experience your customers have with your product or service. Whether it's a name, a design, or a symbol, these elements come together to create an image that people recognize and trust. In a crowded marketplace, having a strong brand helps your business stand out, communicate its values, and build lasting relationships with customers. It’s how customers remember you and choose you over others.
`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Research and Analysis",
        image: "/images/workingProcess/branding/Research and Analysis.jpg",
        alt:"branding agency in Calicut",
        list: [
          {
            id: 1,
            title: "Conducting Research",
            content:
              "As the very first step, we will determine the present condition of your brand and the path you must consider to unlock your potential.",
          },
          {
            id: 2,
            title: "Gathering of insights",
            content:
              "To collect and know about the insights, our team will be conducting surveys, interviews, and market research.",
          },
          {
            id: 3,
            title: "Identification of opportunities and challenges",
            content:
              "Industry trends are analyzed to identify opportunities and challenges.",
          },
          {
            id: 4,
            title: "Performing research facilities",
            content:
              "For the establishment of the vision, mission, values, and strategies for your company, certain research facilities are performed.",
          },
        ],
      },
      {
        id: 2,
        title: "Defining Brand Strategy",
        image: "/images/workingProcess/branding/Defining Brand Strategy.jpg",
        alt:"best branding company in Kozhikode",
        list: [
          {
            id: 5,
            title: "Initial development of brand strategy",
            content:
              "Here, we will be figuring out the direction in which the brand should proceed to grow the business.",
          },
          {
            id: 6,
            title: "Assessment of the brand image",
            content:
              "Now, we will assess and define how the brand wants to be perceived by its clients.",
          },
          {
            id: 7,
            title: "Definition of brand positioning",
            content:
              "In this stage, our team will define the positioning of your brand and find out how it differs from its competitors.",
          },
          {
            id: 8,
            title: "Development of brand architecture",
            content:
              "In the final step of defining brand strategy, the brand architecture will be developed, and the relationship between the company's master brand and sub-brands, if any will be revealed.",
          },
        ],
      },
      {
        id: 3,
        title: "Creation of Brand Identity and Messaging",
        image: "/images/workingProcess/branding/Creation of Brand Identity and Messaging.jpg",
        alt:"branding agency for your business growth",
        list: [
          {
            id: 9,
            title: "Designing visual elements",
            content:
              "The visual elements of the brand such as the colour palette, logo, typography, and imagery will be designed.",
          },
          {
            id: 10,
            title: "Development of brand guidelines",
            content:
              "To ensure consistency in how the brand is showcased in diverse channels and touchpoints, specific brand guidelines are developed.",
          },
          {
            id: 11,
            title: "Preparation of brand messaging",
            content:
              "The messaging of the brand such as taglines, key messages, and value propositions are crafted.",
          },
          {
            id: 12,
            title: "Decision of brand voice",
            content:
              "The brand voice, along with brand tone, is defined, as they reflect the personality and values of the brand.",
          },
        ],
      },
      {
        id: 4,
        title: "Brand Implementation and Activation",
        image: "/images/workingProcess/branding/Brand Implementation and Activation.jpg",
        alt:"Brand Implementation and Activation",
        list: [
          {
            id: 13,
            title: "Launch of brand identity",
            content:
              "Through multiple touchpoints, the brand identity and messaging are rolled out. It would comprise marketing materials such as websites, advertisements, brochures, etc.",
          },
          {
            id: 14,
            title: "Implementation of marketing campaign",
            content:
              "Marketing campaigns are launched with the motive of introducing the brand to the target audience.",
          },
          {
            id: 15,
            title: "Engaging in PR activities",
            content:
              "Companies must get more publicity, so we attain that buzz and media coverage, and we will engage in public relations activities.",
          },
          {
            id: 16,
            title: "Promotion of brand advocacy",
            content:
              "Promote brand advocacy by establishing relationships with customers and encouraging user-generated content and testimonials.",
          },
        ],
      },
      {
        id: 5,
        title: "Monitor and Manage Brand Perception",
        image: "/images/workingProcess/branding/Monitor and Manage Brand Perception.jpg",
        alt:"Monitor and Manage Brand Perception",

        list: [
          {
            id: 17,
            title: "Tracking of KPIs and brand metrics",
            content:
              "Since the assessment of the effectiveness of branding efforts is crucial, we will track brand metrics and KPIs.",
          },
          {
            id: 18,
            title: "Monitoring for feedback and sentiment",
            content:
              "Reviews, social media, and other channels will be monitored for availing the feedback and sentiment from the customers.",
          },
          {
            id: 19,
            title: "Addressing issues",
            content:
              "If any issues or negative perceptions arise, they will be addressed rapidly and proactively.",
          },
        ],
      },
      {
        id: 6,
        title: "Brand Evolution and Adaptation",
        image: "/images/workingProcess/branding/Brand Evolution and Adaptation.jpg",
        alt:"Brand Evolution and Adaptation",
        list: [
          {
            id: 20,
            title: "Update the brand strategy",
            content:
              "In accordance with the changes in consumer preferences, market, and competitive landscape, we will continuously evaluate and evolve the brand strategy.",
          },
          {
            id: 21,
            title: "Refreshing brand identity",
            content:
              "To stay relevant in the market, we will be refreshing the brand identity and messaging.",
          },
          {
            id: 22,
            title: "Sticking to the goals of the brand",
            content:
              "While we are updating the brand identity, we ensure that we are maintaining alignment with the objectives and values of the brand.",
          },
        ],
      },
    ],
    outcomes: outcomes[5],
    FAQData: [
      {
        id: 1,
        title: "Why is business branding important for companies in Calicut?",
        content:
          "Branding plays a crucial role in helping businesses in Calicut stand out in a competitive market. A strong brand helps establish trust with customers, improves recognition, and differentiates your company from competitors. For local businesses, branding also enhances the connection with the community, helping you build long-term loyalty.",
      },
      {
        id: 2,
        title:
          "How can branding improve my business presence in Calicut?",
        content:
          "Effective branding boosts your visibility and reputation in Calicut by creating a consistent and professional image. It helps you communicate your business values and promises clearly, whether through logos, color schemes, or messaging. This leads to increased customer trust and a stronger market presence, both locally and online.",
      },
      {
        id: 3,
        title: "What branding services are essential for small businesses in Calicut?",
        content:
          `Small or high businesses in Calicut should focus on essential branding services such as logo design, brand messaging, <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">website development</a>, <a href="https://www.wisbato.com/services/social-media-marketing-agency-in-calicut" target="_blank">social media branding</a>, and business card design. These elements create a cohesive brand identity that reflects your company's values and helps attract and retain customers.
`,
      },
      {
        id: 4,
        title:
          " Can local branding help my business reach more customers in Calicut?",
        content:
          "Yes, focusing on local branding strategies can significantly increase your customer base in Calicut. By creating marketing campaigns and brand messaging tailored to local interests and culture, your business will resonate more with Calicut residents. Utilizing local SEO techniques in your branding also ensures that potential customers in the area can easily find you.",
      },
      {
        id: 5,
        title:
          " How long does it take to see results from branding efforts for businesses in Calicut?",
        content:
          "Branding is a long-term investment, and it takes time to see full results. However, local businesses in Calicut can start seeing increased awareness and customer engagement within a few months if branding efforts are consistent across digital and physical platforms. Over time, a well-executed brand strategy builds trust and leads to lasting customer relationships.",
      },
      
    ],
  },
  {
    id: 4,
    slug: "ecommerce-development-company-in-calicut",
    title: "ECommerce Development",
    peopleTitle: "Ecommerce Development Team",
    metaTitle: "Leading E-commerce Web Designing Company In Calicut",
    metaDescription:
      "Are you planning to create an E-Commerce website for your business in Calicut? Wisbato is Leading E-Commerce web design & development company in Calicut | contact now",
    description:
      "With our tailored eCommerce solutions, you may provide a unique shopping experience to your clients, besides boosting your sales.",
    image: "/images/services/ecommerce",
    // image: "/images/services/ecommerce.webp",
    style: {
      backgroundColor: "#F7D2DB",
    },
    width: "55",
    context: {
      mainTitle:
        "Be the Exact Virtual face of <span>your Business</span> through eCommerce development",
      subTitle: "Why do businesses need Ecommerce?",
      content:
        `In 2024 having an <a href="https://en.wikipedia.org/wiki/E-commerce" target="_blank">e-commerce website</a> is an essential part for any business looking to grow and stay competitive. A good e-commerce web development company allows your business to reach all over customers 24/7, and access your website everywhere and expand your market beyond local limits. It offers an easy shopping experience for customers, allowing them to browse and buy from the comfort of their homes or everywhere. And we add client reviews and rating sections that get a trust for your customers. Additionally, an online e-store helps increase your brand’s visibility and credibility while providing valuable insights into customer behavior and preferences. By having an e-commerce website in Calicut, your business can increase sales, improve customer engagement, and trust. So build an Ecommerce website.`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Requirement Analysis",
        image: "/images/workingProcess/Ecommerce/RequirementAnalysis.jpg",
        alt:"Ecommerce development company in Calicut",
        list: [
          {
            id: 1,
            title: "Client Consultation",
            content:
              "Initiating discussions with the client to understand their business model, goals and target audience.",
          },
          {
            id: 2,
            title: "Market Research",
            content:
              "Conducting thorough market research to identify industry trends, competitors, and consumer preferences.",
          },
          {
            id: 3,
            title: "Feature Identification",
            content:
              "Determining the essential features and functionalities required for the e-commerce platform.",
          },
          {
            id: 4,
            title: "Scope Definition",
            content:
              "Defining the project scope, including deliverables, timeline, and budget constraints.",
          },
          {
            id: 5,
            title: "User Persona Creation",
            content:
              "Developing detailed user personas to tailor the platform to the target audience's needs.",
          },
          {
            id: 6,
            title: "Documentation",
            content:
              "Documenting all gathered requirements and insights for reference throughout the development process.",
          },
        ],
      },
      {
        id: 2,
        title: "Planning and Strategy",
        image: "/images/workingProcess/Ecommerce/Planning and Strategy new.jpg",
        alt:" Ecommerce website development company in calicut ",
        list: [
          {
            id: 7,
            title: "Platform Selection",
            content:
              "Picking out the appropriate ecommerce platform (e.g., WooCommerce, Shopify, Magento) based on client requirements and scalability needs.",
          },
          {
            id: 8,
            title: "Technology Stack Definition",
            content:
              "Determining the technology stack required for both front-end and back-end development.",
          },
          {
            id: 9,
            title: "Resource Allocation",
            content:
              "Assigning roles and responsibilities to team members, including developers, designers, and project managers.",
          },
          {
            id: 10,
            title: "Milestone Setting",
            content:
              "Establishing clear milestones and checkpoints to track progress and ensure timely delivery.",
          },
          {
            id: 11,
            title: "Risk Assessment",
            content:
              "Identifying potential risks and challenges and developing mitigation strategies to address them.",
          },
          {
            id: 12,
            title: "Budget Planning",
            content:
              "Preparing a detailed budget plan accounting for development costs, third-party integrations, and post-launch maintenance.",
          },
        ],
      },
      {
        id: 3,
        title: "Design and User Experience (UX)",
        image: "/images/workingProcess/Ecommerce/Design and User Experience (UX).jpg",
        alt:" Develop ecommerce website with best UX ",

        list: [
          {
            id: 13,
            title: "Wireframing",
            content:
              "Creating wireframes to visualize the layout and structure of the ecommerce platform.",
          },
          {
            id: 14,
            title: "UI Design",
            content:
              "Developing a visually appealing user interface that aligns with the client's branding and enhances user experience.",
          },
          {
            id: 15,
            title: "Responsive Design",
            content:
              "Ensuring the platform is responsive and optimized for seamless user experience across various devices and screen sizes.",
          },
          {
            id: 16,
            title: "Prototype Development",
            content:
              "Building interactive prototypes to test navigation flow and user interactions.",
          },
          {
            id: 17,
            title: "Accessibility Considerations",
            content:
              "Incorporating accessibility features to ensure the platform is usable by individuals with disabilities.",
          },
          {
            id: 18,
            title: "Feedback Iteration",
            content:
              "Gathering feedback from stakeholders and iterating on the design to refine and improve usability.",
          },
        ],
      },
      {
        id: 4,
        title: "Development and Implementation",
        image: "/images/workingProcess/Ecommerce/Development and Implementation.jpg",
        alt:" Ecommerce designers in Calicut  ",

        list: [
          {
            id: 19,
            title: "Front-end Development",
            content:
              "Writing clean and efficient front-end code using HTML, CSS, and JavaScript to bring the design to life.",
          },
          {
            id: 20,
            title: "Back-end Development",
            content:
              "Developing robust back-end functionalities using appropriate programming languages and frameworks (e.g., PHP, Node.js, Django).",
          },
          {
            id: 21,
            title: "Database Design",
            content:
              "Designing and implementing a scalable database architecture to manage product data, user information, and transactions.",
          },
          {
            id: 22,
            title: "Integration of Third-party APIs",
            content:
              "Integrating payment gateways, shipping providers, and other third-party services to enable seamless transactions and order management.",
          },
          {
            id: 23,
            title: "Security Implementation",
            content:
              "Implementing security measures such as HTTPS encryption, data encryption, and user authentication to protect sensitive information.",
          },
          {
            id: 24,
            title: "Version Control",
            content:
              "Utilizing version control systems like Git to track changes and collaborate effectively among team members.",
          },
        ],
      },
      {
        id: 5,
        title: "Testing and Quality Assurance (QA)",
        image: "/images/workingProcess/Ecommerce/Testing and Quality Assurance (QA).jpg",
        alt:"best ecommerce web development company in Calicut  ",

        list: [
          {
            id: 25, 
            title: "Functional Testing",
            content:
              "Testing each feature and functionality to ensure they work as intended according to the requirements.",
          },
          {
            id: 26,
            title: "Compatibility Testing",
            content:
              "Verifying cross-browser and cross-device compatibility to ensure a consistent user experience.",
          },
          {
            id: 27,
            title: "Performance Testing",
            content:
              "Assessing the platform's performance under various load conditions and optimizing for speed and responsiveness.",
          },
          {
            id: 28,
            title: "Security Testing",
            content:
              "Conducting security audits and penetration testing to identify and address potential vulnerabilities.",
          },
          {
            id: 29,
            title: "Usability Testing",
            content:
              "Gathering feedback from real users to assess the platform's usability and identify areas for improvement.",
          },
          {
            id: 30,
            title: "Bug Fixing and Iteration",
            content:
              "Addressing any bugs or issues discovered during testing and iterating on the platform to refine and enhance its performance.",
          },
        ],
      },
      {
        id: 6,
        title: "Deployment and Maintenance",
        image: "/images/workingProcess/Ecommerce/Deployment and Maintenance.jpg",
        alt:"Deployment and Maintenance for ecommerce website",
        list: [
          {
            id: 31,
            title: "Deployment Planning",
            content:
              "Planning the deployment process, including server setup, domain configuration, and migration to the production environment.",
          },
          {
            id: 32,
            title: "Launch Preparation",
            content:
              "Performing final checks and user acceptance testing to ensure the platform is ready for launch.",
          },
          {
            id: 33,
            title: "Go-live Strategy",
            content:
              "Coordinating the launch of the ecommerce platform, including marketing initiatives and promotional campaigns.",
          },
          {
            id: 34,
            title: "Post-launch Monitoring",
            content:
              "Monitoring the platform's performance, user feedback, and analytics to identify any issues and opportunities for improvement.",
          },
          {
            id: 35,
            title: "Ongoing Support",
            content:
              "Providing continuous support and maintenance to address any post-launch issues, apply updates, and implement new features or enhancements.",
          },
          {
            id: 36,
            title: "Performance Optimization",
            content:
              "Regularly optimizing the platform for speed, security, and scalability to ensure optimal performance and user experience.",
          },
        ],
      },
    ],
    outcomes: outcomes[1],
    FAQData: [
      {
        id: 1,
        title:
          " What services does an e-commerce web development company in Calicut offer?",
        content:
          `An e-commerce web development company in Calicut typically offers a range of services customized for online businesses. These services include custom e-commerce website design, payment gateway integration, secure shopping cart development, SEO optimization for online stores, and ongoing maintenance. Many companies also provide solutions for inventory management and  <a href="https://www.wisbato.com/services/mobile-app-development" target="_blank">mobile app development</a> to complement the e-commerce platform.
`,
      },
      {
        id: 2,
        title: " Why should I choose a Calicut-based company for my e-commerce web development?",
        content:
          "Choosing a Calicut-based e-commerce web development company provides you with the advantage of localized expertise. These companies are well-versed in the regional market trends, business culture, and customer preferences, allowing them to create best solutions that resonate with local and global audiences. Additionally, they offer affordable rates without compromising on quality, making them a cost-effective option for businesses of all sizes.",
      },
      {
        id: 3,
        title:
          " How long does it take to develop a custom e-commerce website in Calicut?",
        content:
          "The timeline for developing a custom e-commerce website depends on the complexity of your requirements. A basic e-commerce site with standard features could take 5-7 weeks, while more complex platforms with integrations, custom designs, and advanced functionality may take 8-12 weeks or longer. Calicut-based companies generally offer agile development processes to ensure faster project delivery without sacrificing quality.",
      },
      {
        id: 4,
        title:
          " What technologies do e-commerce web development companies in Calicut use?",
        content:
          "E-commerce web development companies in Calicut use a variety of technologies depending on the specific needs of the project. Popular platforms include WooCommerce for WordPress, Magento, Shopify, and custom solutions using frameworks like Laravel or Node.js. They also use tools like HTML5, CSS3, JavaScript, and modern front-end frameworks like React or Vue.js to ensure that the website is fast, responsive, and user-friendly.",
      },
      {
        id: 5,
        title:
          " How does e-commerce web development ensure website security?",
        content:
          "Website security is our top priority for e-commerce development. We implement multiple layers of security, such as SSL certificates for encrypted communication, secure payment gateways, and regular software updates. Additionally, companies follow best practices for data protection and PCI-DSS compliance to ensure that customer transactions and data are secure from cyber threats.",
      },
    ],
  },
  {
    id: 5,
    slug: "digital-marketing-agency-in-calicut",
    title: "Digital Marketing",
    peopleTitle: "Digital Marketing Team",

    metaTitle: "Wisbato- Best Digital Marketing Agency In Calicut.",
    metaDescription:
      "Select best digital marketing agency in Calicut, . We provide all digital marketing services like SEO, SMM, SEM, in your business, that boost your online presents. Contact now",
    description:
      "Build your brand values by letting us promote your products and services through diverse social channels. Connect with a larger audience using the right channels.",
    image: "images/services/digitalmarketing",
    // image: "images/services/digitalmarketing.webp",
    style: {
      backgroundColor: "#C3DFFF",
    },
    width: "35",
    context: {
      mainTitle:
        "Transform <span>your Buisness</span> with Best Digital Marketing Solutions",
      subTitle: "Why digital marketing is important",
      content:
        `Every business needs <a href="https://en.wikipedia.org/wiki/Digital_marketing" target="_blank"> digital marketing</a>  strategies. With more consumers relying on the internet to discover products and services, digital marketing helps businesses reach their target audience where they spend most of their time online. From social media to search engines, digital marketing allows companies to boost visibility, attract potential customers, and engage with their audience in real-time. It also provides valuable data to measure performance, optimize strategies, and increase <a href="https://en.wikipedia.org/wiki/Return_on_investment" target="_blank"> ROI</a>. Without a strong digital marketing strategy, businesses risk falling behind their competitors and missing out on growth opportunities.
`,
    },
    workingProcess: [
      {
        title: "Research & Strategy Development",
        image: "/images/workingProcess/digital marketing/Research Analysis.jpg",
        alt:"Best digital marketing agency in Calicut",

        list: [
          {
            id: 1,
            title: "Market Research",
            content:
              "Analyze industry trends and competitor strategies.",
          },
          {
            id: 2,
            title: " Audience Identification",
            content:
              "Define target audience demographics and behaviors.",
          },
          {
            id: 3,
            title: " Goal Setting",
            content:
              " Establish clear, measurable objectives for campaigns.",
          },
          {
            id: 4,
            title: "Content Planning",
            content:
              "Develop a roadmap for content creation and promotion.",
          },
        ],
      },
      {
        title: "Content Creation & Optimization",
        image: "/images/workingProcess/digital marketing/Content Creation & Optimization.jpg",
        alt:"Digital marketing company in Calicut create best content for marketing",
        list: [
          {
            id: 1,
            title: "SEO Optimization",
            content:
              "Ensure all content is optimized for search engines.",
          },
          {
            id: 2,
            title: "  Engaging Copywriting",
            content:
              "Create compelling, audience-focused content.",
          },
          {
            id: 3,
            title: " Visual Content",
            content:
              "  Design attention-grabbing visuals and graphics.",
          },
          {
            id: 4,
            title: " Multi-Platform Content",
            content:
              " Adapt content for social media, blogs, and websites.",
          },
        ],
      },
      {
        title: "Campaign Execution & Monitoring",
        image: "/images/workingProcess/digital marketing/Campaign Execution & Monitoring.jpg",
        alt:" Execute a good ad campaign",
        list: [
          {
            id: 1,
            title: " Social Media Management",
            content:
              "Launch and manage social media campaigns.",
          },
          {
            id: 2,
            title: "  PPC & Ads",
            content:
              " Set up and manage pay-per-click and online ad campaigns.",
          },
          {
            id: 3,
            title: " Email Marketing ",
            content:
              "   Implement targeted email campaigns to nurture leads.",
          },
          {
            id: 4,
            title: "  Performance Tracking",
            content:
              " Monitor campaign performance with analytics tools.",
          },
        ],
      },
      {
        title: "Analysis & Continuous Improvement",
        image: "/images/workingProcess/digital marketing/Analysis & Continuous Improvement.jpg",
        list: [
          {
            id: 1,
            title: "  Data Analysis",
            content:
              "Review key performance indicators (KPIs) and metrics.",
          },
          {
            id: 2,
            title: " A/B Testing",
            content:
              "  Test variations of campaigns to optimize performance.",
          },
          {
            id: 3,
            title: " Client Feedback ",
            content:
              "   Gather insights from client feedback for improvements.",
          },
          {
            id: 4,
            title: "  Strategy Refinement",
            content:
              "Adjust strategies based on data for better results.",
          },
        ],
      },

    ],
    outcomes: outcomes[7],
    FAQData: [
      {
        id: 1,
        title: "What digital marketing services do you offer for Calicut businesses?",
        content:
          "We offer a range of digital marketing services for Calicut business owners, including SEO, social media marketing, pay-per-click (PPC) advertising, content marketing, web development, email marketing, and online reputation management. Our goal is to create customized strategies that fit your business needs and drive real results.",
      },
      {
        id: 2,
        title: "How can digital marketing help my local business in Calicut?",
        content:
          "Digital marketing helps local businesses in Calicut by increasing their online visibility, attracting potential customers, and building a stronger brand presence. Through targeted campaigns, we help you reach your specific audience in the region, improve website traffic, and ultimately drive sales.",
      },
      {
        id: 3,
        title: "How do you measure the success of a digital marketing campaign?",
        content:
          "We measure success through key performance indicators (KPIs) such as website traffic, conversion rates, lead generation, customer engagement, and return on investment (ROI). We provide regular reports so you can see the impact of each campaign on your business growth.",
      },
      {
        id: 4,
        title: "How long does it take to see results from digital marketing?",
        content:
          "The timeline for results varies depending on the service and strategy. SEO typically takes a few months to show significant improvements, while PPC and social media campaigns can drive faster results. We'll work with you to set realistic expectations and provide ongoing optimization to ensure long-term success.",
      },
      {
        id: 5,
        title: "How much does your digital marketing service cost per month?",
        content:
          `Our digital marketing services start at ₹25,000 per month, which includes social media page management, the creation of 15 posters, and 4 to 5 engaging reel videos, along with effective branding strategies. Please note that pricing may vary based on specific client requirements. If you're interested in paid campaigns or additional packages, feel free to  <a href="https://www.wisbato.com/contact" target="_blank">contact us</a> for more details!
`,
      },
    ],
  },
  {
    id: 6,
    slug: "search-engine-optimization-company-in-calicut",
    title: "Search Engine Optimization",
    peopleTitle: "SEO Team",
    metaTitle: "Wisbato-Leading SEO Company In Calicut, Kerala",
    metaDescription:
      "Wisbato is the best SEO agency in Calicut, Do SEO services that will boost your business website's online presence and organic traffic with our expert SEO services in Kerala.",
    description:
      "Increase the visibility of your website, by letting them rank in top search engine results with our customized strategic solutions.",
    image: "",
    style: {
      backgroundColor: "#FFE3C2",
      position: "relative",
    },
    width: "65",
    context: {
      mainTitle: "We guarantee <span>your placement</span> in high SERPs",
      subTitle: "Why do businesses need SEO?",
      content:
        `<a href="https://en.wikipedia.org/wiki/Search_engine_optimization">Search engine optimization</a>(SEO) is a great tool guiding potential customers through the buying process. This impacts positively on how effective your SEO strategies will be implemented to increase your SERPs visibility as well as traffic on your website, and makes your company a trusted and authoritative voice in your industry. It builds more brand loyalty through credibility in the customer's minds and trust with the customers.`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Keyword Research",
        image: "/images/workingProcess/seo/Keyword Research.jpg",
        alt:"Keyword Research",
        list: [
          {
            id: 1,
            title: "Creating a picture of goals",
            content:
              "As the very first step of SEO, we will create a rough layout of the content that the potential audience is most likely to consume.",
          },
          {
            id: 2,
            title: "Identification of relevant keywords",
            content:
              "After realizing what the audience will be searching for, we will decide on content creation and the keywords that will be targeted.",
          },
          {
            id: 3,
            title: "Use of Keywords Research tools",
            content:
              "To find a comprehensive keyword list, we will make use of keyword research tools such as Ahrefs, SEMrush, or LongTail Pro.",
          },
          {
            id: 4,
            title: "Categorization of Keywords",
            content:
              "Here we will be grouping the list of keywords into primary and secondary keywords. Besides that, we will also be categorizing them based on their position in the marketing funnel.",
          },
        ],
      },
      {
        id: 2,
        title: "Competitive Research",
        image: "/images/workingProcess/seo/Competitive Research.jpg",
        alt:"Competitive Research",
        list: [
          {
            id: 5,
            title: "Evaluation of Competitive Search Landscape",
            content:
              "Within the niche, we will evaluate the landscape of competitive search.",
          },
          {
            id: 6,
            title: "Examining Competitor sites",
            content:
              "Our team will be monitoring competitor sites that are placed at the top of search engine result pages and comprehending at what point they are excelling.",
          },
          {
            id: 7,
            title: "Carrying out content gap analysis",
            content:
              "We will be exploring the opportunities for keyword targeting that can be capitalized on the required content.",
          },
        ],
      },
      {
        id: 3,
        title: "On-Page Optimization",
        image: "/images/workingProcess/seo/On-Page Optimization.jpg",
        git:"On-Page Optimization",

        list: [
          {
            id: 8,
            title: "Optimization of title tags",
            content:
              "With the use of relevant keywords, headings will be optimized, along with the title tags and Meta descriptions.",
          },
          {
            id: 9,
            title: "Content Creation",
            content:
              "We will be delivering high-quality content that is also keyword-rich. We will also be ensuring that user search queries can also be addressed with these contents.",
          },
          {
            id: 10,
            title: "Enhancing responsiveness",
            content:
              "The speed of the website loading will be improved. Besides that, we will be ensuring the mobile-friendliness of the website is enhanced.",
          },
          {
            id: 11,
            title: "Optimization of URLs",
            content:
              "The site architecture, internal linking structure, and URLs will be optimized.",
          },
        ],
      },
      {
        id: 4,
        title: "Technical SEO",
        image: "/images/workingProcess/seo/Technical SEO.jpg",
        git:"Technical SEO",
        list: [
          {
            id: 12,
            title: "Fixing of crawl errors",
            content:
              "Issues regarding broken links and redirects will be rectified, by fixing the crawl errors.",
          },
          {
            id: 13,
            title: "Implementation of XML sitemaps",
            content:
              "Using XML sitemaps can assist search engines locate and comprehend the website's structure.",
          },
          {
            id: 14,
            title: "Optimization of robots.txt file",
            content:
              "Optimizing the robots.txt file to specify which sites search engines may crawl and index.",
          },
          {
            id: 15,
            title: "Improving the security",
            content:
              "Strengthening website security (HTTPS) and fixing technological difficulties that prevent crawling and indexing.",
          },
        ],
      },
      {
        id: 5,
        title: "Off-Page Optimization",
        image: "/images/workingProcess/seo/Off-Page Optimization.jpg",
        git:"Off-Page Optimization",
        list: [
          {
            id: 16,
            title: "Link Building",
            content:
              "To increase the quality and quantity of backlink profiles, we will reach out to other websites for link building through guest posting for example. Our team will fix good yet broken links that point to your domain.",
          },
          {
            id: 17,
            title: "Attracting natural links",
            content:
              "As already done, with the use of high-quality and shareable content, natural backlinks will be attracted.",
          },
          {
            id: 18,
            title: "Participation in online forums",
            content:
              "We ensure that we are taking part in relevant online forums and communities.",
          },
          {
            id: 19,
            title: "Disavowing spammy backlinks",
            content:
              "Once monitoring all the backlinks, we will disavow the backlinks that are toxic and spammy.",
          },
        ],
      },
      {
        id: 6,
        title: "Monitoring and Analysis",
        image: "/images/workingProcess/seo/Monitoring and Analysis.jpg",
        git:"Monitoring and Analysis",
        list: [
          {
            id: 20,
            title: "Tracking of keywords ranking",
            content:
              "As a part of monitoring the performance of the website in traffic metrics and search engine rankings, we will be tracking the keywords ranking and organic traffic.",
          },
          {
            id: 21,
            title: "Using Google Analytics",
            content:
              "We will analyze the user behavior on the website with the help of tools such as Google Analytics.",
          },
          {
            id: 22,
            title: "Monitoring the competitors",
            content:
              "The SEO strategies followed by competitors will be monitored and analyzed.",
          },
          {
            id: 23,
            title: "Setting up data-driven adjustments",
            content:
              "Based on performance insights, data-driven adjustments to SEO strategies will be made.",
          },
        ],
      },
    ],
    outcomes: outcomes[4],
    FAQData: [
      {
        id: 1,
        title: "How Can SEO Help My Calicut-Based Business Grow?",
        content:
          "  SEO can significantly enhance your business's online visibility, making it easier for local customers in Calicut to find your services or products. By optimizing your website for local search, using targeted keywords, and improving your online presence, SEO can drive more traffic to your site and lead to increased customer engagement, resulting in long-term business growth.",
      },
      {
        id: 2,
        title: "What SEO Strategies Work Best for Local Businesses in Calicut?",
        content:
          " For local businesses in Calicut, focusing on local SEO is crucial. This includes optimizing your Google My Business profile, using location-specific keywords, and encouraging positive customer reviews. Additionally, having a mobile-friendly website and building relevant, high-quality local backlinks can boost your rankings and attract more local customers.",
      },
      {
        id: 3,
        title: "How Long Does It Take to See Results from SEO in Calicut?",
        content:
          "SEO is a long-term investment, and it may take anywhere from 3 to 6 months to start seeing noticeable improvements in rankings, depending on the competition and your specific goals. For businesses in Calicut, focusing on consistent optimization and adapting to local trends will yield sustainable results over time.",
      },
      {
        id: 4,
        title: " Why Is Mobile Optimization Important for SEO in Calicut?",
        content:
          " Mobile optimization is crucial for businesses in Calicut because most local customers use smartphones to search for products and services. A mobile-friendly website not only improves user experience but also ranks higher on Google, especially since Google uses mobile-first indexing. This ensures your business reaches a larger audience and boosts local SEO performance.",
      },
    ],
  },
  {
    id: 7,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    peopleTitle: "Mobile App Development Team",
    metaTitle: "Mobile App Development Company in Calicut | Develop Now",
    metaDescription:
      "Wisbato provides the best mobile app for your business in Calicut, that can help your business growth & online presents all over the world. We are creating Unique android, ios, flutter apps in Calicut.",
    description:
      "Our mobile app services will make your business bigger as we provide bespoke web solutions to each of our clients.",
    image: "",
    style: {
      backgroundColor: "#F6C4FE",
      position: "relative",
    },
    width: "45",
    context: {
      mainTitle:
        "Revolutionise <span>your Buisness</span> with our Mobile apps and its innovative design and technology",
      subTitle: "Why do businesses need mobile apps?",
      content: `<span>When <a href="https://en.wikipedia.org/wiki/Mobile_app" target="_blank" >mobile apps</a> are designed and released for businesses, a competitive advantage will be gained as they move ahead in the competition. Such apps can be effective in increasing productivity. Furthermore, developing a mobile application lets the customers make inquiries and carry out activities from anywhere. Such things can be advantageous for both users and businesses. Most notably, the portability factor is further enhanced with mobile application development, as it supports the portability of information and tools.</span>`,
    },
    workingProcess: [
      {
        title: "Strategy Development",
        image:
          "/images/workingProcess/mobile_app_dev/Strategy Development- app development company.jpg",
        alt: "app development company in calicut",
        list: [
          {
            id: 1,
            title: "Determination of objectives",
            content:
              "As the first stage of mobile app development, we will be identifying the objectives of the application such as who should be the target users, the results that should be fulfilled and the purpose of the application.",
          },
          {
            id: 2,
            title: "Examining the competitors",
            content:
              "Here, we will be closely studying the competitors of the application and with this step. We will be able to avert any errors that may have taken place in the sector.",
          },
          {
            id: 3,
            title: "Selection of platform",
            content:
              "The development team of our firm will now come to a decision on which platform we will be building the tool. It could be an iOS app, a custom Android app or even a cross-platform application",
          },
          {
            id: 4,
            title: "Settling on the monetization method",
            content:
              "This step will only apply to those providing a consumer application. Through in-app purchases or affiliate marketing, money could be earned by the client from their investments.",
          },
        ],
      },
      {
        title: "Analysis and Planning",
        image:
          "/images/workingProcess/mobile_app_dev/mobile app Analysis and Planning.jpg",
        alt: "mobile app Analysis and Planning",
        list: [
          {
            id: 1,
            title: "Pinpointing the functional requirement of the app",
            content:
              "Here, we will comprehend the functions that your mobile app will be performing.",
          },
          {
            id: 2,
            title: "Spotting Non-functional requirement",
            content:
              "The non-functional needs of software will be considered in this stage. These requirements refer to the quality of the performance of the system and will have a significant influence on the user experience.",
          },
          {
            id: 3,
            title: "Product roadmap creation",
            content:
              "A comprehensive plan will be executed in this roadmap about the ways through which the objective of the apps will be fulfilled. We make a list of the features that the app is capable of prioritising the top priority function and decide which add-on could be introduced later.",
          },
          {
            id: 4,
            title: "Identifying skills required",
            content:
              "Before moving on with the project, we will be ensuring that we have decided on the technology stack aspect of the app project",
          },
        ],
      },
      {
        title: "UI/ UX Design",
        image:
          "/images/workingProcess/mobile_app_dev/UX Design-mobile app development company.jpg",
        alt: "UX Design-mobile app development company",
        list: [
          {
            id: 1,
            title: "Establishment of Information Architecture",
            content:
              "As the very first step of the app design process, we will establish rules about the information architecture of information. Workflow diagrams will be developed that aid in tracking user interactions.",
          },
          {
            id: 2,
            title: "Creation of wireframes",
            content:
              "Digital sketches called wireframes will be created, that focus on the user experience and app aesthetics. It is done to make sure the completed application is simple and easy to use.",
          },
          {
            id: 3,
            title: "Formation of style guides",
            content:
              "With the creation of style guides, the consistency within the app is maintained. It could be about the colour schemes, buttons, fonts, widgets, spacing and positioning instructions.",
          },
          {
            id: 4,
            title: "Mock-ups and development of prototypes",
            content:
              "Now that the style guide is developed, the final representation of the graphics of the apps will be done. Application of style guide to wireframes is implemented. Then we will verify that the design is consistent through the app. In the final stage of designing, a prototype is created and the identification of flaws, if any, could be done.1",
          },
        ],
      },
      {
        title: "Application Testing",
        image:
          "/images/workingProcess/mobile_app_dev/mobile Application Testing.jpg",
        alt: "mobile app development company in calicut",
        list: [
          {
            id: 1,
            title: "Checking the functionality",
            content:
              "The features of the applications and it is ensured that everything works well.",
          },
          {
            id: 2,
            title: "Testing the performance of the app",
            content:
              "The responsiveness of the app will be tested and how the increase in concurrency users also be checked.",
          },
          {
            id: 3,
            title: "Security of the app",
            content:
              "We will be ensuring that the app can satisfy the security standards, before moving on to the next level.",
          },
        ],
      },
      {
        title: "Deployment",
        image:
          "/images/workingProcess/mobile_app_dev/mobile app deployment.jpg",
        alt: "mobile app deployment",
        list: [
          {
            id: 1,
            title: "Release to app stores",
            content:
              "Now that the testing of the app is concluded, it will now be prepared for release to respective app stores. If it is an Android app, then it will be released in Google Play Store and Apple App Store for iOS apps.",
          },
          {
            id: 2,
            title: "Filling out the forms",
            content:
              "For submitting the app for further review, these stores will be expecting us to fill out many forms.",
          },
          {
            id: 3,
            title: "Adhering to the guidelines of platforms",
            content:
              "For the submission of each platform, our developers need to adhere to each of their guidelines and requirements.",
          },
          {
            id: 4,
            title: "Launch of the app",
            content:
              "Now the app is made available for the users to officially download. It will be further promoted by varied social media promotion or press releases, app store optimization (ASO) and so on.",
          },
        ],
      },
      {
        title: "Monitoring of the performance",
        image:
          "/images/workingProcess/mobile_app_dev/mobile app Monitoring of the performance.jpg",
        alt: "best mobile app development company in calicut",
        list: [
          {
            id: 1,
            title: "Keeping track of the performance",
            content:
              "Even after the submission of the app, we will keep track of bugs, customer requests and overall app performance.",
          },
          {
            id: 2,
            title: "Gathering feedback from the users",
            content:
              "Our developers will be collecting user feedback and releasing updates.",
          },
          {
            id: 3,
            title: "Doing continuous maintenance",
            content:
              "To keep up with the recent OS changes, performance standards and review guidelines, the mobile apps will be regularly maintained.",
          },
          {
            id: 4,
            title: "Further Monitoring",
            content:
              "New features will be introduced or enhancement of the existing ones will be done to ensure that the app is running seamlessly and retaining the interest of the user.",
          },
        ],
      },
    ],
    outcomes: outcomes[3],
    FAQData: [
      {
        id: 1,
        title: "Is it mandatory for businesses to have a mobile app?",
        content:
          "Having a mobile application may aid you to attract new consumers, while also retaining the older ones by promoting new products and services, impressive deals, loyalty programmes and others. A real-time space for communication with your consumers could be created with such mobile applications.",
      },
      {
        id: 2,
        title: "How do mobile applications vary from mobile apps? ",
        content:
          "Mobile websites have restrictions in terms of what can be produced with web technologies and how they display in a browser. Mobile applications, on the other hand, may leverage native device capabilities like push notifications and GPS to provide a more immersive and personalised experience.",
      },
      {
        id: 3,
        title: "Is a mobile application better than a website?",
        content:
          "Yes, a better user experience could be availed through mobile apps much more easily than loading an entire website. It is so because mobile apps are already downloaded on devices and it does not have to be loaded every time from servers.",
      },
      {
        id: 4,
        title: "How much does it cost to develop a mobile app?",
        content:
          "The cost of developing a mobile app varies widely based on its complexity and features. Prices start at ₹50,000 for basic apps and can go up to ₹5,00,000 for apps with advanced features. The final cost depends on the specific requirements and functionalities you need for your app",
      },
      {
        id: 5,
        title: "What are the steps involved in mobile app development?",
        content: `The mobile app development process involves several key steps. First, strategy-planning-choose the app development platform-design and development-testing-App store optimization-deployed and launched to users. Finally, ongoing maintenance is essential to address any issues and update the app as needed. Check full detailed <a href="https://www.wisbato.com/blogs/mobile-app-development-process-in-india-wisbato" target="_blank" >app development process</a>`,
      },
    ],
  },
  {
    id: 8,
    slug: "it-support-in-calicut",
    title: "IT Support",
    peopleTitle: "IT Support Team",
    metaTitle: "Wisbato NO1 IT Company In Calicut, Kerala",
    metaDescription:
      "We are the leading IT company in Calicut, Provide all types of IT services and IT support on your business",
    description:
      "We offer rapid and efficient technical support for your business and enjoy increased productivity at affordable prices. Empower your business with the right IT support.",
    image: "/images/about3.jpg",
    style: {
      backgroundColor: "#F7D2DB",
    },
    width: "55",
    context: {
      mainTitle:
        "Your one-stop answer for all of <span>your technical</span> concerns",
      subTitle: "What is IT Support and how are they crucial?",
      content:
        `IT support is the approach to manage and solve technical problems. It ensures the system runs in an efficient and secure manner. It is crucial for businesses because it offers to reduce downtime while increasing efficiency of productivity and secures data against the dangers of losing it. Wisbato's IT support team offers a comprehensive range of services, from fixing issues activities through to system maintenance in operations, ensuring your business thrives worry-free of any technical issues in its way. Trust Wisbato and get your business secure, streamlined, and focused on growth minus all the <a href="https://en.wikipedia.org/wiki/Technical_support" target="_blank">technical support</a>.`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Issue Identification & Categorization",
        image: "/images/workingProcess/IT support/Issue Identification & Categorization.jpg",
        alt:" IT support in calicut",
        list: [
          {
            id: 1,
            title: "Communication with the IT support team",
            content:
              "Through mediums such as phone, email, in-person, or ticketing system, users will be communicating with IT support.",
          },
          {
            id: 2,
            title: "Gathering of information",
            content:
              "Here, required data-reported issues such as error messages and troubleshooting steps will be collected by our support team.",
          },
          {
            id: 3,
            title: "Analysis of the issue",
            content:
              "To assess the severity of the reported issue and its impact on business operations, the IT support team will be analyzing them.",
          },
          {
            id: 4,
            title: "Categorization of the issue",
            content:
              "The issues will be classified according to the nature of the reported issue such as software, hard or network and urgency.",
          },
        ],
      },
      {
        id: 2,
        title: "Diagnosis and Troubleshooting",
        image: "/images/workingProcess/IT support/Diagnosis and Troubleshooting.jpg",
        alt:"IT support for calicut business owners",
        list: [
          {
            id: 5,
            title: "Identification of the cause of the issue",
            content:
              "The root cause of the issue will be identified through diagnostic tools and knowledge bases by support technicians.",
          },
          {
            id: 6,
            title: "Troubleshooting",
            content:
              "The support team of our firm will perform troubleshooting procedures to isolate and solve the problem. It could be software configuration changes, hardware inspection, or network analysis.",
          },
          {
            id: 7,
            title: "Resolution of the issue",
            content:
              "Now that the root cause is identified, to resolve the issue, the experts of our team will execute adequate fixes or workarounds.",
          },
          {
            id: 8,
            title: "Workaround implementation",
            content:
              "The process of resolution comprises reinstalling drivers, replacing faulty hardware components, applying software patches, or resetting configurations.",
          },
        ],
      },
      {
        id: 3,
        title: "Further communication",
        image: "/images/workingProcess/IT support/Further communication.jpg",
        alt:"further communication for IT support",
        list: [
          {
            id: 9,
            title: "Informing about the progress",
            content:
              "Our support staff will communicate with customers often during the resolution process to provide information on progress and timelines.",
          },
          {
            id: 10,
            title: "Documentation of steps taken",
            content:
              "A record of the process implemented and solutions applied will be kept by the team for future reference and knowledge sharing.",
          },
          {
            id: 11,
            title: "Verification",
            content:
              "The support team will verify the issue that has been resolved after the implementation of the solution.",
          },
          {
            id: 12,
            title: "Testing",
            content:
              "Tests will be conducted to make sure that the service or the system is functioning properly after the resolution of the issue. To ensure that other functionalities are not impacted, we will be executing user acceptance testing (UAT) or regression testing.",
          },
        ],
      },
      {
        id: 4,
        title: "Closure and Follow-up",
        image: "/images/workingProcess/IT support/Closure and Follow-up.jpg",
        alt:" follow up for works",
        list: [
          {
            id: 13,
            title: "Concluding the issue",
            content:
              "We will be informing our clients, once the issue is resolved and verified and the support ticket is closed.",
          },
          {
            id: 14,
            title: "Gathering feedbacks",
            content:
              "Feedback will be gathered about the support experience. Moreover, to ensure that the issue has not recurred, our team will be following up with you.",
          },
          {
            id: 15,
            title: "Further improvement",
            content:
              "To identify areas of further improvement, trends, and recurring issues, our team will be reviewing incident data and collecting feedback regularly.",
          },
          {
            id: 16,
            title: "Taking precautions",
            content:
              "As a step to handle future incidents, our support team will update knowledge bases, training materials, and documentation to improve the efficiency and effectiveness of the team.",
          },
        ],
      },
    ],
    outcomes: outcomes[2],
    FAQData: [
      {
        id: 1,
        title: " What types of IT support services do you offer for businesses in Calicut?        ",
        content:
          "We offer a wide range of IT and technical support services to businesses in Calicut, including network setup and management, hardware and software troubleshooting, cybersecurity solutions, data backup and recovery, technical support and IT consultancy services. Our team ensures that your business runs smoothly with minimal technical disruptions.",
      },
      {
        id: 2,
        title: "Do you provide remote IT support for businesses in Calicut?",
        content:
          "Yes, we provide both remote and on-site IT support to businesses in Calicut. Our remote services are designed to resolve most issues quickly without needing to visit your location, saving you time and ensuring that your systems are up and running as soon as possible.",
      },
      {
        id: 3,
        title: "How quickly can you respond to IT emergencies in Calicut?",
        content:
          "Our IT support team is available 24/7 to assist with emergencies. For businesses in Calicut, we aim to respond to critical issues within a few hours, whether remotely or in person, depending on the nature of the problem.",
      },
      {
        id: 4,
        title: " Is your IT support service affordable for small businesses in Calicut?",
        content:
          "Absolutely! We offer flexible and affordable IT support plans specifically designed for small businesses in Calicut. Whether you need occasional assistance or ongoing support, we have cost-effective solutions that fit your budget without compromising on quality.",
      },
    ],
  },
  {
    id: 9,
    slug: "software-development-in-calicut",
    title: "Software Development",
    peopleTitle: "Software Development Team",
    metaTitle: " Best software development company in Calicut.",
    metaDescription:
      "Develop a custom software for your business with affordable price with leading software development company in Calicut- Contact now",
    description:
      "We offer rapid and efficient technical support for your business and enjoy increased productivity at affordable prices. Empower your business with the right IT support.",
    image: "/images/about3.jpg",
    style: {
      backgroundColor: "#F7D2DB",
    },
    width: "55",
    context: {
      mainTitle:
        "Simplify Your Business with <span>Customized Software</span> Solutions",
      subTitle: "WHY BUSINESS NEED A CUSTOMIZED SOFTWARE.",
      content:
        `<a href="https://en.wikipedia.org/wiki/Software_development" target="_blank">Software development</a> is key to business success because it helps companies streamline operations, reduce time, enhance customer experiences, and Be competitive in the online marketplace .Custom software solutions allow businesses to automate processes, improve efficiency, and offer custom services to their clients. For businesses in Kerala, partnering with a reliable software development company in Calicut ensures access to new technology and expert guidance, helping them grow and innovate effectively.
`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Customized Software Solutions to Simplify Your Business and Drive To Success.",
        image: "/images/workingProcess/software/Requirement Gathering and Analysis.jpg",
        alt:"software company in Calicut",
        list: [
          {
            id: 1,
            title: "Understanding Business Needs",
            content:
              "Before starting any project, the development team works closely with stakeholders to understand the business goals and specific software needs.",
          },
          {
            id: 2,
            title: "Identifying Target Users",
            content:
              "Defining who the end-users will be helps shape the features and usability of the software.",
          },
          {
            id: 3,
            title: "Technical Feasibility Study",
            content:
              "A technical assessment is conducted to determine whether the proposed solution is achievable within the constraints of technology and resources.",
          },
          {
            id: 4,
            title: "Documenting Requirements",
            content:
              "All the gathered requirements are documented in a detailed specification document that guides the rest of the development process.",
          },
        ],
      },
      {
        id: 2,
        title: "Project Planning and Management",
        image: "/images/workingProcess/software/Project Planning and Management.jpg",
        alt:" software project planning and manage",
        list: [
          {
            id: 5,
            title: "Defining Project Scope",
            content:
              "The project scope outlines the software’s features, goals, and deliverables, ensuring everyone understands what is expected.",
          },
          {
            id: 6,
            title: "Timeline and Milestone Setup",
            content:
              "Setting clear deadlines and milestones helps keep the project on track and ensures that key goals are met at each stage of development.",
          },
          {
            id: 7,
            title: "Resource Allocation",
            content:
              "Assigning the right team members and tools to different aspects of the project ensures efficient use of resources and skills.",
          },
          {
            id: 8,
            title: "Risk Management",
            content:
              "Identifying potential risks early on allows the team to mitigate issues that may impact the project’s timeline or quality.",
          },
        ],
      },
      {
        id: 3,
        title: "System Design",
        image: "/images/workingProcess/software/system design.jpg",
        alt:"design your software project ",
        list: [
          {
            id: 9,
            title: "High-Level System Architecture",
            content:
              "The team designs a blueprint for the software, outlining the structure and interaction between components.",
          },
          {
            id: 10,
            title: " Database Design",
            content:
              "Database architects define how the software will store, retrieve, and manage data.",
          },
          {
            id: 11,
            title: " User Interface (UI) Design",
            content:
              "Designers create user-friendly interfaces that ensure smooth user interaction with the system.",
          },
          {
            id: 12,
            title: " Technology Stack Selection",
            content:
              "Choosing the right programming languages, frameworks, and tools for building the software is critical at this stage.",
          },
        ],
      },
      {
        id: 4,
        title: " Implementation (Coding)",
        image: "/images/workingProcess/software/Implementation.jpg",
        alt:"best software development company in Calicut",
        list: [
          {
            id: 13,
            title: " Modular Coding",
            content:
              "The project is divided into smaller, manageable modules that are developed independently.",
          },
          {
            id: 14,
            title: "Following Best Practices",
            content:
              "Developers adhere to coding standards and industry best practices to ensure clean, maintainable code.",
          },
          {
            id: 15,
            title: "Regular Code Reviews",
            content:
              "Senior developers or team leads review the code to identify any issues or improvements.",
          },
          {
            id: 16,
            title: " Version Control",
            content:
              "Version control systems like Git are used to track changes, manage collaboration, and avoid code conflicts.",
          },
        ],
      },
      {
        id: 5,
        title: "Testing and Quality Assurance (QA)",
        image: "/images/workingProcess/software/Testing and Quality Assurance.jpg",
        alt:"software developers in Calicut test your quality and mistakes",

        list: [
          {
            id: 13,
            title: "  Unit Testing",
            content:
              "Each module is tested individually to ensure that it functions as expected.",
          },
          {
            id: 14,
            title: " Integration Testing",
            content:
              "The team checks how different modules work together to detect any issues with integration.",
          },
          {
            id: 15,
            title: "Performance Testing",
            content:
              "Testing the software for speed, scalability, and responsiveness under different loads.",
          },
          {
            id: 16,
            title: "  Bug Fixing and Optimization",
            content:
              "Any bugs discovered during testing are fixed, and the software is optimized for better performance.",
          },
        ],
      },
      {
        id: 6,
        title: " Deployment and Maintenance",
        image: "/images/workingProcess/software/Deployment and Maintenance (2).jpg",
        alt:"software Deployment and Maintenance",
        list: [
          {
            id: 13,
            title: "  Deployment to Live Environment",
            content:
              "Once the software is thoroughly tested, it is deployed to the production environment for real-world use.",
          },
          {
            id: 14,
            title: "User Training and Documentation",
            content:
              "End-users are trained on how to use the software, and comprehensive documentation is provided.",
          },
          {
            id: 15,
            title: "Monitoring and Feedback",
            content:
              "The software is monitored for any performance issues or bugs, and user feedback is collected for further improvement.",
          },
          {
            id: 16,
            title: "Ongoing Maintenance and Updates",
            content:
              "Regular updates and patches are released to fix issues and add new features, ensuring the software stays up-to-date and secure.",
          },
        ],
      },

    ],
    outcomes: outcomes[6],
    FAQData: [
      {
        id: 1,
        title: "What types of software solutions do you offer for businesses in Calicut?     ",
        content:
          ` We offer all types of software solutions custom to meet the unique needs of businesses in Calicut. Our services include custom software development, <a href="https://www.wisbato.com/services/mobile-app-development" target="_blank">mobile applications</a>,<a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">web applications</a>, cloud computing, system integration, and more. Whether you're a small startup or a large enterprise, we can create solutions that enhance your operations and drive growth.
`,
      },
      {
        id: 2,
        title: " How long does the software development process typically take?",
        content:
          "The duration of the software development process varies based on the complexity and scope of the project. Generally, smaller projects may take a few weeks, while larger, more complex systems can take several months. We prioritize thorough planning and communication, so we'll provide you with a detailed timeline during the initial consultation to ensure you know what to expect.",
      },
      {
        id: 3,
        title: "How do you ensure the software meets our specific business needs?",
        content:
          " We follow a comprehensive approach to understand your business requirements fully. This includes initial consultations, requirement analysis, and ongoing feedback throughout the development process. Our goal is to create a solution that aligns perfectly with your objectives, and we encourage collaboration to ensure we meet your expectations at every stage.",
      },
      {
        id: 4,
        title: " What support do you provide after the software is deployed?",
        content:
          " Our commitment to your success doesn’t end with deployment. We offer ongoing support and maintenance services to ensure your software runs smoothly. This includes troubleshooting, updates, and enhancements as needed, so you can focus on your core business activities while we take care of the technical aspects.",
      },
      {
        id: 5,
        title: " How do I know if custom software is the right choice for my business?",
        content:
          " Custom software is an excellent choice if your business has specific needs that off-the-shelf solutions cannot meet. It allows for tailored functionality, better integration with existing systems, and scalability as your business grows. If you’re unsure, we offer consultations to discuss your unique challenges and how custom software can address them effectively. This way, you can make an informed decision that aligns with your business goals.",
      },
    ],
  },
];

export type ServicePlatformData = {
  id: number;
  icon: string;
  title?: string;
}

export const servicePlatformData: ServicePlatformData[] = [
  {
    id: 1,
    icon: `<svg width="32" height="32" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.375 1.3125V44.875L29 37.1875L13.625 44.875V1.3125M44.375 1.3125H49.5C51.5389 1.3125 53.4942 2.1224 54.9359 3.5641C56.3776 5.0058 57.1875 6.9611 57.1875 9V50C57.1875 52.0389 56.3776 53.9942 54.9359 55.4359C53.4942 56.8776 51.5389 57.6875 49.5 57.6875H8.5C6.4611 57.6875 4.5058 56.8776 3.0641 55.4359C1.6224 53.9942 0.8125 52.0389 0.8125 50V9C0.8125 6.9611 1.6224 5.0058 3.0641 3.5641C4.5058 2.1224 6.4611 1.3125 8.5 1.3125H13.625M44.375 1.3125H13.625" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "booking",
  },
  {
    id: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
  <path d="M34.5628 0.852603V2.7933C34.5628 3.9344 35.0678 5.0141 35.9458 5.7452L39.5948 8.7861C41.1048 10.0468 41.4228 12.2369 40.3328 13.8769L38.5908 16.4941C37.6418 17.9161 36.2458 18.9813 34.6238 19.5213L34.1348 19.6852C33.5838 19.8696 33.0828 20.1785 32.6698 20.588C32.2578 20.9976 31.9448 21.4967 31.7568 22.0466C31.5678 22.5966 31.5088 23.1825 31.5838 23.759C31.6588 24.3355 31.8658 24.8869 32.1878 25.3706C33.4488 27.2668 32.7648 29.8362 30.7288 30.8543L21.7498 35.3438L23.1948 38.9621C23.4868 39.697 23.5018 40.5126 23.2378 41.2578C22.9738 42.0029 22.4478 42.6269 21.7588 43.0141C21.0698 43.4013 20.2628 43.5254 19.4888 43.3633C18.7158 43.2012 18.0268 42.764 17.5508 42.1328L15.2308 39.0373C14.8378 38.5133 14.3168 38.0985 13.7188 37.8323C13.1198 37.5661 12.4638 37.4572 11.8108 37.5161C11.1588 37.575 10.5318 37.7996 9.99079 38.1687C9.44979 38.5378 9.01179 39.039 8.71879 39.6249L6.37479 44.3126L4.28379 44.8353M34.5628 0.852603C29.1608 0.399303 23.7358 1.3854 18.8358 3.7043C13.9368 6.0232 9.73679 9.5961 6.66279 14.0608C3.58979 18.5256 1.75079 23.7235 1.33279 29.1279C0.914786 34.5323 1.93279 39.9512 4.28379 44.8353M34.5628 0.852603C39.9188 1.2993 45.0638 3.1456 49.4868 6.2009C53.9088 9.2562 57.4518 13.4172 59.7648 18.2692C62.0778 23.1211 63.0778 28.4944 62.6668 33.8535C62.2548 39.2126 60.4458 44.3703 57.4198 48.8123L56.8148 47.0049C56.3048 45.4743 55.3248 44.1431 54.0158 43.2C52.7068 42.2569 51.1338 41.7496 49.5208 41.7501H47.3748L46.2678 40.6431C45.7118 40.0861 45.0308 39.6693 44.2828 39.4271C43.5338 39.1848 42.7378 39.1241 41.9608 39.25C41.1838 39.3758 40.4478 39.6845 39.8138 40.1507C39.1798 40.6169 38.6658 41.2272 38.3138 41.9312L38.1908 42.1806C37.8558 42.8524 37.3838 43.4472 36.8058 43.9271C36.2288 44.4071 35.5578 44.7617 34.8358 44.9686L31.4528 45.9321C29.5738 46.4685 28.3988 48.3306 28.7198 50.261L28.9688 51.7575C29.2428 53.377 30.6438 54.5626 32.2838 54.5626C35.1738 54.5626 37.7428 56.4144 38.6558 59.158L39.3898 61.3549M4.28379 44.8353C7.34679 51.2033 12.5088 56.3222 18.9028 59.3308C25.2968 62.3394 32.5308 63.0542 39.3898 61.3549M39.3898 61.3549C46.7358 59.5326 53.1528 55.0688 57.4168 48.8158M44.8128 21.2501C44.8128 24.3114 43.4698 27.0584 41.3408 28.9376" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "Real estate",
  },
  {
    id: 3,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
  <path d="M32 62.25V34.0625M44.813 62.25V34.0625M19.188 62.25V34.0625M1.25 21.25L32 0.75L62.75 21.25M57.625 62.25V25.801C49.148 24.4738 40.58 23.809 32 23.8125C23.284 23.8125 14.725 24.4958 6.375 25.801V62.25M1.25 62.25H62.75M32 13.5625H32.027V13.5898H32V13.5625Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "E-learning",
  },
  {
    id: 4,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="69" height="63" viewBox="0 0 69 63" fill="none">
  <path d="M1.6875 0.75H6.42249C8.16449 0.75 9.68554 1.9219 10.1365 3.6029L11.4455 8.5127M11.4455 8.5127C30.4785 7.9793 49.4925 10.0951 67.9435 14.7993C65.1275 23.1838 61.7825 31.3292 57.9525 39.1875H19.6245M11.4455 8.5127L19.6245 39.1875M19.6245 39.1875C16.9065 39.1875 14.2985 40.2674 12.3765 42.1897C10.4545 44.1119 9.37451 46.719 9.37451 49.4375H63.1875M14.4995 59.6875C14.4995 60.3671 14.2295 61.0189 13.7485 61.4995C13.2685 61.98 12.6165 62.25 11.9375 62.25C11.2575 62.25 10.6055 61.98 10.1255 61.4995C9.64449 61.0189 9.37451 60.3671 9.37451 59.6875C9.37451 59.0079 9.64449 58.3561 10.1255 57.8755C10.6055 57.395 11.2575 57.125 11.9375 57.125C12.6165 57.125 13.2685 57.395 13.7485 57.8755C14.2295 58.3561 14.4995 59.0079 14.4995 59.6875ZM58.0625 59.6875C58.0625 60.3671 57.7925 61.0189 57.3115 61.4995C56.8305 61.98 56.1795 62.25 55.4995 62.25C54.8195 62.25 54.1685 61.98 53.6875 61.4995C53.2065 61.0189 52.9375 60.3671 52.9375 59.6875C52.9375 59.0079 53.2065 58.3561 53.6875 57.8755C54.1685 57.395 54.8195 57.125 55.4995 57.125C56.1795 57.125 56.8305 57.395 57.3115 57.8755C57.7925 58.3561 58.0625 59.0079 58.0625 59.6875Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "Shopping",
  },
  {
    id: 5,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="65" viewBox="0 0 60 65" fill="none">
  <path d="M34.2199 2.62705C34.7739 3.18435 35.2119 3.84555 35.5099 4.57275C35.8089 5.29985 35.9599 6.07865 35.9569 6.86445V25.2728L56.1709 33.9561C56.3929 34.0436 56.5919 34.1792 56.7539 34.3535C56.9159 34.5277 57.0369 34.736 57.1089 34.9632L58.8799 40.2428C58.9739 40.5352 58.9889 40.8479 58.9229 41.1482C58.8569 41.4485 58.7119 41.7256 58.5039 41.9518C58.2959 42.178 58.0309 42.3447 57.7369 42.4349C57.4429 42.5251 57.1299 42.5357 56.8309 42.4656L35.9909 37.2211L34.9839 55.1432L38.9779 58.13V64.1041C33.9939 62.7852 29.9819 61.6851 29.9819 61.6851C29.9819 61.6851 26.3159 62.693 21.0219 64.1041V58.13L25.0159 55.1432L24.0079 37.2211L3.16889 42.4656C2.86889 42.5357 2.55689 42.5251 2.26289 42.4349C1.96889 42.3447 1.70386 42.178 1.49586 41.9518C1.28786 41.7256 1.14291 41.4485 1.07691 41.1482C1.01091 40.8479 1.02488 40.5352 1.11988 40.2428L2.89088 34.9632C2.96188 34.736 3.08386 34.5277 3.24586 34.3535C3.40786 34.1792 3.60687 34.0436 3.82887 33.9561L24.0429 25.2728V6.86445C24.0399 6.07865 24.1919 5.29985 24.4899 4.57275C24.7869 3.84555 25.2259 3.18435 25.7799 2.62705C26.9039 1.51765 28.4199 0.895752 29.9999 0.895752C31.5789 0.895752 33.0949 1.51765 34.2199 2.62705Z" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "Travel",
  },
  {
    id: 6,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
  <path d="M32 11V52M21.75 42.3718L24.753 44.6234C28.754 47.6267 35.242 47.6267 39.247 44.6234C43.251 41.6202 43.251 36.7548 39.247 33.7516C37.248 32.2483 34.624 31.5 32 31.5C29.523 31.5 27.046 30.7483 25.156 29.2484C21.378 26.2452 21.378 21.3798 25.156 18.3766C28.935 15.3733 35.065 15.3733 38.844 18.3766L40.262 19.5041M62.75 31.5C62.75 35.5381 61.955 39.5368 60.409 43.2675C58.864 46.9983 56.599 50.3881 53.744 53.2435C50.888 56.0989 47.498 58.364 43.768 59.9093C40.037 61.4546 36.038 62.25 32 62.25C27.962 62.25 23.963 61.4546 20.232 59.9093C16.502 58.364 13.112 56.0989 10.256 53.2435C7.40098 50.3881 5.136 46.9983 3.591 43.2675C2.045 39.5368 1.25 35.5381 1.25 31.5C1.25 23.3446 4.48998 15.5232 10.256 9.7565C16.023 3.9897 23.845 0.75 32 0.75C40.155 0.75 47.977 3.9897 53.744 9.7565C59.51 15.5232 62.75 23.3446 62.75 31.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "Trading",
  },
  {
    id: 7,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
  <path d="M32 11V52M21.75 42.3718L24.75 44.6234C28.75 47.6267 35.24 47.6267 39.25 44.6234C43.25 41.6202 43.25 36.7548 39.25 33.7516C37.25 32.2483 34.62 31.5 32 31.5C29.52 31.5 27.05 30.7483 25.16 29.2484C21.38 26.2452 21.38 21.3798 25.16 18.3766C28.94 15.3733 35.06 15.3733 38.84 18.3766L40.26 19.5041M62.75 31.5C62.75 35.5381 61.95 39.5368 60.41 43.2675C58.86 46.9983 56.6 50.3881 53.74 53.2435C50.89 56.0989 47.5 58.364 43.77 59.9093C40.04 61.4546 36.04 62.25 32 62.25C27.96 62.25 23.96 61.4546 20.23 59.9093C16.5 58.364 13.11 56.0989 10.26 53.2435C7.40001 50.3881 5.13997 46.9983 3.58997 43.2675C2.04997 39.5368 1.25 35.5381 1.25 31.5C1.25 23.3446 4.49001 15.5232 10.26 9.7565C16.02 3.9897 23.84 0.75 32 0.75C40.16 0.75 47.98 3.9897 53.74 9.7565C59.51 15.5232 62.75 23.3446 62.75 31.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "Hospital",
  },
  {
    id: 8,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
  <path d="M32 11V52M21.75 42.3718L24.75 44.6234C28.75 47.6267 35.24 47.6267 39.25 44.6234C43.25 41.6202 43.25 36.7548 39.25 33.7516C37.25 32.2483 34.62 31.5 32 31.5C29.52 31.5 27.05 30.7483 25.16 29.2484C21.38 26.2452 21.38 21.3798 25.16 18.3766C28.94 15.3733 35.06 15.3733 38.84 18.3766L40.26 19.5041M62.75 31.5C62.75 35.5381 61.95 39.5368 60.41 43.2675C58.86 46.9983 56.6 50.3881 53.74 53.2435C50.89 56.0989 47.5 58.364 43.77 59.9093C40.04 61.4546 36.04 62.25 32 62.25C27.96 62.25 23.96 61.4546 20.23 59.9093C16.5 58.364 13.11 56.0989 10.26 53.2435C7.40001 50.3881 5.13997 46.9983 3.58997 43.2675C2.04997 39.5368 1.25 35.5381 1.25 31.5C1.25 23.3446 4.49001 15.5232 10.26 9.7565C16.02 3.9897 23.84 0.75 32 0.75C40.16 0.75 47.98 3.9897 53.74 9.7565C59.51 15.5232 62.75 23.3446 62.75 31.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "Entertainment",
  },
]