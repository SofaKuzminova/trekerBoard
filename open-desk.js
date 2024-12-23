
let activeDesk = null;

function toggleDesk(event) {
    const targetDesk = event.currentTarget; 

    if (activeDesk === targetDesk) {
        document.getElementById('content-desk').style.display = 'none';

        targetDesk.querySelector('.down').style.display = 'flex';
        targetDesk.querySelector('.up').style.display = 'none';

        const desks = document.querySelectorAll('.desk');
        desks.forEach(desk => {
            desk.style.display = 'flex';
        });

        activeDesk = null; 
    } else {
        const desks = document.querySelectorAll('.desk');
        desks.forEach(desk => {
            if (desk !=  targetDesk){
                desk.style.display = 'none';
            }
        });

        document.getElementById('content-desk').style.display = 'flex';
        
        if (activeDesk) {
            activeDesk.querySelector('.down').style.display = 'flex';
            activeDesk.querySelector('.up').style.display = 'none';
        }

        targetDesk.querySelector('.down').style.display = 'none';
        targetDesk.querySelector('.up').style.display = 'flex';

        activeDesk = targetDesk;
    }
}