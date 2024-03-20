AOS.init(); // faz a imagem se movimentar

const dataDoEvento = new Date("dec 12, 2024 19:00:00"); 
const timeStampDoEvento = dataDoEvento.getTime(); //recupera "timesTampDoEvento "

const contaAsHoras = setInterval(function(){ //
    const agora = new Date(); //pega o tempo atual
    const timeStampAtual = agora.getTime(); // transefere a const agora para timeStampAtual

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; // data do evento menos data atual

    const diaEmMs = 1000 * 60 * 60 * 24; //const de calculo de milisegundos de dia/hora/minutos/segundos
    const horasEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60 ; 

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); //faz o calculo de quanto tempo falta em cada unidade
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs); 
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`; // carrega para o contador os dados 

    if (distanciaAteOEvento < 0) { //se o tempo para o evento menor que zero , limpa a contagem e mostra a mensagem
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

}, 1000);// tempo que atualiza