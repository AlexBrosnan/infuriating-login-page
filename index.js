const passwordInput = document.getElementById('password');
const allowedPasswords = [
    "PaBo",
    "3yOK",
    "zv1C",
    "lJOnT",
    "47BKj",
    "a8nz1",
    "qUIWyL",
    "oRhbiL",
    "52E9Ui",
    "NnpWHGx",
    "9KMdmXR",
    "intPwBk",
    "FHPEJlC2",
    "6fcP7UkQ",
    "TwHQWnNO",
    "oKM6vOl24",
    "nAiWV5Ekw",
    "2WqRewZmk",
    "telSFm9WWi",
    "4ZGoTgREeM",
    "n3mD4Auz0G"
];
const gameSettings = {
    "maxSpawn": 9999999999999,
    "spawnTimeDiffS": 0,
    "targetSizePx": 75,
    "activeTimeS": 5,
    "shrinkDelayS": 1,
    "allowedChars": "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

function startGame()
{
    var signedIn = false;
    passwordInput.disabled = true;
    setInterval(function () {
        var currKeys = document.querySelectorAll('.key');
        if(currKeys.length < gameSettings["maxSpawn"])
        {
            var newKey = document.createElement("button");
            var newKeyPosX = getRandomIntInclusive(0, 100);
            var newKeyPosY = getRandomIntInclusive(0, 100);
            var newKeyValue = gameSettings["allowedChars"].split('')[getRandomIntInclusive(0, gameSettings["allowedChars"].length-1)];

            newKey.classList.add('key');
            newKey.innerHTML = newKeyValue;
            newKey.style.width = `${gameSettings["targetSizePx"]}px`;
            newKey.style.bottom = `${newKeyPosY}%`;
            newKey.style.left = `${newKeyPosX}%`;

            setTimeout(function()
            {
                newKey.style.animationDuration = gameSettings["activeTimeS"] + 's';
                newKey.style.animationName = "shrink";
            }, gameSettings["shrinkDelayS"] * 1000);

            setTimeout(function()
            {
                newKey.remove();
            }, (gameSettings["shrinkDelayS"] * 1000) + (gameSettings["activeTimeS"] * 1000));

            document.body.appendChild(newKey);

            newKey.addEventListener('click', () =>
            {
                passwordInput.value += newKey.innerHTML;
                newKey.remove();
            });
        }
    }, gameSettings["spawnTimeDiffS"] * 1000);
}

function getRandomIntInclusive(min, max)
{
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function removeFromPass()
{
    if(passwordInput.value.length > 0)
    {
        passwordInput.value = passwordInput.value.substring(0, passwordInput.value.length-1);
    }
}

function checkPass()
{
    if(allowedPasswords.includes(passwordInput.value))
    {
        window.location.href = 'home';
    }
}