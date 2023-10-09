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

const data = fs.readFileSync("./data/save.org")
x.parseOrg(data)

// x.state.roots.forEach((a: HornNode | Array2D<string>) => {
//   recurseInNode(a as HornNode)
// })
//
// function recurseInNode(x: HornNode) {
//   if ((x as HornNode).glitterNodes && (x as HornNode).glitterNodes.length > 0) {
//     console.log((x as HornNode).glitterNodes)
//   }
//   if (x.children.length > 0) {
//     x.children.forEach((y) => recurseInNode(y as HornNode))
//   }
// }
//
const b = performance.now()
console.log(`TIMING: ${b - a} ms`)
