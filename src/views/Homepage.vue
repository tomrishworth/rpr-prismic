<template>
  <div class="wrapper">
    <nav id="top"
         class="navbar navbar-expand-lg header">
      <div class="container container-md">
        <div class="d-lg-flex align-items-center w-100">
          <div class="d-flex">
            <div class="logo">
              <img width="250"
                   src="../assets/images/logo.svg" />
            </div>
            <div class="ml-auto d-lg-none">
              <button class="navbar-toggler collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#main-nav"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"></button>
            </div>
          </div>
          <div id="main-nav"
               class="collapse navbar-collapse">
            <nav class="nav ml-sm-auto">
              <a data-scroll
                 class="nav-link"
                 href="#about">About</a>
              <a data-scroll
                 class="nav-link"
                 href="#services">Services</a>
              <a data-scroll
                 class="nav-link"
                 href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </nav>

    <div id="intro"
         class="section intro">
      <div class="intro-content container container-md">
        <div class="row justify-content-center">
          <div class="col-lg-10"
               data-aos="fade-up"
               data-aos-duration="2000">
            <prismic-rich-text class="text-white text-center text-xl mb-3"
                               :field="fields.heroText" />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-end">
        <a data-scroll
           href="#about"
           class="down-arrow">
          <img width="40px"
               src="../assets/images/arrow.svg" />
        </a>
      </div>
    </div>

    <div id="about"
         class="section pt-5 slant-top slant-bottom">
      <div class="container container-md position-relative"
           data-aos="fade-up"
           data-aos-duration="2000">
        <prismic-rich-text class="mb-3 border-alt"
                           :field="fields.aboutTitle" />
        <div class="row">
          <div class="col-12  mb-3">
            <prismic-rich-text class="text-md"
                               :field="fields.aboutIntro" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <prismic-rich-text :field="fields.aboutLeftColumn" />
          </div>
          <div class="col-lg-6">
            <prismic-rich-text :field="fields.aboutRightColumn" />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <a data-scroll
           href="#services"
           class="down-arrow">
          <img width="40px"
               src="../assets/images/arrow.svg" />
        </a>
      </div>
    </div>

    <div id="services"
         class="section section-services">
      <div class="container container-md"
           data-aos="fade-up"
           data-aos-duration="2000">
        <prismic-rich-text class="mb-3 border-alt text-white"
                           :field="fields.servicesTitle" />
        <div class="row">
          <div class="col-md-6">
            <prismic-rich-text :field="fields.servicesLeftColumn" />
          </div>
          <div class="col-md-6">
            <prismic-rich-text :field="fields.servicesRightColumn" />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <a data-scroll
           href="#contact"
           class="down-arrow">
          <img width="40px"
               src="../assets/images/arrow.svg" />
        </a>
      </div>
    </div>

    <div id="contact"
         class="section slant-top">
      <div class="container container-md"
           data-aos="fade-up"
           data-aos-duration="2000">
        <h2 class="mb-3 pb-3 border-bottom border-alt text-primary">Contact</h2>
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <div class="text-xs text-uppercase text-muted mb-1">Phone</div>
              <div>Mobile: {{fields.contactMobileNumber}}</div>
              <div>Office: {{fields.contactOfficeNumber}}</div>
            </div>
            <div class="mb-2">
              <div class="text-xs text-uppercase text-muted mb-1">Email</div> <a class="text-body"
                 :href="'mailto:' + fields.contactEmail">{{fields.contactEmail}}</a>
            </div>

          </div>
          <div class="col-lg-6">
            <div>
              <div class="text-xs text-uppercase text-muted mb-1">Mailing Address</div>
            </div>
            <prismic-rich-text :field="fields.contactMailingAddress" />
          </div>

        </div>
      </div>
    </div>

    <footer class="section">
      <div class="container container-md">
        <div class="border-top pt-3 d-sm-flex align-content-center justify-content-between">
          <div class="text-muted text-xs">&copy; 2018 - RPR PACIFIC LTD</div>
          <div class="mt-4 mt-sm-0">
            <a class="text-uppercase text-sm"
               data-scroll
               href="#intro">
              Back to top
              <img width="40px"
                   class="ml-2 mr-3"
                   style="transform: rotate(180deg);"
                   src="../assets/images/arrow.svg" />
            </a>
          </div>
        </div>

      </div>

    </footer>
  </div>
</template>

<script>
export default {
  name: "Page",
  data() {
    return {
      documentId: "",
      fields: {
        heroText: null,
        aboutTitle: null,
        aboutIntro: null,
        aboutLeftColumn: null,
        aboutRightColumn: null,
        servicesTitle: null,
        servicesLeftColumn: null,
        servicesRightColumn: null,
        contactMobileNumber: null,
        contactOfficeNumber: null,
        contactEmail: null,
        contactMailingAddress: null
      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getByUID("homepage", "homepage").then(document => {
        if (document) {
          this.documentId = document.id;
          this.fields.heroText = document.data.hero_text;
          this.fields.aboutTitle = document.data.about_title;
          this.fields.aboutIntro = document.data.about_intro;
          this.fields.aboutLeftColumn = document.data.about_left_column;
          this.fields.aboutRightColumn = document.data.about_right_column;
          this.fields.servicesTitle = document.data.services_title;
          this.fields.servicesLeftColumn = document.data.services_left_column;
          this.fields.servicesRightColumn = document.data.services_right_column;
          this.fields.contactMobileNumber = document.data.mobile_number;
          this.fields.contactOfficeNumber = document.data.office_number;
          this.fields.contactEmail = document.data.email;
          this.fields.contactMailingAddress = document.data.mailing_address;
        } else {
          this.$router.push({ name: "not-found" });
        }
      });
    }
  },
  created() {
    this.getContent();
  },
  mounted() {}
};
</script>
