

# Relevant Sessions
```dataview
LIST FROM "Sessions"
WHERE contains(file.outlinks, this.file.link)
SORT file.ctime
```