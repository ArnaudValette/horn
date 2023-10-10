/*
   1 : translate org file into data structure
   2 : translate data structure into project
 */
import { FormatParser } from "./horn/FormatParser"
import { OrgBracketElementsParser } from "./horn/OrgBracketParser"
import Parser from "./parser/Parser"
import * as fs from "fs"

const a = performance.now()
let flags = {
  "*": 0b100000,
  "/": 0b010000,
  _: 0b001000,
  "+": 0b000100,
  "~": 0b000010,
  "=": 0b000001,
}

const formatParser = new FormatParser(flags)
const bracketParser = new OrgBracketElementsParser()
const x = new Parser(bracketParser, formatParser)

const data = fs.readFileSync("./data/example.org")
x.parseOrg(data)

recurseInNode(x.state.roots[0])
// x.state.roots.forEach((value:HornNode) => {
//     recurseInNode(value)
// })
// 
function recurseInNode(x: HornNode) {
    if (x.glitterNodes && x.glitterNodes.length > 0) {
        console.log(x.glitterNodes)
    }
    if (x.children.length > 0) {
        x.children.forEach((y) => recurseInNode(y as HornNode))
    }
}

const b = performance.now()
console.log(`TIMING: ${b - a} ms`)
