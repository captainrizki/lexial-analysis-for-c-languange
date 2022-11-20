/**
 * Check valid delimter
 */
export function isDelimiter(ch: string): boolean {
  if (
    ch === ' ' ||
    ch === '+' ||
    ch === '-' ||
    ch === '*' ||
    ch === '/' ||
    ch === ',' ||
    ch === ';' ||
    ch === '>' ||
    ch === '<' ||
    ch === '=' ||
    ch === '(' ||
    ch === ')' ||
    ch === '[' ||
    ch === ']' ||
    ch === '{' ||
    ch === '}'
  )
    return true;
  return false;
}

/**
 *Check valid operator
 */
export function isOperator(ch: string): boolean {
  if (
    ch == '+' ||
    ch == '-' ||
    ch == '*' ||
    ch == '/' ||
    ch == '>' ||
    ch == '<' ||
    ch == '='
  )
    return true;
  return false;
}

/**
 * Check valid indentifier
 */

export function validIdentifier(str: string): boolean {
  let lenStr = str.length;
  if (lenStr == 0) return false;
  for (let i = 0; i < lenStr; i++) {
    if (
      str[i] == '0' ||
      str[i] == '1' ||
      str[i] == '2' ||
      str[i] == '3' ||
      str[i] == '4' ||
      str[i] == '5' ||
      str[i] == '6' ||
      str[i] == '7' ||
      str[i] == '8' ||
      str[i] == '9' ||
      isDelimiter(str[i]) == true
    )
      return false;
  }
  return true;
}

/**
 * Check valid keyword
 */
export function isKeyword(str: string): boolean {
  if (
    str === 'if' ||
    str === 'else' ||
    str === 'while' ||
    str === 'do' ||
    str === 'break' ||
    str === 'continue' ||
    str === 'int' ||
    str === 'double' ||
    str === 'float' ||
    str === 'return' ||
    str === 'char' ||
    str === 'case' ||
    str === 'char' ||
    str === 'sizeof' ||
    str === 'long' ||
    str === 'short' ||
    str === 'typedef' ||
    str === 'switch' ||
    str === 'unsigned' ||
    str === 'void' ||
    str === 'static' ||
    str === 'struct' ||
    str === 'goto'
  )
    return true;
  return false;
}

/**
 * Check valid Integer
 */
export function isInteger(str: string): boolean {
  let lenStr = str.length;
  if (lenStr == 0) return false;
  for (let i = 0; i < lenStr; i++) {
    if (
      (str[i] != '0' &&
        str[i] != '1' &&
        str[i] != '2' &&
        str[i] != '3' &&
        str[i] != '4' &&
        str[i] != '5' &&
        str[i] != '6' &&
        str[i] != '7' &&
        str[i] != '8' &&
        str[i] != '9') ||
      (str[i] == '-' && i > 0)
    )
      return false;
  }
  return true;
}

/**
 * Check is valid number
 */
export function isRealNumber(str: string): boolean {
  let lenStr = str.length;
  if (lenStr == 0) return false;
  for (let i = 0; i < lenStr; i++) {
    if (
      (str[i] != '0' &&
        str[i] != '1' &&
        str[i] != '2' &&
        str[i] != '3' &&
        str[i] != '4' &&
        str[i] != '5' &&
        str[i] != '6' &&
        str[i] != '7' &&
        str[i] != '8' &&
        str[i] != '9' &&
        str[i] != '.') ||
      (str[i] == '-' && i > 0)
    )
      return false;
    if (str[i] == '.') return true;
  }
  return false;
}

/**
 * get substring before the next rigth
 */

export function subsString(
  inputCode: string,
  left: number,
  right: number
): string {
  return inputCode.slice(left, right);
}
