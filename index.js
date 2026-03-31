const tracksContainer = document.querySelector("#tracksContainer")

async function fetchData() {
    const data = await fetch('https://kitek.ktkv.dev/static/spotify.json')
    const json = await data.json()
    console.log(json)

    const html = json.map((item) => `
        <li class="track-item">
                <div class="track-number">${item.track.track_number}</div>
                <div class="track-main">
                    <img src=${item.track.album.images[0].url} alt="--------"
                        class="album-art" loading="lazy" />
                    <div class="track-info">
                        <div class="track-name">${item.track.name}</div>
                        <div class="track-artists">${item.track.artists}
</div>
                        <div class="track-album">${item.track.album}</div>
                    </div>
                </div>
                <div class="track-meta">
                    <div class="duration">2:59</div>
                    <div class="popularity">♪ 30</div>
                </div>
            </li>
    `).join("")

    tracksContainer.innerHTML = html
}

fetchData()
