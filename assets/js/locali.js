const shoppings = [
    { nome: "Punta Carretas Shopping - Montevideo, Uruguai", latitude: -34.92394, longitude: -56.15861 },
    { nome: "Patio Bullrich - Buenos Aires, Argentina", latitude: -34.58796, longitude: -58.38405 },
    { nome: "Shopping Parque Arauco - Santiago, Chile", latitude: -33.40017, longitude: -70.57791 },
    { nome: "Córdoba Shopping - Córdova, Argentina", latitude: -31.37812, longitude: -64.21499 },
    { nome: "Iguatemi Porto Alegre - Porto Alegre, Rio Grande do Sul", latitude: -30.02103, longitude: -51.16154 },
    { nome: "Shopping Campo Grande - Campo Grande, Mato Grosso do Sul", latitude: -20.45321, longitude: -54.58861 },
    { nome: "Bourbon Shopping São Paulo - São Paulo, São Paulo", latitude: -23.52546, longitude: -46.68148 },
    { nome: "Shopping Leblon - Leblon, Rio de Janeiro", latitude: -22.97754, longitude: -43.21683 },
    { nome: "BH Shopping - Belo Horizonte, Minas Gerais", latitude: -19.96951, longitude: -43.94408 },
    { nome: "Shopping Estação Cuiabá - Cuiabá, Mato Grosso", latitude: -15.58733, longitude: -56.121 },
    { nome: "Shopping Norte - La Paz, Bolívia", latitude: -16.49638, longitude: -68.13492 },
    { nome: "Via Verde Shopping - Rio Branco, Acre", latitude: -9.98342, longitude: -67.84795 },
    { nome: "Salvador Shopping - Salvador, Bahia", latitude: -12.97535, longitude: -38.45579 },
    { nome: "Shopping Manaus ViaNorte - Manaus, Amazonas", latitude: -2.99363, longitude: -60.00168 },
    { nome: "São Luís Shopping - São Luís, Maranhão", latitude: -2.51039, longitude: -44.28557 },
    { nome: "Boulevard Shopping Belém - Belém, Pará", latitude: -1.44531, longitude: -48.48902 },
    { nome: "Santafé Mall - Bogotá, Colômbia", latitude: 4.68643, longitude: -74.09336 },
    { nome: "Manzanares Plaza Shopping Mall - Miranda, Venezuela", latitude: 10.49772, longitude: -66.93882 }
    // Adicione mais shoppings, se necessário, seguindo o mesmo formato
];

function calcularDistancia(latitude1, longitude1, latitude2, longitude2) {
    const raioTerra = 6371;
    const lat1Rad = toRadians(latitude1);
    const lon1Rad = toRadians(longitude1);
    const lat2Rad = toRadians(latitude2);
    const lon2Rad = toRadians(longitude2);

    const deltaLat = lat2Rad - lat1Rad;
    const deltaLon = lon2Rad - lon1Rad;

    const a = Math.sin(deltaLat / 2) ** 2 + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distancia = raioTerra * c;
    return distancia;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function obterLocalizacaoUsuario() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitudeUsuario = position.coords.latitude;
            const longitudeUsuario = position.coords.longitude;

            let distanciaMinima = Infinity;
            let shoppingMaisProximo = null;

            shoppings.forEach(function (shopping) {
                const distancia = calcularDistancia(latitudeUsuario, longitudeUsuario, shopping.latitude, shopping.longitude);
                if (distancia < distanciaMinima) {
                    distanciaMinima = distancia;
                    shoppingMaisProximo = shopping;
                }
            });

            if (shoppingMaisProximo) {
                const distanciaElement = document.getElementById("distancia-para-local");
                distanciaElement.textContent = `O shopping mais próximo é ${shoppingMaisProximo.nome} e está a ${distanciaMinima.toFixed(2)} km de você.`;
            }
        });
    }
}

const calcularBotao = document.getElementById("calcular-distancia");
calcularBotao.addEventListener("click", function () {
    obterLocalizacaoUsuario();
});