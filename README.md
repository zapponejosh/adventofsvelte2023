# Advent of Svelte 2023

<details>
<summary>Naughty or Nice</summary>

## Day 1

The Elves have been tirelessly creating presents all year round. They’re right on schedule, but today they’ve run into a big problem; the ancient system for tracking who’s been naughty or nice is out of commission. With the hundreds of thousands of letters from children piling up alongside their records of good and bad deeds, the Elves are in dire need of a modern solution.

Your mission is to build a system for the elves, enabling them to input names and tally each childs deeds to keep track of whether they’re good or bad. You could even categorise these automatically as “naughty” and “nice.” Fortunately, the elves have been meticulous in their record-keeping and have a backup of all the current data in JSON format. You’ll need to import this data into your newly developed system.

Here is an example of what the Elves have stored:

```javascript
[
 { "name": "Emma", "tally": 32 },
 { "name": "Ethan", "tally": 14 },
 { "name": "Isabella", "tally": 70 },
 { "name": "Jayden", "tally": -16 },
 { "name": "Isabella", "tally": -59 },
 { "name": "Noah", "tally": 19 },
 { "name": "Mia", "tally": -37 },
 { "name": "Will", "tally": -20 },
 { "name": "Sam", "tally": -91 },
 { "name": "Brittney", "tally": -98 }
 ...
]
```

You can fetch this data by making a GET request to `https://advent.sveltesociety.dev/data/2023/day-one.json`
</details>

<details>
<summary>Munch-O-Meter</summary>
As the clock ticks down to Christmas Eve, Santa is preparing to eat all the cookies left by children all over the world. But amidst the holiday cheer, a small problem has arisen – how can we keep track of how many cookies Santa has munched!

You’ve been tasked with creating a Cookie Counter which can show the tally of cookies munched. We should also be able to add, remove, and reset the count. Svelte Bot, in it’s wisdom, recommends exploring the dynamic world of Svelte transitions/animations to level up your creation.

If you’re up for it, you could consider adding a feature that shows Santa’s mood based on the number of cookies eaten – maybe he gets a little merrier with each cookie!
</details>
