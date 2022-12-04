---
to: day<%= day %>/package.json
---

{
  "name": "day<%= day %>",
  "version": "12.<%= day %>.2022",
  "main": "day<%=day%>.js",
  "type": "module",
  "license": "MIT"

  "scripts": {
    "dev": "node day<%= day %>.js"
  }
}
