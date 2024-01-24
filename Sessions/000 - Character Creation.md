---
num: 0
---

> [!note|bg-c-gray no-t txt-c]
>```dataviewjs
>var n = dv.tryEvaluate("number(this.num)");
>var pgs = dv.pages('"Sessions"')
>	.where(s => s.num == dv.tryEvaluate("x + 1", {x: n}))
>	.file.name;
>dv.span("| -- [[" + pgs[0] + "]] -- >>");
>```

## Summary
We made our characters. 

## Log
- 