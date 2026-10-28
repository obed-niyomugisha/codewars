export function filter_list(l:Array<any>):Array<number> {
  return l.filter(item => typeof item == 'number');
}