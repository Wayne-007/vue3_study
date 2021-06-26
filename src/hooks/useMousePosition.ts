import { onBeforeUnmount, onMounted, ref } from "vue";

export default function () {
    const x = ref(-1)
    const y = ref(-1)

    const update = (e: MouseEvent) => {
        x.value = e.pageX;
        y.value = e.pageY;
    };

    onMounted(() => {
        window.addEventListener("click", update);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("click", update);
    });

    return {
        x, y
    }
}
