/* =========================================================================
   1. BANCO DE DADOS COMPLETO DE AERONAVES E MATRÍCULAS DA FAB
   ========================================================================= */
const FROTA_FAB = {
  "Transporte Logístico & REVO": {
    "KC-390 Millennium": ["FAB 2853", "FAB 2854", "FAB 2855", "FAB 2856", "FAB 2857", "FAB 2858", "FAB 2859"],
    "KC-30 (Airbus A330-200)": ["FAB 2901", "FAB 2902"],
    "C-105 Amazonas": ["FAB 2800", "FAB 2801", "FAB 2802", "FAB 2803", "FAB 2804", "FAB 2805", "FAB 2806", "FAB 2807", "FAB 2808", "FAB 2809", "FAB 2810", "FAB 2811"],
    "SC-105 Amazonas SAR": ["FAB 6550", "FAB 6551", "FAB 6552"],
    "C-99 (ERJ-145)": ["FAB 2520", "FAB 2521", "FAB 2522", "FAB 2523", "FAB 2524"],
    "C-97 Brasília": ["FAB 2001", "FAB 2002", "FAB 2003", "FAB 2004", "FAB 2005", "FAB 2006", "FAB 2007", "FAB 2008", "FAB 2009", "FAB 2010", "FAB 2011", "FAB 2012", "FAB 2013", "FAB 2014", "FAB 2015"],
    "C-95M Bandeirante": ["FAB 2131", "FAB 2134", "FAB 2142", "FAB 2145", "FAB 2152", "FAB 2167", "FAB 2171", "FAB 2180", "FAB 2195", "FAB 2201", "FAB 2215", "FAB 2224", "FAB 2232", "FAB 2248", "FAB 2261", "FAB 2270", "FAB 2285", "FAB 2301"],
    "C-98A Grand Caravan": ["FAB 2700", "FAB 2701", "FAB 2702", "FAB 2703", "FAB 2704", "FAB 2705", "FAB 2706", "FAB 2707", "FAB 2708", "FAB 2709", "FAB 2710", "FAB 2711", "FAB 2712", "FAB 2713", "FAB 2714", "FAB 2715", "FAB 2720", "FAB 2725", "FAB 2730"]
  },
  "Transporte Especial / VIP (GTE)": {
    "VC-1 (Airbus A319CJ)": ["FAB 2101"],
    "VC-2 (Embraer 190)": ["FAB 2590", "FAB 2591"],
    "VC-99B Legacy 600": ["FAB 2580", "FAB 2581", "FAB 2582", "FAB 2583", "FAB 2584", "FAB 2585"],
    "VC-99C (ERJ-135)": ["FAB 2560", "FAB 2561"],
    "VH-35 (EC-135 VIP)": ["FAB 8601", "FAB 8602"],
    "VH-36 Caracal VIP": ["FAB 8501", "FAB 8502"]
  },
  "Patrulha, Alerta Aéreo & IVR": {
    "P-3AM Orion": ["FAB 7200", "FAB 7201", "FAB 7202", "FAB 7203", "FAB 7204", "FAB 7205", "FAB 7206", "FAB 7207", "FAB 7208"],
    "P-95BM Bandeirulha": ["FAB 7100", "FAB 7101", "FAB 7102", "FAB 7103", "FAB 7104", "FAB 7105", "FAB 7106", "FAB 7107"],
    "E-99M (Alerta Aéreo)": ["FAB 6700", "FAB 6701", "FAB 6702", "FAB 6703", "FAB 6704"],
    "R-99 (Sensoriamento)": ["FAB 6750", "FAB 6751", "FAB 6752"],
    "R-35AM Learjet": ["FAB 6000", "FAB 6001", "FAB 6002", "FAB 6003", "FAB 6004", "FAB 6005"],
    "ARP RQ-900 / RQ-1150": ["FAB 7801", "FAB 7802", "FAB 7803", "FAB 7804", "FAB 7811", "FAB 7812"]
  },
  "Caça & Ataque": {
    "F-39E/F Gripen": ["FAB 4100", "FAB 4101", "FAB 4102", "FAB 4103", "FAB 4104", "FAB 4105", "FAB 4106", "FAB 4107", "FAB 4108"],
    "F-5EM/FM Tiger II": ["FAB 4806", "FAB 4812", "FAB 4820", "FAB 4831", "FAB 4844", "FAB 4856", "FAB 4862", "FAB 4875", "FAB 4880"],
    "A-1AM/BM AMX": ["FAB 5505", "FAB 5512", "FAB 5520", "FAB 5531", "FAB 5540", "FAB 5652", "FAB 5655"],
    "A-29A/B Super Tucano": ["FAB 5701", "FAB 5710", "FAB 5722", "FAB 5735", "FAB 5748", "FAB 5901", "FAB 5915", "FAB 5928", "FAB 5940", "FAB 5955"]
  },
  "Inspeção em Voo (GEIV) & Instrução": {
    "IU-50 Legacy 500 (GEIV)": ["FAB 3601", "FAB 3602", "FAB 3603", "FAB 3604", "FAB 3605", "FAB 3606"],
    "IU-93A Hawker 800XP (GEIV)": ["FAB 6050", "FAB 6051", "FAB 6052", "FAB 6053"],
    "T-27M Tucano": ["FAB 1305", "FAB 1320", "FAB 1345", "FAB 1368", "FAB 1390", "FAB 1412", "FAB 1435"],
    "T-25M Universal": ["FAB 1835", "FAB 1850", "FAB 1872", "FAB 1895", "FAB 1910", "FAB 1932"]
  },
  "Asas Rotativas (Helicópteros)": {
    "H-36 Caracal": ["FAB 8510", "FAB 8511", "FAB 8512", "FAB 8513", "FAB 8514", "FAB 8515", "FAB 8516", "FAB 8517", "FAB 8518", "FAB 8519", "FAB 8520"],
    "H-60L Black Hawk": ["FAB 8901", "FAB 8902", "FAB 8903", "FAB 8904", "FAB 8905", "FAB 8906", "FAB 8907", "FAB 8908", "FAB 8909", "FAB 8910", "FAB 8911", "FAB 8912"],
    "H-50 / H-125 Esquilo": ["FAB 8750", "FAB 8755", "FAB 8762", "FAB 8770", "FAB 8781", "FAB 8790"]
  },
  "Visitante / Outra Força": {
    "Aeronave Estrangeira / MB / EB / Civil": []
  }
};

const ENTIDADES_SERVICO = ["COMBUSTIVEL", "QTU_QTA", "CTLA", "PATIO_GPU", "PAX"];

const NOMES_ENTIDADES = {
  OFICIAL_OPS: "🎖️ Oficial de Operações (C2)",
  DESPACHANTE: "🎙️ Despachante / Rádio",
  COMBUSTIVEL: "⛽ Combustível (QAV-1)",
  QTU_QTA: "💧 QTU / QTA (Águas)",
  CTLA: "📦 CTLA / Carga",
  PATIO_GPU: "⚡ Pátio / Fonte de Força (GPU)",
  PAX: "🚌 Passageiros (PAX)"
};

const STORAGE_FICHAS = "bagl_fichas_voo_v2";
const STORAGE_SESSAO = "bagl_sessao_atual_v2";
const PIN_TURNO = "2026";

let fichasDeVoo = JSON.parse(localStorage.getItem(STORAGE_FICHAS)) || [];
let sessaoAtual = JSON.parse(localStorage.getItem(STORAGE_SESSAO)) || null;
let filtroPatio = "TODOS";
let filtroEntidadeOficial = "TODAS"; // Usado quando o Oficial de Operações clica em um cartão
let apenasNaoConcluidos = false;

/* =========================================================================
   2. CONTROLE DE LOGIN POR PERFIL / ENTIDADE
   ========================================================================= */
const loginOverlay = document.getElementById("login-overlay");
const loginForm = document.getElementById("login-form");
const loginErro = document.getElementById("login-erro");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const operador = document.getElementById("login-operador").value.trim().toUpperCase();
  const entidade = document.getElementById("login-entidade").value;
  const pin = document.getElementById("login-pin").value.trim();

  if (pin !== PIN_TURNO) {
    loginErro.classList.remove("hidden");
    return;
  }

  loginErro.classList.add("hidden");
  sessaoAtual = { operador, entidade };
  localStorage.setItem(STORAGE_SESSAO, JSON.stringify(sessaoAtual));
  filtroEntidadeOficial = "TODAS";
  apenasNaoConcluidos = false;
  document.getElementById("chk-apenas-pendentes").checked = false;
  aplicarPermissoesDeTela();
});

document.getElementById("btn-sair").addEventListener("click", () => {
  sessaoAtual = null;
  localStorage.removeItem(STORAGE_SESSAO);
  loginOverlay.classList.remove("hidden");
});

function aplicarPermissoesDeTela() {
  if (!sessaoAtual) {
    loginOverlay.classList.remove("hidden");
    return;
  }

  loginOverlay.classList.add("hidden");
  document.getElementById("user-nome-display").textContent = sessaoAtual.operador;
  document.getElementById("user-entidade-display").textContent = NOMES_ENTIDADES[sessaoAtual.entidade];

  const painelOficial = document.getElementById("painel-oficial-ops");
  const painelDespachante = document.getElementById("painel-despachante");
  const filtroStatusOps = document.getElementById("filtro-status-ops");
  const tituloAcomp = document.getElementById("acompanhamento-titulo");
  const descAcomp = document.getElementById("acompanhamento-desc");

  // Oculta painéis específicos antes de liberar conforme o perfil
  painelOficial.classList.add("hidden");
  painelDespachante.classList.add("hidden");
  filtroStatusOps.classList.add("hidden");

  if (sessaoAtual.entidade === "OFICIAL_OPS") {
    // Perfil: OFICIAL DE OPERAÇÕES
    painelOficial.classList.remove("hidden");
    filtroStatusOps.classList.remove("hidden");
    document.getElementById("header-subtitulo").textContent = "Centro de Comando — Oficial de Operações";
    tituloAcomp.textContent = "📋 Panorama Completo de Acompanhamento de Voo";
    descAcomp.textContent = "Acompanhe todas as aeronaves, clique nos cartões acima para filtrar pendências e registre cobranças";
    renderizarRadarOficial();
  } else if (sessaoAtual.entidade === "DESPACHANTE") {
    // Perfil: DESPACHANTE / RÁDIO
    painelDespachante.classList.remove("hidden");
    document.getElementById("header-subtitulo").textContent = "Posto de Despacho & Fonia";
    tituloAcomp.textContent = "📋 Acompanhamento de Voo (Visão Geral)";
    descAcomp.textContent = "Monitore em tempo real o andamento das fichas transmitidas às entidades";
  } else {
    // Perfil: ENTIDADE DE APOIO (Combustível, QTU/QTA, CTLA, Pátio, PAX)
    document.getElementById("header-subtitulo").textContent = `Terminal Exclusivo: ${NOMES_ENTIDADES[sessaoAtual.entidade]}`;
    tituloAcomp.textContent = `📋 Acompanhamento de Voo — ${NOMES_ENTIDADES[sessaoAtual.entidade]}`;
    descAcomp.textContent = "Exibindo exclusivamente as aeronaves que solicitaram apoio do seu setor";
  }

  renderizarAcompanhamento();
}

/* =========================================================================
   3. SALA DE SITUAÇÃO DO OFICIAL DE OPERAÇÕES (CARTÕES CLICÁVEIS)
   ========================================================================= */
function renderizarRadarOficial() {
  const radarGrid = document.getElementById("radar-entidades-grid");
  const btnLimpar = document.getElementById("btn-limpar-filtro-entidade");
  if (!radarGrid) return;

  radarGrid.innerHTML = "";
  btnLimpar.classList.toggle("hidden", filtroEntidadeOficial === "TODAS");

  ENTIDADES_SERVICO.forEach(entKey => {
    let naoIniciado = 0;
    let emAndamento = 0;
    let concluido = 0;

    fichasDeVoo.forEach(ficha => {
      const tarefa = ficha.tarefas[entKey];
      if (tarefa) {
        if (tarefa.status === "NAO_INICIADO") naoIniciado++;
        else if (tarefa.status === "EM_ANDAMENTO") emAndamento++;
        else if (tarefa.status === "CONCLUIDO") concluido++;
      }
    });

    const pendentesTotais = naoIniciado + emAndamento;
    const isSelected = filtroEntidadeOficial === entKey;

    const cardBtn = document.createElement("button");
    cardBtn.type = "button";
    cardBtn.className = `radar-card ${pendentesTotais > 0 ? "has-pending" : "all-ok"} ${isSelected ? "selected-filter" : ""}`;

    cardBtn.innerHTML = `
      <div class="radar-card-head">
        <strong>${NOMES_ENTIDADES[entKey]}</strong>
      </div>
      <div class="radar-metrics">
        <span class="pill-stat pill-red">${naoIniciado} Não Iniciado</span>
        <span class="pill-stat pill-amber">${emAndamento} Em Andamento</span>
        <span class="pill-stat pill-green">${concluido} Concluído</span>
      </div>
      <span class="radar-cta">
        ${pendentesTotais > 0
          ? "🔍 Clique para ver pendências e cobrar setor →"
          : "✓ Sem pendências no momento"}
      </span>
    `;

    cardBtn.addEventListener("click", () => {
      if (filtroEntidadeOficial === entKey) {
        // Segundo clique desmarca o filtro
        filtroEntidadeOficial = "TODAS";
        apenasNaoConcluidos = false;
        document.getElementById("chk-apenas-pendentes").checked = false;
      } else {
        // Filtra diretamente para a entidade clicada e ativa o foco no que ainda não foi concluído
        filtroEntidadeOficial = entKey;
        if (pendentesTotais > 0) {
          apenasNaoConcluidos = true;
          document.getElementById("chk-apenas-pendentes").checked = true;
        }
      }

      renderizarRadarOficial();
      renderizarAcompanhamento();

      // Rola suavemente até a lista filtrada
      document.getElementById("secao-acompanhamento").scrollIntoView({ behavior: "smooth" });
    });

    radarGrid.appendChild(cardBtn);
  });
}

document.getElementById("btn-limpar-filtro-entidade").addEventListener("click", () => {
  filtroEntidadeOficial = "TODAS";
  apenasNaoConcluidos = false;
  document.getElementById("chk-apenas-pendentes").checked = false;
  renderizarRadarOficial();
  renderizarAcompanhamento();
});

document.getElementById("chk-apenas-pendentes").addEventListener("change", (e) => {
  apenasNaoConcluidos = e.target.checked;
  renderizarAcompanhamento();
});

/* =========================================================================
   4. SELETORES EM CASCATA DA FROTA FAB (MODELO -> MATRÍCULA)
   ========================================================================= */
const catSelect = document.getElementById("ficha-categoria");
const modSelect = document.getElementById("ficha-modelo");
const matSelect = document.getElementById("ficha-matricula");
const manualGroup = document.getElementById("ficha-manual-group");
const manualInput = document.getElementById("ficha-manual");

function initFrotaFAB() {
  catSelect.innerHTML = "";
  Object.keys(FROTA_FAB).forEach(cat => {
    catSelect.appendChild(new Option(cat, cat));
  });
  atualizarModelos();
}

function atualizarModelos() {
  const modelos = Object.keys(FROTA_FAB[catSelect.value]);
  modSelect.innerHTML = "";
  modelos.forEach(mod => {
    modSelect.appendChild(new Option(mod, mod));
  });
  atualizarMatriculas();
}

function atualizarMatriculas() {
  const lista = FROTA_FAB[catSelect.value][modSelect.value] || [];
  matSelect.innerHTML = "";
  lista.forEach(mat => {
    matSelect.appendChild(new Option(mat, mat));
  });
  matSelect.appendChild(new Option("+ Digitar matrícula manualmente...", "MANUAL"));
  toggleManualInput();
}

function toggleManualInput() {
  const isManual = matSelect.value === "MANUAL";
  manualGroup.classList.toggle("hidden", !isManual);
  manualInput.required = isManual;
}

catSelect.addEventListener("change", atualizarModelos);
modSelect.addEventListener("change", atualizarMatriculas);
matSelect.addEventListener("change", toggleManualInput);

/* =========================================================================
   5. CRIAÇÃO DA FICHA DE VOO (DESPACHANTE)
   ========================================================================= */
document.getElementById("ficha-voo-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const patio = document.getElementById("ficha-patio").value;
  const posicao = document.getElementById("ficha-posicao").value.trim();
  const eta = document.getElementById("ficha-eta").value;
  const modelo = modSelect.value;
  const matricula = matSelect.value === "MANUAL"
    ? manualInput.value.trim().toUpperCase()
    : matSelect.value;
  const procedencia = document.getElementById("ficha-procedencia").value.trim().toUpperCase() || "N/I";
  const obs = document.getElementById("ficha-obs").value.trim();

  const marcadas = document.querySelectorAll('input[name="entidade_req"]:checked');
  if (marcadas.length === 0) {
    alert("Selecione pelo menos uma entidade solicitada pelo piloto na fonia.");
    return;
  }

  const tarefas = {};
  marcadas.forEach(cb => {
    tarefas[cb.value] = {
      status: "NAO_INICIADO",
      operador: null,
      horaAtualizacao: null,
      cobrancaOficial: null
    };
  });

  const novaFicha = {
    id: Date.now(),
    patio,
    posicao,
    eta,
    modelo,
    matricula,
    procedencia,
    obs,
    criadoPor: sessaoAtual.operador,
    horaCriacao: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    tarefas
  };

  fichasDeVoo.unshift(novaFicha);
  salvarEAtualizar();

  this.reset();
  initFrotaFAB();
});

/* =========================================================================
   6. ATUALIZAÇÃO DE STATUS E REGISTRO DE COBRANÇA DO OFICIAL DE OPERAÇÕES
   ========================================================================= */
function atualizarStatusEntidade(fichaId, entidadeKey, novoStatus) {
  const ficha = fichasDeVoo.find(f => f.id === fichaId);
  if (!ficha || !ficha.tarefas[entidadeKey]) return;

  ficha.tarefas[entidadeKey].status = novoStatus;
  ficha.tarefas[entidadeKey].operador = sessaoAtual.operador;
  ficha.tarefas[entidadeKey].horaAtualizacao = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

  salvarEAtualizar();
}

function registrarCobrancaOficial(fichaId, entidadeKey) {
  const ficha = fichasDeVoo.find(f => f.id === fichaId);
  if (!ficha || !ficha.tarefas[entidadeKey]) return;

  const nomeSetor = NOMES_ENTIDADES[entidadeKey];
  const nota = prompt(
    `Registrar contato/cobrança para ${nomeSetor} na aeronave ${ficha.matricula} (${ficha.patio}):`,
    "Acionado via rádio/telefone pelo Oficial de Operações"
  );

  if (nota === null) return;

  const hora = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  ficha.tarefas[entidadeKey].cobrancaOficial = `${sessaoAtual.operador} às ${hora}: ${nota.trim() || "Cobrança efetuada"}`;

  salvarEAtualizar();
}

function encerrarFichaVoo(fichaId) {
  const ficha = fichasDeVoo.find(f => f.id === fichaId);
  if (!ficha) return;

  if (confirm(`Encerrar ficha de voo de ${ficha.matricula} (${ficha.patio})?`)) {
    fichasDeVoo = fichasDeVoo.filter(f => f.id !== fichaId);
    salvarEAtualizar();
  }
}

function salvarEAtualizar() {
  localStorage.setItem(STORAGE_FICHAS, JSON.stringify(fichasDeVoo));
  if (sessaoAtual && sessaoAtual.entidade === "OFICIAL_OPS") {
    renderizarRadarOficial();
  }
  renderizarAcompanhamento();
}

/* =========================================================================
   7. RENDERIZAÇÃO DO ACOMPANHAMENTO DE VOO
   ========================================================================= */
function renderizarAcompanhamento() {
  if (!sessaoAtual) return;

  const container = document.getElementById("lista-acompanhamento");
  const contadorEl = document.getElementById("contador-chamados");
  container.innerHTML = "";

  const isOficialOps = sessaoAtual.entidade === "OFICIAL_OPS";
  const isDespachante = sessaoAtual.entidade === "DESPACHANTE";
  const isVisaoGeral = isOficialOps || isDespachante;

  const fichasFiltradas = fichasDeVoo.filter(ficha => {
    const passaPatio = filtroPatio === "TODOS" || ficha.patio === filtroPatio;
    if (!passaPatio) return false;

    if (!isVisaoGeral) {
      // Entidade específica vê apenas fichas onde foi acionada
      return Boolean(ficha.tarefas[sessaoAtual.entidade]);
    }

    if (isOficialOps) {
      // Se o Oficial de Operações clicou em uma entidade específica no radar
      if (filtroEntidadeOficial !== "TODAS") {
        const tarefa = ficha.tarefas[filtroEntidadeOficial];
        if (!tarefa) return false;
        if (apenasNaoConcluidos && tarefa.status === "CONCLUIDO") return false;
        return true;
      }

      // Se marcou "Mostrar somente serviços não concluídos" no modo geral
      if (apenasNaoConcluidos) {
        return Object.values(ficha.tarefas).some(t => t.status !== "CONCLUIDO");
      }
    }

    return true;
  });

  contadorEl.textContent = `${fichasFiltradas.length} ${fichasFiltradas.length === 1 ? "AERONAVE" : "AERONAVES"}`;

  if (fichasFiltradas.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>Nenhuma aeronave encontrada para este filtro</h3>
        <p>${isVisaoGeral
          ? "Todas as demandas filtradas já foram concluídas ou não há fichas ativas neste pátio."
          : "Aguardando o Despachante acionar seu setor em uma nova Ficha de Voo."}</p>
      </div>
    `;
    return;
  }

  fichasFiltradas.forEach(ficha => {
    const card = document.createElement("div");
    card.className = "flight-card";

    // Define quais blocos de entidade aparecem no cartão
    let chavesTarefas = isVisaoGeral
      ? Object.keys(ficha.tarefas)
      : [sessaoAtual.entidade];

    // Se o Oficial de Operações clicou em uma entidade (ex: Combustível) e ativou pendências,
    // coloca a entidade filtrada no topo e destacada
    if (isOficialOps && filtroEntidadeOficial !== "TODAS") {
      chavesTarefas = chavesTarefas.sort((a, b) => (a === filtroEntidadeOficial ? -1 : b === filtroEntidadeOficial ? 1 : 0));
    }

    const tarefasHTML = chavesTarefas.map(entKey => {
      const tarefa = ficha.tarefas[entKey];
      const nomeEntidade = NOMES_ENTIDADES[entKey];
      const st = tarefa.status;
      const isDestaque = isOficialOps && filtroEntidadeOficial === entKey && st !== "CONCLUIDO";

      const labelStatus = st === "NAO_INICIADO"
        ? "Não Iniciado"
        : st === "EM_ANDAMENTO"
          ? "Em Andamento"
          : "Concluído";

      const infoAuditoria = tarefa.operador
        ? `Atualizado por <strong>${tarefa.operador}</strong> às ${tarefa.horaAtualizacao}`
        : `Solicitado pelo despacho às ${ficha.horaCriacao}`;

      const blocoCobranca = tarefa.cobrancaOficial
        ? `<div class="cobranca-tag">📞 <strong>Contato registrado:</strong> ${tarefa.cobrancaOficial}</div>`
        : "";

      const botaoCobrarOficial = (isOficialOps && st !== "CONCLUIDO")
        ? `<button type="button" class="btn-cobrar" onclick="registrarCobrancaOficial(${ficha.id}, '${entKey}')">📞 Registrar Cobrança / Contato com Setor</button>`
        : "";

      return `
        <div class="task-box ${isDestaque ? "highlight-target" : ""}">
          <div class="task-header">
            <strong>${nomeEntidade}</strong>
            <span class="status-badge badge-${st}">${labelStatus}</span>
          </div>

          <div class="task-actions">
            <button type="button"
              class="btn-step ${st === "NAO_INICIADO" ? "active-NAO_INICIADO" : ""}"
              onclick="atualizarStatusEntidade(${ficha.id}, '${entKey}', 'NAO_INICIADO')">
              Não Iniciado
            </button>
            <button type="button"
              class="btn-step ${st === "EM_ANDAMENTO" ? "active-EM_ANDAMENTO" : ""}"
              onclick="atualizarStatusEntidade(${ficha.id}, '${entKey}', 'EM_ANDAMENTO')">
              Em Andamento
            </button>
            <button type="button"
              class="btn-step ${st === "CONCLUIDO" ? "active-CONCLUIDO" : ""}"
              onclick="atualizarStatusEntidade(${ficha.id}, '${entKey}', 'CONCLUIDO')">
              Concluído
            </button>
          </div>

          <div class="task-audit">${infoAuditoria}</div>
          ${blocoCobranca}
          ${botaoCobrarOficial}
        </div>
      `;
    }).join("");

    card.innerHTML = `
      <div class="card-top">
        <div>
          <h3>${ficha.matricula}</h3>
          <span>${ficha.modelo}</span>
        </div>
        <div class="patio-tag">
          ${ficha.patio}<br>
          <small>${ficha.posicao}</small>
        </div>
      </div>

      <div class="card-info">
        <div>Procedência: <strong>${ficha.procedencia}</strong> • ETA: <strong>${ficha.eta}</strong> • Despacho: <strong>${ficha.criadoPor}</strong></div>
        ${ficha.obs ? `<div class="obs-box">🎙️ Fonia: ${ficha.obs}</div>` : ""}
      </div>

      ${tarefasHTML}

      ${isVisaoGeral
        ? `<button type="button" class="btn-encerrar-ficha" onclick="encerrarFichaVoo(${ficha.id})">✈️ Encerrar Ficha / Liberar Aeronave</button>`
        : ""}
    `;

    container.appendChild(card);
  });
}

// Filtro dos 4 pátios
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filtroPatio = btn.dataset.patio;
    renderizarAcompanhamento();
  });
});

// Relógios Local e Zulu
function atualizarRelogios() {
  const agora = new Date();
  document.getElementById("clock-local").textContent = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  document.getElementById("clock-zulu").textContent = agora.toISOString().substring(11, 19) + "Z";
}

// Inicialização
initFrotaFAB();
aplicarPermissoesDeTela();
atualizarRelogios();
setInterval(atualizarRelogios, 1000);