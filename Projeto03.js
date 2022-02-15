console.clear()
console.log()
const prompt = require ('prompt-sync')()

let loop = " "

// Inicialmente foi criado uma variável loop, apenas para controle do loop dentro do while, porém o usuário não terá a opção de encerrá-lo opcionalmente, somente ao final da história.

let guilhermeExperimental = {
    ale: 0,
    exercicio: 0,
    banheiro: 0,
    ponto: 0,
    faxineiro: 0,
}
let guilherme = {    
    aviao: 0,
    acidente: 0,
    garota: 0.
}

// Foram criados dois objetos com os elementos que funcionam como contadores que determinam o conhecimento acumulado do protagonista ao decorrer da história.

// O primeiro objeto, são os conhecimentos que não interferem diretamente nos rumos únicos da narrativa, na verdade eles estão inseridos apenas para que o usuário experimente a sensação do loop temporal, de uma forma que fique claro que a segunda repetição da história se trate de um recomeço no loop.

// Em contrapartida, o segundo obejto carrega os conhecimentos que definem os conhecimentos que ditam um rumo único e consequentemente um final único a narrativa, dessa forma o usuário escolherá qual rumo ele irá tomar no meio da história.

// Os contadores de conhecimento determinantes para os finais únicos, estão limitados a 5, sendo ele o ápice da história selecionada e o encaminhando para o final. Tal limite foi colocado a fim de evitar que o usuário percorra muitas vezes a história e a narrativa se torne enfadonha.

function horaEncontro(){
    prompt("23:32")
    console.clear()
    console.log()
    prompt(" *** Guilherme e Alê chegam ao ponto de ônibus, mas o pai do Alê aparece repentinamente para levá-lo para casa.*** ")
    console.log()
    prompt(" *** Você precisa tomar uma decisão. ***")
    console.log()
    console.log(" 1 - Dizer ao pai de Alê para pegar outro caminho.")
    console.log(" 2 - Contar ao Alê que ele irá sofrer um acidente.")
    console.log(" 3 - Pedir uma carona para Alê.")
    console.log()
    let paiAle = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")

        if (paiAle = "1"){
            console.clear()
            console.log()
            prompt(" *** O pai de Alê estranha um pouco o conselho mas mesmo assim decide fazer outro caminho de volta para casa. *** ")
            console.clear()
            console.log()
            prompt("23:55")
            console.clear()
            console.log()
            prompt(" *** Guilherme segue seu caminho de casa e quando passa pelo cruzamento observa o mesmo acidente, mas com carros diferentes. ***")
            guilherme.acidente ++
            console.clear()
            console.log()
            prompt("00:00")
            console.clear()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
                        
        }
        else if (paiAle = "2"){
            console.clear()
            console.log()
            prompt(" *** Alê estranha o que Guilherme diz, mas não se importa e vai embora. ***")
            console.clear()
            console.log()
            prompt("23:55")
            console.clear()
            console.log()
            prompt(" *** Guilherme segue seu caminho de casa e quando passa pelo cruzamento vê mais uma vez o carro do pai de Alê se envolvendo no acidente. Guilherme então percebe que deveria ter feito algo diferente.  ***")
            console.clear()
            console.log()
            prompt("00:00")
            console.clear()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
        
        }
        else {
            console.clear()
            console.log()
            prompt("23:55")
            console.clear()
            console.log()
            prompt( " *** Guilherme então pega uma carona com o pai de Alê, e quando estão próximos ao cruzamento do acidente, Guilherme chama atenção do pai do Alê a fim de evitar o acidente, mas isso acaba tirando sua concentração e fazendo com que o outro carro se choque e eles capotem... *** ")
            console.clear()
            console.log()
            prompt("00:00")
            console.clear()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
        }
    

}
function horaAcidente(){
    prompt("23:55")
    console.clear()
    console.log()

        
            prompt(" *** No caminho para casa, Guilherme nota um acidente de carro pela janela do ônibus... *** ")
            console.log()
            prompt( " *** Você precisa fazer algo. ***")
            console.log()
            console.log(" 1 - Tentar enxergar a placa do carro.")
            console.log(" 2 - Ignorar e seguir seu caminho.")            
            console.log()
            let acidente = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")

            if (acidente == "1"){
                console.clear()
                console.log()
                prompt(" *** Você conseguiu enxergar a placa do carro, e confirmou que um dos motoristas do acidente é o pai do Alê *** ")
                guilherme.acidente ++
                console.clear()
                console.log()
                prompt("00:00")
                console.clear()
                console.log()
                prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
            }

            
            else {
                prompt(" *** ... e isso fez com que um trânsito se formasse e atrasasse sua chegada em casa. *** ")
                console.clear()
                console.log()
                prompt(" *** Nada muda e o tempo passa. ***")
                console.clear()
                console.log()
                prompt("00:00")
                console.clear()
                console.log()
                prompt(' *** " Parabéns, é seu aniversário !!! " *** ')   
            }
        
        

}
function horaAposAula2(){
    console.clear()
    console.log()               
    prompt('Professor Gabriel: "Por hoje é só pessoal, podem ir embora e vejo vocês amanhã. Um abraço, turma."')
    console.clear()
    console.log()
    prompt("23:16")
    console.clear()
    console.log()
    prompt(" *** Você precisa pesquisar alguma informação sobre o avião. ***")
    console.log()
    console.log(" 1 - Pesquisar sobre o avião do acidente.")
    console.log(" 2 - Pesquisar sobre a empresa aérea.")
    console.log(" 3 - Não pesquisar nada.")
    console.log()
    let pesquisa1 = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")
    
    if (pesquisa1 == "1"){
    console.clear()
    console.log()
    prompt( " *** Guilherme não encontrou nada de relevante nas pesquisas, seria melhor pesquisar sobre outra coisa. *** ")
    console.log()
    prompt(" *** Você precisa fazer outra pesquisa. ***")
    console.log()                 
    console.log(" 1 - Pesquisar sobre a empresa aérea.")
    console.log(" 2 - Não pesquisar nada.")
    console.log()
    let pesquisa2 = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")
    
        if(pesquisa2 == "1"){
            console.clear()
            console.log()                    
            prompt(" *** Suas pesquisas não levam a nada referente ao acidente, mas descobre que aquela empresa aérea faz vôos somente para Londrina, e com essa informação, Guilherme poderá fazer outras pesquisas.*** ")
            guilherme.aviao ++
            console.clear()
            console.log()
            prompt(" *** Você precisa fazer outra pesquisa. ***")
            console.log()
    console.log(" 1 - Pesquisar sobre o avião do acidente.")
    console.log(" 2 - Pesquisar sobre vôos para Londrina.")
    console.log(" 3 - Não pesquisar nada.")
    console.log()
    let pesquisa3 = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")
            if (pesquisa3 == "1"){
                console.log()
                prompt(" *** Ainda não há nenhuma informação específica sobre o avião. *** ")
                console.clear()
                console.log()
                prompt("23:31")
                console.clear()
                console.log()                    
                prompt(" *** Após passar muito tempo pesquisando, Guilherme percebe que o tempo passou e a tragédia do avião já ocorreu. ")
                console.clear()
                console.log()
                prompt("00:00")
                console.clear()
                console.log()
                prompt(' *** " Parabéns, é seu aniversário !!! " *** ') 
                                
            }
            else if (pesquisa3 == "2"){
                console.log()
                prompt(" *** Guilherme encontra posts de uma youtuber chamada BiaVlogs que diz estar indo para Londrina, e percebe que ela está no mesmo avião do acidente. *** ")
                guilherme.aviao ++                
                console.clear()                
                console.log()
                prompt("23:31")
                console.clear()
                console.log()                    
                prompt(" *** Após passar muito tempo pesquisando, Guilherme percebe que o tempo passou e a tragédia do avião já ocorreu. ")
                console.clear()
                console.log()
                prompt("00:00")
                console.clear()
                console.log()
                prompt(' *** " Parabéns, é seu aniversário !!! " *** ') 
                
            }
            else {
                console.clear()                
                console.log()
                prompt("23:31")
                console.clear()
                console.log()                    
                prompt(" *** Após passar muito tempo pesquisando, Guilherme percebe que o tempo passou e a tragédia do avião já ocorreu. ")
                console.clear()
                console.log()
                prompt("00:00")
                console.clear()
                console.log()
                prompt(' *** " Parabéns, é seu aniversário !!! " *** ') 
                
            }
            
            }
        else {
        console.clear()
        console.log()
        prompt(" *** Aos poucos o tempo passa...")
        console.clear()
        console.log()
        prompt("00:00")
        console.clear()
        console.log()
        prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
        
        }

    }
    else if (pesquisa1 == "2"){                
        console.clear()
        console.log()                    
        prompt(" *** Suas pesquisas não levam a nada referente ao acidente, mas ele descobre que aquela empresa aérea faz vôos somente para Londrina, e com essa informação, Guilherme poderá fazer outras pesquisas.*** ")
        guilherme.aviao++ 
        console.clear()       
        prompt(" *** Você precisa fazer outra pesquisa. ***")
        console.log()
console.log(" 1 - Pesquisar sobre o avião do acidente.")
console.log(" 2 - Pesquisar sobre vôos para Londrina.")
console.log(" 3 - Não pesquisar nada.")
console.log()
let pesquisa4 = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")
        if (pesquisa4 == "1"){
            console.log()
            prompt(" *** Ainda não há nenhuma informação específica sobre o avião. *** ")
            console.clear()
            console.log()
            prompt("23:31")
            console.clear()
            console.log()                    
            prompt(" *** Após passar muito tempo pesquisando, Guilherme percebe que o tempo passou e a tragédia do avião já ocorreu. ")
            console.clear()
            console.log()
            prompt("00:00")
            console.clear()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ') 
                           
        }
        else if (pesquisa4 == "2"){
            console.log()
            prompt(" *** Guilherme encontra posts de uma youtuber chamada BiaVlogs que diz estar indo para Londrina, e percebe que ela está no mesmo avião do acidente. *** ")
            guilherme.aviao ++                
            console.clear()                
            console.log()
            prompt("23:31")
            console.clear()
            console.log()                    
            prompt(" *** Após passar muito tempo pesquisando, Guilherme percebe que o tempo passou e a tragédia do avião já ocorreu. ")
            console.clear()
            console.log()
            prompt("00:00")
            console.clear()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ') 
            
        }
        else {
            console.clear()                
            console.log()
            prompt("23:31")
            console.clear()
            console.log()                    
            prompt(" *** Após passar muito tempo pesquisando, Guilherme percebe que o tempo passou e a tragédia do avião já ocorreu. ")
            console.clear()
            console.log()
            prompt("00:00")
            console.clear()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ') 
            
        }            
    }
    else {
        console.clear()
        console.log()
        prompt(" *** Aos poucos o tempo passa...")
        console.clear()
        console.log()
        prompt("00:00")
        console.clear()
        console.log()
        prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
        
    }       
}
function horaAposAula4(){
    console.clear()
    console.log()               
    prompt('Professor Gabriel: "Por hoje é só pessoal, podem ir embora e vejo vocês amanhã. Um abraço, turma."')
    console.clear()
    console.log()
    prompt("23:16")
    console.clear()
    console.log()
    prompt(" *** Guilherme precisa usar sua informação sobre MelVlogs para tomar uma decisão. *** ")
    console.log()
            console.log(" 1 - Enviar uma mensagem para MelVlogs e falar sobre o avião.")
            console.log(" 2 - Pesquisar sobre MelVlogs.")           
            console.log()
            let melvlogs1 = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")
            
            if ( melvlogs1 == "1"){
            console.clear()
            console.log()
            prompt(" *** Guilherme envia mensagens nas redes sociais de MelVlogs, mas ele sabe que dificilmente ela responderá, então enquanto espera ele decide pesquisar alguma coisa a mais sobre ela. ***")
            console.log()
            prompt( " *** Ao fazer algumas pesquisas em outros posts da Youtuber, Guilherme que ela já viajou outras vezes com essa companhia aérea e talvez ele consiga achar mais algumas coisas se continuar pesquisando. *** ")
            console.clear()
            console.log()
            prompt(" *** Você precisa tomar outra decisão. ***")
            console.log()
            console.log(" 1 - Esperar MelVlogs ver a mensagem que você enviou.")
            console.log(" 2 - Pesquisar mais entre os posts de MelVlogs.")           
            console.log()
            let melvlogs2 = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")
                if ( melvlogs2 == "1"){
                    console.clear()
                    console.log()
                    prompt("23:31")
                    console.clear()
                    console.log()
                    prompt( " *** Enquanto Guilherme espera por alguma resposta a sua mensagem, o tempo passa e a tragédia do avião não é impedida.")
                    console.clear()
                    console.log()
                    prompt("00:00")
                    console.clear()
                    console.log()
                    prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
                    
                } 
                else {
                    console.clear()
                    console.log()
                    prompt("23:31")
                    console.clear()
                    console.log()
                    prompt( " *** Ao continuar pesquisando entre os posts, Guilherme descobre um telefone para tentar entrar em contato diretamente com a companhia aérea, mas o tempo passou e o avião caiu mesmo assim. *** ")
                    guilherme.aviao ++
                    console.clear()
                    console.log()
                    prompt("00:00")
                    console.clear()
                    console.log()
                    prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
                                                        
                }
            }         
            else {
                console.clear()
                console.log()
                prompt("23:31")
                console.clear()
                console.log()
                prompt( " *** Ao continuar pesquisando entre os posts, Guilherme descobre um telefone para tentar entrar em contato diretamente com a companhia aérea, mas o tempo passou e o avião caiu mesmo assim. *** ")
                guilherme.aviao ++
                console.clear()
                console.log()
                prompt("00:00")
                console.clear()
                console.log()
                prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
                    
            }                      
}
function horaAposAula5(){
    console.clear()
    console.log()               
    prompt('Professor Gabriel: "Por hoje é só pessoal, podem ir embora e vejo vocês amanhã. Um abraço, turma."')
    console.clear()
    console.log()
    prompt("23:16")
    console.clear()
    console.log()
    prompt( " *** Chegou a hora de Guilherme usar o que sabe e fazer uma ligação. *** ")
    console.log()
            console.log(" 1 - Ligar para a companhia aérea e dizer que o avião possui uma falha e irá cair.")
            console.log(" 2 - Ligar para a polícia e informar o acidente.")           
            console.log()
            let ligaçao1 = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")

            if (ligaçao1 == "1"){
                console.clear()
                console.log()
                prompt( ' Atendente da companhia aérea: " Companhia aérea L-Stars, em que posso ajudar? " ')
                console.log()
                prompt(' Guilherme: " Boa noite, eu queria informar um problema em um de seus aviões... "')
                console.log()
                prompt( ' Atendente: " Ok, senhor, vou estar transferindo o senhor para o setor de reclamações e serviço ao cliente, aguarde na linha só um instante. "')
                console.log
                prompt(' Guilherme: " Espera, você não entendeu, tem um problema no avião de vocês. "')
                console.clear()
                console.log()
                prompt( " *** Mas antes que Guilherme terminasse de falar, uma musiquinha de ligação de espera começa a tocar, então Guilherme percebe que deverá fazer outra ligação, mas dessa vez ele precisa chamar a atenção de alguém de outra forma. *** ")
                console.log()
            console.log(" 1 - Dizer para a companhia que tem uma bomba no avião.")
            console.log(" 2 - Dizer para a polícia que há um terrorista no avião.")           
            console.log()
            let ligaçao2 = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")

                if (ligaçao2 == "1"){
                    console.clear()
                    console.log()
                    prompt( ' Atendente da companhia aérea: " Companhia aérea L-Stars, em que posso ajudar? " ')
                    console.log()
                    prompt(' Guilherme: " Tem uma bomba no avião. !!!  "')
                    console.log()
                    prompt(' Atendente: " Como é, senhor? Essa é uma acusação muito séria. "')
                    console.log()
                    prompt(' Guilherme: " Eu vi um cara deixando uma maleta suspeita no avião LD-1502 e logo em seguida indo embora, vocês deveriam conferir. "')
                    console.clear()
                    console.log()
                    prompt(" *** Guilherme então consegue a atenção da companhia aérea e eles decidem fazer um último check-up antes da decolagem. *** ")
                    console.log()
                    prompt(" *** Enquanto a equipe de segurança procurava por uma maleta suspeita, eles encontraram um problema no motor do avião e suspenderam sua decolagem. *** ")
                    console.clear()
                    console.log()
                    prompt("23:35")
                    console.clear()
                    console.log()
                    prompt(" *** - Passados alguns minutos, Guilherme ouve a conversa de duas pessoas que estavam no ponto de ônibus...*** ")
                    console.log()
                    prompt(' ??? : " Nossa, você viu o que a BiaVlogs postou? Ela disse que vai processar uma empresa aérea porque atrasaram o seu vou pra Londrina. " ')
                    console.log()
                    prompt(" *** Com esse diálogo, Guilherme percebe que seu plano funcionou e evitou a tragédia de avião. *** ")
                    console.clear()
                    console.log()
                    prompt("00:00")
                    console.clear()
                    console.log()
                    prompt(" *** O tempo passa e não acontece nenhum acidente, até que a notificação surge... ")
                    console.log()
                    console.log()
                    prompt(' *** " Parabéns, é seu aniversário !!! " *** ')                      
                }
                else {
                    console.clear()
                    console.log()
                    prompt(' Atendente da polícia: " Número de emergência, boa noite, por favor informe seu nome e a ocorrência. " ')
                    console.log()
                    prompt( ' Guilherme: " Tem um terrorista no aeroporto " !!!')
                    console.log()
                    prompt( ' Atendente: " Senhor, isso é algum tipo de brincadeira? Passar trotes para a polícia é crime grave. " ')
                    console.log()
                    prompt(' Guilherme: " Eu vi um homem suspeito carregando uma maleta no avião LD-1502, e depois de alguns segundos ele saiu de lá sem a maleta.')
                    console.clear()
                    console.log()
                    prompt( " *** A equipe de polícia decide informar a equipe de segurança do aeroporto só para averiguar a ocorrência")
                    console.log()
                    prompt(" *** Enquanto a equipe de segurança procurava por uma maleta suspeita, eles encontraram um problema no motor do avião e suspenderam sua decolagem. *** ")
                    console.clear()
                    console.log()
                    prompt("23:35")
                    console.clear()
                    console.log()
                    prompt(" *** - Passados alguns minutos, Guilherme ouve a conversa de duas pessoas que estavam no ponto de ônibus...*** ")
                    console.log()
                    prompt(' ??? : " Nossa, você viu o que a BiaVlogs postou? Ela disse que vai processar uma empresa aérea porque atrasaram o seu vou pra Londrina. " ')
                    console.log()
                    prompt(" *** Com esse diálogo, Guilherme percebe que seu plano funcionou e evitou a tragédia de avião. *** ")
                    console.clear()
                    console.log()
                    prompt("00:00")
                    console.clear()
                    console.log()
                    prompt(" *** O tempo passa e não acontece nenhum acidente, até que a notificação surge... ")
                    console.log()
                    console.log()
                    prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
        
                }
            }
            else {
                console.clear()
                console.log()
                prompt(' Atendente da polícia: " Número de emergência, boa noite, por favor informe seu nome e a ocorrência. " ')
                console.log()
                prompt(' Guilherme: " Boa noite, eu queria informar um problema em um dos aviões da companhia aérea L-Stars, parece que... "')
                console.log()
                prompt( ' Atendente: " Aqui não cuidamos de setores de reclamações de companhia aérea, senhor. Vou estar transferindo o senhor para um setor de reclamações específicos, aguarde só um momento na linha."')                           
                console.clear()
                console.log()
                prompt( " *** Mas antes que Guilherme terminasse de falar, uma musiquinha de ligação de espera começa a tocar, então Guilherme percebe que deverá fazer outra ligação, mas dessa vez ele precisa chamar a atenção de alguém de outra forma. *** ")
                console.log()
            console.log(" 1 - Dizer para a companhia que tem uma bomba no avião.")
            console.log(" 2 - Dizer para a polícia que há um terrorista no avião.")           
            console.log()
            let ligaçao3 = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")

                if (ligaçao3 == "1"){
                    console.clear()
                    console.log()
                    prompt( ' Atendente da companhia aérea: " Companhia aérea L-Stars, em que posso ajudar? " ')
                    console.log()
                    prompt(' Guilherme: " Tem uma bomba no avião. !!!  "')
                    console.log()
                    prompt(' Atendente: " Como é, senhor? Essa é uma acusação muito séria. "')
                    console.log()
                    prompt(' Guilherme: " Eu vi um cara deixando uma maleta suspeita no avião LD-1502 e logo em seguida indo embora, vocês deveriam conferir. "')
                    console.clear()
                    console.log()
                    prompt(" *** Guilherme então consegue a atenção da companhia aérea e eles decidem fazer um último check-up antes da decolagem. *** ")
                    console.log()
                    prompt(" *** Enquanto a equipe de segurança procurava por uma maleta suspeita, eles encontraram um problema no motor do avião e suspenderam sua decolagem. *** ")
                    console.clear()
                    console.log()
                    prompt("23:35")
                    console.clear()
                    console.log()
                    prompt(" *** - Passados alguns minutos, Guilherme ouve a conversa de duas pessoas que estavam no ponto de ônibus...*** ")
                    console.log()
                    prompt(' ??? : " Nossa, você viu o que a BiaVlogs postou? Ela disse que vai processar uma empresa aérea porque atrasaram o seu vou pra Londrina. " ')
                    console.log()
                    prompt(" *** Com esse diálogo, Guilherme percebe que seu plano funcionou e evitou a tragédia de avião. *** ")
                    console.clear()
                    console.log()
                    prompt("00:00")
                    console.clear()
                    console.log()
                    prompt(" *** O tempo passa e não acontece nenhum acidente, até que a notificação surge... ")
                    console.log()
                    console.log()
                    prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
                }
                else {
                    console.clear()
                    console.log()
                    prompt(' Atendente da polícia: " Número de emergência, boa noite, por favor informe seu nome e a ocorrência. " ')
                    console.log()
                    prompt( ' Guilherme: " Tem um terrorista no aeroporto " !!!')
                    console.log()
                    prompt( ' Atendente: " Senhor, isso é algum tipo de brincadeira? Passar trotes para a polícia é crime grave. " ')
                    console.log()
                    prompt(' Guilherme: " Eu vi um homem suspeito carregando uma maleta no avião LD-1502, e depois de alguns segundos ele saiu de lá sem a maleta.')
                    console.clear()
                    console.log()
                    prompt( " *** A equipe de polícia decide informar a equipe de segurança do aeroporto só para averiguar a ocorrência")
                    console.log()
                    prompt(" *** Enquanto a equipe de segurança procurava por uma maleta suspeita, eles encontraram um problema no motor do avião e suspenderam sua decolagem. *** ")
                    console.clear()
                    console.log()
                    prompt("23:35")
                    console.clear()
                    console.log()
                    prompt(" *** - Passados alguns minutos, Guilherme ouve a conversa de duas pessoas que estavam no ponto de ônibus...*** ")
                    console.log()
                    prompt(' ??? : " Nossa, você viu o que a BiaVlogs postou? Ela disse que vai processar uma empresa aérea porque atrasaram o seu vou pra Londrina. " ')
                    console.log()
                    prompt(" *** Com esse diálogo, Guilherme percebe que seu plano funcionou e evitou a tragédia de avião. *** ")
                    console.clear()
                    console.log()
                    prompt("00:00")
                    console.clear()
                    console.log()
                    prompt(" *** O tempo passa e não acontece nenhum acidente, até que a notificação surge... ")
                    console.log()
                    console.log()
                    prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
        
                }

            }
}
function encontroMelissa1(){
    console.clear()
    console.log()
    prompt("23:40")
        console.clear()
        console.log()
        prompt(" *** Guilherme está a sós com Melissa e você precisa tomar uma decisão. ***")
        console.log()
        console.log(" 1 - Se apresentar novamente.")
        console.log(" 2 - Puxar assunto com a Melissa.")
        console.log(" 3 - Dizer que sabe qual ônibus ela irá pegar.")
        console.log()
        let conversaMelissa1 = prompt(" *** Escolha uma das opções anteriores pelo número. *** ")
        
        if (conversaMelissa1 == "1"){
            console.clear()
            console.log()
            prompt(" *** Guilherme puxa assunto e Melissa diz a ele seu nome novamente e nada mais de relevante acontece até ela ir embora e então o tempo passa *** " )
            console.clear()
            console.log()
            prompt("00:00")
            console.clear()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
        }
        else if (conversaMelissa1 == "2"){
            console.clear()
            console.log()
            prompt(' Guilherme: " Ei, Melissa... "')
            console.log()
            prompt(' Melissa: " Oi? Como você sabe o meu nome? "')
            console.log()
            console.log(" 1 - Dizer que está preso em um loop temporal. ")            
            console.log(" 2 - Dizer que ouviu outra pessoa chama-lá pelo nome.")           
            console.log()
            let conversaMelissa2 = prompt(" *** Escolha uma das opções anteriores pelo número. *** ")

            if ( conversaMelissa2 == "1"){
                console.clear()
                console.log()
                prompt(' Guilherme: " Eu estou preso em um loop temporal,  estou vivendo os mesmos 53 minutos  repetidamente e você me disse seu nome em outra repetição. "')
                console.log()
                prompt( ' Melissa: " Tá, isso é bem doido, mas vai ter que me falar mais que só o meu nome para me convencer. " ')
                guilherme.garota ++
                console.log()
                prompt( " *** Melissa fica intrigada pelo que Guilherme diz mas logo seu ônibus chega e ela precisa ir. *** ")
                console.clear()
                console.log()
                prompt("00:00")
                console.clear()
                console.log()
                prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
            }
            else {
                console.log()
                prompt(' Guilherme: " Ah, é que eu vi outra pessoa te chamando antes. "')
                console.log()
                prompt(' Melissa: " Ata, é que seria bem doido se você dissesse que veio do futuro ou alguma coisa parecida, aquele ali é meu ônibus, a gente se fala amanhã. "')
                guilherme.garota ++
                console.log()
                prompt(" *** Então o ônibus de Melissa chega e ela precisa ir, mas Guilherme percebe que ela se interessaria em uma conversa sobre o loop temporal. ***")
                console.clear()
                console.log()
                prompt("00:00")
                console.clear()
                console.log()
                prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
            }

        }
        else {
            console.clear()
            console.log()
            prompt (" *** Guilherme diz que sabe qual ônibus a Melissa irá pegar para ir pra casa, mas isso acaba assustando-a fazendo ela se afastar dele indo até outro ponto de ônibus e ameaçando chamar a polícia, então ele percebe que deveria ter dito outra coisa... *** ")
            console.clear()
            console.log()
            prompt("00:00")
            console.clear()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
        }

}
function encontroMelissa2(){
    console.clear()
    console.log()
    prompt("23:40")
        console.clear()
        console.log()
        prompt(" *** Guilherme está a sós com Melissa e você precisa tomar uma decisão. ***")
        console.log()
        console.log(" 1 - Chamar a Melissa e dizer suas palavras para impressioná-la.")
        console.log(" 2 - Se apresentar a Melissa e dizer que tem algo importante a dizer a ela.")
        console.log(" 3 - Desistir de Falar com a Melissa.")
        console.log()
        let assuntoMelissa1 = prompt(" *** Escolha uma das opções anteriores pelo número. *** ")

        if (assuntoMelissa1 == "1"){
            console.clear()
            console.log()
            prompt(' Guilherme: " Ei, Melissa. "')
            console.log()
            console.log(' Melissa: " Oi? Como você sabe o meu nome? "')
            console.log(' Guilherme: " Oi? Como você sabe o meu nome? "')
            guilherme.garota ++
            console.log()
            prompt( " *** Ambos falam ao mesmo tempo e Melissa fica impressionada com aquilo e pergunta sobre como Guilherme fez aquilo. *** ")
            console.clear()
            console.log()
            prompt(' Guilherme: " Eu sei que vai parecer estranho, mas eu meio que estou preso em loop temporal e fico repetindo os mesmos 53 minutos todas as vezes, e você já me disse que ficaria interessada em conversar sobre isso comigo. "')
            console.log()
            prompt(' Melissa: " Tem razão, eu realmente fiquei impressionada com isso, mas meu ônibus está chegando e eu preciso ir, mas faz assim, você vai repetir os 53 minutos certo? Hoje eu sai às 23:10 da aula, me encontra nesse horário na porta da minha sala pra gente poder conversar mais. Ah, e pra você me convencer facilmente, diga que eu sou alérgica a morango, não contei isso pra ninguém ainda. "')            
            console.log()           
            prompt(" *** Guilherme agora sabe onde encontrar a Melissa para poder conversar com ela por mais tempo e está pronto para a próxima repetição. *** " )
            console.clear()
            console.log()
            prompt("00:00")
            console.clear()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
            


        }
        else if (assuntoMelissa1 == "2"){
            console.clear()
            console.log()
            prompt(' Guilherme: " Oi, eu me chamo Guilherme, prazer. "')
            console.log()
            prompt(' Melissa: Meu nome é Melissa, prazer. "')
            console.log()
            prompt(' Guilherme: " Eu sei que vai parecer estranho, mas eu meio que estou preso em loop temporal e fico repetindo os mesmos 53 minutos todas as vezes, e você já me disse que ficaria interessada em conversar sobre isso comigo. "')
            console.log()
            prompt(' Melissa: " Tem razão, eu realmente fiquei impressionada com isso, mas meu ônibus está chegando e eu preciso ir, mas faz assim, você vai repetir os 53 minutos certo? Hoje eu sai às 23:10 da aula, me encontra nesse horário na porta da minha sala pra gente poder conversar mais. Ah, e pra você me convencer facilmente, diga que eu sou alérgica a morango, não contei isso pra ninguém ainda. "')  
            guilherme.garota ++          
            console.log()           
            prompt(" *** Guilherme agora sabe onde encontrar a Melissa para poder conversar com ela por mais tempo e está pronto para a próxima repetição. *** " )
            console.clear()
            console.log()
            prompt("00:00")
            console.clear()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
        }
        else {
            console.clear()
            console.log()
            guilherme.garota - 3
            prompt(" *** Guilherme desiste de tentar conversar com a Melissa e esquece de tudo que aconteceu.")
            console.clear()
            console.log()
            prompt("00:00")
            console.clear()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
        }

}
function encontroMelissa3(){
    console.clear()
    console.log()
    prompt("23:10")
    console.clear()
    console.log()
    prompt(" *** Guilherm encontra Melissa na porta da sala dela e chama sua atenção. ***")
    console.log()
    prompt(' Guilherme: " Ei, Melissa, preciso falar com você. "')
    console.log()
    prompt(' Melissa: " Como você sabe o meu nome? "')
    console.log()
    prompt(' Guilherme: " Eu estou preso em um loop temporal, e você me disse pra te encontrar aqui, e pra te convencer da minha história eu tinha que dizer que você é alérgica a morango. " ')
    console.log()
    prompt(' Melissa: " Uau, como você sabe disso? Acho que você conseguiu me convencer. "')
    console.clear()
    console.log()
    prompt(" *** Guilherme e Melissa então passam o resto do tempo conversando até o final dos 53 minutos. *** ")
    console.clear()
    console.log()
    prompt("00:00")
    console.clear()
    console.log()
    prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
        
}

// Pensando no critério de evitar repetições desnecessárias, as funções foram criadas a fim de permitir que o usuário salte para os momentos chaves da sua vertente sem precisar percorrer a história toda novamente.

    
while (loop != "53 minutos."){

        console.clear()
        prompt(" 53 Minutos.")
        console.clear()
        prompt("23:07")
        console.clear()

        prompt("*** Guilherme estava debruçado na cadeira do curso e de repente sente alguém cutucando suas costas. ***")
        console.log()
        if (guilhermeExperimental.ale == 0) {
            console.log()
            prompt('???? : "Ei, cara, o professor tá terminando de fazer o exercício, melhor prestar atenção."')
        }
    
        else {
            console.log()
            prompt('Alê : "Ei, cara, o professor tá terminando de fazer o exercício, melhor prestar atenção. "')
        }        

        if (guilherme.acidente == 2){
            console.log()
            let avançarAcidente = prompt(" Deseja avançar a história até o momento do acidente? s ou n ")

            if (avançarAcidente == "s"){
                horaAcidente()
            continue
            }
        }

        if (guilherme.acidente == 3){
            console.log()
            let avançarEncontro = prompt(" Deseja avançar a história até o momento do encontro com o pai do Alê")
        
            if(avançarEncontro == "s"){
                horaEncontro()
            continue
            }
        }

        if (guilherme.acidente == 4){
            console.clear()
            console.log()
            prompt(" *** Guilherme percebe que o acidente é inevitável, seja com Alê ou com outra pessoa. Então ele precisa pensar em outra alternativa para evitar o acidente. ***")
            console.log()
            console.log(" 1 - Ir correndo até o local do acidente.")
            console.log(" 2 - Pensar em uma maneira de chegar ao local do acidente o mais rápido possível.")
            console.log(" 3 - Esquecer completamente a história do acidente.")
            console.log()
            let finalAle = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")

            if (finalAle == "1"){
                console.clear()
                console.log()
                prompt(" *** Guilherme tenta sair correndo da sala de aula até o local do acidente.")
                console.clear()
                console.log()
                prompt("23:51")
                console.clear()
                console.log()
                prompt(" *** Quando Guilherme está próximo ao cruzamento, ele escuta um barulho muito alto e vê os carros se chocando. O local do cruzamento é muito longe para Guilherme chegar até lá a tempo, seria melhor pensar em alguma forma de poupar tempo e chegar mais rápido ao local. *** ")
                guilherme.acidente ++
                console.clear()
                console.log()
                prompt("00:00")
                console.clear()
                console.log()
                prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
            }
            else if (finalAle == "2"){                
                console.clear()
                console.log()
                prompt("23:59")
                console.clear()
                console.log()
                prompt(" *** Guilherme passa seu tempo prestando atenção em qualquer detalhe que o fizesse ser mais rápido, até que se lembra que poderia ser mais rápido se encontrasse com o pai do Alê na porta do curso, e não no ponto como das outras vezes.*** ")
                guilherme.acidente ++
                console.clear()
                console.log()
                prompt("00:00")
                console.clear()
                console.log()
                prompt(' *** " Parabéns, é seu aniversário !!! " *** ')

            }
            else {
                prompt(" *** Guilherme então desiste de tentar ajudar o Alê e faz o possível para se esquecer desse fato. ***")
                guilherme.acidente -4
            }
            continue


        }

        if (guilherme.acidente == 5){
            console.clear()
            console.log()
            prompt(" *** Mais confiante do que em qualquer outra tentativa, agora Guilherme sabe o que fazer.***")
        }

        if(guilherme.aviao == 2){
            console.log()
            prompt(" *** Sabendo o número do avião, Guilherme pode pesquisar para ver se encontra algo no celular, mas só poderá mexer no celular após a aula. ***")
            console.log()
            let aposAula2 = prompt(" *** Deseja avançar para depois da aula? s ou n. ***")
            
            if (aposAula2 == "s"){
                horaAposAula2()
                continue            
            }
        }

        if(guilherme.aviao == 4){
        console.log()
        prompt( " *** Guilherme tem o conhecimento de uma passageira do avião e precisa decidir o que fazer. *** ")
        console.log()
            let aposAula4 = prompt(" *** Deseja avançar para depois da aula? s ou n. ***")
            
            if (aposAula4 == "s"){
                horaAposAula4()
                continue            
            }
        }

        if (guilherme.aviao == 5){
            console.log()
            prompt( " *** Com as informações que tem, é hora de Guilherme tomar as decisões certas para impedir que o avião decole. *** ")
            console.log()
            let aposAula5 = prompt(" *** Deseja avançar para depois da aula? s ou n. ***")

            if (aposAula5 == "s"){
                horaAposAula5()
                break
            }

        }

        if (guilherme.garota == 2){
            console.clear()
            console.log()
            prompt( " *** Guilherme agora sabe o nome da garota e percebe que o tempo que teve com ela foi muito curto, então você terá que escolher uma alternativa.")
            console.log()
            console.log(" 1 - Sair da aula e esperar a Melissa na porta do curso.")
            console.log(" 2 - Avançar ao momento onde fica a sós com a garota no ponto.")
            console.log(" 3 - Não fazer nada. ")
            console.log()
            let melissa1 = prompt(" *** Escolha uma das alternativas anteriores pelo número. *** ")

            if ( melissa1 == "1"){
                console.clear()
                console.log()
                prompt("23:19")
                console.clear()
                console.log()
                prompt(" *** Guilherme espera na porta do curso e observa diversos alunos, mas a Melissa não aparece, você terá que tomar outra decisão. *** ")
                console.log()
            console.log(" 1 - Continuar esperando.")
            console.log(" 2 - Perguntar a algum aluno na porta do curso se conhecem a Melissa.")            
            console.log()
            let melissa2 = prompt(" *** Escolha uma das alternativas anteriores pelo número. *** ")
                
                if ( melissa2 == "1"){
                    console.clear()
                    console.log()
                    prompt(" *** Guilherme continua esperando mas Melissa não aparece e então o tempo passa.")
                    console.clear()
                    console.log()
                    prompt("00:00")
                    console.clear()
                    console.log()
                    prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
                    continue
                }
                else {
                    console.clear()
                    console.log()
                    prompt( " *** Guilherme pergunta para os alunos na porta do curso se algum deles conhece a Melissa e um deles diz que a turma dela foi liberada antes e ela saiu mais cedo hoje. *** ")
                    console.clear()
                    console.log()
                    prompt(" 23:45")
                    prompt(" *** Guilherme decide ir até o ponto, mas ao chegar, percebe que Melissa já foi embora, e então o tempo passa.")
                    console.clear()
                    console.log()
                    prompt("00:00")
                    console.clear()
                    console.log()
                    prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
                    continue        
                }
                
            }
            else if( melissa1 == "2"){
                encontroMelissa1()
                continue
            }
            else {
                guilherme.garota -2
            }     
        }

        if (guilherme.garota == 3){
            console.clear()
            console.log()
            prompt( " *** Guilherme agora sabe que Melissa se interessaria em uma conversa sobre o loop temporal***")
            console.log()
            let melissa2 = prompt(" Deseja avançar até o momento do encontro com a Melissa? s ou n ")

            if (melissa2 == "s"){
                encontroMelissa2()
                continue
            }
        }

        if (guilherme.garota == 4){
            console.clear()
            console.log()
            prompt( " *** Guilherme agora sabe onde encontrar a Melissa para poder conversar com ela por mais tempo. ***")
            console.log()
            let melissa3 = prompt(" Deseja encontrar a Melissa na porta da sala dela? s ou n ")

            if (melissa3 == "s"){
                encontroMelissa3()
                continue
            }           
        }

        if (guilherme.garota == 5){
            console.clear()
            console.log()
            prompt("23:59")
            prompt(" *** Guilherme então repete o mesmo ciclo com a Melissa vária e várias vezes, em cada repetição ele conhece ela melhor e conversam sobre diversas coisas até o final dos 53 minutos, até que Guilherme se irrita ao perceber que não consegue sair do loop e resolve se declarar a Melissa de uma vez por todas.")
            console.log()
            prompt(' Guilherme: " Eu acho que você não vai entender, porque pra você nós só passamos alguns minutos juntos, mas pra mim, foi muito mais que isso, eu passei vários dias com você, já conversamos sobre milhares de coisa e cada vez que eu repito eu sinto mais vontade de ficar com você e esse loop não termina nunca, eu já não sei mais o que fazer, mas dessa vez eu preciso te dizer algo antes de encerrar. Eu te amo, Melissa, e a coisa que eu mais queria no mundo, era poder viver um outro dia com você.  ')
            console.log()
            console.log()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
            break
        }
        
        console.log()
        prompt('Guilherme: "Ah, valeu, acho que acabei pegando no sono aqui."')
        console.log()
        prompt('Alê: "Beleza, aliás, eu sou o Alê, prazer."')
        guilhermeExperimental.ale ++
        
        console.log()
        prompt('Guilherme: "Eu me chamo Guilherme, prazer"')
        console.log()
        prompt('Professor Gabriel: "Vamos lá pessoal, só mais alguns minutinhos para terminarem o exercício que passei e aí eu já libero vocês.')
        console.clear()
        prompt("23:15")
        console.log()

        if (guilhermeExperimental.exercicio == 0){
            prompt('Professor Gabriel: " A resposta pro exercício 4. é basicamente dar um .push na lista vazia, pronto, com isso vocês matam o exercício. "')                               
                console.log()
                prompt('Alê: " Parece tão simples quando ele fala né !? "')
                console.log()
                prompt('Guilherme: " Pois é, quando sou eu fazendo, é um desastre. "')
        }

        else if (guilhermeExperimental.exercicio >> 0){
            prompt('Professor Gabriel: " A resposta pro exercício 4. é ... "')
            console.log()
        

            let r1 = prompt(" Deseja dar a resposta antes que o professor termine de falar? s ou n: ")

            if (r1 == "s"){
                console.log()
                prompt(' Guilherme: " É só dar um .push que mata o exercício. "')
                console.log()
                prompt(' Professor Gabriel: " Uau, tirou as palavras da minha boca, esse aí tá estudando em casa, hein. "')

            }
             else {
                prompt('Professor Gabriel: " A resposta pro exercício 4. é basicamente dar um .push na lista vazia, pronto, com isso vocês matam o exercício. "')
                           
                console.log()
                prompt('Alê: " Parece tão simples quando ele fala né !? "')
                console.log()
                prompt('Guilherme: " Pois é, quando sou eu fazendo, é um desastre. "')
            }
        } 
          
           
                
        guilhermeExperimental.exercicio ++
        console.log()
        prompt('Professor Gabriel: " Por hoje é só pessoal, podem ir embora e vejo vocês amanhã. Um abraço, turma. "')
        console.clear()
        console.log()
        prompt("23:16")
        console.clear()
        prompt("*** Fim da aula, Guilherme decide ir ao banheiro para lavar o rosto antes de ir embora.***")
        console.log()
        prompt("*** Chegando no banheiro, uma conversa entre dois amigos chama sua atenção.")
        console.log()
        prompt(' ???: "Eu devo ter comido alguma coisa estragada, meu estômago tá doendo muito."')

        if (guilhermeExperimental.banheiro == 0){
            console.log()
            prompt(' ???: "Minha vó fazia um chá de boldo que resolvia de tudo, cara."')
            console.log()
        }

        else if (guilhermeExperimental.banheiro >> 0){
            console.log()
            let r2 = prompt(" Deseja falar sobre o chá antes que a outra pessoa? s ou n: ")
            if (r2 == "s"){
                console.log()
                prompt(' Guilherme: "Chá de boldo resolve de tudo."')
                console.log()
                prompt(' ???: "Caramba, falou igualzinho a minha vó."')
            }
         else {
            console.log()
            prompt(' ???: "Minha vó fazia um chá de boldo que resolvia de tudo, cara."')
            console.log()
         }
        
        }
           
        guilhermeExperimental.banheiro ++



        console.clear()
        console.log()

        prompt("23:21")
        console.clear()
        console.log()       
        prompt("*** Ao sair do banheiro, Guilherme vai em direção a porta de saída, e encontra Alê no caminho.***")

        if (guilhermeExperimental.ponto > 0){
            console.log()
            prompt('Guilherme: " Você vai até o ponto na outra rua, né? "')
            console.log()
            prompt('Alê: " Nossa, eu ia te perguntar a mesma coisa. " ')            
        }

        else {
        console.log()
        prompt(' Alê: "Você vai até o ponto na outra rua?".')
        console.log()
        prompt(' Guilherme: "Vou sim, você também vai? Vamos juntos até lá."')
        
        guilhermeExperimental.ponto ++

        }    

        if (guilhermeExperimental.faxineiro > 0){
            console.clear()
            prompt(" *** No caminho para saída, havia um faxineiro passando pano no chão... *** ")
            console.log()
            let r3 = prompt(" Deseja avisar o faxineiro sobre a placa de chão molhado? s ou n:")

            if ( r3 == "s"){
                console.clear()
                prompt('Guilherme: " Senhor, melhor colocar uma placa de chão molhado. "')
                console.log()
                prompt('Faxineiro: "Opa, é verdade, já ia me esquecendo, obrigado."')
                console.log()
                prompt(" *** Logo em seguida, um aluno passa correndo pelo corredor mas percebe a placa e isso impede que ele caia.")

            
            }

            else {
                console.log()
                prompt(" *** ... um aluno que não percebe isso, resolve correr para a saída e acaba escorregando próximo a Guilherme.***")
                console.log()
                prompt(' Faxineiro: "Meu Deus do céu, me desculpa, eu esqueci de colocar a placa de chão molhado."')
            }
        }       
        
        if (guilhermeExperimental.faxineiro == 0){
        console.clear()
        console.log()
        prompt(" *** No caminho para saída, havia um faxineiro passando pano no chão, um aluno que não percebe isso, resolve correr para a saída e acaba escorregando próximo a Guilherme.***")        
        console.log()
        prompt(' Faxineiro: "Meu Deus do céu, me desculpa, eu esqueci de colocar a placa de chão molhado."')
        guilhermeExperimental.faxineiro ++
        }

        if (guilherme.acidente == 5){
            console.clear()
            console.log()
            prompt("23:30")
            console.clear()        
            console.log()
            prompt( " *** Guilherme diz a Alê que esqueceu algo na sala de aula, só para tentar dar tempo dele e Alê saírem e encontrarem o pai de Alê na porta. ***")
            console.log()
            prompt( " *** A ideia de Guilherme funciona e ao saírem do curso, o pai de Alê estava lá e Guilherme consegue uma carona.")
            console.clear()
            console.log()
            prompt("23:37")
            console.clear()
            console.log()
            prompt(" *** Ao chegarem no cruzamento, Guilherme pede para o pai de Alê para que ele o deixe ali, então ele resolve pegar alguma coisa na rua para tentar sinalizar o farol quebrado e evitar o acidente.")
            console.clear()
            console.log()
            prompt("23:51")
            console.clear()
            console.log()
            prompt(" *** Guilherme resolve então esperar no local para se certificar que o acidente não aconteceria. *** ")
            console.clear()
            console.log()
            prompt("00:00")
            console.clear()
            console.log()
            prompt(" *** O tempo passa e não acontece nenhum acidente, até que a notificação surge... ")
            console.log()
            console.log()
            prompt(' *** " Parabéns, é seu aniversário !!! " *** ')            
            break
        }



        console.clear()
        console.log()
        prompt("23:32")
        console.clear()
        console.log()
        prompt(" *** Guilherme e Alê chegam ao ponto de ônibus, mas o pai do Alê aparece repentinamente para levá-lo para casa.*** ")

        if (guilherme.acidente == 1){
            console.log()
            prompt(" *** Nesse momento, Guilherme tem a sensação de reconhecer o carro do pai de Alê ***")
        }
        else {
        console.log()
        prompt('Pai de Alê: "Estava aqui perto e resolvi te buscar, te mandei mensagem avisando que ia te esperar na porta do curso, como você não respondeu resolvi vir te buscar no ponto."')
        console.log()
        prompt(' Alê:"A bateria do meu celular acabou. Então eu já vou indo, Gui, até amanhã".')
        }

        console.log()
        prompt(" *** Após se despedir, Guilherme para no ponto para aguardar o seu ônibus. Em meio a algumas pessoas no ponto, Guilherme tem sua atenção tomada por uma garota. ")

        if (guilherme.garota == 1){
            console.log()
            prompt(" *** Guilherme sabe o momento que o ônibus da garota chegará, então você tem que tomar uma decisão. *** ")
            console.log()
                console.log(" 1 - Falar com a garota. ")             
                console.log(" 2 - Esperar as pessoas saírem no próximo ônibus para falar com ela. ")
                console.log(" 3 - Não fazer nada. ")
                console.log()
                console.log( " OBS: Se escolher conversar com a garota, a história de Guilherme tomará um rumo diferente e terá um final único. ")
                let garota = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")

                if ( garota == "1"){
                    console.clear()
                    console.log()
                    prompt(" *** Guilherme decide ir falar com a garota, mas ao tentar passar por aquelas pessoas acaba tropeçando e caindo bem em seus pés e ela o ajuda a levantar. *** ")
                    console.log()
                    prompt(' Garota: " Deixa que eu te ajudo, você se machucou? "')
                    console.log()
                    prompt(' Guilherme: " Não foi nada, só tropecei, me desculpe por esbarrar em você. "')
                    console.log()
                    prompt( ' Melissa: " Não foi nada, aliás eu me chamo Melissa, prazer. "')
                    console.log()
                    guilherme.garota ++
                    prompt(' Guilherme: " Meu nome é Guilherme, prazer. "')
                    console.clear()
                    console.log()
                    prompt(" *** Apesar de se apresentar, Guilherme fica envergonhado e não continua a conversa com Melissa, e então o tempo passa e o ônibus dela chega. *** ")
                    console.clear()
                    console.log()
                    prompt("00:00")
                    console.clear()
                    console.log()
                    prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
                    continue                                        
                }
                else if (garota == "2") {
                prompt("23:40")
                console.clear()
                console.log()
                prompt(" *** Passados alguns minutos no ponto de ônibus, todos com exceção de Guilherme e a garota já haviam ido embora")
                console.clear()
                console.log()
                prompt( " *** Guilherme então decide ir até a garota e falar com ela. *** ")
                console.log()
                prompt( ' Guilherme: " Oi, eu me chamo Guilherme, prazer. "') 
                console.log()
                prompt( ' Melissa: " Meu nome é Melissa, prazer. "')
                guilherme.garota ++
                console.clear()
                console.log()
                prompt(" *** Ambos se apresentam mas não conversam nada além disso pois em poucos minutos o ônibus de Melissa chega e ela tem que ir, então o tempo passa.")
                console.clear()
                console.log()
                prompt("00:00")
                console.clear()
                console.log()
                prompt(' *** " Parabéns, é seu aniversário !!! " *** ')
                continue
                }               
        }

        console.clear()
        console.log()
        prompt("23:35")
        console.clear()
        console.log()
        prompt(" *** - Após alguns minutos, Guilherme ouve uma conversa de duas pessoas que estavam no ponto de ônibus, sobre um acidente de avião.*** ")
    
        if (guilherme.aviao == 1){                          
                console.log()
                prompt( " *** Você precisa fazer algo. ***")
                console.log()
                console.log(" 1 - Perguntar para as pessoas sobre o acidente.")             
                console.log(" 2 - Ignorar e seguir seu caminho.")
                console.log(" OBS: Se escolher se informar sobre o acidente a história de Guilherme tomará um rumo diferente e terá um final único. ")
                console.log()
                let aviao = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")
    
                if (aviao == "1"){
                    console.clear()
                    console.log()
                    prompt(" *** Guilherme interrompe a conversa das pessoas no ponto e pergunta sobre o avião.")
                    console.log()
                    prompt(' Guilherme: " Com licença, eu ouvi vocês dizerem que um avião acabou de cair... "')
                    console.log()
                    prompt(' ??? : " Isso mesmo, parece que foi o avião LD-1502, assim que decolou teve um problema no motor e logo em seguida caiu. "')
                    guilherme.aviao ++
                }
            }
        
        if (guilherme.aviao == 0){
                guilherme.aviao ++
            }
        console.clear()
        console.log()
        prompt("23:40")
        console.clear()
        console.log()
        prompt(" *** Passados alguns minutos no ponto de ônibus, todos com exceção de Guilherme e a garota já haviam ido embora. ")
        console.clear()
        console.log()
        prompt("23:44")
        console.clear()
        console.log()
        prompt(" *** Após ficar paralisado de vergonha com algumas trocas de olhares, Guilherme decide ir até a garota e puxar algum assunto, mas percebe que ela deu sinal para o próximo ônibus, então prefere não chama-lá. *** ")
        console.clear()
        console.log()
        prompt("23:51")
        console.clear()
        prompt(" *** Chega o ônibus de Guilherme e enquanto isso ele só pensa na garota, e que ela provavelmente é alguma estudante do curso, então diz pra ele mesmo que amanhã falará com ela.*** ")
        
        if (guilherme.garota == 0){
            guilherme.garota ++
        }

        console.clear()
        console.log()
        prompt("23:55")
        console.clear()
        console.log()

        if (guilherme.acidente == 1){
            prompt(" *** No caminho para casa, Guilherme nota um acidente de carro pela janela do ônibus, aparentemente um farol acabou dando problema e dois carros se chocaram em um cruzamento... *** ")
            console.log()
            prompt( " *** Você precisa fazer algo. ***")
            console.log()
            console.log(" 1 - Tentar enxergar quem estava nos carros.")
            console.log(" 2 - Observar alguma característica do carro.")
            console.log(" 3 - Ignorar e seguir seu caminho.")
            console.log()
            console.log(" OBS: Se escolher se envolver no acidente, a história de Guilherme tomará um rumo diferente e terá um final único. ")
            let acidente = prompt(" *** Escolha alguma das opções anteriores pelo número. *** ")

            if (acidente == "1"){
                console.clear()
                console.log()
                prompt(" Aparentemente as pessoas no carro não sobreviveram ao acidente e já estavam cobertas com lençóis brancos na rua, você não conseguiu ver quem era, era melhor ter tentado enxergar algum detalhe do carro.")
            }

            else if (acidente == "1"){
                console.clear()
                console.log()
                prompt(" Você conseguiu prestar a atenção em alguns detalhes do carro, se tivesse mais uma chance você conseguiria a placa. ")
                guilherme.acidente ++
            }    
            else {
                prompt(" *** ... e isso fez com que um trânsito se formasse e atrasasse sua chegada em casa. *** ")

            }
        
        
        }

                      

        if (guilherme.acidente == 0){
            prompt(" *** No caminho para casa, Guilherme nota um acidente de carro pela janela do ônibus, aparentemente um farol acabou dando problema e dois carros se chocaram em um cruzamento, e isso fez com que um trânsito se formasse e atrasasse sua chegada em casa. ***")

        guilherme.acidente ++
        }

        console.clear()
        console.log()
        prompt("23:59")
        console.clear()
        console.log()
        prompt(" *** Ainda pensando na garota, Guilherme se distrai ao olhar no celular e ver que falta um minuto para o seu aniversário. *** ")
        console.clear()
        console.log()
        prompt("00:00")
        console.clear()
        console.log()
        prompt(" *** Com o celular na mão, Guilherme vê o relógio mudar e então fazer um som de notificção automática do celular, com a seguinte mensagem: *** ")
        console.log()
        console.log()
        console.log()
        loop = prompt(' *** " Parabéns, é seu aniversário !!! " *** ')

}

// Ao final das escolhas chaves, utilizei o "continue" para recomeçar o loop sem que o usuário precise ir até o final dos 53 minutos e pule diretamente para a próxima repetição e consiga dar continuidade as suas escolhas.

// E para finalizar a história, quando o protagonista chegar ao ápice de cada vertente o "break" foi utilizado para encerrar o while e sair do loop dos 53 minutos.


console.clear()
console.log()
prompt("00:01")
console.log()
prompt(" *** De repente o relógio muda e Guilherme percebe que conseguiu sair do loop temporal dos 53 minutos. *** ")
console.log()
console.log()
console.log()
console.log( " Esse foi o conhecimento que você adquiriu no decorrer da história: ")

const conhecimentos = [ guilhermeExperimental , guilherme ]
console.log()
for (const conhecimento of conhecimentos) {
    console.log(conhecimento);
}

// Ao encerrar a narrativa, o usuário poderá observar seus conhecimentos acumulados.


