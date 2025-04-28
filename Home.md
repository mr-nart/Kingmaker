---
cssclasses: clean-embeds, tables-wide
---
![[kingmaker banner.webp|banner p+t]]
```dataviewjs
var arr = dv.pages('"Sessions"').sort(s => s.num, "desc");
var pg = arr[0];
dv.header(2, "Most Recent Session #[[" + pg.file.name + "]]");
dv.paragraph("![[" + pg.file.name + "#Summary|nlk]]");
```

## Party Status
>[!tldr|right w-tiny static bg-c-gray no-i ttl-c] :FasMapLocationDot: [[Atlas]]

>[!tldr|bg-c-gray] Current Location: [[Restov]]

> [!kanban|no-t] Party Members
> - **-- Players --**
> 	- [ ] [[Archibald M. F. Legralte]]
> 	- [ ] [[Caidaranel Novori]]
> 	- [ ] [[Celestine Orlovsky]]
> 	- [ ] [[Garrett Goodword]]
> 	- [ ] [[Hedera Wildbow]]
> 	- [ ] [[Liosa Fenrie]]
> - **-- Accompanying --**
> 	- [ ] [[Amiri]]
> 	- [ ] [[Linzi]]
> - **-- At [[Tuskwater Fort]] --**
> 	- [ ] [[Valerie]]
> 	- [ ] [[Hedera Wildbow]]

<p></p>

>[!recite|right no-i  ws-med static] **-- Active Investigations --**
>- Writing / zombies in the [[Tuskwater Fort]]?
>- Rogerio / Black Tears?

## Agenda
- [ ] Survey Greenbelt for mineral caches
	- [ ] Oaktop Silver Mine? May need to make a deal with the kobolds
	- [ ] gold ore vein
- [ ] meet with "The Guardian of the Bloom" in the forest
---
>[!note|bg-c-gray]- Recently Edited Files
><p></p>
>
>```dataview
>TABLE file.folder AS "Folder", file.mtime AS "Last Modified"
>FROM -"z_templates" AND -"z_assets"
>SORT file.mtime DESC
>LIMIT 20
>```