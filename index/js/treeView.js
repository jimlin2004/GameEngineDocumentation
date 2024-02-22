// function closeChild(target)
// {
//     for (let i = 0; i < target.children.length; ++i)
//     {
//         if (target.children[i].tagName === "UL")
//         {
//             closeChild(target.children[i]);
//         }
//         target.children[i].style.display = "none";
//     }
//     target.classList.add("closed");
// }

// // 用於初次載入時的預設關閉與添加click event
// function closeChildAndAddEvent(target)
// {
//     for (let i = 0; i < target.children.length; ++i)
//     {
//         if (target.children[i].tagName === "UL")
//         {
//             closeChildAndAddEvent(target.children[i]);
//         }
//         target.children[i].style.display = "none";
//     }
//     target.classList.add("closed");
    
//     target.addEventListener("click", (e) => {
//         if (e.target.classList.contains("closed"))
//         {
//             for (let i = 0; i < e.target.children.length; ++i)
//             {
//                 e.target.children[i].style.display = "block";
//             }
//             e.target.classList.remove("closed");
//         }
//         else
//         {
//             closeChild(e.target);
//         }
//     });
// }

const manualPanel = document.getElementById("manual-panel");

// 預設關閉所有子節點
// 同時註冊click event
manualPanel.querySelectorAll(".tree-view li:has(> ul)").forEach((target) => {
    // closeChildAndAddEvent(target);
    for (let i = 0; i < target.children.length; ++i)
    {
        if (target.children[i].tagName !== "SPAN")
            target.children[i].style.display = "none";
    }
    target.classList.add("closed");
    
    target.querySelector("span:first-child").addEventListener("click", (e) => {
        e.preventDefault();
        // e.target是Tree view中間節點的文字(span)，parent即為中間節點本身(li)
        let parent = e.target.parentNode;
        if (parent.classList.contains("closed"))
        {
            for (let i = 0; i < parent.children.length; ++i)
            {
                parent.children[i].style.display = "block";
            }
            parent.classList.remove("closed");
        }
        else
        {
            for (let i = 0; i < parent.children.length; ++i)
            {
                if (target.children[i].tagName !== "SPAN")
                    parent.children[i].style.display = "none";
            }
            parent.classList.add("closed");
        }
    });
});