async function getUsers() {
    let url = 'https://api.tracker.gg/api/v2/rocket-league/standard/profile/epic/Ascyam_';
    try {
        let res = await fetch(url, {
            method: "GET",
            headers: {"Access-Control-Allow-Origin": "*"}
          });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    let htmlSegment = `<div class="user">
                    {users}
                    </div>`;
    html += htmlSegment;
    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();