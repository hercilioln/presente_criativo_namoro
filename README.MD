## Presente Criativo de Namoro 💖

Um site simples, bonito e personalizável para surpreender quem você ama!  
Personalize cada detalhe e hospede gratuitamente.

---

### Como Personalizar

#### 1. `cores.css`
Edite este arquivo para alterar as cores do fundo, textos e outros elementos do site.  
Exemplo:
```css
:root {
    --cor-fundo-frase: #ff4e6d;
    --cor-texto-frase: #ffffff;
    --cor-fundo-imagens: #7870a7;
    --cor-fundo-tempo: #ffffff;
    --cor-texto-nomes: #333;
    --cor-texto-tempojuntos: #ff4e6d;
}
```
#### 2. `data.json`
Coloque aqui a data de início do namoro. Observe que precisa ser no padrão americando ANO-MÊS-DIA HORA:MINUTOS:SEGUNDO
```
{
  "dataInicio": "2019-01-25 12:00:00"
}
```

#### 3. `frase.html`
Coloque uma frase romântica ou mensagem especial.
Exemplo:
```
<p>Você é a razão do meu sorriso todos os dias. Te amo!</p>
```
#### 4. `imagens.html`
Cole aqui os links das imagens que vão aparecer no slide do site.
Exemplo:

```
<img src="https://link-da-imagem1.jpg" class="slide active">
<img src="https://link-da-imagem2.jpg" class="slide">
<!-- Adicione quantas imagens quiser -->
```

#### 5. `nomes.html`
Coloque os nomes do casal.
Exemplo:

```
<h2>João ❤️ Maria</h2>
```

#### 6. `spotify.html`
Cole o iframe da playlist do Spotify que quiser exibir.
Exemplo:

```
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/SEU_LINK_AQUI" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
```
---
### Como Hospedar
Você pode hospedar seu site gratuitamente em serviços de sites estáticos, como:

- [Vercel](https://vercel.com/) (recomendado, fácil de usar e deploy automático pelo GitHub)
- [GitHub Pages](https://pages.github.com/) (ótimo para projetos open source)
- [Netlify](https://www.netlify.com/) (simples e rápido)

> Basta criar uma conta, conectar seu repositório e publicar!


Dúvidas ou sugestões?
Fique à vontade para abrir uma issue ou contribuir com o projeto.