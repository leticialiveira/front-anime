<script setup>
defineProps({
        title: String,
        imgUrl:String,
        year: Number,
        shortDescription: String
    })


</script>

<template>
        <article>
            <div class="card-anime">
                <!-- <img src="../assets/image 3.png" alt=""> -->
                <img :src="imgUrl" alt="">
                <div class="back">
                    <!-- <h2>One Piece</h2> -->
                    <h2>{{ title }}</h2>
                    <!-- <p>Monkey D. Luffy e sua tripulação de piratas embarcam em uma busca épica em busca do tesouro supremo, conhecido como One Piece, e para se tornar o Rei dos Piratas.</p> -->
                <p>{{ shortDescription }}</p>    
                </div>
            </div>
        </article>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Megrim&family=Rubik+Pixels&family=Rye&family=Unna&display=swap');


// .card-anime {
//     width: 15vw;
//     height: auto;
//     background-color: aliceblue;

// }

// .header-card {
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
// }

article {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
}

.card-anime {
    position: relative;
    >.back {
        display: block;
        transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
        transition-duration: .5s;
        transition-property: transform, opacity;
        position: absolute;
        opacity: 0;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transform: translateY(-180deg);
    }

    &:hover {
        >.back {
            opacity: 1;
            transform: translate(0deg);
        }
    }

}

.card-anime {
    position: relative;
    display: inline-block;
    margin-right: 2px;
    margin-bottom: 1em;


    >.back {
        display: block;
        color: white;
        width: auto;
        background-size: cover !important;
        background-position: center !important;
        height: 100%;
        padding: 1em 2em;
        background: linear-gradient(358deg, #9A9A9A 0%, rgba(22, 22, 22, 0.70) 100%);
    box-shadow: 0px 10px 4px 0px rgba(0, 0, 0, 0.25);


        h1 {
            font-family: 'Unna', serif;

        }

        p {
            font-size: 0.9125rem;
            line-height: 160%;
            color: #C6C6C6;
            font-family: 'Unna', serif;

        }
    }
}

</style>
