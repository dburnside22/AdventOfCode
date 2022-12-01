---
to: day<%= day %>/package.json
---

{
  "name": "day<%= day %>",
  "version": "12.<%= day %>.2022",
  "main": "day<%=day%>.js",
  "type": "module",

  "scripts": {
    "dev": "node day<%= day %>.js"
  }
}