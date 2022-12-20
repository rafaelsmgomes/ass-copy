export function wrap(text: string, width: number = 5) {
  let words = text.split(/\s+/).reverse()
  let lines: string[] = []
  let curLineArr: string[] = []
  let word: string | undefined

  let i = 0
  while ((word = words.pop())) {
    if (word === undefined) return
    curLineArr.push(word)
    let curLine = curLineArr.join(' ')
    lines[i] = curLine
    if (curLine.length > width) {
      i++
      curLineArr = []
    }
  }
  return lines
}
