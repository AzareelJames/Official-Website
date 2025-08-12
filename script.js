const repository = document.createElement(`input`);
repository.placeholder = `Offical-Website`;
repository.classList = `repository`;
document.body.appendChild(repository);

function goToWebsite(){
    window.open(`https://azareeljames.github.io/${repository.value}/`, `_blank`);
}