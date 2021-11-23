<template> 
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 10 }})">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">19</span>
            <span class="mx-1 fs-5"> Noviembre</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>
        <div class="entry-description">
            Sit consequat adipisicing pariatur ad fugiat dolore eu ut tempor sit deserunt commodo culpa. Enim nisi laboris consequat aliqua id ea magna officia dolor. Est veniam dolor velit pariatur excepteur sunt cupidatat irure sit est pariatur anim ut elit.
        </div>
  </div>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>

.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
}

.entry-title{
    font-size: 12px;;
}

.entry-description {
        font-size: 14px;
}

</style>