#!/usr/bin/env node
import {McpServer}from'@modelcontextprotocol/sdk/server/mcp.js';import {StdioServerTransport}from'@modelcontextprotocol/sdk/server/stdio.js';function n(){let e=new McpServer({name:"v-rapper-mcp",version:"0.0.1"},{capabilities:{tools:{}}});e.tool("v-rapper",`Get Evan You's v-rapper video URL
Applicable scenarios:
1. User asks about v-rapper
2. User asks about VueConf 2025 Evan You rap video
`,{},async()=>({content:[{type:"text",text:"https://www.bilibili.com/video/BV1U9MXzvEHR/?vd_source=d36c0f862962bd8f8a7256fb2ddb5bbf"}]}));let r=new StdioServerTransport;e.connect(r);}n();