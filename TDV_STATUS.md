# TDV STATUS

## Concluído
- [x] 0A extração do Laon para a raiz, zip original intacto
- [x] 0B contador `post_counter` neutralizado em `js/custom/custom.js`
- [x] 1A `css/tdv.css` depois do tema, paleta, Times nos títulos, Lato no corpo
- [x] 1B menu e footer nas páginas públicas
- [x] 2A–2C Home com a cadência do Laon e três vinhos
- [x] 3 A Terra
- [x] 4A–4D vinhos e fichas
- [x] 5 Wine Bar no estado “A mesa está sendo preparada”
- [x] 6A–6C experiências em HTML direto
- [x] 7 Caderno dos Ventos sem posts demo
- [x] 8 Visite-nos, 404 e páginas demo em `_laon-unused`
- [x] 9 animações nativas `data-animation` e `prefers-reduced-motion`
- [x] 10 `lang="pt-BR"`, uma H1, `maximum-scale` removido, busca oculta
- [x] 11 title, description, Open Graph, robots, sitemap sem domínio absoluto
- [x] 12 varredura das páginas públicas sem demo Laon

## Em desenvolvimento
- nada nesta leva

## Pendências de cliente
- endereço, WhatsApp, telefone, e-mail, horários, Maps, Waze, Instagram
- operação do Wine Bar, cardápio e reserva
- ficha do Vento Rebelde e temperatura do Vento Nascente
- fotos reais no lugar dos painéis de cor
- licença web da Eyesome Script
- domínio público para canonical e sitemap absoluto
- Serra dos Encontros versus a linha “Serra da Mantiqueira” no material de redes

## Blockers de publicação
- dados de contato e mapa
- ficha técnica Vento Rebelde
- formulário sem destinatário real
- fotografias finais
- domínio para SEO absoluto

## Últimos arquivos alterados
- index.html e páginas públicas novas
- css/tdv.css
- js/tdv.js
- js/custom/custom.js
- .htaccess
- robots.txt
- sitemap.xml

## Último teste
Desktop:
home, vinhos, ficha do Vento Nascente, Visite-nos e 404 abertos em http://localhost/terra-ventos/

Mobile:
home em 390px, sem imagens quebradas na home

Console:
o `post_counter` com `ajax_url` indefinido foi removido. O formulário de visita não envia e mostra o aviso de e-mail pendente.

## Notas
- Eyesome não foi publicada. O acento usa itálico de Times até haver licença.
- Fotografias de vinhedo do Laon não entram como se fossem a propriedade. Os blocos usam painéis da paleta.
- Dados operacionais das experiências não aparecem no front.
- Páginas de loja, homes alternativas e blog demo estão em `_laon-unused`, negado pelo `.htaccess`.
