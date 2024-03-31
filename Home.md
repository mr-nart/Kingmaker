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

>[!tldr|bg-c-gray] Current Location: [[Restov]] (Aldori Manor)

|                 NAME                 |   HP    |                                            BM / TW                                            | CONDITIONS | ADDITIONAL NOTES |
|:------------------------------------:|:-------:|:---------------------------------------------------------------------------------------------:|:----------:|:----------------:|
| [[Archibald M. F. Legralte\|Archie]] | 20 / 20 | <input type="checkbox" unchecked id="4f0b64">/  <input type="checkbox" unchecked id="26c3c1"> |            |                  |
|     [[Caidaranel Novori\|Caine]]     | 15 / 15 | <input type="checkbox" unchecked id="9b7daf">/  <input type="checkbox" unchecked id="c561bc"> |            |                  |
|  [[Celestine Orlovsky\|Celestine]]   | 20 / 20 | <input type="checkbox" unchecked id="eef7ee">/  <input type="checkbox" unchecked id="86b019"> |            |                  |
|    [[Garrett Goodword\|Garrett]]     | 16 / 16 | <input type="checkbox" unchecked id="39025b">/  <input type="checkbox" unchecked id="7b7d8f"> |            |                  |
|      [[Hedera Wildbow\|Hedera]]      | 21 / 21 | <input type="checkbox" unchecked id="182448">/  <input type="checkbox" unchecked id="977270"> |            |                  |
|       [[Liosa Fenrie\|Liosa]]        | 15 / 15 | <input type="checkbox" unchecked id="6d09af">/  <input type="checkbox" unchecked id="43e756"> |            |                  |

<p></p>

>[!recite|right no-i  ws-med static] **-- Active Leads --**
>- [[Black Tears]]
>-

## Agenda
- [ ] [[Investigating the Black Tears]]
	- [ ] connection with Pitax?
- [ ] [[The Pitaxian Spy]]
	- [ ] Pursue Lead on [[Tartuccio]]
	- [ ] investigate Tartuccio + his supposed business in New Stetven?
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

