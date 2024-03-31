

# Relevant Sessions
```dataview
LIST FROM "Sessions"
WHERE contains(file.outlinks, this.file.link)
SORT date
```