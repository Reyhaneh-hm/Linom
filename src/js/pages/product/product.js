import '../../../scss/components/pages/product/index.scss';

/*-------------------Slider Product-------------------*/
window.addEventListener("load", () => {
    document.querySelectorAll("[scroll_container]").forEach(t => {
        let e = !1, i, s;
        t.addEventListener("mousedown", n => {
            e = !0,
                i = n.pageX - t.offsetLeft,
                s = t.scrollLeft
        }),
            t.addEventListener("mouseleave", () => {
                e = !1,
                    t.classList.remove("active")
            }),
            t.addEventListener("mouseup", () => {
                e = !1,
                    t.classList.remove("active")
            }),
            t.addEventListener("mousemove", n => {
                if (!e)
                    return;
                n.preventDefault();
                const r = (n.pageX - t.offsetLeft - i) * 1;
                t.scrollLeft = s - r,
                    t.classList.add("active")
            }),
            t.addEventListener("touchstart", n => {
                e = !0,
                    i = n.touches[0].pageX - t.offsetLeft,
                    s = t.scrollLeft
            }),
            t.addEventListener("touchend", () => {
                e = !1,
                    t.classList.remove("active")
            }),
            t.addEventListener("touchmove", n => {
                if (!e)
                    return;
                const r = (n.touches[0].pageX - t.offsetLeft - i) * 1;
                t.scrollLeft = s - r,
                    t.classList.add("active")
            })
    })
});

/*-----------------number Spinner-------------------*/
// const numberSpinner = document.querySelectorAll(".add-product");
// numberSpinner.forEach((item) => {
//     const increament = item.querySelector(".increament");
//     const decreament = item.querySelector(".decreament");
//     const input = item.querySelector("input");
//     const minValue = input.getAttribute("min");
//     const maxValue = input.getAttribute("max");
//     const stepValue = input.getAttribute("step");

//     input.value = minValue;

//     increament.addEventListener("click", () => {
//         if (+input.value < +maxValue) {
//             input.value = +input.value + +stepValue;
//         }
//     });

//     decreament.addEventListener("click", () => {
//         if (+input.value > +minValue) {
//             input.value = +input.value - +stepValue;
//         }
//     });
// });

const numberSpinner = document.querySelectorAll(".add-product");
numberSpinner.forEach((item) => {
    const increament = item.querySelector(".increament");
    const decreament = item.querySelector(".decreament");
    const input = item.querySelector("input");
    const minValue = +input.getAttribute("min");
    const maxValue = +input.getAttribute("max");
    const stepValue = +input.getAttribute("step");

    // Set initial value
    input.value = minValue;

    // Function to update the decrement icon
    const updateDecrementIcon = () => {
        if (+input.value === minValue) {
            // decreament.textContent = "🗑️"; // Trash icon
            decreament.classList.add("icon-Delete");
            decreament.classList.remove("icon-Minus");
        } else {
            // decreament.textContent = "➖"; // Minus icon
            decreament.classList.add("icon-Minus");
            decreament.classList.remove("icon-Delete");
        }
    };

    // Initialize the decrement icon
    updateDecrementIcon();

    // Increment button
    increament.addEventListener("click", () => {
        if (+input.value < maxValue) {
            input.value = +input.value + stepValue;
            updateDecrementIcon();
        }
    });

    // Decrement button
    decreament.addEventListener("click", () => {
        if (+input.value > minValue) {
            input.value = +input.value - stepValue;
            updateDecrementIcon();
        }
    });
});