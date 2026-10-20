import { ProductItem } from '../types.ts';
import { ASSET_IMAGES } from '../assets/images.ts';

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'ifp-86-4k',
    name: '86-Inch 4K Interactive Flat Panel Display',
    category: 'Interactive Displays',
    tagline: 'Ultra-responsive collaboration display for large conference rooms and lecture halls',
    description: 'Commercial-grade 86" 4K UHD interactive touch panel equipped with anti-glare toughened glass, high-precision 20-point touch, dual OS (Android and Windows OPS slot), and seamless wireless screen casting.',
    image: ASSET_IMAGES.touchPanel,
    keyFeatures: [
      '86" 4K UHD (3840 x 2160) anti-glare display',
      '20-point multi-touch writing with zero-bonding technology',
      'Dual OS compatibility with slot-in Windows OPS PC option',
      'Instant wireless casting from iOS, Windows, Mac, and Android',
      'Built-in 2x15W stereo front-firing speakers and array microphones'
    ],
    applications: [
      'Executive boardrooms and corporate presentation halls',
      'Higher education seminar rooms and smart classrooms',
      'Architectural review and collaborative design centers',
      'Interactive hybrid meeting rooms'
    ],
    specsPreview: ['86" 4K UHD', '20-Point Touch', 'Dual OS Ready', 'Anti-Glare Glass']
  },
  {
    id: 'ifp-75-4k',
    name: '75-Inch Smart Interactive Digital Board',
    category: 'Interactive Displays',
    tagline: 'The gold standard for modern school classrooms and training suites',
    description: 'Designed specifically for education and corporate training, this 75-inch interactive digital board provides natural pen-on-paper writing feel, comprehensive digital whiteboarding tools, and intuitive cloud file access.',
    image: ASSET_IMAGES.touchPanel,
    keyFeatures: [
      '75" 4K Ultra HD IPS display with wide viewing angles',
      '1mm high writing accuracy with palm rejection support',
      'Integrated whiteboard software with mathematical shapes and tools',
      'Multi-screen split view for multi-student participation',
      'Toughened 7H hardness scratch-resistant safety glass'
    ],
    applications: [
      'K-12 schools and university smart classrooms',
      'Professional training centers and corporate meeting rooms',
      'Government conference rooms and workshop halls'
    ],
    specsPreview: ['75" 4K UHD', 'High-Precision Stylus', 'Built-in Whiteboard', '7H Toughened Glass']
  },
  {
    id: 'led-videowall-indoor',
    name: 'Indoor Fine-Pitch Seamless LED Video Wall',
    category: 'LED & Display Systems',
    tagline: 'High-impact bezel-free visual canvas with ultra-deep contrast',
    description: 'Modular high-resolution indoor LED display with ultra-fine pixel pitch options (P1.25, P1.5, P1.8, P2.0). Features bezel-free seamless cabinet joining, high refresh rates, and cinema-grade color accuracy for flagship spaces.',
    image: ASSET_IMAGES.ledVideoWall,
    keyFeatures: [
      'Seamless modular die-cast aluminum cabinet assembly',
      'Fine pixel pitch configurations from P1.25 to P2.5 mm',
      'High refresh rate (3840Hz) for flicker-free camera capture and live broadcast',
      'Front-maintenance magnetic module design for rapid servicing',
      'Advanced NovaStar video processing and multi-window picture-in-picture'
    ],
    applications: [
      'Enterprise command centers, NOC rooms, and security operation hubs',
      'Corporate lobbies, auditoriums, and executive briefing centers',
      'Hospitality ballrooms, convention centers, and broadcast studios'
    ],
    specsPreview: ['Fine Pitch P1.5/P1.8', 'Seamless Modular', '3840Hz Refresh', 'Front-Service Magnetic']
  },
  {
    id: 'digital-kiosk-freestanding',
    name: 'Slim Floor-Standing Interactive Touch Kiosk',
    category: 'Kiosks & Accessories',
    tagline: 'Sleek self-service and wayfinding terminal for public spaces',
    description: 'Commercial 43"/55" freestanding interactive kiosk engineered with full HD/4K capacitive touch, an ultra-slim aluminum bezel, and secure lockable internal enclosure for mini PCs or media players.',
    image: ASSET_IMAGES.kiosk,
    keyFeatures: [
      '43" or 55" commercial IPS high-brightness display (450 nits)',
      '10-point projected capacitive (PCAP) multi-touch technology',
      'Heavy-duty weighted steel and aluminum alloy pedestal stand',
      'Built-in Wi-Fi, Ethernet, and discreet cable management channel',
      'Compatible with custom queue management and wayfinding software'
    ],
    applications: [
      'Hotel lobbies, guest check-in, and concierge information',
      'Hospital patient registration and queue token generation',
      'Shopping malls, retail stores, and transport terminals',
      'Campus visitor navigation and event directories'
    ],
    specsPreview: ['43" / 55" Display', 'Capacitive PCAP Touch', 'Commercial Steel Frame', '24/7 Duty Cycle']
  },
  {
    id: 'video-bar-conferencing',
    name: 'All-in-One 4K AI Video Conferencing Bar',
    category: 'Video Conferencing',
    tagline: 'Crystal-clear hybrid meeting sound and intelligent camera framing',
    description: 'Integrated video bar with 4K ePTZ optics, auto-framing speaker tracking, 6-element beamforming microphone array with noise suppression, and high-fidelity room-filling speakers.',
    image: ASSET_IMAGES.videoConferencing,
    keyFeatures: [
      'Ultra-wide 120° field-of-view 4K optical sensor',
      'AI speaker tracking and group auto-framing technology',
      '6-microphone beamforming array with acoustic echo cancellation',
      'Plug-and-play USB connection for Zoom, MS Teams, and Google Meet',
      'Wall, display, or tabletop mounting flexibility'
    ],
    applications: [
      'Huddle rooms and medium-sized executive conference rooms',
      'Remote interview rooms and telemedicine consultation spaces',
      'Executive home offices and collaborative study suites'
    ],
    specsPreview: ['4K ePTZ Camera', '120° FOV', '6-Mic Array', 'AI Auto-Framing']
  },
  {
    id: 'laser-projector-system',
    name: 'High-Lumen 4K Laser Projector & ALR Screen Combo',
    category: 'Projectors & Screens',
    tagline: 'Massive cinematic projection engineered for ambient-lit environments',
    description: 'Solid-state laser light source projector outputting 6,000+ ANSI lumens paired with an Ambient Light Rejecting (ALR) motorized or fixed tensioned screen for high contrast in bright rooms.',
    image: ASSET_IMAGES.heroBoardroom,
    keyFeatures: [
      '6,000+ ANSI lumens solid-state laser light engine',
      'Up to 30,000 hours maintenance-free filterless operation',
      'Motorized optical zoom, lens shift, and geometric keystone correction',
      'High-contrast Ambient Light Rejecting (ALR) screen surface',
      'Whisper-quiet cooling system (< 28 dB operating noise)'
    ],
    applications: [
      'Large university auditoriums and lecture theaters',
      'Corporate training rooms and ballroom presentations',
      'Places of worship and multipurpose community halls'
    ],
    specsPreview: ['6,000+ ANSI Lumens', '30,000-hr Laser', 'ALR Screen Match', 'Motorized Lens Shift']
  },
  {
    id: 'dsp-audio-system',
    name: 'Commercial DSP Audio Processor & Ceiling Mic Array',
    category: 'Audio Systems',
    tagline: 'Acoustic excellence and flawless speech intelligibility across entire rooms',
    description: 'Enterprise audio processing package including steerable beamforming ceiling microphone arrays, multi-channel Dante DSP mixer, and distributed low-distortion architectural speakers.',
    image: ASSET_IMAGES.videoConferencing,
    keyFeatures: [
      'Steerable ceiling microphone array with 360° voice pickup zones',
      'Multi-channel Digital Signal Processor (DSP) with Dante network audio',
      'Acoustic Echo Cancellation (AEC) and background noise suppression',
      'Class-D high-efficiency commercial amplifiers with zone controls',
      'Clean architectural in-ceiling and wall-mount speaker options'
    ],
    applications: [
      'Boardrooms and executive telepresence suites',
      'Parliamentary style council halls and courtrooms',
      'Higher education hybrid lecture halls and auditoriums'
    ],
    specsPreview: ['Beamforming Array', 'Dante DSP Network', 'AEC Noise Reduction', 'Architectural Speakers']
  },
  {
    id: 'queue-management-kiosk',
    name: 'Smart Queue Management & Token Dispenser Kiosk',
    category: 'Kiosks & Accessories',
    tagline: 'Automated token ticketing and queue flow optimizer for service centers',
    description: 'Dedicated self-service token dispensing kiosk equipped with high-speed 80mm thermal auto-cutter printer, responsive touch screen, and intuitive multi-service category selection interface.',
    image: ASSET_IMAGES.kiosk,
    keyFeatures: [
      'Integrated high-speed auto-cut thermal ticket printer',
      '19" to 22" responsive vertical touch interface',
      'Customizable branch logo and multi-counter queue categorization',
      'Audible chime integration and waiting time displays',
      'Secure tamper-proof lockable maintenance compartment'
    ],
    applications: [
      'Bank branches and financial institutions',
      'Government administrative service centers and utilities',
      'Diagnostic clinics, hospitals, and outpatient desks'
    ],
    specsPreview: ['80mm Thermal Printer', 'Touch Ticket Terminal', 'Multi-Queue Routing', 'Tamper-Proof Steel']
  },
  {
    id: 'ptz-conference-camera',
    name: 'Enterprise 4K Optical PTZ Conference Camera',
    category: 'Video Conferencing',
    tagline: 'Professional 12x optical zoom pan-tilt-zoom camera for large conference spaces',
    description: 'Broadcast-standard PTZ camera featuring 12x optical zoom, 4K 60fps video capture, whisper-quiet robotic drive mechanisms, and simultaneous HDMI, USB 3.0, and IP streaming outputs.',
    image: ASSET_IMAGES.videoConferencing,
    keyFeatures: [
      '12x optical zoom with 80° wide-angle horizontal field of view',
      'Smooth robotic pan/tilt drive with preset position recall',
      'Concurrent USB 3.0, HDMI, and IP RTSP/RTMP output feeds',
      'High signal-to-noise ratio CMOS sensor with 3D noise reduction',
      'Visca/Pelco and RS232/RS485 remote control protocols'
    ],
    applications: [
      'Large enterprise boardrooms and multi-camera seminar venues',
      'Higher education live lecture capture and distance learning',
      'Town hall streaming suites and municipal council chambers'
    ],
    specsPreview: ['12x Optical Zoom', '4K 60fps Capture', 'Silent Robotic PTZ', 'Multi-Interface Output']
  },
  {
    id: 'heavy-duty-mobile-stand',
    name: 'Heavy-Duty Motorized Mobile IFP Cart & Mount',
    category: 'Kiosks & Accessories',
    tagline: 'Commercial mobile trolley with electric height adjustment for 55" to 98" displays',
    description: 'Engineered for smooth room-to-room mobility and ADA-compliant accessibility, this motorized mobile stand supports large interactive flat panels with whisper-quiet push-button height control and locking wheels.',
    image: ASSET_IMAGES.touchPanel,
    keyFeatures: [
      'Universal VESA compatibility supporting 55" to 98" displays up to 130 kg',
      'Smooth dual-column motorized electric height adjustment with wired remote',
      'Heavy-duty 4-inch rubberized caster wheels with individual foot brakes',
      'Integrated AV component shelf for laptops and camera top bracket',
      'Internal cable management channel preventing tangled cords'
    ],
    applications: [
      'Agile corporate offices sharing displays across multiple conference rooms',
      'School libraries, multipurpose labs, and shared educational spaces',
      'Exhibition booths and temporary trade show presentations'
    ],
    specsPreview: ['Supports 55"-98"', 'Electric Height Lift', '130kg Max Load', 'Integrated AV Shelf']
  }
];

export const PRODUCT_CATEGORIES = [
  'All',
  'Interactive Displays',
  'LED & Display Systems',
  'Projectors & Screens',
  'Audio Systems',
  'Video Conferencing',
  'Kiosks & Accessories'
] as const;
