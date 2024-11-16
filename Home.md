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
>[!tldr|right w-tiny static bg-c-gray no-i ttl-c] [[Atlas]] :FasMapLocationDot:

>[!tldr|bg-c-gray] Current Location: [[Tuskwater Fort]]

> [!kanban|no-t] Party Members
> - **-- Players --**
> 	- [ ] [[Archibald M. F. Legralte]]
> 	- [ ] [[Caidaranel Novori]]
> 	- [ ] [[Celestine Orlovsky]]
> 	- [ ] [[Garrett Goodword]]
> 	- [ ] [[Hedera Wildbow]]
> 	- [ ] [[Liosa Fenrie]]
> - **-- Accompanying --**
> 	- [ ] [[Irenna]]
> 	- [ ] [[Amiri]]
> 	- [ ] [[Linzi]]
> 	- [ ] [[Valerie]]
> - **-- At [[Oleg's Trading Post]] --**
> 	- [ ] [[Lander Lebeda]]

<p></p>

>[!recite|right no-i  ws-med static] **-- Active Investigations --**
>- Writing in the [[Tuskwater Fort]]?
>- Gyronna, shadows, zombies?

## Agenda
- [ ] Retrieve the spear of Davick Nettles?
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

