Um chat usando express e socket.io.

Hospedado no Heroku

Acesso pela url:

http://chatmrn.herokuapp.com/
______________________________________________________________________

Utilizei os seguintes sites para me orientar:

http://udgwebdev.com/node-js-para-leigos-explorando-real-time/

http://www.pinceladasdaweb.com.br/blog/2013/03/01/como-fazer-deploy-de-apps-para-o-heroku/

https://github.com/fernandomayer/git-rautu/blob/master/1_comandos-basicos.md


comandos para fazer deploy no heroku:
git add <nome arquivo>
git commit -m "<comentário>"
heroku create <nome do aplicativo> <-- Apenas se não houver aplicativo ainda -->
git push heroku master
heroku open