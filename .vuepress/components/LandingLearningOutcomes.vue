<template>
  <div id="entrepreneurship-course" class="py-16 bg-gray-50 sm:py-20 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="px-4 mx-auto max-w-md text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-4xl"
      >
        <h2
          class="text-base font-semibold tracking-wider text-indigo-600 uppercase"
        >
          The 10 Week Ultimate Entrepreneurship Course
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Follow the Value! Build your own business with
          <span class="text-indigo-400">Step-by-step Guidance</span>
        </p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          These are ACTIONABLE steps to starting any business, with or without
          an idea to start. The process is
          <strong>designed to lower your risk at each step</strong>.
        </p>
      </div>

      <img
        class="p-4 mx-auto mt-12 w-full max-w-md h-auto bg-yellow-50 rounded-sm border shadow-lg transform rotate-1 lazyload border-olive-400"
        data-src="/images/illustration-low-risk-equation.png"
        alt="Entrepreneurship Course in Following the Value. This is the equation summary."
        width="786" height="355"
      />

      <div class="mx-auto max-w-3xl divide-y-2 divide-gray-200">
        <dl class="mt-10 space-y-6 divide-y divide-gray-200">
          <Disclosure
            as="div"
            v-for="faq in weeks"
            :key="faq.title"
            class="pt-6"
            v-slot="{ open }"
            @click.once="expandedTopic(faq.title)"
          >
            <dt class="text-lg">
              <DisclosureButton
                class="flex justify-between items-start w-full text-left text-gray-400"
              >
                <span class="font-medium text-gray-900">
                  {{ faq.title }}
                </span>
                <span class="flex items-center ml-6 h-7">
                  <ChevronDownIcon
                    :class="[
                      open ? '-rotate-180' : 'rotate-0',
                      'h-6 w-6 transform',
                    ]"
                    aria-hidden="true"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="pr-12 mt-5">
              <p class="text-base text-gray-700">
                <ul>
                  <li v-for="outcome in faq.outcomes" :key="outcome" class="flex flex-row items-start mt-5">
                    <span class="inline-block w-11 text-2xl">{{ runes.substr(outcome, 0, 1) }}</span>
                    <span class="block w-full" v-html="runes.substr(outcome, 1)" />
                    
                  </li>
                </ul>
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>

      <div class="pt-14 mx-auto max-w-3xl">
        Want to see our full course plan? 
        <br /> 
        Check out the
        <a href="https://mm.tt/2048938104?t=PptH4jTe3l" target="_blank" rel="noopener">mega course mind map</a> and this 
        <a href="https://docs.google.com/document/d/1LALvB5Hb8N1H1yO3gjj3S8ycFDT_PO0exiw3XpiFWnk/edit?usp=sharing" target="_blank" rel="noopener">Google Doc</a> of the chapters and sections.
      </div>

      <div class="mx-auto mt-12 sm:mt-16 md:max-w-sm">
        <a
          href="#cta"
          v-scroll-to="'#cta'"
          class="flex justify-center items-center px-8 py-3 text-base font-bold text-white rounded-md border border-transparent bg-indigo hover:bg-yellow-500 hover:text-gray-900 md:py-4 md:text-lg md:px-10"
        >
          Make it happen - support us 👍
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const runes = require("runes");
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";

const weeks = [
  {
    title: "Week 1 — Your Value Entrepreneurship Journey Starts Here!",
    outcomes: [
      "🍀 Maximize your luck by knowing exactly where to look for success.",
      "🙌 Become a proud ValueHead who knows our proven 'ValueHeads Formula' inside out. (hint: it’s Value Entrepreneurship)",
      "🧘🏻 Fully step into the ValueHeads mindset, helping you move away from a 9-5 job and into building and running your own amazing online business.",
      "1️⃣ Find awesome business ideas by knowing what they look like and how to search for them.",
      "🧠 Reprogram your brain by following our hand-picked list of awesome early-stage startup social media accounts. This way, when you’re pooping, you can also be learning! 💩",
    ],
  },
  {
    title:
      "Week 2 — Find AWESOME Business Ideas using Search & Social Media Research",
    outcomes: [
      "💡Find unlimited business ideas by focusing on customer 'pain points'. (your 'Evergreen Goldmine' of ideas)",
      "🔍 Become an idea-generating ninja using Google, Facebook, Twitter, and Reddit to research your ideal customers and competitors.",
      "📊 Gain insights about how much money a certain niche and market can generate by locating the right competitors.",
      "✨ More than 5 AWESOME tricks to come up with life-changing ideas using free (or trial) tools.",
    ],
  },
  {
    title: "Week 3 — Find Marketing Gaps Your Competitors missed",
    outcomes: [
      "🌟 Find unique marketing gaps the competitors missed that you can use to enter a market. That’s a SUPERPOWER you can’t miss out on learning!",
      "📊 Gain insights about any market on Earth, by analyzing the traffic of top competing businesses.",
      "🔍 Be the 'Sherlock Holmes' of the internet, by discovering how much money your competitors make using free tools. (YES, we can do that, :D)",
    ],
  },
  {
    title: "Week 4 — Pick your BEST Business Idea",
    outcomes: [
      "🤓 Innovate like Einstein on every level: Value, Business Models & Technology.",
      "🤔 Select the business idea that fits YOU -- that’s what we call the 'Founder/Market-Fit'.",
      "💵 Size up the opportunity, is it worth it? You don’t want to end up chasing an idea that will never make you money!",
      "🔑 Hold the key to unlocking the door of opportunity by knowing that you have a cheap entry point into the market. (that is where most entrepreneurs get stuck) ",
      "😎 Pick your GRAND business idea that nobody thought you would find, based on clear criteria, sound strategies and best-practice data insights.",
    ],
  },
  {
    title:
      "Week 5 — Talk to 3-5 potential customers before you spend a dollar!",
    outcomes: [
      "📞 Confirm your potential customers do care about your proposed value proposition - this is mega FUN, as you get to talk to people - YAY, finally)",
      "💡 Extract ENDLESS ideas from talking to your potential customers.",
      "🌟 Come up with YOUR irresistible value proposition (VP) by fully empathizing with your ideal customers.",
      "💎 Turn EVERYTHING till this point into a crystal-clear business idea that simply works - we’ll use the Lean Business Model Canvas as aid.",
    ],
  },
  {
    title: "Week 6 — Prepare your Minimum Viable Product (Specs only for now)",
    outcomes: [
      "💄 Transform your GOOD idea into your viable MAP (Minimal AWESOME Product) specs.",
      "⏱️ Plan the simplest and most effective experiment (doing this will save you an insane amount of time)",
      "📝 Complete your ABSOLUTE minimum set of features to deliver immense VALUE to your future customers. (we call this your Minimal AWESOME Product - MAP)",
      "✨ Tricks for FAST branding, from picking a business name to designing a $10 logo in 10 minutes.",
      "🎯 Gain clarity by choosing a HIGH-VALUE “Success Metric” for your upcoming market-experiment.",
    ],
  },
  {
    title: "Week 7 — Test your idea using just a landing page & DIY software",
    outcomes: [
      "🎨 Create a kick-ass landing page to bring your AWESOME idea to life. (you'll use the specs from week 6 to breeze through this)",
      "🧐 Run, monitor and improve your experiment like a pro!",
      "💑 Run your 'Smoke-Test' experiment and confirm that your IDEAL customers is ready to pay you. (that’s when things get really exciting!)",
      "💲 Start making money NOW through 1-on-1 work - if possible. (YES - it can happen this fast)",
    ],
  },
  {
    title: "Week 8 — Develop your Strategies: Growth, Content and Social Media",
    outcomes: [
      "❤️ Develop strategies that’ll give you absolute clarity for how to attract your IDEAL customers.",
      "🔍 Develop the most compelling search strategy that’ll show your business when people search. (you'll learn how it's done the right, 'value-based way, ready for 2021)",
      "👍 Come up with a strong social media strategy based on posts that are jam-packed with VALUE. (that’s how you beat the competition on Social Media, every time!)",
      "♾️ Come up with “Viral Loops” that leverage your users’ social media presence. (you'll give them superior value, they'll give you a shout out - fair deal)",
      "🌟 Bring it all together into a Holistic VALUE CONTENT Growth Strategy. This skill by itself is a SUPERPOWER!",
    ],
  },
  {
    title: "Week 9 — Build your MVP: Attract a co-founder or Hire?",
    outcomes: [
      "🦵 Attract a cofounder, do it solo, or hire. The amazing work you’ve done in the past 8 weeks can convince ANYONE to work with you. You have proof of money!",
      "🧑🏿‍💻 Come up with a cheap and minimal tech stack to build your product. Do it by connecting with a technical advisor you already know or using an online service.",
      "👍 Lower your risk when hiring a developer, do it with a “paid audition” and do not commit until you find the correct fit, punctuality and quality of work.",
      "❤️ Pre-launch your AWESOME product (while you're building it - YES, that's right)",
      "🗒 Create value through articles and social media posts. (this will provide you with incredible insights into your market of choice)",
      "💲 Pre-sell and make money! We'll walk with you hand-in-hand and show you how it's done.",
    ],
  },
  {
    title: "Week 10 — Launch! Then Learn from Customers, and Refine",
    outcomes: [
      "🚀 Ensure your product launches like a SpaceX rocket (smoothly and upwards into the sky, using a step-by-step technical checklist).",
      "➡️ Navigate the maze of success like a seasoned entrepreneur, knowing EXACTLY when to stop and pivot, to try another idea, or when to keep going.",
      "🧐 Quickly diagnose and FIX any potential challenges that might come your way, stopping users from buying your product. (it's OKAY, it does happen)",
      "📈 Use your users' feedback to learn and improve. (that's what entrepreneurship is all about, and you'll also love it)",
      "💯 Celebrate accomplishing your ULTIMATE GOAL (you did it!) - You now own your personal BOOTSTRAPPED, SCALABLE, ONLINE BUSINESS. (holy macaroni - WOW. Enjoy your life & spread the LOVE)",
    ],
  },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  setup() {
    return {
      weeks,
      runes,
    };
  },
  methods: {
    expandedTopic(title) {
      window.gtag("event", "prelaunch_toc_expand_accordion", { title });
    },
  },
};
</script>