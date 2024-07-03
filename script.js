function updateTime() {
    const now = new Date();
    
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    
    const dayName = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const dayString = `${dayName}`;
    const dateString = `${date} ${month} ${year}`;
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('day').textContent = dayString;
    document.getElementById('date').textContent = dateString;
    document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();
