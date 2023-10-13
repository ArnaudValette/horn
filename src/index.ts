export { Parser } from "./parser/Parser"
export { OrgBracketElementsParser } from "./horn/OrgBracketParser"
export { FormatParser } from "./horn/FormatParser"
// not sure about these:
// export {
//   HornNode,
//   StructTemplateNode,
//   FootNode,
//   tableRootNode,
//   tableRowNode,
// } from "./horn/HornNode"
// export {
//   GlitterNode,
//   orgFormat,
//   orgLink,
//   orgFootnote,
//   orgCheckBox,
//   orgCookiePercent,
//   orgCookieRatio,
//   orgDate,
//   orgImage,
// } from "./horn/GlitterNodes"
//
//import * as fs from "fs"

// const a = performance.now()
// // const formatParser = new FormatParser()
// // const bracketParser = new OrgBracketElementsParser()
// //const x = new Parser(bracketParser, formatParser)
// const x = new Parser()
//
// const data = fs.readFileSync("./data/example.org")
// x.parseOrg(data)
//
// // x.state.roots.forEach((value: HornNode, index: number) => {
// //   recurseInNode(value, index)
// // })
// //
// function recurseInNode(x: HornNode, i?: number) {
//   if (x.glitterNodes && x.glitterNodes.length > 0) {
//     x.glitterNodes.forEach((g) => {})
//     //console.log(g)
//     //console.log(g.text)
//   } else {
//   }
//   if (x.children.length > 0) {
//     x.children.forEach((y) => recurseInNode(y as HornNode))
//   }
// }
//
// console.dir(x.state.roots, { depth: null })
// const b = performance.now()
// console.log(`TIMING: ${b - a} ms`)
