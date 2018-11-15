const sgMail = require('@sendgrid/mail');
const util = require('./util');

sgMail.setApiKey('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');
//sgMail.setApiKey('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');
 


 let enviarEmail = (pessoa, amigoOculto) => { 
    const msg = {
      to: pessoa.email,
      from: {
          name: 'Amigo oculto',
          email: 'jo_5919@hotmail.com',
        },
      subject: 'Esse e-mail é para o amigo oculto de ' + pessoa.nome,
      html: hmtlMessage(pessoa, amigoOculto)
    };
    
    sgMail.send(msg).then((sent) => {
      console.log(sent);
    }).catch(error => {
      console.error(error.toString());
    });
}

function hmtlMessage(pessoa, amigoOculto) {
  const message = '<h3>Olá ' + pessoa.nome + ',</h3><br>' + 
  'Este e-mail é para o sorteio do amigo oculto do natal de 2018 o nome de quem você tirou encontra-se abaixo deste e-mail.<br>' +
  'O valor deste amigo oculto é de R$ 70,00.' +
  '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>' + 
  'O seu amigo oculto é: ' + amigoOculto.nome + '<br>' +
  'As sugestões de presente dele são: <br>' + util.formatarSugestoes(amigoOculto.sugestoes) + '<br>' +
  'Não se esqueça de guardar esse email para você não esquecer quem você tirou.<br><br>' +
  'Atenciosamente,<br>'+
  'Robô oculto.';

  return message;
}

module.exports = {
    enviarEmail: enviarEmail
}