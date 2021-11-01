const nodemailer = require('nodemailer')

const mailserviceText = ({dataAccount,dataSending})=>{
    let from = dataSending.from
    let to = dataSending.to
    let subject = dataSending.subject
    let text = dataSending.text

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
        text
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

module.exports = mailserviceText