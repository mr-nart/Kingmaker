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

>[!tldr|bg-c-gray] Current Location: [[Oleg's Trading Post]]

|                 NAME                 |                                            BM / TW                                            | CONDITIONS | ADDITIONAL NOTES |
|:------------------------------------:|:---------------------------------------------------------------------------------------------:|:----------:|:----------------:|
| [[Archibald M. F. Legralte\|Archie]] | <input type="checkbox" unchecked id="4f0b64">/  <input type="checkbox" unchecked id="26c3c1"> |            |                  |
|     [[Caidaranel Novori\|Caine]]     | <input type="checkbox" unchecked id="9b7daf">/  <input type="checkbox" unchecked id="c561bc"> |            |                  |
|  [[Celestine Orlovsky\|Celestine]]   | <input type="checkbox" unchecked id="eef7ee">/  <input type="checkbox" unchecked id="86b019"> |            |                  |
|    [[Garrett Goodword\|Garrett]]     | <input type="checkbox" unchecked id="39025b">/  <input type="checkbox" unchecked id="7b7d8f"> |            |                  |
|      [[Hedera Wildbow\|Hedera]]      | <input type="checkbox" unchecked id="182448">/  <input type="checkbox" unchecked id="977270"> |            |                  |
|       [[Liosa Fenrie\|Liosa]]        | <input type="checkbox" unchecked id="6d09af">/  <input type="checkbox" unchecked id="43e756"> |            |                  |

<p></p>

>[!recite|right no-i  ws-med static] **-- Active Leads --**
>- Kressle
>- [[Tartuccio]]

## Agenda
- [ ] [[Investigating the Black Tears]]
	- [ ] connection with Pitax?
- [ ] [[The Pitaxian Spy]]
	- [ ] investigate Tartuccio + his supposed business in New Stetven?
	- [ ] Ask [[Linzi]] what she knows of [[Pitax]]? (since she studied there)
- [ ] [[Cleaning Up the Greenbelt]]
	- [ ] bandit base on the banks of the Tuskwater?
	- [ ] Ask Kressle about the rest of the lieutenants/the Staglord/the base
- [ ] [[Moon Radish Hunt]]
	- [ ] deliver radishes to [[Old Bokken]]
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

