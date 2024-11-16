---
cssclasses:
  - tables-wide
---
#stolen-lands
>The [[Greenbelt]] is a swath of land in the northern part of the [[Stolen Lands]]. 

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

## Dangers
Outside of the region's [[Greenbelt Bandits|bandits]], this area is home to *kobolds*, *goblins*, the *undead*, and "*[[Creatures#Mitflits|half-men that will nibble at your fucking shins]]*." Of note, it is said that the woods hold greater perils than the open terrain, with particular reference to "*plants that will come alive and eat you*."

## The Fog
A dense fog rolls in on occasion, typically lasting one to two days at a time. Rumors attribute its presence to [[The Staglord]].

# Notable Locations
```dataview
TABLE WITHOUT ID file.link AS "Places", desc AS "Description"
FROM "Minor Locations" AND #greenbelt
SORT file.path
```