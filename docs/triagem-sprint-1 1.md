# Sprint 1 --- Relatório de Triagem, Investigação e Correção

**Equipe:** Os Leôncios
**Integrantes:** Luiz Felipe Matheus, Stephany, Lucas Torino
**Data:** 13/08/26
**Relatório analisado da equipe:** RADU 😎
**Ambiente utilizado:** Android Studio com Pixel 7 (API 37)
**Versão/build analisada:** v1.0.0

------------------------------------------------------------------------

## 1. Análise inicial do relatório recebido

Antes de realizar alterações no código, analise o diagnóstico recebido
da outra equipe.

**O relatório possui informações suficientes para compreender os
problemas encontrados?**

Resposta: Sim

**Quais informações facilitaram a análise?**

Resposta: Passos para reprodução e detalhamento sobre os resultados esperados e obtidos

**Quais informações estavam ausentes, incompletas ou poderiam ser mais
claras?**

Resposta: A formatação da seção de problemas encontrados poderia ser mais organizada, sem misturar os requisitos funcionais/não funcionais com os bugs, ou ao menos ter divisórias entre os tópicos

------------------------------------------------------------------------

## 2. Triagem dos problemas relatados

Analise **todos os problemas apresentados pela outra equipe** antes de
realizar qualquer correção.

Para cada ocorrência, informe o resultado da validação.

---
### Ocorrência 01

**Identificação original:** BUG-001

**Título:** O usuário deve cadastrar uma tarefa com título obrigatório

**Conseguimos reproduzir?** Sim

**Status da triagem:**
-   CONFIRMADO

**Justificativa:** O erro ocorre conforme descrito no Modelo Diagnóstico 

**Evidência da validação:** A tarefa realmente é adicionada sem título

**Severidade:** Baixa

**Prioridade:** Média

------------------------------------------------------------------------
### Ocorrência 02
**Identificação original:** BUG-002

**Título: RF04 - O usuário deve concluir uma tarefa corretamente.**

**Conseguimos reproduzir?** Sim

**Status da triagem:**
- CONFIRMADO

**Justificativa: Funcionalidade importante, para registrar tarefas concluídas.**

**Evidência da validação:** Os passos para reprodução foram seguidos corretamente, mas , existe divergência em “resultado obtido” , pois as tarefas marcadas com check não ficam na aba de “concluídas” como descrito.

**Severidade:** Crítica

**Prioridade:** Alta

---
### Ocorrência 03

**Identificação original:** BUG-003

**Título:** O usuário deve marcar uma tarefa como concluída ou pendente

**Conseguimos reproduzir?** Sim

**Status da triagem:**
-   CONFIRMADO

**Justificativa:** O erro ocorre conforme descrito no Modelo Diagnóstico

**Evidência da validação:** Ao checar aba de concluídas, não se percebe nenhuma tarefa, apesar delas terem sido marcadas como concluídas

**Severidade:** Alta

**Prioridade:** Alta

------------------------------------------------------------------------
### Ocorrência 04
**Identificação original:** BUG-004

**Título:** RF06 - O usuário deve filtrar tarefas por status.

**Conseguimos reproduzir?** Sim

**Status da triagem:**
- CONFIRMADO

**Justificativa**: As tarefas não são filtradas corretamente.

**Evidência da validação:** Os passos para reprodução foram seguidos e o BUG está confirmado.

**Severidade:** Alta

**Prioridade:** Alta

---
### Ocorrência 05
**Identificação original:** BUG-005

**Título: RNF03 - A interface deve funcionar em diferentes tamanhos de tela.**

**Conseguimos reproduzir?** Sim, mas talvez seja erro do expo, não conseguimos confirmar.

**Status da triagem:**
- NÃO É BUG

**Justificativa**: A interface possui tamanho fixo e não é responsiva, ao menos em tablets.

**Evidência da validação:** Os passos para reprodução foram seguidos confirmado.

**Severidade:** Média

**Prioridade:** Média

------------------------------------------------------------------------
### Ocorrência 06

**Identificação original:** RF-07

**Título:** Definir prioridade da tarefa

**Conseguimos reproduzir?** Sim

**Status da triagem:**
-   NÃO É BUG

**Justificativa:** Função do aplicativo funcionando conforme o esperado

**Evidência da validação:** Tarefa mantém sua prioridade após ser salva

**Severidade:** Baixa

**Prioridade:** Baixa

---

### Ocorrência 07

**Identificação original:** RNF-02

**Título:** O aplicativo deve apresentar mensagens claras ao usuário

**Conseguimos reproduzir?** Sim

**Status da triagem:**
-   NÃO É BUG

**Justificativa:** Mensagem é exibida conforme o esperado

**Evidência da validação:** Após adicionar tarefa é possível observar um pop-up de confirmação

**Severidade:** Baixa

**Prioridade:** Baixa

---
### Ocorrência 08
**Identificação original:** RNF-01

**Título:** Os dados devem permanecer salvos após fechar o aplicativo.

**Conseguimos reproduzir?** Sim

**Status da triagem:**
- NÃO É BUG

**Justificativa:** Os dados permanecem salvos quando o app é fechado e aberto posteriormente. Funcionando corretamente.

**Evidência da validação:** Os passos para reprodução foram seguidos confirmado.

**Severidade:** Baixa

**Prioridade:** Baixa

---

### Ocorrência 09

**Identificação original:** RNF-04

**Título:** O aplicativo deve manter desempenho adequado durante a listagem.

**Conseguimos reproduzir?** Sim

**Status da triagem:**
-   NÃO É BUG

**Justificativa:** Não há queda perceptível no desempenho do aplicativo

**Evidência da validação:** Aplicativo se mantém estável, sem travamentos 

**Severidade:** Baixa

**Prioridade:** Baixa

---
### Ocorrência 10
**Identificação original:** RNF-05

**Título:** A versão exibida ao usuário deve corresponder à versão configurada no projeto.

**Conseguimos reproduzir?** Sim

**Status da triagem:**
- CONFIRMADO

**Justificativa:** A versão do projeto e a versão mostrada na tela para o usuário não coincidem.

**Evidência da validação:** Os passos para reprodução foram seguidos e confirmado.

**Severidade:** Média

**Prioridade:** Alta

---
## 3. Resultado da triagem

| Ocorrência | Status     | Severidade | Prioridade | Será corrigido nesta Sprint? |
| ---------- | ---------- | ---------- | ---------- | ---------------------------- |
| BUG-001    | Confirmado | Baixa      | Média      | Sim / Não                    |
| BUG-002    | Confirmado | Crítica    | Alta       | Sim / Não                    |
| BUG-003    | Confirmado | Alta       | Alta       | Sim / Não                    |
| BUG-004    | Confirmado | Alta       | Alta       | Sim / Não                    |
| BUG-005    | Confirmado | Média      | Média      | Sim / Não                    |

### Ordem de prioridade definida pela equipe

1.  BUG-002
2.  BUG-001
3.  

**Justifique brevemente a priorização realizada:**
1. Escolhemos o BUG-002 por ser relativamente pequeno, portanto simples de se resolver;
2. O BUG-001 se tratava de uma função que caso implementada corretamente, traria maior polimento ao aplicativo;

------------------------------------------------------------------------

## 4. Investigação dos bugs selecionados

Somente os problemas **confirmados e selecionados para correção**
deverão seguir para esta etapa.

### BUG-002 - O usuário deve concluir uma tarefa corretamente
**Comportamento observado:** Tarefas não estavam sendo filtradas da forma correta

**Causa provável antes da investigação:** Algum filtro tanto não implementado, ou implementado incorretamente em lugar indevido

**Como o problema foi investigado?**

Primeira etapa foi investigar o código fonte do projeto na procura de elementos que fossem relevantes a filtragem de tarefas. Após uma pesquisa preliminar foi descoberto que há uma constante no arquivo HomeScreen.tsx que é responsável pela exibição de tarefas, e ela estava utilizando o mesmo filtro das tarefas pendentes para as completas

**Causa identificada:** Utilização de filtro incorreto na página responsável pela filtragem de tarefas

**Local do problema:** const "VisibleTasks" dentro do arquivo HomeScreen.tsx

**Correção proposta:** Remover ponto de exclamação que antecede "task.completed" na linha 15 de HomeScreen.tsx

**Possíveis impactos da alteração:** Tarefas são filtradas corretamente, número de tarefas completas é atualizado corretamente também como consequência disso

### BUG-001 - O usuário deve cadastrar uma tarefa com título obrigatório

**Comportamento observado:** Tarefas estavam com o campo de título opcional

**Causa provável antes da investigação:** A falta de algum filtro na interface da task, ou a falta de um check na hora de salvar a tarefa

**Como o problema foi investigado?** 

Após vasculhar os arquivos no código fonte relevantes ao objeto da tarefa, foi percebido a falta de um check para textos vazios no arquivo TextFormScreen.tsx, especificamente na função handleSave(), responsável por salvar o arquivo

**Causa identificada:** Falta de check para título vazio na página de preenchimento de tarefa

**Local do problema:** função handleSave() no arquivo TextFormScreen.tsx

**Correção proposta:** Adicionar o seguinte check logo no início da função handleSave():

```tsx
const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      Alert.alert('Atenção', 'Tarefa deve conter título.');
      navigation.goBack();
      return;
    }

    setTitleError('');
```

e o state correspondente:

```tsx
  const [titleError, setTitleError] = useState('');
```

**Possíveis impactos da alteração:** Ao criar ou editar tarefas, o usuário irá ser impedido de saltar suas alterações caso a tarefa não tenha título

### BUG-004 O usuário deve filtrar tarefas por status

**Comportamento observado:** Filtragem de tarefas não estava funcionando corretamente. Tarefas concluídas não apareciam ao filtrar por concluídas

**Causa provável antes da investigação:** Algum filtro sendo aplicado indevidamente durante o processo de filtragem, ou só não sendo aplicado

**Como o problema foi investigado?** 

O problema foi resolvido juntamente ao BUG-002, onde houve uma análise dos arquivos relacionados a filtragem de tarefas em que foi descoberto que a filtragem inteira acontecia na const visibleTasks() dentro do arquivo HomePage.tsx

**Causa identificada:** Utilização de filtro incorreto na página responsável pela filtragem de tarefas

**Local do problema:** const "VisibleTasks" dentro do arquivo HomeScreen.tsx

**Correção proposta:** Remover ponto de exclamação que antecede "task.completed" na linha 15 de HomeScreen.tsx

**Possíveis impactos da alteração:**  Tarefas são filtradas corretamente, número de tarefas completas é atualizado corretamente também como consequência disso

------------------------------------------------------------------------
## 5. Correção realizada

### BUG-002 - O usuário deve concluir uma tarefa corretamente

**Alteração realizada:** Ponto de exclamação removido na linha 15 do arquivo HomeScreen.tsx, logo antes do trecho "task.completed"

**Arquivos/componentes alterados:** const VisibleTasks do arquivo HomeScreen.tsx

**Resultado após a alteração:** Tarefas são filtradas corretamente, número de tarefas completas é atualizado corretamente também como consequência disso

**Evidências:** Ao filtrar por completas, as tarefas completas irão aparecer

### BUG-001 - O usuário deve cadastrar uma tarefa com título obrigatório

**Alteração realizada:** Adicionado um state de erro para os casos onde um título não tenha sido provido pelo usuário. Adicionado um check dentro da função handleSave(), responsável por checar se o título foi ou não provido

**Arquivos/componentes alterados:** Função handleSave() do arquivo TaskFormScreen.tsx, também foi adicionado mais um state a lista de states encontrada no mesmo

**Resultado após a alteração:** Caso o usuário tente salvar uma tarefa sem prover um título, o aplicativo mostra um alerta e volta para tela anterior 

**Evidências:** Ao tentar salvar tarefa sem título, um aviso irá aparecer informando que o usuário deve, obrigatoriamente, prover um título, após isso será enviado a ultima tela em que esteve

### BUG-004 - O usuário deve filtrar tarefas por status

**Alteração realizada:** Ponto de exclamação removido na linha 15 do arquivo HomeScreen.tsx, logo antes do trecho "task.completed"

**Arquivos/componentes alterados:** const VisibleTasks do arquivo HomeScreen.tsx

**Resultado após a alteração:** Tarefas são filtradas corretamente, número de tarefas completas é atualizado corretamente também como consequência disso

**Evidências:** Ao filtrar por completas, as tarefas completas irão aparecer e a quantia de tarefas concluídas logo abaixo do título da página irá subir

---
## 6. Validação da correção

Após realizar a alteração, execute novamente os passos utilizados
originalmente para reproduzir o problema.

### BUG-002 - O usuário deve concluir uma tarefa corretamente

**Resultado esperado:** Ao concluir uma tarefa, elas devem ser mostradas ao usuário filtrar por concluídas

**Resultado obtido após a correção:** Mesmo do resultado esperado

**O problema original deixou de ocorrer?** Sim

**Outras funcionalidades relacionadas foram verificadas?**

Sim, filtro por pendentes

**Status atual:**
-   FIXED --- corrigido pela equipe de desenvolvimento e aguardando
    validação do QA;

**Evidência:**
Ao filtrar por completas, as tarefas completas irão todas aparecer

### BUG-001 - O usuário deve cadastrar uma tarefa com título obrigatório

**Resultado esperado:** Ao tentar salvar tarefa sem título, o usuário deve receber um alerta e ser enviado a página anterior

**Resultado obtido após a correção:** Mesmo do resultado esperado

**O problema original deixou de ocorrer?** Sim

**Outras funcionalidades relacionadas foram verificadas?**

Sim, edição de tarefas e tarefas sem descrição

**Status atual:**
-   FIXED --- corrigido pela equipe de desenvolvimento e aguardando
    validação do QA;

**Evidência:**
Ao tentar salvar tarefa sem título, um aviso irá aparecer informando que o usuário deve, obrigatoriamente, prover um título, após isso será enviado a ultima tela em que esteve

### BUG-004 - O usuário deve filtrar tarefas por status

**Resultado esperado:** Ao concluir uma tarefa, elas devem ser mostradas ao usuário filtrar por concluídas

**Resultado obtido após a correção:** Mesmo do resultado esperado

**O problema original deixou de ocorrer?** Sim

**Outras funcionalidades relacionadas foram verificadas?**

Sim, filtro por pendentes

**Status atual:**
-   FIXED --- corrigido pela equipe de desenvolvimento e aguardando
    validação do QA;

**Evidência:**
Ao filtrar por completas, as tarefas completas irão todas aparecer

------------------------------------------------------------------------

## 7. Sugestões de melhoria recebidas

As sugestões de melhoria apresentadas no diagnóstico original **não
devem ser tratadas automaticamente como bugs**.

| Sugestão                                                                 | Tipo           | Prioridade Sugerida | Justificativa                                                      |
| ------------------------------------------------------------------------ | -------------- | ------------------- | ------------------------------------------------------------------ |
| Melhorar a responsividade da interface para diferentes tamanhos de tela. | UX             | Alta                | Necessário para a experiência de usuários em tablets/foldables     |
| Adicionar uma tela para exibição da versão do aplicativo.                | Interface      | Baixa               | A versão já pode ser vista na página principal                     |
| Atualizar corretamente os contadores de tarefas.                         | Funcionalidade | Alta                | Traz polimento ao sistema, é um elemento íntegro da tela principal |


------------------------------------------------------------------------

## 8. Parecer da equipe de desenvolvimento

Após a triagem, investigação e correções realizadas, descreva o estado
atual da aplicação.

Considere:

-   bugs confirmados;
-   bugs corrigidos;
-   bugs ainda pendentes;
-   problemas que não puderam ser reproduzidos;
-   riscos conhecidos;
-   melhorias que ainda podem ser realizadas.

### Parecer

**A aplicação está mais próxima de uma versão apta para publicação?**

Mais ou menos, agora que bugs óbvios foram corrigidos, o aplicativo conta com um polimento maior lhe tornando mais apelativo aos possíveis usuários... porém ainda lhe falta a responsabilidade necessária para rodar confortavelmente em dispositivos mais largos como tablets ou foldables.

------------------------------------------------------------------------

## 9. Resumo da Sprint

**Quantidade de ocorrências analisadas:** 10
**Bugs confirmados:** 4
**Bugs não reproduzidos:** 0
**Ocorrências que não eram bugs:** 1
**Bugs duplicados:** 0
**Bugs com informações insuficientes:** 0
**Bugs corrigidos:** 3
**Bugs pendentes:** 1
**Melhorias mantidas no backlog:** 2

### Principais aprendizados da equipe

Descreva brevemente o que a equipe aprendeu durante o processo de
análise, reprodução, investigação e correção dos problemas.
