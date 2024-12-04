---
to: 2024/day<%= day %>/package.json
---

{
  "name": "day<%= day %>",
  "version": "12.<%= day %>.2024",
  "main": "day<%=day%>.js",
  "type": "module",
  "license": "MIT",

  "scripts": {
    "dev": "node day<%= day %>.js"
  }
}
