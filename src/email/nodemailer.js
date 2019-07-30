const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            type: 'OAuth2',
            user: 'fadilradit@gmail.com',
            clientId: '408195542203-4mhrrhdtq7nf0cols8peka5golpuh56i.apps.googleusercontent.com',
            clientSecret: '5xGpuwS_7TluZxShmI_ihrtm',
            refreshToken: '1/tXQ5WcRSanRLuqbni32c4M-6th3WDj2Xb38-G8rNkj4'

        }
    }
)


const mail = {
    From: 'Fadil Raditya <fadilradit@gmail.com>',
    to: 'fadilradit23@gmail.com',
    subject: 'Hello From The Other Side',
    html: '<h1>Hello, Its me</h1>'
}

transporter.sendMail(mail, (err, result) => {
    if(err) return console.log(err.message)

    console.log('Alhamdulillah ya berhasil');
    
})