# Website Architecture Reorganization Suggestions

## **Option 1: Research-Centric Organization**

This structure prioritizes your research identity and makes it easier for visitors to understand your work:

```
├── Home (Brief intro + latest highlights)
├── About
│   ├── Biography
│   ├── Research Interests
│   └── CV/Resume
├── Research
│   ├── Overview & Philosophy
│   ├── Current Projects
│   ├── Publications
│   │   ├── By Year
│   │   ├── By Topic
│   │   └── Selected/Featured
│   ├── Software & Tools
│   └── Collaborations
├── Teaching
│   ├── Current Courses
│   ├── Past Courses
│   └── Student Resources
├── News & Updates
└── Contact
```

## **Option 2: Activity-Based Organization** ⭐ SELECTED

This groups content by what you actually do, making it intuitive for different audiences:

```
├── Home
├── Research
│   ├── Active Projects
│   ├── Publications & Papers
│   ├── Software & Datasets
│   └── Research Group
├── Teaching & Mentoring
│   ├── Courses
│   ├── Student Projects
│   └── Supervision
├── Professional
│   ├── About Me
│   ├── CV & Experience
│   ├── Service & Reviews
│   └── Talks & Presentations
├── Resources
│   ├── Code & Tools
│   ├── Datasets
│   └── Tutorials
└── Contact & News
```

## **Option 3: Audience-Focused Organization**

This structure considers who is visiting your site and what they need:

```
├── Home (with clear audience paths)
├── For Researchers
│   ├── Publications
│   ├── Open Source Projects
│   ├── Datasets & Tools
│   └── Collaboration Opportunities
├── For Students
│   ├── Current Courses
│   ├── Research Opportunities
│   ├── Resources & Tutorials
│   └── Thesis Topics
├── For Industry
│   ├── Consulting & Partnerships
│   ├── Technology Transfer
│   └── Applied Research
├── About
│   ├── Biography
│   ├── Research Vision
│   └── CV
└── News & Contact
```

## **Option 4: Portfolio-Style Organization**

This modern approach treats your site like a professional portfolio:

```
├── Home (showcase + quick navigation)
├── Work
│   ├── Research Projects (with visual portfolios)
│   ├── Publications (grouped by impact/topic)
│   ├── Software & Tools
│   └── Case Studies
├── Expertise
│   ├── Research Areas
│   ├── Technical Skills
│   └── Methodologies
├── Teaching
│   ├── Course Portfolio
│   └── Educational Philosophy
├── About
└── Connect (contact + social + news)
```

## **Specific Improvements Recommended:**

### **1. Reduce Navigation Complexity**
Current navigation has too many dropdown levels. Flatten it to 2 levels maximum.

### **2. Merge Similar Content**
- Combine "News" into the homepage or a dedicated updates section
- Merge CV content with About page
- Consolidate research overview with main research page

### **3. Improve Content Discoverability**
- Add a search function
- Create topic-based tags for publications
- Add "Related Work" sections between pages

### **4. Better Content Hierarchy**
```yaml
# Suggested _config.yml collections update
collections:
  projects:          # Instead of mixing with research
    output: true
    permalink: /work/:name/
  publications:      # Separate from general research
    output: true
    permalink: /publications/:year/:title/
  courses:           # More specific than teaching
    output: true
    permalink: /teaching/:name/
```

### **5. Add Missing Sections**
- Software/Tools showcase
- Media/Press coverage
- Student opportunities
- Resource downloads

## Implementation Plan

1. ✅ Create this suggestions document
2. ⏳ Update _config.yml with new collections structure
3. ⏳ Restructure navigation according to Option 2
4. ⏳ Reorganize content directories
5. ⏳ Update layouts for new structure
6. ⏳ Create missing content sections

