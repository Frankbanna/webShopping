var product = [{
    id: 1,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740',
    name: 'Nike',
    price: 7000,
    description: 'Nike Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
    type: 'shoe'
}, {
    id: 2,
    img: 'https://images.unsplash.com/photo-1511746315387-c4a76990fdce?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740',
    name: 'Adidas shirt',
    price: 1500,
    description: 'Adidas shirt Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
    type: 'shirt'
}, {
    id: 3,
    img: 'https://images.unsplash.com/photo-1593287073863-c992914cb3e3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774',
    name: 'Adidas shoe',
    price: 45000,
    description: 'Adidas shoe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
    type: 'shoe'
},{
    id: 4,
    img: 'https://th.bing.com/th/id/OIP.65_oJiIx-edHRNYoBADKFQHaHa?rs=1&pid=ImgDetMain',
    name: 'JBL Go 3',
    price: 990,
    description: 'god go 3',
    type: 'jbl'
},{
    id:5,
    img: 'https://th.bing.com/th/id/OIP.lBN3S5voqoPJ6aVe43vymwHaHa?rs=1&pid=ImgDetMain',
    name: 'JBL Go 4',
    price: 1990,
    description: 'god go 4',
    type: 'jbl'
},{
    id:6,
    img: 'https://m.media-amazon.com/images/I/61JdoSNoVzL.jpg',
    name: 'JBL Clip 4',
    price: 1990,
    description: 'god Clip 4',
    type: 'jbl'
},{
    id:7,
    img: 'https://th.bing.com/th/id/R.da8229d0f3759a039321de394f296c80?rik=ZM06Uc6wQ9y9fA&riu=http%3a%2f%2fwww.custommacbd.com%2fcdn%2fshop%2fproducts%2f3_JBL_FLIP6_FRONT_BLACK_29509_x2-_1_1200x1200.jpg%3fv%3d1641157519&ehk=2nWBS4S%2fCKsjhuKUbCuFTqcDA60%2fYZQoTXx1%2fEOReTc%3d&risl=&pid=ImgRaw&r=0',
    name: 'JBL Flip 6',
    price: 1990,
    description: 'god Flip 6',
    type: 'jbl'
},{
    id:8,
    img: 'https://www.courtsmammouth.mu/96087-product_set/jbl-charge-5-black.jpg',
    name: 'JBL Charge 5',
    price: 1990,
    description: 'god Charge 5',
    type: 'jbl'
},{
    id:9,
    img: 'https://i5.walmartimages.com/asr/10cf3040-4367-46c8-8ac8-0a8156244de4.1ac97412a64cfe83ae06a22e27fac6b2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF',
    name: 'JBL Xtreme 3',
    price: 1990,
    description: 'god Xtreme 3',
    type: 'jbl'
}
];



$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } THB</p>
                </div>`;
    }
    $("#productlist").html(html);

})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsomething(elem) {
    // console.log('#'+elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if( product[i].name.includes(value) ) {
            html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } THB</p>
                </div>`;
        }
    }
    if(html == '') {
        $("#productlist").html(`<p>Not found product</p>`);
    } else {
        $("#productlist").html(html);
    }

}

function searchproduct(param) {
    console.log(param)
    $(".product-items").css('display', 'none')
    if(param == 'all') {
        $(".product-items").css('display', 'block')
    }
    else {
        $("."+param).css('display', 'block')
    }
}

var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex)
    $("#modalDesc").css('display', 'flex')
    $("#mdd-img").attr('src', product[index].img);
    $("#mdd-name").text(product[index].name)
    $("#mdd-price").text( numberWithCommas(product[index].price) + ' THB')
    $("#mdd-desc").text(product[index].description)
}

function closeModal() {
    $(".modal").css('display','none')
}

var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if( productindex == cart[i].index ) {
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }
    }

    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        // console.log(obj)
        cart.push(obj)
    }
    console.log(cart)

    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[productindex].name + ' to cart !'
    })
    $("#cartcount").css('display','flex').text(cart.length)
}

function openCart() {
    $('#modalCart').css('display','flex')
    rendercart();
}

function rendercart() {
    if(cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="${cart[i].img}" alt="">
                            <div class="cartlist-detail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${ numberWithCommas(cart[i].price * cart[i].count) } THB</p>
                            </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html)
    }
    else {
        $("#mycart").html(`<p>Not found product list</p>`)
    }
}

function deinitems(action, index) {
    if(action == '-') {
        if(cart[index].count > 0) {
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <= 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((res) => {
                  if(res.isConfirmed) {
                     cart.splice(index, 1) 
                     console.log(cart)
                     rendercart();
                     $("#cartcount").css('display','flex').text(cart.length)
                     
                     if(cart.length <= 0) {
                        $("#cartcount").css('display','none')
                     }
                  }  
                  else {
                    cart[index].count++;
                    $("#countitems"+index).text(cart[index].count)
                    rendercart();
                  }
                })
            }
            rendercart();
        }
        
    }
    else if(action == '+') {
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
        rendercart();
    }
}