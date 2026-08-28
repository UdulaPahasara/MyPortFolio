export const portfolioData = {
  personalInfo: {
    name: 'PEHESARA Developer',
    bio: 'I am a passionate Full Stack Developer with expertise in building scalable, modern web applications. I love solving complex problems and crafting intuitive user experiences.',
    github: 'https://github.com/UdulaPahasara',
    linkedin: 'https://www.linkedin.com/in/udula-pehesara-a9a038358/',
    whatsapp: '+94768505837',
    email: 'udulapahasara1@gmail.com',
  },
  skills: [
    { name: 'React', icon: 'logos:react' },
    { name: 'Node.js', icon: 'logos:nodejs-icon' },
    { name: 'Spring Boot', icon: 'logos:spring-icon' },
    { name: 'Java', icon: 'logos:java' },
    { name: 'C#', icon: 'logos:c-sharp' },
    { name: 'MongoDB', icon: 'logos:mongodb-icon' },
    { name: 'GitHub', icon: 'mdi:github' },
    { name: 'AI Bots', icon: 'fluent:bot-24-regular' },
  ],
  projects: [
     {
      title: 'SLEDAA Management Platform',
      description: 'A comprehensive full-stack web platform and administration portal designed for the Sri Lankan Engineering Diplomates Association of Australia (SLEDAA). It features a modern public-facing website for members and an advanced administrative dashboard backed by a robust Spring Boot enterprise-grade architecture.',
      features: [
        { title: 'Secure Administration Panel', desc: 'Robust JWT-based authentication system with secure session management, providing authorized committee members with a dedicated management dashboard.' },
        { title: 'Comprehensive CMS', desc: 'Full CRUD capabilities for dynamic content including events, news updates, ongoing projects, downloadable resources, and photo albums.' },
        { title: 'AI Integration', desc: 'Integrated Google Gemini AI to power an intelligent chatbot, assisting website visitors with instant answers regarding membership and events.' },
        { title: 'Historical Directory', desc: 'Advanced management of past and present committee members, organized by committee years, allowing for historical tracking of the organization\'s leadership.' },
        { title: 'Enterprise-Grade File Handling', desc: 'Engineered backend architecture specifically configured to handle high-volume media uploads (up to 10GB limits) for comprehensive photo galleries.' }
      ],
      highlights: [
        'Built a highly responsive frontend architecture separated into public and admin portals using React, Material-UI, and Vite.',
        'Developed a scalable, robust RESTful API with Java 17, Spring Boot, and Spring Data JPA/Hibernate for efficient MySQL interactions.',
        'Implemented rigorous security best practices including state-of-the-art JWT for stateless authentication and secure CORS configurations.'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop',
      extraImages: [
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2000&auto=format&fit=crop' // Event/Conference placeholder
      ],
      tech: ['React', 'Spring Boot', 'Java', 'MySQL', 'Material-UI', 'JWT', 'Gemini AI'],
      githubUrl: 'https://github.com/UdulaPahasara',
      liveUrl: 'https://sledaa.com/',
    },

     {
      title: 'SPK Store E-Commerce',
      description: 'A comprehensive, modern e-commerce web platform and administration portal designed for high-end photography and drone equipment. It manages user authentication, dynamic product catalogs, and order tracking, featuring interactive 3D product showcases and smart multi-language detection.',
      features: [
        { title: 'Secure Administration Panel', desc: 'Secure authentication system with Google OAuth integration, providing authorized store staff with a dedicated data-driven dashboard (powered by Chart.js) to manage digital inventory and track orders.' },
        { title: 'Comprehensive E-Commerce Workflow', desc: 'Full capabilities for a dynamic shopping experience, including advanced cart management, seamless checkout processes, and detailed user profiles with order history.' },
        { title: 'AI & 3D Showcase Integration', desc: 'Integrated Gemini AI for instant customer support, alongside cutting-edge 3D product showcases utilizing React Three Fiber for interactive examination of high-end equipment.' },
        { title: 'Dynamic Product Management', desc: 'Dedicated admin routes allowing full CRUD operations for product categories such as drones, gimbals, and mobile lenses.' },
        { title: 'Smart Internationalization', desc: 'Built-in language detection and translation capabilities utilizing i18next, natively supporting a diverse, global customer base.' }
      ],
      highlights: [
        'Built a highly responsive frontend architecture separated into public storefront and admin portals using React, Material-UI, and Vite.',
        'Developed immersive, interactive 3D product viewing experiences utilizing Three.js and React Three Fiber, elevating the standard e-commerce interface.',
        'Implemented robust authentication using Google OAuth 2.0 alongside custom routing rules to protect administrative portals.',
        'Architected a clean separation of concerns with global state management via context providers and complex internationalization setups.'
      ],
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2000&auto=format&fit=crop',
      extraImages: [
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2000&auto=format&fit=crop'
      ],
      tech: ['React', 'Vite', 'Three.js', 'Google OAuth', 'Gemini AI', 'i18next', 'Chart.js', 'Material-UI'],
      githubUrl: 'https://github.com/UdulaPahasara',
      liveUrl: 'https://spkstore.lk/',
    },
    {
      title: 'AC Elite Cleaning Services',
      description: 'A professional and modern corporate web platform designed for a premium cleaning service company. It provides an intuitive interface for clients to explore specialized cleaning services and seamlessly book appointments online.',
      features: [
        { title: 'Interactive Booking System', desc: 'Integrated a seamless "Book Now" modal utilizing Material-UI Dialogs, allowing users to schedule services instantly without navigating away from the current page.' },
        { title: 'Comprehensive Service Catalog', desc: 'Dedicated service routes for End of Lease, Commercial, Upholstery, and Weekly cleaning, showcasing tailored offerings.' },
        { title: 'Reliable Lead Generation', desc: 'Implemented robust contact and booking forms utilizing EmailJS for instant, serverless email notifications to the business owners.' },
        { title: 'Modern UI/UX Architecture', desc: 'Built with React Router for smooth client-side navigation and animated components to ensure a premium browsing experience.' }
      ],
      highlights: [
        'Architected a highly responsive, multi-page frontend using React and Vite, ensuring fast load times and excellent user experience.',
        'Developed a clean, professional design system utilizing Material-UI (MUI) components for consistent, accessible user interactions.',
        'Implemented a seamless, serverless communication pipeline utilizing EmailJS to handle customer inquiries and booking requests reliably.'
      ],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2000&auto=format&fit=crop',
      extraImages: [
        'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop',
        
      ],
      tech: ['React', 'Vite', 'Material-UI', 'React Router', 'EmailJS'],
      githubUrl: 'https://github.com/UdulaPahasara',
      liveUrl: 'https://example.com',
    },
    {
      title: 'TeaLora Ceylon',
      description: 'A comprehensive, modern corporate web platform designed for a premium Ceylon tea brand. It showcases the brand\'s heritage, extensive tea collections, and sustainability efforts, featuring an interactive user interface with seamless global inquiry capabilities.',
      features: [
        { title: 'Interactive Product Collections', desc: 'Dynamic and responsive Swiper-based carousels providing an elegant, interactive showcase of premium tea collections.' },
        { title: 'Seamless Global Inquiries', desc: 'Integrated direct messaging system utilizing EmailJS and React Hook Form, enabling global customers to submit inquiries seamlessly.' },
        { title: 'Modern UI/UX Architecture', desc: 'Highly engaging, animated user interface built with Material-UI, incorporating custom scroll interactions and visually stunning image overlays.' },
        { title: 'Corporate Storytelling', desc: 'Dedicated routes for Sustainability, About Us, and Purpose, seamlessly blending brand storytelling with product discovery.' },
        { title: 'Fully Responsive Design', desc: 'Optimized viewing experience across all devices with adaptive layouts, touch-friendly carousels for mobile, and rich desktop interactions.' }
      ],
      highlights: [
        'Built a highly responsive frontend architecture using React, Material-UI, and Vite to deliver a premium, high-performance web experience.',
        'Engineered interactive and touch-friendly product showcases utilizing Swiper for complex, customized sliding carousels.',
        'Implemented a serverless contact solution using EmailJS for instant, reliable global customer inquiries.',
        'Architected clean separation of concerns with React Router DOM for structured navigation across corporate and product pages.'
      ],
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2000&auto=format&fit=crop',
      extraImages: [
        'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2000&auto=format&fit=crop'
      ],
      tech: ['React', 'Vite', 'Material-UI', 'Swiper', 'EmailJS'],
      githubUrl: 'https://github.com/UdulaPahasara',
      liveUrl: 'https://tealora.com',
    },
    {
      title: 'Zylogenix',
      description: 'A modern corporate digital agency website offering tailored digital services, business-focused technology solutions, and expert guidance. It showcases services like web development, UI/UX design, and digital marketing, featuring smooth animations and a responsive, interactive user interface to scale brands.',
      features: [
        { title: 'Interactive Loading Experience', desc: 'Custom engineered loading screen featuring Framer Motion animations and sessionStorage integration, ensuring users only see it once per session for optimal UX.' },
        { title: 'Comprehensive Service Portfolios', desc: 'Dedicated pages showcasing specialized agency capabilities including Web & App Development, Digital Marketing, Design & Branding, and IT Support.' },
        { title: 'Advanced SEO Optimization', desc: 'Integrated react-helmet-async to dynamically manage document head tags, optimizing meta content across all routes for superior search engine visibility.' },
        { title: 'Seamless Navigation Engine', desc: 'Architected with React Router, featuring custom scroll-to-top behaviors and clean redirection logic for legacy routes.' }
      ],
      highlights: [
        'Built a high-performance frontend architecture using React, Vite, and Material-UI (MUI), prioritizing fast load times and clean component design.',
        'Engineered complex, highly engaging micro-interactions and page transitions utilizing Framer Motion to deliver a premium agency feel.',
        'Implemented a robust lead-generation pipeline utilizing EmailJS for reliable, serverless contact form submissions.'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
      extraImages: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop'
      ],
      tech: ['React', 'Vite', 'Material-UI', 'Framer Motion', 'React Helmet'],
      githubUrl: 'https://github.com/UdulaPahasara',
      liveUrl: 'https://zylogenix-orcin.vercel.app/',
    },
    {
      title: 'Enterprise POS & Inventory',
      description: 'A comprehensive full-stack Point of Sale platform tailored for modern retail operations. Engineered with a scalable Node/Express backend and a highly responsive, data-driven React dashboard.',
      features: [
        { title: 'Role-Based Access Control', desc: 'Secure authentication and specialized dashboards for Admins, Managers, Cashiers, and Inventory Staff.' },
        { title: 'Real-time Operations', desc: 'Live inventory deductions and sales reporting using Socket.io, preventing double-selling and keeping data perfectly in sync.' },
        { title: 'AI Integration', desc: 'Integrated Google Gemini AI to power an intelligent chatbot, assisting users and automating routine inquiries.' },
        { title: 'Hardware Ready', desc: 'Built-in barcode generation and scanning capabilities for rapid checkout flows.' }
      ],
      highlights: [
        'Built a highly responsive and modern UI using Material-UI (MUI) with smooth, engaging micro-interactions powered by Framer Motion.',
        'Developed a robust RESTful API with Express.js and Mongoose, implementing data sanitization and security best practices (Helmet, JWT).',
        'Optimized frontend performance using Vite as the build tool for lightning-fast hot module replacement and optimized production bundles.'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop',
      extraImages: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop' // Dashboard analytics
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Gemini AI'],
      githubUrl: 'https://github.com/UdulaPahasara',
      liveUrl: 'https://example.com',
    },
   
   
    {
      title: 'Professional Networking Platform',
      description: 'A comprehensive, modern professional networking and recruitment platform designed to seamlessly connect individuals and companies. It manages dual-faceted user profiles, dynamic job postings, and interactive communications, featuring built-in AI tools and an integrated marketplace.',
      features: [
        { title: 'Dual-Faceted Profiles', desc: 'Custom onboarding flows tailored for both individual professionals and corporate entities, providing dedicated dashboards and integrated CV management.' },
        { title: 'Advanced Job Portal', desc: 'Full capabilities for a dynamic recruitment experience, including detailed job cards, seamless application processes, and intuitive search functionalities.' },
        { title: 'AI Tool Integration', desc: 'Integrated AI capabilities designed to assist users with professional development, resume enhancement, and smart matchmaking between candidates and employers.' },
        { title: 'Real-Time Communication', desc: 'Dedicated messaging architecture featuring floating chat popups and structured message areas to facilitate seamless networking.' },
        { title: 'Integrated Marketplace', desc: 'Specialized platform routes allowing users to seamlessly offer skills, exchange services, and discover freelance talent within the network.' }
      ],
      highlights: [
        'Built a highly responsive, multi-route frontend architecture using React 19, Material-UI (MUI), and Vite, ensuring lightning-fast performance.',
        'Architected an advanced dynamic routing system with React Router DOM, managing distinct authenticated workflows for individuals, companies, and AI tools.',
        'Implemented modern, scalable styling and layout techniques using Emotion and MUI, creating a cohesive, professional aesthetic with reusable components.',
        'Engineered an intuitive, global communication interface with modular chat popups that encourage active engagement without disrupting browsing.'
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop',
      extraImages: [
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop'
      ],
      tech: ['React 19', 'Vite', 'Material-UI', 'Emotion', 'React Router', 'Gemini AI'],
      githubUrl: 'https://github.com/UdulaPahasara',
      liveUrl: 'https://example.com',
    },
    {
      title: 'T-Shirt Design Platform',
      description: 'A comprehensive, modern multi-vendor e-commerce platform and interactive design studio tailored for custom apparel. It manages user authentication, dynamic vendor product catalogs, and custom order workflows, featuring an advanced interactive T-shirt designer and AI-powered image processing.',
      features: [
        { title: 'Interactive Design Studio', desc: 'Built-in custom T-shirt designer utilizing Fabric.js, providing users with an intuitive HTML5 canvas to add text, upload graphics, and manipulate designs in real-time.' },
        { title: 'AI-Powered Image Processing', desc: 'Integrated Clipdrop API via a secure backend endpoint to offer instant, AI-driven background removal for user-uploaded images, ensuring high-quality prints.' },
        { title: 'Multi-Vendor Architecture', desc: 'A scalable Java Spring Boot backend that supports multiple print providers, enabling dynamic inventory management and seamless order routing.' },
        { title: 'Secure User Management', desc: 'Comprehensive authentication and authorization system powered by Spring Security, protecting customer profiles and dedicated provider administration portals.' },
        { title: 'Dynamic E-Commerce Workflow', desc: 'Full capabilities for a personalized shopping experience, managing custom product configurations, advanced cart management, and seamless checkout.' }
      ],
      highlights: [
        'Built a highly responsive, interactive frontend architecture using React, Material-UI, and Vite, featuring complex state management for the design canvas.',
        'Developed an advanced, real-time custom product editing experience using Fabric.js, elevating standard e-commerce personalization.',
        'Architected a robust, RESTful backend with Java, Spring Boot, and Spring Data JPA, ensuring secure and scalable data management with a MySQL database.',
        'Implemented secure API integrations and robust controller logic, including the handling of multipart file processing for external AI image processing services.'
      ],
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop',
      extraImages: [
        'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop'],
      tech: ['React', 'Fabric.js', 'Spring Boot', 'Java', 'MySQL', 'Clipdrop API', 'Material-UI', 'Vite'],
      githubUrl: 'https://github.com/UdulaPahasara',
      liveUrl: 'https://example.com',
    }
  ]
};
