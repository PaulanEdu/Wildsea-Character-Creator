export const ambercladPlaybook = {
  name: "Amberclad",
  type: "Origin",
  blurb:
    "Woken from centuries of slumber inside amber prisons, fresh to (and often unprepared for) the new wild world. Amberclad are perfect blank slates with a dash of weirdness to them.",
  edgesQS: ["Grace", "Sharps", "Tides"],
  skillsQS: ["Break", "Delve", "Outwit", "Scavenge", "Sense", "Study", "Tend"],
  languagesQS: ["Old Hand", "Highvin"],
  resourcesQS: {
    salvage: ["Amber Chips", "Tarnished Memento"],
    specimens: ["Strong Coffee", "Gold-Winged Bee"],
    whispers: ["The Longest Sleep", "Clear Coffin"],
    charts: ["A Book-Block", "A Crisp Sketch-Page"],
  },
  drivesQS: [
    "Discover remnants of your old life",
    "Free other amberclad from their prisons",
  ],
  miresQS: [
    "Sleep pulls at your mind, an old and dangerous friend",
    "Your blood slows, your skin cracks, your heart creaks",
  ],
  aspects: [
    {
      name: "Endless Golden Age",
      type: "Trait",
      length: 5,
      description:
        "You didn't age through your imprisonment, and you don't seem to be aging now that you're free either. A blessing, but a curious one.",
    },
    {
      name: "All So Familiar",
      type: "Trait",
      length: 3,
      description:
        "Muscle memory takes over. Treat conflicts as triumphs when interacting with newly uncovered pre-Verdant artefacts.",
    },
    {
      name: "Unbroken Family Line",
      type: "Trait",
      length: 3,
      description:
        "You may have been asleep for hundreds of years, but some of your kin have been thriving. Burn to tie an individual or settlement to your family in some way.",
    },
    {
      name: "Ambervein",
      type: "Trait/Gear/Companion",
      length: 4,
      description:
        "You're weak to Blunt damage, but immune to the harmful effects of crezzerin.",
    },
    {
      name: "Dream Dredge",
      type: "Trait",
      length: 3,
      description:
        "There are impressions of a forest-less world, but grasping them is like holding onto a dream. Use a task to gain a sliver of Pre-V information.",
    },
    {
      name: "Resokinesis",
      type: "Trait",
      length: 4,
      description:
        "Mark to gain a measure of control over sap, resins, and amber.",
    },
    {
      name: "Just a Scratch",
      type: "Trait",
      length: 3,
      description:
        "Mark to product a resource, Warm Amber Shards ot Dripping Resin.",
    },
    {
      name: "Shattered Eye",
      type: "Gear",
      length: 3,
      description:
        "Something you usually use to see is broken, ambered and still lingering in sleep. You can see glimpses of a person's recent dreams clinging to them if you concentrate.",
    },
    {
      name: "Fragmented Limb",
      type: "Gear",
      length: 3,
      description:
        "Cracked and floating just free of your body. When you take this gear, decide whether it deals CQ Blunt, Keen, or Spike damage (you can change this damage type by using a task).",
    },
    {
      name: "Heart of Resin",
      type: "Gear",
      length: 1,
      description:
        "Burn to create a perfect copy of yourself in living Amber and drift into a deep sleep. You control the copy until iy dies or you choose to destroy it, upon which time you wake with its memories and experiences as dreams.",
    },
    {
      name: "Half-Clogged Firearm",
      type: "Gear",
      length: 4,
      description:
        "A double-barreled pre-Verdant shotgun, one of the firing shambers is hopelessly clogged. Deals LR Blast damage.",
    },
    {
      name: "Shard Cloak",
      type: "Gear",
      length: 5,
      description:
        "You're resistant to three damage types, chosen from the following list: Keen, Spike, Serrated, Hewing, Salt",
    },
    {
      name: "Pre-V Pet",
      type: "Companion",
      length: 4,
      description:
        "A faithful friend from the old times that was trapped, and freed, alongside you. Not particularly suited to the wild world, but more likely revelling in it.",
    },
  ],
};
