export interface ServiceType {
  id: string;
  name: string;
  description: string;
  avgEtaMinutes: number;
  basePrice: number;
  category: 'Tire' | 'Battery' | 'Towing' | 'Engine' | 'Fuel' | 'Lockout';
  icon: string;
}

export interface DemoProvider {
  id: string;
  name: string;
  companyName: string;
  rating: number;
  completedJobs: number;
  distanceKm: number;
  etaMinutes: number;
  services: string[];
  vehicleType: string;
  lat: number;
  lng: number;
  isAvailable: boolean;
  statusText: string;
}

export interface ProblemCard {
  id: string;
  title: string;
  description: string;
  impact: string;
  icon: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  technicalDetail: string;
  role: 'Customer' | 'System' | 'Provider';
}

export interface LifecycleState {
  code: string;
  title: string;
  description: string;
  triggeredBy: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  isTerminal?: boolean;
}

export interface TechItem {
  name: string;
  role: string;
  category: 'Backend' | 'Frontend' | 'Cloud & Infra' | 'Payments' | 'Location';
  highlight: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  period: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  items: string[];
  architectureFocus: string;
}

export interface AdminDemoMetric {
  label: string;
  value: string;
  change: string;
  detail: string;
  category: 'Platform' | 'Financial' | 'Operational';
}

export interface DemoRequest {
  id: string;
  customerName: string;
  vehicle: string;
  service: string;
  provider: string;
  status: 'PENDING' | 'ACCEPTED' | 'ON THE WAY' | 'ARRIVED' | 'IN PROGRESS' | 'COMPLETED' | 'CANCELLED';
  amount: number;
  commission: number;
  timeAgo: string;
  location: string;
}

// 1. Services
export const SERVICES_LIST: ServiceType[] = [
  {
    id: "flat_tire",
    name: "Flat Tire Replacement",
    description: "On-site spare tire mounting, tire puncture repair, and pressure calibration.",
    avgEtaMinutes: 14,
    basePrice: 45,
    category: "Tire",
    icon: "Disc",
  },
  {
    id: "battery_jump",
    name: "Battery Jumpstart & Boost",
    description: "12V/24V high-amperage jumpstart, alternator load test, and terminal cleanup.",
    avgEtaMinutes: 12,
    basePrice: 40,
    category: "Battery",
    icon: "Zap",
  },
  {
    id: "emergency_towing",
    name: "Flatbed Emergency Towing",
    description: "Safe hydraulic flatbed transport to authorized workshops or home depot.",
    avgEtaMinutes: 22,
    basePrice: 85,
    category: "Towing",
    icon: "Truck",
  },
  {
    id: "engine_diagnostics",
    name: "Mobile OBD-II Diagnostics",
    description: "Scan tool ECU readout, sensor troubleshooting, and roadside mechanical fix.",
    avgEtaMinutes: 18,
    basePrice: 60,
    category: "Engine",
    icon: "Wrench",
  },
  {
    id: "fuel_delivery",
    name: "Emergency Fuel Delivery",
    description: "5L/10L octane gasoline or diesel delivered directly to your stranded spot.",
    avgEtaMinutes: 15,
    basePrice: 35,
    category: "Fuel",
    icon: "Fuel",
  },
  {
    id: "lockout_help",
    name: "Vehicle Lockout Assistance",
    description: "Non-destructive air wedge and reach tool entry for keys locked inside vehicle.",
    avgEtaMinutes: 16,
    basePrice: 50,
    category: "Lockout",
    icon: "KeyRound",
  },
];

// 2. Demo Providers for PostGIS & Map Simulation
export const DEMO_PROVIDERS: DemoProvider[] = [
  {
    id: "p1",
    name: "Marcus Vance",
    companyName: "Vance Mobile Mechanics",
    rating: 4.95,
    completedJobs: 482,
    distanceKm: 1.2,
    etaMinutes: 8,
    services: ["Battery Jumpstart & Boost", "Mobile OBD-II Diagnostics", "Flat Tire Replacement"],
    vehicleType: "Ford Transit Custom (Mobile Workshop)",
    lat: 37.7785,
    lng: -122.4150,
    isAvailable: true,
    statusText: "En route nearby (1.2 km away)",
  },
  {
    id: "p2",
    name: "Elena Rostova",
    companyName: "Bay Roadside Rescue",
    rating: 4.88,
    completedJobs: 320,
    distanceKm: 2.4,
    etaMinutes: 14,
    services: ["Flatbed Emergency Towing", "Flat Tire Replacement"],
    vehicleType: "RAM 5500 Heavy-Duty Flatbed",
    lat: 37.7840,
    lng: -122.4090,
    isAvailable: true,
    statusText: "Standby at Mission District (2.4 km away)",
  },
  {
    id: "p3",
    name: "David Chen",
    companyName: "Apex Auto Electric",
    rating: 4.92,
    completedJobs: 615,
    distanceKm: 3.8,
    etaMinutes: 20,
    services: ["Battery Jumpstart & Boost", "Vehicle Lockout Assistance", "Emergency Fuel Delivery"],
    vehicleType: "Toyota RAV4 Hybrid Quick-Response",
    lat: 37.7650,
    lng: -122.4280,
    isAvailable: true,
    statusText: "Finishing nearby job (3.8 km away)",
  },
  {
    id: "p4",
    name: "Samira Patel",
    companyName: "Metro Fleet Support",
    rating: 4.85,
    completedJobs: 210,
    distanceKm: 5.1,
    etaMinutes: 26,
    services: ["Emergency Fuel Delivery", "Mobile OBD-II Diagnostics"],
    vehicleType: "Chevy Express Utility",
    lat: 37.7920,
    lng: -122.3980,
    isAvailable: false,
    statusText: "Currently busy with repair (5.1 km away)",
  },
];

// 3. Problem Section Data
export const PROBLEMS: ProblemCard[] = [
  {
    id: "prob_1",
    title: "Stranded With Unknown Mechanics",
    description: "Drivers face high stress finding reputable mobile repair specialists in unfamiliar areas without verified background checks or reviews.",
    impact: "Uncertainty & safety anxiety",
    icon: "ShieldAlert",
  },
  {
    id: "prob_2",
    title: "Unclear Service Availability",
    description: "Calling traditional repair shops leads to unanswered phones, closed garages, or technicians who don't offer roadside travel.",
    impact: "Wasted hours calling around",
    icon: "Clock",
  },
  {
    id: "prob_3",
    title: "Vague ETAs & Long Waiting Times",
    description: "Standard dispatchers give 2-hour windows with zero real-time tracking, leaving stranded motorists waiting by busy highway shoulders.",
    impact: "Blind waiting on roadside",
    icon: "MapPinOff",
  },
  {
    id: "prob_4",
    title: "Difficulty Communicating Location",
    description: "Describing mile markers or unfamiliar intersections over voice calls leads to wrong turns and delayed emergency response.",
    impact: "Navigation dispatch errors",
    icon: "Compass",
  },
  {
    id: "prob_5",
    title: "Uncertain Service Status",
    description: "Lack of visibility into whether the request was accepted, if parts are ready, or when the technician actually arrived.",
    impact: "Complete communication blackout",
    icon: "HelpCircle",
  },
  {
    id: "prob_6",
    title: "Surprise Pricing & Cash Demands",
    description: "Unregulated roadside callouts often result in arbitrary cash demands, hidden towing fees, and zero receipt transparency.",
    impact: "Unfair charges & payment disputes",
    icon: "ReceiptOff",
  },
];

// 4. How It Works (6-step timeline)
export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Request Help",
    subtitle: "Select Vehicle & Service",
    description: "Customer selects their registered vehicle, marks the issue (flat tire, dead battery, engine fault), and confirms GPS pinpoint.",
    technicalDetail: "Flutter UI pushes location payload to FastAPI /api/v1/requests endpoint with Pydantic schema validation.",
    role: "Customer",
  },
  {
    step: 2,
    title: "Find Nearby Providers",
    subtitle: "PostGIS Spatial Search",
    description: "Platform executes sub-second spatial querying to detect available, verified mechanics within configurable kilometer radius.",
    technicalDetail: "PostgreSQL PostGIS executes ST_DWithin on SRID 4326 geometry point with active provider availability filters.",
    role: "System",
  },
  {
    step: 3,
    title: "Provider Accepts",
    subtitle: "Real-Time Dispatch Alert",
    description: "Nearby technicians receive instant push notifications with job details, distance, vehicle model, and fair estimated fee.",
    technicalDetail: "WebSocket event broadcast via Redis Pub/Sub; atomic database lock prevents double-claiming.",
    role: "Provider",
  },
  {
    step: 4,
    title: "Track Provider",
    subtitle: "Live GPS Stream",
    description: "Customer watches the technician travel on a live map with dynamic ETA updates and turn-by-turn route telemetry.",
    technicalDetail: "Provider app emits high-frequency GPS ping via WebSocket to FastAPI, routed to the subscribed customer room.",
    role: "System",
  },
  {
    step: 5,
    title: "Vehicle Repair",
    subtitle: "On-Site Execution",
    description: "Provider arrives, confirms inspection with the driver, transitions status to IN PROGRESS, and resolves the mechanical failure.",
    technicalDetail: "Status transition audited with timestamp and geographical arrival radius verification.",
    role: "Provider",
  },
  {
    step: 6,
    title: "Pay & Review",
    subtitle: "Automated Razorpay Checkout",
    description: "Customer completes secure card/UPI payment with instant digital invoice and submits a transparent star review.",
    technicalDetail: "Server-side Razorpay order verification, automated commission split calculation, and settlement entry.",
    role: "Customer",
  },
];

// 5. Customer Features
export const CUSTOMER_FEATURES = [
  {
    title: "Vehicle Management Vault",
    description: "Save multiple vehicles (sedan, SUV, EV, motorcycle) with license plate, VIN, and fuel/battery specs for one-tap dispatch.",
    icon: "Car",
  },
  {
    title: "Map-Based Discovery",
    description: "Visual radar displaying real-time active mechanics, estimated response times, and specialization badges.",
    icon: "MapPin",
  },
  {
    title: "Instant Service Requests",
    description: "Choose from 6 core roadside emergency services with upfront price transparency and no hidden callout charges.",
    icon: "Wrench",
  },
  {
    title: "Live GPS Telemetry",
    description: "Real-time WebSocket stream displaying the technician's approaching vehicle, speed, and dynamically calculated ETA.",
    icon: "Navigation",
  },
  {
    title: "Secure Digital Checkout",
    description: "Integrated Razorpay payments supporting UPI, debit/credit cards, and digital receipts stored in history.",
    icon: "CreditCard",
  },
  {
    title: "Verified Community Ratings",
    description: "Transparent feedback loop where drivers rate repair quality, punctuality, and professionalism.",
    icon: "Star",
  },
];

// 6. Provider Features
export const PROVIDER_FEATURES = [
  {
    title: "Availability Switch",
    description: "Toggle between Online and Offline status anytime with automatic background GPS heartbeat broadcast.",
    icon: "Radio",
  },
  {
    title: "Incoming Dispatch Radar",
    description: "Receive nearby request cards with upfront customer distance, vehicle fault description, and guaranteed payout.",
    icon: "Bell",
  },
  {
    title: "One-Tap Turn-by-Turn Navigation",
    description: "Launch direct route guidance to the stranded customer's exact geo-coordinates without manual address typing.",
    icon: "Compass",
  },
  {
    title: "Lifecycle State Control",
    description: "Update job status through clean progressive buttons: On The Way, Arrived, In Progress, Completed.",
    icon: "CheckCircle2",
  },
  {
    title: "Earnings & Settlement Dashboard",
    description: "Track daily gross earnings, platform commission deductions, pending settlements, and direct bank payouts.",
    icon: "TrendingUp",
  },
  {
    title: "Verified Pro Credentialing",
    description: "Upload mechanic certifications, trade licenses, and tow truck insurance documents for verified pro status.",
    icon: "BadgeCheck",
  },
];

// 7. Service Lifecycle States
export const LIFECYCLE_STATES: LifecycleState[] = [
  {
    code: "PENDING",
    title: "Pending Dispatch",
    description: "Request created by driver; PostGIS spatial broadcast sent to available nearby mechanics.",
    triggeredBy: "Customer taps 'Request Assistance'",
    color: "amber",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-400",
    borderColor: "border-amber-500/30",
  },
  {
    code: "ACCEPTED",
    title: "Technician Accepted",
    description: "A nearby certified mechanic claimed the job. Exclusive assignment locked in database.",
    triggeredBy: "Provider taps 'Accept Job'",
    color: "blue",
    badgeBg: "bg-blue-500/10",
    badgeText: "text-blue-400",
    borderColor: "border-blue-500/30",
  },
  {
    code: "ON THE WAY",
    title: "On The Way",
    description: "Technician is actively driving toward customer location; WebSocket live GPS updates enabled.",
    triggeredBy: "Provider begins navigation",
    color: "indigo",
    badgeBg: "bg-indigo-500/10",
    badgeText: "text-indigo-400",
    borderColor: "border-indigo-500/30",
  },
  {
    code: "ARRIVED",
    title: "Technician Arrived",
    description: "Mechanic reached the stranded vehicle's coordinates; in-person diagnostic inspection begins.",
    triggeredBy: "Geofence confirmation or manual tap",
    color: "cyan",
    badgeBg: "bg-cyan-500/10",
    badgeText: "text-cyan-400",
    borderColor: "border-cyan-500/30",
  },
  {
    code: "IN PROGRESS",
    title: "Repair In Progress",
    description: "Roadside mechanical work active (battery boost, tire replacement, diagnostic readout).",
    triggeredBy: "Provider confirms repair commencement",
    color: "purple",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-400",
    borderColor: "border-purple-500/30",
  },
  {
    code: "COMPLETED",
    title: "Service Completed",
    description: "Repair finished, vehicle operational or safely towed. Payment finalized and receipt generated.",
    triggeredBy: "Provider and customer sign-off",
    color: "emerald",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    isTerminal: true,
  },
];

export const TERMINAL_STATES: LifecycleState[] = [
  {
    code: "CANCELLED",
    title: "Customer Cancelled",
    description: "Customer cancelled prior to provider departure. Cancellation policy rules evaluated.",
    triggeredBy: "Customer cancels via app",
    color: "slate",
    badgeBg: "bg-slate-500/10",
    badgeText: "text-slate-400",
    borderColor: "border-slate-500/30",
    isTerminal: true,
  },
  {
    code: "REJECTED",
    title: "Declined / Timed Out",
    description: "Provider declined or timeout elapsed without acceptance; auto-routed to next closest technician.",
    triggeredBy: "Provider reject action or 60s timeout",
    color: "rose",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-400",
    borderColor: "border-rose-500/30",
    isTerminal: true,
  },
];

// 8. Tech Stack
export const TECH_STACK: TechItem[] = [
  // Backend
  { name: "Python 3.11+", role: "High-performance typing and core runtime", category: "Backend", highlight: "Async runtime" },
  { name: "FastAPI", role: "Modern async REST API framework with OpenAPI docs", category: "Backend", highlight: "High throughput" },
  { name: "SQLAlchemy 2.0", role: "Type-safe ORM for relational queries and transactions", category: "Backend", highlight: "Async ORM" },
  { name: "Pydantic v2", role: "Data validation and serialization with Rust core", category: "Backend", highlight: "Zero-overhead schemas" },
  { name: "PostgreSQL 16", role: "Reliable ACID database for users, requests, transactions", category: "Backend", highlight: "Enterprise ACID" },
  { name: "PostGIS", role: "Spatial database extension for coordinates & radius queries", category: "Backend", highlight: "ST_DWithin & SRID 4326" },
  { name: "Redis", role: "In-memory caching and Pub/Sub message broker", category: "Backend", highlight: "Sub-millisecond messaging" },
  { name: "WebSockets", role: "Bidirectional persistent streaming for live GPS coordinates", category: "Backend", highlight: "Real-time updates" },
  { name: "Alembic", role: "Database schema migration and version control", category: "Backend", highlight: "Automated revisions" },

  // Frontend
  { name: "Flutter", role: "Cross-platform native mobile engine for iOS and Android", category: "Frontend", highlight: "60fps native performance" },
  { name: "Dart", role: "Strongly typed client programming language", category: "Frontend", highlight: "Sound null safety" },
  { name: "Riverpod", role: "Compile-safe reactive state management", category: "Frontend", highlight: "Unidirectional data flow" },
  { name: "Dio", role: "Powerful HTTP client with JWT interceptors & token refresh", category: "Frontend", highlight: "Network resilience" },
  { name: "GoRouter", role: "Declarative routing with deep linking support", category: "Frontend", highlight: "URL & state sync" },

  // Cloud & Infra
  { name: "Supabase / AWS RDS", role: "Managed PostgreSQL instance with PostGIS enabled", category: "Cloud & Infra", highlight: "Automated backups" },
  { name: "AWS ECS / Cloud Run", role: "Containerized deployment of FastAPI application", category: "Cloud & Infra", highlight: "Auto-scaling compute" },
  { name: "Docker", role: "Reproducible container builds and multi-stage testing", category: "Cloud & Infra", highlight: "Dev & Prod parity" },

  // Payments
  { name: "Razorpay Gateway", role: "Secure card, UPI, and netbanking processing", category: "Payments", highlight: "PCI-DSS compliant" },
  { name: "Webhook Verification", role: "HMAC SHA256 cryptographic signature checks", category: "Payments", highlight: "Anti-tamper security" },

  // Location
  { name: "Google Maps / Mapbox", role: "Vector map tiles, routing API, geocoding", category: "Location", highlight: "Real-time vector rendering" },
  { name: "HTML5 / Native Geolocation", role: "Accurate GPS sensor coordinates acquisition", category: "Location", highlight: "Sub-5m positioning" },
];

// 9. Architecture Metrics (strictly architectural/demo metrics)
export const PROJECT_METRICS = [
  { value: "15+", label: "API Modules", detail: "Auth, Vehicles, Requests, Geo, Payments, WebSockets, Admin" },
  { value: "20+", label: "Core Screens", detail: "Customer and Provider mobile flows in Flutter" },
  { value: "6", label: "Service States", detail: "Strict state-machine lifecycle with validation" },
  { value: "3", label: "User Roles", detail: "Customer, Service Provider, and Platform Administrator" },
  { value: "< 250ms", label: "PostGIS Radius Query", detail: "ST_DWithin spatial index on 10,000+ points" },
  { value: "Real-Time", label: "Live GPS Telemetry", detail: "Redis Pub/Sub connected WebSockets" },
];

// 10. Roadmap Phases
export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Core Platform Foundation",
    period: "Milestone 1",
    status: "Completed",
    architectureFocus: "FastAPI + PostgreSQL + Flutter MVP",
    items: [
      "JWT Authentication with refresh token rotation",
      "Customer & vehicle profiles management (VIN, plates, make/model)",
      "Provider onboarding & service catalogue registration",
      "Core request lifecycle data models with SQLAlchemy & Alembic migrations",
      "Cross-platform Flutter customer & provider app skeletons",
    ],
  },
  {
    phase: "Phase 2",
    title: "Location Intelligence",
    period: "Milestone 2",
    status: "Completed",
    architectureFocus: "PostGIS Spatial Engine & Mapbox/Google Maps",
    items: [
      "PostGIS ST_DWithin spatial indexing on provider location geometries",
      "Configurable search radius calculation (5km, 10km, 25km)",
      "Map integration with custom vehicle markers and polyline routing",
      "Live provider availability status toggles with heartbeat timestamps",
      "Geofence arrival detection near customer coordinates",
    ],
  },
  {
    phase: "Phase 3",
    title: "Real-Time Assistance & Telemetry",
    period: "Milestone 3",
    status: "In Progress",
    architectureFocus: "Redis Pub/Sub & Bidirectional WebSockets",
    items: [
      "Persistent WebSocket channels for instant dispatch broadcasts",
      "Sub-second provider GPS streaming with Kalman smoothing",
      "Real-time customer tracking screen with dynamic ETA recalculation",
      "Request state transition notifications with audio/haptic feedback",
      "Graceful WebSocket reconnection with exponential backoff",
    ],
  },
  {
    phase: "Phase 4",
    title: "Financial Infrastructure",
    period: "Milestone 4",
    status: "In Progress",
    architectureFocus: "Razorpay Checkout & Server-Side Settlement",
    items: [
      "Server-side dynamic quote calculation based on service type & distance",
      "Razorpay order creation with cryptographic HMAC SHA256 signature verification",
      "Automated platform commission splitting (e.g. 15% platform, 85% provider)",
      "Provider earnings dashboard with settlement payout queues",
      "Automated refund processing on eligible cancellations",
    ],
  },
  {
    phase: "Phase 5",
    title: "Enterprise Scale & Smart Dispatch",
    period: "Milestone 5",
    status: "Planned",
    architectureFocus: "Push Notifications, AI Matching & Fleet Management",
    items: [
      "Firebase Cloud Messaging (FCM) & Apple APNs push notifications",
      "Smart machine-learning dispatch optimization based on technician ETA and traffic",
      "Comprehensive admin analytics dashboard with CSV export capabilities",
      "Customer reputation scoring and fraud prevention rules",
      "Multi-region cloud deployment on AWS ECS with auto-scaling Redis clusters",
    ],
  },
];

// 11. Admin Platform Demonstration Data (clearly marked demo)
export const DEMO_ADMIN_METRICS: AdminDemoMetric[] = [
  { label: "Active Drivers Registered", value: "1,420", change: "+12.4%", detail: "Demonstration count of driver profiles", category: "Platform" },
  { label: "Verified Mechanics", value: "318", change: "+8.1%", detail: "Background-checked active service pros", category: "Platform" },
  { label: "Dispatched Requests", value: "4,892", change: "+24.6%", detail: "Completed & active roadside missions", category: "Operational" },
  { label: "Platform Gross Volume", value: "$198,450", change: "+18.2%", detail: "Demonstration simulated GMV processed", category: "Financial" },
  { label: "Platform Commission (15%)", value: "$29,767", change: "+18.2%", detail: "Simulated platform revenue model", category: "Financial" },
  { label: "Provider Payouts Settled", value: "$168,683", change: "+17.9%", detail: "Net earnings distributed to technicians", category: "Financial" },
  { label: "Average Response ETA", value: "14.2 min", change: "-2.1 min", detail: "From tap to on-site arrival", category: "Operational" },
  { label: "Customer Satisfaction", value: "4.91 / 5.0", change: "+0.04", detail: "Based on 3,420 demo ratings", category: "Operational" },
];

export const DEMO_REQUESTS: DemoRequest[] = [
  {
    id: "REQ-8491",
    customerName: "Claire Henderson",
    vehicle: "2023 Tesla Model Y (Midnight Silver)",
    service: "Battery Jumpstart & Boost",
    provider: "David Chen (Apex Auto)",
    status: "IN PROGRESS",
    amount: 40,
    commission: 6,
    timeAgo: "8 min ago",
    location: "Market St & 5th St, SF",
  },
  {
    id: "REQ-8490",
    customerName: "Robert Miller",
    vehicle: "2021 Ford F-150 (Oxford White)",
    service: "Flat Tire Replacement",
    provider: "Marcus Vance (Vance Mobile)",
    status: "ON THE WAY",
    amount: 45,
    commission: 6.75,
    timeAgo: "16 min ago",
    location: "US-101 Northbound Mile 412",
  },
  {
    id: "REQ-8489",
    customerName: "Jessica Taylor",
    vehicle: "2019 Honda Civic (Aegean Blue)",
    service: "Flatbed Emergency Towing",
    provider: "Elena Rostova (Bay Rescue)",
    status: "COMPLETED",
    amount: 95,
    commission: 14.25,
    timeAgo: "42 min ago",
    location: "Geary Blvd & Park Presidio",
  },
  {
    id: "REQ-8488",
    customerName: "Ahmed Farooq",
    vehicle: "2022 Hyundai Ioniq 5 (Cyber Gray)",
    service: "Mobile OBD-II Diagnostics",
    provider: "Marcus Vance (Vance Mobile)",
    status: "COMPLETED",
    amount: 60,
    commission: 9.00,
    timeAgo: "1 hr ago",
    location: "Valencia St & 18th St",
  },
  {
    id: "REQ-8487",
    customerName: "Samantha Brooks",
    vehicle: "2018 Toyota RAV4 (Silver Sky)",
    service: "Vehicle Lockout Assistance",
    provider: "Samira Patel (Metro Fleet)",
    status: "COMPLETED",
    amount: 50,
    commission: 7.50,
    timeAgo: "2 hr ago",
    location: "Embarcadero Plaza",
  },
];
