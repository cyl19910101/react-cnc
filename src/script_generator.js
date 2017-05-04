export function genAbFP ( str ) {
  return str.replace ( /^src\//, '' );
}

export function iterateStyle ( style, filePath ) {
  console.log ( `mkdir -p "$(dirname "$PWD/build_tmp/${filePath}")"` );
  console.log ( `touch "$PWD/build_tmp/${filePath}"` );
  console.log ( `echo "export default {" >> $PWD/build_tmp/${filePath}` );
  for ( let field in style ) {
    const str = `echo "${field} : \\"${style[ field ]}\\"," >> $PWD/build_tmp/${filePath}`;
    console.log ( str );
  }
  console.log ( `echo "};" >> $PWD/build_tmp/${filePath}` );
}

