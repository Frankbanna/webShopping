// var product = [{
//     id:1,
//     img:'https://th.bing.com/th/id/OIP.65_oJiIx-edHRNYoBADKFQHaHa?rs=1&pid=ImgDetMain',
//     name:'JBL GO 3',
//     price:990,
//     description:'good go3  by frank youhappy me happy ',
//     type:'GO 3'
// }, {
//     id: 2,
//     img:'https://images.sonicelectronix.com/images/5241629/main/partybox110.jpg',
//     name:'JBL Partybox 110',
//     price:11190,
//     description:'good  Partybox 110 by frank youhappy me happy',
//     type:' Partybox '
// }, {
//     id:3,
//     img:'https://www.trendygadget.com/wp-content/uploads/2023/08/JBL_PARTYBOX_ULTIMATE_FRONT_42578_x4_2.jpg',
//     name:'JBL Partybox Ultimate ',
//     price:666190,
//     description:'good Partybox Ultimate  by frank youhappy me happy',
//     type:' Partybox '
// }];

// $(document).ready(() => {
//     console.log("Document is ready"); // เพิ่มเพื่อตรวจสอบ
//     let html = '';
//     for (let i = 0; i < product.length; i++) {
//         html += `<div class="product-items ${product[i].type}">
//                     <img class="product-img" src="${product[i].img}" alt="${product[i].name}">
//                     <p style="font-size: 1.2vw;">${product[i].name}</p>
//                     <p style="font-size: 1vw;">${product[i].price} THB</p>
//                 </div>`;
//     }
//     $("#productlist").html(html);
// });
