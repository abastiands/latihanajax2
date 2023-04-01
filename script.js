const handleClick = () => {
    const contentItems = document.querySelector(".content-items");

    contentItems.style.display = 'grid'

    fetchData();
}

const fetchData = async () => {
    const request = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36", {
        method: "GET"
    });

    const response = await request.json();
    const results = response.results;

    const contentItems = document.querySelector(".content-items");


    let datas = '';
    results.map((data) => {

        const dataPokemon = async () => {
            const requestPokemon = await fetch(data.url, {
                method: "GET"
            });

            const detailPokemon = await requestPokemon.json();

            const pokemonId = detailPokemon.id;
            const pokemonName = detailPokemon.name;
            const pokemonImage = detailPokemon.sprites.front_default;
            const pokemonType = detailPokemon.types[0].type.name;

            for (let i = 1; i <= 1; i++) {
                switch (pokemonType) {
                    case 'grass':
                        datas = datas + `
                            <div class="content-item grass">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'water':
                        datas = datas + `
                            <div class="content-item water">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'fire':
                        datas = datas + `
                            <div class="content-item fire">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'bug':
                        datas = datas + `
                            <div class="content-item bug">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'normal':
                        datas = datas + `
                            <div class="content-item normal">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'flying':
                        datas = datas + `
                            <div class="content-item flying">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'rock':
                        datas = datas + `
                            <div class="content-item rock">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'ground':
                        datas = datas + `
                            <div class="content-item ground">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'psychic':
                        datas = datas + `
                            <div class="content-item psychic">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'ghost':
                        datas = datas + `
                            <div class="content-item ghost">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'dark':
                        datas = datas + `
                            <div class="content-item dark">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'steel':
                        datas = datas + `
                            <div class="content-item steel">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'poison':
                        datas = datas + `
                            <div class="content-item poison">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'electric':
                        datas = datas + `
                            <div class="content-item electric">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'fairy':
                        datas = datas + `
                            <div class="content-item fairy">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'fighting':
                        datas = datas + `
                            <div class="content-item fighting">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'dragon':
                        datas = datas + `
                            <div class="content-item dragon">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                    case 'ice':
                        datas = datas + `
                            <div class="content-item ice">
                                <div class="content-name">
                                    ${pokemonId}: ${pokemonName}
                                </div>
                                <div class="content-image">
                                    <img src="${pokemonImage}" />
                                </div>
                                <div class="content-type">
                                    Type: ${pokemonType}
                                </div>
                            </div>
                        `
                        break;
                }
            }
            contentItems.innerHTML = datas;
        }
        dataPokemon();
    })
}