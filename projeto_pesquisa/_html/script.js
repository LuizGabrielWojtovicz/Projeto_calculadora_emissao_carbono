
/**
 * 
 * @version: "1.0",
 * @author: "Luiz Gabriel Wojtovicz",
 * @throws: "true",
 * @copyright: "Luiz Gabriel Wojtovicz"
 * 
 * /dados da pesquisa:/
 * 
 * @link http://www.and.org.br/brasil-ja-tem-1-carro-a-cada-4-habitantes-diz-denatran/
 * @link https://conube.com.br/blog/como-definir-o-porte-da-empresa/
 * @link https://www.prestus.com.br/empreendedorismo/de-quantos-funcionarios-voce-realmente-precisa/
 * @link https://www.cnnbrasil.com.br/business/maioria-aprova-o-home-office-mas-ha-preocupacao-com-excesso-de-trabalho/#:~:text=No%20setor%20privado%2C%20segundo%20a%20pesquisa%2C%20destacam-se%20no,estaduais%20%2813%2C9%25%29%20e%20empregados%20do%20governo%20federal%20%287%2C8%25%29.
 * 
 **/

    /**inicio */
/*
    habitantes:
*/ 

const habitantes_umbara = 8591.0;
const habitantes_sitio_cercado = 60719.0;
const habitantes_ganchinho = 4016.0;

/*
    habitantes com carro:
*/

let habitantes_umbara_com_carro;
let habitantes_sitio_cercado_com_carro;
let habitantes_ganchinho_com_carro;

//valores mais relevantes:
let km_percorrido_por_todos;
let km_percorrido_por_clientes_e_habitantes;

/*
    carbono:
*/

const gasolina = [0.18, 0.19, 0.24];
const alcool = [0.17, 0.18, 0.22];
const gnv = [0.13, 0.14, 0.18];
const flex = [0.18, 0.19, 0.24];

/*
    distancia por carro:
*/

const velocidade_media = 50.0;

const avenida_km_percorrido_em_minuto = 0.05;
const bloco_km_percorrido_em_minuto = 0.015;
let km_percorrido_em_minuto;

let distancia_km_durante_um_periodo_cliente_e_habitantes;
let distancia_km_durante_um_periodo_todos;

// var km_percorrido_por_todos;
// var km_percorrido_por_clientes_e_habitantes;

let numero_atividades_economicas;

/*
    media funcionarios:
*/

const funcionarios_media_micro = 5.0;
const funcionarios_media_pequena = 30.0;
const funcionarios_media_media = 75.0;
const funcionarios_media_grande = 100.0;

/*
    media de atendimentos por funcionarios em 1 hr
*/

const atendimentos_por_funcionario_micro = 14.0;
const atendimentos_por_funcionario_pequena = 88.0;
const atendimentos_por_funcionario_media = 223.0;
const atendimentos_por_funcionario_grande = 298.0;

/*
    porcentagem de tamanho das empresas:
*/

let micro_porcentagem = 0.0;
let pequena_porcentagem = 0.0;
let media_porcentagem = 0.0;
let grande_porcentagem = 0.0;

/*
    porcentagem de trabalhadores remotos:
*/

const remoto_servico_porcentagem = 14.5;
const remoto_educacao_porcentagem = 10.3;
const remoto_comunicacao_porcentagem = 7.7;

/*
    porcentagem de carros conforme o combustivel e potencia:
*/

let combustivel_gasolina_potencia_10_14 = 0.0;
let combustivel_gasolina_potencia_15_20 = 0.0;
let combustivel_gasolina_potencia_20_ = 0.0;

let combustivel_alcool_potencia_10_14 = 0.0;
let combustivel_alcool_potencia_15_20 = 0.0;
let combustivel_alcool_potencia_20_ = 0.0;

let combustivel_GNV_potencia_10_14 = 0.0;
let combustivel_GNV_potencia_15_20 = 0.0;
let combustivel_GNV_potencia_20_ = 0.0;

let combustivel_flex_potencia_10_14 = 0.0;
let combustivel_flex_potencia_15_20 = 0.0;
let combustivel_flex_potencia_20_ = 0.0;

/*
    emissão de carbono habitantes e clientes:
*/

let emissao_combustivel_gasolina_potencia_10_14_por_clientes_e_habitantes = 0.0;
let emissao_combustivel_gasolina_potencia_15_20_por_clientes_e_habitantes = 0.0;
let emissao_combustivel_gasolina_potencia_20__por_clientes_e_habitantes = 0.0;

let emissao_combustivel_alcool_potencia_10_14_por_clientes_e_habitantes = 0.0;
let emissao_combustivel_alcool_potencia_15_20_por_clientes_e_habitantes = 0.0;
let emissao_combustivel_alcool_potencia_20__por_clientes_e_habitantes = 0.0;

let emissao_combustivel_GNV_potencia_10_14_por_clientes_e_habitantes = 0.0;
let emissao_combustivel_GNV_potencia_15_20_por_clientes_e_habitantes = 0.0;
let emissao_combustivel_GNV_potencia_20__por_clientes_e_habitantes = 0.0;

let emissao_combustivel_flex_potencia_10_14_por_clientes_e_habitantes = 0.0;
let emissao_combustivel_flex_potencia_15_20_por_clientes_e_habitantes = 0.0;
let emissao_combustivel_flex_potencia_20__por_clientes_e_habitantes = 0.0;

let emissao_de_carbono_por_clientes_e_habitantes = 0.0;

let emissao_de_carbono_por_clientes_e_habitantes_com_efeito_climatico = 0.0;
/*
    emissão de carbono por todos:
*/

let emissao_combustivel_gasolina_potencia_10_14_por_todos;
let emissao_combustivel_gasolina_potencia_15_20_por_todos;
let emissao_combustivel_gasolina_potencia_20__por_todos;

let emissao_combustivel_alcool_potencia_10_14_por_todos;
let emissao_combustivel_alcool_potencia_15_20_por_todos;
let emissao_combustivel_alcool_potencia_20__por_todos;

let emissao_combustivel_GNV_potencia_10_14_por_todos;
let emissao_combustivel_GNV_potencia_15_20_por_todos;
let emissao_combustivel_GNV_potencia_20__por_todos;

let emissao_combustivel_flex_potencia_10_14_por_todos;
let emissao_combustivel_flex_potencia_15_20_por_todos;
let emissao_combustivel_flex_potencia_20__por_todos;

let emissao_de_carbono_por_todos;

let emissao_de_carbono_por_todos_com_efeito_climatico;

/*
    Atividades economicas com o tipo de trabalho:
*/

let atividade_economica_micro_presencial;
let atividade_economica_micro_remoto_servico;
let atividade_economica_micro_remoto_educacao;
let atividade_economica_micro_remoto_comunicacao;

let atividade_economica_pequena_presencial;
let atividade_economica_pequena_remoto_servico;
let atividade_economica_pequena_remoto_educacao;
let atividade_economica_pequena_remoto_comunicacao;

let atividade_economica_media_presencial;
let atividade_economica_media_remoto_servico;
let atividade_economica_media_remoto_educacao;
let atividade_economica_media_remoto_comunicacao;

let atividade_economica_grande_presencial;
let atividade_economica_grande_remoto_servico;
let atividade_economica_grande_remoto_educacao;
let atividade_economica_grande_remoto_comunicacao;

/*
    total atividades economicas:
*/

let total_atividade_economica_micro = 0.0;
let total_atividade_economica_pequena = 0.0;
let total_atividade_economica_media = 0.0;
let total_atividade_economica_grande = 0.0;

let total_atividades_economicas = 0.0;

/*
    Atividades economicas (porcentagem):
*/

let atividade_economica_presencial_porcentagem = 0.0;
let atividade_economica_remoto_servico_porcentagem = 0.0;
let atividade_economica_remoto_educacao_porcentagem = 0.0;
let atividade_economica_remoto_comunicacao_porcentagem = 0.0;

/*

/*
    Pessoas em cada tipo de atividade economica e seu tamanho:
*/

let quantidade_pessoas_atividade_economica_micro_presencial;
let quantidade_pessoas_atividade_economica_micro_remoto_servico;
let quantidade_pessoas_atividade_economica_micro_remoto_educacao;
let quantidade_pessoas_atividade_economica_micro_remoto_comunicacao;

let quantidade_pessoas_atividade_economica_pequena_presencial;
let quantidade_pessoas_atividade_economica_pequena_remoto_servico;
let quantidade_pessoas_atividade_economica_pequena_remoto_educacao;
let quantidade_pessoas_atividade_economica_pequena_remoto_comunicacao;

let quantidade_pessoas_atividade_economica_media_presencial;
let quantidade_pessoas_atividade_economica_media_remoto_servico;
let quantidade_pessoas_atividade_economica_media_remoto_educacao;
let quantidade_pessoas_atividade_economica_media_remoto_comunicacao;

let quantidade_pessoas_atividade_economica_grande_presencial;
let quantidade_pessoas_atividade_economica_grande_remoto_servico;
let quantidade_pessoas_atividade_economica_grande_remoto_educacao;
let quantidade_pessoas_atividade_economica_grande_remoto_comunicacao;

/*
    Clientes em cada tipo de atividade economica e seu tamanho:
*/

let quantidade_clientes_atividade_economica_micro_presencial = 0.0;
let quantidade_clientes_atividade_economica_micro_remoto_servico = 0.0;
let quantidade_clientes_atividade_economica_micro_remoto_educacao = 0.0;
let quantidade_clientes_atividade_economica_micro_remoto_comunicacao = 0.0;

let quantidade_clientes_atividade_economica_pequena_presencial = 0.0;
let quantidade_clientes_atividade_economica_pequena_remoto_servico = 0.0;
let quantidade_clientes_atividade_economica_pequena_remoto_educacao = 0.0;
let quantidade_clientes_atividade_economica_pequena_remoto_comunicacao = 0.0;

let quantidade_clientes_atividade_economica_media_presencial = 0.0;
let quantidade_clientes_atividade_economica_media_remoto_servico = 0.0;
let quantidade_clientes_atividade_economica_media_remoto_educacao = 0.0;
let quantidade_clientes_atividade_economica_media_remoto_comunicacao = 0.0;

let quantidade_clientes_atividade_economica_grande_presencial = 0.0;
let quantidade_clientes_atividade_economica_grande_remoto_servico = 0.0;
let quantidade_clientes_atividade_economica_grande_remoto_educacao = 0.0;
let quantidade_clientes_atividade_economica_grande_remoto_comunicacao = 0.0;

/*
    Funcionarios em cada tipo de atividade economica e seu tamanho:
*/

let quantidade_funcionarios_atividade_economica_micro_presencial = 0.0;
let quantidade_funcionarios_atividade_economica_micro_remoto_servico = 0.0;
let quantidade_funcionarios_atividade_economica_micro_remoto_educacao = 0.0;
let quantidade_funcionarios_atividade_economica_micro_remoto_comunicacao = 0.0;

let quantidade_funcionarios_atividade_economica_pequena_presencial = 0.0;
let quantidade_funcionarios_atividade_economica_pequena_remoto_servico = 0.0;
let quantidade_funcionarios_atividade_economica_pequena_remoto_educacao = 0.0;
let quantidade_funcionarios_atividade_economica_pequena_remoto_comunicacao = 0.0;

let quantidade_funcionarios_atividade_economica_media_presencial = 0.0;
let quantidade_funcionarios_atividade_economica_media_remoto_servico = 0.0;
let quantidade_funcionarios_atividade_economica_media_remoto_educacao = 0.0;
let quantidade_funcionarios_atividade_economica_media_remoto_comunicacao = 0.0;

let quantidade_funcionarios_atividade_economica_grande_presencial = 0.0;
let quantidade_funcionarios_atividade_economica_grande_remoto_servico = 0.0;
let quantidade_funcionarios_atividade_economica_grande_remoto_educacao = 0.0;
let quantidade_funcionarios_atividade_economica_grande_remoto_comunicacao = 0.0;

/*
    valores finais:
*/

let quantidade_clientes_atividade_economica = 0.0;
let quantidade_funcionarios_atividade_economica = 0.0;

let quantidade_clientes_atividade_economica_com_carro = 0.0;
let quantidade_funcionarios_atividade_economica_com_carro = 0.0;
let quantidade_clientes_e_funcionarios_atividade_economica_com_carro = 0.0;
let quantidade_habitantes_com_carro = 0.0;

let km_percorrido_por_clientes = 0.0;
let km_percorrido_por_funcionarios = 0.0;
let km_percorrido_por_clientes_e_funcionarios = 0.0;
let km_percorrido_por_habitantes = 0.0;


/*
-> quantidade de atividades economicas
-> se elas são micro, pequena, media ou grande
-> porcentagem das potencias dos veiculos
*/

// quantidade <=> quantidade max 

/** fim */

/*
    funções para calculo de funcionarios e clientes:
*/

const micro = (quantidade, porcentagem) =>
{
    let numero_pessoas = ((quantidade * numero_atividades_economicas) / 100) * (funcionarios_media_micro + atendimentos_por_funcionario_micro);
    let numero_pessoas_total = (porcentagem * numero_pessoas) / 100;
    return numero_pessoas_total;
}

const pequena = (quantidade, porcentagem) =>
{
    let numero_pessoas = ((quantidade * numero_atividades_economicas) / 100) * (funcionarios_media_pequena + atendimentos_por_funcionario_pequena);
    let numero_pessoas_total = (porcentagem * numero_pessoas) / 100;
    return numero_pessoas_total;
}

const media = (quantidade, porcentagem) => 
{
    let numero_pessoas = ((quantidade * numero_atividades_economicas) / 100) * (funcionarios_media_media + atendimentos_por_funcionario_media);
    let numero_pessoas_total = (porcentagem * numero_pessoas) / 100;
    return numero_pessoas_total;
}

const grande = (quantidade, porcentagem) =>
{
    let numero_pessoas = ((quantidade * numero_atividades_economicas) / 100) * (funcionarios_media_grande + atendimentos_por_funcionario_grande);
    let numero_pessoas_total = (porcentagem * numero_pessoas) / 100;
    return numero_pessoas_total;
}

/*
    funções para calculo de clientes:
*/

const micro_clientes = (quantidade, porcentagem) =>
{
    let numero_pessoas = ((quantidade * numero_atividades_economicas) / 100) * (atendimentos_por_funcionario_micro);
    let numero_pessoas_total = (porcentagem * numero_pessoas) / 100;
    return numero_pessoas_total;
}

const pequena_clientes = (quantidade, porcentagem) =>
{
    let numero_pessoas = ((quantidade * numero_atividades_economicas) / 100) * (atendimentos_por_funcionario_pequena);
    let numero_pessoas_total = (porcentagem * numero_pessoas) / 100;
    return numero_pessoas_total;
}

const media_clientes = (quantidade, porcentagem) =>
{
    let numero_pessoas = ((quantidade * numero_atividades_economicas) / 100) * (atendimentos_por_funcionario_media);
    let numero_pessoas_total = (porcentagem * numero_pessoas) / 100;
    return numero_pessoas_total;
}

const grande_clientes = (quantidade, porcentagem) =>
{
    let numero_pessoas = ((quantidade * numero_atividades_economicas) / 100) * (atendimentos_por_funcionario_grande);
    let numero_pessoas_total = (porcentagem * numero_pessoas) / 100;
    return numero_pessoas_total;
}

/*
    funções para calculos de funcionarios:
*/

const micro_funcionarios = (quantidade, porcentagem) =>
{
    let numero_pessoas = ((quantidade * numero_atividades_economicas) / 100) * (funcionarios_media_micro);
    let numero_pessoas_total = (porcentagem * numero_pessoas) / 100;
    return numero_pessoas_total;
}

const pequena_funcionarios = (quantidade, porcentagem) =>
{
    let numero_pessoas = ((quantidade * numero_atividades_economicas) / 100) * (funcionarios_media_pequena);
    let numero_pessoas_total = (porcentagem * numero_pessoas) / 100;
    return numero_pessoas_total;
}

const media_funcionarios = (quantidade, porcentagem) =>
{
    let numero_pessoas = ((quantidade * numero_atividades_economicas) / 100) * (funcionarios_media_media);
    let numero_pessoas_total = (porcentagem * numero_pessoas) / 100;
    return numero_pessoas_total;
}

const grande_funcionarios = (quantidade, porcentagem) =>
{
    let numero_pessoas = ((quantidade * numero_atividades_economicas) / 100) * (funcionarios_media_grande);
    let numero_pessoas_total = (porcentagem * numero_pessoas) / 100;
    return numero_pessoas_total;
}

/*
    bairro selecionado:
*/

const bairro_sitio_cercado = () =>
{
    quantidade_habitantes_com_carro = habitantes_sitio_cercado_com_carro;
}

const bairro_umbara = () =>
{
    quantidade_habitantes_com_carro = habitantes_umbara_com_carro;
}

const bairro_ganchinho = () =>
{
    quantidade_habitantes_com_carro = habitantes_ganchinho_com_carro;
}

/*
    função calculadora:
*/


function porcentagem_validacao ()
{


    let a01 = parseFloat(document.getElementById("10a").value);
    let b01 = parseFloat(document.getElementById("10b").value);
    let c01 = parseFloat(document.getElementById("10c").value);

    let a02 = parseFloat(document.getElementById("20a").value);
    let b02 = parseFloat(document.getElementById("20b").value);
    let c02 = parseFloat(document.getElementById("20c").value);

    let a03 = parseFloat(document.getElementById("30a").value);
    let b03 = parseFloat(document.getElementById("30b").value);
    let c03 = parseFloat(document.getElementById("30c").value);

    let a04 = parseFloat(document.getElementById("40a").value);
    let b04 = parseFloat(document.getElementById("40b").value);
    let c04 = parseFloat(document.getElementById("40c").value);

    let mp = Number(document.getElementById("micro_presencial").value);
    let mrs = Number(document.getElementById("micro_remoto_servico").value);
    let mre = Number(document.getElementById("micro_remoto_educacao").value);
    let mrc = Number(document.getElementById("micro_remoto_comunicacao").value);

    let pp = Number(document.getElementById("pequena_presencial").value);
    let prs = Number(document.getElementById("pequena_remoto_servico").value);
    let pre = Number(document.getElementById("pequena_remoto_educacao").value);
    let prc = Number(document.getElementById("pequena_remoto_comunicacao").value);

    let mep = Number(document.getElementById('media_presencial').value);
    let mers = Number(document.getElementById('media_remoto_servico').value);
    let mere = Number(document.getElementById('media_remoto_educacao').value);
    let merc = Number(document.getElementById('media_remoto_comunicacao').value);

    let gp = Number(document.getElementById('grande_presencial').value);
    let grs = Number(document.getElementById('grande_remoto_servico').value);
    let gre = Number(document.getElementById('grande_remoto_educacao').value);
    let grc = Number(document.getElementById('grande_remoto_comunicacao').value);

    numero_atividades_economicas = Number(document.getElementById('numero_atividades_economicas').value)
    let local = String(document.getElementById('local').value);
    let efeito_climatico = String(document.getElementById('efeito_climatico').value);


        if((a01 + b01 + c01 + a02 + b02 + c02 + a03 + b03 + c03 + a04 + b04 + c04) == 100 
        && (mp + mrs + mre + mrc + pp + prs + pre + prc + mep + mers + mere + merc + gp + grs + gre + grc) == 100)
        {
            habitantes_umbara_com_carro = habitantes_umbara / 4.0;
            habitantes_sitio_cercado_com_carro = habitantes_sitio_cercado / 4.0;
            habitantes_ganchinho_com_carro = habitantes_ganchinho / 4.0;

            combustivel_gasolina_potencia_10_14 = a01;
            combustivel_gasolina_potencia_15_20 = b01;
            combustivel_gasolina_potencia_20_ = c01;

            combustivel_alcool_potencia_10_14 = a02;
            combustivel_alcool_potencia_15_20 = b02;
            combustivel_alcool_potencia_20_ = c02;

            combustivel_GNV_potencia_10_14 = a03;
            combustivel_GNV_potencia_15_20 = b03;
            combustivel_GNV_potencia_20_ = c03;

            combustivel_flex_potencia_10_14 = a04;
            combustivel_flex_potencia_15_20 = b04;
            combustivel_flex_potencia_20_ = c04;

            atividade_economica_micro_presencial = mp;
            atividade_economica_micro_remoto_servico = mrs;
            atividade_economica_micro_remoto_educacao = mre;
            atividade_economica_micro_remoto_comunicacao = mrc;
            total_atividade_economica_micro = 
            atividade_economica_micro_presencial + 
            atividade_economica_micro_remoto_servico +
            atividade_economica_micro_remoto_educacao + 
            atividade_economica_micro_remoto_comunicacao;

            atividade_economica_pequena_presencial = pp;
            atividade_economica_pequena_remoto_servico = prs;
            atividade_economica_pequena_remoto_educacao = pre;
            atividade_economica_pequena_remoto_comunicacao = prc;
            total_atividade_economica_pequena = 
            atividade_economica_pequena_presencial + 
            atividade_economica_pequena_remoto_servico +
            atividade_economica_pequena_remoto_educacao + 
            atividade_economica_pequena_remoto_comunicacao;

            atividade_economica_media_presencial = mep;
            atividade_economica_media_remoto_servico = mers;
            atividade_economica_media_remoto_educacao = mere;
            atividade_economica_media_remoto_comunicacao = merc;
            total_atividade_economica_media = 
            atividade_economica_media_presencial + 
            atividade_economica_media_remoto_servico +
            atividade_economica_media_remoto_educacao + 
            atividade_economica_media_remoto_comunicacao;

            atividade_economica_grande_presencial = gp;
            atividade_economica_grande_remoto_servico = grs;
            atividade_economica_grande_remoto_educacao = gre;
            atividade_economica_grande_remoto_comunicacao = grc;
            total_atividade_economica_grande = 
            atividade_economica_grande_presencial + 
            atividade_economica_grande_remoto_servico +
            atividade_economica_grande_remoto_educacao + 
            atividade_economica_grande_remoto_comunicacao;

            total_atividades_economicas = 
            total_atividade_economica_micro + 
            total_atividade_economica_pequena + 
            total_atividade_economica_media + 
            total_atividade_economica_grande;

            //clientes e funcionarios:

            quantidade_pessoas_atividade_economica_micro_presencial = micro(atividade_economica_micro_presencial, 0.0);
            quantidade_pessoas_atividade_economica_micro_remoto_servico = micro(atividade_economica_micro_remoto_servico, remoto_servico_porcentagem);
            quantidade_pessoas_atividade_economica_micro_remoto_educacao = micro(atividade_economica_micro_remoto_educacao, remoto_educacao_porcentagem);
            quantidade_pessoas_atividade_economica_micro_remoto_comunicacao = micro(atividade_economica_micro_remoto_comunicacao, remoto_comunicacao_porcentagem);

            quantidade_pessoas_atividade_economica_pequena_presencial = pequena(atividade_economica_pequena_presencial, 0.0);
            quantidade_pessoas_atividade_economica_pequena_remoto_servico = pequena(atividade_economica_pequena_remoto_servico, remoto_servico_porcentagem);
            quantidade_pessoas_atividade_economica_pequena_remoto_educacao = pequena(atividade_economica_pequena_remoto_educacao, remoto_educacao_porcentagem);
            quantidade_pessoas_atividade_economica_pequena_remoto_comunicacao = pequena(atividade_economica_pequena_remoto_comunicacao, remoto_comunicacao_porcentagem);

            quantidade_pessoas_atividade_economica_media_presencial = media(atividade_economica_media_presencial, 0.0);
            quantidade_pessoas_atividade_economica_media_remoto_servico = media(atividade_economica_media_remoto_servico, remoto_servico_porcentagem);
            quantidade_pessoas_atividade_economica_media_remoto_educacao = media(atividade_economica_media_remoto_educacao, remoto_educacao_porcentagem);
            quantidade_pessoas_atividade_economica_media_remoto_comunicacao = media(atividade_economica_media_remoto_comunicacao, remoto_comunicacao_porcentagem);

            quantidade_pessoas_atividade_economica_grande_presencial = grande(atividade_economica_grande_presencial, 0.0);
            quantidade_pessoas_atividade_economica_grande_remoto_servico = grande(atividade_economica_grande_remoto_servico, remoto_servico_porcentagem);
            quantidade_pessoas_atividade_economica_grande_remoto_educacao = grande(atividade_economica_grande_remoto_educacao, remoto_educacao_porcentagem);
            quantidade_pessoas_atividade_economica_grande_remoto_comunicacao = grande(atividade_economica_grande_remoto_comunicacao, remoto_comunicacao_porcentagem);

            //apenas clientes:

            quantidade_clientes_atividade_economica_micro_presencial = micro_clientes(atividade_economica_micro_presencial, 0);
            quantidade_clientes_atividade_economica_micro_remoto_servico = micro_clientes(atividade_economica_micro_remoto_servico, remoto_servico_porcentagem);
            quantidade_clientes_atividade_economica_micro_remoto_educacao = micro_clientes(atividade_economica_micro_remoto_educacao, remoto_educacao_porcentagem);
            quantidade_clientes_atividade_economica_micro_remoto_comunicacao = micro_clientes(atividade_economica_micro_remoto_comunicacao, remoto_comunicacao_porcentagem);

            quantidade_clientes_atividade_economica_pequena_presencial = pequena_clientes(atividade_economica_pequena_presencial, 0);
            quantidade_clientes_atividade_economica_pequena_remoto_servico = pequena_clientes(atividade_economica_pequena_remoto_servico, remoto_servico_porcentagem);
            quantidade_clientes_atividade_economica_pequena_remoto_educacao = pequena_clientes(atividade_economica_pequena_remoto_educacao, remoto_educacao_porcentagem);
            quantidade_clientes_atividade_economica_pequena_remoto_comunicacao = pequena_clientes(atividade_economica_pequena_remoto_comunicacao, remoto_comunicacao_porcentagem);

            quantidade_clientes_atividade_economica_media_presencial = media_clientes(atividade_economica_media_presencial, 0);
            quantidade_clientes_atividade_economica_media_remoto_servico = media_clientes(atividade_economica_media_remoto_servico, remoto_servico_porcentagem);
            quantidade_clientes_atividade_economica_media_remoto_educacao = media_clientes(atividade_economica_media_remoto_educacao, remoto_educacao_porcentagem);
            quantidade_clientes_atividade_economica_media_remoto_comunicacao = media_clientes(atividade_economica_media_remoto_comunicacao, remoto_comunicacao_porcentagem);

            quantidade_clientes_atividade_economica_grande_presencial = grande_clientes(atividade_economica_grande_presencial, 0);
            quantidade_clientes_atividade_economica_grande_remoto_servico = grande_clientes(atividade_economica_grande_remoto_servico, remoto_servico_porcentagem);
            quantidade_clientes_atividade_economica_grande_remoto_educacao = grande_clientes(atividade_economica_grande_remoto_educacao, remoto_educacao_porcentagem);
            quantidade_clientes_atividade_economica_grande_remoto_comunicacao = grande_clientes(atividade_economica_grande_remoto_comunicacao, remoto_comunicacao_porcentagem);

            //apenas funcionarios:

            quantidade_funcionarios_atividade_economica_micro_presencial = micro_funcionarios(atividade_economica_micro_presencial, 0);
            quantidade_funcionarios_atividade_economica_micro_remoto_servico = micro_funcionarios(atividade_economica_micro_remoto_servico, remoto_servico_porcentagem);
            quantidade_funcionarios_atividade_economica_micro_remoto_educacao = micro_funcionarios(atividade_economica_micro_remoto_educacao, remoto_educacao_porcentagem);
            quantidade_funcionarios_atividade_economica_micro_remoto_comunicacao = micro_funcionarios(atividade_economica_micro_remoto_comunicacao, remoto_comunicacao_porcentagem);

            quantidade_funcionarios_atividade_economica_pequena_presencial = pequena_funcionarios(atividade_economica_pequena_presencial, 0);
            quantidade_funcionarios_atividade_economica_pequena_remoto_servico = pequena_funcionarios(atividade_economica_pequena_remoto_servico, remoto_servico_porcentagem);
            quantidade_funcionarios_atividade_economica_pequena_remoto_educacao = pequena_funcionarios(atividade_economica_pequena_remoto_educacao, remoto_educacao_porcentagem);
            quantidade_funcionarios_atividade_economica_pequena_remoto_comunicacao = pequena_funcionarios(atividade_economica_pequena_remoto_comunicacao, remoto_comunicacao_porcentagem);

            quantidade_funcionarios_atividade_economica_media_presencial = media_funcionarios(atividade_economica_media_presencial, 0);
            quantidade_funcionarios_atividade_economica_media_remoto_servico = media_funcionarios(atividade_economica_media_remoto_servico, remoto_servico_porcentagem);
            quantidade_funcionarios_atividade_economica_media_remoto_educacao = media_funcionarios(atividade_economica_media_remoto_educacao, remoto_educacao_porcentagem);
            quantidade_funcionarios_atividade_economica_media_remoto_comunicacao = media_funcionarios(atividade_economica_media_remoto_comunicacao, remoto_comunicacao_porcentagem);

            quantidade_funcionarios_atividade_economica_grande_presencial = grande_funcionarios(atividade_economica_grande_presencial, 0);
            quantidade_funcionarios_atividade_economica_grande_remoto_servico = grande_funcionarios(atividade_economica_grande_remoto_servico, remoto_servico_porcentagem);
            quantidade_funcionarios_atividade_economica_grande_remoto_educacao = grande_funcionarios(atividade_economica_grande_remoto_educacao, remoto_educacao_porcentagem);
            quantidade_funcionarios_atividade_economica_grande_remoto_comunicacao = grande_funcionarios(atividade_economica_grande_remoto_comunicacao, remoto_comunicacao_porcentagem);

            //soma da quantidade de clientes:

            quantidade_clientes_atividade_economica = 
            quantidade_clientes_atividade_economica_micro_presencial +
            quantidade_clientes_atividade_economica_micro_remoto_servico +
            quantidade_clientes_atividade_economica_micro_remoto_educacao +
            quantidade_clientes_atividade_economica_micro_remoto_comunicacao +
            quantidade_clientes_atividade_economica_pequena_presencial +
            quantidade_clientes_atividade_economica_pequena_remoto_servico +
            quantidade_clientes_atividade_economica_pequena_remoto_educacao +
            quantidade_clientes_atividade_economica_pequena_remoto_comunicacao +
            quantidade_clientes_atividade_economica_media_presencial +
            quantidade_clientes_atividade_economica_media_remoto_servico +
            quantidade_clientes_atividade_economica_media_remoto_educacao +
            quantidade_clientes_atividade_economica_media_remoto_comunicacao +
            quantidade_clientes_atividade_economica_grande_presencial +
            quantidade_clientes_atividade_economica_grande_remoto_servico +
            quantidade_clientes_atividade_economica_grande_remoto_educacao +
            quantidade_clientes_atividade_economica_grande_remoto_comunicacao;

            //soma da quantidade de funcionarios:

            quantidade_funcionarios_atividade_economica =
            quantidade_funcionarios_atividade_economica_micro_presencial +
            quantidade_funcionarios_atividade_economica_micro_remoto_servico +
            quantidade_funcionarios_atividade_economica_micro_remoto_educacao +
            quantidade_funcionarios_atividade_economica_micro_remoto_comunicacao +
            quantidade_funcionarios_atividade_economica_pequena_presencial +
            quantidade_funcionarios_atividade_economica_pequena_remoto_servico +
            quantidade_funcionarios_atividade_economica_pequena_remoto_educacao +
            quantidade_funcionarios_atividade_economica_pequena_remoto_comunicacao +
            quantidade_funcionarios_atividade_economica_media_presencial +
            quantidade_funcionarios_atividade_economica_media_remoto_servico +
            quantidade_funcionarios_atividade_economica_media_remoto_educacao +
            quantidade_funcionarios_atividade_economica_media_remoto_comunicacao +
            quantidade_funcionarios_atividade_economica_grande_presencial +
            quantidade_funcionarios_atividade_economica_grande_remoto_servico +
            quantidade_funcionarios_atividade_economica_grande_remoto_educacao +
            quantidade_funcionarios_atividade_economica_grande_remoto_comunicacao;

                        //kms percorridos:

                        if(local == 'a')
                        {
            
                            km_percorrido_em_minuto = avenida_km_percorrido_em_minuto;
                            km_percorrido_por_clientes = quantidade_clientes_atividade_economica_com_carro * km_percorrido_em_minuto;
                            km_percorrido_por_funcionarios = quantidade_funcionarios_atividade_economica_com_carro * km_percorrido_em_minuto;
                            km_percorrido_por_clientes_e_funcionarios = quantidade_clientes_e_funcionarios_atividade_economica_com_carro * km_percorrido_em_minuto;
                            km_percorrido_por_todos = km_percorrido_por_clientes_e_funcionarios + (quantidade_habitantes_com_carro * km_percorrido_em_minuto);
                            km_percorrido_por_clientes_e_habitantes = (quantidade_habitantes_com_carro * km_percorrido_em_minuto) + km_percorrido_por_clientes;
                        }
                        else if(local == 'b')
                        {
                            km_percorrido_em_minuto = bloco_km_percorrido_em_minuto;
                            km_percorrido_por_clientes = quantidade_clientes_atividade_economica_com_carro * km_percorrido_em_minuto;
                            km_percorrido_por_funcionarios = quantidade_funcionarios_atividade_economica_com_carro * km_percorrido_em_minuto;
                            km_percorrido_por_clientes_e_funcionarios = quantidade_clientes_e_funcionarios_atividade_economica_com_carro * km_percorrido_em_minuto;
                            km_percorrido_por_todos = km_percorrido_por_clientes_e_funcionarios + (quantidade_habitantes_com_carro * km_percorrido_em_minuto);
                            km_percorrido_por_clientes_e_habitantes = (quantidade_habitantes_com_carro * km_percorrido_em_minuto) + km_percorrido_por_clientes;
                        }                      

            //quantidade de funcionarios e clientes com carro:

            quantidade_clientes_atividade_economica_com_carro = quantidade_clientes_atividade_economica / 4;
            quantidade_funcionarios_atividade_economica_com_carro = quantidade_funcionarios_atividade_economica / 4;
            quantidade_clientes_e_funcionarios_atividade_economica_com_carro = quantidade_clientes_atividade_economica_com_carro + quantidade_funcionarios_atividade_economica_com_carro;


            emissao_combustivel_gasolina_potencia_10_14_por_clientes_e_habitantes = ((km_percorrido_por_clientes_e_habitantes * combustivel_gasolina_potencia_10_14) / 100) * gasolina[0];
            emissao_combustivel_gasolina_potencia_15_20_por_clientes_e_habitantes = ((km_percorrido_por_clientes_e_habitantes * combustivel_gasolina_potencia_15_20) / 100) * gasolina[1];
            emissao_combustivel_gasolina_potencia_20__por_clientes_e_habitantes = ((km_percorrido_por_clientes_e_habitantes * combustivel_gasolina_potencia_20_) / 100) * gasolina[2];

            emissao_combustivel_alcool_potencia_10_14_por_clientes_e_habitantes = ((km_percorrido_por_clientes_e_habitantes * combustivel_alcool_potencia_10_14) / 100) * alcool[0];
            emissao_combustivel_alcool_potencia_15_20_por_clientes_e_habitantes = ((km_percorrido_por_clientes_e_habitantes * combustivel_alcool_potencia_15_20) / 100) * alcool[1];
            emissao_combustivel_alcool_potencia_20__por_clientes_e_habitantes = ((km_percorrido_por_clientes_e_habitantes * combustivel_alcool_potencia_20_) / 100) * alcool[2];

            emissao_combustivel_GNV_potencia_10_14_por_clientes_e_habitantes = ((km_percorrido_por_clientes_e_habitantes * combustivel_GNV_potencia_10_14) / 100) * gnv[0];
            emissao_combustivel_GNV_potencia_15_20_por_clientes_e_habitantes = ((km_percorrido_por_clientes_e_habitantes * combustivel_GNV_potencia_15_20) / 100) * gnv[1];
            emissao_combustivel_GNV_potencia_20__por_clientes_e_habitantes = ((km_percorrido_por_clientes_e_habitantes * combustivel_GNV_potencia_20_) / 100) * gnv[2];

            emissao_combustivel_flex_potencia_10_14_por_clientes_e_habitantes = ((km_percorrido_por_clientes_e_habitantes * combustivel_flex_potencia_10_14) / 100) * flex[0];
            emissao_combustivel_flex_potencia_15_20_por_clientes_e_habitantes = ((km_percorrido_por_clientes_e_habitantes * combustivel_flex_potencia_15_20) / 100) * flex[1];
            emissao_combustivel_flex_potencia_20__por_clientes_e_habitantes = ((km_percorrido_por_clientes_e_habitantes * combustivel_flex_potencia_20_) / 100) * flex[2];

            emissao_de_carbono_por_clientes_e_habitantes = 
            emissao_combustivel_gasolina_potencia_10_14_por_clientes_e_habitantes +
            emissao_combustivel_gasolina_potencia_15_20_por_clientes_e_habitantes +
            emissao_combustivel_gasolina_potencia_20__por_clientes_e_habitantes +
            emissao_combustivel_alcool_potencia_10_14_por_clientes_e_habitantes +
            emissao_combustivel_alcool_potencia_15_20_por_clientes_e_habitantes +
            emissao_combustivel_alcool_potencia_20__por_clientes_e_habitantes +
            emissao_combustivel_GNV_potencia_10_14_por_clientes_e_habitantes +
            emissao_combustivel_GNV_potencia_15_20_por_clientes_e_habitantes +
            emissao_combustivel_GNV_potencia_20__por_clientes_e_habitantes +
            emissao_combustivel_flex_potencia_10_14_por_clientes_e_habitantes +
            emissao_combustivel_flex_potencia_15_20_por_clientes_e_habitantes +
            emissao_combustivel_flex_potencia_20__por_clientes_e_habitantes;

            emissao_de_carbono_por_clientes_e_habitantes_com_efeito_climatico = emissao_de_carbono_por_clientes_e_habitantes + ((40 * emissao_de_carbono_por_clientes_e_habitantes) / 100);

            emissao_combustivel_gasolina_potencia_10_14_por_todos = ((km_percorrido_por_todos * combustivel_gasolina_potencia_10_14) / 100) * gasolina[0];
            emissao_combustivel_gasolina_potencia_15_20_por_todos = ((km_percorrido_por_todos * combustivel_gasolina_potencia_15_20) / 100) * gasolina[1];
            emissao_combustivel_gasolina_potencia_20__por_todos = ((km_percorrido_por_todos * combustivel_gasolina_potencia_20_) / 100) * gasolina[2];

            emissao_combustivel_alcool_potencia_10_14_por_todos = ((km_percorrido_por_todos * combustivel_alcool_potencia_10_14) / 100) * alcool[0];
            emissao_combustivel_alcool_potencia_15_20_por_todos = ((km_percorrido_por_todos * combustivel_alcool_potencia_15_20) / 100) * alcool[1];
            emissao_combustivel_alcool_potencia_20__por_todos = ((km_percorrido_por_todos * combustivel_alcool_potencia_20_) / 100) * alcool[2];

            emissao_combustivel_GNV_potencia_10_14_por_todos = ((km_percorrido_por_todos * combustivel_GNV_potencia_10_14) / 100) * gnv[0];
            emissao_combustivel_GNV_potencia_15_20_por_todos = ((km_percorrido_por_todos * combustivel_GNV_potencia_15_20) / 100) * gnv[1];
            emissao_combustivel_GNV_potencia_20__por_todos = ((km_percorrido_por_todos * combustivel_GNV_potencia_20_) / 100) * gnv[2];

            emissao_combustivel_flex_potencia_10_14_por_todos = ((km_percorrido_por_todos * combustivel_flex_potencia_10_14) / 100) * flex[0];
            emissao_combustivel_flex_potencia_15_20_por_todos = ((km_percorrido_por_todos * combustivel_flex_potencia_15_20) / 100) * flex[1];
            emissao_combustivel_flex_potencia_20__por_todos = ((km_percorrido_por_todos * combustivel_flex_potencia_20_) / 100) * flex[2];

            emissao_de_carbono_por_todos = 
            emissao_combustivel_gasolina_potencia_10_14_por_todos +
            emissao_combustivel_gasolina_potencia_15_20_por_todos +
            emissao_combustivel_gasolina_potencia_20__por_todos +
            emissao_combustivel_alcool_potencia_10_14_por_todos +
            emissao_combustivel_alcool_potencia_15_20_por_todos +
            emissao_combustivel_alcool_potencia_20__por_todos +
            emissao_combustivel_GNV_potencia_10_14_por_todos +
            emissao_combustivel_GNV_potencia_15_20_por_todos +
            emissao_combustivel_GNV_potencia_20__por_todos +
            emissao_combustivel_flex_potencia_10_14_por_todos +
            emissao_combustivel_flex_potencia_15_20_por_todos +
            emissao_combustivel_flex_potencia_20__por_todos;

            emissao_de_carbono_por_todos_com_efeito_climatico = emissao_de_carbono_por_todos + ((40 * emissao_de_carbono_por_todos) / 100);

            // atividade_economica_presencial_porcentagem = (100 * atividade_economica_presencial) / total_atividades_economicas;
            // atividade_economica_remoto_servico_porcentagem = (100 * atividade_economica_remoto_educacao) / total_atividades_economicas;
            // atividade_economica_remoto_educacao_porcentagem = (100 * atividade_economica_remoto_educacao) / total_atividades_economicas;
            // atividade_economica_remoto_comunicacao_porcentagem = (100 * atividade_economica_remoto_comunicacao) / total_atividades_economicas;


            if(local == 'a' && efeito_climatico == 's')
            {
                km_percorrido_em_minuto = avenida_km_percorrido_em_minuto;

                //aqui: 
                distancia_km_durante_um_periodo_cliente_e_habitantes = velocidade_media * km_percorrido_em_minuto;
                distancia_km_durante_um_periodo_todos = velocidade_media * km_percorrido_em_minuto;

                km_percorrido_por_clientes = quantidade_clientes_atividade_economica_com_carro * km_percorrido_em_minuto;
                km_percorrido_por_funcionarios = quantidade_funcionarios_atividade_economica_com_carro * km_percorrido_em_minuto;
                km_percorrido_por_clientes_e_funcionarios = quantidade_clientes_e_funcionarios_atividade_economica_com_carro * km_percorrido_em_minuto;
                km_percorrido_por_todos = km_percorrido_por_clientes_e_funcionarios + (quantidade_habitantes_com_carro * km_percorrido_em_minuto);
                km_percorrido_por_clientes_e_habitantes = (quantidade_habitantes_com_carro * km_percorrido_em_minuto) + km_percorrido_por_clientes;

                document.getElementById("resultado")
                .innerHTML = emissao_de_carbono_por_todos_com_efeito_climatico.toFixed(2) + " kg de CO2eq é gerado pelos carros em um período de uma hora";

            }
            else if(local == 'a' && efeito_climatico == 'n')
            {
                km_percorrido_em_minuto = avenida_km_percorrido_em_minuto;

                //aqui:
                distancia_km_durante_um_periodo_cliente_e_habitantes = velocidade_media * km_percorrido_em_minuto;
                distancia_km_durante_um_periodo_todos = velocidade_media * km_percorrido_em_minuto;

                km_percorrido_por_clientes = quantidade_clientes_atividade_economica_com_carro * km_percorrido_em_minuto;
                km_percorrido_por_funcionarios = quantidade_funcionarios_atividade_economica_com_carro * km_percorrido_em_minuto;
                km_percorrido_por_clientes_e_funcionarios = quantidade_clientes_e_funcionarios_atividade_economica_com_carro * km_percorrido_em_minuto;
                km_percorrido_por_todos = km_percorrido_por_clientes_e_funcionarios + (quantidade_habitantes_com_carro * km_percorrido_em_minuto);
                km_percorrido_por_clientes_e_habitantes = (quantidade_habitantes_com_carro * km_percorrido_em_minuto) + km_percorrido_por_clientes;

                document.getElementById("resultado")
                .innerHTML = emissao_de_carbono_por_todos.toFixed(2) + " kg de CO2eq é gerado pelos carros em um período de uma hora";
            }
            else if(local == 'b' && efeito_climatico == 's')
            {
                km_percorrido_em_minuto = bloco_km_percorrido_em_minuto;

                //aqui:
                distancia_km_durante_um_periodo_cliente_e_habitantes = velocidade_media * km_percorrido_em_minuto;
                distancia_km_durante_um_periodo_todos = velocidade_media * km_percorrido_em_minuto;

                km_percorrido_por_clientes = quantidade_clientes_atividade_economica_com_carro * km_percorrido_em_minuto;
                km_percorrido_por_funcionarios = quantidade_funcionarios_atividade_economica_com_carro * km_percorrido_em_minuto;
                km_percorrido_por_clientes_e_funcionarios = quantidade_clientes_e_funcionarios_atividade_economica_com_carro * km_percorrido_em_minuto;
                km_percorrido_por_todos = km_percorrido_por_clientes_e_funcionarios + (quantidade_habitantes_com_carro * km_percorrido_em_minuto);
                km_percorrido_por_clientes_e_habitantes = (quantidade_habitantes_com_carro * km_percorrido_em_minuto) + km_percorrido_por_clientes;

                document.getElementById("resultado")
                .innerHTML = emissao_de_carbono_por_todos_com_efeito_climatico.toFixed(2) + " kg de CO2eq é gerado pelos carros em um período de uma hora";
            }
            else if(local == 'b' && efeito_climatico == 'n')
            {
                km_percorrido_em_minuto = bloco_km_percorrido_em_minuto;

                //aqui:
                distancia_km_durante_um_periodo_cliente_e_habitantes = velocidade_media * km_percorrido_em_minuto;
                distancia_km_durante_um_periodo_todos = velocidade_media * km_percorrido_em_minuto;

                km_percorrido_por_clientes = quantidade_clientes_atividade_economica_com_carro * km_percorrido_em_minuto;
                km_percorrido_por_funcionarios = quantidade_funcionarios_atividade_economica_com_carro * km_percorrido_em_minuto;
                km_percorrido_por_clientes_e_funcionarios = quantidade_clientes_e_funcionarios_atividade_economica_com_carro * km_percorrido_em_minuto;
                km_percorrido_por_todos = km_percorrido_por_clientes_e_funcionarios + (quantidade_habitantes_com_carro * km_percorrido_em_minuto);
                km_percorrido_por_clientes_e_habitantes = (quantidade_habitantes_com_carro * km_percorrido_em_minuto) + km_percorrido_por_clientes;

                document.getElementById("resultado")
                .innerHTML = emissao_de_carbono_por_todos.toFixed(2) + " kg de CO2eq é gerado pelos carros em um período de uma hora";
            }
        
        }
        else
        {
            document.getElementById("resultado")
            .innerHTML = "Há um erro nas informações digitadas";
        }
    
}
