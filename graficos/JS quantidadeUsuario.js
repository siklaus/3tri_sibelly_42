/*Acrescentado recente para chamar o common*/
import { getCSS, tickConfig } from "./common.js"
/*A aula de hoje usará os dados do site abaixo para gerar um gráfico:
https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json*/


/*criar um arquivo dentro da pasta graficos com o nome quantidadeUsuarios.js*/


/*IMPORTANTE colar o seguinte código no index, logo após o footer
<script type="module" src="graficos/quantidadeUsuarios.js"></script>
 */


/*IMPORTANTE: cole o seguinte link na útilma linha antes de fechar o head no index.html (com esse link buscamos um modelo de gráfico para o projeto)
<script src="https://cdn.plot.ly/plotly-2.27.0.min.js" charset="utf-8"></script>*/


/*Cole o conteúdo desse artigo no arquivo criado*/
/*AQUI TINHA UM ERRO*/
async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    /*Contante para aguardar a resposta, será feita a requisição dos dados da url acima*/
    const res = await fetch(url)
     /*onde pegar a resposta e o conteúdo*/
     const dados = await res.json()
     /*separar as chaves (por exemplo facebook) dos valores (quantidade usuários) correspondentes*/
     const nomeDasRedes = Object.keys(dados)
     const quantidadeDeUsuarios = Object.values(dados)
     /*gerando os gráficos*/
     const data = [
         {
             x: nomeDasRedes,
             y: quantidadeDeUsuarios,
             type: 'bar',
             /*Alterar a cor das barras do gráfico*/
             marker: {
                 /*Irá pegar a formatação (estilos) do body*/
                 color: getCSS ('--primary-color')
             }
         }
     ]
     const layout = {
         /*Excluir a cor branca e deixar somente a cor do background, acrescentar layout lá no plotly*/
         plot_bgcolor: getCSS('--bg-color'),
         /*Mudar a cor atrás do grafico*/
         paper_bgcolor: getCSS('--bg-color'),
         /**títulos para o gráfico**/
         title: {
             text: 'Redes Sociais com mais usuários no mundo',
             /**posição alinhado a esquerda */
             x: 0,
             font: {
                 color: getCSS('--primary-color'),
                 size: 30,
                 font: getCSS('--font')
             }
         },
         /**Legente do eixo x e y **/
         xaxis:{
             /**configuração das legendas abaixo de cada barra do gráfico**/
             tickfont: tickConfig, /**Este comando pega a formatação definida no common.js**/
             title:{
                 text:'nome das redes sociais',
                 font: {
                     color: getCSS('--secondary-color')
                 }
             }
         },
         yaxis:{
             tickfont: tickConfig,
             title:{
                 text: 'bilhões de usuários ativos',
                 font: {
                     color: getCSS('--secondary-color')
                 }
             }
 
 
         }
     }
     /*colocar o gráfico dentro de uma div*/
     const grafico = document.createElement('div')
     /*classe css*/
     grafico.className = 'grafico'
     /*Para acessar o código lá do html (o comando appendiChild, serve para inserir o gráfico*/
     document.getElementById('graficos-container').appendChild(grafico)
     /*criar um novo gráfico (com o comando data ele gerará o gráfico com os dados que queremos*/
     Plotly.newPlot(grafico, data, layout)
 }
 /*Chamar a função*/
 /*aqui tinha um ERRO*/
 quantidadeUsuariosPorRede()