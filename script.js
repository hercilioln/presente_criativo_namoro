window.addEventListener('DOMContentLoaded', function() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="footer-left">
        <p>Desenvolvido por • <a href="https://hercilio.me" target="_blank">Hercilio</a></p>
      </div>
    `;
    document.body.appendChild(footer);
  });


    let dataInicio;
    fetch('data.json')
    .then(response => response.json())
    .then(json => {
        dataInicio = new Date(json.dataInicio);

        setInterval(atualizarTempo, 1000);
        atualizarTempo();
    });

    function atualizarTempo() {
        if (!dataInicio) return; 

        const agora = new Date();
        const diferenca = agora - dataInicio;

        const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
        const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        const anosFormatado = formatarUnidade(anos, 'ano', 'anos');
        const mesesFormatado = formatarUnidade(meses, 'mês', 'meses');
        const diasFormatado = formatarUnidade(dias, 'dia', 'dias');
        const horasFormatado = formatarUnidade(horas, 'hora', 'horas');
        const minutosFormatado = formatarUnidade(minutos, 'minuto', 'minutos');
        const segundosFormatado = formatarUnidade(segundos, 'segundo', 'segundos');

        document.getElementById("tempo").innerHTML = 
            `${anosFormatado}, ${mesesFormatado}, ${diasFormatado}, <br>${horasFormatado}, ${minutosFormatado}, ${segundosFormatado}`;
    }

    function formatarUnidade(valor, singular, plural) {
        return valor <= 1 ? `${valor} ${singular}` : `${valor} ${plural}`;
    }

   setInterval(atualizarTempo, 1000); // Atualiza a cada segundo
   atualizarTempo(); // Chama imediatamente para exibir o tempo inicial

   // Explosão de corações
   function criarCoracao() {
       const coracao = document.createElement('div');
       coracao.classList.add('coracao');
       coracao.innerHTML = '❤️😍';
       coracao.style.left = Math.random() * 100 + 'vw';
       coracao.style.bottom = '-20px'; 
       document.body.appendChild(coracao);

       setTimeout(() => {
           coracao.remove();
       }, 5000);
   }

   function explosaoCoracoes() {
       for (let i = 0; i < 70; i++) {
           setTimeout(criarCoracao, i * 70);
       }
   }

   window.addEventListener('load', explosaoCoracoes);

   document.getElementById('verCoracoes').addEventListener('click', function() {
       explosaoCoracoes();
   });

    fetch('frase.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('fraseContainer').innerHTML = data;
    });
    
    fetch('nomes.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nomesContainer').innerHTML = data;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = data;

    const h2 = tempDiv.querySelector('h2');
    if (h2) {
      document.title = h2.textContent; 
    }
  });

    fetch('imagens.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('sliderContainer').innerHTML = data;
    });
    fetch('spotify.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('spotify').innerHTML = data; 
    });

       let slideIndex = 0;
       const slides = document.getElementsByClassName("slide");
    
       function ajustarAltura() {
           const slider = document.querySelector('.slider');
           slider.style.height = `${window.innerHeight}px`;
       }
    
       function showSlides() {
           for (let i = 0; i < slides.length; i++) {
               slides[i].classList.remove("active");
           }
           slideIndex++;
           if (slideIndex > slides.length) {slideIndex = 1}
           slides[slideIndex-1].classList.add("active");
           setTimeout(showSlides, 5000); 
       }
    
       showSlides();
    

       