---
layout: page
title: Contact
subtitle: Get in Touch
permalink: /contact/
description: "Contact Dr. Yinoussa Adagolodjo for research collaborations, student opportunities, and academic inquiries."
---

<script>
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('contact-page');
});
</script>

<!-- Contact Page Modern Layout -->
<div class="columns is-multiline" style="margin-bottom:2.5rem;">
  <!-- Contact Info -->
  <div class="column is-5">
    <div class="card" style="height:100%;">
      <div class="card-content">
        <h2 class="title is-4">Contact Information</h2>
        <p><strong>Academic Office</strong><br>
        University of Lille<br>
        Department of Computer Science<br>
        DEFROST Team<br>
        CRIStAL UMR 9189<br>
        Bâtiment Polytech<br>
        59655 Villeneuve d'Ascq, France</p>
        <hr>
        <p><strong>Contact</strong><br>
        <span>For all inquiries, please use the contact form below or connect via social/academic profiles.</span></p>
        <hr>
        <p><strong>Office Hours</strong><br>
        Monday: 8:00 - 18:00<br>
        Tuesday: 8:00 - 18:00<br>
        Wednesday: 8:00 - 18:00<br>
        Thursday: 8:00 - 18:00<br>
        Friday: 8:00 - 18:00<br>
        Or by appointment</p>
        <hr>
        <p><strong>Social & Academic Profiles</strong><br>
          <a href="https://scholar.google.com/citations?hl=fr&user=ZBdWJ9EAAAAJ" target="_blank" rel="noopener">Google Scholar</a> ·
          <a href="https://www.researchgate.net/profile/Yinoussa-Adagolodjo?ev=hdr_xprf" target="_blank" rel="noopener">ResearchGate</a> ·
          <a href="https://www.linkedin.com/in/yinoussa-adagolodjo" target="_blank" rel="noopener">LinkedIn</a> ·
          <a href="https://hal.science/search/index?q=Adagolodjo" target="_blank" rel="noopener">HAL Science</a>
        </p>
      </div>
    </div>
  </div>
  <!-- Opportunities & Collaboration -->
  <div class="column is-7">
    <div class="card" style="height:100%;">
      <div class="card-content">
        <h2 class="title is-4">Opportunities & Collaboration</h2>
        <p>I'm always interested in discussing potential research collaborations and welcoming motivated students at all levels.</p>
        <ul>
          <li><strong>Research Collaboration:</strong> Medical robotics, AR in healthcare, soft robotics, simulation, guidance systems.</li>
          <li><strong>PhD & Master’s Projects:</strong> Robotics, simulation, computer vision, haptics, medical image processing.</li>
          <li><strong>Internships & Undergraduate Research:</strong> Summer/semester projects, programming, literature review.</li>
        </ul>
        <p style="margin-top:1rem;"><strong>Current Openings:</strong> <br>
        <span>PhD position (COSSEROOTS project): Soft robots, simulation, medical robotics.<br>
        <em>Rolling applications</em></span></p>
      </div>
    </div>
  </div>
</div>

<!-- Contact Form Section -->
<div class="card" style="margin-bottom:2rem;">
  <div class="card-content">
    <h2 class="title is-5">Contact Form</h2>
    <!--
      FORMSPREE SETUP (one-time, free):
      1. Go to https://formspree.io and sign up / log in
      2. Create a new form → copy your form ID (e.g. "xpwzvgkr")
      3. Replace VOTRE_ID_FORMSPREE below with that ID
      Without this step the form will redirect to the Formspree website.
    -->
    <form action="https://formspree.io/f/VOTRE_ID_FORMSPREE" method="POST">
      <!-- honeypot anti-spam -->
      <input type="text" name="_gotcha" style="display:none">
      <!-- redirect after success -->
      <input type="hidden" name="_next" value="{{ site.url }}/contact/?sent=1">

      <div class="field">
        <label class="label" for="contact-name">Name</label>
        <div class="control">
          <input class="input" id="contact-name" type="text" name="name" placeholder="Your full name" required>
        </div>
      </div>
      <div class="field">
        <label class="label" for="contact-email">Email</label>
        <div class="control">
          <input class="input" id="contact-email" type="email" name="email" placeholder="your@email.com" required>
        </div>
      </div>
      <div class="field">
        <label class="label" for="contact-subject">Subject</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select id="contact-subject" name="subject">
              <option value="Research collaboration">Research collaboration</option>
              <option value="PhD / Postdoc application">PhD / Postdoc application</option>
              <option value="Student internship">Student internship</option>
              <option value="Industry partnership">Industry partnership</option>
              <option value="General inquiry">General inquiry</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label" for="contact-message">Message</label>
        <div class="control">
          <textarea class="textarea" id="contact-message" name="message" rows="6" placeholder="Describe your inquiry, collaboration idea, or question…" required></textarea>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary" type="submit">
            <span class="icon"><i class="fas fa-paper-plane"></i></span>
            <span>Send Message</span>
          </button>
        </div>
      </div>
    </form>
    <p style="font-size:0.88rem; color:#888; margin-top:0.75rem;">
      <i class="fas fa-lock" style="color:#48AAAD;margin-right:0.3rem;"></i>
      Your email address will not be displayed or shared. Messages are sent directly and securely.
    </p>
    <!-- Success banner (shown after redirect with ?sent=1) -->
    <div id="form-success" style="display:none;" class="notification is-success is-light mt-4">
      <i class="fas fa-check-circle"></i> Thank you! Your message has been sent. I’ll reply within 24–48 hours.
    </div>
    <script>
      if (window.location.search.includes(‘sent=1’)) {
        document.getElementById(‘form-success’).style.display = ‘block’;
      }
    </script>
  </div>
</div>

<!-- Collaboration Areas as cards -->
<div class="columns is-multiline" style="margin-bottom:2rem;">
  <div class="column is-4">
    <div class="card" style="height:100%;">
      <div class="card-content">
        <h3 class="title is-5">Academic Institutions</h3>
        <ul>
          <li>Joint research projects</li>
          <li>Student exchange programs</li>
          <li>Conference organization</li>
          <li>Workshop development</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="column is-4">
    <div class="card" style="height:100%;">
      <div class="card-content">
        <h3 class="title is-5">Industry Partners</h3>
        <ul>
          <li>Technology transfer</li>
          <li>Commercial applications</li>
          <li>Patent development</li>
          <li>Product prototyping</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="column is-4">
    <div class="card" style="height:100%;">
      <div class="card-content">
        <h3 class="title is-5">Healthcare Organizations</h3>
        <ul>
          <li>Clinical validation studies</li>
          <li>Medical device development</li>
          <li>Surgical workflow optimization</li>
          <li>Training program development</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Get Started Section -->
<div class="card" style="margin-bottom:2rem;">
  <div class="card-content">
    <h2 class="title is-5">Get Started</h2>
    <p>Please feel free to reach out with your research interests and background. I'm particularly interested in:</p>
    <ol>
      <li><strong>Research Proposals:</strong> Share your ideas for potential collaborations</li>
      <li><strong>Student Applications:</strong> Include your CV, research interests, and timeline</li>
      <li><strong>Industry Partnerships:</strong> Describe your organization's needs and goals</li>
      <li><strong>General Inquiries:</strong> Any questions about my research or teaching</li>
    </ol>
    <p>I typically respond to emails within 24-48 hours during business days.</p>
  </div>
</div>

<p class="has-text-centered" style="font-style:italic; color:#218c74;">Looking forward to hearing from you and exploring potential opportunities for collaboration!</p> 