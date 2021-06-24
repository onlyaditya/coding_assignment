async function getData() {
    let title = document.getElementById('search').value;
    let year = document.getElementById('year').value;

    try {
        let res = await fetch(`http://www.omdbapi.com/?t=${title}&y=${year}&apikey=f4300b1a`);
        let data = await res.json();

        if (data.Response == "True") {
            append(data);
        }
        else {
            appendError();
        }
        console.log(data);
    }
    catch (e) {
        console.log(e);
        
    }
    
}

function append(d) {
    let poster = document.getElementById('poster');
    let titl = document.getElementById('title');
    let plot = document.getElementById('plot');
    let actr = document.getElementById('actors');
    let date = document.getElementById('date');
    let coll = document.getElementById('collection');
    let lang = document.getElementById('language');
    let rating = document.getElementById('rating');

    titl.innerHTML = `Title: ${d.Title}`;
    poster.innerHTML = `<img src="${d.Poster}" />`;
    plot.innerHTML = `Plot: ${d.Plot}`;
    actr.innerHTML = `Actors: ${d.Actors}`;
    date.innerHTML = `Release Date: ${d.Released}`;
    coll.innerHTML = `Gross Collection: ${d.BoxOffice}`;
    lang.innerHTML = `Language: ${d.Language}`;
    rating.innerHTML = `IMDB Rating: ${d.imdbRating}`;

}

function appendError() {
    let cont = document.getElementById('container');
    cont.innerHTML = `<img src="https://cdn.dribbble.com/users/898770/screenshots/3744292/search-bar.gif" />`
}