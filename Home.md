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

>[!tldr|bg-c-gray] Current Location: [[Temple of Elk]]

> [!kanban|no-i]- Party Members
> - **-- Players --**
> 	- [[Archibald M. F. Legralte]]
> 	- [[Caidaranel Novori]]
> 	- [[Celestine Orlovsky]]
> 	- [[Garrett Goodword]]
> 	- [[Hedera Wildbow]]
> 	- [[Liosa Fenrie]]
> - **-- NPC --**
> 	- [[Amiri]]
> 	- [[Linzi]]
> 	- [[Valerie]]
> - **-- Temporary --**
> 	- [[Irenna]]
> 	- [[Jhod Kavkin]]
> 	- [[Tristian]]

<p></p>

>[!recite|right no-i  ws-med static] **-- Active Investigations --**
>- What is [[The Staglord]] up to?
>- [[The Pitaxian Spy]]

## Agenda
- [ ] 
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

