<template>
  <div class="py-16 bg-gray-50 sm:py-20 lg:py-24">
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
          <span class="text-indigo-400">Step-by-step Guidance!</span>
        </p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          These are ACTIONABLE steps to starting any business, with or without
          an idea to start. The process is
          <strong>designed to lower your risk at each step</strong>.
        </p>
      </div>

      <img
        class="p-4 mx-auto mt-12 w-full max-w-md bg-yellow-50 rounded-sm border shadow-lg transform rotate-1 lazyload border-olive-400"
        data-src="/images/illustration-low-risk-equation.png"
        alt=""
      />

      <div class="mx-auto max-w-3xl divide-y-2 divide-gray-200">
        <dl class="mt-10 space-y-6 divide-y divide-gray-200">
          <Disclosure
            as="div"
            v-for="faq in weeks"
            :key="faq.title"
            class="pt-6"
            v-slot="{ open }"
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
                  <li v-for="outcome in faq.outcomes" :key="outcome" class="flex flex-row items-center mt-5">
                    <span class="inline-block w-11 text-2xl">{{ runes.substr(outcome, 0, 1) }}</span>
                    <span class="block w-full" v-html="runes.substr(outcome, 1)" />
                    
                  </li>
                </ul>
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
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
      "🍀 How to maximize your luck by looking in the right places? ",
      "😌 How to get the most out of this course?",
      "🙌 The ValueHeads Formula to Success - the path of least risk! (hint, it’s Value Entrepreneurship)",
      "🧘🏻 The Mindset to take you from a 9-5 job to running your own online business.",
      "1️⃣ How can you pick topics to start your search for business ideas? If you already have an idea, we’ll use it as the starting point.",
      "🧠 Reprogram your brain: We will point out a list of awesome early-stage startup social media accounts to follow. This way, when you’re pooping, you can also be learning! 💩",
    ],
  },
  {
    title:
      "Week 2 — Find AWESOME Business Ideas using Search & Social Media Research",
    outcomes: [
      "💡 Find business ideas by focusing on customer “pain points”. An evergreen goldmine of ideas!",
      "🔍 Become an idea generating ninja using Google, Facebook, Twitter, and Reddit to research customers and competitors!",
      "📊 Gain insights about how much money a certain niche/market can make by locating competitors.",
      "✨ More than 5 different AWESOME tricks to come up with ideas using free/trial tools.",
    ],
  },
  {
    title: "Week 3 — Find Marketing Gaps Your Competitors missed",
    outcomes: [
      "🌟 Find marketing gaps the competitors missed that you can use to enter a market. That’s a SUPERPOWER you can’t miss out on learning!",
      "📊 Gain insights about any market by analyzing the traffic and businesses of its top competing businesses.",
      "💵 Estimate how much money competitors make using free tools. (YES, we can do that! :D)",
    ],
  },
  {
    title: "Week 4 — Pick your BEST Business Idea",
    outcomes: [
      "🤯 Innovation techniques that will make you feel like Einstein. Innovate on all levels: Value, Business Models and Technology. ",
      "🤔 Decide if the business idea is a good fit for you! That’s what we call Founder/Market Fit.",
      "💵 Estimate the size of the opportunity for you, is it worth it? You don’t want to end up chasing an idea that will never make money!",
      "🚪 Judge if you have a cheap entry point to that market. ",
      "😎 Pick your best Business Idea based on a clear criteria that revolves around you!",
    ],
  },
  {
    title:
      "Week 5 — Talk to 3-5 potential customers before you spend a dollar!",
    outcomes: [
      "📞 Confirm potential customers do care about your value proposition. Talk to 3-5.",
      "💡 Extract more ideas from these talking to potential customers. Refine your initial idea.",
      "🌟 Come up with an irresistible value proposition by empathizing with your customers.",
      "💎 Turn it all into a Crystal CLEAR Business Idea. We’ll use the Lean Business Model Canvas.",
    ],
  },
  {
    title: "Week 6 — Prepare your Minimum Viable Product (Specs only for now)",
    outcomes: [
      "⏱️ Minimal Specs can save you an insane amount of time by focusing on what’s important.",
      "📝 Come up with your absolute minimum set of features you need to deliver VALUE to customers.",
      "✨ Tricks for fast branding, from picking a business name to designing a $10 logo in 10 minutes.",
      "🎯 Have a clear Success Metric for your upcoming test. What to measure and how to assess results? ",
    ],
  },
  {
    title: "Week 7 — Test your idea using just a landing page & DIY software",
    outcomes: [
      "🎨 Create a kick-ass landing page for your idea. Use the specs from Week 6 to breeze through it.",
      "🧐 Run and monitor your test like a pro. ",
      "💑 Confirm customers are willing to pay you by showing your page to 100 potential users out in the wild. That’s our “smoke test”.",
      "💲 Start making money now (if possible). Through 1-on-1 work, until you build your awesome product. We’ll show you exactly how we do it.",
    ],
  },
  {
    title: "Week 8 — Develop your Strategies: Growth, Content and Social Media",
    outcomes: [
      "❤️ Develop strategies that’ll give you absolute clarity for how to attract customers.",
      "🔍 Develop a Search strategy that’ll get you showing when people search. We’ll do it the way you should build websites in 2021, by providing VALUE. Not the outdated “pump out random articles” advice!",
      "👍 Develop a social media strategy that revolves around valuable posts. That’s how you beat the competition on Social Media, every time! ",
      "♾️ Come up with Viral Loops that leverage your users’ social media accounts. You give them value, they give you a shout out. Fair deal!",
      "🌟 Bring it all together into a Holistic VALUE CONTENT Growth Strategy. This skill by itself is a SUPERPOWER!",
    ],
  },
  {
    title: "Week 9 — Build your MVP: Attract a co-founder or Hire?",
    outcomes: [
      "🦵 Attract a cofounder, do it solo, or hire? The amazing work you’ve done in the past 8 weeks can convince ANYONE to work with you. You have proof of money!",
      "🧑🏿‍💻 Come up with a cheap and minimal tech stack to build your product. Do it by connecting with a technical advisor you already know or using an online service.",
      "👇 Lower your risk if hiring a developer, do it with a “paid audition” and do not commit until you find the correct fit, punctuality and quality of work.",
      "❤️ While you build, you pre-launch. Start creating and giving value in the form of articles and social media posts. This gives you amazing insights into your market of choice.",
      "💲 Pre-sell and make money, if you can! We’ll discuss examples of both scenarios. ",
    ],
  },
  {
    title: "Week 10 — Launch! Then Learn from Customers, and Refine",
    outcomes: [
      "🚀 Make sure your product launch goes smoothly by doing a technical checklist before announcing it.",
      "🛑 Know when to stop and pivot or try another idea.",
      "🧐 Diagnose any issues stopping users from buying your product and paying you. Fix them and keep trying.",
      "📈 Learn fromrunes users, and keep improving.",
      "💯 ULTIMATE GOAL Achieved: You Own your Bootstrapped, Scalable Online Business! Keep growing and enjoy your new life!",
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
};
</script>