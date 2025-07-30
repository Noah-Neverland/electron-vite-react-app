/*
 * 控制台彩色文字输出
 * @param {string} output
 * @param {string} color
 * @returns
 */

export function colorConsole(output, color) {
  const colorCode = (col) => {
    switch (col) {
      case 'black':
        return '30'
      case 'red':
        return '31'
      case 'green':
        return '32'
      case 'yellow':
        return '33'
      case 'blue':
        return '34'
      case 'purple':
        return '35'
      case 'cyan':
        return '36'
      case 'white':
        return '37'
      default:
        return '39'
    }
  }
  console.log(`\x1b[${colorCode(color)}m${output}\x1b[0m`)
}
