---
cssclasses: tables-wide
---
>Brevoy is a proud land, known throughout Golarion for producing able warriors, regal nobles, and clever rogues. Yet Brevoy’s two regions, Issia and Rostland, have long held one another in contempt and now stand on the verge of civil war. Both Issia and Rostland were independent nations until [[Historical Figures#Choral the Conqueror]]’s barbarian armies and red dragon servitors united the regions into a single kingdom two centuries ago. Until recently, the iron rule of [[Brevic Noble Houses#House Rogarvia]] maintained a fragile peace between the two regions. But a decade ago, the ruling house mysteriously disappeared, and the conniving leaders of Issia’s [[Brevic Noble Houses#House Surtova]] supplanted them as Brevoy’s rulers. Now a labyrinthine political landscape plagues the nation, full of secret alliances, provincial loyalties, and nefarious plots; civil war seems inevitable. In Rostland to the south, the [[Aldori Swordlords|swordlords]] see in many of Issia’s recent political moves the swift approach of such a war. They rightly fear such an event, for Rostland is smaller than Issia, it has fewer armies, and its rolling hills and grasslands offer very little in the way of natural defenses. Worse, unlike Issia, whose northern border stretches along the Lake of Mists and Veils, which offers some defense, Rostland’s southern border lies along [[Stolen Lands|a stretch of wilderness infested with bandits and monsters]]. If Brevoy falls into civil war, it won’t be long at all before the violent, opportunistic vultures to the south move to take advantage of Rostland’s problems.

## Major Geographical Features
> [!caption|right wm-sm]
>```leaflet
>id: brevoy-map
>image: [[brevoy map.png]]
>bounds: [[0, 0], [523, 773]]
>unit: miles
>lat: 255
>long: 480
>minZoom: -0.5
>maxZoom: 8
>defaultZoom: -0.5
>zoomDelta: 0.25
>height: 330px
>lock: true
>```

The **Lake of Mists and Veils** forms the northern border. Along the coast is *Winterbreak Bay*. East of the bay is *Acuben Isle*, an island about 45 miles long. West of the bay is *Claw Point*, the highly inaccessible northernmost point of the Brevic mainland.

The **Icerime Peaks** form the eastern border with Old Iobaria. The mountain range ends as it approaches the southern border, transitioning into the *Valley of Fire*. The land in this valley has remained blackened and melted ever since [[Historical Figures#Choral the Conqueror]]'s red ragon allies scourged inthe land in 4499 AR, destroying the [[Aldori Swordlords]]' last great army. 

The **Golushkin Mountains** form a portion of the western border with Numeria.

The **Shrike River** forms a portion of the southern border with the River Kingdoms.

**Lake Reykal** sits in the central region of Brevoy, fed largely by the *Awzera River* from the West and the *East Sellen River* from the East as it flows through the *Gronzi Forest*.  North of the lake is *Mount Veshka*.

## Issia
Pirate nation, northern Brevoy, contains up the majority of the land mass. Has an unforgiving geography (little vegetation and poor soil) that forced its people to be cunning and brutal in order to survive, though now many Issians are simple fisherman or traders.

```dataview
TABLE WITHOUT ID file.link AS "Places", desc AS "Description"
FROM "Minor Locations" AND #issia
SORT file.path
```

## Rostland
Fertile region, southern Brevoy. Known for its master swordsmen and proud, defiant citizenry. Stands on the verge of civil war with Issia, which was gained political control of the region since the disappearance of Brevoy's ruling [[Brevic Noble Houses#House Rogarvia]] in 4699 AR.

```dataview
TABLE WITHOUT ID file.link AS "Places", desc AS "Description"
FROM "Minor Locations" AND #rostland
SORT file.path
```


