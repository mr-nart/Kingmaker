---
cssclasses: clean-embeds, tables-wide
---
![[kingmaker banner.webp|banner p+t]]
``` dataviewjs
var arr = dv.pages('"Sessions"').sort(s => s.num, "desc");
var pg = arr[0];
dv.header(2, "Most Recent Session #[[" + pg.file.name + "]]");
dv.paragraph("![[" + pg.file.name + "#Summary|nlk]]");
```

## Party Status
>[!tldr|right bg-c-gray no-i ttl-c] [[Atlas]] :FasMapLocationDot:

>[!tldr|bg-c-gray] Current Location: [[Restov]]

|              NAME               |   HP    |                     B MED                     | CONDITIONS | ADDITIONAL NOTES |
|:-------------------------------:|:-------:|:---------------------------------------------:|:----------:|:----------------:|
|  [[Caidaranel Novori\|Caine]]   | 15 / 15 | <input type="checkbox" unchecked id="9b7daf"> |            |                  |
|  [[Garrett Goodword\|Garrett]]  | 16 / 16 | <input type="checkbox" unchecked id="39025b"> |            |                  |
|          [[WhizzBang]]          | 16 / 16 | <input type="checkbox" unchecked id="eef7ee"> |            |                  |
|          [[Celestine]]          |  - / -  | <input type="checkbox" unchecked id="eef7ee"> |            |                  |
| [[Mischen Fornsteele\|Mischen]] |  - / -  | <input type="checkbox" unchecked id="eef7ee"> |            |                  |
|          [[Black Tears]]           |  - / -  | <input type="checkbox" unchecked id="eef7ee"> |            |                  |

<p></p>

>[!recite|right no-i  ws-med static] **-- Active Leads --**
>- [[Black Tears]]
>- [[Jamandi Aldori]]

## Agenda
- [ ] [[Investigating the Black Tears]]
---
>[!note|bg-c-gray]- Recently Edited Files
>```dataview
>TABLE file.folder AS "Folder", file.mtime AS "Last Modified"
>LIMIT 10
>SORT file.mtime DESC
>```

