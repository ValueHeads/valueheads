<template>
  <div class="bg-olive-800">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        >
          <h2
            class="text-base font-semibold tracking-wider text-indigo-200 uppercase"
          >
            Meet the First ValueHeads
          </h2>
          <p
            class="text-3xl font-extrabold tracking-tight  text-yellow sm:text-4xl"
          >
            Collaboration
            <span class="text-4xl text-white">=</span> AWESOMENESS!
          </p>
          <p class="text-xl text-gray-300">
            Collaboration is how this course is being built. Mentors and mentees
            evolving this method over years.
          </p>
        </div>
        <ul
          role="list"
          class="space-y-4  sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
        >
          <li
            v-for="person in people"
            :key="person.name"
            class="px-6 py-10 text-center rounded-lg bg-olive-700 xl:px-10"
          >
            <div class="space-y-6 xl:space-y-8">
              <img
                class="mx-auto w-40 h-40 rounded-full lazyload xl:w-56 xl:h-56"
                :data-src="person.imageUrl"
                :alt="person.name + '. ' + person.role"
                width="400"
                height="400"
              />
              <div class="space-y-2">
                <div class="space-y-1 text-lg font-medium leading-6">
                  <h3 class="text-white">{{ person.name }}</h3>
                  <p class="font-bold leading-tight text-yellow-500">
                    {{ person.role }}
                  </p>
                </div>

                <ul role="list" class="flex justify-center space-x-5">
                  <li>
                    <a
                      :href="person.twitterUrl"
                      class="text-gray-400 hover:text-gray-300"
                    >
                      <span class="sr-only">Twitter</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      :href="person.linkedinUrl"
                      class="text-gray-400 hover:text-gray-300"
                    >
                      <span class="sr-only">LinkedIn</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div v-if="person.desc" class="text-gray-300">
                {{ person.desc }}
              </div>

              <div v-if="person.quote" class="text-gray-300">
                <span class="text-2xl leading-none text-indigo-300"
                  >&ldquo;</span
                >
                {{ person.quote }}
                <span class="text-2xl leading-none text-indigo-300"
                  >&rdquo;</span
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const people = [
  {
    name: "Amer Kawar, VH0",
    role: "Value Entrepreneurship Mentor, Founder of ValueHeads & Tweepi",
    imageUrl: "/images/amer.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
    // desc: "Amer started startup mentoring back in 2016. An entrepreneur since age 14, he's a strong believer in open-sourcing information and code. Collaboration always leads to innovation!",
    quote:
      "This course is my way of giving back. The processes in this course are too powerful to stay in the realm of one-on-one mentorship. I just had to make it accessible and open-source. Welcome to ValueHeads!",
  },
  {
    name: "Veronica Cooper, VH2",
    role: "Nurse → Founder of StellarNurse",
    imageUrl: "/images/veronica.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
    quote:
      "Once you see it, you can't unsee it! This course was transformational. It made the move from bedside nursing to entrepreneurship FUN, yes fun!",
  },
  {
    name: "Dima Kawar, VH1",
    role: "Social Media Manager → Founder of AlCoupon",
    imageUrl: "/images/dima.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
    quote:
      "It changed my life, literally. Why don't they teach us this stuff at university?!",
  },
  {
    name: "Seb Wichmann, VH5",
    role: "Top-tier Learning & Development Consultant",
    imageUrl: "/images/seb.png",
    twitterUrl: "#",
    linkedinUrl: "#",
    desc: "Seb's work is all about streamlining your learning experience. This course is so powerful because of his superior knowledge!",
  },
  {
    name: "Aya Sadiq, VH4",
    role: "Instagram Influencer → Founder of Tawkeedat",
    imageUrl: "/images/aya.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
    quote:
      "The famous saying goes From Prada to Nada. This brilliant course flipped that for me and made it “From Nada to Prada”! It helped me build Everything from Nothing",
  },
  {
    name: "Laith Kawar, VH3",
    role: "Graphic Design → Founder of 9amim",
    imageUrl: "/images/laith.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
    quote:
      "This is not just a course. It’s a MasterClass! It helped me gain skills that every modern day entrepreneur must be equipped with.",
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