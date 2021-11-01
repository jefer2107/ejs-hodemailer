const nodemailer = require('nodemailer')

const mailserviceHTML = ({body,dataAccount,dataSending,imageConfig})=>{
    let from = dataSending.from
    let to = dataSending.to
    let subject = dataSending.subject

    const transporter = nodemailer.createTransport({ 
        host:dataAccount.account,
        secure:dataAccount.secure,
        auth: {
            user:dataAccount.user,
            pass:dataAccount.pass
        }
    })

    const mailOptions = {
        from,
        to,
        subject,
        attachments:imageConfig,
        html:body
    }

    transporter.sendMail(mailOptions,(error)=>{
        if(error)
        {
            throw Error(error)
        }
        else
        {
            console.log('Email enviado com sucesso!')
        }
    })


}

module.exports = mailserviceHTML