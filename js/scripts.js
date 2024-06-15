document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dish = urlParams.get('dish');
    
    if (dish) {
        const dishDetails = {
            dish1: {
                name: "菜品1",
                image: "images/dish1.jpg",
                description: "菜品1的详细描述。"
            },
            dish2: {
                name: "菜品2",
                image: "images/dish2.jpg",
                description: "菜品2的详细描述。"
            },
            dish3: {
                name: "菜品2",
                image: "images/dish2.jpg",
                description: "菜品2的详细描述。"
            }
            // 更多菜品详细信息
        };
        
        if (dishDetails[dish]) {
            document.getElementById('dish-name').innerText = dishDetails[dish].name;
            document.getElementById('dish-image').src = dishDetails[dish].image;
            document.getElementById('dish-description').innerText = dishDetails[dish].description;
        }
    }
});
