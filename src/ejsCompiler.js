const ejs = require('ejs')

const ejsCompiler = (ejsTemplate,data)=>{
    let template = ejs.compile(ejsTemplate);
    const html = template(data)
    return html
}

module.exports = ejsCompiler