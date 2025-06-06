<script setup lang="ts">
import 'animate.css';
import Navbar from '../components/navbar/index.vue';
import ShortCard from '../components/shortcard/index.vue';
import LongCard from '../components/longcard/index.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isNavbarVisible = ref(true);
let lastScrollY = 0;

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      isNavbarVisible.value = false; // Scrolling down
    } else {
      isNavbarVisible.value = true; // Scrolling up
    }

    lastScrollY = currentScrollY;
  }
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    lastScrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll);
  }
});


</script>

<template>
    <div class="max-w-screen-xl px-4 py-4 mx-auto">
        <div
        class="sticky top-0 z-50 mix-blend-difference transition-transform duration-300"
        :class="isNavbarVisible ? 'translate-y-0' : '-translate-y-full'"
        >
            <Navbar />
        </div>
        <div class="p-4">
            <div class="flex justify-center items-center h-full pt-[30vh] pb-[60vh]">
                <p class="text-4xl">&lt;sean's portfolio&gt;</p> <!-- Big text -->
            </div>
            <div>
                <p class="font-bold" id="work"> work </p>
                <ShortCard title="onwego" subtitle="developer internship" date="10/02/2025 - now" />
                <ShortCard title="anwb" subtitle="customer service employee" date="8/02/2024 - 14/08/2024" />
                <ShortCard title="teckie" subtitle="co-founder" date="10/11/2023 - now" /> <br>
                <p class="font-bold"> interested in becoming my next employer? <a class="contact" href="#contact"> contact me </a> </p>
            </div>
            <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
            <div>
                <p class="font-bold" id="projects">projects</p> <br>
                <div class="flex flex-wrap gap-4 justify-between">
                    <a href="http://kzweer.web.app" ><LongCard image="/img/kzweer.png" name="KZWEER" attributes="Vue 3" date="21/04/2024" /></a>
                    <a href="https://github.com/SeanDevAc/passenopjedier.git"><LongCard image="/img/passenopjedier.jpg" name="passenopjedier" attributes="Laravel" date="04/02/2025" /></a>
                    <LongCard image="/img/klokhuis.jpg" name="Klokhuis Game Studio" attributes="React Native" date="26/01/2025" />
                </div>
            </div>
            <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
            <div>
                <p class="font-bold" id="diplomas"> diplomas </p>
                <ShortCard title="hogeschool leiden propedeuse" subtitle="propedeuse voor opleiding informatica" date="01/09/2025" />
                <ShortCard title="udemy vuejs cursus" subtitle="vuejs cursus van maximilian schwarzmuller" date="18/05/2023" />
                <ShortCard title="de populier havo diploma" subtitle="enm havo opleiding middelbare school" date="21/06/2021" /> <br>
                <p class="font-bold"> interested in becoming my next employer? <a class="contact" href="#contact"> contact me </a> </p>
            </div>
            <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
            <p class="font-bold" id="contact"><a href="#contact">contact me </a></p>
            <div class="flex justify-between items-start flex-wrap gap-4">
                <div>
                    <p><a href="mailto:sean.wakker2.0@gmail.com">email me on: sean.wakker2.0@gmail.com </a></p>
                    <p> call me on: 0636293417 </p>
                </div>

                <div class="flex items-center gap-2">
                    <a href="https://www.linkedin.com/in/sean-wakker-777103177/">
                        <svg class="mediaLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                    
                    <a href="https://github.com/SeanDevAc">
                        <svg class="mediaLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>
                        </svg>
                    </a>
                    
                    <a href="https://www.instagram.com/seanwakker/">
                        <svg class="mediaLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" >
                            <path d="M 15 2 C 7.832 2 2 7.832 2 15 C 2 22.168 7.832 28 15 28 C 22.168 28 28 22.168 28 15 C 28 7.832 22.168 2 15 2 z M 11.666016 6 L 18.332031 6 C 21.457031 6 24 8.5420156 24 11.666016 L 24 18.332031 C 24 21.457031 21.457984 24 18.333984 24 L 11.667969 24 C 8.5429688 24 6 21.457984 6 18.333984 L 6 11.667969 C 6 8.5429688 8.5420156 6 11.666016 6 z M 11.666016 8 C 9.6450156 8 8 9.6459688 8 11.667969 L 8 18.333984 C 8 20.354984 9.6459688 22 11.667969 22 L 18.333984 22 C 20.354984 22 22 20.354031 22 18.332031 L 22 11.666016 C 22 9.6450156 20.354031 8 18.332031 8 L 11.666016 8 z M 19.667969 9.6660156 C 20.035969 9.6660156 20.333984 9.9640312 20.333984 10.332031 C 20.333984 10.700031 20.035969 11 19.667969 11 C 19.299969 11 19 10.700031 19 10.332031 C 19 9.9640312 19.299969 9.6660156 19.667969 9.6660156 z M 15 10 C 17.757 10 20 12.243 20 15 C 20 17.757 17.757 20 15 20 C 12.243 20 10 17.757 10 15 C 10 12.243 12.243 10 15 10 z M 15 12 A 3 3 0 0 0 15 18 A 3 3 0 0 0 15 12 z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import url('../assets/index.css');
</style>
