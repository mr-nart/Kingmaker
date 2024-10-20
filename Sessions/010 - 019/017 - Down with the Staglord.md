---
num: 17
---
October 19th, 2024

## Summary
We defeated the Staglord! Time to finish investigating his base, track down any remaining bandits, and collect our settlement charter.

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
- the group started the fight
	- the Staglord is drinking whiskey, holding green hair, and crying?
	- the Staglord is in a room with a bunch of pelts and empty bottles of alcohol, reeks of booze
	- Linzi let out the owlbear, Beaky
		- Beaky nearly eviscerates Akiros
		- Beaky ran away
	- Garrett delivers the final blow to the Staglord
		- "At least it's over... I'll go to sleep... and see her..."
	- killed Doven, too

**Questions to answer:**
- what kind of kingdom do we want to make?
- who do we want to be part of it?
- what do we do with Irenna and Akiros?
- also we still need to explore the rest of the staglord's fort

## Quests Progressed
- [[Cleaning Up the Greenbelt]]