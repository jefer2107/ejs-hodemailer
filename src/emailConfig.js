const fs = require('fs')
const path = require('path')
const sendMail = require('.')

const configTransporter = ({account,secure,user,pass})=>{
    
    const dataAccount = {
        account,
        secure,
        user,
        pass,
    }

    const dataTransporterHTML = ({from,to,subject,ejsTemplate,data,imageOptions=[]})=> {
        const dataJson = {
            name: data[0].name,
            message: data[0].message,
            lista: data[0].lista
        }
        
        const dataSending = {
            from,
            to,
            subject,
        }

        const templateConfig = {
            ejsTemplate,
            dataJson,
        }

        const filename = imageOptions[0].filename
        const imagePath = imageOptions[0].path
        const cid = imageOptions[0].cid

        fs.readFile(path.join(__dirname,imagePath),(erro,buffer)=>{
            if(erro)
            {
                sendMail(templateConfig).send(dataAccount,dataSending)

            }else{
                const imageConfig = [
                    {
                        filename,
                        content: buffer,
                        cid
                    }
                ] 
    
                sendMail(templateConfig,imageConfig).sendHTML(dataAccount,dataSending)
            }
    
        })
        
    }

    const dataTransporterText = ({from,to,subject,text})=> {
        
        const dataSending = {
            from,
            to,
            subject,
            text
        }

        let templateConfig = {}
        let imageConfig = []

        sendMail(templateConfig,imageConfig).sendText(dataAccount,dataSending)
    }

    return{
        dataTransporterHTML,
        dataTransporterText
        
    }
}

module.exports = configTransporter