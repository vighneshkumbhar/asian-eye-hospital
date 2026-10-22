import { client, projectId } from "./sanity.client";

// Check if using placeholder credentials
const isPlaceholder = projectId === "placeholder-project-id" || !projectId;

// ─── HIGH-FIDELITY LOCAL FALLBACK DATA (PHASE 2 ASSET INVENTORY) ──────────

const MOCK_HOMEPAGE = {
  heroTitle: "Pune's Most Trusted Eye Care Centre",
  heroSubtitle: "India's first dual-fellowship trained refractive specialists. Mentored by the inventor of LASIK. Over 50,000 lives transformed.",
  heroBanners: ["/images/banner/best-eye-hospital.jpg"],
  stats: [
    { value: "25+ Years", label: "Clinical Legacy" },
    { value: "50,000+", label: "Happy Eyes" },
    { value: "100%", label: "Blade-Free LASIK" },
    { value: "4.9 ★", label: "Google Rating" }
  ]
};

const MOCK_DOCTORS = [
  {
    _id: "doc-vardhaman",
    name: "Dr. Vardhaman Kankariya",
    slug: "dr-vardhaman-kankariya",
    role: "Director & Chief Refractive Surgeon",
    specialization: "LASIK, Contoura Vision & Smile Specialist",
    image: "/images/dr-vardhaman1.jpg",
    bio: "Dr. Vardhaman Kankariya is India's first dual-fellowship trained refractive specialist. Mentored by Prof. Dr. Ioannis Pallikaris (the inventor of LASIK) in Greece, he brings world-class expertise in laser vision correction, having completed thousands of successful surgeries.",
    qualifications: ["MBBS, MS Ophthalmology (Gold Medalist)", "Fellowship in Refractive Surgery (University of Crete, Greece)", "Fellowship in Cornea & External Diseases (USA)"],
    experienceYears: 18,
    highlights: [
      "Mentored directly by Prof. Ioannis Pallikaris, inventor of LASIK.",
      "First surgeon in Western India to perform topography-guided Contoura Vision.",
      "Awarded Best Ophthalmic Surgeon in Maharashtra (2022)."
    ],
    order: 1
  },
  {
    _id: "doc-shrutika",
    name: "Dr. Shrutika Kankariya",
    slug: "dr-shrutika-kankariya",
    role: "Co-Director & Senior Consultant",
    specialization: "Cataract & Squint Specialist",
    image: "/images/dr-shrutika.jpg",
    bio: "Dr. Shrutika Kankariya is an internationally trained specialist in modern micro-incision cataract surgery (MICS), premium multifocal IOL implants, and pediatric squint management. She has over 15 years of surgical legacy.",
    qualifications: ["MBBS, DOMS, DNB Ophthalmology", "Fellowship in Pediatric Ophthalmology & Strabismus"],
    experienceYears: 15,
    highlights: [
      "Specialist in premium trifocal and Toric intraocular lens implants.",
      "Conducted over 10,000 successful micro-incision cataract procedures."
    ],
    order: 2
  },
  {
    _id: "doc-prakash",
    name: "Dr. Prakash Kankariya",
    slug: "dr-prakash-kankariya",
    role: "Founder & Chief Mentor",
    specialization: "Senior Ophthalmic Consultant",
    image: "/images/dr-prakash2.jpg",
    bio: "Dr. Prakash Kankariya is the pioneer who founded Asian Eye Hospital in 1998. He is a globally recognized researcher who has contributed extensively to the evolution of refractive and cataract surgical protocols in India.",
    qualifications: ["MBBS, MS Ophthalmology", "FICS (USA), FMED (Germany)"],
    experienceYears: 40,
    highlights: [
      "Founded Asian Eye Hospital in 1998 to bring state-of-the-art eye care to Pune.",
      "Awarded lifetime achievement honors by national ophthalmic associations."
    ],
    order: 3
  },
  {
    _id: "doc-swapnil",
    name: "Dr. Swapnil Bhalekar",
    slug: "dr-swapnil-bhalekar",
    role: "Senior Retina Consultant",
    specialization: "Vitreoretinal Specialist",
    image: "/images/Dr-Swapnil-Bhalekar.jpg",
    bio: "Dr. Swapnil Bhalekar specializes in medical and surgical vitreoretinal diseases, including diabetic retinopathy management, retinal detachments, and macular degeneration treatment.",
    qualifications: ["MBBS, MS, DNB Ophthalmology", "Fellowship in Vitreoretinal Surgery"],
    experienceYears: 12,
    highlights: [
      "Expert in laser treatment and micro-surgical vitrectomy for diabetic patients.",
      "Recognized researcher in advanced retina therapeutics."
    ],
    order: 4
  },
  {
    _id: "doc-nitant",
    name: "Dr. Nitant Shah",
    slug: "dr-nitant-shah",
    role: "Glaucoma Specialist",
    specialization: "Glaucoma & Anterior Segment Consultant",
    image: "/images/dr-nitant-shah.jpg",
    bio: "Dr. Nitant Shah is a dedicated glaucoma specialist managing complex adult and pediatric glaucoma cases with both advanced medical diagnostics and surgical implants.",
    qualifications: ["MBBS, MS Ophthalmology", "Fellowship in Glaucoma (Aravind Eye Hospital)"],
    experienceYears: 10,
    highlights: [
      "Pioneered micro-bypass glaucoma shunts in local clinics.",
      "Expert in early visual field diagnostic analysis."
    ],
    order: 5
  },
  {
    _id: "doc-pritam",
    name: "Dr. Pritam Bhujbal",
    slug: "dr-pritam-bhujbal",
    role: "Cornea & Ocular Surface Consultant",
    specialization: "Cornea Specialist",
    image: "/images/dr-pritam-bhujbal.jpg",
    bio: "Dr. Pritam Bhujbal specializes in corneal transplants, dry eye management, ocular surface reconstruction, and advanced keratoconus stabilizing procedures like corneal cross-linking (C3R).",
    qualifications: ["MBBS, DNB Ophthalmology", "Fellowship in Cornea and Anterior Segment"],
    experienceYears: 9,
    highlights: [
      "Specialist in lamellar corneal transplant surgeries (DALK & DSEK).",
      "Expert in cross-linking for progressive keratoconus stabilization."
    ],
    order: 6
  }
];

const MOCK_TREATMENTS = [
  {
    _id: "tx-lasik",
    title: "LASIK Eye Surgery",
    slug: "lasik",
    tagline: "Blade-Free Vision Correction",
    coverImage: "/images/femto-lasik.jpg",
    overview: "Get freedom from spectacles and contact lenses with our state-of-the-art blade-free Femto LASIK treatment. Safe, quick, and highly precise.",
    benefits: [
      "Completely blade-free and painless procedure.",
      "Rapid visual recovery within 24 hours.",
      "High precision using computer-guided laser technology.",
      "Permanent correction of nearsightedness, farsightedness, and astigmatism."
    ],
    procedure: "During the Femto LASIK procedure, a femtosecond laser is used to create a thin, precise corneal flap. The surgeon then uses an excimer laser to reshape the underlying corneal tissue. Finally, the flap is repositioned, adhering naturally without stitches.",
    recovery: "Most patients return to work or normal activities within 1 to 2 days. Direct water contact, eye rubbing, and makeup should be avoided for 2 weeks. Prescription eye drops must be used as scheduled.",
    faq: [
      { question: "Is LASIK surgery painful?", answer: "No, numbing eye drops are used before the procedure, making it virtually painless. You may feel a slight pressure sensation for a few seconds." },
      { question: "How long does the procedure take?", answer: "The laser treatment itself takes less than 60 seconds per eye, while the entire process takes about 10 to 15 minutes." }
    ],
    doctors: ["dr-vardhaman-kankariya", "dr-prakash-kankariya"]
  },
  {
    _id: "tx-contoura",
    title: "Contoura Vision",
    slug: "contoura-vision",
    tagline: "Topography-Guided Laser",
    coverImage: "/images/banner_new_images/contoura-vision.jpg",
    overview: "Contoura Vision is the latest FDA-approved topography-guided laser system that maps 22,000 points on your cornea for customized vision correction superior to standard LASIK.",
    benefits: [
      "Super-vision quality, often better than 6/6 (20/20).",
      "Corrects corneal irregularities for enhanced night driving visual comfort.",
      "Reduces glare, halos, and light sensitivity post-surgery."
    ],
    procedure: "Contoura Vision uses a specialized topographer to scan the unique elevation profile of your cornea. The excimer laser is then custom-programmed to smooth out tiny anatomical irregularities, creating an optically perfect surface.",
    recovery: "Visual recovery is extremely fast. Clear vision is typically achieved the next morning, and full structural stabilization occurs within a few weeks.",
    faq: [
      { question: "Is Contoura Vision better than standard LASIK?", answer: "Yes. While standard LASIK only corrects your power prescription, Contoura Vision corrects surface micro-irregularities of the cornea, resulting in sharper vision." }
    ],
    doctors: ["dr-vardhaman-kankariya"]
  },
  {
    _id: "tx-cataract",
    title: "Cataract Surgery",
    slug: "cataract-surgery",
    tagline: "Micro-Incision Cataract Surgery",
    coverImage: "/images/images-4.jpg",
    overview: "Restore clear vision with our advanced Micro-Incision Cataract Surgery (MICS) utilizing premium multifocal, trifocal, and Toric lens implants.",
    benefits: [
      "Sub-2mm micro-incision requiring no stitches, patches, or injections.",
      "Premium lens options to reduce dependency on reading glasses.",
      "Completed in under 10 minutes with rapid visual restoration."
    ],
    procedure: "Using phacoemulsification technology, the cloudy natural lens is gently broken up using ultrasound waves and aspirated. A foldable, premium artificial lens (IOL) is then inserted through the micro-incision, unfolding into place.",
    recovery: "Patients can watch TV and walk immediately. Protect the eye from dust and water using safety glasses for 1 week. Avoid heavy lifting for 10 days.",
    faq: [
      { question: "How long does cataract surgery take?", answer: "The surgery is typically completed in 10 minutes under topical drops (no injection) as an outpatient procedure." }
    ],
    doctors: ["dr-shrutika-kankariya", "dr-prakash-kankariya"]
  },
  {
    _id: "tx-retina",
    title: "Diabetic Retina Care",
    slug: "retina-specialist",
    tagline: "Advanced Vitreoretinal Therapy",
    coverImage: "/images/Diabetic-and-Retina-care.jpg",
    overview: "Comprehensive diagnostic scanning and micro-surgical management for diabetic retinopathy, retinal detachment, macular holes, and age-related macular degeneration.",
    benefits: [
      "Early detection using high-definition OCT scanning.",
      "Pain-free retinal green laser photocoagulation.",
      "Advanced sutureless micro-incision vitrectomy (MIVS)."
    ],
    procedure: "Treatment options include intravitreal injections (anti-VEGF) to reduce swelling, retinal lasers to seal leaking blood vessels, or keyhole vitrectomy surgery to clear blood and repair retinal tears.",
    recovery: "Post-op care depends on the procedure. Vitrectomy patients may need to maintain a specific head position for a few days if a gas bubble is used.",
    faq: [
      { question: "How often should diabetic patients check their eyes?", answer: "Diabetic patients should undergo a comprehensive dilated retinal examination at least once a year." }
    ],
    doctors: ["dr-swapnil-bhalekar"]
  },
  {
    _id: "tx-glaucoma",
    title: "Glaucoma Treatment",
    slug: "glaucoma-treatment",
    tagline: "Preserving Optic Nerve Health",
    coverImage: "/images/glucoma.jpg",
    overview: "Glaucoma is the 'silent thief of sight'. We offer early diagnostics, visual field analysis, intraocular pressure management, and advanced micro-drainage implants.",
    benefits: [
      "Early detection prevents irreversible optic nerve damage.",
      "Custom medical and laser therapies (SLT).",
      "Advanced surgical options for uncontrolled eye pressure."
    ],
    procedure: "We manage pressure using custom eye drops, selective laser trabeculoplasty (SLT) to open fluid drainage, or trabeculectomy surgery to create a new drainage channel.",
    recovery: "Laser treatments require no downtime. Surgical patients require regular pressure monitoring for 2 to 4 weeks post-surgery.",
    faq: [
      { question: "Can glaucoma damage be reversed?", answer: "No, vision lost to glaucoma is permanent. That is why early detection and ongoing pressure control are critical." }
    ],
    doctors: ["dr-nitant-shah"]
  },
  {
    _id: "tx-pediatric",
    title: "Pediatric Eye Care",
    slug: "pediatric-eye-care",
    tagline: "Squint & Childhood Vision Care",
    coverImage: "/images/pediatric.jpg",
    overview: "Specialized diagnostics and pediatric squint, lazy eye (amblyopia), and childhood refractive care delivered in a friendly, stress-free environment.",
    benefits: [
      "Early treatment prevents permanent 'lazy eye' (amblyopia).",
      "Advanced non-surgical squint patching exercises.",
      "Precise pediatric corrective surgery."
    ],
    procedure: "Squint correction surgery adjusts the tension of the eye muscles to align the eyes correctly. It is safe and typically performed under general anesthesia.",
    recovery: "Children recover quickly and can return to school within 5 to 7 days, avoiding swimming or active sports for 3 weeks.",
    faq: [
      { question: "At what age should a child have their first eye test?", answer: "All children should have a basic vision screening by age 3, or earlier if you notice squinting, eye misalignment, or white pupil reflection." }
    ],
    doctors: ["dr-shrutika-kankariya"]
  }
];

const MOCK_TESTIMONIALS = [
  {
    _id: "test-hazare",
    author: "Anna Hazare",
    role: "Renowned Social Activist",
    quote: "I underwent cataract surgery at Asian Eye Hospital. The clinical safety and surgical expertise of the doctors gave me perfect vision. I am grateful for their dedication to patient care.",
    avatar: "/images/Anna-Hazare.jpg",
    isHighlighted: true,
    badgeText: "National Leader"
  },
  {
    _id: "test-pallikaris",
    author: "Prof. Dr. Ioannis Pallikaris",
    role: "Inventor of LASIK Surgery",
    quote: "Dr. Vardhaman Kankariya is an exceptionally talented refractive surgeon. Having trained him directly in Greece, I can vouch that his clinical standards and surgical skills are at par with the best globally.",
    avatar: "/images/Dr-Ioannis-Pallikaris.jpg",
    isHighlighted: true,
    badgeText: "Inventor Endorsement"
  },
  {
    _id: "test-patil",
    author: "Pratibha Patil",
    role: "Former President of India",
    quote: "The care and warmth shown by the entire team at Asian Eye Hospital, combined with their advanced laser infrastructure, is commendable. They are a credit to the medical field in Pune.",
    avatar: "/images/Pratibhatai-Patil.png",
    isHighlighted: false,
    badgeText: "Presidential Visit"
  },
  {
    _id: "test-deepak",
    author: "Deepak Shirke",
    role: "Veteran Actor",
    quote: "Outstanding experience! The doctors cleared all my anxieties about retina laser therapy. The procedure was fast, painless, and highly successful.",
    avatar: "/images/Deepak-Shirke.png",
    isHighlighted: false
  },
  {
    _id: "test-sonalee",
    author: "Sonalee Kulkarni",
    role: "Prominent Marathi Actress",
    quote: "Getting rid of contact lenses was the best decision for my film shoots. The blade-free Contoura Vision procedure at Asian Eye Hospital was absolutely seamless!",
    avatar: "/images/Sonalee-Kulkarni.png",
    isHighlighted: false
  }
];

const MOCK_FAQS = [
  {
    _id: "faq-1",
    question: "Is LASIK eye surgery safe?",
    answer: "Yes, LASIK is one of the most thoroughly researched and safest elective procedures in modern medicine, with an satisfaction rate exceeding 96%. We use FDA-approved blade-free technology to minimize risks.",
    category: "LASIK"
  },
  {
    _id: "faq-2",
    question: "What is the cost of Contoura Vision in Pune?",
    answer: "Topography-guided Contoura Vision cost varies based on clinical specifications and eligibility. We offer zero-cost EMI plans to make premium vision correction accessible for everyone. Call us for a customized estimate.",
    category: "Cost & Insurance"
  },
  {
    _id: "faq-3",
    question: "How long does cataract surgery recovery take?",
    answer: "Most patients see a significant improvement in vision within 24 hours. Full healing and adaptation to premium multifocal lenses typically take 2 to 4 weeks.",
    category: "Cataract"
  },
  {
    _id: "faq-4",
    question: "Do you accept corporate insurance and TPA?",
    answer: "Yes, we are empaneled with major insurance providers, government schemes, and corporate TPAs. Our dedicated insurance desk handles all cashless authorization paperwork.",
    category: "Cost & Insurance"
  }
];

const MOCK_TECH = [
  {
    _id: "tech-1",
    name: "Femtosecond Bladeless Laser System",
    tag: "Refractive Suite",
    image: "/images/femto-lasik.jpg",
    description: "FDA-approved ultra-fast laser system used to create highly precise corneal flaps in under 10 seconds, eliminating the need for mechanical microkeratome blades.",
    order: 1
  },
  {
    _id: "tech-2",
    name: "Contoura Topography-Guided Laser",
    tag: "Refractive Suite",
    image: "/images/banner_new_images/contoura-vision.jpg",
    description: "Advanced mapping software that scans 22,000 unique elevation points on each cornea, allowing the excimer laser to customize correction to your specific anatomy.",
    order: 2
  }
];

const MOCK_BLOGS = [
  {
    _id: "blog-1",
    title: "Contoura Vision vs standard LASIK: What is the Difference?",
    slug: "contoura-vision-vs-lasik",
    mainImage: "/images/banner_new_images/contoura-vision.jpg",
    excerpt: "Understand the structural differences between traditional laser surgery and topography-guided Contoura Vision, and which is right for your eyes.",
    publishedAt: "2026-06-15T12:00:00Z",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "When choosing to undergo laser vision correction, patients are often presented with multiple choices. The two most popular methods today are traditional standard LASIK and the newer topography-guided Contoura Vision." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "What is Standard LASIK?" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Standard LASIK corrects vision based solely on your glasses prescription power. While highly effective, it does not correct microscopic surface irregularities unique to each individual's cornea." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Why Choose Contoura Vision?" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Contoura Vision maps 22,000 elevation points on your cornea. This creates a detailed topographical blueprint of your eye's surface, allowing the laser to treat microscopic ridges and dips for a sharper vision quality." }]
      }
    ]
  },
  {
    _id: "blog-2",
    title: "Modern Cataract Surgery: What to Expect During Recovery",
    slug: "cataract-surgery-recovery-guide",
    mainImage: "https://www.asianeyehospital.com/images/images-4.jpg",
    excerpt: "A comprehensive day-by-day guide on how to protect your eyes, administer drops, and return to normal activities after modern MICS surgery.",
    publishedAt: "2026-06-20T10:00:00Z",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Modern Micro-Incision Cataract Surgery (MICS) has made recovery faster than ever before. With incisions smaller than 2mm, most patients experience improved vision the very next morning." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "First 24 Hours Post-Surgery" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "It is normal to experience mild watering or a gritty sensation. Wear the protective eye shield provided, especially while sleeping, and avoid rubbing your eye." }]
      }
    ]
  }
];

// ─── QUERY WRAPPERS WITH FAILSAFE LOCAL MOCK FALLBACKS ────────────────────

export async function getHomepage() {
  if (isPlaceholder) return MOCK_HOMEPAGE;
  try {
    const res = await client.fetch(`*[_type == "homepage"][0]{
      heroTitle,
      heroSubtitle,
      heroBanners,
      stats
    }`);
    return res || MOCK_HOMEPAGE;
  } catch (e) {
    return MOCK_HOMEPAGE;
  }
}

export async function getDoctors() {
  if (isPlaceholder) return MOCK_DOCTORS;
  try {
    const res = await client.fetch(`*[_type == "doctor"] | order(order asc){
      _id,
      name,
      "slug": slug.current,
      role,
      specialization,
      image,
      bio,
      qualifications,
      experienceYears,
      highlights
    }`);
    return res && res.length > 0 ? res : MOCK_DOCTORS;
  } catch (e) {
    return MOCK_DOCTORS;
  }
}

export async function getDoctorBySlug(slug: string) {
  if (isPlaceholder) {
    return MOCK_DOCTORS.find((d) => d.slug === slug) || null;
  }
  try {
    const res = await client.fetch(
      `*[_type == "doctor" && slug.current == $slug][0]{
        _id,
        name,
        "slug": slug.current,
        role,
        specialization,
        image,
        bio,
        qualifications,
        experienceYears,
        highlights
      }`,
      { slug }
    );
    return res || MOCK_DOCTORS.find((d) => d.slug === slug) || null;
  } catch (e) {
    return MOCK_DOCTORS.find((d) => d.slug === slug) || null;
  }
}

export async function getTreatments() {
  if (isPlaceholder) return MOCK_TREATMENTS;
  try {
    const res = await client.fetch(`*[_type == "treatment"]{
      _id,
      title,
      "slug": slug.current,
      tagline,
      coverImage,
      overview
    }`);
    return res && res.length > 0 ? res : MOCK_TREATMENTS;
  } catch (e) {
    return MOCK_TREATMENTS;
  }
}

export async function getTreatmentBySlug(slug: string) {
  if (isPlaceholder) {
    const tx = MOCK_TREATMENTS.find((t) => t.slug === slug);
    if (!tx) return null;
    return {
      ...tx,
      faq: MOCK_FAQS.filter((f) => f.category === tx.title || tx.title.includes(f.category)),
      doctors: MOCK_DOCTORS.filter((d) => tx.doctors.includes(d.slug))
    };
  }
  try {
    const res = await client.fetch(
      `*[_type == "treatment" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        tagline,
        coverImage,
        overview,
        benefits,
        procedure,
        recovery,
        faq[]->{ question, answer },
        doctors[]->{ name, role, specialization, image, "slug": slug.current }
      }`,
      { slug }
    );
    if (res) return res;
    
    // Fallback search in mock data
    const tx = MOCK_TREATMENTS.find((t) => t.slug === slug);
    if (!tx) return null;
    return {
      ...tx,
      faq: MOCK_FAQS.filter((f) => f.category === tx.title || tx.title.includes(f.category)),
      doctors: MOCK_DOCTORS.filter((d) => tx.doctors.includes(d.slug))
    };
  } catch (e) {
    const tx = MOCK_TREATMENTS.find((t) => t.slug === slug);
    if (!tx) return null;
    return {
      ...tx,
      faq: MOCK_FAQS.filter((f) => f.category === tx.title || tx.title.includes(f.category)),
      doctors: MOCK_DOCTORS.filter((d) => tx.doctors.includes(d.slug))
    };
  }
}

export async function getBlogs() {
  if (isPlaceholder) return MOCK_BLOGS;
  try {
    const res = await client.fetch(`*[_type == "blog"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      mainImage,
      excerpt,
      publishedAt
    }`);
    return res && res.length > 0 ? res : MOCK_BLOGS;
  } catch (e) {
    return MOCK_BLOGS;
  }
}

export async function getBlogBySlug(slug: string) {
  if (isPlaceholder) {
    return MOCK_BLOGS.find((b) => b.slug === slug) || null;
  }
  try {
    const res = await client.fetch(
      `*[_type == "blog" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        mainImage,
        excerpt,
        body,
        publishedAt
      }`,
      { slug }
    );
    return res || MOCK_BLOGS.find((b) => b.slug === slug) || null;
  } catch (e) {
    return MOCK_BLOGS.find((b) => b.slug === slug) || null;
  }
}

export async function getFAQs() {
  if (isPlaceholder) return MOCK_FAQS;
  try {
    const res = await client.fetch(`*[_type == "faq"]{
      _id,
      question,
      answer,
      category
    }`);
    return res && res.length > 0 ? res : MOCK_FAQS;
  } catch (e) {
    return MOCK_FAQS;
  }
}

export async function getTestimonials() {
  if (isPlaceholder) return MOCK_TESTIMONIALS;
  try {
    const res = await client.fetch(`*[_type == "testimonial"]{
      _id,
      author,
      role,
      quote,
      avatar,
      isHighlighted,
      badgeText
    }`);
    return res && res.length > 0 ? res : MOCK_TESTIMONIALS;
  } catch (e) {
    return MOCK_TESTIMONIALS;
  }
}

export async function getTechnology() {
  if (isPlaceholder) return MOCK_TECH;
  try {
    const res = await client.fetch(`*[_type == "tech"] | order(order asc){
      _id,
      name,
      tag,
      image,
      description
    }`);
    return res && res.length > 0 ? res : MOCK_TECH;
  } catch (e) {
    return MOCK_TECH;
  }
}
