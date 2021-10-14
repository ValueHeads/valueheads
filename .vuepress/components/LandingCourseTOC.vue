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
          Build your own business with
          <span class="text-indigo-400">Step-by-step Guidance!</span>
        </p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          These are ACTIONABLE steps to starting any business, with or without
          an idea to start. The process is
          <strong>designed to lower your risk at each step</strong>.
        </p>
      </div>

      <img
        class="p-4 mx-auto mt-12 w-full max-w-md bg-yellow-50 rounded-sm border shadow-lg transform rotate-1 border-olive-400"
        src="/images/illustration-low-risk-equation.png"
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
            <DisclosurePanel as="dd" class="pr-12 mt-2">
              <p class="text-base text-gray-700">
                <ul>
                  <li v-for="section in faq.sections" :key="section">
                    <span v-if="section.startsWith('ℹ️')" class="inline-block mt-3">{{ section }}</span>
                    <span v-else-if="section.startsWith('🎯')" class="inline-block mt-3 mb-6 font-bold">{{ section }}</span>
                    <span v-else-if="section.startsWith('🏁')" class="inline-block mt-3 mb-6 font-bold">{{ section }}</span>
                    <span v-else class="inline-block pl-6 text-sm text-gray-500">{{ section }}</span>
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
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";

const weeks = [
  {
    title: "Week 1 — Your Third Option & Value Entrepreneurship",
    sections: [
      "ℹ️ From “a Job” to My THIRD Option (for Wealth Creation)",
      "ℹ️ How to get the most out of the course?",
      "ℹ️ The THIRD OPTION: A Scalable, Bootstrappable Online Business",
      "ℹ️ The Special Sauce: Spotting Opportunities",
      "ℹ️ The Risk Problem: How do we lower it?",
      "ℹ️ What is “Value”?",
      "ℹ️ Value Entrepreneurship: The Path of Least Risk",
      "⚠️ Action: Self-Reflect. Think of Value. You have value to give: skills, expertise and interests. Get ready for week 2.",
      "ℹ️ The Mindset: Get out of the 9-5 lifestyle with a solid strategy!",
      "⚠️ Action: Set up your social media for an immersive experience.",
      "⚠️ Action: Post on the ValueHeads community subreddit.",
      "🎯 Goal achieved: You're Committed to success. Welcome to the ValueHeads community!",
    ],
  },
  {
    title:
      "Week 2 — Find AWESOME Business Ideas using Search & Social Media Research",
    sections: [
      "ℹ️ How to find pain points for business ideas through market research?",
      "⚠️ Action: Find keywords using free KW Research Tools (go wide)",
      "ℹ️ It's all about the search INTENT!",
      "⚠️ Action: Narrow down your list of “profitable keywords” based on the intention behind the searches.",
      "ℹ️ How to find pain points for business ideas in online communities? Facebook Groups, Reddit and forums.",
      "⚠️ Action: Find Facebook groups, subreddits and forums where the discussions are happening.",
      "ℹ️ Hashtags are GREAT for researching a topic on Twitter and Instagram!",
      "⚠️ Action: Extract Interests from Twitter hashtag research",
      "⚠️ Action: Extract Interests from  Instagram hashtag research",
      "ℹ️ AWESOME TRICK: How to use Facebook Ads and Twitter Ads to find ideas, free.",
      "⚠️ Action: Use Facebook Ads and Twitter Ads to learn about user demographic and interests.",
      "ℹ️ How to find competing businesses in any niche? ",
      "⚠️ Action: Make a LIST of Competitors. Grouped by Pain Point they solve.",
      "ℹ️ Find out WHAT competitors in each space are selling.",
      "⚠️ Action: Find out WHAT competitors in each space are selling.",
      "ℹ️ The most PROFITABLE problems to solve = (equals) The most pressing pain points",
      "⚠️ Action: Narrow down list of pain points",
      "⚠️ 🔁 Action: SELF-CHECK: Good pain points? No? Repeat?",
      "🎯 Goal achieved: You Found Customer Pain Points BASED ON YOUR INTERESTS!",
    ],
  },
  {
    title: "Week 3 — Find Marketing Gaps Your Competitor's missed",
    sections: [
      "ℹ️ Finding Competitors is a GOOD thing! We will carve our own niche.",
      "⚠️ Action: Analyze competition traffic estimates and sources (SimilarWeb)",
      "ℹ️ Checking if the competitor is funded",
      "⚠️ Action: Do they have funding? How much? (Crunchbase + LinkedIn)",
      "ℹ️ Find the competitor’s Value Proposition statement",
      "⚠️ Action: Find what VALUE does each give to customers? (their landing page)",
      "ℹ️ Review the competitor’s Product and Pricing",
      "⚠️ Action: Is the competitor's product scalable? What’s the price? Is it recurring? (their features and pricing pages)",
      "ℹ️ Review the competitor’s social media presence",
      "⚠️ Action: Size up their social media engagement on different platforms",
      "ℹ️ Review the competitor’s search results performance",
      "⚠️ Action: Are the competitors dominant for 'profitable keywords'? Do you see a gap?",
      "ℹ️ Who are the competitor’s customers?",
      "⚠️ Action: Identify: Who is their ideal client? What problems/motivations do they have?",
      "ℹ️ Estimate the competitor’s income (ballparking it)",
      "⚠️ Action: Estimate how much money they make",
      "🎯 Goal 1 Achieved: You Learnt about this niche market by Analyzing the Competition (after you’ve done this for few competitors)",
      "ℹ️ Locating SEO Marketing Gaps",
      "⚠️ Action: Locate SEO Marketing Gaps for your own niche.",
      "ℹ️ Locating Social Media Marketing Gaps on Twitter, Instagram, TikTok, YouTube, Facebook and Reddit. ",
      "⚠️ Action: Locate Social media marketing gaps. Can you find at least one?",
      "🎯 Goal 2 Achieved: You have located Marketing Gaps",
    ],
  },
  {
    title: "Week 4 — Pick your BEST Business Idea",
    sections: [
      "ℹ️ What makes a great business idea?",
      "ℹ️ Innovate: Entrepreneurial innovation tactics. How to come up with business ideas?",
      "⚠️ Action: Innovate Value. Can you deliver a VALUE better or as good as the competition? Use the 'Pain point (x) Value' WORKSHEET.",
      "ℹ️ Innovate: How to use Business Models to carve a new niche for yourself",
      "⚠️ Action: Innovate with Business Models using the 'Pain Point (x) Business Model' WORKSHEET.",
      "ℹ️ Innovate on Product and Tech",
      "⚠️ Action: Innovate Product (tech) using the 'Pain Point (x) Tech/Product' WORKSHEET.",
      "🎯 Goal 1 Achieved: You did the innovation exercises!",
      "ℹ️ How to estimate the market size in $?",
      "⚠️ Action: Estimate market size in $/month for pain point",
      "ℹ️ What makes a good Founder/Market fit?",
      "⚠️ Action: SELF-REFLECT: Interesting enough VALUE for YOU to work on? (Founder/Market fit)",
      "ℹ️ Can we build a basic product with basic tech for now?",
      "⚠️ Action: Is the tech to build easy/doable/hard?",
      "ℹ️ Pick your LEAD Business Idea",
      "⚠️ Action: Pick your LEAD IDEA",
      "⚠️ 🔁 Action: DECIDE: Continue, Pivot or Perish? Is the idea worth pursuing?",
      "🎯 Goal 2 Achieved: You Picked the Business Idea with best metrics!",
      "🏁 CHECKPOINT: Get some personalized feedback: Post on subreddit!",
    ],
  },
  {
    title:
      "Week 5 — Talk to 3-5 potential customers to pick your BEST online business idea",
    sections: [
      "ℹ️ What are customer development interviews? Why are they so important?",
      "ℹ️ How to find potential customers to talk to?",
      "⚠️ Action: Find potential customers (free or cheap) to talk to?",
      "ℹ️ How to Reach out to potential customers?",
      "⚠️ Action: Reach out to potential customers",
      "ℹ️ How to interview potential customers to validate a pain point?",
      "ℹ️ Talk to potential customers!",
      "⚠️ Action: Interview potential customers to VALIDATE and EXTRACT additional pain points.",
      "⚠️ 🔁 Action: DECIDE: Is the pain point worth paying money to have fixed? No? Repeat from Week 2 with the next idea.",
      "🎯 Goal 1 Achieved: You Validated the Pain Point by talking to potential customers!",
      "ℹ️ Use User Personas to empathize with the customer",
      "⚠️ Action: Build User Personas based on your interviews",
      "ℹ️ Construct a POWERFUL Value Proposition statement",
      "⚠️ Action: Construct your Value Proposition statement",
      "ℹ️ Turn it all into a CLEAR Business Idea on the Lean Canvas",
      "⚠️ Action: Fill your own Lean Canvas to guide you",
      "🎯 Goal 2 Achieved: You have a Clear Business Idea! Let’s test it!",
    ],
  },
  {
    title: "Week 6 — Prepare your Minimum Viable Product (Specs only for now)",
    sections: [
      "ℹ️ What are the Minimum Viable Product’s Specs?",
      "⚠️ Action: Choose Your Success Metric",
      "ℹ️ Find Your Core Set of Features",
      "⚠️ Action: Must-have/nice-to-have to find core features",
      "ℹ️ Decide your pricing",
      "⚠️ Action: Use competition research to decide your pricing.",
      "ℹ️ How to come up with your Minimum Viable Product?",
      "⚠️ Action: Come up with your MVP",
      "ℹ️ How to create a wire-frame of your product?",
      "⚠️ Action: Draw the wire-frames for your MVP",
      "ℹ️ [OPTIONAL] Hire a UX designer for fast UI iterations",
      "⚠️ Action: Hire a UX designer for fast UI iterations",
      "🎯 Goal 1 Achieved: You have Clear MVP Specs! ",
      "ℹ️ How to cheat at branding and do it fast?",
      "ℹ️ Choosing Your Brand Name",
      "⚠️ Action: Choose a Domain + Name for you product.",
      "ℹ️ Choose Your Brand Color and Archetype",
      "⚠️ Action: Choose your brand archetype and color",
      "ℹ️ Create a quick but good looking logo cheap",
      "⚠️ Action: Create a logo",
      "🎯 Goal 2 Achieved: You created your MVP Branding the easy way! Now your MVP specs are ready!",
    ],
  },
  {
    title: "Week 7 — Test your idea using a “smoke test” page & DIY software",
    sections: [
      "ℹ️ What is a smoke test?",
      "ℹ️ How to create a great landing page (with ready templates).",
      "ℹ️ How to write marketing copy like a PRO",
      "⚠️ Action: Write Marketing Copy for landing page. Use Value Prop + Canvas + Specs to do it.",
      "ℹ️ Create your “smoke test” page using no-code tools",
      "⚠️ Action: Create your “smoke test” page using no-code tools",
      "ℹ️ Monitor Your Experiment with Google Analytics",
      "⚠️ Action: Setup Google Analytics to track conversions and traffic",
      "🎯 Goal 1 Achieved: You Created Your 'Smoke Test' Page",
      "ℹ️ How many users does your test need?",
      "⚠️ Action: Calculate HOW MANY users your test needs",
      "ℹ️ Run your test. Drive relevant traffic",
      "⚠️ Action: Run your test. Drive relevant traffic (paid or organically)",
      "ℹ️ How did the test go? Compare results to your Success metrics",
      "⚠️ Action: Analyze resulting conversion rate",
      "ℹ️ Use your results to Update your market size estimates",
      "⚠️ Action: Update market size estimates in $",
      "⚠️ 🔁 Action: DECIDE: Continue, Pivot or Perish? How to decide?",
      "🎯 Goal 2 Achieved: You Validated Your Idea by Running a 'Smoke Test'!",
      "ℹ️ Make Money ASAP (if possible)",
      "⚠️ Action: Create VALUE now, and start making money through 1-on-1 work, until your product is ready. (Parallel work)",
      "⚠️ Action: Create Your Social Media Presence.",
      "🎯 Optional Goal 3 Achieved: You’re awesome and already making money!",
    ],
  },
  {
    title:
      "Week 8 — Develop your Strategies: Growth, SEO, Social Media & Content Strategies",
    sections: [
      "ℹ️ Sources of Traffic on the Internet",
      "ℹ️ What does a complete marketing strategy look like? ",
      "ℹ️ Locate lowest hanging fruits. Can you enter that market easily?",
      "ℹ️ The SEO VALUE Strategy: Focus on VALUE-packed Evergreen articles with strong topical relevance.",
      "⚠️ Action: Locate Pillar Articles to build Topical Relevance.",
      "ℹ️ Create Your SEO VALUE Strategy ",
      "⚠️ Action: Prepare your SEO VALUE-centric marketing strategy (v1.0 of it at least)",
      "🎯 Goal 1 Achieved: You Created Your SEO VALUE Strategy!",
      "ℹ️ How to decide which social media platform to start with?",
      "⚠️ Action: Decide on ONE social media platform to start with.",
      "ℹ️ Create Your Social Media VALUE Strategy ",
      "⚠️ Action: Prepare your Social Media VALUE-centric marketing strategy (v1.0 of it at least)",
      "🎯 Goal 2 Achieved: You Created Your Social Media VALUE Strategy!",
      "ℹ️ Come up with viral loop ideas for your product",
      "⚠️ Action: Come up with viral loop ideas for your product",
      "ℹ️ A Holistic VALUE CONTENT Growth Strategy (with Viral Loops)",
      "⚠️ Action: Combine SEO + SM Strategies + Viral Loop into a Holistic VALUE CONTENT Growth Strategy",
      "🎯 Goal 3 Achieved: You now have a Holistic VALUE CONTENT Growth Strategy (with Viral Loops)",
    ],
  },
  {
    title: "Week 9 — Build your MVP: Attract a co-founder or Hire?",
    sections: [
      "ℹ️ Your options for building your MVP",
      "ℹ️ Choose your Tech Stack - get advice!",
      "⚠️ Action: Get a tech consult (recommended)",
      "⚠️ Action: Choose MVP's Tech Stack",
      "ℹ️ How to attract a good cofounder? (optional)",
      "⚠️ Action: Attract a co-founder.",
      "ℹ️ Alternatively, hire a developer with a ‘paid audition’",
      "⚠️ Action: Hire a developer",
      "ℹ️ Build your Minimum Viable Product!",
      "⚠️ Action: Start Building your MVP",
      "🎯 Goal 1: Find a Developer Co-founder or Hire and Start Building Your MVP",
      "ℹ️ What’s a pre-launch? ",
      "⚠️ Action: Turn your Smoke Test Page to you Pre-Launch page",
      "ℹ️ Collect Emails Early with your pre-launch",
      "⚠️ Action: Write an awesome 'Thank you for joining our waiting list' email.",
      "⚠️ Action: Build a mailing list (using pre-launch waiting list)",
      "ℹ️ Be LASER Focused on reaching potential customers on Social Media",
      "⚠️ Action: Be on Social media with LASER FOCUS on reaching potential customers.",
      "ℹ️ Create your first 1-3 EVERGREEN VALUABLE pieces of content.",
      "⚠️ Action: While developer is building, create your first 1-3 EVERGREEN VALUABLE pieces of content.",
      "ℹ️ Pre-sell if you can!",
      "⚠️ Action: Pre-sell (if you can)",
      "🎯 Goal 2 Achieved: You Pre-Launched!",
    ],
  },
  {
    title: "Week 10 — Launch! Then Learn from Customers, and Refine",
    sections: [
      "ℹ️ Do the Launch Checklist - avoid the most common issues.",
      "⚠️ Action: Go through technical website launch checklist with you developer.",
      "ℹ️ Launch and try to make sales",
      "⚠️ Action: Launch and try to make sales",
      "🎯 Goal 1 Achieved: You Launched your Product!",
      "ℹ️ Learn from users",
      "⚠️ Action: Talk to customers and get feedback everywhere you can get it.",
      "ℹ️ How to diagnose “not selling”?",
      "⚠️ Action: Diagnose, why are they not buying it?",
      "ℹ️ Keep improving",
      "⚠️ Action: Fix any issues and keep an eye on those conversion metrics, and repeat.",
      "ℹ️ Still can’t sell it?",
      "⚠️ 🔁 Action: DECIDE: Continue, Pivot or Perish?",
      "🎯 ULTIMATE GOAL Achieved: You Own your Bootstrapped, Scalable Online Business!",
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
    };
  },
};
</script>