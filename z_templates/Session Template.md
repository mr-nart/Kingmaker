---
num: 999
---
{{date:MMMM Do, YYYY}}

## Summary
...

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
- 

## Quests Progressed
- 