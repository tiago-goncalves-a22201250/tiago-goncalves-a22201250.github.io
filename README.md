# Desenvolvimento de Interfaces Web

## Feedback Lab 1

Olá! Excelente trabalho!

Alguns pontos a melhorar:

1. Todas as imagens devem conter um texto alternativo (alt)

```html
<img src="images/dns.PNG">
```

## Feedback Lab 2

No index.html deves adicionar no parágrafo um texto (pode ser gerado pelo ChatGPT) que fale um pouco da cidade que escolheste!

De resto o trabalho está excelente, bom uso do HTML semântico.

É necessário ter cuidado com a formatação do código, podes usar o Visual Studio Code para te ajudar a formatar o código.

De forma a evitarmos isto:

```html
<section>
    <h3 id = "fotografias">Fotografias</h3>  
<a href="images/Imagens1_grande.jpg" target = "_blank"> 
    <img src = "images/Imagens1_pequeno.jpg" alt = "Vista Geral da Vila de Santa Cruz das Flores"> 
</a>
<a href="images/Imagens2_grande.jpg" target = "_blank"> 
    <img src = "images/Imagens2_pequeno.jpg" alt = "Fotografia da Piscina de Santa Cruz das Flores"> 
</a>
<a href="images/Imagens3_grande.jpg" target = "_blank"> 
    <img src = "images/Imagens3_pequeno.jpg" alt = "Fotografia do Museu de Santa Cruz das Flores"> 
</a>
</section>
```

Queremos isto:

```html
<section>
    <h3 id = "fotografias">Fotografias</h3>  
    <a href="images/Imagens1_grande.jpg" target = "_blank"> 
        <img src = "images/Imagens1_pequeno.jpg" alt = "Vista Geral da Vila de Santa Cruz das Flores"> 
    </a>
    <a href="images/Imagens2_grande.jpg" target = "_blank"> 
        <img src = "images/Imagens2_pequeno.jpg" alt = "Fotografia da Piscina de Santa Cruz das Flores"> 
    </a>
    <a href="images/Imagens3_grande.jpg" target = "_blank"> 
        <img src = "images/Imagens3_pequeno.jpg" alt = "Fotografia do Museu de Santa Cruz das Flores"> 
    </a>
</section>
```