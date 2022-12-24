const toggleMode = () => {
    const { documentElement } = document;
    const img = document.querySelector("#profile img")
    
    documentElement.classList.toggle('light');

    if(documentElement.classList.contains('light')) {
        img.setAttribute('src', './assets/AvatarLight.png')
        img.setAttribute('alt', 'Foto de Arthur Santana sorrindo em um fundo claro semelhante ao background do site.')
    } else {
        img.setAttribute('src', './assets/Avatar.png')
        img.setAttribute('alt', 'Foto de Arthur Santana sorrindo em um fundo roxo com detalhe branco.')
    }

}