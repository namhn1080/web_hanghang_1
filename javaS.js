class Shop {
    constructor(name, address) {
        this.name = name;
        this.products = [];
        this.vendors = [];
        this.address = address;
    }
    addVendor(vendor) {
        this.vendors.push(vendor);
    }
    addProduct(products) {
        this.products.push(products);
    }
    getProduct() {
        return this.products;
    }
}
class Vendor {
    constructor(name, address) {

        this.name = name;
        this.address = address;
    }
}
class Product {
    constructor(name, price, imgurl, description) {
        this.name = name;
        this.price = price;
        this.imgurl = imgurl;
        this.description = description;
    }
}

let vendor = new Vendor("America", "14/a Go vap");
let products = [
    new Product(
        "Armchair Royal vải MB-LD 1/7",
        10000000,
        "https://nhaxinh.com/wp-content/uploads/2022/04/armchair-Royal-vai-dep-xanh-den-1-600x400.jpg",
        "Chân kim loại 2 màu - nệm bọc vải cao cấp"
    ),
    new Product(
        "Ghế ăn Peak hiện đại",
        5000000,
        "https://nhaxinh.com/wp-content/uploads/2021/10/ghe-an-peak-mau-xanh-2-300x200.jpg",
        "Bọc vải, Chân sắt sơn tĩnh điện"
    ),
    new Product(
        "Bàn ăn Peak hiện đại   ",
        40000000,
        "https://nhaxinh.com/wp-content/uploads/2022/06/ban-an-peak-van-may-hien-dai-ceramic.jpg",
        "Chân composite, Mặt bàn Ceramic nhập khẩu từ Ý"
    ),
    new Product(
        "Armchari Osaka Bọc Vải",
        10000000,
        "https://nhaxinh.com/wp-content/uploads/2022/06/armchair-osaka-hien-dai-sang-trong-2-600x400.jpg",
        "Khung inox 304 PVD bọc vải cao cấp"
    ),
    new Product(
        "Console Table Gloria Gold",
        25000000,
        "https://nhaxinh.com/wp-content/uploads/2022/06/CONSOLE-TABLE-GLORIA-GOLD-82379K-2-600x400.jpg",
        "Thép mạ kẽm màu gold -kính cường lực trắng trong"
    ),
    new Product(
        "Sofa Combo 3 chỗ da",
        60000000,
        "https://nhaxinh.com/wp-content/uploads/2022/07/Sofa-Combo-3-cho-da-Bali-520-1-600x400.jpg",
        "Khung gỗ beech, chân kim loại sơn đen + gold, bọc da"
    ),
    new Product(
        "Tủ Ly Barbier Walnut Hiện Đại",
        50000000,
        "https://nhaxinh.com/wp-content/uploads/2022/06/TU-LY-BARBIER-WALNUT-410043Z-1-600x400.jpg",
        "Gỗ -mdf veneer walnut"
    ),
    new Product(
        "Giường ngủ Dubai 1m6",
        10000000,
        "https://nhaxinh.com/wp-content/uploads/2021/10/giuong-dubai-go-vai-4-600x400.jpg",
        "Khung - Chân gỗ beech - Vải"
    ),

];
let shop = new Shop("Furniture", "123/Caothang");
shop.addVendor(vendor);
for (let items of products) {
    shop.addProduct(items);
}
console.log(shop.getProduct());





//********* */
/** 
@param {Product} items
@returns
*/

function createItemElm(items) {
    let itemElm = document.createElement("div");
    itemElm.className = "box - pink";
    itemElm.innerHTML = `<div class="product">
    <span class="product__price">${items.price}VND</span>
    <img
      class="product__image"
      src="${items.imgurl}"
    />
    <h1 class="product__title">${items.name}</h1>
    <hr />
    <p>
      ${items.description}
    </p>
    <a href="#" class="product__btn btn">Buy Now</a>

    </div>`;
    return itemElm;
}
let parent = document.getElementsByClassName("parent")[0];

for (let i = 0; i < products.length; i++) {
    let newItem = createItemElm(products[i]);
    parent.appendChild(newItem);
}