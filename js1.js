const show = document.createElement("h3")
const foterdiv = document.querySelector(".foterdiv")
const bt = document.querySelectorAll(".bt")
const bigdiv = document.querySelector(".bigdiv")
const sectinoblack = document.querySelector(".sectinoblack")

//////////////////////////////
const loop = () => {

    let smalldiv = document.querySelectorAll(".smalldiv")
    let total = 0
    smalldiv.forEach(item => {

        let dolar = Number(item.getElementsByClassName("dolar")[0].innerText)
        let value = Number(item.getElementsByClassName("input")[0].value)
        total = total + (dolar * value)

        let totall = document.querySelector(".totall")
        totall.innerText = total

    });
}


bt.forEach((item) => {
    item.addEventListener("click", () => {

        item.innerHTML = "&#x2714; Done"
        item.append.innerText = "ss"
        item.style.backgroundColor = "rgb(0, 188, 44)"
        item.style.color = "white"
        const body = document.getElementById("bodyy")
        const creat = document.createElement("h1")
        creat.innerText = "مبرووووووووووك "
        body.prepend(creat)
        creat.classList.add("ccreat")
        setTimeout(() => {
            creat.style.transform = "translateX(-200vw)"
        }, 1000);
        setTimeout(() => {
            creat.remove()
        }, 4000);
        show.innerText = "عرض المشنريات "
        body.prepend(show)
        show.classList.add("sshow")

        const p = item.parentElement.parentElement.getElementsByClassName("p")[0].innerText
        const shirt = item.parentElement.parentElement.getElementsByClassName("shirt")[0].innerText
        const bigimg = item.parentElement.parentElement.getElementsByClassName("bigimg")[0].src


        const cc = document.querySelector(".cc")
        cc.addEventListener("click", () => {

            loop()

        })




        cc.innerHTML +=
            `   <div  class="smalldiv"> 
<button class="btnsmall">حذف</button> 
<p class=   "dolar"   > ${p} </p> 
<div class="divquantaty"> 
<p>الكميه</p>
<input class="input"  type="number"  min="1"  value="2">  
</div>
<div class=" Shirt"> 
<p  class="pshirt">    ${shirt}</p>
<img class="imgsmall"  src=${bigimg}>
</div>
`

        const btnsmall = document.querySelectorAll(".btnsmall");
        btnsmall.forEach(item => {
            item.addEventListener("click", (eo) => {


                eo.target.parentElement.remove()
                total = 0
                const pshirt = eo.target.parentElement.querySelector(".pshirt").innerText
                console.log(pshirt);


            })
        });



    })





    ////////////////
    const x = document.querySelector(".x")
    x.addEventListener("click", () => {
        bigdiv.style.transform = "  translateX(100vw) "
    })

    show.addEventListener("click", () => {
            bigdiv.style.transform = "  translateX(0vw) "

        })
        //////////////
        ///////////////
        /////////////////






    // 

    // console.log(pshirt);




})