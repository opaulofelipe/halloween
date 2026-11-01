const BANK = {
    livros: [
      ['Quem escreveu a saga Harry Potter?', 'J. K. Rowling', 'Suzanne Collins', 'Stephenie Meyer', 'Rick Riordan'],
      ['A qual casa de Hogwarts Harry Potter pertence?', 'Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'],
      ['Em O Senhor dos Anéis, quem leva o Um Anel até Mordor?', 'Frodo Bolseiro', 'Bilbo Bolseiro', 'Samwise Gamgee', 'Aragorn'],
      ['Quem é a protagonista de Jogos Vorazes?', 'Katniss Everdeen', 'Johanna Mason', 'Primrose Everdeen', 'Rue'],
      ['Em Percy Jackson, qual deus é o pai de Percy?', 'Poseidon', 'Zeus', 'Hades', 'Ares'],
      ['Qual animal Alice segue antes de chegar ao País das Maravilhas?', 'Um coelho branco', 'Um gato sorridente', 'Uma lebre', 'Um rato falante'],
      ['Qual flor é especialmente importante para O Pequeno Príncipe?', 'Uma rosa', 'Uma tulipa', 'Uma margarida', 'Uma orquídea'],
      ['Quem é o autor do romance 1984?', 'George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'Franz Kafka'],
      ['Em Dom Casmurro, quem narra sua própria história?', 'Bentinho', 'Brás Cubas', 'Paulo Honório', 'Simão Bacamarte'],
      ['Qual personagem narra Memórias Póstumas de Brás Cubas?', 'Um homem que já morreu', 'Seu melhor amigo', 'Sua irmã', 'Um historiador'],
      ['Quem escreveu Capitães da Areia?', 'Jorge Amado', 'Graciliano Ramos', 'Érico Veríssimo', 'José Lins do Rego'],
      ['Em Vidas Secas, qual é o nome da cachorra da família?', 'Baleia', 'Duquesa', 'Lassie', 'Flor'],
      ['Quem escreveu O Cortiço?', 'Aluísio Azevedo', 'Machado de Assis', 'Lima Barreto', 'Eça de Queirós'],
      ['Qual é o nome da protagonista de A Hora da Estrela?', 'Macabéa', 'Capitu', 'Gabriela', 'Iracema'],
      ['De que cor são os cabelos de Anne, em Anne de Green Gables?', 'Ruivos', 'Loiros', 'Castanhos', 'Pretos'],
      ['No romance Frankenstein, quem cria a criatura?', 'Victor Frankenstein', 'Dr. Jekyll', 'Dr. Moreau', 'Abraham Van Helsing'],
      ['Quem escreveu o romance Drácula?', 'Bram Stoker', 'Mary Shelley', 'Oscar Wilde', 'H. G. Wells'],
      ['Qual é o nome do parceiro e amigo de Sherlock Holmes?', 'Dr. Watson', 'Hercule Poirot', 'Inspetor Lestrade', 'Professor Moriarty'],
      ['Em A Metamorfose, Gregor Samsa acorda transformado em quê?', 'Um inseto monstruoso', 'Um rato gigante', 'Um morcego', 'Um pássaro'],
      ['Em que cidade se passa Romeu e Julieta?', 'Verona', 'Florença', 'Veneza', 'Roma'],
      ['Quem é o protagonista de O Hobbit?', 'Bilbo Bolseiro', 'Frodo Bolseiro', 'Samwise Gamgee', 'Merry Brandebuque'],
      ['Em Divergente, para qual facção Tris escolhe ir?', 'Audácia', 'Erudição', 'Franqueza', 'Abnegação'],
      ['Quem escreveu O Código Da Vinci?', 'Dan Brown', 'John Grisham', 'Ken Follett', 'Michael Crichton'],
      ['Qual é o primeiro nome da protagonista de A Culpa É das Estrelas?', 'Hazel', 'Alaska', 'Margo', 'Violet'],
      ['Em O Leão, a Feiticeira e o Guarda-Roupa, por onde as crianças entram em Nárnia?', 'Por um guarda-roupa', 'Por um espelho', 'Por uma passagem no chão', 'Por uma porta no jardim'],
      ['Em qual cidade Anne Frank viveu escondida com sua família?', 'Amsterdã', 'Berlim', 'Paris', 'Viena'],
      ['Qual é o sobrenome da família central de Cem Anos de Solidão?', 'Buendía', 'Aureliano', 'Aracataca', 'Márquez'],
      ['Em A Revolução dos Bichos, que tipo de animal é Napoleão?', 'Porco', 'Cavalo', 'Cachorro', 'Burro'],
      ['Com quem Elizabeth Bennet se envolve romanticamente em Orgulho e Preconceito?', 'Sr. Darcy', 'Sr. Bingley', 'Sr. Collins', 'Sr. Wickham'],
      ['Qual é o nome do hotel de O Iluminado?', 'Overlook', 'Bates', 'Cortez', 'Stanley'],
      ['Como se chama o palhaço assustador de It: A Coisa?', 'Pennywise', 'Art', 'Twisty', 'Coringa'],
      ['Em Coraline, o que a Outra Mãe quer colocar no lugar dos olhos da menina?', 'Botões', 'Lentes de vidro', 'Pedras preciosas', 'Moedas'],
      ['Quem é o protagonista de O Nome do Vento?', 'Kvothe', 'Ged', 'Kaladin', 'Geralt']
    ],
    filmes: [
      ['No filme Titanic, para qual cidade o navio seguia?', 'Nova York', 'Boston', 'Londres', 'Lisboa'],
      ['Em Jurassic Park, de onde é retirado o DNA dos dinossauros?', 'De mosquitos preservados em âmbar', 'De ossos fossilizados', 'De ovos encontrados no gelo', 'De dentes encontrados em cavernas'],
      ['Em Matrix, qual pílula Neo escolhe para descobrir a verdade?', 'Vermelha', 'Azul', 'Verde', 'Amarela'],
      ['Em Star Wars, quem é o pai de Luke Skywalker?', 'Darth Vader', 'Obi-Wan Kenobi', 'Han Solo', 'Palpatine'],
      ['Em O Rei Leão, quem é o pai de Simba?', 'Mufasa', 'Scar', 'Rafiki', 'Zazu'],
      ['Em Toy Story, qual brinquedo é um caubói?', 'Woody', 'Buzz Lightyear', 'Rex', 'Sr. Cabeça de Batata'],
      ['Em Procurando Nemo, como se chama o pai de Nemo?', 'Marlin', 'Gill', 'Bruce', 'Crush'],
      ['Em Frozen, como se chama a irmã de Elsa?', 'Anna', 'Iduna', 'Honeymaren', 'Yelena'],
      ['No primeiro Shrek, quem acompanha Shrek para resgatar Fiona?', 'Burro', 'Gato de Botas', 'Pinóquio', 'Biscoito'],
      ['Em Harry Potter e a Pedra Filosofal, quem dirige Hogwarts?', 'Alvo Dumbledore', 'Severo Snape', 'Minerva McGonagall', 'Rúbeo Hagrid'],
      ['Em Vingadores: Ultimato, quem estala os dedos para derrotar Thanos?', 'Tony Stark', 'Thor', 'Bruce Banner', 'Steve Rogers'],
      ['Quem interpreta o Peter Parker principal em Homem-Aranha: Sem Volta para Casa?', 'Tom Holland', 'Andrew Garfield', 'Tobey Maguire', 'Jake Gyllenhaal'],
      ['Quem é o grande antagonista de Batman: O Cavaleiro das Trevas (2008)?', 'Coringa', 'Bane', 'Charada', 'Pinguim'],
      ['Em Avatar (2009), como se chama a espécie humanoide nativa de Pandora?', 'Na’vi', 'Tulkun', 'Ikran', 'Thanator'],
      ['Qual é o modelo do carro que viaja no tempo em De Volta para o Futuro?', 'DeLorean', 'Mustang', 'Camaro', 'Corvette'],
      ['Qual é o nome do menino que faz amizade com o alienígena em E.T.?', 'Elliott', 'Kevin', 'Charlie', 'Danny'],
      ['Qual objeto é uma marca registrada de Indiana Jones?', 'Chicote', 'Arco e flecha', 'Espada', 'Martelo'],
      ['Qual é o nome do gladiador interpretado por Russell Crowe em Gladiador (2000)?', 'Maximus', 'Commodus', 'Proximo', 'Lucius'],
      ['Qual família está no centro da história de O Poderoso Chefão?', 'Corleone', 'Barzini', 'Tattaglia', 'Cuneo'],
      ['Como é conhecido o assassino mascarado da franquia Pânico?', 'Ghostface', 'Jason', 'Michael Myers', 'Leatherface'],
      ['Quem é o vilão mais conhecido da franquia Sexta-Feira 13?', 'Jason Voorhees', 'Freddy Krueger', 'Michael Myers', 'Chucky'],
      ['Quem ataca as vítimas durante os sonhos em A Hora do Pesadelo?', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers', 'Ghostface'],
      ['Quem é o assassino de Halloween (1978)?', 'Michael Myers', 'Jason Voorhees', 'Norman Bates', 'Freddy Krueger'],
      ['Qual casal de investigadores paranormais aparece em Invocação do Mal?', 'Ed e Lorraine Warren', 'Mulder e Scully', 'Sam e Dean Winchester', 'Josh e Renai Lambert'],
      ['Qual é o primeiro nome do protagonista de Corra! (2017)?', 'Chris', 'Ben', 'Daniel', 'Jordan'],
      ['Em Parasita (2019), qual é o sobrenome da família rica?', 'Park', 'Kim', 'Cho', 'Han'],
      ['Em Divertida Mente, qual emoção é representada pela personagem azul?', 'Tristeza', 'Alegria', 'Medo', 'Nojinho'],
      ['Em Viva: A Vida É uma Festa, qual instrumento Miguel deseja tocar?', 'Violão', 'Violino', 'Piano', 'Bateria'],
      ['Em Up: Altas Aventuras, como se chama o senhor que viaja com a casa?', 'Carl Fredricksen', 'Charles Muntz', 'Russell', 'Alfred Linguini'],
      ['No começo de Interestelar, qual é o trabalho de Cooper?', 'Agricultor', 'Professor', 'Médico', 'Motorista'],
      ['Quem interpreta Ken no filme Barbie (2023)?', 'Ryan Gosling', 'Ryan Reynolds', 'Chris Pine', 'Chris Evans'],
      ['Qual é a dupla principal de O Auto da Compadecida (2000)?', 'João Grilo e Chicó', 'João Grilo e Severino', 'Chicó e Eurico', 'João Grilo e Rosinha'],
      ['Em Central do Brasil, qual é o nome da mulher que escreve cartas na estação?', 'Dora', 'Ana', 'Irene', 'Clara']
    ],
    series: [
      ['Em Stranger Things, qual garoto desaparece no início da primeira temporada?', 'Will Byers', 'Mike Wheeler', 'Dustin Henderson', 'Lucas Sinclair'],
      ['Em Stranger Things, qual é o número usado como nome por Eleven?', 'Onze', 'Oito', 'Dez', 'Doze'],
      ['Em Game of Thrones, qual casa tem como lema “O inverno está chegando”?', 'Stark', 'Lannister', 'Targaryen', 'Baratheon'],
      ['Em Game of Thrones, quem é conhecida como a Mãe dos Dragões?', 'Daenerys Targaryen', 'Cersei Lannister', 'Sansa Stark', 'Margaery Tyrell'],
      ['Em Breaking Bad, qual disciplina Walter White ensina antes de produzir drogas?', 'Química', 'Física', 'Biologia', 'Matemática'],
      ['Em Breaking Bad, quem se torna o principal parceiro de Walter White?', 'Jesse Pinkman', 'Hank Schrader', 'Gus Fring', 'Saul Goodman'],
      ['Em Better Call Saul, qual é o nome verdadeiro usado pelo advogado Saul antes de mudar de identidade?', 'Jimmy McGill', 'Howard Hamlin', 'Chuck McGill', 'Mike Ehrmantraut'],
      ['Em Friends, como se chama a cafeteria frequentada pelo grupo?', 'Central Perk', 'Monk’s Café', 'Luke’s Diner', 'Café Nervosa'],
      ['Em Friends, quem é o irmão de Monica?', 'Ross', 'Chandler', 'Joey', 'Gunther'],
      ['Na versão americana de The Office, quem gerencia a filial de Scranton no início da série?', 'Michael Scott', 'Jim Halpert', 'Dwight Schrute', 'Andy Bernard'],
      ['Qual é o nome da empresa de papel em The Office (EUA)?', 'Dunder Mifflin', 'Wernham Hogg', 'Sterling Cooper', 'Pied Piper'],
      ['Em The Last of Us, como se chama a adolescente que Joel acompanha?', 'Ellie', 'Sarah', 'Abby', 'Tess'],
      ['Em Wandinha, como se chama a escola da protagonista?', 'Nunca Mais (Nevermore)', 'Hogwarts', 'Ravenswood', 'Blackwell'],
      ['Em Dark, qual é o nome da cidade alemã onde a história acontece?', 'Winden', 'Berlim', 'Munique', 'Hawkins'],
      ['Quem é o protagonista caçador de monstros de The Witcher?', 'Geralt de Rívia', 'Vesemir', 'Jaskier', 'Cahir'],
      ['Em The Witcher, qual é o apelido da princesa Cirilla?', 'Ciri', 'Yen', 'Triss', 'Fringilla'],
      ['Em La Casa de Papel, como é chamado o idealizador do assalto?', 'Professor', 'Berlim', 'Palermo', 'Denver'],
      ['Em La Casa de Papel, qual destes é o codinome da personagem narradora?', 'Tóquio', 'Nairóbi', 'Lisboa', 'Estocolmo'],
      ['Em Black Mirror, qual episódio mostra pessoas avaliando umas às outras com estrelas?', 'Queda Livre (Nosedive)', 'San Junipero', 'USS Callister', 'Hang the DJ'],
      ['Em qual país se passa a competição da série Round 6?', 'Coreia do Sul', 'Japão', 'China', 'Tailândia'],
      ['Qual brincadeira infantil aparece na primeira prova de Round 6?', 'Batatinha frita, 1, 2, 3', 'Cabo de guerra', 'Bolinhas de gude', 'Colmeia de açúcar'],
      ['Em The Boys, quem lidera o grupo que enfrenta os super-heróis?', 'Billy Bruto (Butcher)', 'Hughie Campbell', 'Leitinho (M. M.)', 'Francês (Frenchie)'],
      ['Qual família de cavaleiros de dragões está no centro de A Casa do Dragão?', 'Targaryen', 'Stark', 'Lannister', 'Tyrell'],
      ['Em Lost, qual é o número do voo que cai na ilha?', '815', '316', '108', '747'],
      ['Em Prison Break, quem planeja escapar da prisão para salvar seu irmão?', 'Michael Scofield', 'Lincoln Burrows', 'John Abruzzi', 'Fernando Sucre'],
      ['Quem interpreta Sherlock Holmes na série Sherlock, da BBC?', 'Benedict Cumberbatch', 'David Tennant', 'Matt Smith', 'Tom Hiddleston'],
      ['Em Peaky Blinders, quem lidera a família Shelby?', 'Tommy Shelby', 'Arthur Shelby', 'John Shelby', 'Finn Shelby'],
      ['Em Vikings, quem é o protagonista central no começo da série?', 'Ragnar Lothbrok', 'Bjorn Ironside', 'Rollo', 'Ivar'],
      ['Em The Walking Dead, qual policial lidera o grupo nas primeiras temporadas?', 'Rick Grimes', 'Shane Walsh', 'Daryl Dixon', 'Glenn Rhee'],
      ['Qual arma é especialmente associada a Daryl, em The Walking Dead?', 'Besta', 'Espada', 'Rifle de precisão', 'Arco longo'],
      ['Em Brooklyn Nine-Nine, qual detetive é interpretado por Andy Samberg?', 'Jake Peralta', 'Charles Boyle', 'Terry Jeffords', 'Raymond Holt'],
      ['Em The Good Place, qual é o nome da protagonista interpretada por Kristen Bell?', 'Eleanor Shellstrop', 'Tahani Al-Jamil', 'Janet', 'Simone Garnett'],
      ['Em Grey’s Anatomy, em qual cidade fica o hospital principal da série?', 'Seattle', 'Boston', 'Los Angeles', 'Nova York']
    ]
  };

// Todas as respostas corretas são a alternativa de índice 0 no banco.
// As quatro alternativas são sorteadas de novo para cada pergunta.
const THEMES = {
  livros: { label: 'Livros', emoji: '📚' },
  filmes: { label: 'Filmes', emoji: '🎬' },
  series: { label: 'Séries', emoji: '📺' }
};
const CATEGORIES = Object.keys(THEMES);
const SAVE_KEY = 'a-noite-decide-partida-v2';
const $ = (id) => document.getElementById(id);
const wheel = $('wheel');
let state = null;
let animation = null;
let spinToken = 0;
let storageEnabled = true;

function shuffled(list) {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function newDecks() {
  return Object.fromEntries(CATEGORIES.map(key => [key, shuffled(BANK[key].map((_, i) => i))]));
}

function showStorageWarning() {
  storageEnabled = false;
  $('storage-warning').hidden = false;
  $('save-label').textContent = 'Salvamento indisponível neste navegador';
}

function checkStorage() {
  try {
    const checkKey = `${SAVE_KEY}:teste`;
    localStorage.setItem(checkKey, 'ok');
    localStorage.removeItem(checkKey);
  } catch (error) {
    showStorageWarning();
  }
}

function save() {
  if (!storageEnabled || !state) return;
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch (error) {
    showStorageWarning();
  }
}

function validSave(s) {
  if (!s || s.version !== 2 || !Array.isArray(s.names) || s.names.length !== 2 ||
      s.names.some(name => typeof name !== 'string' || !name.trim() || name.length > 20) ||
      !Array.isArray(s.scores) || s.scores.length !== 2 ||
      s.scores.some(n => !Number.isSafeInteger(n) || n > 100 || n < -10000) ||
      ![0, 1].includes(s.active) || !Number.isSafeInteger(s.round) || s.round < 1 ||
      !Number.isSafeInteger(s.answered) || s.answered < 0 ||
      typeof s.angle !== 'number' || !Number.isFinite(s.angle) ||
      !['wheel', 'question', 'result', 'victory'].includes(s.phase) ||
      ![null, 0, 1].includes(s.winner) || typeof s.decks !== 'object' || !s.decks) return false;

  for (const key of CATEGORIES) {
    const deck = s.decks[key];
    if (!Array.isArray(deck) || deck.length > 33 ||
        deck.some(i => !Number.isInteger(i) || i < 0 || i >= BANK[key].length) ||
        new Set(deck).size !== deck.length) return false;
  }

  if (s.phase === 'wheel') return s.current === null && s.winner === null;
  if (s.phase === 'victory') return s.winner !== null && s.scores[s.winner] >= 16;
  const q = s.current;
  if (!q || !CATEGORIES.includes(q.category) || !Number.isInteger(q.index) ||
      q.index < 0 || q.index >= BANK[q.category].length ||
      !Array.isArray(q.order) || q.order.length !== 4 ||
      new Set(q.order).size !== 4 || q.order.some(i => ![0, 1, 2, 3].includes(i))) return false;
  if (s.phase === 'question') return q.selected === null && s.winner === null;
  return Number.isInteger(q.selected) && q.selected >= 0 && q.selected < 4;
}

function load() {
  if (!storageEnabled) return null;
  try {
    const data = localStorage.getItem(SAVE_KEY);
    if (!data) return null;
    const restored = JSON.parse(data);
    return validSave(restored) ? restored : null;
  } catch (error) {
    return null;
  }
}

function createMatch(names) {
  return {
    version: 2,
    names,
    scores: [0, 0],
    active: 0,
    round: 1,
    answered: 0,
    angle: 0,
    phase: 'wheel',
    winner: null,
    current: null,
    decks: newDecks()
  };
}

function setScreen(id) {
  $('lobby-screen').hidden = id !== 'lobby';
  $('match-area').hidden = id === 'lobby';
  $('wheel-screen').hidden = id !== 'wheel';
  $('question-screen').hidden = id !== 'question' && id !== 'result';
  $('victory-screen').hidden = id !== 'victory';
}

function updateScoreboard() {
  for (let i = 0; i < 2; i++) {
    const card = $(`player-card-${i}`);
    const active = state.active === i && state.phase !== 'victory';
    card.classList.toggle('is-active', active);
    $(`player-label-${i}`).textContent = state.names[i];
    $(`score-${i}`).textContent = String(state.scores[i]);
    $(`bar-${i}`).style.width = `${Math.min(100, Math.max(0, state.scores[i] / 16 * 100))}%`;
  }
  $('turn-label').textContent = state.phase === 'victory'
    ? '✦ Fim de jogo'
    : `✦ Vez de ${state.names[state.active]}`;
  $('round-label').textContent = `RODADA ${String(state.round).padStart(2, '0')}`;
}

function renderQuestion() {
  const q = state.current;
  const row = BANK[q.category][q.index];
  const answered = state.phase === 'result';
  const correctPosition = q.order.indexOf(0);
  const right = answered && q.selected === correctPosition;
  $('category-badge').textContent = `${THEMES[q.category].emoji}  ${THEMES[q.category].label}`;
  $('question-index').textContent = `PERGUNTA ${String(state.answered + (answered ? 0 : 1)).padStart(2, '0')}`;
  $('question-text').textContent = row[0];
  const answerList = $('answer-list');
  answerList.replaceChildren();

  q.order.forEach((optionIndex, position) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer';
    button.disabled = answered;
    const letter = document.createElement('span');
    letter.className = 'answer-letter';
    letter.textContent = 'ABCD'[position];
    const content = document.createElement('span');
    content.textContent = row[optionIndex + 1];
    button.append(letter, content);
    if (answered) {
      if (position === correctPosition) button.classList.add('is-correct');
      else if (position === q.selected) button.classList.add('is-wrong');
      else button.classList.add('is-muted');
    } else {
      button.addEventListener('click', () => answer(position));
    }
    answerList.append(button);
  });

  $('answer-feedback').hidden = !answered;
  $('continue-button').hidden = !answered;
  $('question-hint').hidden = answered;
  if (answered) {
    $('answer-feedback').className = `feedback ${right ? 'success' : 'failure'}`;
    $('feedback-title').textContent = right ? '✓ Resposta correta! +2 pontos' : '✕ Resposta incorreta. −1 ponto';
    $('feedback-description').textContent = right
      ? 'Você acertou! A pontuação já foi atualizada.'
      : `A resposta correta é: ${row[1]}.`;
    $('continue-button').textContent = state.winner === null ? `Passar a vez para ${state.names[1 - state.active]} →` : 'Ver quem venceu →';
  }
}

function renderVictory() {
  $('victory-title').textContent = `${state.names[state.winner]} venceu!`;
  $('victory-description').textContent = 'A roleta girou, as perguntas terminaram e a noite já tem seu campeão.';
  $('final-score').textContent = `${state.scores[0]} × ${state.scores[1]}`;
}

function render() {
  if (!state) {
    setScreen('lobby');
    return;
  }
  updateScoreboard();
  wheel.style.transform = `rotate(${state.angle}deg)`;
  setScreen(state.phase);
  if (state.phase === 'wheel') {
    $('spin-button').disabled = false;
    $('spin-button-label').textContent = '✦ Girar a roleta';
    $('wheel-status').textContent = `Vez de ${state.names[state.active]}. Descubra seu tema!`;
  } else if (state.phase === 'question' || state.phase === 'result') {
    renderQuestion();
  } else if (state.phase === 'victory') {
    renderVictory();
  }
}

function pickQuestion(category) {
  if (!state.decks[category].length) {
    state.decks[category] = shuffled(BANK[category].map((_, i) => i));
  }
  return { category, index: state.decks[category].pop(), order: shuffled([0, 1, 2, 3]), selected: null };
}

function spin() {
  if (!state || state.phase !== 'wheel' || animation) return;
  const index = Math.floor(Math.random() * CATEGORIES.length);
  const category = CATEGORIES[index];
  const startAngle = state.angle;
  // O ponteiro está fixo no topo. Os centros das fatias são 60°, 180° e 300°.
  // Com a rotação abaixo, o centro da fatia sorteada termina exatamente sob a seta.
  const finalAngle = (360 - (60 + 120 * index) % 360) % 360;
  const offset = (finalAngle - (startAngle % 360) + 360) % 360;
  const endAngle = startAngle + 360 * (5 + Math.floor(Math.random() * 2)) + offset;

  // Persistir a pergunta ANTES da animação garante que um refresh não sorteie
  // outra pergunta nem altere a sorte depois que o usuário tocou no botão.
  state.current = pickQuestion(category);
  state.phase = 'question';
  state.angle = finalAngle;
  save();
  const token = ++spinToken;
  $('spin-button').disabled = true;
  $('spin-button-label').textContent = '✦ Girando…';
  $('wheel-status').textContent = 'O destino está escolhendo seu tema…';

  const finish = () => {
    if (token !== spinToken) return;
    animation = null;
    wheel.style.transition = 'none';
    wheel.style.transform = `rotate(${finalAngle}deg)`;
    render();
  };

  // Web Animations API: funciona sem depender de uma transição de CSS
  // que pode não disparar quando o elemento é mostrado ou ocultado.
  const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 900 : 3900;
  if (typeof wheel.animate === 'function') {
    animation = wheel.animate(
      [{ transform: `rotate(${startAngle}deg)` }, { transform: `rotate(${endAngle}deg)` }],
      { duration, easing: 'cubic-bezier(.12,.77,.14,1)', fill: 'forwards' }
    );
    animation.finished.then(() => {
      if (token !== spinToken) return;
      animation.cancel();
      finish();
    }).catch(() => {});
  } else {
    wheel.style.transition = 'none';
    wheel.style.transform = `rotate(${startAngle}deg)`;
    void wheel.offsetWidth; // Força um frame antes de começar o giro.
    wheel.style.transition = `transform ${duration}ms cubic-bezier(.12,.77,.14,1)`;
    wheel.style.transform = `rotate(${endAngle}deg)`;
    animation = { cancel: () => { wheel.style.transition = 'none'; } };
    setTimeout(() => { if (token === spinToken) finish(); }, duration + 80);
  }
}

function answer(position) {
  if (!state || state.phase !== 'question') return;
  const q = state.current;
  if (!Number.isInteger(position) || position < 0 || position > 3 || q.selected !== null) return;
  q.selected = position;
  const correct = q.order[position] === 0;
  state.scores[state.active] += correct ? 2 : -1;
  state.answered += 1;
  if (state.scores[state.active] >= 16) state.winner = state.active;
  state.phase = 'result';
  save();
  render();
}

function continueTurn() {
  if (!state || state.phase !== 'result') return;
  if (state.winner !== null) {
    state.phase = 'victory';
  } else {
    state.phase = 'wheel';
    state.current = null;
    state.active = 1 - state.active;
    state.round += 1;
  }
  save();
  render();
}

function rematch() {
  if (!state || state.phase !== 'victory') return;
  const names = [...state.names];
  state = createMatch(names);
  save();
  wheel.style.transform = 'rotate(0deg)';
  render();
}

function openResetDialog() {
  if (!state) return;
  $('reset-dialog').hidden = false;
  $('cancel-reset').focus();
}

function closeResetDialog() {
  $('reset-dialog').hidden = true;
  $('reset-button').focus();
}

function clearEverything() {
  spinToken += 1;
  if (animation) {
    animation.cancel();
    animation = null;
  }
  state = null;
  try { localStorage.removeItem(SAVE_KEY); } catch (error) { showStorageWarning(); }
  $('reset-dialog').hidden = true;
  $('player-one-name').value = '';
  $('player-two-name').value = '';
  $('lobby-error').hidden = true;
  wheel.style.transition = 'none';
  wheel.style.transform = 'rotate(0deg)';
  render();
}

function startFromLobby(event) {
  event.preventDefault();
  if (state) return;
  const names = [$('player-one-name').value.trim(), $('player-two-name').value.trim()];
  const error = $('lobby-error');
  if (names.some(name => name.length === 0)) {
    error.textContent = 'Preencha os nomes dos dois jogadores para começar.';
    error.hidden = false;
    return;
  }
  if (names[0].toLocaleLowerCase('pt-BR') === names[1].toLocaleLowerCase('pt-BR')) {
    error.textContent = 'Use nomes diferentes para identificar os dois jogadores.';
    error.hidden = false;
    return;
  }
  error.hidden = true;
  state = createMatch(names);
  save();
  render();
}

function verifyQuestions() {
  for (const category of CATEGORIES) {
    const questions = BANK[category];
    if (questions.length !== 33 || questions.some(row => row.length !== 5 || new Set(row.slice(1)).size !== 4)) {
      throw new Error(`Banco de perguntas inválido: ${category}`);
    }
  }
}

function init() {
  verifyQuestions();
  checkStorage();
  state = load();
  $('lobby-form').addEventListener('submit', startFromLobby);
  $('spin-button').addEventListener('click', spin);
  $('continue-button').addEventListener('click', continueTurn);
  $('rematch-button').addEventListener('click', rematch);
  $('reset-button').addEventListener('click', openResetDialog);
  $('cancel-reset').addEventListener('click', closeResetDialog);
  $('confirm-reset').addEventListener('click', clearEverything);
  $('reset-dialog').addEventListener('click', e => {
    if (e.target === $('reset-dialog')) closeResetDialog();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('reset-dialog').hidden) closeResetDialog();
  });
  render();
}

init();
