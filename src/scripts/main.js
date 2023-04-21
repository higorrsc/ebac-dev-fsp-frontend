AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
  const diasEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteEvento = Math.floor(distanciaAteOEvento / diasEmMs);
  const horasAteEvento = Math.floor(
    (distanciaAteOEvento % diasEmMs) / horaEmMs
  );
  const minutosAteEvento = Math.floor(
    (distanciaAteOEvento % horaEmMs) / minutoEmMs
  );

  const segundosAteEvento = Math.floor(
    (distanciaAteOEvento % minutoEmMs) / 1000
  );

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = "Evento expirado";
  }
}, 1000);
