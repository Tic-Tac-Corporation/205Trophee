<template>
    <div class="img-container">
        <img src="@/assets/205dtf.png" alt="205dtf">
    </div>

    <footer>
        <div class="main-container">
            <div>US</div>
            <div>LINKS</div>
            <div>FOLLOW</div>
        </div>

        <div class="extrem-footer">
            <div>2026 All right reserved</div>
            <div>Tic & Tac Corporation</div>
        </div>
    </footer>
</template>

<style>
footer {
    height: 70vh;
    display: flex;
    flex-direction: column;
    background: #141414;
    color: var(--color-background);
}

.img-container {
    display: flex;
    justify-content: center;
}

.img-container img {
    max-width: 40vw;
}


.main-container {
    border: 1px solid blue;
    display: flex;
    gap: 2em;
    padding: 2em;
}

.extrem-footer {
    margin-top: auto;
    padding: 1em;
    display: flex;
    gap: 1em 5em;
    flex-wrap: wrap;
}
</style>