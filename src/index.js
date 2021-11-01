const ejsCompiler = require('./ejsCompiler')
const mailserviceHTML = require('./mailserviceHTML')
const mailserviceText = require('./mailServiceText')

const sendMail = ({ejsTemplate,dataJson},imageConfig = [])=>{
    let body = null

    if(body){
        try{
            body = ejsCompiler(ejsTemplate,dataJson)
        }catch(e){
            throw Error(`Error happens when trying compiler EJS: ${e}`)
        }
    }
    

    const sendHTML = (dataAccount,dataSending)=>{
        const smtpDataHTML = {
            body,
            dataAccount,
            dataSending,
            imageConfig
           
        }

        mailserviceHTML(smtpDataHTML)
    }

    const sendText = (dataAccount,dataSending)=>{

        const smtpDataText = {
            dataAccount,
            dataSending
        }

        mailserviceText(smtpDataText)
    }

    return{
        sendHTML,
        sendText
    }
}

module.exports = sendMail