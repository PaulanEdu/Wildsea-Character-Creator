export const gauPlaybook = {
  name: "Gau",
  type: "Bloodline",
  blurb:
    "Fungal humanoids set free from their old homes by this new world of rot and growth. The gau are swift and spry, making the best of their freedom.",
  edgesQS: ["Grace", "Instinct", "Veils"],
  skillsQS: [
    "Concoct",
    "Flourish",
    "Harvest",
    "Outwit",
    "Tend",
    "Vault",
    "Wavewalk",
  ],
  languagesQS: ["Gaudimm", "Raka Spit", "Old Hand"],
  resourcesQS: {
    salvage: ["Fluted Stone", "Fossilized Fungus"],
    specimens: ["Fat-Bodied Beetle", "Sourvine Extract"],
    whispers: ["Mycosanctum Rumblings"],
    charts: ["A Chart of Many Colours"],
  },
  drivesQS: [
    "Solve problems in gau settlements",
    "Help other gau explore the wider waves",
  ],
  miresQS: [
    "Your flesh turns brittle, making it harder to move",
    "You leave a trail of spores as you move",
  ],
  aspects: [
    {
      name: "Luminous Patches",
      type: "Trait",
      length: 4,
      description: "You can shed light at will.",
    },
    {
      name: "Unfurling Flare",
      type: "Trait",
      length: 4,
      description:
        "A flexing mantle of myconic flesh that unfurls to increase your physical size. Treat conflicts and triumphs when intimidating smaller targets.",
    },
    {
      name: "Camouflage Mottle",
      type: "Trait",
      length: 3,
      description:
        "Increase impact when using stealth in either a natural or urvban environment (choose which environment when you take this trait).",
    },
    {
      name: "Fungal Tendril",
      type: "Trait",
      length: 3,
      description:
        "You have an additional tendril-like limb, allowing you to hold and manipulate more objects than usual.",
    },
    {
      name: "Mycofiltration",
      type: "Trait",
      length: 2,
      description:
        "You can see perfectly within sporeclouds, and you resist the effects of bad air and airborne spores.",
    },
    {
      name: "Spore-Sacs",
      type: "Trait",
      length: 4,
      description:
        "Mark to obscure your current area with a dense cloud of sight-blocking spores that persist until carried away by the wind.",
    },
    {
      name: "Naturally Hallucinogenic",
      type: "Trait",
      length: 3,
      description:
        "Your sheddings have mild psychotropic properties. Mark to create a rare resource, Hallucinogenic Spores.",
    },
    {
      name: "Fungal Fortress",
      type: "Trait",
      length: 3,
      description:
        "You're resistant to three damage types, chosed from the following list: Keen, Hewing, Toxin, Acid, Frost.",
    },
    {
      name: "Proliferation",
      type: "Trait",
      length: 3,
      description:
        "Burn to grant an ally a copy of any one of your aspects (other than this one) as a temporary benefits. The benefit's track is equal to the original aspect's track.",
    },
    {
      name: "Medicine Pouch",
      type: "Gear",
      length: 3,
      description:
        "Others rarely ask where the medicines are collected. Use a task to create a rare resource, Medicinal Herbs.",
    },
    {
      name: "Nurturing Pitch-Jar",
      type: "Gear",
      length: 2,
      description:
        "A blackened glass jar that holds an eager colony of ironroot mold. Use a task to create a specimen copy of any piece of salvage you own, with the 'Fungal' tag.",
    },
    {
      name: "Jag-Lash",
      type: "Gear",
      length: 4,
      description:
        "A leather cord studded with teeth or salvaged metal. Deals CQ Serrated damage.",
    },
    {
      name: "Spore-Slinger",
      type: "Gear",
      length: 3,
      description:
        "A sling-like contraption for lobbing spore-bombs, dealing LR Toxin or Blast damage.",
    },
    {
      name: "Pangoshroom",
      type: "Companion",
      length: 4,
      description:
        "A slow-moving but well-armoured fungal companion that wants ntohing more than to keep you safe.",
    },
    {
      name: "Sporehund",
      type: "Companion",
      length: 3,
      description: "A loyal companion that deals CQ Toxin damage.",
    },
    {
      name: "Cordysect",
      type: "Companion",
      length: 3,
      description:
        "A slow-flying beetle riddled with fungal growths. Mark to gain a burst of dense sensory information from its surroundings, revealing oddities and secrets.",
    },
  ],
};
