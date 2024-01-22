const portfolio = [
    {
        id: 1,
        category: "logo",
        path: "./img/portfolio/l1.jpg"
    },
    {
        id: 2,
        category: "logo",
        path: "./img/portfolio/l2.jpg"
    },
    {
        id: 3,
        category: "logo",
        path: "./img/portfolio/l3.jpg"
    },
    {
        id: 4,
        category: "logo",
        path: "./img/portfolio/l4.jpg"
    },






    {
        id: 5,
        category: "logo",
        path: "./img/portfolio/l5.jpg"
    },
    {
        id: 6,
        category: "logo",
        path: "./img/portfolio/l6.jpg"
    },
    {
        id: 7,
        category: "logo",
        path: "./img/portfolio/l7.jpg"
    },
    {
        id: 8,
        category: "logo",
        path: "./img/portfolio/l8.jpg"
    },
    {
        id: 9,
        category: "logo",
        path: "./img/portfolio/l9.jpg"
    },
    {
        id: 10,
        category: "logo",
        path: "./img/portfolio/l10.jpg"
    },
    {
        id: 11,
        category: "logo",
        path: "./img/portfolio/l11.jpg"
    },
    {
        id: 12,
        category: "logo",
        path: "./img/portfolio/l12.jpg"
    },
    {
        id: 13,
        category: "logo",
        path: "./img/portfolio/l13.jpg"
    },
    {
        id: 14,
        category: "logo",
        path: "./img/portfolio/l14.jpg"
    },

    {
        id: 15,
        category: "logo",
        path: "./img/portfolio/l15.jpg"
    },
    {
        id: 16,
        category: "logo",
        path: "./img/portfolio/l16.jpg"
    },
    {
        id: 17,
        category: "logo",
        path: "./img/portfolio/l17.jpg"
    },
    {
        id: 18,
        category: "logo",
        path: "./img/portfolio/l18.jpg"
    },
    {
        id: 19,
        category: "logo",
        path: "./img/portfolio/l19.jpg"
    },
    {
        id: 20,
        category: "logo",
        path: "./img/portfolio/l20.jpg"
    },
    {
        id: 21,
        category: "logo",
        path: "./img/portfolio/l21.jpg"
    },
    {
        id: 22,
        category: "logo",
        path: "./img/portfolio/l22.jpg"
    },
    {
        id: 23,
        category: "logo",
        path: "./img/portfolio/l23.jpg"
    },
    {
        id: 24,
        category: "logo",
        path: "./img/portfolio/l24.jpg"
    },
    {
        id: 25,
        category: "logo",
        path: "./img/portfolio/l25.jpg"
    },
    {
        id: 26,
        category: "logo",
        path: "./img/portfolio/l26.jpg"
    },

    {
        id: 17,
        category: "creativity",
        path: "./img/portfolio/c10.jpg"
    },
    {
        id: 18,
        category: "creativity",
        path: "./img/portfolio/c1.jpg"
    },
    {
        id: 19,
        category: "creativity",
        path: "./img/portfolio/c2.jpg"
    },
    {
        id: 20,
        category: "creativity",
        path: "./img/portfolio/c3.jpg"
    },
    {
        id: 21,
        category: "creativity",
        path: "./img/portfolio/c4.jpg"
    },
    {
        id: 22,
        category: "creativity",
        path: "./img/portfolio/c5.jpg"
    },
    {
        id: 23,
        category: "creativity",
        path: "./img/portfolio/c6.jpg"
    },
    {
        id: 24,
        category: "creativity",
        path: "./img/portfolio/c7.jpg"
    },
    {
        id: 25,
        category: "creativity",
        path: "./img/portfolio/c8.jpg"
    },
    {
        id: 26,
        category: "creativity",
        path: "./img/portfolio/c9.jpg"
    },
    {
        id: 27,
        category: "creativity",
        path: "./img/portfolio/c10.jpg"
    },
    {
        id: 28,
        category: "creativity",
        path: "./img/portfolio/c10.jpg"
    },
    {
        id: 29,
        category: "creativity",
        path: "./img/portfolio/c10.jpg"
    },
]

function filterPortfolio(category="all") {
    let portfolioPostContainer = document.querySelector("#portfolioPostContainer")
    while (portfolioPostContainer.firstChild) {
        portfolioPostContainer.removeChild(portfolioPostContainer.firstChild);
    }

    
    let count=0;
    portfolio.forEach((element) => {
        let ranNum=Math.floor(Math.random()*29)
        let createDiv = document.createElement('div')
            createDiv.classList.add("col-lg-3", "mt-5")
            
        if (element.category == category.value) {
          
            if(count<8){
            
            
            createDiv.innerHTML = ` <div class="card">
                                    <img src="${element.path}" class="card-img-top " alt="portfolio" />
                                    </div>`

            portfolioPostContainer.appendChild(createDiv)
            
           
            }
            
        count++
        }
        else if(category=="all"){
            
            if(count<8){
            // console.log(portfolio[ranNum].path)
            let randPath=portfolio[ranNum].path
            createDiv.innerHTML = ` <div class="card">
                                    <img src="${randPath}" class="card-img-top " alt="portfolio" />
                                    </div>`

            portfolioPostContainer.appendChild(createDiv)
            count++
                }

        }
    else
    return
    });
}

filterPortfolio()