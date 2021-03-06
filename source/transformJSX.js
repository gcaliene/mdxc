import { transform } from 'babel-core'

export default function transformJSX(code, pragma='createElement') {
  try {
    return transform(code, {
      babelrc: false,
      plugins: [
        require('babel-plugin-syntax-jsx'),
        [require('babel-plugin-transform-react-jsx'), { pragma }]]
      }).code.replace(/;$/, '')
  }
  catch (e) {
    return
  }
}
