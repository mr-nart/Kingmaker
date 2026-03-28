---
num: 30
---
October 10th, 2025

## Summary
We are recruited by Negant Warthropple to look into Gronkthorex's tomb, somewhere in the Greenbelt. There's a sword to be found. Hedera, Tik'Tok, and Knik'Knak set out to look for the "big stick lady," Elga. She requests reagents for potions. Hedera left her a sample of the toxic vines to study, should have answers in a week.

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
#### 28th of Pharast, Sunday
- Caine and Garrett shopping around
	- Negant Warthropple and a very well-dressed gnome are making a big hubbub at a stall with scrolls
	- the guy is berating Negant for some reason
		- it's Jubilost Narthropple
	- Kellish king's tomb out in the Greenbelt? There's a sword to be found
		- east of the Tuskwater, but "not so far west as to encompass the more mountainous terrain around lake silverstep"
		- Gronkthorex -- a Kellish king before the rise of the Brevoy noble houses
			- known for his impiety, believed their should be no gods before him
			- had himself enshrined as a living deity
		- finding this would disprove Narthropple's theory that the Kellish had no holdings in the Stolen Lands

> #### 1st of Gozran **(Hedera's stuff)**
> - Nok-Nok joined the group of Hedera + Tik'Tok and Knik'Knak
> - we set aside some berries, one bunch for Bokken, one bunch for "big stick lady", and a few for the kobolds
> - going to the big stick lady
> 	- come across her hut, there's a big garden with a pumpkin-headed scarecrow that seems to follow us with its gaze
> 	- she eventually lets us in thanks to Tik'Tok's and Knik'Knak's charm
> 	- her name is Elga, she has very very smooth green skin and pointy ears
> 	- can offer 7 gold pieces for the fangberries, alternatively could lend some spellcasting?
> 		- Hedera takes the gold
> 	- Hedera alluded to us having defeated the Staglord and told her we took over the fort
> 	- more requests for "reagents"
> 		- black rattlecap
> 		- shadow moss
> 		- a flower from the living mound
> 	- Hedera asks her about Pik'Tol's weird behavior
> 		- she says it seems like something from The First World
> 		- "if he's better now, I'm sure whatever it was, it wasn't important"
> 		- Hedera shows her some of the strange vines from the riverbank, she tells us to come back in a week after she studies the sample

## Quests Progressed
- [[Toxic Vines]]
- [[Gronkthorex's Tomb]]