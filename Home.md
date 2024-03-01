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

>[!tldr|bg-c-gray] Current Location: [[Restov]]

|               NAME                |   HP    |                                            BM / TW                                            | CONDITIONS | ADDITIONAL NOTES |
|:---------------------------------:|:-------:|:---------------------------------------------------------------------------------------------:|:----------:|:----------------:|
|   [[Caidaranel Novori\|Caine]]    | 15 / 15 | <input type="checkbox" unchecked id="9b7daf">/  <input type="checkbox" unchecked id="c561bc"> |            |                  |
| [[Celestine Orlovsky\|Celestine]] |  - / -  | <input type="checkbox" unchecked id="eef7ee">/  <input type="checkbox" unchecked id="86b019"> |            |                  |
|   [[Garrett Goodword\|Garrett]]   | 16 / 16 | <input type="checkbox" unchecked id="39025b">/  <input type="checkbox" unchecked id="7b7d8f"> |            |                  |
|    [[Hedera Wildbow\|Hedera]]     | 16 / 16 | <input type="checkbox" unchecked id="182448">/  <input type="checkbox" unchecked id="977270"> |            |                  |
|             [[Liosa]]             |  - / -  | <input type="checkbox" unchecked id="6d09af">/  <input type="checkbox" unchecked id="43e756"> |            |                  |
|  [[Mischen Fornsteele\|Mischen]]  |  - / -  | <input type="checkbox" unchecked id="4f0b64">/  <input type="checkbox" unchecked id="26c3c1"> |            |                  |

<p></p>

>[!recite|right no-i  ws-med static] **-- Active Leads --**
>- [[Black Tears]]
>- [[Jamandi Aldori]]

## Agenda
- [ ] [[Investigating the Black Tears]]
	- [ ] need to find a way into the party at the Aldori manor
---
>[!note|bg-c-gray]- Recently Edited Files
>```dataview
>TABLE file.folder AS "Folder", file.mtime AS "Last Modified"
>LIMIT 10
>SORT file.mtime DESC
>```

