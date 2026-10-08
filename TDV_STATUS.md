# TDV STATUS

## Concluído
- [x] 0A extração do Laon para a raiz, zip original intacto
- [x] 0B contador `post_counter` neutralizado em `js/custom/custom.js`
- [x] 1A `css/tdv.css` depois do tema, paleta, TDV Times e Eyesome Script
- [x] 1B menu e footer nas páginas públicas
- [x] 2A–2C Home com a cadência do Laon e três vinhos
- [x] 3 A Terra
- [x] 4A–4D vinhos e fichas
- [x] 5 Wine Bar no estado “A mesa está sendo preparada”
- [x] 6A–6C experiências em HTML direto
- [x] 7 Caderno dos Ventos retirado do site público em 08/10/2026
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
- uva, vinificação, perfil, temperatura e harmonização do Vento Sereno
- temperatura do Vento Nascente
- método Charmat e uvas do Vento Atrevido 2025 ainda por confirmar
- fotos reais no lugar dos painéis de cor
- domínio público para canonical e sitemap absoluto
- Serra dos Encontros versus a linha “Serra da Mantiqueira” no material de redes

## Blockers de publicação
- dados de contato e mapa
- ficha sensorial do Vento Sereno
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
- Correção estratégica em 07/10/2026: o portfólio público é Vento Nascente, Vento Atrevido e Vento Sereno. Vento Rebelde não é produto atual e não tem página pública. Não há Product schema no site.
- Em 07/10/2026 a Lato deixou de ser a fonte de corpo. O site usa os webfonts da marca em `fonts/tdv/`: TDV Times no corpo, menu, títulos e ficha; Eyesome Script só no gesto dos heróis e em “Onde o vento encontra a terra”.
- Os logotipos da interface usam só os SVG de `images/svg/`. O logo do hero principal fica em 4em, o limite máximo (3em no mobile). O favicon é o símbolo colorido. A prévia de compartilhamento continua raster.
- Fotografias de vinhedo do Laon não entram como se fossem a propriedade. Os blocos usam painéis da paleta.
- Dados operacionais das experiências não aparecem no front.
- Páginas de loja, homes alternativas e blog demo estão em `_laon-unused`, negado pelo `.htaccess`.
