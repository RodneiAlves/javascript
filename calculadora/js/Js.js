let display = document.querySelector('#display');
let buttons = document.querySelectorAll('.numero');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        let res = buttons[i].textContent; // Obter o texto do botão clicado

        if (res === "C") {
            // Limpa o display se o botão "C" for clicado
            display.value = '';
        } else if (res === 'del') {
            // Remove o último caractere do display se o botão "del" for clicado
            display.value = display.value.slice(0, -1);
        } else if (res === 'x') {
            display.value += '*';
        } else if (res === '=') {
            try {
                if (display.value=== '') {
                    display.value = ''; // Evita avaliar se o display estiver vazio
                } else {
                    // Avalia a expressão no display
                    display.value = eval(display.value);
                }
            } catch (erro) {
                display.value = ''; // Limpa o display em caso de erro
            }
        } else {
            // Adiciona o texto do botão ao display
            display.value += res;
        }
    });
}
