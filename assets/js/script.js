let products = {
    data: [{
        productName: "Bác Hồ Đọc Bản Tuyên Ngôn Độc Lập",
        category: "2.9.1945",
        price: "Ngày 2-9-1945: Quốc khánh nước Cộng hòa Xã hội chủ nghĩa Việt Nam. Ngay sau khi Tổng khởi nghĩa Cách mạng Tháng Tám năm 1945 thành công, ngày 2-9-1945, tại Quảng trường Ba Đình, Hà Nội, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đã trang trọng đọc bản Tuyên ngôn Độc lập, tuyên bố trước quốc dân đồng bào cả nước và toàn thể nhân loại trên thế giới, khai sinh nước Việt Nam Dân chủ Cộng hòa (nay là Cộng hòa Xã hội chủ nghĩa Việt Nam). Từ đây, đất nước ta bước vào kỷ nguyên mới- Kỷ nguyên độc lập, tự do và chủ nghĩa xã hội.",
        image: "1945.png"
    }, ],
};
for (let i of products.data) {
    // Create Card
    let card = document.createElement("div");
    // Card should have category 
    card.classList.add("card", "i.category");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    // product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" = i.price;
    container.appendChild(price);

    document.getElementById("products").appendChild(card);
}
//search button click
document.getElementById("search").addEventListener("click", () => {
    //initialtization
    let searchInput = document.getElementById("search-input").ariaValueMax;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        // check if text includes the search value
        if (element.innerText.include(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    })
});