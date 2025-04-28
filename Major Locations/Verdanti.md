---
cssclasses:
  - tables-wide
---
#stolen-lands
>**Verdanti** is the barony formed from the charter provided to our party by Lady [[Jamandi Aldori]].

> [!caption|right wm-sm]
>```leaflet
>id: stolen-lands-map
>image: [[stolen lands map.png]]
>lat: 40
>long: 60
>minZoom: 0
>maxZoom: 10
>defaultZoom: 6.75
>zoomDelta: 0.25
>height: 280px
>lock: true
>```

## Major Geographical Features
Verdanti occupies the [[Greenbelt]], with its capital lying just at the northern bank of the *Tuskwater Lake*.

## Government
While [[Archibald M. F. Legralte]] stands as the chief diplomatic officer, Verdant is an oligarchy run by a council of equals, each with their own specialized roles.

The council currently consists of:
- [[Archibald M. F. Legralte]]
- [[Caidaranel Novori]]
- [[Celestine Orlovsky]]
- [[Garrett Goodword]]
- [[Hedera Wildbow]]
- [[Liosa Fenrie]]
- [[Linzi]]
- [[Valerie]]

# Notable Locations
```dataview
TABLE WITHOUT ID file.link AS "Places", desc AS "Description"
FROM "Minor Locations" AND (#verdanti OR #greenbelt)
SORT file.path
```