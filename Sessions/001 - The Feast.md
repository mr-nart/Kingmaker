---
num: 1
---

> [!note|bg-c-gray no-t txt-c]
>```dataviewjs
>var n = dv.tryEvaluate("number(this.num)");
>var pgs = dv.pages('"Sessions"')
>	.where(
>		s => s.num == dv.tryEvaluate("x - 1", {x: n})
>		|| s.num == dv.tryEvaluate("x + 1", {x: n})
>	)
>	.file.name;
>dv.span("<< -- [[" + pgs[0] + "]] -- | -- [[" + pgs[1] + "]] -- >>");
>```

## Summary
We started the campaign.

## Log
- 