---
num: 15
---
September 28th, 2024

## Summary
We did a little bit of planning for making our way into the Staglord's base and headed off in that direction.

##
>[!note|bg-c-gray no-t txt-c]
>```dataviewjs
>var n = dv.tryEvaluate("number(this.num)");
>var pgs = dv.pages('"Sessions"')
>	.where(
>		s => s.num == dv.tryEvaluate("x - 1", {x: n})
>		|| s.num == dv.tryEvaluate("x + 1", {x: n})
>	)
>	.sort(s => s.num, 'asc')
>	.file.name;
>dv.span("<< -- [[" + pgs[0] + "]] -- | -- [[" + pgs[1] + "]] -- >>");
>```

## Log
- **Plotting our way into the bandit headquarters**
	- Maybe we were all captives at Oleg's or something, we broke out with "Kressle" and are her new muscle/prisoners?
- **on the way back to Oleg's to pick up some party members**
	- 4 kobolds there, fighting over something in that one clearing in the woods, presumably moon radishes?
		- 2 sootscale, 1 red ("flamescale"), 1 blue
		- Garrett's spyglass, sees something shiny
		- looks coin-shaped, probably copper?
		- sootscales trick the others, run off with it

#### 11th of Pharast
- **Oleg's**
	- make it back around 7 am
	- Linzi, Valerie, Lander staying to help defend the trading post
	- ritual spell to make a false bottom?
	- more planning
		- maybe it's gonna be too complicated with the whole prisoner situation
		- maybe we can have some people get in the base and then let the others in?
		- maybe we should reconvene with the sootscale kobolds first?
	- we rest at Oleg's for the day
- **evening**
	- full moon, raining 42*
	- Bokken -- wants some fangberries
	- Amiri -- wants to collect a bounty on a wild boar
	- heading towards the Tuskwater, taking both our horse + Oleg's horse Claptrap

#### 12th of Pharast
- traveling overnight
- made it to the Thornriver camp by morning, continuing south along the river until the early evening
- on the way, we see a group of rough-looking gentleman talking about "getting one over the Staglord"
	- "he's too weak to rule over the greenbelt"
	- "you think you'll get within 10 ft of the gate before they skewer you with arrows? plus you know that place is cursed, right?"
	- booming voice from the south warning them of us, probably staglord magic bullshit
	- Garrett's voice "hey, quick, come over here" from across the river?
	- there's some magic bullshit projecting voices around
		- oh shit it wasn't the staglord, it was some weird monster thing that's like a hyena horse demon thingy hiding in the bushes
		- it's a *Leucrotta*
	- we killed some of the dudes, the others fled from the leucrotta
	- the leucrotta tried to flee, but we killed it -- Linzi got the killing blow
		- harvested pelt and mandible

## Quests Progressed
- [[Wild Boar Hunt]]
- [[Alchemical Fetch Quest]]
- [[Cleaning Up the Greenbelt]]