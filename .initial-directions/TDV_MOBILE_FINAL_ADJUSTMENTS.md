# TERRA DOS VENTOS
## AJUSTES FINAIS — MOBILE

Versão: Outubro/2026
Projeto: Vinícola Terra dos Ventos
Escopo: EXCLUSIVAMENTE MOBILE

---

# 0. FUNÇÃO DESTE DOCUMENTO

Este documento contém os ajustes finais de layout e responsividade
da versão MOBILE do site da Vinícola Terra dos Ventos.

O site desktop está praticamente concluído.

Portanto:

- NÃO redesenhar desktop;
- NÃO reinterpretar o projeto;
- NÃO fazer refactor geral;
- NÃO aproveitar esta etapa para "melhorar" componentes não solicitados;
- NÃO alterar conteúdo/copy sem instrução explícita;
- NÃO instalar bibliotecas;
- NÃO alterar vendor;
- NÃO reconstruir componentes que podem ser corrigidos por CSS.

Esta é uma etapa de POLIMENTO MOBILE.

A prioridade é realizar a MENOR alteração técnica possível
para atingir o resultado visual solicitado.

---

# 1. REGRA CENTRAL — MOBILE ONLY

TODOS os ajustes deste documento são exclusivos para a versão mobile.

As correções foram identificadas visualmente em screenshots
de um determinado smartphone.

Entretanto:

NÃO criar regras específicas para aquela resolução.

Os ajustes devem funcionar proporcionalmente
em toda a faixa mobile.

Antes de criar qualquer media query:

1. identificar o breakpoint mobile já utilizado pelo projeto;
2. reutilizar esse breakpoint;
3. preservar o sistema responsivo existente.

NÃO criar regras como:

@media (width: 390px)

ou:

@media (min-width: 389px) and (max-width: 391px)

somente para reproduzir um screenshot.

---

# 2. VIEWPORTS DE VALIDAÇÃO

Validar pelo menos:

320px
360px
375px
390px
414px
430px

Também verificar:

o limite superior do breakpoint mobile existente.

Após alterações importantes,
verificar também desktop em aproximadamente 1440px
para garantir que não houve regressão.

Se o breakpoint utilizado pelo projeto for, por exemplo:

767px

validar também próximo a:

767px
768px

para conferir a transição.

---

# 3. RESPONSIVIDADE FLUIDA

Quando apropriado, preferir:

- %
- rem
- em
- clamp()
- min()
- max()
- gap
- flex
- grid
- padding-inline
- margin-inline

Evitar:

- coordenadas absolutas frágeis;
- larguras fixas desnecessárias;
- margens artificiais para apenas um aparelho;
- múltiplos media queries para resolver o mesmo componente.

O objetivo é manter PROPORÇÃO.

---

# 4. PRIORIDADE DOS ARQUIVOS

Prioridade de alteração:

1. `css/tdv.css`
2. HTML específico da página, somente quando necessário
3. `js/tdv.js`, somente quando existir necessidade real de comportamento

Evitar alterações profundas em:

- CSS original/minificado do Laon;
- JS vendor;
- plugins;
- bibliotecas;
- arquivos de framework.

---

# 5. REFERÊNCIAS VISUAIS

Os screenshots estão em:

`.development-files/mobile-review/screenshots/`

Os NOMES ORIGINAIS dos arquivos foram mantidos.

Não renomear.

Mapeamento:

| ID | Screenshot |
|---|---|
| TDV-MOB-001 | `Captura de tela 2026-10-08 161704.png` |
| TDV-MOB-002 | `Captura de tela 2026-10-08 163006.png` |
| TDV-MOB-003 | `Captura de tela 2026-10-08 163037.png` |
| TDV-MOB-004 | `Captura de tela 2026-10-08 163136.png` |
| TDV-MOB-005 | `Captura de tela 2026-10-08 163407.png` |
| TDV-MOB-006 | `Captura de tela 2026-10-08 163538.png` |
| TDV-MOB-007 | `Captura de tela 2026-10-08 163718.png` |
| TDV-MOB-008 | `Captura de tela 2026-10-08 163921.png` |
| TDV-MOB-009 | `Captura de tela 2026-10-08 164202.png` |
| TDV-MOB-010 | `Captura de tela 2026-10-08 164025.png` |

REGRA:

Abra SOMENTE o screenshot correspondente ao ID
que estiver sendo executado.

Não é necessário abrir todos antecipadamente.

Os screenshots são referência visual.

As instruções escritas neste documento têm prioridade.

O PPTX de revisão original NÃO precisa ser reanalisado pelo agente
se este MD estiver disponível.

---

# TDV-MOB-001
## HEADER + LOGOTIPO + MENU + VIDEO BANNER

Referência:

`.development-files/mobile-review/screenshots/Captura de tela 2026-10-08 161704.png`

Escopo:

MOBILE ONLY.

---

## A. LOGOTIPO

No header mobile,
utilizar SEMPRE o logotipo oficial SVG HORIZONTAL.

Não utilizar:

- versão vertical;
- PNG;
- JPG;
- reconstrução em HTML;
- logo do Laon.

Usar os arquivos SVG oficiais já definidos
nas diretrizes principais do projeto.

### HOME

Na Home:

utilizar a versão horizontal branca
conforme composição atual sobre o hero.

### CONTEXTOS CLAROS / INTERNOS

Quando a composição exigir versão colorida,
utilizar o SVG horizontal colorido oficial.

Não alterar a cor via CSS/filter.

---

## B. POSICIONAMENTO

O logotipo deve ficar:

- alinhado à esquerda;
- menor;
- elegante;
- proporcional ao menu hambúrguer;
- com boa margem lateral.

Não centralizar o logo no header mobile.

---

## C. TAMANHO DO LOGOTIPO

O logo atual está visualmente grande.

Reduzir.

Regra já estabelecida no projeto:

`max-height: 4em`

4em é LIMITE MÁXIMO,
não tamanho obrigatório.

No mobile provavelmente será visualmente adequado
utilizar uma altura menor.

Escolher a escala observando:

- equilíbrio com hambúrguer;
- altura total do header;
- presença do hero;
- distância das bordas.

Não deformar o SVG.

Usar:

width: auto;
height: auto;

com controle de max-height/max-width.

---

## D. MENU HAMBÚRGUER

O menu hambúrguer atual pode ficar um pouco maior.

Referência de comportamento:

https://projectprofissio1.websiteseguro.com/allterra/

A referência serve para observar:

- presença;
- proporção;
- animação;
- transformação hambúrguer → X.

NÃO copiar identidade visual ou estrutura do site de referência.

Preservar o sistema do projeto sempre que possível.

---

## E. ANIMAÇÃO HAMBÚRGUER → X

A animação deve:

- ser suave;
- manter o centro;
- não "pular";
- não alterar posição do botão;
- transformar claramente as linhas em X.

Preservar acessibilidade:

- área de toque confortável;
- aria-expanded quando aplicável;
- funcionamento por teclado quando pertinente.

---

## F. VIDEO BANNER HOME

No mobile:

o bloco principal do vídeo/banner deve ocupar
a altura completa do viewport.

Objetivo:

100vh visual.

Preferir unidades modernas para mobile,
caso compatíveis com a estrutura:

100svh
ou
100dvh

com fallback quando necessário.

Exemplo conceitual:

min-height: 100vh;
min-height: 100svh;

Não copiar cegamente.

Avaliar o CSS real.

A altura deve considerar corretamente:

- header;
- vídeo/imagem;
- conteúdo do hero;
- barras do navegador mobile.

Não criar scroll horizontal.

---

# TDV-MOB-002
## ESCALA GLOBAL DOS TÍTULOS MOBILE

Referência:

`.development-files/mobile-review/screenshots/Captura de tela 2026-10-08 163006.png`

Escopo:

MOBILE ONLY.

---

## PROBLEMA

O padrão de título indicado na referência
está visualmente pequeno.

---

## AJUSTE

Aumentar um pouco a escala desse padrão de título
em todo o site MOBILE.

IMPORTANTE:

NÃO aumentar indiscriminadamente todos:

h1
h2
h3

Localizar a classe/componente responsável
pelo padrão mostrado no screenshot.

Fazer a correção na regra compartilhada.

---

## PRESERVAR

- TDV Times;
- Eyesome Script quando aplicável;
- contraste tipográfico;
- hierarquia;
- alinhamentos;
- estilo Laon;
- proporção entre heading e body.

---

## ESCALA

O aumento deve ser perceptível,
mas não exagerado.

Se fizer sentido:

usar `clamp()`.

Evitar valores rígidos que funcionem apenas em 390px.

---

## LINE HEIGHT

Após aumentar a fonte:

verificar line-height.

Não deixar:

- linhas muito separadas;
- ascendentes da Eyesome cortadas;
- descendentes da Eyesome cortadas;
- sobreposição indesejada.

---

## RESULTADO ESPERADO

Maior presença editorial.

Sem:

- overflow;
- palavras cortadas;
- quebra ruim;
- grande aumento de altura;
- perda de leitura.

---

# TDV-MOB-003
## HOME — BLOCO DOS VINHOS

Referência:

`.development-files/mobile-review/screenshots/Captura de tela 2026-10-08 163037.png`

Escopo:

HOME MOBILE.

---

## A. CENTRALIZAÇÃO DAS GARRAFAS

As garrafas devem ficar centralizadas horizontalmente.

Verificar:

- wrapper;
- width da imagem;
- margin-inline;
- flex;
- grid;
- transform;
- alinhamento herdado.

Não corrigir apenas visualmente usando:

left
translateX

se o problema puder ser resolvido pela estrutura normal.

Resultado:

cada garrafa alinhada ao eixo central da tela.

---

## B. ESPAÇAMENTO VERTICAL

Os vinhos estão afastados demais verticalmente.

Aproximar os produtos.

Não eliminar todo o respiro.

A intenção deve ser:

VINHO
+
respiro elegante
+
VINHO
+
respiro elegante
+
VINHO

e não grandes blocos vazios entre eles.

---

## C. CONSISTÊNCIA

Aplicar o mesmo spacing aos três vinhos:

- Vento Nascente
- Vento Atrevido
- Vento Sereno

Não criar ajustes individuais para cada um
salvo necessidade causada pelas proporções reais das imagens.

---

# TDV-MOB-004
## FOOTER — MENU MOBILE

Referência:

`.development-files/mobile-review/screenshots/Captura de tela 2026-10-08 163136.png`

Escopo:

MOBILE ONLY.

---

## OBJETIVO

Centralizar o menu do footer.

Organizar visualmente em DUAS LINHAS.

---

## SEGUNDA LINHA

Obrigatoriamente conter:

Experiências
Visite-nos

---

## PRIMEIRA LINHA

Conter os demais itens aplicáveis
do menu atual,
preservando a ordem lógica existente.

---

## IMPLEMENTAÇÃO

Preferir:

flex
ou
grid.

Não utilizar:

- vários `&nbsp;`;
- espaços manuais;
- `<br>` arbitrários;
- posicionamento absoluto.

---

## RESULTADO

Itens:

- centralizados;
- bem espaçados;
- sem quebra interna;
- área clicável preservada;
- visualmente equilibrados.

---

# TDV-MOB-005
## LANDING VINHOS — SEPARAÇÃO + LINKS

Referência:

`.development-files/mobile-review/screenshots/Captura de tela 2026-10-08 163407.png`

Página:

Vinhos.

Escopo:

MOBILE ONLY.

---

## A. ESPAÇAMENTO ENTRE VINHOS

Cada vinho deve ficar um pouco mais separado
do seguinte.

Hoje a transição visual entre produtos
não está suficientemente clara.

Aumentar espaço vertical de forma controlada.

---

## B. DIVISOR

Avaliar incluir uma linha horizontal:

- muito fina;
- clara;
- discreta;
- elegante;
- baixa opacidade.

Pode usar aproximadamente:

1px

se adequado.

Cor:

coerente com a identidade Terra dos Ventos.

Não criar um divisor pesado.

---

## C. ESPAÇAMENTO DO DIVISOR

O divisor deve possuir respiro suficiente:

produto anterior

→ espaço

→ linha

→ espaço

→ produto seguinte.

---

## D. GARRAFAS CLICÁVEIS

A imagem/garrafa de cada produto
deve funcionar como link para sua página individual.

Mapeamento:

Vento Nascente
→ página Vento Nascente

Vento Atrevido
→ página Vento Atrevido

Vento Sereno
→ página Vento Sereno

---

## E. IMPLEMENTAÇÃO SEMÂNTICA

Preferir:

`<a href="...">`

envolvendo a imagem.

Não usar:

onclick em JavaScript

se um link normal resolver.

Preservar:

alt text
acessibilidade
hover/touch existente.

---

# TDV-MOB-006
## PÁGINAS INDIVIDUAIS DOS VINHOS

Referência:

`.development-files/mobile-review/screenshots/Captura de tela 2026-10-08 163538.png`

Aplicar em:

- Vento Nascente;
- Vento Atrevido;
- Vento Sereno.

Escopo:

MOBILE ONLY.

---

## A. NOME DO VINHO

O nome do vinho deve ficar:

- maior;
- centralizado;
- com maior presença;
- com mais espaço em relação ao texto superior.

---

## B. ESPAÇAMENTO SUPERIOR

Criar um pouco mais de espaço entre:

eyebrow/texto superior

e

nome principal do vinho.

Não criar um vazio exagerado.

---

## C. SUBTÍTULO

Informações como:

Rosé • 2025

devem ficar centralizadas.

Aplicar o mesmo princípio visual aos equivalentes.

Exemplos:

Vento Nascente:
Syrah • 2024

Vento Atrevido:
Espumante Rosé Brut • 2025

Vento Sereno:
Rosé • 2025

IMPORTANTE:

não alterar informações aprovadas na página
apenas para corresponder a estes exemplos.

Os exemplos indicam alinhamento/hierarquia.

---

## D. PADRONIZAÇÃO

As três páginas precisam usar:

- mesma lógica de H1;
- mesma centralização;
- mesma hierarquia;
- mesmo spacing;
- mesma relação título/subtítulo.

Evitar CSS específico por produto.

---

# TDV-MOB-007
## LANDING EXPERIÊNCIAS

Referência:

`.development-files/mobile-review/screenshots/Captura de tela 2026-10-08 163718.png`

Página:

Experiências.

Escopo:

MOBILE ONLY.

---

## A. PROBLEMA

Atualmente é difícil perceber visualmente:

qual imagem pertence a qual experiência

e

onde uma experiência termina
e a seguinte começa.

---

## B. ESPAÇAMENTO ENTRE EXPERIÊNCIAS

Aumentar claramente o espaço entre os blocos.

Cada experiência deve ser percebida como uma unidade:

IMAGEM

TÍTULO

DESCRIÇÃO

CTA

[respiro maior]

PRÓXIMA EXPERIÊNCIA

---

## C. NÃO EXAGERAR

O espaço deve separar,
não criar páginas visualmente quebradas.

Preservar ritmo editorial.

---

## D. BLOCO SUPERIOR

Melhorar também o espaçamento da introdução superior:

breadcrumb
título
texto introdutório
primeira experiência.

Criar mais respiro antes do primeiro card/bloco.

---

## E. IMAGENS CLICÁVEIS

A imagem de cada experiência deve levar
à página correspondente.

Exemplos:

Tour dos Mirantes
→ Tour dos Mirantes

Piquenique dos Ventos
→ Piquenique

Entre Vinhas e Ventos
→ página correspondente

Vindima
→ página correspondente quando aplicável.

---

## F. SEMÂNTICA

Usar links normais:

`<a>`

Não criar JavaScript desnecessário.

---

# TDV-MOB-008
## BREADCRUMBS — REGRA GLOBAL

Referência:

`.development-files/mobile-review/screenshots/Captura de tela 2026-10-08 163921.png`

Escopo:

TODAS AS PÁGINAS INTERNAS MOBILE
que utilizem o mesmo componente de breadcrumb.

---

## PROBLEMA

Existe pouco espaço entre:

breadcrumb

e

conteúdo principal.

---

## AJUSTE

Aumentar o espaçamento vertical depois do breadcrumb.

Esta deve ser uma regra GLOBAL.

Não corrigir individualmente:

vinhos
experiências
wine bar
etc.

se todos utilizam o mesmo componente.

---

## RESULTADO

Breadcrumb claramente separado do conteúdo.

Sem criar vazio excessivo.

---

## PRESERVAR

- estilo;
- fonte;
- tamanho;
- links;
- desktop.

---

# TDV-MOB-009
## EXPERIÊNCIAS — NOTA INFORMATIVA ABAIXO DO CTA

Referência:

`.development-files/mobile-review/screenshots/Captura de tela 2026-10-08 164202.png`

Escopo:

MOBILE.

---

## REFERÊNCIA FUNCIONAL

O comportamento já aplicado manualmente
na página Tour dos Mirantes
deve servir de padrão.

---

## POSICIONAMENTO

Quando houver uma nota informativa relacionada à experiência:

ela deve ficar:

1. depois da descrição;
2. logo abaixo do CTA.

---

## TIPOGRAFIA

Usar fonte menor.

Com comportamento visual semelhante a:

`<small>`

Mas preservar:

- legibilidade;
- contraste;
- line-height.

---

## ESPAÇAMENTO

A nota deve ficar relativamente próxima do CTA,
demonstrando que pertence à mesma ação/informação.

Não criar um novo grande bloco.

---

## IMPORTANTE

Não inventar nota.

Não alterar texto.

Não adicionar conteúdo onde ele não existe.

Apenas padronizar o conteúdo já existente.

---

# TDV-MOB-010
## DETALHE DAS EXPERIÊNCIAS — CONTAINER LATERAL

Referência:

`.development-files/mobile-review/screenshots/Captura de tela 2026-10-08 164025.png`

Escopo:

PÁGINAS DE DETALHE DE EXPERIÊNCIAS — MOBILE.

---

## PROBLEMA

O conteúdo está muito próximo das laterais
ou não segue adequadamente o mesmo respiro
dos demais conteúdos mobile.

---

## AJUSTE

Melhorar:

padding-inline

ou

margem/container correspondente.

---

## REGRA

Criar uma solução consistente para
todas as páginas de experiência.

Não ajustar:

Tour
Piquenique
Vindima

individualmente se utilizarem a mesma estrutura.

---

## RESPONSIVIDADE

Cuidado especialmente em:

320px.

Não aumentar tanto o padding
a ponto de deixar a coluna de texto estreita.

---

## POSSÍVEL ABORDAGEM

Se compatível com o sistema existente:

padding-inline: clamp(...);

Isso é apenas uma sugestão conceitual.

Avaliar o CSS real antes de implementar.

---

# 6. REGRA DE COMPONENTES COMPARTILHADOS

Antes de criar qualquer override específico:

pergunte:

"Este problema pertence à página
ou ao componente?"

Se for componente compartilhado:

corrigir globalmente para MOBILE.

Priorizar especialmente:

- headings;
- breadcrumb;
- containers;
- CTA;
- header;
- footer;
- cards;
- links de imagem.

Uma boa regra compartilhada
é preferível a vários overrides duplicados.

---

# 7. REGRA DE ESPECIFICIDADE

NÃO utilizar `!important` por padrão.

Primeiro verificar:

- ordem da cascata;
- especificidade existente;
- regra herdada;
- media query existente.

Usar `!important`
somente se realmente necessário devido à arquitetura legada do Laon.

---

# 8. NÃO DUPLICAR MEDIA QUERIES SEM NECESSIDADE

Evitar criar vários blocos separados:

@media (max-width: 767px)

para cada pequeno ajuste
se eles puderem ser organizados coerentemente
na seção mobile do `tdv.css`.

Manter organização.

Sugestão:

/* ========================================
   TDV MOBILE FINAL ADJUSTMENTS
   ======================================== */

dentro do `tdv.css`.

Não é obrigatório se a estrutura atual possuir organização melhor.

---

# 9. NÃO ALTERAR DESKTOP

Nenhum ajuste deste documento autoriza
mudança visual desktop.

Se um seletor global precisar ser alterado:

usar override mobile correspondente.

Ao finalizar cada etapa:

verificar 1440px.

Resultado esperado:

nenhuma mudança perceptível não solicitada.

---

# 10. ORDEM RECOMENDADA DE EXECUÇÃO

Executar primeiro componentes globais:

1. TDV-MOB-001
   Header / logo / hamburger / hero.

2. TDV-MOB-002
   Escala global de títulos.

3. TDV-MOB-008
   Breadcrumb global.

4. TDV-MOB-010
   Container das experiências.

Depois ajustes por página:

5. TDV-MOB-003
   Home — vinhos.

6. TDV-MOB-004
   Footer.

7. TDV-MOB-005
   Landing Vinhos.

8. TDV-MOB-006
   Páginas individuais dos vinhos.

9. TDV-MOB-007
   Landing Experiências.

10. TDV-MOB-009
    Notas das experiências.

---

# 11. RECOMENDAÇÃO DE EXECUÇÃO EM LOTES

Não é necessário executar todos os IDs de uma vez.

Lote 1 — GLOBAL:

TDV-MOB-001
TDV-MOB-002
TDV-MOB-008
TDV-MOB-010

Validar.

Depois:

Lote 2 — HOME / VINHOS:

TDV-MOB-003
TDV-MOB-004
TDV-MOB-005
TDV-MOB-006

Validar.

Depois:

Lote 3 — EXPERIÊNCIAS:

TDV-MOB-007
TDV-MOB-009

Validar.

---

# 12. TESTE APÓS CADA LOTE

Verificar:

320px
375px
390px
430px
limite do breakpoint mobile
1440px desktop

Também verificar:

- scroll horizontal;
- imagens cortadas;
- headings;
- menu;
- links;
- console;
- CLS visual;
- overflow;
- botões;
- áreas de touch.

---

# 13. CRITÉRIO DE PRONTO — TDV-MOB-001

[ ] logo horizontal mobile
[ ] logo alinhado à esquerda
[ ] logo menor e elegante
[ ] versão branca correta na Home
[ ] versão colorida onde aplicável
[ ] logo <= 4em
[ ] hamburger maior
[ ] transformação hamburger → X suave
[ ] hero/video ocupa viewport mobile
[ ] sem overflow

---

# 14. CRITÉRIO DE PRONTO — TDV-MOB-002

[ ] padrão de heading identificado corretamente
[ ] tamanho aumentado de forma global mobile
[ ] Eyesome não corta
[ ] line-height correto
[ ] sem overflow
[ ] desktop intacto

---

# 15. CRITÉRIO DE PRONTO — TDV-MOB-003

[ ] todas as garrafas centralizadas
[ ] spacing vertical reduzido
[ ] três produtos consistentes
[ ] desktop intacto

---

# 16. CRITÉRIO DE PRONTO — TDV-MOB-004

[ ] menu footer centralizado
[ ] duas linhas
[ ] Experiências na segunda linha
[ ] Visite-nos na segunda linha
[ ] gaps equilibrados
[ ] links funcionais

---

# 17. CRITÉRIO DE PRONTO — TDV-MOB-005

[ ] melhor separação entre vinhos
[ ] divisor discreto se utilizado
[ ] Nascente clicável
[ ] Atrevido clicável
[ ] Sereno clicável
[ ] URLs corretas

---

# 18. CRITÉRIO DE PRONTO — TDV-MOB-006

[ ] nome maior
[ ] nome centralizado
[ ] spacing superior melhor
[ ] subtítulo centralizado
[ ] três páginas padronizadas
[ ] conteúdo técnico não alterado

---

# 19. CRITÉRIO DE PRONTO — TDV-MOB-007

[ ] experiências claramente separadas
[ ] imagens associadas visualmente à copy correta
[ ] bloco superior com melhor respiro
[ ] imagens clicáveis
[ ] links corretos

---

# 20. CRITÉRIO DE PRONTO — TDV-MOB-008

[ ] breadcrumb com mais respiro inferior
[ ] regra global
[ ] todas as páginas internas consistentes
[ ] desktop intacto

---

# 21. CRITÉRIO DE PRONTO — TDV-MOB-009

[ ] nota abaixo do CTA
[ ] fonte menor
[ ] spacing correto
[ ] texto preservado
[ ] padrão consistente

---

# 22. CRITÉRIO DE PRONTO — TDV-MOB-010

[ ] container com melhor respiro lateral
[ ] funciona em 320px
[ ] funciona em 430px
[ ] regra compartilhada entre experiências
[ ] sem wrappers desnecessários

---

# 23. CRITÉRIO FINAL MOBILE

A revisão só pode ser considerada concluída quando:

[ ] Header mobile revisado
[ ] Logo correto
[ ] Hamburger correto
[ ] Hero 100% viewport
[ ] Títulos com maior presença
[ ] Home vinhos corrigida
[ ] Footer corrigido
[ ] Landing Vinhos corrigida
[ ] Páginas dos três vinhos corrigidas
[ ] Landing Experiências corrigida
[ ] Breadcrumb global corrigido
[ ] Notas de experiência padronizadas
[ ] Containers das experiências corrigidos
[ ] Todos os links novos funcionam
[ ] Nenhum scroll horizontal
[ ] Nenhum novo erro no console
[ ] 320px validado
[ ] 375px validado
[ ] 390px validado
[ ] 430px validado
[ ] breakpoint superior validado
[ ] Desktop 1440px preservado

---

# 24. RELATÓRIO DO AGENTE

Ao concluir um lote,
não produzir explicações longas.

Responder apenas:

## IDs concluídos
- ...

## Arquivos alterados
- ...

## Principais regras/selectors alterados
- ...

## Não foi possível concluir
- ...

## Regressões encontradas
- nenhuma
ou descrição objetiva.

Não gerar documentação adicional sem solicitação.

---

# 25. REGRA FINAL

Esta etapa não é um redesign.

É uma revisão final de RESPONSIVIDADE MOBILE.

Para cada solicitação:

1. localizar a causa real;
2. identificar se é regra global ou de página;
3. aplicar a menor correção;
4. validar proporcionalmente;
5. confirmar que desktop permaneceu intacto.

Preservar:

- identidade Terra dos Ventos;
- template Laon;
- tipografia oficial;
- SVGs oficiais;
- conteúdo aprovado;
- animações;
- estrutura existente.

Evitar qualquer alteração fora do escopo.

FIM.