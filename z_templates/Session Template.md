---
num: 999
---
{{date:MMMM Do, YYYY}}
```dataview
LIST FROM "Sessions" WHERE num = (this.num - 1) OR num = (this.num + 1)
```

## Summary


## Log
- 