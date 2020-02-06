console.log("hello World");


const homeArticleContainer = document.querySelector('.home-container');

$('form').on('submit', (e) => {
    e.preventDefault();

    console.log('testing');

    const search = $('input').val();
    console.log(search);

    homeArticleContainer.innerHTML = `<h3 style=" margin-left:45%">Loading...</h3>`;


    fetch('/search?key=' + encodeURIComponent(search)).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.response.status);


        let newsHtml = "";

        data.response.articles.forEach((article, index) => {

            let news = ` <div class="article-container">
              <div class = "overlay"style = "background: url('${article["urlToImage"]}') no-repeat center center/cover" ></div>
            <article class="card">
                <div>
                    <div class="source">${article.source["name"]}</div>
                    <h3>${article["title"]}</h3>
                    <p>${article["description"]}</p>
                    <a href="${article["url"]}"
                        target="_blank" class="btn">Read More</a>
                </div>
            </article>
        </div>`

            let bgImg = article.url;
            newsHtml += news;

        });

        homeArticleContainer.innerHTML = newsHtml;

    });


});