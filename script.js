//Variaveis para o primeiro display de skins
var campeoes = [];
var gabunda = [];
var actualSkins;

//Variaveis para o segundo display de skins
var campeoes2 = [];
var gabunda2 = [];
var actualSkins2;

var getChamps = () => {
    $.get("https://ddragon.leagueoflegends.com/cdn/10.18.1/data/pt_BR/champion.json", function (data, status) {
        campeoes = Object.values(data.data);
        loadChamps();
    });
}

var loadChamps = () => {
    for (var i = 0; i < campeoes.length; i++) {
        document.getElementById('champs').innerHTML =
            document.getElementById('champs').innerHTML + `<option value="${campeoes[i].id}">${campeoes[i].name}</option>`;
    }
    setChamp('Aatrox');
}

var setChamp = (name) => {
    document.getElementById('skin').setAttribute('src',
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + name + '_0.jpg');
    getSkins(name);
}

var getSkins = (name) => {
    $.get("https://ddragon.leagueoflegends.com/cdn/10.18.1/data/pt_BR/champion/" + name + ".json", function (data, status) {
        actualSkins = Object.values(data.data)[0].skins;
        loadSkins();
    });
}

var loadSkins = () => {
    document.getElementById('skins').innerHTML = "";
    actualSkins.forEach(function (element) {
        if (element.name == 'default')
            element.name = 'Skin Padrão';
        document.getElementById('skins').innerHTML =
            document.getElementById('skins').innerHTML + `<option value="${element.num}">${element.name}</option>`;
    });
}

var setSkin = (name, skin) => {
    document.getElementById('skin').setAttribute('src',
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + name + '_' + skin + '.jpg');
}

var getChamps2 = () => {
    $.get("https://ddragon.leagueoflegends.com/cdn/10.18.1/data/pt_BR/champion.json", function (data, status) {
        campeoes2 = Object.values(data.data);
        loadChamps2();
    });
}

var loadChamps2 = () => {
    for (var i = 0; i < campeoes2.length; i++) {
        document.getElementById('champs2').innerHTML =
            document.getElementById('champs2').innerHTML + `<option value="${campeoes2[i].id}">${campeoes2[i].name}</option>`;
    }
    setChamp2('Aatrox');
}

var setChamp2 = (name) => {
    document.getElementById('skin2').setAttribute('src',
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + name + '_0.jpg');
    getSkins2(name);
}

var getSkins2 = (name) => {
    $.get("https://ddragon.leagueoflegends.com/cdn/10.18.1/data/pt_BR/champion/" + name + ".json", function (data, status) {
        actualSkins2 = Object.values(data.data)[0].skins;
        loadSkins2();
    });
}

var loadSkins2 = () => {
    document.getElementById('skins2').innerHTML = "";
    actualSkins2.forEach(function (element) {
        if (element.name == 'default')
            element.name = 'Skin Padrão';
        document.getElementById('skins2').innerHTML =
            document.getElementById('skins2').innerHTML + `<option value="${element.num}">${element.name}</option>`;
    });
}

var setSkin2 = (name, skin) => {
    document.getElementById('skin2').setAttribute('src',
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + name + '_' + skin + '.jpg');
}

