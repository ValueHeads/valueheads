<template>
  <div id="team" class="bg-olive-800">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-4xl">
          <h2
            class="text-base font-semibold tracking-wider text-indigo-50 uppercase"
          >
            Meet the team &ndash; the first <span class="">ValueHeads</span>
          </h2>
          <p
            class="text-3xl font-extrabold tracking-tight  text-yellow sm:text-4xl lg:text-5xl"
          >
            Collaboration
            <span class="text-4xl text-white lg:text-5xl">=</span> AWESOMENESS!
          </p>
          <p class="text-xl text-gray-300">
            Collaboration is how this course is being built. Mentors and mentees
            evolving this method over years. Join us and let's create the
            GREATEST entrepreneurship course, together!
          </p>
        </div>

        <div
          class="px-6 py-16 text-left text-white rounded-lg border-2 border-yellow-300  md:px-12 md:py-16 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-20 lg:px-20"
        >
          <TeamPerson
            :person="people[0]"
            class="mb-16 w-full text-center lg:mb-0"
          />

          <div class="xl:col-span-2">
            <p class="mb-4 text-lg font-black leading-relaxed md:text-2xl">
              <span class="text-yellow">Hey! 👋</span><br />
              I'm Amer. Founder of ValueHeads.
            </p>

            <p class="mb-4">
              I'm an entrepreneur and software engineer, building businesses for
              the last 12+ years.
            </p>

            <p class="mb-4">
              More than 2 million users used Tweepi.com to grow their Twitter
              audiences. That's my business since 2009.
            </p>
            <p class="mb-4">
              I've been
              <strong>coaching "Value Entrepreneurship"</strong> and developing
              this course with 5 amazing mentees for the past few years, and the
              outcomes have been incredible!
              <strong class="text-yellow"
                >All have made money or have a <u>tested idea</u> that will soon
                make them money</strong
              >.
            </p>
            <p class="mb-4">
              <strong>This course's techniques are far too powerful</strong> to
              be limited to the realm of one-on-one mentorship. That's why
              <strong class="text-yellow">it's free and open</strong>, in a way
              that can help thousands of aspiring entrepreneurs rather than just
              the few I can personally mentor.
            </p>
          </div>
        </div>

        <client-only>
          <TeamCarousel :people="people.slice(1)" />
        </client-only>

        <!-- <ul
          role="list"
          class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
        >
          <TeamPerson
            v-for="person in people.slice(1)"
            :key="person.name"
            :person="person"
            class="px-6 py-10 text-center rounded-lg xl:px-10 bg-olive-700"
          />
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
const people = [
  {
    name: "Amer Kawar",
    role: "Value Entrepreneurship Mentor, Founder of ValueHeads & Tweepi",
    imageUrl: "/images/amer.jpg",
    twitterUrl: false,
    linkedinUrl: "https://uk.linkedin.com/in/amerkawar",
    websiteUrl: "https://tweepi.com",
    redditUrl: false,
    instagramUrl: false,
    githubUrl: false,
  },
  {
    name: "Veronica Cooper",
    role: "Founder & CEO, StellarNurse.com",
    imageUrl: "/images/veronica.jpg",
    websiteUrl: "https://stellarnurse.com",
    instagramUrl: "https://www.instagram.com/stellarnurse/",
    linkedinUrl: "https://www.linkedin.com/in/vlcoop/",
    fromTo:
      "Nurse to Entrepreneur with 500+ nurses on the waiting list for her upcoming product launch in Jan 2022.",
    quote:
      "Once you see it, you can't unsee it! This course was transformational. It made my transition from bedside nursing to entrepreneurship seem effortless!",
  },
  {
    name: "Dima Kawar",
    role: "Founder & CEO, AlCoupon.com",
    imageUrl: "/images/dima.jpg",
    websiteUrl: "https://alcoupon.com/",
    fromTo:
      "From Social Media Manager to Founder of the largest coupon distribution network in the Middle East.",
    quote:
      "It changed my life, literally. Why don't they teach us this stuff at university?!",
  },
  {
    name: "Aya Sadiq",
    role: "Founder & CEO, Tawkeedat.com",
    imageUrl: "/images/aya.jpg",
    instagramUrl: "https://www.instagram.com/arabicaffirmations/",
    websiteUrl: "https://tawkeedat.com",
    fromTo:
      "From Instagram Influencer to over 3000 users on her waiting list for her upcoming app launch in December 2021,",
    quote:
      "The famous saying goes From Prada to Nada. This brilliant course flipped that for me and made it “From Nada to Prada”! It helped me build Everything from Nothing",
  },
  {
    name: "Laith Kawar",
    role: "Founder & CEO, 9amim.com",
    imageUrl: "/images/laith.jpg",
    websiteUrl: "https://9amim.com",
    linkedinUrl: "https://www.linkedin.com/in/laith-kawar/",
    fromTo:
      "Graphic Designer on a mission to blend typography with outstanding visuals with his recently launched logo designer.",
    quote:
      "This is not just a course. It’s a MasterClass! It helped me gain skills that every modern day entrepreneur must be equipped with.",
  },
  {
    name: "Seb Wichmann",
    role: "Top-tier Learning Consultant",
    imageUrl: "/images/seb.jpg",
    websiteUrl: "https://sebwichmann.com/",
    linkedinUrl: "https://www.linkedin.com/in/sebwichmann/",
    fromTo:
      "We meet on Upwork, and now he's a ValueHead member working on his next big idea.",
    desc: "Seb's work is all about streamlining your learning experience. This course is so powerful because of his superior knowledge!",
  },
];

export default {
  setup() {
    return {
      people,
    };
  },
};
</script>