//your JS code here. If required.
const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

changeBtn.addEventListener("click", () => {
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    // Get all grid items
    const gridItems = document.querySelectorAll(".grid-item");

    // Reset all grid items to transparent
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    // Change color of the selected block if valid
    const targetBlock = document.getElementById(blockId);
    if (targetBlock) {
        targetBlock.style.backgroundColor = color;
    } else {
        alert("Please enter a valid block ID (1-9).");
    }
});

resetBtn.addEventListener("click", () => {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });
});

